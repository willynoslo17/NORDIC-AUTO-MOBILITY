/** Per-store identity. This is the only checkout/webhook file that differs between the NORDIC-* repos. */
export const STORE = {
  slug: "nordic-auto-mobility",
  brand: "Motrull",
  domain: "motrull.no",
  siteUrl: "https://motrull.no/",
  /** Catalog sector used by the Gelato/Printful endpoints (never taken from the query string). */
  sector: "car accessories",
} as const;
