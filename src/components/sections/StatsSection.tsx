"use client";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RuneDivider } from "@/components/ui/RuneDivider";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const stats = [
  { value: 32,  suffix: "+", label: "realisierte Projekte",  sub: "in Sachsen" },
  { value: 7,   suffix: "",  label: "Jahre Markterfahrung",  sub: "seit 2017" },
  { value: 48,  suffix: "h", label: "bis zum Angebot",       sub: "garantiert" },
  { value: 100, suffix: "%", label: "Prozessübernahme",      sub: "von A bis Z" },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">
            CADA Invest in Zahlen
          </p>
          <RuneDivider className="max-w-xs mx-auto" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="text-center">
              <p className="text-4xl md:text-5xl font-nazare text-brand-green mb-1">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-sm font-semibold text-brand-anthracite">{s.label}</p>
              <p className="text-xs text-brand-anthracite/45 mt-0.5">{s.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
