const BASE = "https://api.printify.com/v1";

// Per-store curated catalog — PRIMARY source for storefront (never replace with shared shop dump)
const SELECTED: any[] = [
  {
    "id": "printify-car-accessories-1",
    "sku": "PFY-AUTO-CAP-DRIVER",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Driver Club Cap",
    "category": "Auto Merch",
    "supplierPriceUsd": 8.2,
    "suggestedRetailUsd": 24.9,
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
    "matchType": "cap",
    "sector": "car accessories"
  },
  {
    "id": "printify-car-accessories-2",
    "sku": "PFY-AUTO-CAP-ROADS",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Nordic Roads Cap",
    "category": "Auto Merch",
    "supplierPriceUsd": 8.2,
    "suggestedRetailUsd": 23.9,
    "image": "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80",
    "matchType": "cap",
    "sector": "car accessories"
  },
  {
    "id": "printify-car-accessories-3",
    "sku": "PFY-AUTO-CAP-GARAGE",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Garage Legend Cap",
    "category": "Auto Merch",
    "supplierPriceUsd": 8.2,
    "suggestedRetailUsd": 22.9,
    "image": "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=800&q=80",
    "matchType": "cap",
    "sector": "car accessories"
  },
  {
    "id": "printify-car-accessories-4",
    "sku": "PFY-AUTO-CAP-TORQUE",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Torque Life Cap",
    "category": "Auto Merch",
    "supplierPriceUsd": 8.2,
    "suggestedRetailUsd": 21.9,
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
    "matchType": "cap",
    "sector": "car accessories"
  },
  {
    "id": "printify-car-accessories-5",
    "sku": "PFY-AUTO-HOODIE-DRIVER",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Driver Club Zip Hoodie",
    "category": "Auto Merch",
    "supplierPriceUsd": 18.5,
    "suggestedRetailUsd": 49.9,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    "matchType": "hoodie",
    "sector": "car accessories"
  },
  {
    "id": "printify-car-accessories-6",
    "sku": "PFY-AUTO-HOODIE-NIGHT",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Night Drive Zip Hoodie",
    "category": "Auto Merch",
    "supplierPriceUsd": 18.5,
    "suggestedRetailUsd": 52.9,
    "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
    "matchType": "hoodie",
    "sector": "car accessories"
  },
  {
    "id": "printify-car-accessories-7",
    "sku": "PFY-AUTO-HOODIE-PIT",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Pit Lane Zip Hoodie",
    "category": "Auto Merch",
    "supplierPriceUsd": 18.5,
    "suggestedRetailUsd": 51.5,
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    "matchType": "hoodie",
    "sector": "car accessories"
  },
  {
    "id": "printify-car-accessories-8",
    "sku": "PFY-AUTO-CAP-ROUTE",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Route 66 Nordic Cap",
    "category": "Auto Merch",
    "supplierPriceUsd": 8.2,
    "suggestedRetailUsd": 25.9,
    "image": "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80",
    "matchType": "cap",
    "sector": "car accessories"
  },
  {
    "id": "printify-car-accessories-9",
    "sku": "PFY-AUTO-HOODIE-EV",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "EV Charge Club Hoodie",
    "category": "Auto Merch",
    "supplierPriceUsd": 18.5,
    "suggestedRetailUsd": 54.9,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    "matchType": "hoodie",
    "sector": "car accessories"
  },
  {
    "id": "printify-car-accessories-10",
    "sku": "PFY-AUTO-CAP-SHIFT",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Shift Happens Cap",
    "category": "Auto Merch",
    "supplierPriceUsd": 8.2,
    "suggestedRetailUsd": 20.9,
    "image": "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=800&q=80",
    "matchType": "cap",
    "sector": "car accessories"
  },
  {
    "id": "printify-car-accessories-11",
    "sku": "PFY-AUTO-HOODIE-RALLY",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Winter Rally Zip Hoodie",
    "category": "Auto Merch",
    "supplierPriceUsd": 18.5,
    "suggestedRetailUsd": 53.5,
    "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
    "matchType": "hoodie",
    "sector": "car accessories"
  },
  {
    "id": "printify-car-accessories-12",
    "sku": "PFY-AUTO-CAP-MOBILITY",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Mobility Crew Cap",
    "category": "Auto Merch",
    "supplierPriceUsd": 8.2,
    "suggestedRetailUsd": 24.5,
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
    "matchType": "cap",
    "sector": "car accessories"
  },
  {
    "id": "printify-car-accessories-13",
    "sku": "PFY-AUTO-CAP-APEX",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Apex Drive Cap",
    "category": "Auto Merch",
    "supplierPriceUsd": 8.2,
    "suggestedRetailUsd": 25.5,
    "image": "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80",
    "matchType": "cap",
    "sector": "car accessories"
  },
  {
    "id": "printify-car-accessories-14",
    "sku": "PFY-AUTO-HOODIE-CRUISE",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Midnight Cruise Zip Hoodie",
    "category": "Auto Merch",
    "supplierPriceUsd": 18.5,
    "suggestedRetailUsd": 55.9,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    "matchType": "hoodie",
    "sector": "car accessories"
  },
  {
    "id": "printify-car-accessories-15",
    "sku": "PFY-AUTO-CAP-TRACK",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Track Day Cap",
    "category": "Auto Merch",
    "supplierPriceUsd": 8.2,
    "suggestedRetailUsd": 23.5,
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
    "matchType": "cap",
    "sector": "car accessories"
  }
];

