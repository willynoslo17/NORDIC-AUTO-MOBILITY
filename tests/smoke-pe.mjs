#!/usr/bin/env node
/**
 * Smoke checks for Motrull /pe/ (Peru) and safety invariants.
 * Run: node tests/smoke-pe.mjs
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const fail = [];
const ok = [];

function read(rel) {
  const p = join(root, rel);
  if (!existsSync(p)) {
    fail.push("missing file: " + rel);
    return "";
  }
  return readFileSync(p, "utf8");
}

function assert(cond, msg) {
  if (cond) ok.push(msg);
  else fail.push(msg);
}

const pe = read("pe/index.html");
const region = read("region-switch.js");
const bridge = read("supplier-bridge.js");
const runtime = read("commerce-runtime.js");
const checkout = read("functions/api/create-checkout-session.ts");
const winnersTs = read("functions/_shared/cj-winners.ts");
const cjApi = read("functions/api/cj-products.ts");
const index = read("index.html");
const winners = read("functions/_shared/catalog-data/cj-winners.json");

assert(pe.includes('lang="es-PE"'), "pe/index.html is Spanish (es-PE)");
assert(/IGV|igv/.test(pe) && pe.includes("18"), "pe page mentions IGV 18%");
assert(pe.includes("PEN") || pe.includes("currency:'PEN'"), "pe page uses PEN");
assert(pe.includes('id="regionSwitch"'), "pe header has region switch");
assert(pe.includes("/region-switch.js"), "pe loads region-switch.js");
assert(pe.includes("/supplier-bridge.js") && pe.includes("/commerce-runtime.js"), "pe loads shared commerce scripts with absolute paths");
assert(!/CHECKOUT_ENABLED\s*=\s*true/.test(pe), "pe page does not enable checkout locally");
assert(pe.includes('region:"pe"') || pe.includes("region:\"pe\"") || pe.includes("region:'pe'"), "pe loadNordicCatalog requests region=pe");
assert(pe.includes("pe-desc") || pe.includes("description"), "pe product cards can show Spanish descriptions");

assert(region.includes("motrull-region"), "region-switch uses localStorage key motrull-region");
assert(region.includes("/pe/"), "region-switch knows /pe/ path");
assert(region.includes("europa") && region.includes("peru"), "region-switch has Europa/Perú");
assert(region.includes("mountMergedMarket") || region.includes("Merged market"), "region-switch supports merged market control on /");

assert(bridge.includes("/catalog/selected-products.json"), "supplier-bridge uses absolute catalog paths");
assert(bridge.includes("region=") && bridge.includes("storefrontRegion"), "supplier-bridge sends region to CJ API");
assert(/const CHECKOUT_ENABLED = false/.test(runtime), "commerce-runtime CHECKOUT_ENABLED=false");
assert(/const CHECKOUT_ENABLED = false/.test(checkout), "create-checkout-session CHECKOUT_ENABLED=false");

/* Norwegian header: one control (market) that includes Perú — no separate regionSwitch. */
assert(!index.includes('id="regionSwitch"'), "Norwegian index has no separate regionSwitch");
assert(index.includes('id="market"') && index.includes("Perú"), "Norwegian market select includes Perú");
assert(index.includes("location.assign('/pe/')") || index.includes('location.assign("/pe/")'), "Norwegian market PE navigates to /pe/");
assert(index.includes("lang=\"nb\""), "Norwegian store html lang unchanged");
assert(/Orden og komfort i bilen/.test(index), "Norwegian hero copy unchanged");
assert(index.includes("region-switch.js"), "Norwegian index still loads region-switch.js");

assert(winnersTs.includes("allowedInRegion") && winnersTs.includes('region === "pe"'), "cj-winners.ts filters by region");
assert(winnersTs.includes("PE_FILTERS") || winnersTs.includes("pe."), "cj-winners.ts has PE filter set");
assert(cjApi.includes("parseWinnerRegion") && cjApi.includes("region"), "cj-products API accepts region param");

