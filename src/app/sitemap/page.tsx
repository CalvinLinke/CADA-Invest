import type { Metadata } from "next";
import Link from "next/link";
import { RuneDivider } from "@/components/ui/RuneDivider";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Übersicht aller Seiten der CADA Invest GmbH Website.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    label: "Hauptseiten",
    links: [
      { label: "Startseite",            href: "/" },
      { label: "Immobilienankauf",      href: "/ankauf" },
      { label: "Immobilienbewertung",   href: "/immobilienbewertung" },
      { label: "Referenzen",            href: "/referenzen" },
      { label: "Blog",                  href: "/blog" },
    ],
  },
  {
    label: "Über CADA Invest",
    links: [
      { label: "Über uns",              href: "/ueber-uns" },
      { label: "Kontakt",               href: "/kontakt" },
    ],
  },
  {
    label: "Partner & Netzwerk",
    links: [
      { label: "Kooperationen",         href: "/partner" },
      { label: "Tippgeber werden",      href: "/tippgeber" },
    ],
  },
  {
    label: "Rechtliches",
    links: [
      { label: "Impressum",             href: "/impressum" },
      { label: "Datenschutzerklärung",  href: "/datenschutz" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-brand-cream pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">

        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-4">
          Website-Übersicht
        </p>
        <RuneDivider className="mb-6" />
        <h1 className="text-4xl md:text-5xl font-nazare text-brand-anthracite mb-4">
          Sitemap
        </h1>
        <p className="text-base text-brand-anthracite/60 mb-16 max-w-lg">
          Alle Seiten der CADA Invest GmbH Website auf einen Blick.
        </p>

        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
          {sections.map((section) => (
            <div key={section.label}>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-4">
                {section.label}
              </p>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-brand-anthracite/70 hover:text-brand-green transition-colors duration-150 text-sm"
                    >
                      <span className="w-3 h-px bg-brand-gold/50 group-hover:bg-brand-gold transition-colors duration-150 shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-brand-anthracite/10">
          <p className="text-xs text-brand-anthracite/40">
            Maschinenlesbare Sitemap:{" "}
            <a
              href="/sitemap.xml"
              className="text-brand-gold/70 hover:text-brand-gold transition-colors duration-150 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              sitemap.xml
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}