const SECTOR_ALIASES: Record<string, string> = {
  "beauty": "beauty",
  "perfume": "beauty",
  "perfumes": "beauty",
  "skincare": "beauty",
  "toys": "toys",
  "kids": "toys",
  "kid": "toys",
  "children": "toys",
  "electronics": "electronics",
  "tech": "electronics",
  "technology": "electronics",
  "pet supplies": "pet supplies",
  "pets": "pet supplies",
  "pet": "pet supplies",
  "home living": "home living",
  "home": "home living",
  "living": "home living",
  "fitness": "fitness",
  "outdoor": "fitness",
  "sports": "fitness",
  "solar energy": "solar energy",
  "energy": "solar energy",
  "solar": "solar energy",
  "car accessories": "car accessories",
  "car": "car accessories",
  "auto": "car accessories",
  "automotive": "car accessories"
};

function money(value: unknown) {
  const amount = Number(value);
  return Number.isFinite(amount) && amount > 0 ? Math.round(amount * 100) / 100 : 0;
}

function resolveSector(raw: string) {
  const key = String(raw || "").toLowerCase().trim();
  if (!key) return SELECTED[0]?.sector || "beauty";
  if (SECTOR_ALIASES[key]) return SECTOR_ALIASES[key];
  for (const [alias, sector] of Object.entries(SECTOR_ALIASES)) {
    if (key.includes(alias) || alias.includes(key)) return sector;
  }
  return key;
}

function curated(sector: string) {
  return SELECTED
    .filter((p) => !p.sector || String(p.sector).toLowerCase() === sector)
    .map((p, i) => ({
      id: String(p.id || `printify-selected-${i}`),
      sku: String(p.sku || ""),
      supplier: "Printify",
      provider: "printify",
      printifyProductId: String(p.printifyProductId || ""),
      printifyVariantId: String(p.printifyVariantId || ""),
      name: String(p.name || "Printify product"),
      category: String(p.category || sector),
      supplierPriceUsd: money(p.supplierPriceUsd) || money(p.suggestedRetailUsd),
      suggestedRetailUsd: money(p.suggestedRetailUsd) || money(p.supplierPriceUsd),
      image: String(p.image || ""),
      matchType: String(p.matchType || ""),
      sector: String(p.sector || sector),
    }))
    .filter((p) => p.suggestedRetailUsd > 0 && p.name);
}

function haystack(p: any) {
  return [p.name, p.title, p.category, ...(Array.isArray(p.tags) ? p.tags : []), p.sku].join(" ").toLowerCase();
}

async function enrichFromLive(token: string, shopId: string, curatedProducts: any[]) {
  try {
    const apiUrl = new URL(BASE + `/shops/${shopId}/products.json`);
    apiUrl.searchParams.set("limit", "50");
    const response = await fetch(apiUrl, {
      headers: { Authorization: `Bearer ${token}`, "User-Agent": "NordicStore/1.0" },
    });
    if (!response.ok) return curatedProducts;
    const result: any = await response.json();
    const list = Array.isArray(result?.data) ? result.data : Array.isArray(result) ? result : [];
    if (!list.length) return curatedProducts;

    const typeWords: Record<string, string[]> = {
      tote: ["tote", "bag"],
      tee: ["t-shirt", "tshirt", "tee", "shirt"],
      mug: ["mug", "cup", "coffee"],
      crewneck: ["crewneck", "crew neck", "sweatshirt"],
      hoodie: ["hoodie", "zip"],
      poster: ["poster", "print"],
      case: ["case", "phone", "tough"],
      cap: ["cap", "hat"],
    };

    return curatedProducts.map((item) => {
      const words = typeWords[String(item.matchType || "").toLowerCase()] || [];
      const match = list.find((live: any) => {
        const id = String(live?.id || "");
        if (item.printifyProductId && id && id === item.printifyProductId) return true;
        if (!words.length) return false;
        const text = haystack({ name: live?.title, tags: live?.tags, sku: "" });
        return words.some((w) => text.includes(w));
      });
      if (!match) return item;
      const variants = Array.isArray(match.variants) ? match.variants : [];
      const enabled = variants.find((v: any) => v?.is_enabled !== false) || variants[0] || {};
      const images = Array.isArray(match.images) ? match.images : [];
      const image = images.find((img: any) => img?.is_default)?.src || images[0]?.src || item.image;
      const cost = money(enabled.cost);
      const retail = money(enabled.price) || (cost > 0 ? Math.round(cost * 2.2 * 100) / 100 : 0);
      return {
        ...item,
        printifyProductId: String(match.id || item.printifyProductId || ""),
        printifyVariantId: String(enabled.id || item.printifyVariantId || ""),
        sku: String(enabled.sku || item.sku || ""),
        supplierPriceUsd: cost || item.supplierPriceUsd,
        suggestedRetailUsd: retail || item.suggestedRetailUsd,
        image: image || item.image,
        enriched: true,
      };
    });
  } catch (_) {
    return curatedProducts;
  }
}

export async function onRequestGet(context: any) {
  const url = new URL(context.request.url);
  const wanted = url.searchParams.get("q") || url.searchParams.get("sector") || "";
  const defaultSector = String(SELECTED[0]?.sector || "beauty");
  const sector = resolveSector(wanted || defaultSector);
  const headers = {
    "access-control-allow-origin": "*",
    "cache-control": "public, max-age=60",
  };

  // PRIMARY: curated per-store list. Live Printify only enriches — never replaces.
  let products = curated(sector).slice(0, 30);
  const token = context.env.PRINTIFY_API_TOKEN;
  const shopId = context.env.PRINTIFY_SHOP_ID || "28847802";
  if (token && products.length) {
    products = await enrichFromLive(String(token), String(shopId), products);
  }

  return Response.json(
    {
      ok: true,
      supplier: "printify",
      sector,
      query: sector,
      products,
      count: products.length,
      source: "printify-selected-primary",
      markets: ["NO", "EU", "PE"],
    },
    { status: products.length ? 200 : 503, headers }
  );
}
