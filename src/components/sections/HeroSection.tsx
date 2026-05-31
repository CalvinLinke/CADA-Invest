"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { RuneIcon } from "@/components/ui/RuneIcon";
import { Badge } from "@/components/ui/Badge";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-anthracite overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Hero1.mp4" type="video/mp4" />
      </video>

      {/* Full overlay — darkens video to keep it as pure atmosphere */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Rune watermark */}
      <RuneIcon
        size={580}
        className="absolute bottom-[-60px] right-[-80px] text-white/[0.04] pointer-events-none z-10"
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-14 2xl:pt-32 2xl:pb-24 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl xl:max-w-[620px] 2xl:max-w-2xl"
        >
          <motion.div variants={fadeUp}>
            <Badge variant="white" className="mb-6 2xl:mb-8">
              Immobilienankauf Sachsen
            </Badge>
          </motion.div>

          {/* Glass content card */}
          <motion.div
            variants={fadeUp}
            className="relative rounded-2xl overflow-hidden mb-10"
            style={{
              background: "linear-gradient(135deg, rgba(22,84,44,0.72) 0%, rgba(22,84,44,0.52) 100%)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              boxShadow: "0 8px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
              border: "1px solid rgba(170,115,74,0.22)",
            }}
          >
            {/* Gold accent bar top */}
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-brand-gold/70 to-transparent" />

            <div className="px-6 py-7 md:px-8 xl:py-7 2xl:px-10 2xl:py-12">
              <h1 className="text-4xl sm:text-5xl xl:text-[2.25rem] 2xl:text-[4.25rem] font-nazare text-white leading-[1.1] mb-3 2xl:mb-5">
                Wir kaufen Ihre Immobilie —{" "}
                <span className="text-brand-gold">diskret, schnell und ohne Aufwand.</span>
              </h1>

              <p className="text-sm xl:text-[0.9rem] 2xl:text-lg text-white/75 leading-relaxed mb-5 2xl:mb-10 max-w-lg">
                Professioneller Direktankauf von Wohnimmobilien in Sachsen. Angebot innerhalb von 48 Stunden, Notartermin in unter 4 Wochen.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 2xl:gap-4">
                <Button href="/immobilienbewertung" variant="primary" size="lg" className="hover:bg-brand-gold hover:shadow-brand-gold/25">
                  Kostenlose Bewertung anfragen
                </Button>
                <a
                  href="/api/ankaufsprofil"
                  download="CADA-Invest-Ankaufsprofil.pdf"
                  className="inline-flex items-center gap-2.5 font-semibold tracking-wide text-[15px] text-white/80 hover:text-brand-gold transition-colors duration-[450ms] ease-in-out underline-grow px-9 py-4"
                >
                  Ankaufsprofil
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
                       className="transition-transform duration-[450ms] group-hover:translate-y-0.5">
                    <path d="M8 2v8M4 7l4 4 4-4M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Stats footer — fused to card bottom */}
            <div
              className="grid grid-cols-3 divide-x px-4 md:px-8 2xl:px-10 py-3 2xl:py-5"
              style={{
                borderTop: "1px solid rgba(170,115,74,0.25)",
                background: "rgba(0,0,0,0.18)",
                divideColor: "rgba(170,115,74,0.25)",
              }}
            >
              {[
                { value: "48 Std.", label: "bis zum Angebot" },
                { value: "4 Wochen", label: "bis zum Notartermin" },
                { value: "32+", label: "abgeschlossene Projekte" },
              ].map((s, i) => (
                <div key={s.label} className={`${i === 0 ? "pr-3 md:pr-6" : i === 2 ? "pl-3 md:pl-6" : "px-3 md:px-6"}`}>
                  <p className="text-sm md:text-base 2xl:text-xl font-nazare text-brand-gold whitespace-nowrap">{s.value}</p>
                  <p className="text-[10px] md:text-xs text-white/55 mt-0.5 tracking-wide leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
    </section>
  );
}
