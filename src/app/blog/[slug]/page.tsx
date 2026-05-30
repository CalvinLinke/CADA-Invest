import Link from "next/link";
import { RuneIcon } from "@/components/ui/RuneIcon";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `Blog — ${params.slug.replace(/-/g, " ")}`,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <section className="pt-40 pb-16 bg-brand-green relative overflow-hidden">
        <RuneIcon size={360} className="absolute bottom-[-40px] right-[-60px] text-white/[0.05] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 lg:px-10 relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M11.5 7h-9M6 3.5L2.5 7 6 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Zurück zum Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-nazare text-white mb-4">
            Artikel: {params.slug.replace(/-/g, " ")}
          </h1>
          <p className="text-white/55 text-sm">Dieser Artikel wird in Kürze veröffentlicht.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <RuneIcon size={60} className="text-brand-gold/30 mx-auto mb-6" />
          <p className="text-brand-anthracite/55 mb-8">
            Dieser Artikel wird demnächst veröffentlicht. Besuchen Sie uns bald wieder.
          </p>
          <Button href="/blog" variant="secondary" arrow={false}>
            Zum Blog
          </Button>
        </div>
      </section>
    </>
  );
}
