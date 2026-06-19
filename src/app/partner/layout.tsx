import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner & Makler-Kooperationen in Sachsen",
  description:
    "Für Makler, Hausverwalter und Vermittler: verlässlicher Ankaufspartner in Sachsen mit schnellen Entscheidungen, fairen Konditionen und diskreter Abwicklung.",
  alternates: { canonical: "/partner" },
  openGraph: {
    title: "Partner & Makler-Kooperationen in Sachsen | CADA Invest GmbH",
    description:
      "Für Makler, Hausverwalter und Vermittler: verlässlicher Ankaufspartner in Sachsen mit schnellen Entscheidungen und diskreter Abwicklung.",
    url: "/partner",
    type: "website",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.cada-invest.de" },
    { "@type": "ListItem", position: 2, name: "Partner", item: "https://www.cada-invest.de/partner" },
  ],
};

export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
