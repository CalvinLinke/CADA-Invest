import Link from "next/link";
import { RuneIcon } from "@/components/ui/RuneIcon";
import { RuneDivider } from "@/components/ui/RuneDivider";
import { Badge } from "@/components/ui/Badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description: "Fachartikel und Marktanalysen zum Immobilienverkauf in Sachsen und Dresden.",
};

const posts = [
  {
    slug: "immobilie-verkaufen-ohne-makler",
    date: "15. März 2024",
    category: "Verkaufsprozess",
    title: "Wohnung verkaufen ohne Makler — Ablauf, Vorteile und Risiken",
    excerpt: "Der Direktverkauf ohne Makler bietet echte Vorteile, setzt aber Marktwissen voraus. Wir erklären, worauf es ankommt.",
    readTime: "5 Min.",
  },
  {
    slug: "immobilienmarkt-dresden-2024",
    date: "2. Februar 2024",
    category: "Marktanalyse",
    title: "Immobilienmarkt Dresden 2024: Preise, Trends und Ausblick",
    excerpt: "Nach einer Korrekturphase zeigen sich erste Stabilisierungszeichen. Welche Stadtteile performen, welche stagnieren.",
    readTime: "7 Min.",
  },
  {
    slug: "erbfall-immobilien-richtig-handeln",
    date: "18. Januar 2024",
    category: "Erbfall",
    title: "Erbfall: Immobilie geerbt — was jetzt zu tun ist",
    excerpt: "Ein Erbfall geht oft mit emotionalem und bürokratischem Aufwand einher. Wir erklären die wichtigsten Schritte.",
    readTime: "6 Min.",
  },
  {
    slug: "bewertungsfaktoren-eigentumswohnung",
    date: "5. Januar 2024",
    category: "Bewertung",
    title: "Was bestimmt den Wert Ihrer Eigentumswohnung?",
    excerpt: "Lage, Zustand, Baujahr, Ausstattung — ein Überblick über die wichtigsten Preisfaktoren beim Wohnungsverkauf.",
    readTime: "4 Min.",
  },
];

const categoryColors: Record<string, string> = {
  "Verkaufsprozess": "bg-brand-green/10 text-brand-green",
  "Marktanalyse":    "bg-brand-gold/10 text-brand-gold",
  "Erbfall":         "bg-purple-50 text-purple-700",
  "Bewertung":       "bg-blue-50 text-blue-700",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 bg-brand-green relative overflow-hidden">
        <RuneIcon size={480} className="absolute bottom-[-60px] right-[-80px] text-white/[0.05] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <Badge variant="white" className="mb-8">Blog & Insights</Badge>
          <h1 className="text-5xl md:text-6xl font-nazare text-white mb-6 max-w-2xl">
            Marktkenntnis &{" "}
            <span className="text-brand-gold">Expertenwissen</span>
          </h1>
          <p className="text-lg text-white/65 max-w-lg">
            Fachartikel und Marktanalysen zum Immobilienverkauf in Sachsen — für Eigentümer, die fundierte Entscheidungen treffen wollen.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">
              Alle Beiträge
            </p>
            <RuneDivider className="max-w-xs" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-brand-cream relative overflow-hidden">
                  <RuneIcon
                    size={160}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-gold/20 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] ?? "bg-gray-100 text-gray-600"}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-brand-anthracite/45 mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime} Lesezeit</span>
                  </div>
                  <h2 className="font-nazare text-xl text-brand-anthracite mb-3 group-hover:text-brand-green transition-colors duration-150">
                    {post.title}
                  </h2>
                  <p className="text-sm text-brand-anthracite/60 leading-relaxed">{post.excerpt}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-brand-gold text-sm font-semibold">
                    Weiterlesen
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform duration-150" aria-hidden="true">
                      <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
