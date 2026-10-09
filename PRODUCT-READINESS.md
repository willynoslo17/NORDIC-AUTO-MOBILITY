# Motrull — product readiness (stock, plazo, cumplimiento)

**Store:** Motrull · https://motrull.no/ · repo `NORDIC-AUTO-MOBILITY`  
**Documented:** 2026-10-09  
**Checkout:** OFF (`CHECKOUT_ENABLED = false`). No SKU is charge-ready.  
**Keys:** Do not invent or commit API keys; configure only real env values in Cloudflare/Netlify.

This file records stock, delivery time (plazo) and compliance (cumplimiento) for each curated auto/POD product **before** charging is enabled. Machine-readable copy: [`catalog/product-readiness.json`](catalog/product-readiness.json).

## Gate (from README)

Store stays in non-charging mode until supplier stock, landed cost, delivery time, product compliance and a payment provider are verified. Per SKU record: manufacturer, responsible economic operator, safety warnings, destination availability, shipping quote, VAT treatment, return address.

## Seller / returns / VAT

- **Seller:** Martinez Lozano Internasjonal Handel, org.nr 935 407 095 MVA
- **Address / returns:** Norbygata 19, 0187 Oslo, Norge (returadresse bekreftes på e-post ved angrerett; se /angrerett)
- **VAT NO:** 25% MVA included in NOK retail price
- **Flat shipping:** NO 79 NOK (5–20 d); EU €7.90 (5–20 d); PE S/ 14 (10–25 d)

## Summary

| Scope | Count |
| --- | ---: |
| SKUs documented | 46 |
| Charge-ready | 0 |
| CJ in stock (snapshot) | 30 |
| CJ with compliance blockers | 30 |
| Printify linked | 16 |
| Gelato / Printful lines | 0 / 0 (empty catalogs) |

## CJ Dropshipping (selected)

Inventory figures are from the server snapshot `functions/_shared/catalog-data/cj-selected.json` (`warehouseInventory`). Manufacturer names are **not** in that feed — left blank on purpose (no invention). All CJ lines have `chargeReady: false`.

| SKU | Stock | Plazo (NO) | Kind / cumplimiento | Blockers | Charge |
| --- | ---: | --- | --- | --- | --- |
| `CJQT1141499` | 216747 | 8–20 virkedager | car-fragrance: Car fragrance / aromatherapy accessory. Not sold as cosmetic, medicine or air-purifier. No… | fragrance-chemical-compliance-unverified | no |
| `CJQCNBQC00222` | 64033 | 8–20 virkedager | organizer-accessory: Organizer / clip / case accessory. General consumer good; not a child restraint or safety … | manufacturer-unverified | no |
| `CJQC1609541` | 89850 | 8–20 virkedager | car-fragrance: Car fragrance / aromatherapy accessory. Not sold as cosmetic, medicine or air-purifier. No… | fragrance-chemical-compliance-unverified | no |
| `CJQC1137942` | 400000 | 8–20 virkedager | inflatable-comfort: Inflatable car mattress/bed. General consumer good; not a child product or medical device.… | manufacturer-unverified | no |
| `CJQCQCQC01026` | 2378478 | 8–20 virkedager | interior-decor: Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. S… | manufacturer-unverified | no |
| `CJQC1538153` | 92855 | 8–20 virkedager | inflatable-comfort: Inflatable car mattress/bed. General consumer good; not a child product or medical device.… | manufacturer-unverified | no |
| `CJQCQCQC01516` | 140000 | 8–20 virkedager | interior-decor: Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. S… | manufacturer-unverified | no |
| `CJQCQCQC02124` | 50000 | 8–20 virkedager | interior-decor: Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. S… | manufacturer-unverified | no |
| `CJQT1419085` | 96367 | 8–20 virkedager | interior-decor: Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. S… | manufacturer-unverified | no |
| `CJQC1734065` | 98861 | 8–20 virkedager | car-fragrance: Car fragrance / aromatherapy accessory. Not sold as cosmetic, medicine or air-purifier. No… | fragrance-chemical-compliance-unverified | no |
| `CJQCQCQC02233` | 30001 | 8–20 virkedager | organizer-accessory: Organizer / clip / case accessory. General consumer good; not a child restraint or safety … | manufacturer-unverified | no |
| `CJQT1082623` | 560000 | 8–20 virkedager | interior-decor: Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. S… | manufacturer-unverified | no |
| `CJQC1130069` | 120000 | 8–20 virkedager | interior-decor: Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. S… | manufacturer-unverified | no |
| `CJQC1762001` | 14525 | 8–20 virkedager | interior-decor: Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. S… | manufacturer-unverified | no |
| `CJQCQCQC00362` | 34550 | 8–20 virkedager | car-fragrance: Car fragrance / aromatherapy accessory. Not sold as cosmetic, medicine or air-purifier. No… | fragrance-chemical-compliance-unverified | no |
| `CJQC1022963` | 60000 | 8–20 virkedager | interior-decor: Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. S… | manufacturer-unverified | no |
| `CJQT1385259` | 454384 | 8–20 virkedager | interior-decor: Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. S… | manufacturer-unverified | no |
| `CJQC1528710` | 123367 | 8–20 virkedager | organizer-accessory: Organizer / clip / case accessory. General consumer good; not a child restraint or safety … | manufacturer-unverified | no |
| `CJQC1703890` | 95786 | 8–20 virkedager | interior-decor: Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. S… | manufacturer-unverified | no |
| `CJQCQCQT00264` | 11051 | 8–20 virkedager | electrical-or-powered: Powered / electrical / lighting accessory. EEA sale typically needs applicable CE/marking … | electrical-ce-unverified | no |
| `CJYD2100740` | 94731 | 8–20 virkedager | organizer-accessory: Organizer / clip / case accessory. General consumer good; not a child restraint or safety … | manufacturer-unverified | no |
| `CJYD2421252` | 27377 | 8–20 virkedager | organizer-accessory: Organizer / clip / case accessory. General consumer good; not a child restraint or safety … | manufacturer-unverified | no |
| `CJQCQCQC01314` | 12585 | 8–20 virkedager | interior-decor: Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. S… | manufacturer-unverified | no |
| `CJQCQCQC01533` | 40000 | 8–20 virkedager | interior-decor: Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. S… | manufacturer-unverified | no |
| `CJQT1564811` | 25497 | 8–20 virkedager | vehicle-part-adjacent: Vehicle filter-adjacent accessory. Compatibility not guaranteed; not a regulated safety-cr… | fitment-unverified, manufacturer-unverified | no |
| `CJQC1251458` | 117684 | 8–20 virkedager | car-fragrance: Car fragrance / aromatherapy accessory. Not sold as cosmetic, medicine or air-purifier. No… | fragrance-chemical-compliance-unverified | no |
| `CJMT1159060` | 92157 | 8–20 virkedager | electrical-or-powered: Powered / electrical / lighting accessory. EEA sale typically needs applicable CE/marking … | electrical-ce-unverified | no |
| `CJQC1225218` | 86709 | 8–20 virkedager | interior-decor: Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. S… | manufacturer-unverified | no |
| `CJYD1992006` | 78495 | 8–20 virkedager | car-fragrance: Car fragrance / aromatherapy accessory. Not sold as cosmetic, medicine or air-purifier. No… | fragrance-chemical-compliance-unverified | no |
| `CJQT1374937` | 330875 | 8–20 virkedager | interior-decor: Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. S… | manufacturer-unverified | no |

