import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection }         from "@/components/sections/HeroSection";
import { UspSection }          from "@/components/sections/UspSection";
import { ProcessSection }      from "@/components/sections/ProcessSection";
import { StatsSection }        from "@/components/sections/StatsSection";
import { CtaSection }          from "@/components/sections/CtaSection";
import { ReferenzenPreview }   from "@/components/sections/ReferenzenPreview";
import { AnkaufsprofilBand }   from "@/components/sections/AnkaufsprofilBand";

export const metadata: Metadata = {
  title: "CADA Invest GmbH | Immobilienankauf Sachsen",
  description:
    "Professioneller Direktankauf von Wohnimmobilien in Sachsen. Angebot innerhalb von 48 Stunden, Notartermin in unter 4 Wochen.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "CADA Invest GmbH | Immobilienankauf Sachsen",
    description:
      "Professioneller Direktankauf von Wohnimmobilien in Sachsen. Angebot innerhalb von 48 Stunden, Notartermin in unter 4 Wochen.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <UspSection />
      <ProcessSection />
      <StatsSection />
      <ReferenzenPreview />

      {/* Tippgeber-Band */}
      <div className="bg-brand-green">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/80 text-sm">
            <span className="text-white font-semibold">Kennen Sie jemanden, der verkaufen möchte?</span>
            {" "}Werden Sie Tippgeber und erhalten Sie bis zu 2.500 €.
          </p>
          <Link
            href="/tippgeber"
            className="shrink-0 text-sm font-semibold text-brand-gold hover:text-white transition-colors duration-200 flex items-center gap-2"
          >
            Mehr erfahren
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      <AnkaufsprofilBand />
      <CtaSection />
    </>
  );
}
