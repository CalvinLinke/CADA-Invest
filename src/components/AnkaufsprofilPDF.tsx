import React from "react";
import path from "path";
import {
  Document, Page, View, Text, Image, StyleSheet, Font,
  Svg, Rect, Circle, G,
} from "@react-pdf/renderer";

// ── Font registration ─────────────────────────────────────────────────────────
const NM = path.join(process.cwd(), "node_modules");

Font.register({
  family: "Playfair",
  fonts: [
    { src: `${NM}/@fontsource/playfair-display/files/playfair-display-latin-400-normal.woff`, fontWeight: 400 },
    { src: `${NM}/@fontsource/playfair-display/files/playfair-display-latin-700-normal.woff`, fontWeight: 700 },
  ],
});

Font.register({
  family: "Inter",
  fonts: [
    { src: `${NM}/@fontsource/inter/files/inter-latin-400-normal.woff`, fontWeight: 400 },
    { src: `${NM}/@fontsource/inter/files/inter-latin-600-normal.woff`, fontWeight: 600 },
  ],
});

// ── Brand tokens ──────────────────────────────────────────────────────────────
const G_  = "#16542c";
const GO  = "#aa734a";
const AN  = "#2a2a2a";
const CR  = "#f8f4ef";
const WH  = "#ffffff";

const LOGO = process.cwd() + "/public/CI/logo-transparent.png";