### CJ detail

#### CJQT1141499 — Car Accessories For Women's Aromatherapy Car Interior Accessories

- **ID:** `1396732241480126464`
- **Stock:** 216747 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 2.7 → retail **99 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Car fragrance / aromatherapy accessory. Not sold as cosmetic, medicine or air-purifier. No CLP/SDS or fragrance allergen dossier verified in feed.
- **Safety:** Do not ingest; keep away from eyes and children; May cause allergic reaction; ventilate cabin if overpowering; Not a medical or air-quality device
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, CLP/labeling if mixture, SDS if required, EU responsible person for fragrance mixture if applicable
- **Blockers:** fragrance-chemical-compliance-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQCNBQC00222 — Car accessories armrest box pad

- **ID:** `992A4F82-5A1E-4C7A-AAEB-A6796BD6688D`
- **Stock:** 64033 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 3.44 → retail **99 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Organizer / clip / case accessory. General consumer good; not a child restraint or safety device.
- **Safety:** Do not block airbags, vents or driving controls; Secure loose items while driving
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer
- **Blockers:** manufacturer-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQC1609541 — Car Mounted Perfume Accessories Air Conditioner Air Outlet Perfume Accessories

- **ID:** `1590664411046490112`
- **Stock:** 89850 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 1.78 → retail **99 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Car fragrance / aromatherapy accessory. Not sold as cosmetic, medicine or air-purifier. No CLP/SDS or fragrance allergen dossier verified in feed.
- **Safety:** Do not ingest; keep away from eyes and children; May cause allergic reaction; ventilate cabin if overpowering; Not a medical or air-quality device
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, CLP/labeling if mixture, SDS if required, EU responsible person for fragrance mixture if applicable
- **Blockers:** fragrance-chemical-compliance-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQC1137942 — Inflatable Car Mattress SUV Inflatable Car Multifunctional Car Inflatable Bed Car Accessories Inflatable Bed

- **ID:** `1395619819377790976`
- **Stock:** 400000 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 13.39 → retail **369 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Inflatable car mattress/bed. General consumer good; not a child product or medical device. No CE/toy claims in listing.
- **Safety:** Risk of suffocation for infants — not a child bed; Do not block airbags or seatbelts; park safely before use; Check max load and vehicle fit before use
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, material composition, age grading if any
- **Blockers:** manufacturer-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQCQCQC01026 — Car Interior Decoration Accessories

- **ID:** `5356C6D7-50F4-47E7-99B2-B1A76E006E35`
- **Stock:** 2378478 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 1.75 → retail **99 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. Small parts may present choking hazard.
- **Safety:** Small parts — choking hazard for children; Do not place where it impairs driving view or airbags; Adhesives may mark surfaces
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, material composition (esp. metal/paint)
- **Blockers:** manufacturer-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQC1538153 — Inflatable Bed For Hatchback Car Accessories