const legalPages = [
  ["pe/terminos.html", "Términos", "IGV"],
  ["pe/privacidad.html", "MARTINEZ LOZANO INTERNASJONAL HANDEL", "responsable"],
  ["pe/envios.html", "Envío a todo el Perú", "S/ 14"],
  ["pe/cambios.html", "devoluciones", "support@motrull.no"],
  ["pe/libro-reclamaciones.html", "Libro de Reclamaciones", "mailto:support@motrull.no"],
];
for (const [file, a, b] of legalPages) {
  const text = read(file);
  assert(text.includes(a) && text.includes(b), file + " has required legal content");
  assert(text.includes("regionSwitch") || text.includes("region-switch.js"), file + " has region switch");
}
assert(existsSync(join(root, "pe/legal.css")), "pe/legal.css exists");
assert(pe.includes("/pe/libro-reclamaciones"), "pe homepage links Libro de Reclamaciones");

const lima = read("pe/lima.css");
assert(lima.includes("--sun") && lima.includes("Archivo Black"), "lima.css defines Lima palette/fonts");
assert(lima.includes(".pe-desc"), "lima.css styles Spanish product descriptions");
assert(pe.includes("/pe/lima.css"), "pe storefront loads lima.css");
assert(pe.includes("Yape") && pe.includes("Plin") && /pr[oó]ximamente/i.test(pe), "pe shows Yape/Plin próximamente");
assert(pe.includes("badge stock") && pe.includes("Envío a todo el Perú"), "pe products show stock and Peru shipping badges");
assert(pe.includes("reseñas") || pe.includes("reviews"), "pe products show reviews");
assert(!index.includes("lima.css"), "Norwegian store does not load lima.css");

let winnersJson;
try {
  winnersJson = JSON.parse(winners);
  assert(winnersJson.onlyWinners === true, "cj-winners.json onlyWinners remains true");
  assert(Array.isArray(winnersJson.pids) && winnersJson.pids.length >= 70, "cj-winners has expanded vetted pids");
  assert(Array.isArray(winnersJson.products) && winnersJson.products.length === winnersJson.pids.length, "every winner pid has a snapshot product");
  assert(Number(winnersJson.maxUsd) === 33.3, "Norwegian maxUsd restored to 33.3");
  const ex = String(winnersJson.exclude || "").toLowerCase();
  assert(ex.includes("led") && ex.includes("lamp") && ex.includes("light"), "NO exclude blocks LED/lamp/lights");
  assert(ex.includes("perfume") && ex.includes("fragrance"), "NO exclude blocks perfume/fragrance");
  assert(ex.includes("motorcycle") && ex.includes("bike") && ex.includes("scooter") && ex.includes("motor"), "NO exclude blocks bike/motor/motorcycle/scooter");
  assert(winnersJson.pe && Number(winnersJson.pe.maxUsd) === 35, "PE looser maxUsd is 35");
  assert(String(winnersJson.pe.include || "").toLowerCase().includes("motorcycle"), "PE include allows motorcycle");
  assert(!String(winnersJson.pe.exclude || "").toLowerCase().includes("perfume"), "PE exclude does not block perfume");
  const peOnly = winnersJson.products.filter((p) => String(p.region || "").toLowerCase() === "pe");
  assert(peOnly.length === 20, "exactly 20 pe-only products");
  assert(peOnly.every((p) => /moto|scooter|decor|ornament|perfume|fragrance|pig|kitten|feather|bright|light|visor|armrest|organizer|mirror|pedal|grip|mat|glasses|storage|clip|bar/i.test(String(p.nameEn || "") + " " + String(p.keyword || ""))), "pe-only set is moto/scooter/decor oriented");
  const forPe = winnersJson.products; // all products can appear on /pe/
  assert(forPe.every((p) => String(p.nameEs || "").trim().length > 2 && String(p.descEs || "").trim().length > 5), "every product has Spanish nameEs + descEs for /pe/");
  assert(forPe.every((p) => !/[æøåÆØÅ]/.test(String(p.nameEs || ""))), "Spanish names have no Norwegian letters");
  const blob = JSON.stringify(winnersJson).toLowerCase();
  assert(blob.includes("motorcycle") || blob.includes("moto"), "cj-winners includes moto products/keywords");
  assert(!blob.includes("cj_api_key") && !blob.includes("sk_live") && !blob.includes("sk_test"), "winners file has no secrets");
} catch (e) {
  fail.push("cj-winners.json parse: " + e.message);
}

console.log("PASS " + ok.length);
ok.forEach((m) => console.log("  ✓ " + m));
if (fail.length) {
  console.log("FAIL " + fail.length);
  fail.forEach((m) => console.log("  ✗ " + m));
  process.exit(1);
}
console.log("All smoke checks passed.");
