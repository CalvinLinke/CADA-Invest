"use client";
import { motion } from "framer-motion";
import { RuneIcon } from "@/components/ui/RuneIcon";
import { RuneDivider } from "@/components/ui/RuneDivider";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/sections/CtaSection";
import { staggerContainer, fadeUp, slideInLeft, slideInRight, viewportOnce } from "@/lib/animations";

const values = [
  { title: "Effizienz",       text: "Schnelle Prozesse, klare Entscheidungen, minimaler Zeitaufwand für alle Beteiligten." },
  { title: "Klarheit",        text: "Transparente Kommunikation, keine versteckten Kosten, kein Kleingedrucktes." },
  { title: "Professionalität", text: "7 Jahre Markterfahrung, starkes lokales Netzwerk, tiefe Kenntnis des sächsischen Immobilienmarkts." },
  { title: "Diskretion",      text: "Jede Transaktion wird vertraulich behandelt. Keine öffentlichen Inserate, keine Besichtigungsgruppen." },
];

export default function UeberUnsPage() {
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
              <Badge variant="white" className="mb-8">Über uns</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-nazare text-white mb-6">
              CADA Invest GmbH —{" "}
              <span className="text-brand-gold">professionell. diskret. lokal.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/65 max-w-lg">
              Seit über 7 Jahren kaufen wir Wohnimmobilien in Sachsen an — transparent, schnell und ohne Aufwand für den Verkäufer.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-[55fr_45fr] gap-16 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.p variants={slideInLeft} className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">
                Unsere Mission
              </motion.p>
              <RuneDivider className="max-w-xs mb-6" />
              <motion.h2 variants={slideInLeft} className="text-4xl md:text-5xl font-nazare text-brand-anthracite mb-6">
                Immobilienkauf,{" "}
                <span className="text-brand-gold">wie er sein sollte.</span>
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-brand-anthracite/70 leading-relaxed">
                <p>
                  CADA Invest GmbH ist kein klassischer Makler und kein Bauträger. Wir sind ein professioneller, diskret agierender Bestandshändler mit Fokus auf den Direktankauf, die Aufwertung und den Weiterverkauf von Wohnimmobilien in Sachsen.
                </p>
                <p>
                  Unser Ansatz ist einfach: Wir bieten Eigentümern eine schnelle, transparente Alternative zum klassischen Verkaufsweg. Kein Inserat, keine Besichtigungsgruppen, keine wochenlangen Verhandlungen.
                </p>
                <p>
                  Was uns unterscheidet, ist die Kombination aus Markterfahrung, Entscheidungsgeschwindigkeit und einem starken lokalen Netzwerk in Dresden und ganz Sachsen.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="md:-mt-8"
            >
              <div className="bg-brand-cream rounded-2xl p-8 relative overflow-hidden">
                <RuneIcon size={160} className="absolute -top-6 -right-6 text-brand-gold/[0.08] pointer-events-none" />
                <blockquote className="border-l-4 border-brand-gold pl-5 italic text-brand-anthracite/80 text-lg leading-relaxed mb-6">
                  „Sie verkaufen Ihre Immobilie — wir übernehmen den gesamten Prozess."
                </blockquote>
                <div className="space-y-3">
                  {[
                    ["32+",      "realisierte Projekte"],
                    ["7 Jahre",  "Markterfahrung"],
                    ["Sachsen",  "lokaler Fokus"],
                  ].map(([v, l]) => (
                    <div key={l} className="flex items-center justify-between text-sm border-b border-brand-gold/15 pb-3 last:border-0">
                      <span className="font-nazare text-2xl text-brand-green">{v}</span>
                      <span className="text-brand-anthracite/55">{l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Werte */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">Unsere Werte</p>
            <RuneDivider className="max-w-xs mx-auto" />
            <h2 className="text-4xl md:text-5xl font-nazare text-brand-anthracite mt-4">
              Wofür wir stehen
            </h2>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 relative overflow-hidden"
              >
                <RuneIcon size={80} className="absolute -top-2 -right-2 text-brand-gold/[0.07] pointer-events-none" />
                <div className="w-10 h-0.5 bg-brand-gold mb-4" />
                <h3 className="font-nazare text-xl text-brand-anthracite mb-3">{v.title}</h3>
                <p className="text-sm text-brand-anthracite/60 leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Arbeitsweise */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">Unser Netzwerk</p>
          <RuneDivider className="max-w-xs mx-auto" />
          <h2 className="text-4xl font-nazare text-brand-anthracite mt-4 mb-6">
            Tief verwurzelt in Sachsen
          </h2>
          <p className="text-lg text-brand-anthracite/65 leading-relaxed max-w-2xl mx-auto mb-12">
            Unser Netzwerk umfasst lokale Notare, Handwerksbetriebe, Hausverwaltungen und Investoren in Dresden und ganz Sachsen. Diese Struktur ermöglicht uns schnelle Entscheidungen und eine reibungslose Abwicklung.
          </p>
          <Button href="/partner" variant="secondary">
            Für Partner & Vermittler
          </Button>
        </div>
      </section>

      <CtaSection
        headline="Sprechen Sie uns an."
        subtext="Kostenlose, unverbindliche Ersteinschätzung Ihrer Immobilie innerhalb von 48 Stunden."
      />
    </>
  );
}