- **ID:** `1555081588743090176`
- **Stock:** 92855 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 27.2 → retail **739 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Inflatable car mattress/bed. General consumer good; not a child product or medical device. No CE/toy claims in listing.
- **Safety:** Risk of suffocation for infants — not a child bed; Do not block airbags or seatbelts; park safely before use; Check max load and vehicle fit before use
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, material composition, age grading if any
- **Blockers:** manufacturer-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQCQCQC01516 — Bright bar car accessories

- **ID:** `92388C83-2A19-4717-9663-B57B36AABAC2`
- **Stock:** 140000 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 2.53 → retail **99 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. Small parts may present choking hazard.
- **Safety:** Small parts — choking hazard for children; Do not place where it impairs driving view or airbags; Adhesives may mark surfaces
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, material composition (esp. metal/paint)
- **Blockers:** manufacturer-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQCQCQC02124 — Creative feather car pendant safety car accessories

- **ID:** `20656A2D-FB3F-44DB-BD0D-ACCB3DA13A76`
- **Stock:** 50000 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 1.35 → retail **99 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. Small parts may present choking hazard.
- **Safety:** Small parts — choking hazard for children; Do not place where it impairs driving view or airbags; Adhesives may mark surfaces
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, material composition (esp. metal/paint)
- **Blockers:** manufacturer-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQT1419085 — Car Door Handle Decorative Sticker Accessories

- **ID:** `1494570839587295232`
- **Stock:** 96367 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 11.4 → retail **309 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. Small parts may present choking hazard.
- **Safety:** Small parts — choking hazard for children; Do not place where it impairs driving view or airbags; Adhesives may mark surfaces
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, material composition (esp. metal/paint)
- **Blockers:** manufacturer-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQC1734065 — Perfume Car Fragrance Accessories Decorate

- **ID:** `1646729003237122048`
- **Stock:** 98861 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 0.53 → retail **99 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Car fragrance / aromatherapy accessory. Not sold as cosmetic, medicine or air-purifier. No CLP/SDS or fragrance allergen dossier verified in feed.
- **Safety:** Do not ingest; keep away from eyes and children; May cause allergic reaction; ventilate cabin if overpowering; Not a medical or air-quality device
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, CLP/labeling if mixture, SDS if required, EU responsible person for fragrance mixture if applicable
- **Blockers:** fragrance-chemical-compliance-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQCQCQC02233 — Car Sun Visor Clip Car Accessories

- **ID:** `F540EB1A-3DE5-4A8B-821B-9C94275CAEF5`
- **Stock:** 30001 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 1.47 → retail **99 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Organizer / clip / case accessory. General consumer good; not a child restraint or safety device.
- **Safety:** Do not block airbags, vents or driving controls; Secure loose items while driving
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer
- **Blockers:** manufacturer-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQT1082623 — Car Ornaments Motorcycle Cute Car Center Console Accessories Car Cartoon

- **ID:** `1382927992921133056`
- **Stock:** 560000 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 1.03 → retail **99 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. Small parts may present choking hazard.
- **Safety:** Small parts — choking hazard for children; Do not place where it impairs driving view or airbags; Adhesives may mark surfaces
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, material composition (esp. metal/paint)
- **Blockers:** manufacturer-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQC1130069 — Helicopter Car Accessories Ornaments Inside The Car

- **ID:** `1393469266648502272`
- **Stock:** 120000 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 4.2 → retail **119 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. Small parts may present choking hazard.
- **Safety:** Small parts — choking hazard for children; Do not place where it impairs driving view or airbags; Adhesives may mark surfaces
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, material composition (esp. metal/paint)
- **Blockers:** manufacturer-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQC1762001 — Car Interior Decoration Glasses Case Accessories

- **ID:** `1659944637399838720`
- **Stock:** 14525 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 7.43 → retail **209 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. Small parts may present choking hazard.
- **Safety:** Small parts — choking hazard for children; Do not place where it impairs driving view or airbags; Adhesives may mark surfaces
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, material composition (esp. metal/paint)
- **Blockers:** manufacturer-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQCQCQC00362 — Car air conditioning aromatherapy accessories

- **ID:** `F5C82C5D-A18C-4E06-853D-D756B1531AC8`
- **Stock:** 34550 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 5.17 → retail **149 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Car fragrance / aromatherapy accessory. Not sold as cosmetic, medicine or air-purifier. No CLP/SDS or fragrance allergen dossier verified in feed.
- **Safety:** Do not ingest; keep away from eyes and children; May cause allergic reaction; ventilate cabin if overpowering; Not a medical or air-quality device
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, CLP/labeling if mixture, SDS if required, EU responsible person for fragrance mixture if applicable
- **Blockers:** fragrance-chemical-compliance-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQC1022963 — Retro Cute Kitten Car Ornaments Accessories

- **ID:** `1365487142511448064`
- **Stock:** 60000 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 1.22 → retail **99 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. Small parts may present choking hazard.
- **Safety:** Small parts — choking hazard for children; Do not place where it impairs driving view or airbags; Adhesives may mark surfaces
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, material composition (esp. metal/paint)
- **Blockers:** manufacturer-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQT1385259 — Car Accessories Piggy Creative Cartoon Cute Car Decoration

- **ID:** `1473299195782893568`
- **Stock:** 454384 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 1.51 → retail **99 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. Small parts may present choking hazard.
- **Safety:** Small parts — choking hazard for children; Do not place where it impairs driving view or airbags; Adhesives may mark surfaces
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, material composition (esp. metal/paint)
- **Blockers:** manufacturer-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQC1528710 — Car Accessories Air Outlet Storage Bag

