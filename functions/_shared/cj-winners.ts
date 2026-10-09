/**
 * Extra CJ "winners" (2026-10-02): products picked from trend research, ADDED after the live curated CJ set.
 * Config (data only): ./catalog-data/cj-winners.json
 *   keywords  CJ search words from trend research; each is one CJ listV2 page (50 rows), cached per keyword.
 *   pids      vetted CJ product ids. Only these are shown on the storefront, in this order; everything else a
 *             keyword returns is visible only in the review list (/api/cj-products?winners=review).
 *   minUsd / maxUsd  band for the highest variant cost; include / exclude  name regexes (niche fit) — Norwegian store.
 *   pe.maxUsd / pe.include / pe.exclude  looser Peru (/pe/) filter; does not affect /.
 *   region "pe" on a product  Peru-only; omitted/other = shown on Norwegian store (and also on /pe/).
 *   nameEs / descEs / categoryEs  Spanish (Peru) copy for /pe/.
 *   requireCe        name regex (e.g. electrical items): such candidates need CJ's CE certification flag.
 *   onlyWinners      the storefront CJ set is the winners only (no generic sector set), e.g. Ludispel.
 *   products         server-only snapshot of every vetted pid: Norwegian name and category, CJ sku and
 *                    photo, `nameEn` (CJ name) and `supplierPriceMaxUsd` = the price basis of the highest variant
 *                    cost at selection time. The grid always lists every vetted pid from this snapshot, so it does not
 *                    depend on a warm keyword cache in the visitor's Cloudflare data centre. When the keyword cache
 *                    has the live CJ row, its live cost, sku and photo are used (the Norwegian name is kept for /).
 * Price rule: functions/_shared/pricing.ts (same for display and the encrypted checkout quote).
 * Keywords are refreshed in the background a few at a time and never delay the grid.
 */
import CONFIG from "./catalog-data/cj-winners.json";

type Snapshot = {
  id: string;
  sku?: string;
  name: string;
  nameEn?: string;
  nameEs?: string;
  descEs?: string;
  category?: string;
  categoryEs?: string;
  region?: string;
  image: string;
  supplierPriceMaxUsd: number;
  keyword?: string;
};
type RegionFilters = { minUsd?: number; maxUsd?: number; include?: string; exclude?: string };
type WinnersConfig = {
  keywords?: string[];
  pids?: string[];
  products?: Snapshot[];
  minUsd?: number;
  maxUsd?: number;
  include?: string;
  exclude?: string;
  requireCe?: string;
  onlyWinners?: boolean;
  pe?: RegionFilters;
};

export type WinnerRegion = "no" | "pe";

export type WinnerDeps = {
  apiKey: string;
  origin: string;
  sector: string;
  getToken: (apiKey: string, forceNew?: boolean) => Promise<{ token: string; fresh: boolean }>;
  fetchPage: (token: string, keyword: string, page: number) => Promise<any>;
  flatten: (data: any) => any[];
  accept: (item: any) => boolean;
  toProduct: (item: any, index: number, sector: string) => any;
  waitUntil?: (promise: Promise<unknown>) => void;
};

const CFG = CONFIG as WinnersConfig;
export const WINNERS_ONLY = CFG.onlyWinners === true;
const KEYWORDS = Array.from(new Set((CFG.keywords || []).map((k) => String(k).trim().toLowerCase()).filter(Boolean)));
const PIDS = (CFG.pids || []).map(String);
const PID_SET = new Set(PIDS);
const SNAPSHOT = new Map<string, Snapshot>((CFG.products || []).filter((row) => row && row.id).map((row) => [String(row.id), row]));

type CompiledFilters = {
  minUsd: number;
  maxUsd: number;
  include: RegExp | null;
  exclude: RegExp | null;
};

function compileFilters(base: RegionFilters | undefined, fallback: RegionFilters): CompiledFilters {
  const minUsd = Number(base?.minUsd ?? fallback.minUsd) > 0 ? Number(base?.minUsd ?? fallback.minUsd) : 0;
  const maxUsd = Number(base?.maxUsd ?? fallback.maxUsd) > 0 ? Number(base?.maxUsd ?? fallback.maxUsd) : 1000;
  const includeSrc = base?.include ?? fallback.include;
  const excludeSrc = base?.exclude ?? fallback.exclude;
  return {
    minUsd,
    maxUsd,
    include: includeSrc ? new RegExp(includeSrc, "i") : null,
    exclude: excludeSrc ? new RegExp(excludeSrc, "i") : null,
  };
}

const NO_FILTERS = compileFilters(
  { minUsd: CFG.minUsd, maxUsd: CFG.maxUsd, include: CFG.include, exclude: CFG.exclude },
  { minUsd: 0, maxUsd: 1000 }
);
const PE_FILTERS = compileFilters(CFG.pe, {
  minUsd: CFG.minUsd,
  maxUsd: CFG.maxUsd,
  include: CFG.include,
  exclude: CFG.exclude,
});

