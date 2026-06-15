import Link from "next/link";
import Image from "next/image";
import { RuneIcon } from "@/components/ui/RuneIcon";
import { RuneDivider } from "@/components/ui/RuneDivider";

const nav = [
  { label: "Ankauf",               href: "/ankauf" },
  { label: "Immobilienbewertung",  href: "/immobilienbewertung" },
  { label: "Über uns",             href: "/ueber-uns" },
  { label: "Referenzen",           href: "/referenzen" },
  { label: "Kooperationen",        href: "/partner" },
  { label: "Tippgeber werden",     href: "/tippgeber" },
];

const legal = [
  { label: "Impressum",            href: "/impressum" },
  { label: "Datenschutz",          href: "/datenschutz" },
  { label: "Sitemap",              href: "/sitemap" },
  { label: "FAQ",                  href: "/ankauf#faq" },
];

const forInvestors = { label: "Für Investoren", href: "/investoren" };

export function Footer() {
  return (
    <footer className="bg-brand-anthracite text-white/70 relative overflow-hidden">
      <RuneIcon
        size={480}
        className="absolute bottom-[-40px] right-[-80px] text-white/[0.03] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10 relative z-10">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-10 lg:gap-16 mb-12 items-start">

          {/* Brand */}
          <div>
            <Image
              src="/CI/logo-cropped.png"
              alt="CADA Invest"
              width={235}
              height={32}
              className="brightness-0 invert opacity-90 mb-8"
            />
            <p className="text-sm leading-relaxed text-white/45 max-w-xs mb-6">
              Ihr professioneller Partner für Immobilienankauf in Sachsen. Diskret, effizient, verlässlich.
            </p>
            <a
              href="/api/ankaufsprofil"
              download="CADA-Invest-Ankaufsprofil.pdf"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-brand-gold/80 hover:text-brand-gold transition-colors duration-200"
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 2v8M4 7l4 4 4-4M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Ankaufsprofil PDF
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold/60 mb-5">
              Seiten
            </p>
            <ul className="space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/45 hover:text-white transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold/60 mb-5">
              Rechtliches
            </p>
            <ul className="space-y-3">
              {[...legal, { label: "Kontakt", href: "/kontakt" }].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/45 hover:text-white transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <RuneDivider light className="mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} CADA Invest GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-6">
            <Link
              href={forInvestors.href}
              className="text-white/20 hover:text-white/45 transition-colors duration-150"
            >
              {forInvestors.label}
            </Link>
            <p className="text-white/20">Sachsen · Dresden · Leipzig</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