- **ID:** `1549677724544421888`
- **Stock:** 123367 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 3.39 → retail **99 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Organizer / clip / case accessory. General consumer good; not a child restraint or safety device.
- **Safety:** Do not block airbags, vents or driving controls; Secure loose items while driving
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer
- **Blockers:** manufacturer-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQC1703890 — Cute Cartoon Pig Car Accessories

- **ID:** `1634593229494562816`
- **Stock:** 95786 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 1.29 → retail **99 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. Small parts may present choking hazard.
- **Safety:** Small parts — choking hazard for children; Do not place where it impairs driving view or airbags; Adhesives may mark surfaces
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, material composition (esp. metal/paint)
- **Blockers:** manufacturer-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQCQCQT00264 — Motorcycle electric car accessories

- **ID:** `E8C6CC5B-6870-4A86-95C7-C544259CA06C`
- **Stock:** 11051 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 0.59 → retail **99 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Powered / electrical / lighting accessory. EEA sale typically needs applicable CE/marking and documentation; none verified in CJ feed.
- **Safety:** Follow vehicle electrical limits; professional install if unsure; Do not modify wiring or bypass fuses; Keep away from moisture and flammable materials
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, CE/DoC, voltage rating, EMC/LVD applicability
- **Blockers:** electrical-ce-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJYD2100740 — C- Shaped Car Flower Container Car Accessories

- **ID:** `2408030742241615900`
- **Stock:** 94731 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 1.38 → retail **99 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Organizer / clip / case accessory. General consumer good; not a child restraint or safety device.
- **Safety:** Do not block airbags, vents or driving controls; Secure loose items while driving
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer
- **Blockers:** manufacturer-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJYD2421252 — Leather Car Accessories Car Glasses Frame

- **ID:** `2507050211141628800`
- **Stock:** 27377 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 2.63 → retail **99 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Organizer / clip / case accessory. General consumer good; not a child restraint or safety device.
- **Safety:** Do not block airbags, vents or driving controls; Secure loose items while driving
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer
- **Blockers:** manufacturer-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQCQCQC01314 — Muslim home security pendant car accessories

- **ID:** `2624D20A-C682-4256-8A8F-935E2A8F1A70`
- **Stock:** 12585 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 7.98 → retail **219 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. Small parts may present choking hazard.
- **Safety:** Small parts — choking hazard for children; Do not place where it impairs driving view or airbags; Adhesives may mark surfaces
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, material composition (esp. metal/paint)
- **Blockers:** manufacturer-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQCQCQC01533 — Creative metal car accessories

- **ID:** `B229354F-C387-4631-87D7-25DE877B9B70`
- **Stock:** 40000 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 4.82 → retail **139 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. Small parts may present choking hazard.
- **Safety:** Small parts — choking hazard for children; Do not place where it impairs driving view or airbags; Adhesives may mark surfaces
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, material composition (esp. metal/paint)
- **Blockers:** manufacturer-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQT1564811 — Car Oil Filter Element Accessories

- **ID:** `1570363769107263488`
- **Stock:** 25497 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 4.53 → retail **129 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Vehicle filter-adjacent accessory. Compatibility not guaranteed; not a regulated safety-critical brake/steering part in listing text.
- **Safety:** Confirm fitment for make/model/year before install; Incorrect filter use can damage the vehicle; Prefer professional installation when unsure
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, exact vehicle compatibility table, OEM cross-reference
- **Blockers:** fitment-unverified, manufacturer-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQC1251458 — Car Carousel Perfume Car Solar Car Essential Oil Fragrance Fragrance Decoration Car Accessories

- **ID:** `1426422841884151808`
- **Stock:** 117684 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 1.3 → retail **99 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Car fragrance / aromatherapy accessory. Not sold as cosmetic, medicine or air-purifier. No CLP/SDS or fragrance allergen dossier verified in feed.
- **Safety:** Do not ingest; keep away from eyes and children; May cause allergic reaction; ventilate cabin if overpowering; Not a medical or air-quality device
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, CLP/labeling if mixture, SDS if required, EU responsible person for fragrance mixture if applicable
- **Blockers:** fragrance-chemical-compliance-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJMT1159060 — Body Lights Modified Electric Car Accessories

- **ID:** `1400679598781501440`
- **Stock:** 92157 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 6.89 → retail **189 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Powered / electrical / lighting accessory. EEA sale typically needs applicable CE/marking and documentation; none verified in CJ feed.
- **Safety:** Follow vehicle electrical limits; professional install if unsure; Do not modify wiring or bypass fuses; Keep away from moisture and flammable materials
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, CE/DoC, voltage rating, EMC/LVD applicability
- **Blockers:** electrical-ce-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQC1225218 — Car Dog Pendant Pendant, Car Key Backpack Accessories

- **ID:** `1418528962069532672`
- **Stock:** 86709 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 0.66 → retail **99 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. Small parts may present choking hazard.
- **Safety:** Small parts — choking hazard for children; Do not place where it impairs driving view or airbags; Adhesives may mark surfaces
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, material composition (esp. metal/paint)
- **Blockers:** manufacturer-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJYD1992006 — Smart Spray Car Mounted Fragrance Accessories