/** Names matching requireCe (e.g. electrical items) are only eligible with CJ's CE certification flag. */
const REQUIRE_CE = CFG.requireCe ? new RegExp(CFG.requireCe, "i") : null;
const FRESH_MS = 6 * 3600 * 1000;
const KEEP_SECONDS = 48 * 3600;
const KEYWORDS_PER_REFRESH = 3; // keeps one request well under the 50-subrequest limit (CJ retries included)
const REFRESH_STUCK_MS = 60 * 1000; // a refresh cut off with its request never settles; allow a new one
const CJ_GAP_MS = 1100;

type Entry = { at: number; rows: any[] };
/** All keywords live in ONE cache object: Cloudflare counts every Cache API call as a subrequest (limit 50 per request). */
type Store = { entries: Record<string, Entry> };
let memory: { at: number; value: Store } | null = null;
const MEMORY_MS = 60 * 1000;
let refreshing: Promise<void> | null = null;
let refreshStarted = 0;
let lastError = "";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function storeUrl(origin: string, sector: string) {
  return `${origin}/__cache/cj-winners/v2?sector=${encodeURIComponent(sector)}`;
}

function filtersFor(region: WinnerRegion): CompiledFilters {
  return region === "pe" ? PE_FILTERS : NO_FILTERS;
}

function productRegion(pid: string): WinnerRegion {
  const snap = SNAPSHOT.get(pid);
  return String(snap?.region || "").toLowerCase() === "pe" ? "pe" : "no";
}

/** PE store shows shared (no) + pe-only; Norwegian store never shows pe-only. */
export function allowedInRegion(pid: string, region: WinnerRegion): boolean {
  const r = productRegion(pid);
  if (region === "pe") return r === "pe" || r === "no";
  return r !== "pe";
}

export function parseWinnerRegion(raw: string | null | undefined): WinnerRegion {
  const v = String(raw || "").toLowerCase();
  if (v === "pe" || v === "peru" || v === "pen") return "pe";
  return "no";
}

async function readStore(key: string, fresh = false): Promise<Store> {
  if (!fresh && memory && Date.now() - memory.at < MEMORY_MS) return memory.value;
  let value: Store = memory?.value || { entries: {} };
  try {
    const cache = (globalThis as any).caches?.default;
    const hit = cache ? await cache.match(key) : null;
    if (hit) {
      const parsed = (await hit.json()) as Store;
      if (parsed && parsed.entries && typeof parsed.entries === "object") value = parsed;
    }
  } catch {
    /* keep memory copy */
  }
  memory = { at: Date.now(), value };
  return value;
}

async function writeEntry(key: string, keyword: string, entry: Entry) {
  const base = memory?.value || { entries: {} };
  const value: Store = { entries: { ...base.entries, [keyword]: entry } };
  memory = { at: memory?.at || Date.now(), value };
  try {
    const cache = (globalThis as any).caches?.default;
    if (cache) {
      await cache.put(key, new Response(JSON.stringify(value), {
        headers: { "content-type": "application/json", "cache-control": `public, max-age=${KEEP_SECONDS}` },
      }));
    }
  } catch {
    /* best effort */
  }
}

async function refresh(deps: WinnerDeps, keywords: string[]) {
  let auth = await deps.getToken(deps.apiKey);
  if (auth.fresh) await sleep(CJ_GAP_MS);
  let renewed = auth.fresh;
  for (let i = 0; i < keywords.length; i++) {
    if (i) await sleep(CJ_GAP_MS);
    const keyword = keywords[i];
    let data: any = null;
    try {
      data = await deps.fetchPage(auth.token, keyword, 1);
    } catch (error) {
      lastError = String((error as any)?.message || error).slice(0, 160);
      // The shared CJ account may have replaced this isolate's token: renew once and retry the keyword.
      if (renewed) continue;
      renewed = true;
      try {
        await sleep(CJ_GAP_MS);
        auth = await deps.getToken(deps.apiKey, true);
        await sleep(CJ_GAP_MS);
        data = await deps.fetchPage(auth.token, keyword, 1);
      } catch (retryError) {
        lastError = String((retryError as any)?.message || retryError).slice(0, 160);
        continue;
      }
    }
    /* Keyword refresh uses the Norwegian filter so NO store curation stays strict. */
    const rows = deps.flatten(data)
      .filter((item) => item && item.id && item.bigImage && deps.accept(item))
      .map((item, index) => ({ ...deps.toProduct(item, index, deps.sector), keyword }))
      .filter((row) => eligible(row, "no"));
    await writeEntry(storeUrl(deps.origin, deps.sector), keyword, { at: Date.now(), rows });
  }
}

