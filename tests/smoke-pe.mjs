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
const index = read("index.html");
const winners = read("functions/_shared/catalog-data/cj-winners.json");

assert(pe.includes('lang="es-PE"'), "pe/index.html is Spanish (es-PE)");
assert(/IGV|igv/.test(pe) && pe.includes("18"), "pe page mentions IGV 18%");
assert(pe.includes("PEN") || pe.includes("currency:'PEN'"), "pe page uses PEN");
assert(pe.includes('id="regionSwitch"'), "pe header has region switch");
assert(pe.includes("/region-switch.js"), "pe loads region-switch.js");
assert(pe.includes("/supplier-bridge.js") && pe.includes("/commerce-runtime.js"), "pe loads shared commerce scripts with absolute paths");
assert(!/CHECKOUT_ENABLED\s*=\s*true/.test(pe), "pe page does not enable checkout locally");

assert(region.includes("motrull-region"), "region-switch uses localStorage key motrull-region");
assert(region.includes("/pe/"), "region-switch knows /pe/ path");
assert(region.includes("europa") && region.includes("peru"), "region-switch has Europa/Perú");

assert(bridge.includes("/catalog/selected-products.json"), "supplier-bridge uses absolute catalog paths");
assert(/const CHECKOUT_ENABLED = false/.test(runtime), "commerce-runtime CHECKOUT_ENABLED=false");
assert(/const CHECKOUT_ENABLED = false/.test(checkout), "create-checkout-session CHECKOUT_ENABLED=false");

assert(index.includes('id="regionSwitch"') || index.includes("region-switch.js"), "Norwegian index wires region switch");
assert(index.includes("lang=\"nb\""), "Norwegian store html lang unchanged");
assert(/Orden og komfort i bilen/.test(index), "Norwegian hero copy unchanged");

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

let winnersJson;
try {
  winnersJson = JSON.parse(winners);
  assert(winnersJson.onlyWinners === true, "cj-winners.json onlyWinners remains true");
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