- **ID:** `1770105333235585024`
- **Stock:** 78495 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 2.93 → retail **99 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Car fragrance / aromatherapy accessory. Not sold as cosmetic, medicine or air-purifier. No CLP/SDS or fragrance allergen dossier verified in feed.
- **Safety:** Do not ingest; keep away from eyes and children; May cause allergic reaction; ventilate cabin if overpowering; Not a medical or air-quality device
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, CLP/labeling if mixture, SDS if required, EU responsible person for fragrance mixture if applicable
- **Blockers:** fragrance-chemical-compliance-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

#### CJQT1374937 — Women Red Rhinestone Car Interior Accessories

- **ID:** `1468451746849361920`
- **Stock:** 330875 (snapshot; inStock=True; status `candidate-for-review`)
- **Plazo:** production via CJ warehouse; NO 8–20 / EU 5–20 / PE 10–25 business days (max 30 unless agreed)
- **Cost (USD snapshot):** 1.36 → retail **99 NOK** (pricing rule; landed customer total = retail + flat shipping)
- **Manufacturer:** not disclosed in CJ selected snapshot — do not invent
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Interior decoration / ornament / sticker. General merchandise; no toy CE claim verified. Small parts may present choking hazard.
- **Safety:** Small parts — choking hazard for children; Do not place where it impairs driving view or airbags; Adhesives may mark surfaces
- **Destinations:** NO, EU, PE
- **Gaps:** manufacturer, material composition (esp. metal/paint)
- **Blockers:** manufacturer-unverified
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). Gaps listed under cumplimiento.blockers must be cleared by a human with real supplier docs before any SKU is charged.

## Printify POD (selected, shop 28847802)

Made-to-order EU print partners (DE/CZ). Stock is POD availability, not a warehouse count. Checkout remains off.

| SKU | Origin / provider | Plazo (NO typ.) | Cumplimiento | Charge |
| --- | --- | --- | --- | --- |
| `13130008121313253901` | Germany / Textildruck Europa | 5–12 typical (production + ship); store band 5–20 | POD merch; linked shop product | no |
| `59231495105346654760` | Czech Republic / OPT OnDemand | 5–12 typical (production + ship); store band 5–20 | POD merch; linked shop product | no |
| `17497779195092248342` | Germany / Textildruck Europa | 5–12 typical (production + ship); store band 5–20 | POD merch; linked shop product | no |
| `18185599519595958213` | Czech Republic / OPT OnDemand | 5–12 typical (production + ship); store band 5–20 | POD merch; linked shop product | no |
| `32157695974756034277` | Czech Republic / OPT OnDemand | 5–12 typical (production + ship); store band 5–20 | POD merch; linked shop product | no |
| `96008724411669092953` | Czech Republic / OPT OnDemand | 5–12 typical (production + ship); store band 5–20 | POD merch; linked shop product | no |
| `18156769406899166452` | Czech Republic / OPT OnDemand | 5–12 typical (production + ship); store band 5–20 | POD merch; linked shop product | no |
| `19876027541174932530` | Czech Republic / OPT OnDemand | 5–12 typical (production + ship); store band 5–20 | POD merch; linked shop product | no |
| `12625498217304657306` | Germany / Textildruck Europa | 5–12 typical (production + ship); store band 5–20 | POD merch; linked shop product | no |
| `31131812918865260297` | Germany / Textildruck Europa | 5–12 typical (production + ship); store band 5–20 | POD merch; linked shop product | no |
| `20950705573832293124` | Germany / Textildruck Europa | 5–12 typical (production + ship); store band 5–20 | POD merch; linked shop product | no |
| `96452992005585258301` | Germany / Textildruck Europa | 5–12 typical (production + ship); store band 5–20 | POD merch; linked shop product | no |
| `36339202865257948943` | Germany / Textildruck Europa | 5–12 typical (production + ship); store band 5–20 | POD merch; linked shop product | no |
| `12436038847392804198` | Germany / Textildruck Europa | 5–12 typical (production + ship); store band 5–20 | POD merch; linked shop product | no |
| `33777351803449288591` | Germany / Textildruck Europa | 5–12 typical (production + ship); store band 5–20 | POD merch; linked shop product | no |
| `84238117980641572744` | Germany / Textildruck Europa | 5–12 typical (production + ship); store band 5–20 | POD merch; linked shop product | no |

### Printify detail

#### 13130008121313253901 — Motrull Wheel Logo Mug 11oz

- **IDs:** product `6ab99b3df6ec4c0c6a0fdf74` · variant `79703`
- **Stock:** POD / made-to-order (inStock=true while print provider accepts blueprint)
- **Plazo:** production 2–5 business days (print partner); NO typical 5–12 typical (production + ship); store band 5–20
- **Supplier cost USD (snapshot):** 5.91 · Printify shipping NO USD: 10.39 · store retail **169 NOK** + flat customer shipping
- **Manufacturer / print:** Blank goods + print by Printify partner Textildruck Europa; Motrull design
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Real Printify product in shop 28847802, EU print provider (DE/CZ); POD merch only, no cosmetic/medical/toy-safety claims
- **Safety:** Apparel/mugs/posters — follow care label; ceramics breakable; Not a toy; not a medical device; Sticker adhesives may mark surfaces
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). POD compliance is documented; do not enable charging until owner confirms payment provider env (existing keys only — never invent).

