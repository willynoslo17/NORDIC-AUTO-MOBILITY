# Motrull — Auto & Mobility

Storefront brand: **Motrull** · https://motrull.no/ · Motrull er et varemerke fra ML Internasjonal. (Repo / Pages project: `NORDIC-AUTO-MOBILITY`, formerly "Nordic Auto & Mobility".)

International storefront for Norway, Europe and Peru. Responsive catalog, market localization, cart, delivery options, test checkout and supplier-ready API endpoints.
## Direct commerce activation

The store has its own `/api/cj-products` catalog endpoint and a validated `/api/order` endpoint. Configure `CJ_API_KEY` and the shared `MAKE_ORDERS_WEBHOOK` in Netlify; credentials must never be committed.

The storefront remains in non-charging request mode until supplier stock, landed cost, delivery time, product compliance and a payment provider are verified. Before enabling payment for a SKU, record its manufacturer, responsible economic operator, safety warnings, destination availability, current shipping quote, VAT treatment and return address.

**Checkout is OFF** (`CHECKOUT_ENABLED = false`). Per-SKU stock, plazo and cumplimiento for Motrull auto/POD products: [`PRODUCT-READINESS.md`](PRODUCT-READINESS.md) and [`catalog/product-readiness.json`](catalog/product-readiness.json). No SKU is `chargeReady` until blockers are cleared with real supplier data — do not invent manufacturers, CE marks or API keys.

## Separate supplier catalogs (no blend)

- Storefront switcher: **CJ | Printify | Gelato | Printful** — `window.nordicCatalogs` keeps arrays separate; default UI shows CJ only.
- Printify / Gelato / Printful use the same model as CJ: live API when env keys are set, local `catalog/*-products.json` (empty `[]`) as fallback only.
- Env: `PRINTIFY_API_TOKEN`, `GELATO_API_KEY`, `PRINTFUL_API_TOKEN` (plus existing `CJ_API_KEY`). See `STRIPE-SETUP.md`.
- German Drop remains authorized-manual / shared-account only (no fake DE catalog). CJ catalog unchanged.

