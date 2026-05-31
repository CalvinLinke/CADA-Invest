"use client";
import { motion } from "framer-motion";
import { RuneIcon } from "@/components/ui/RuneIcon";
import { RuneDivider } from "@/components/ui/RuneDivider";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function AnkaufsprofilBand() {
  return (
    <section className="py-24 md:py-32 bg-brand-anthracite relative overflow-hidden">
      {/* Rune watermarks */}
      <RuneIcon size={500} className="absolute -left-24 top-1/2 -translate-y-1/2 text-white/[0.03] pointer-events-none" />
      <RuneIcon size={280} className="absolute -right-8 bottom-8 text-brand-gold/[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.p variants={fadeUp} className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-3">
              Für Makler &amp; Partner
            </motion.p>
            <RuneDivider light className="max-w-[180px]" />
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-nazare text-white mt-5 mb-5 leading-tight">
              Wir kaufen aktiv an —{" "}
              <span className="text-brand-gold">nehmen Sie unser Profil mit</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/55 leading-relaxed mb-8 max-w-lg">
              Alle Ankaufskriterien, Standorte und Kontaktdaten kompakt auf zwei Seiten. Ideal zum Weiterleiten an Eigentümer oder Netzwerkpartner.
            </motion.p>

            {/* Bullet points */}
            <motion.ul variants={staggerContainer} className="space-y-3 mb-10">
              {[
                "32+ realisierte Projekte in Sachsen",
                "Ankauf in 8 Schlüsselstandorten",
                "Verbindliches Angebot in 48 Stunden",
                "Direkte Kontaktaufnahme per QR-Code",
              ].map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-center gap-3">
                  <RuneIcon size={14} className="text-brand-gold shrink-0" />
                  <span className="text-white/65 text-sm">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp}>
              <a
                href="/api/ankaufsprofil"
                download="CADA-Invest-Ankaufsprofil.pdf"
                className="inline-flex items-center gap-3 bg-brand-gold hover:bg-[#c99060] text-white font-semibold text-[15px] px-9 py-4 rounded-full transition-colors duration-[450ms] ease-in-out group"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
                     className="transition-transform duration-[450ms] group-hover:translate-y-0.5">
                  <path d="M8 2v8M4 7l4 4 4-4M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Ankaufsprofil herunterladen
              </a>
              <p className="text-white/25 text-xs mt-3">PDF · A4 · Kostenlos</p>
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
            <div className="relative w-52 lg:w-64 select-none">
              {/* Page 2 peeking */}
              <div
                className="absolute inset-0 bg-white/8 rounded-xl border border-white/10"
                style={{ transform: "rotate(4deg) translate(12px, 8px)", aspectRatio: "1/1.414" }}
              />
              {/* Cover card */}
              <div
                className="relative bg-brand-green rounded-xl overflow-hidden shadow-2xl border border-brand-gold/15"
                style={{ aspectRatio: "1/1.414", transform: "rotate(-2deg)" }}
              >
                <RuneIcon size={160} className="absolute -bottom-6 -right-6 text-brand-gold/10 pointer-events-none" />

                <div className="absolute inset-0 p-6 lg:p-7 flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-0.5 h-4 bg-brand-gold" />
                    <span className="text-white/55 text-[8px] font-semibold tracking-[0.18em] uppercase">CADA INVEST GMBH</span>
                  </div>
                  <div>
                    <div className="w-7 h-px bg-brand-gold mb-3" />
                    <p className="text-white font-nazare text-xl lg:text-2xl leading-tight mb-2">
                      Ankaufsprofil
                    </p>
                    <p className="text-white/45 text-[9px] leading-relaxed">
                      Direktankauf von{"\n"}Wohnimmobilien
                    </p>
                    <div className="w-7 h-px bg-brand-gold mt-3" />
                  </div>
                  <div>
                    <div className="w-full h-px bg-brand-gold/25 mb-2" />
                    <p className="text-brand-gold text-[8px] tracking-[0.2em] font-semibold">SACHSEN · 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