#### 59231495105346654760 — Motrull Wheel Pattern Mug 11oz

- **IDs:** product `6ab99b4049ec84eb9c0a7d3e` · variant `62327`
- **Stock:** POD / made-to-order (inStock=true while print provider accepts blueprint)
- **Plazo:** production 2–5 business days (print partner); NO typical 5–12 typical (production + ship); store band 5–20
- **Supplier cost USD (snapshot):** 5.88 · Printify shipping NO USD: 10.39 · store retail **159 NOK** + flat customer shipping
- **Manufacturer / print:** Blank goods + print by Printify partner OPT OnDemand; Motrull design
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Real Printify product in shop 28847802, EU print provider (DE/CZ); POD merch only, no cosmetic/medical/toy-safety claims
- **Safety:** Apparel/mugs/posters — follow care label; ceramics breakable; Not a toy; not a medical device; Sticker adhesives may mark surfaces
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). POD compliance is documented; do not enable charging until owner confirms payment provider env (existing keys only — never invent).

#### 17497779195092248342 — Motrull Organic Cotton Tote

- **IDs:** product `6ab99b43709cc009e0099eb5` · variant `79434`
- **Stock:** POD / made-to-order (inStock=true while print provider accepts blueprint)
- **Plazo:** production 2–5 business days (print partner); NO typical 5–12 typical (production + ship); store band 5–20
- **Supplier cost USD (snapshot):** 13.0 · Printify shipping NO USD: 7.29 · store retail **359 NOK** + flat customer shipping
- **Manufacturer / print:** Blank goods + print by Printify partner Textildruck Europa; Motrull design
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Real Printify product in shop 28847802, EU print provider (DE/CZ); POD merch only, no cosmetic/medical/toy-safety claims
- **Safety:** Apparel/mugs/posters — follow care label; ceramics breakable; Not a toy; not a medical device; Sticker adhesives may mark surfaces
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). POD compliance is documented; do not enable charging until owner confirms payment provider env (existing keys only — never invent).

#### 18185599519595958213 — Motrull Wheel Art Poster A3

- **IDs:** product `6ab99b46709cc009e0099eb7` · variant `62339`
- **Stock:** POD / made-to-order (inStock=true while print provider accepts blueprint)
- **Plazo:** production 2–5 business days (print partner); NO typical 5–12 typical (production + ship); store band 5–20
- **Supplier cost USD (snapshot):** 7.09 · Printify shipping NO USD: 8.49 · store retail **199 NOK** + flat customer shipping
- **Manufacturer / print:** Blank goods + print by Printify partner OPT OnDemand; Motrull design
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Real Printify product in shop 28847802, EU print provider (DE/CZ); POD merch only, no cosmetic/medical/toy-safety claims
- **Safety:** Apparel/mugs/posters — follow care label; ceramics breakable; Not a toy; not a medical device; Sticker adhesives may mark surfaces
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). POD compliance is documented; do not enable charging until owner confirms payment provider env (existing keys only — never invent).

#### 32157695974756034277 — Motrull "Drive. Tune. Roll." Poster A3

- **IDs:** product `6ab99b49a0bd120c6301e049` · variant `62339`
- **Stock:** POD / made-to-order (inStock=true while print provider accepts blueprint)
- **Plazo:** production 2–5 business days (print partner); NO typical 5–12 typical (production + ship); store band 5–20
- **Supplier cost USD (snapshot):** 7.09 · Printify shipping NO USD: 8.49 · store retail **199 NOK** + flat customer shipping
- **Manufacturer / print:** Blank goods + print by Printify partner OPT OnDemand; Motrull design
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Real Printify product in shop 28847802, EU print provider (DE/CZ); POD merch only, no cosmetic/medical/toy-safety claims
- **Safety:** Apparel/mugs/posters — follow care label; ceramics breakable; Not a toy; not a medical device; Sticker adhesives may mark surfaces
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). POD compliance is documented; do not enable charging until owner confirms payment provider env (existing keys only — never invent).

#### 96008724411669092953 — Motrull Dot-Grid Notebook

- **IDs:** product `6ab99b4c71cabd2f82076afc` · variant `65483`
- **Stock:** POD / made-to-order (inStock=true while print provider accepts blueprint)
- **Plazo:** production 2–5 business days (print partner); NO typical 5–12 typical (production + ship); store band 5–20
- **Supplier cost USD (snapshot):** 8.82 · Printify shipping NO USD: 8.79 · store retail **239 NOK** + flat customer shipping
- **Manufacturer / print:** Blank goods + print by Printify partner OPT OnDemand; Motrull design
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Real Printify product in shop 28847802, EU print provider (DE/CZ); POD merch only, no cosmetic/medical/toy-safety claims
- **Safety:** Apparel/mugs/posters — follow care label; ceramics breakable; Not a toy; not a medical device; Sticker adhesives may mark surfaces
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). POD compliance is documented; do not enable charging until owner confirms payment provider env (existing keys only — never invent).

#### 18156769406899166452 — Motrull Wheel Vinyl Sticker

