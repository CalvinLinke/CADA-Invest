"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { RuneIcon } from "@/components/ui/RuneIcon";
import { RuneDivider } from "@/components/ui/RuneDivider";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

function UspIcon({ children }: { children: ReactNode }) {
  return (
    <div className="w-11 h-11 rounded-xl bg-brand-green/[0.07] flex items-center justify-center mb-5 group-hover:bg-brand-green/[0.12] transition-colors duration-200">
      <svg
        width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="#16542c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true"
      >
        {children}
      </svg>
    </div>
  );
}

const usps = [
  {
    icon: (
      <UspIcon>
        {/* Clock */}
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </UspIcon>
    ),
    title: "Erhalten Sie Ihr Kaufangebot",
    text: "Sie erhalten innerhalb von 48 Stunden nach Ihrer Anfrage ein konkretes, unverbindliches Angebot.",
  },
  {
    icon: (
      <UspIcon>
        {/* Calendar */}
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" />
      </UspIcon>
    ),
    title: "Notartermin in 4 Wochen",
    text: "Von der Kontaktaufnahme bis zum Notartermin vergehen in der Regel weniger als 4 Wochen.",
  },
  {
    icon: (
      <UspIcon>
        {/* Handover / transfer arrows */}
        <path d="M17 4l4 4-4 4M3 8h18M7 20l-4-4 4-4M21 16H3" />
      </UspIcon>
    ),
    title: "Vollständige Prozessübernahme",
    text: "Wir übernehmen den gesamten Prozess der Unterlagenbeschaffung für Sie vollständig, von Grundbuchauszug bis Energieausweis.",
  },
  {
    icon: (
      <UspIcon>
        {/* Shield */}
        <path d="M12 2l8 3.5v5c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V5.5L12 2z" />
        <path d="M9 12l2 2 4-4" />
      </UspIcon>
    ),
    title: "Diskrete Abwicklung",
    text: "Der gesamte Ankaufsvorgang wird diskret und vertrauensvoll behandelt.",
  },
  {
    icon: (
      <UspIcon>
        {/* Map pin */}
        <path d="M12 2C8.7 2 6 4.7 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.3-2.7-6-6-6z" />
        <circle cx="12" cy="8" r="2" />
      </UspIcon>
    ),
    title: "Lokaler Fokus Sachsen",
    text: "Tiefe Marktkenntnis und ein starkes Netzwerk in Dresden und ganz Sachsen.",
  },
];

export function UspSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">
            Unsere Vorteile
          </p>
          <RuneDivider className="max-w-xs mx-auto" />
          <h2 className="text-4xl md:text-5xl font-nazare text-brand-anthracite mt-4">
            Warum CADA Invest?
          </h2>
          <p className="mt-4 text-lg text-brand-anthracite/60 max-w-xl mx-auto">
            Klar strukturiert, effizient und diskret. Für Eigentümer, die ihren Verkauf einfach und verlässlich abwickeln wollen.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {usps.map((usp) => (
            <motion.div
              key={usp.title}
              variants={fadeUp}
              className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden group"
            >
              {/* Background rune */}
              <RuneIcon
                size={110}
                className="absolute -top-2 -right-2 text-brand-gold opacity-[0.06] group-hover:opacity-[0.09] transition-opacity duration-300 pointer-events-none"
              />
              {usp.icon}
              <h3 className="text-lg font-semibold text-brand-anthracite mb-2">{usp.title}</h3>
              <p className="text-sm text-brand-anthracite/60 leading-relaxed">{usp.text}</p>
              {/* Gold accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-gold group-hover:w-full transition-all duration-300 rounded-b-2xl" />
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            variants={fadeUp}
            className="bg-brand-green rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden cursor-pointer group"
            onClick={() => { window.location.href = "/immobilienbewertung"; }}
          >
            <RuneIcon
              size={140}
              className="absolute -bottom-4 -right-6 text-white/[0.08] pointer-events-none"
            />
            <div>
              <p className="text-sm text-white/60 font-semibold tracking-[0.1em] uppercase mb-3">
                Kostenlos & unverbindlich
              </p>
              <a
                href="/immobilienbewertung"
                className="text-2xl font-nazare text-brand-gold leading-snug hover:opacity-80 transition-opacity duration-150"
              >
                Kostenloses Kaufangebot erhalten <svg className="inline-block align-middle" width="28" height="28" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