function eligible(product: any, region: WinnerRegion = "no"): boolean {
  const filters = filtersFor(region);
  const name = String(product?.name || "");
  const cost = Math.max(Number(product?.supplierPriceMaxUsd) || 0, Number(product?.supplierPriceUsd) || 0);
  if (!product?.image || !(cost > 0) || cost < filters.minUsd || cost > filters.maxUsd) return false;
  if (filters.include && !filters.include.test(name)) return false;
  if (filters.exclude && filters.exclude.test(name)) return false;
  if (REQUIRE_CE && REQUIRE_CE.test(name) && !(product?.hasCECertification === true || product?.hasCECertification === "true")) return false;
  return true;
}

/**
 * grid: vetted winners (pids) not already in `skip`, in pid order, with live cost; review: every eligible candidate.
 * Starts a background refresh of stale keywords; returns whatever is cached now (never waits for CJ).
 * `region`: "no" (default) hides pe-only products; "pe" includes shared + pe-only and localizes names to Spanish.
 */
export async function winnerRows(
  deps: WinnerDeps,
  mode: "grid" | "review",
  skip: Set<string> = new Set(),
  region: WinnerRegion = "no"
): Promise<any[]> {
  if (mode === "grid" ? !PID_SET.size : !KEYWORDS.length) return [];
  const byId = new Map<string, any>();
  const stale: string[] = [];
  const store = await readStore(storeUrl(deps.origin, deps.sector));
  for (const keyword of KEYWORDS) {
    const entry = store.entries[keyword];
    if (!entry || Date.now() - entry.at > FRESH_MS) stale.push(keyword);
    for (const row of entry?.rows || []) {
      const id = String(row?.id || "");
      if (id && !byId.has(id)) byId.set(id, row);
    }
  }
  if (stale.length && (!refreshing || Date.now() - refreshStarted > REFRESH_STUCK_MS)) {
    refreshStarted = Date.now();
    refreshing = refresh(deps, stale.slice(0, KEYWORDS_PER_REFRESH))
      .catch((error) => { lastError = String((error as any)?.message || error).slice(0, 160); })
      .finally(() => { refreshing = null; });
    if (deps.waitUntil) deps.waitUntil(refreshing);
  }
  if (mode === "review") {
    return Array.from(byId.values())
      .filter((row) => eligible(row, region))
      .map((row) => ({ ...row, vetted: PID_SET.has(String(row.id)) }));
  }
  const out: any[] = [];
  for (const pid of PIDS) {
    if (skip.has(pid)) continue;
    if (!allowedInRegion(pid, region)) continue;
    const row = gridRow(pid, byId.get(pid), deps.sector, region);
    if (row) out.push(row);
  }
  return out;
}

/** Vetted pid -> storefront row: live CJ row when cached (live cost), else the server-only snapshot. */
function gridRow(pid: string, live: any, sector: string, region: WinnerRegion): any | null {
  const snap = SNAPSHOT.get(pid);
  const liveCost = Math.max(Number(live?.supplierPriceMaxUsd) || 0, Number(live?.supplierPriceUsd) || 0);
  const localize = (row: any) => {
    if (region !== "pe" || !snap) return row;
    const nameEs = String(snap.nameEs || "").trim();
    const descEs = String(snap.descEs || "").trim();
    const catEs = String(snap.categoryEs || "").trim();
    return {
      ...row,
      name: nameEs || row.name,
      description: descEs,
      category: catEs || row.category,
      cat: catEs || row.cat,
      nameNb: snap.name,
      nameEs: nameEs || undefined,
      descEs: descEs || undefined,
      region: productRegion(pid),
    };
  };
  if (live && live.image && liveCost > 0 && (snap || eligible(live, region))) {
    const base = snap
      ? { ...live, name: snap.name, category: snap.category || live.category, cat: snap.category || live.cat }
      : live;
    return localize(base);
  }
  if (!snap || !snap.image || !(Number(snap.supplierPriceMaxUsd) > 0)) return null;
  const cost = Number(snap.supplierPriceMaxUsd);
  return localize({
    id: pid,
    name: String(snap.name).slice(0, 160),
    category: snap.category || sector,
    cat: snap.category || sector,
    sku: String(snap.sku || ""),
    image: String(snap.image),
    supplierPriceUsd: cost,
    supplierPriceMaxUsd: cost,
    brand: "CJ Dropshipping",
    supplier: "CJ Dropshipping",
    provider: "cj",
    hasCECertification: false,
    compliance: "EU/Nordic curated — no fake medical/drug/CE-toy claims",
    keyword: snap.keyword || "",
    region: productRegion(pid),
  });
}

/** Keyword refresh status for the review list. */
export function winnersStatus() {
  return {
    keywords: KEYWORDS.length,
    vetted: PID_SET.size,
    snapshot: SNAPSHOT.size,
    peOnly: Array.from(SNAPSHOT.values()).filter((p) => String(p.region || "").toLowerCase() === "pe").length,
    refreshing: Boolean(refreshing),
    lastError,
    filters: {
      no: { maxUsd: NO_FILTERS.maxUsd, minUsd: NO_FILTERS.minUsd },
      pe: { maxUsd: PE_FILTERS.maxUsd, minUsd: PE_FILTERS.minUsd },
    },
  };
}