- **IDs:** product `6ab99b4f7a233ab55706a96d` · variant `65212`
- **Stock:** POD / made-to-order (inStock=true while print provider accepts blueprint)
- **Plazo:** production 2–5 business days (print partner); NO typical 5–12 typical (production + ship); store band 5–20
- **Supplier cost USD (snapshot):** 3.89 · Printify shipping NO USD: 5.59 · store retail **109 NOK** + flat customer shipping
- **Manufacturer / print:** Blank goods + print by Printify partner OPT OnDemand; Motrull design
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Real Printify product in shop 28847802, EU print provider (DE/CZ); POD merch only, no cosmetic/medical/toy-safety claims
- **Safety:** Apparel/mugs/posters — follow care label; ceramics breakable; Not a toy; not a medical device; Sticker adhesives may mark surfaces
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). POD compliance is documented; do not enable charging until owner confirms payment provider env (existing keys only — never invent).

#### 19876027541174932530 — Motrull Wheel Mouse Pad

- **IDs:** product `6ab99b52885e0b9863076d17` · variant `62329`
- **Stock:** POD / made-to-order (inStock=true while print provider accepts blueprint)
- **Plazo:** production 2–5 business days (print partner); NO typical 5–12 typical (production + ship); store band 5–20
- **Supplier cost USD (snapshot):** 8.26 · Printify shipping NO USD: 8.79 · store retail **229 NOK** + flat customer shipping
- **Manufacturer / print:** Blank goods + print by Printify partner OPT OnDemand; Motrull design
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Real Printify product in shop 28847802, EU print provider (DE/CZ); POD merch only, no cosmetic/medical/toy-safety claims
- **Safety:** Apparel/mugs/posters — follow care label; ceramics breakable; Not a toy; not a medical device; Sticker adhesives may mark surfaces
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). POD compliance is documented; do not enable charging until owner confirms payment provider env (existing keys only — never invent).

#### 12625498217304657306 — Motrull Wheel Tee – Black · S

- **IDs:** product `6ab99b54f6ec4c0c6a0fdf86` · variant `38164`
- **Stock:** POD / made-to-order (inStock=true while print provider accepts blueprint)
- **Plazo:** production 2–5 business days (print partner); NO typical 5–12 typical (production + ship); store band 5–20
- **Supplier cost USD (snapshot):** 9.28 · Printify shipping NO USD: 7.29 · store retail **259 NOK** + flat customer shipping
- **Manufacturer / print:** Blank goods + print by Printify partner Textildruck Europa; Motrull design
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Real Printify product in shop 28847802, EU print provider (DE/CZ); POD merch only, no cosmetic/medical/toy-safety claims
- **Safety:** Apparel/mugs/posters — follow care label; ceramics breakable; Not a toy; not a medical device; Sticker adhesives may mark surfaces
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). POD compliance is documented; do not enable charging until owner confirms payment provider env (existing keys only — never invent).

#### 31131812918865260297 — Motrull Wheel Tee – Black · M

- **IDs:** product `6ab99b54f6ec4c0c6a0fdf86` · variant `38178`
- **Stock:** POD / made-to-order (inStock=true while print provider accepts blueprint)
- **Plazo:** production 2–5 business days (print partner); NO typical 5–12 typical (production + ship); store band 5–20
- **Supplier cost USD (snapshot):** 9.28 · Printify shipping NO USD: 7.29 · store retail **259 NOK** + flat customer shipping
- **Manufacturer / print:** Blank goods + print by Printify partner Textildruck Europa; Motrull design
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Real Printify product in shop 28847802, EU print provider (DE/CZ); POD merch only, no cosmetic/medical/toy-safety claims
- **Safety:** Apparel/mugs/posters — follow care label; ceramics breakable; Not a toy; not a medical device; Sticker adhesives may mark surfaces
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). POD compliance is documented; do not enable charging until owner confirms payment provider env (existing keys only — never invent).

#### 20950705573832293124 — Motrull Wheel Tee – Black · L

- **IDs:** product `6ab99b54f6ec4c0c6a0fdf86` · variant `38192`
- **Stock:** POD / made-to-order (inStock=true while print provider accepts blueprint)
- **Plazo:** production 2–5 business days (print partner); NO typical 5–12 typical (production + ship); store band 5–20
- **Supplier cost USD (snapshot):** 9.28 · Printify shipping NO USD: 7.29 · store retail **259 NOK** + flat customer shipping
- **Manufacturer / print:** Blank goods + print by Printify partner Textildruck Europa; Motrull design
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Real Printify product in shop 28847802, EU print provider (DE/CZ); POD merch only, no cosmetic/medical/toy-safety claims
- **Safety:** Apparel/mugs/posters — follow care label; ceramics breakable; Not a toy; not a medical device; Sticker adhesives may mark surfaces
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). POD compliance is documented; do not enable charging until owner confirms payment provider env (existing keys only — never invent).

#### 96452992005585258301 — Motrull Wheel Tee – Black · XL

- **IDs:** product `6ab99b54f6ec4c0c6a0fdf86` · variant `38206`
- **Stock:** POD / made-to-order (inStock=true while print provider accepts blueprint)
- **Plazo:** production 2–5 business days (print partner); NO typical 5–12 typical (production + ship); store band 5–20
- **Supplier cost USD (snapshot):** 9.28 · Printify shipping NO USD: 7.29 · store retail **259 NOK** + flat customer shipping
- **Manufacturer / print:** Blank goods + print by Printify partner Textildruck Europa; Motrull design
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Real Printify product in shop 28847802, EU print provider (DE/CZ); POD merch only, no cosmetic/medical/toy-safety claims
- **Safety:** Apparel/mugs/posters — follow care label; ceramics breakable; Not a toy; not a medical device; Sticker adhesives may mark surfaces
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). POD compliance is documented; do not enable charging until owner confirms payment provider env (existing keys only — never invent).

