/* Motrull region switch: Europa ↔ Perú (localStorage + header).
   On / the currency picker (#market) doubles as region control (NO/EU stay, PE → /pe/).
   On /pe/ a dedicated #regionSwitch (or #market) navigates back to Europa. */
(function () {
  "use strict";

  const KEY = "motrull-region";
  const EUROPA = "europa";
  const PERU = "peru";
  const EUROPA_PATH = "/";
  const PERU_PATH = "/pe/";

  function read() {
    try {
      const v = String(localStorage.getItem(KEY) || "").toLowerCase();
      if (v === PERU || v === "pe") return PERU;
      if (v === EUROPA || v === "eu" || v === "europe") return EUROPA;
    } catch (_) {}
    return "";
  }

  function write(region) {
    try { localStorage.setItem(KEY, region); } catch (_) {}
  }

  function onPeruPath() {
    const p = location.pathname.replace(/\/+$/, "") || "/";
    return p === "/pe" || p.indexOf("/pe/") === 0;
  }

  function go(region) {
    write(region);
    const wantPeru = region === PERU;
    if (wantPeru && !onPeruPath()) {
      location.assign(PERU_PATH);
      return;
    }
    if (!wantPeru && onPeruPath()) {
      location.assign(EUROPA_PATH);
    }
  }

  /** Dedicated Europa/Perú select (used on /pe/ and legal pages). */
  function mountRegionSelect(select) {
    if (!select || select.dataset.regionBound === "1") return;
    select.dataset.regionBound = "1";
    const current = onPeruPath() ? PERU : EUROPA;
    if (!select.options.length) {
      select.innerHTML =
        '<option value="' + EUROPA + '">Europa</option>' +
        '<option value="' + PERU + '">Perú</option>';
    }
    select.value = current;
    select.addEventListener("change", function () {
      go(select.value === PERU ? PERU : EUROPA);
    });
  }

  /**
   * Merged market/region control on the Norwegian storefront (#market with NO/EU/PE).
   * Selecting PE navigates to /pe/; NO/EU only update currency (page script) and store europa.
   */
  function mountMergedMarket(select) {
    if (!select || select.dataset.regionBound === "1") return;
    select.dataset.regionBound = "1";
    if (onPeruPath()) {
      if ([].some.call(select.options, (o) => o.value === "PE")) select.value = "PE";
    }
    select.addEventListener("change", function () {
      if (select.value === "PE" || select.value === "peru") {
        go(PERU);
        return;
      }
      write(EUROPA);
      /* Currency change is handled by the page's own #market onchange. */
    });
  }

  function ensureHeaderSelect() {
    const region = document.getElementById("regionSwitch");
    if (region) {
      mountRegionSelect(region);
      return region;
    }
    const market = document.getElementById("market");
    if (market && [].some.call(market.options || [], (o) => o.value === "PE" || o.value === "peru")) {
      mountMergedMarket(market);
      return market;
    }
    /* Fallback: inject a simple region switch if neither control exists (legal pages). */
    const nav = document.querySelector(".navright") || document.querySelector(".nav");
    if (!nav) return null;
    const select = document.createElement("select");
    select.id = "regionSwitch";
    select.className = "control marketSel";
    select.setAttribute("aria-label", onPeruPath() ? "Región" : "Region / Región");
    select.innerHTML =
      '<option value="' + EUROPA + '">Europa</option>' +
      '<option value="' + PERU + '">Perú</option>';
    nav.insertBefore(select, nav.firstChild);
    mountRegionSelect(select);
    return select;
  }

  function init() {
    if (onPeruPath()) write(PERU);
    ensureHeaderSelect();
  }

  window.MotrullRegion = { KEY, read, write, go, init, onPeruPath };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
