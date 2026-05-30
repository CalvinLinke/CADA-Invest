# CLAUDE.md — CADA Invest GmbH Website

## Projektübersicht

**CADA Invest GmbH** ist ein professioneller, diskret agierender Immobilienankäufer mit Fokus auf den Kauf, die Aufwertung und den Weiterverkauf von Wohnimmobilien im Raum Sachsen/Dresden.

**Positionierung:** Kein Makler. Kein klassischer Bauträger. Sondern ein Bestandshändler, der den gesamten Verkaufsprozess für den Eigentümer übernimmt.

**Kernbotschaft:**
> „Sie verkaufen Ihre Immobilie – wir übernehmen den gesamten Prozess."

---

## Marke & Corporate Identity

### Farben

| Token | Hex | Verwendung |
|-------|-----|------------|
| `brand-green` | `#16542c` | Primärfarbe: Headlines, CTAs, Navbar (solid), Dark-Sections |
| `brand-green-light` | `#697A62` | Subtexte auf dunklem Grund, Border-Akzente |
| `brand-gold` | `#aa734a` | Rune, Zahlen/Stats, Hover-States, Akzentlinien, Listen-Marker |
| `brand-anthracite` | `#2a2a2a` | Body-Text, dunkle Abschnitte |
| `brand-cream` | `#f8f4ef` | Warme Section-Hintergründe, Card-Grounds |
| `brand-white` | `#ffffff` | Primärer Hintergrund, Whitespace |

### Typografie

- **Display / H1:** Nazare Regular, 72–96px, `letter-spacing: -0.02em`
- **Headline / H2:** Nazare Regular, 42–56px
- **Section-Label:** Inter, 11px, Uppercase, `letter-spacing: 0.15em`, Goldfarbe — für Überschriften-Teaser wie "UNSERE LEISTUNG"
- **Body-Text:** Inter, 16–18px, `line-height: 1.7`, Anthrazit
- **Buttons/CTAs:** Inter SemiBold, 15px
- **Fallback-Stack:** `'Nazare', 'Playfair Display', Georgia, serif`

### Rune

Das Rune-Symbol (geometrisches Flechtwerk, keltisch/globusartig, 4-fache Symmetrie) ist das wichtigste Designelement der Marke. Farbe: Gold (`#aa734a`).

**Einsatzorte:**
1. **Hero-Wasserzeichen:** 400–600px, rechts-unten, `opacity: 0.08`, leichter Scroll-Parallax
2. **Section-Divider:** Goldene Linie links + Rune mittig + Linie rechts
3. **Listen-Marker:** Kleine Rune (16px) in Gold statt Bullet-Points
4. **Card-Akzent:** Rune groß, oben rechts in Cards, `opacity: 0.06`
5. **Dark-Section-Deko:** Rune in Weiß, `opacity: 0.05`
6. **Favicon/PWA:** Rune allein auf grünem Grund

---

## Designprinzipien

- **Modern, minimalistisch, hochwertig** — kein generisches KI-Layout
- **Viel Whitespace** — Inhalte atmen lassen
- **Klare Linien** — keine überladene UI
- **Asymmetrisches Grid:** Text 55% / Bild 45% mit vertikalem Offset (-32px)
- **Dark Sections** für Prozesse und CTAs — erzeugen Tiefe und Kontrast
- **Rune** erscheint subtil und durchgängig als Markenpräsenz
- **Gold als Akzentfarbe** — nie dominant, immer gezielt eingesetzt

### Section-Aufbau (Standard)
```
GOLD LABEL (uppercase, 11px, letter-spacing 0.15em)
← RuneDivider →
Große Nazare-Headline
Inter-Subtext (max 60ch Zeilenbreite)
Content
```

---

## Animationen & Interaktionen

**Scroll-Reveal (Framer Motion):**
- `fadeUp`: `opacity 0→1`, `y 24→0`, 600ms ease-out
- `staggerContainer`: Kinder mit 120ms Versatz
- `scaleIn`: `opacity 0→1`, `scale 0.94→1`

**Navbar:** Transparent → Weiß/Blur beim Scrollen, 300ms ease

**Buttons:**
- Primary: Gold-Shimmer-Sweep auf Hover + Pfeil gleitet 4px rechts + `scale(0.97)` on active
- Secondary: Fill-Sweep von links auf Hover
- Ghost: Unterstrich wächst von links

**Cards:** `translateY(-4px)` + `shadow-md` auf Hover, 200ms ease-out

---

## Seitenstruktur

| Route | Ziel |
|-------|------|
| `/` | Homepage — Vertrauen + Conversion |
| `/ankauf` | Verkäufer überzeugen |
| `/immobilienbewertung` | Leadgenerierung (Hauptformular) |
| `/ueber-uns` | Seriosität & Vertrauen |
| `/referenzen` | Vorher/Nachher Projekte |
| `/partner` | B2B-Kommunikation |
| `/blog` | SEO & Expertenstatus |

**Conversion-Logik:** Traffic → Vertrauen → Kontakt → Ankauf

---

## USPs (immer klar herausstellen)

1. **48 Stunden** — Angebot innerhalb von 48 Stunden
2. **4 Wochen** — Notartermin in unter 4 Wochen
3. **Vollständige Prozessübernahme** — wir kümmern uns um alles
4. **Diskretion** — diskrete, professionelle Abwicklung
5. **Lokaler Fokus** — Sachsen / Dresden, tiefe Marktkenntnis

---

## Vertrauensfaktoren

- **32 realisierte Projekte**
- **7 Jahre Markterfahrung**
- Starkes lokales Netzwerk in Sachsen

---

## Tonalität & Sprachregeln

- **Sachlich, ruhig, souverän** — keine Begeisterungsausrufe
- **Faktenbasiert** — konkrete Zahlen und Zeitangaben statt Floskeln
- **Klar und direkt** — kurze Sätze, aktive Sprache
- **Keine Übertreibungen** — kein "bester", "einzigartiger" etc.
- **Sprache:** Deutsch (DE), kein Du/Sie-Mix → konsequent **Sie**
- **Beispiele:** "Sie erhalten innerhalb von 48 Stunden ein Angebot." ✓ / "Wir sind Deutschlands bester Immobilienkäufer!" ✗

---

## Technischer Stack

- **Framework:** Next.js 15 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Animationen:** Framer Motion
- **E-Mail:** Resend
- **Deployment:** Vercel (empfohlen)

### Entwicklungsregeln

- Keine unnötigen Kommentare im Code
- Komponenten in `src/components/` — UI-Primitives in `ui/`, Seitenabschnitte in `sections/`
- Alle Texte auf Deutsch
- Keine generischen Stockfotos — Platzhalter mit echter Dresden/Sachsen-Bildsprache
- `"use client"` nur wo zwingend nötig (Interaktivität)
- Umgebungsvariablen: `RESEND_API_KEY`, `CONTACT_EMAIL`

---

## Zielgruppen

**Primär (B2C):** Wohnimmobilien-Eigentümer — Einzelwohnungen, Wohnungspakete, Erbengemeinschaften, Eigentümer mit Zeitdruck

**Sekundär (B2B):** Makler, Hausverwalter, Netzwerkpartner, Vermittler von Off-Market-Deals

**Optional:** Investoren / Kapitalanleger
