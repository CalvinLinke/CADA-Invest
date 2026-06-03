"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { RuneDivider } from "@/components/ui/RuneDivider";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const projects = [
  {
    pairs: [
      {
        vorher:  "/CADA%20Projekt%201/Wohnzimmer%20vorher.png",
        nachher: "/CADA%20Projekt%201/Wohnzimmer%20nachher.png",
        label:   "Wohnzimmer",
      },
      {
        vorher:  "/CADA%20Projekt%201/K%C3%BCche%20vorher.jpeg",
        nachher: "/CADA%20Projekt%201/K%C3%BCche%20nachher.png",
        label:   "Küche",
      },
      {
        vorher:  "/CADA%20Projekt%201/Bad%20vorher.png",
        nachher: "/CADA%20Projekt%201/Bad%20nachher.png",
        label:   "Bad",
      },
    ],
    title: "3-Raumwohnung, Dresden-Striesen",
    meta:  "78 m² · Baujahr 1960 · Vollsaniert",
    text:
      "Ankauf einer unsanierten Bestandswohnung. Nach umfassender Modernisierung konnte die Immobilie deutlich aufgewertet werden.",
  },
  {
    pairs: [
      {
        vorher:  "/CADA%20Projekt%202/Wohnzimmer%20vorher.png",
        nachher: "/CADA%20Projekt%202/Wohnzimmer%20nachher.jpeg",
        label:   "Wohnzimmer",
      },
      {
        vorher:  "/CADA%20Projekt%202/K%C3%BCche%20vorher.png",
        nachher: "/CADA%20Projekt%202/K%C3%BCche%20nachher.png",
        label:   "Küche",
      },
      {
        vorher:  "/CADA%20Projekt%202/Bad%20vorher.png",
        nachher: "/CADA%20Projekt%202/Bad%20nachher.png",
        label:   "Bad",
      },
    ],
    title: "Eigentumswohnung, Dresden-Löbtau",
    meta:  "62 m² · Baujahr 1978 · Kernsaniert",
    text:
      "Diskreter Direktankauf im Rahmen einer Erbauseinandersetzung. Schnelle Abwicklung innerhalb von 4 Wochen bis zum Notartermin.",
  },
];

export function ReferenzenPreview() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">
              Unsere Projekte
            </p>
            <RuneDivider className="max-w-xs" />
            <h2 className="text-4xl md:text-5xl font-nazare text-brand-anthracite mt-4">
              Vorher / Nachher
            </h2>
          </div>
          <Button href="/referenzen" variant="ghost">
            Alle Projekte ansehen
          </Button>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 gap-10"
        >
          {projects.map((p) => (
            <motion.div key={p.title} variants={fadeUp}>
              <BeforeAfterSlider pairs={p.pairs} />
              <div className="mt-5">
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-brand-gold/70 mb-1">
                  {p.meta}
                </p>
                <h3 className="text-xl font-nazare text-brand-anthracite mb-2">{p.title}</h3>
                <p className="text-sm text-brand-anthracite/60 leading-relaxed">{p.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
