"use client";
import { motion } from "framer-motion";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { RuneIcon } from "@/components/ui/RuneIcon";
import { RuneDivider } from "@/components/ui/RuneDivider";
import { Badge } from "@/components/ui/Badge";
import { CtaSection } from "@/components/sections/CtaSection";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const projects = [
  {
    pairs: [
      { vorher: "/CADA%20Projekt%201/Wohnzimmer%20vorher.png",  nachher: "/CADA%20Projekt%201/Wohnzimmer%20nachher.png",  label: "Wohnzimmer" },
      { vorher: "/CADA%20Projekt%201/K%C3%BCche%20vorher.jpeg", nachher: "/CADA%20Projekt%201/K%C3%BCche%20nachher.png",  label: "Küche" },
      { vorher: "/CADA%20Projekt%201/Bad%20vorher.png",         nachher: "/CADA%20Projekt%201/Bad%20nachher.png",         label: "Bad" },
    ],
    title: "3-Raumwohnung, Dresden-Striesen",
    meta:  "78 m² · Baujahr 1960 · Vollsaniert 2023",
    text:  "Ankauf einer unsanierten Bestandswohnung. Nach umfassender Modernisierung inklusive neuer Heizungsanlage, Bäder und Bodenbelägen konnte die Immobilie deutlich aufgewertet werden.",
    tags:  ["Vollsanierung", "Neue Heizung", "Modernisierung"],
    time:  "3 Wochen bis Notartermin",
  },
  {
    pairs: [
      { vorher: "/CADA%20Projekt%202/Wohnzimmer%20vorher.png",  nachher: "/CADA%20Projekt%202/Wohnzimmer%20nachher.jpeg", label: "Wohnzimmer" },
      { vorher: "/CADA%20Projekt%202/K%C3%BCche%20vorher.png",  nachher: "/CADA%20Projekt%202/K%C3%BCche%20nachher.png",  label: "Küche" },
      { vorher: "/CADA%20Projekt%202/Bad%20vorher.png",         nachher: "/CADA%20Projekt%202/Bad%20nachher.png",         label: "Bad" },
    ],
    title: "Eigentumswohnung, Leipzig-Gohlis",
    meta:  "62 m² · Baujahr 1978 · Kernsaniert 2022",
    text:  "Diskreter Direktankauf im Rahmen einer Erbauseinandersetzung. Schnelle Abwicklung innerhalb von 3 Wochen bis zum Notartermin. Vollständige Koordination mit allen Erben.",
    tags:  ["Erbfall", "Schnellabwicklung", "Kernsanierung"],
    time:  "21 Tage bis Notartermin",
  },
  {
    pairs: [
      { vorher: "/CADA%20Projekt%203/Wohnzimmer%20vorher.png",  nachher: "/CADA%20Projekt%203/Wohnzimmer%20nachher.png",  label: "Wohnzimmer" },
      { vorher: "/CADA%20Projekt%203/Flur%20vorher.png",        nachher: "/CADA%20Projekt%203/Flur%20nachher.png",        label: "Flur" },
      { vorher: "/CADA%20Projekt%203/Badezimmer%20vorher.png",  nachher: "/CADA%20Projekt%203/Badezimmer%20nachher.png",  label: "Badezimmer" },
    ],
    title: "Wohnungspaket, Dresden-Leuben",
    meta:  "3 Einheiten · Leerstand · Vollsanierung",
    text:  "Ankauf eines Pakets aus drei leerstehenden Wohnungen in Dresden-Leuben. Durch den vollständigen Leerstand konnte die Sanierung aller Einheiten unmittelbar nach dem Notartermin begonnen werden.",
    tags:  ["Wohnungspaket", "Leerstand", "Dresden-Leuben"],
    time:  "Tippgeber-Empfehlung",
  },
];

export default function ReferenzenPage() {
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
              <Badge variant="white" className="mb-8">Unsere Projekte</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-nazare text-white mb-6">
              Referenzen &{" "}
              <span className="text-brand-gold">Projekte</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/65 max-w-lg">
              Einblicke in ausgewählte Ankaufsprojekte — von der Übernahme bis zur Aufwertung.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-brand-cream border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-brand-gold/15"
          >
            {[
              { value: "32",        unit: "",         label: "realisierte Projekte" },
              { value: "7",         unit: " Jahre",   label: "Markterfahrung in Sachsen" },
              { value: "Ø 3",       unit: " Wochen",  label: "bis zum Notartermin" },
            ].map(({ value, unit, label }) => (
              <motion.div key={label} variants={fadeUp} className="py-8 sm:py-10 px-6 text-center">
                <p className="text-4xl md:text-5xl font-nazare text-brand-anthracite mb-1">
                  {value}<span className="text-brand-gold">{unit}</span>
                </p>
                <p className="text-xs font-semibold tracking-[0.12em] uppercase text-brand-anthracite/45">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-20"
          >
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className={`grid md:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
              >
                <div className={i % 2 === 1 ? "md:col-start-2" : ""}>
                  <BeforeAfterSlider pairs={p.pairs} />
                </div>

                <div className={`flex flex-col justify-center ${i % 2 === 1 ? "md:col-start-1" : ""}`}>
                  <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-3">
                    {p.meta}
                  </p>
                  <RuneDivider className="max-w-xs mb-4" />
                  <h2 className="text-3xl font-nazare text-brand-anthracite mb-4">{p.title}</h2>
                  <p className="text-brand-anthracite/65 leading-relaxed mb-6">{p.text}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full bg-brand-cream text-brand-anthracite/70 border border-brand-gold/15">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-brand-green font-semibold">
                    <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    {p.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaSection
        headline="Ihr nächstes Projekt?"
        subtext="Sprechen Sie uns an — wir bewerten Ihre Immobilie kostenlos und unverbindlich."
      />
    </>
  );
}