#### 36339202865257948943 — Motrull Wheel Hoodie – Black · S

- **IDs:** product `6ab99b5682080d60bf0bd8ee` · variant `32918`
- **Stock:** POD / made-to-order (inStock=true while print provider accepts blueprint)
- **Plazo:** production 2–5 business days (print partner); NO typical 5–12 typical (production + ship); store band 5–20
- **Supplier cost USD (snapshot):** 25.48 · Printify shipping NO USD: 10.89 · store retail **689 NOK** + flat customer shipping
- **Manufacturer / print:** Blank goods + print by Printify partner Textildruck Europa; Motrull design
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Real Printify product in shop 28847802, EU print provider (DE/CZ); POD merch only, no cosmetic/medical/toy-safety claims
- **Safety:** Apparel/mugs/posters — follow care label; ceramics breakable; Not a toy; not a medical device; Sticker adhesives may mark surfaces
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). POD compliance is documented; do not enable charging until owner confirms payment provider env (existing keys only — never invent).

#### 12436038847392804198 — Motrull Wheel Hoodie – Black · M

- **IDs:** product `6ab99b5682080d60bf0bd8ee` · variant `32919`
- **Stock:** POD / made-to-order (inStock=true while print provider accepts blueprint)
- **Plazo:** production 2–5 business days (print partner); NO typical 5–12 typical (production + ship); store band 5–20
- **Supplier cost USD (snapshot):** 25.48 · Printify shipping NO USD: 10.89 · store retail **689 NOK** + flat customer shipping
- **Manufacturer / print:** Blank goods + print by Printify partner Textildruck Europa; Motrull design
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Real Printify product in shop 28847802, EU print provider (DE/CZ); POD merch only, no cosmetic/medical/toy-safety claims
- **Safety:** Apparel/mugs/posters — follow care label; ceramics breakable; Not a toy; not a medical device; Sticker adhesives may mark surfaces
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). POD compliance is documented; do not enable charging until owner confirms payment provider env (existing keys only — never invent).

#### 33777351803449288591 — Motrull Wheel Hoodie – Black · L

- **IDs:** product `6ab99b5682080d60bf0bd8ee` · variant `32920`
- **Stock:** POD / made-to-order (inStock=true while print provider accepts blueprint)
- **Plazo:** production 2–5 business days (print partner); NO typical 5–12 typical (production + ship); store band 5–20
- **Supplier cost USD (snapshot):** 25.48 · Printify shipping NO USD: 10.89 · store retail **689 NOK** + flat customer shipping
- **Manufacturer / print:** Blank goods + print by Printify partner Textildruck Europa; Motrull design
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Real Printify product in shop 28847802, EU print provider (DE/CZ); POD merch only, no cosmetic/medical/toy-safety claims
- **Safety:** Apparel/mugs/posters — follow care label; ceramics breakable; Not a toy; not a medical device; Sticker adhesives may mark surfaces
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). POD compliance is documented; do not enable charging until owner confirms payment provider env (existing keys only — never invent).

#### 84238117980641572744 — Motrull Wheel Hoodie – Black · XL

- **IDs:** product `6ab99b5682080d60bf0bd8ee` · variant `32921`
- **Stock:** POD / made-to-order (inStock=true while print provider accepts blueprint)
- **Plazo:** production 2–5 business days (print partner); NO typical 5–12 typical (production + ship); store band 5–20
- **Supplier cost USD (snapshot):** 25.48 · Printify shipping NO USD: 10.89 · store retail **689 NOK** + flat customer shipping
- **Manufacturer / print:** Blank goods + print by Printify partner Textildruck Europa; Motrull design
- **Responsible economic operator (seller):** Martinez Lozano Internasjonal Handel (935 407 095 MVA)
- **Cumplimiento:** Real Printify product in shop 28847802, EU print provider (DE/CZ); POD merch only, no cosmetic/medical/toy-safety claims
- **Safety:** Apparel/mugs/posters — follow care label; ceramics breakable; Not a toy; not a medical device; Sticker adhesives may mark surfaces
- **chargeReady:** false — Checkout paused (CHECKOUT_ENABLED=false). POD compliance is documented; do not enable charging until owner confirms payment provider env (existing keys only — never invent).

## Re-enable charging (owner only)

1. Keep working only in this Motrull repo.
2. Clear each SKU’s `cumplimiento.blockers` with real supplier documents (do not invent manufacturer/CE data).
3. Confirm live stock / POD acceptance and shipping quote.
4. Confirm real payment env (`STRIPE_SECRET_KEY` live, webhook, etc.) already held by the owner — never invent keys.
5. Set `chargeReady: true` only for cleared SKUs in `catalog/product-readiness.json`.
6. Then set `CHECKOUT_ENABLED = true` in both `commerce-runtime.js` and `functions/api/create-checkout-session.ts`, and restore the cart CTA in `index.html`.