// ── SVG Rune ──────────────────────────────────────────────────────────────────
function Rune({ size, color, opacity }: { size: number; color: string; opacity: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <G fillOpacity={opacity}>
        <Rect x={3}  y={38} width={94} height={24} rx={12} fill={color} />
        <Rect x={38} y={3}  width={24} height={94} rx={12} fill={color} />
        <Rect x={3}  y={38} width={94} height={24} rx={12} fill={color} transform="rotate(45 50 50)" />
        <Rect x={3}  y={38} width={94} height={24} rx={12} fill={color} transform="rotate(-45 50 50)" />
      </G>
      <Circle cx={50} cy={50} r={11} fill="none" strokeWidth={4.5} stroke={color} strokeOpacity={opacity * 0.4} />
    </Svg>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  // COVER
  cover: { backgroundColor: G_, position: "relative" },

  // cover — decorative frame (gold outline rectangle)
  coverFrame: {
    position: "absolute", bottom: 88, right: 52,
    width: 110, height: 150,
    borderWidth: 0.75, borderColor: GO, borderStyle: "solid",
    opacity: 0.22,
  },
  coverFrameInner: {
    position: "absolute", bottom: 96, right: 60,
    width: 94, height: 134,
    borderWidth: 0.4, borderColor: GO, borderStyle: "solid",
    opacity: 0.14,
  },

  coverHeader: {
    position: "absolute", top: 52, left: 52,
    flexDirection: "row", alignItems: "center",
  },
  coverHeaderBar: { width: 2, height: 22, backgroundColor: GO, marginRight: 12 },
  coverHeaderText: {
    color: WH, fontFamily: "Inter", fontWeight: 600,
    fontSize: 8.5, letterSpacing: 3,
  },

  coverBody: { position: "absolute", top: 240, left: 52, right: 120 },
  coverAccentLine: { width: 52, height: 1.5, backgroundColor: GO, marginBottom: 30 },
  coverTitle: {
    fontFamily: "Playfair", fontWeight: 400,
    fontSize: 64, color: WH, lineHeight: 1.08,
    letterSpacing: -0.5, marginBottom: 20,
  },
  coverSubtitle: {
    fontFamily: "Inter", fontWeight: 400,
    fontSize: 13, color: WH, lineHeight: 1.65,
    marginBottom: 30,
  },
  coverAccentLine2: { width: 52, height: 1.5, backgroundColor: GO },

  coverFooterRule: {
    position: "absolute", bottom: 68, left: 0, right: 0,
    height: 0.5, backgroundColor: GO, opacity: 0.35,
  },
  coverFooter: {
    position: "absolute", bottom: 42, left: 52, right: 52,
    flexDirection: "row", justifyContent: "space-between",
  },
  coverFooterL: {
    fontFamily: "Inter", fontWeight: 600,
    color: GO, fontSize: 8, letterSpacing: 2.5,
  },
  coverFooterR: {
    fontFamily: "Inter", fontWeight: 400,
    color: GO, fontSize: 8, letterSpacing: 2,
  },

  // CONTENT PAGE
  content: { backgroundColor: WH, position: "relative" },
  leftBar:  { position: "absolute", left: 0, top: 0, bottom: 0, width: 4, backgroundColor: GO },
  topBar:   { position: "absolute", left: 4, top: 0, right: 0, height: 1.5, backgroundColor: GO },

  body: {
    paddingLeft: 56, paddingRight: 48,
    paddingTop: 38, paddingBottom: 38,
  },

  // page header
  pageHead:   { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
  pageLabel:  { fontFamily: "Inter", fontWeight: 600, fontSize: 7.5, color: G_, letterSpacing: 2.5 },

  sep:  { height: 0.75, backgroundColor: GO, marginBottom: 22 },
  sep2: { height: 0.5,  backgroundColor: GO, opacity: 0.35, marginTop: 18, marginBottom: 18 },

  // über uns
  aboutBox: {
    backgroundColor: CR, borderRadius: 6, padding: 14,
    borderLeftWidth: 3, borderLeftColor: GO, borderLeftStyle: "solid",
    marginBottom: 20,
  },
  aboutLabel: {
    fontFamily: "Inter", fontWeight: 600,
    fontSize: 7, color: GO, letterSpacing: 2.5, marginBottom: 6,
  },
  aboutText: {
    fontFamily: "Inter", fontWeight: 400,
    fontSize: 9.5, color: AN, lineHeight: 1.7,
  },

  // criteria two-column
  criteriaRow: { flexDirection: "row", gap: 16, marginBottom: 16 },

  // standorte
  sLabel: {
    fontFamily: "Inter", fontWeight: 600,
    fontSize: 7, color: GO, letterSpacing: 2.5, marginBottom: 8,
  },
  locationBox: {
    backgroundColor: CR, borderRadius: 6, padding: 12,
  },
  locationText: {
    fontFamily: "Inter", fontWeight: 400,
    fontSize: 9.5, color: AN, lineHeight: 1.85,
  },

  // objekttypen
  bulletRow:  { flexDirection: "row", alignItems: "flex-start", marginBottom: 8 },
  bulletDot:  { width: 5, height: 5, borderRadius: 3, backgroundColor: GO, marginTop: 3.5, marginRight: 9, flexShrink: 0 },
  bulletText: { fontFamily: "Inter", fontWeight: 400, fontSize: 9.5, color: AN, lineHeight: 1.5, flex: 1 },

  // off-market note
  offRow:   { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  offBadge: { backgroundColor: G_, borderRadius: 100, paddingHorizontal: 8, paddingVertical: 3, marginRight: 9 },
  offBadgeText: { fontFamily: "Inter", fontWeight: 600, fontSize: 7, color: WH, letterSpacing: 1.5 },
  offText:  { fontFamily: "Inter", fontWeight: 400, fontSize: 9, color: AN },

  // promise strip
  strip:      { flexDirection: "row", backgroundColor: CR, borderRadius: 8, marginBottom: 16 },
  stripItem:  { flex: 1, alignItems: "center", paddingVertical: 12, paddingHorizontal: 6 },
  stripDiv:   { width: 0.75, backgroundColor: GO, opacity: 0.4, marginVertical: 8 },
  stripVal:   { fontFamily: "Playfair", fontWeight: 400, fontSize: 14, color: GO, marginBottom: 2 },
  stripLabel: { fontFamily: "Inter", fontWeight: 400, fontSize: 7.5, color: AN, textAlign: "center" },

  // contact
  contact:         { backgroundColor: G_, borderRadius: 8, padding: 20, flexDirection: "row", alignItems: "flex-start" },
  contactCard:     { flex: 1, alignItems: "center" },
  contactDivider:  { width: 0.75, backgroundColor: WH, opacity: 0.2, marginHorizontal: 12, alignSelf: "stretch" },
  contactLabel:    { fontFamily: "Inter", fontWeight: 600, fontSize: 6.5, color: GO, letterSpacing: 2.5, marginBottom: 10 },
  contactName:     { fontFamily: "Playfair", fontWeight: 400, fontSize: 16, color: WH, marginBottom: 2 },
  contactRole:     { fontFamily: "Inter", fontWeight: 400, fontSize: 9, color: GO, marginBottom: 10 },
  contactLine:     { fontFamily: "Inter", fontWeight: 400, fontSize: 9.5, color: WH, marginBottom: 3 },
  qr:              { width: 72, height: 72, backgroundColor: WH, borderRadius: 6, padding: 4 },
  qrLabel:         { fontFamily: "Inter", fontWeight: 400, fontSize: 6, color: WH, textAlign: "center", marginTop: 4, letterSpacing: 0.5 },

  contentFooterRule: {
    position: "absolute", bottom: 28, left: 56, right: 48,
    height: 0.5, backgroundColor: GO, opacity: 0.3,
  },
  contentFooter: {
    position: "absolute", bottom: 10, left: 56, right: 48,
    flexDirection: "row", justifyContent: "space-between",
  },
  contentFooterText: {
    fontFamily: "Inter", fontWeight: 400,
    fontSize: 7, color: AN, opacity: 0.5,
  },
});

// ── Pages ─────────────────────────────────────────────────────────────────────
function CoverPage() {
  return (
    <Page size="A4" style={s.cover}>
      {/* Rune — right side, large watermark */}
      <View style={{ position: "absolute", top: 110, right: -70 }}>
        <Rune size={360} color={GO} opacity={0.1} />
      </View>

      {/* Decorative nested frames — bottom right */}
      <View style={s.coverFrame} />
      <View style={s.coverFrameInner} />

      {/* Small accent rune — top right */}
      <View style={{ position: "absolute", top: 44, right: 52 }}>
        <Rune size={44} color={WH} opacity={0.12} />
      </View>

      {/* Header */}
      <View style={s.coverHeader}>
        <View style={s.coverHeaderBar} />
        <Text style={s.coverHeaderText}>CADA INVEST GMBH</Text>
      </View>

      {/* Center content */}
      <View style={s.coverBody}>
        <View style={s.coverAccentLine} />
        <Text style={s.coverTitle}>Ankaufsprofil</Text>
        <Text style={s.coverSubtitle}>
          Direktankauf von Wohnimmobilien{"\n"}im Raum Sachsen
        </Text>
        <View style={s.coverAccentLine2} />
      </View>

      {/* Footer */}
      <View style={s.coverFooterRule} />
      <View style={s.coverFooter}>
        <Text style={s.coverFooterL}>SACHSEN · DRESDEN · LEIPZIG</Text>
        <Text style={s.coverFooterR}>2026</Text>
      </View>
    </Page>
  );
}

function ContentPage({ qrCodeCalvin, qrCodeDave }: { qrCodeCalvin: string; qrCodeDave: string }) {
  return (
    <Page size="A4" style={s.content}>
      <View style={s.leftBar} />
      <View style={s.topBar} />

      {/* Faint rune — top right */}
      <View style={{ position: "absolute", top: 24, right: 24 }}>
        <Rune size={78} color={GO} opacity={0.06} />
      </View>

      <View style={s.body}>

        {/* Header */}
        <View style={s.pageHead}>
          <Text style={s.pageLabel}>ANKAUFSPROFIL · CADA INVEST GMBH</Text>
          <Image src={LOGO} style={{ width: 88, height: 23, objectFit: "contain" }} />
        </View>
        <View style={s.sep} />

        {/* Über uns */}
        <View style={s.aboutBox}>
          <Text style={s.aboutLabel}>ÜBER CADA INVEST</Text>
          <Text style={s.aboutText}>
            CADA Invest GmbH ist ein auf den Direktankauf spezialisiertes Unternehmen für
            Wohnimmobilien im Raum Sachsen. Mit über 32 realisierten Projekten und 7 Jahren
            Markterfahrung bieten wir eine diskrete, schnelle und transparente Alternative
            zum klassischen Immobilienverkauf, vom ersten Kontakt bis zur Schlüsselübergabe.
          </Text>
        </View>

        <View style={s.sep2} />

        {/* Criteria — two columns */}
        <Text style={[s.sLabel, { marginBottom: 12 }]}>ANKAUFSKRITERIEN</Text>
        <View style={s.criteriaRow}>

          {/* Left: Standorte */}
          <View style={{ flex: 1 }}>
            <Text style={s.sLabel}>STANDORTE</Text>
            <View style={s.locationBox}>
              <Text style={s.locationText}>
                Dresden · Leipzig{"\n"}
                Radebeul · Freital · Pirna{"\n"}
                Kesselsdorf · Bannewitz{"\n"}
                Weinböhla
              </Text>
            </View>
          </View>

          {/* Right: Objekttypen */}
          <View style={{ flex: 1.6 }}>
            <Text style={s.sLabel}>OBJEKTTYPEN</Text>
            {[
              "Leerstehende Wohnungen ab 30 m²",
              "Vermietete Wohnungen mit Entwicklungspotenzial",
              "Sanierungsbedürftige Wohnungen",
              "Wohnungspakete bis 500 m²",
              "Wohnhäuser mit Leerstandsquote > 50 %",
            ].map((t) => (
              <View key={t} style={s.bulletRow}>
                <View style={s.bulletDot} />
                <Text style={s.bulletText}>{t}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Off-market badge */}
        <View style={s.offRow}>
          <View style={s.offBadge}>
            <Text style={s.offBadgeText}>OFF-MARKET</Text>
          </View>
          <Text style={s.offText}>Diskrete Transaktionen bevorzugt, kein Inserat erforderlich.</Text>
        </View>

        {/* Promise strip */}
        <View style={s.strip}>
          {[
            { val: "48 Std.", lbl: "Angebot" },
            { val: "4 Wochen", lbl: "bis Notartermin" },
            { val: "100 %", lbl: "Prozessübernahme" },
            { val: "Diskret", lbl: "Professionell" },
          ].map((item, i) => (
            <React.Fragment key={item.val}>
              {i > 0 && <View style={s.stripDiv} />}
              <View style={s.stripItem}>
                <Text style={s.stripVal}>{item.val}</Text>
                <Text style={s.stripLabel}>{item.lbl}</Text>
              </View>
            </React.Fragment>
          ))}
        </View>

        {/* Contact */}
        <View style={s.contact}>
          <View style={s.contactCard}>
            <Text style={s.contactLabel}>ANSPRECHPARTNER</Text>
            <Text style={s.contactName}>Calvin Linke</Text>
            <Text style={s.contactRole}>Geschäftsführer</Text>
            <Text style={s.contactLine}>+49 162 1766880</Text>
            <Text style={s.contactLine}>info@cada-invest.de</Text>
            <View style={{ alignItems: "center", marginTop: 10 }}>
              <Image src={qrCodeCalvin} style={s.qr} />
              <Text style={s.qrLabel}>Kontakt speichern</Text>
            </View>
          </View>
          <View style={s.contactDivider} />
          <View style={s.contactCard}>
            <Text style={s.contactLabel}>ANSPRECHPARTNER</Text>
            <Text style={s.contactName}>Dave Blümel</Text>
            <Text style={s.contactRole}>Geschäftsführer</Text>
            <Text style={s.contactLine}>+49 174 4853652</Text>
            <Text style={s.contactLine}>info@cada-invest.de</Text>
            <View style={{ alignItems: "center", marginTop: 10 }}>
              <Image src={qrCodeDave} style={s.qr} />
              <Text style={s.qrLabel}>Kontakt speichern</Text>
            </View>
          </View>
        </View>

      </View>

      <View style={s.contentFooterRule} />
      <View style={s.contentFooter}>
        <Text style={s.contentFooterText}>CADA Invest GmbH · Glashütter Straße 53 · 01309 Dresden</Text>
        <Text style={s.contentFooterText}>HRB 45325 · Amtsgericht Dresden · Info@cada-invest.de</Text>
      </View>
    </Page>
  );
}

// ── Export ────────────────────────────────────────────────────────────────────
export function AnkaufsprofilPDF({ qrCodeCalvin, qrCodeDave }: { qrCodeCalvin: string; qrCodeDave: string }) {
  return (
    <Document
      title="CADA Invest – Ankaufsprofil"
      author="CADA Invest GmbH"
      subject="Direktankauf von Wohnimmobilien in Sachsen"
    >
      <CoverPage />
      <ContentPage qrCodeCalvin={qrCodeCalvin} qrCodeDave={qrCodeDave} />
    </Document>
  );
}
