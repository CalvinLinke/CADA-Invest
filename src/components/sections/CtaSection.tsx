"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { RuneIcon } from "@/components/ui/RuneIcon";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

interface CtaSectionProps {
  headline?: string;
  subtext?: string;
}

export function CtaSection({
  headline = "Bereit, Ihre Immobilie zu verkaufen?",
  subtext  = "Erhalten Sie innerhalb von 48 Stunden eine realistische Einschätzung Ihrer Immobilie — kostenlos, unverbindlich und diskret.",
}: CtaSectionProps) {
  return (
    <section className="py-24 md:py-32 bg-brand-anthracite relative overflow-hidden">
      {/* Rune decorations */}
      <RuneIcon size={400} className="absolute top-[-80px] right-[-60px] text-white/[0.04] pointer-events-none" />
      <RuneIcon size={200} className="absolute bottom-[-30px] left-20 text-white/[0.03] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-gold/70 mb-6"
          >
            Jetzt handeln
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-nazare text-white mb-6 leading-tight"
          >
            {headline}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-white/50 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            {subtext}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/immobilienbewertung" variant="primary" size="lg">
              Kostenlose Bewertung anfragen
            </Button>
            <Button href="/ankauf" variant="secondary" size="lg" className="border-white/30 text-white/80 hover:border-white before:bg-white/10">
              Mehr zum Ablauf
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
