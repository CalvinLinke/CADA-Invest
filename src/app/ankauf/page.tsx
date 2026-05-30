"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { RuneIcon } from "@/components/ui/RuneIcon";
import { RuneDivider } from "@/components/ui/RuneDivider";
import { Badge } from "@/components/ui/Badge";
import { CtaSection } from "@/components/sections/CtaSection";
import { staggerContainer, fadeUp, slideInLeft, slideInRight, viewportOnce } from "@/lib/animations";

const targetGroups = [
  "Einzelwohnungen und kleine Wohnungspakete",
  "Erbengemeinschaften mit Klärungsbedarf",
  "Eigentümer mit Zeitdruck oder Unsicherheit",
  "Verkäufer, die Diskretion schätzen",
  "Eigentümer ohne Marktkenntnis",
];

const advantages = [
  { label: "Direktankauf",     icon: "✓", text: "Kein Makler, keine Provision, kein Aufwand für Sie." },
  { label: "Schnell",          icon: "✓", text: "Angebot in 48 Stunden, Notartermin in unter 4 Wochen." },
  { label: "Sicher",           icon: "✓", text: "Fester Kaufpreis, keine Preisverhandlung nach Besichtigung." },
  { label: "Vollständig",      icon: "✓", text: "Wir übernehmen alle Unterlagen, Koordination und Abstimmung." },
  { label: "Diskret",          icon: "✓", text: "Kein öffentliches Inserat, keine Besichtigungsgruppen." },
];

const faqs = [
  {
    q: "Was kauft CADA Invest?",
    a: "Wir kaufen Einzelwohnungen, kleinere Wohnungspakete und Mehrfamilienhäuser im Raum Sachsen — unabhängig vom Zustand. Auch sanierungsbedürftige Objekte werden bewertet.",
  },
  {
    q: "Wie lange dauert der gesamte Prozess?",
    a: "Von der ersten Kontaktaufnahme bis zur notariellen Beurkundung vergehen in der Regel 3–4 Wochen. Wir passen uns dabei Ihrem Zeitplan an.",
  },
  {
    q: "Entstehen für mich Kosten?",
    a: "Nein. Die Bewertung ist kostenlos und unverbindlich. Maklercourtage und sonstige Nebenkosten entfallen beim Direktverkauf an uns.",
  },
  {
    q: "Muss die Immobilie renoviert sein?",
    a: "Nein. Wir kaufen Immobilien in jedem Zustand — auch stark sanierungsbedürftige Objekte oder solche mit baulichen Mängeln.",
  },
  {
    q: "Ich bin Teil einer Erbengemeinschaft. Ist das möglich?",
    a: "Ja. Wir haben Erfahrung mit Erbfällen und unterstützen bei der Koordination. Sprechen Sie uns an — wir finden gemeinsam eine Lösung.",
  },
];

