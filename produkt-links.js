/* Maps product id/name → static /produkt/<slug> URLs from catalog/static-products.json */
(function () {
  "use strict";
  let mapById = {};
  let mapByName = {};
  function ready(cb) {
    if (window.NORDIC_PRODUKT_READY) return cb();
    window.addEventListener("nordic:produkt-map", () => cb(), { once: true });
  }
  async function load() {
    try {
      const res = await fetch("/catalog/static-products.json", { cache: "force-cache" });
      const rows = await res.json();
      (rows || []).forEach((row) => {
        if (!row || !row.url) return;
        if (row.id != null) mapById[String(row.id)] = row.url;
        if (row.name) mapByName[String(row.name).toLowerCase()] = row.url;
      });
    } catch (_) {}
    window.NORDIC_PRODUKT_READY = true;
    window.nordicProduktUrl = function (item) {
      if (!item) return "";
      const id = item.id != null ? String(item.id) : "";
      const name = String(item.name || item.n || "").toLowerCase();
      return mapById[id] || mapByName[name] || "";
    };
    window.dispatchEvent(new Event("nordic:produkt-map"));
    enhanceCards();
  }
  function enhanceCards() {
    document.querySelectorAll("#products .product, #products .card").forEach((card) => {
      if (card.dataset.produktLinked) return;
      const title = card.querySelector("h3,b");
      const img = card.querySelector("img");
      const name = (title && title.textContent || "").trim();
      const url = window.nordicProduktUrl({ name: name, id: card.getAttribute("data-id") });
      if (!url || !title) return;
      card.dataset.produktLinked = "1";
      const a = document.createElement("a");
      a.href = url;
      a.style.color = "inherit";
      a.style.textDecoration = "none";
      title.parentNode.insertBefore(a, title);
      a.appendChild(title);
      if (img && !img.closest("a")) {
        const ai = document.createElement("a");
        ai.href = url;
        ai.setAttribute("aria-label", name);
        img.parentNode.insertBefore(ai, img);
        ai.appendChild(img);
      }
    });
  }
  const obs = new MutationObserver(() => enhanceCards());
  if (document.getElementById("products")) obs.observe(document.getElementById("products"), { childList: true });
  window.addEventListener("nordic:catalog-updated", () => setTimeout(enhanceCards, 0));
  window.addEventListener("nordic:catalog-complete", () => setTimeout(enhanceCards, 0));
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", load);
  else load();
  window.nordicEnhanceProduktLinks = enhanceCards;
  ready(enhanceCards);
})();
