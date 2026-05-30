"use client";
import { motion } from "framer-motion";
import { RuneIcon } from "@/components/ui/RuneIcon";
import { RuneDivider } from "@/components/ui/RuneDivider";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const steps = [
  {
    num: "01",
    title: "Kontaktaufnahme",
    text: "Sie nehmen Kontakt auf — per Formular, Telefon oder E-Mail. Wir melden uns innerhalb von 24 Stunden.",
  },
  {
    num: "02",
    title: "Bewertung & Angebot",
    text: "Wir analysieren Ihre Immobilie und unterbreiten Ihnen innerhalb von 48 Stunden ein transparentes Angebot.",
  },
  {
    num: "03",
    title: "Unterlagenbeschaffung",
    text: "Wir beschaffen alle erforderlichen Unterlagen — Grundbuchauszug, Energieausweis, Teilungserklärung. Sie müssen nichts organisieren.",
  },
  {
    num: "04",
    title: "Notartermin & Übergabe",
    text: "Der Notartermin erfolgt in der Regel innerhalb von 4 Wochen. Danach ist der Prozess abgeschlossen.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-green relative overflow-hidden">
      {/* Rune watermark */}
      <RuneIcon
        size={480}
        className="absolute top-1/2 left-[-100px] -translate-y-1/2 text-white/[0.04] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold/80 mb-2">
            So funktioniert es
          </p>
          <RuneDivider light className="max-w-xs mx-auto" />
          <h2 className="text-4xl md:text-5xl font-nazare text-white mt-4">
            Der Ablauf im Überblick
          </h2>
          <p className="mt-4 text-lg text-white/55 max-w-lg mx-auto">
            Vier klare Schritte. Maximale Transparenz. Minimaler Aufwand für Sie.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              className="relative"
            >
              {/* Step number */}
              <p className="text-7xl font-nazare text-brand-gold leading-none mb-3 select-none tracking-tight">
                {step.num}
              </p>
              <div className="w-10 h-0.5 bg-brand-gold mb-5" />
              <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button href="/immobilienbewertung" size="lg">
            Jetzt kostenlos starten
          </Button>
        </div>
      </div>
    </section>
  );
}