export default function AnkaufPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 bg-brand-green relative overflow-hidden">
        <RuneIcon size={480} className="absolute bottom-[-60px] right-[-80px] text-white/[0.05] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp}>
              <Badge variant="white" className="mb-8">Immobilienankauf</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-nazare text-white mb-6">
              Verkaufen Sie Ihre Immobilie —{" "}
              <span className="text-brand-gold">ohne Aufwand.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/65 max-w-lg">
              Kein Makler. Keine Besichtigungsgruppen. Kein langer Wartezeit. Wir kaufen direkt — transparent und verlässlich.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Für wen? */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-[55fr_45fr] gap-16 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.p variants={slideInLeft} className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">
                Zielgruppe
              </motion.p>
              <RuneDivider className="max-w-xs mb-6" />
              <motion.h2 variants={slideInLeft} className="text-4xl md:text-5xl font-nazare text-brand-anthracite mb-6">
                Für wen ist der Direktverkauf geeignet?
              </motion.h2>
              <motion.p variants={slideInLeft} className="text-brand-anthracite/65 mb-8 leading-relaxed">
                Unser Angebot richtet sich an Eigentümer, die einen einfachen, sicheren und schnellen Verkaufsprozess bevorzugen.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-3">
                {targetGroups.map((item) => (
                  <motion.li key={item} variants={fadeUp} className="flex items-start gap-3">
                    <RuneIcon size={16} className="text-brand-gold mt-0.5 shrink-0" />
                    <span className="text-brand-anthracite/80 text-sm">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="md:-mt-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
                <RuneIcon size={120} className="absolute -top-4 -right-4 text-brand-gold/[0.07] pointer-events-none" />
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-4">
                  Direktankauf vs. Maklerverkauf
                </p>
                <div className="space-y-4">
                  {[
                    { label: "Angebotsdauer",  cada: "48 Stunden",   makler: "Wochen" },
                    { label: "Verkaufsdauer",  cada: "< 4 Wochen",   makler: "3–12 Monate" },
                    { label: "Provision",      cada: "Keine",         makler: "3–7 %" },
                    { label: "Aufwand",        cada: "Minimal",       makler: "Hoch" },
                    { label: "Diskretion",     cada: "100 %",         makler: "Öffentlich" },
                  ].map((r) => (
                    <div key={r.label} className="grid grid-cols-3 text-sm gap-2 pb-3 border-b border-gray-50 last:border-0">
                      <span className="text-brand-anthracite/50 font-medium">{r.label}</span>
                      <span className="text-brand-green font-semibold">{r.cada}</span>
                      <span className="text-brand-anthracite/40">{r.makler}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs mt-3 text-brand-anthracite/40">
                  <span />
                  <span className="font-semibold text-brand-green">CADA Invest</span>
                  <span>Makler</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">Ihre Vorteile</p>
            <RuneDivider className="max-w-xs mx-auto" />
            <h2 className="text-4xl md:text-5xl font-nazare text-brand-anthracite mt-4">Was Sie erhalten</h2>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {advantages.map((a) => (
              <motion.div
                key={a.label}
                variants={fadeUp}
                className="border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
                  <span className="text-brand-green text-sm font-bold">{a.icon}</span>
                </div>
                <p className="font-semibold text-brand-anthracite mb-2">{a.label}</p>
                <p className="text-sm text-brand-anthracite/55 leading-relaxed">{a.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ankaufsprofil CTA */}
      <section className="py-24 bg-brand-green relative overflow-hidden">
        <RuneIcon size={480} className="absolute -left-20 top-1/2 -translate-y-1/2 text-white/[0.04] pointer-events-none" />
        <RuneIcon size={220} className="absolute -right-4 bottom-4 text-brand-gold/[0.07] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.p variants={fadeUp} className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-3">
                Ankaufsprofil
              </motion.p>
              <RuneDivider light className="max-w-[180px]" />
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-nazare text-white mt-5 mb-5 leading-tight">
                Unsere Kriterien —{" "}
                <span className="text-brand-gold">direkt weiterleitbar</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/60 leading-relaxed mb-8 max-w-lg">
                Ob für sich selbst oder für Ihr Netzwerk: Unser Ankaufsprofil fasst alle relevanten Informationen kompakt zusammen — Standorte, Objekttypen, Prozess und persönlicher Kontakt.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-start">
                <a
                  href="/api/ankaufsprofil"
                  download="CADA-Invest-Ankaufsprofil.pdf"
                  className="inline-flex items-center gap-3 bg-white hover:bg-brand-cream text-brand-green font-semibold text-[15px] px-9 py-4 rounded-full transition-colors duration-[450ms] ease-in-out group"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
                       className="transition-transform duration-[450ms] group-hover:translate-y-0.5">
                    <path d="M8 2v8M4 7l4 4 4-4M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Ankaufsprofil herunterladen
                </a>
                <p className="text-white/35 text-xs self-center">PDF · A4 · Kostenlos</p>
              </motion.div>
            </motion.div>

            {/* Right: Document preview */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-48 lg:w-60 select-none">
                <div
                  className="absolute inset-0 bg-white/10 rounded-xl border border-white/15"
                  style={{ transform: "rotate(4deg) translate(12px, 8px)", aspectRatio: "1/1.414" }}
                />
                <div
                  className="relative rounded-xl overflow-hidden shadow-2xl border border-brand-gold/20"
                  style={{
                    aspectRatio: "1/1.414",
                    transform: "rotate(-2deg)",
                    background: "linear-gradient(145deg, #1a6434 0%, #16542c 100%)",
                  }}
                >
                  <RuneIcon size={150} className="absolute -bottom-4 -right-4 text-brand-gold/10 pointer-events-none" />
                  <div className="absolute inset-0 p-6 lg:p-7 flex flex-col justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-0.5 h-4 bg-brand-gold" />
                      <span className="text-white/55 text-[8px] font-semibold tracking-[0.18em] uppercase">CADA INVEST GMBH</span>
                    </div>
                    <div>
                      <div className="w-7 h-px bg-brand-gold mb-3" />
                      <p className="text-white font-nazare text-xl lg:text-2xl leading-tight mb-2">
                        Ankaufs{"\n"}profil
                      </p>
                      <p className="text-white/45 text-[9px] leading-relaxed">
                        Direktankauf von{"\n"}Wohnimmobilien
                      </p>
                      <div className="w-7 h-px bg-brand-gold mt-3" />
                    </div>
                    <div>
                      <div className="w-full h-px bg-brand-gold/25 mb-2" />
                      <p className="text-brand-gold text-[8px] tracking-[0.2em] font-semibold">SACHSEN · 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-brand-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">FAQ</p>
            <RuneDivider className="max-w-xs mx-auto" />
            <h2 className="text-4xl font-nazare text-brand-anthracite mt-4">Häufige Fragen</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-brand-anthracite">{faq.q}</span>
                  <span className={`text-brand-gold text-xl font-light transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-brand-anthracite/65 leading-relaxed border-t border-gray-50">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/immobilienbewertung" variant="primary" size="lg">
              Jetzt Bewertung anfragen
            </Button>
          </div>
        </div>
      </section>

      <CtaSection
        headline="Bereit für den nächsten Schritt?"
        subtext="Wir kaufen Ihre Immobilie — diskret, schnell und ohne Aufwand für Sie. Anfrage dauert 2 Minuten."
      />
    </>
  );
}
