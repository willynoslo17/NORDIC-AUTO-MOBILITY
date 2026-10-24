# Ordrebekreftelse — mal (bokmål)

Mal til e-post. Bare teksten. Ingenting sendes herfra, og ingen integrasjon endres.

Avsender og emnefelt settes i det systemet som allerede sender ordrebekreftelser. Bruk bare kontaktadressene som allerede står på motrull.no.

**Emne:** Ordrebekreftelse {{ordrenummer}} — Motrull

---

Hei {{fornavn}},

Takk for bestillingen hos Motrull. Vi har registrert ordren.

**Ordrenummer:** {{ordrenummer}}  
**Dato:** {{dato}}

**Leveringsadresse**  
{{navn}}  
{{adresse}}  
{{postnummer}} {{sted}}  
Norge

**Varer**

{{varelinjer}}

Hver linje viser varenavn, antall og pris slik de sto da ordren ble betalt. Frakt og totalbeløp er de beløpene som ble vist før betaling:

- Varebeløp: {{varebelop}}
- Frakt: {{frakt}}
- Totalt: {{total}}

Betalingen er tatt imot via Stripe. Vi lagrer ikke kortnummeret ditt.

**Levering**  
Vi leverer til Norge. Forventet tid og fraktpris er de som sto i kassen og på [frakt og levering](https://motrull.no/frakt-og-levering.html). En ordre kan komme i flere pakker. Sporingsinformasjon sendes på e-post når transportøren tilbyr det.

**Kjøpsvilkår, angrerett og angreskjema**

- [Kjøpsvilkår](https://motrull.no/kjopsvilkar.html)
- [Angrerett](https://motrull.no/angrerett.html)
- [Angreskjema](https://motrull.no/angreskjema.html)

Du har 14 dagers angrerett etter angrerettloven, regnet slik kjøpsvilkårene og angrerett-siden beskriver. Motrull oppgir i tillegg 30 dagers retur på butikksidene. Vilkårene på de sidene gjelder. For å bruke angreretten, gi beskjed før fristen går ut til support@motrull.no. Angreskjemaet kan brukes, men er ikke obligatorisk.

**Kontakt**  
Ordre og levering: orders@motrull.no  
Retur, skade og reklamasjon: support@motrull.no  
Andre henvendelser: kontakt@motrull.no  
Telefon, SMS, Telegram og Viber: +47 912 90 416

Med vennlig hilsen  
Motrull  
Martinez Lozano Internasjonal Handel  
org.nr 935 407 095 MVA  
Norbygata 19, 0187 Oslo, Norge  
https://motrull.no/

---

Feltene i `{{klammer}}` fylles fra den enkelte ordren. Ikke legg inn eksempelbeløp, kundenavn eller sporingsnummer i denne malen.
