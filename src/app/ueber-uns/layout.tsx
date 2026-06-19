import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns — Immobilienankäufer aus Dresden",
  description:
    "CADA Invest GmbH: professioneller, diskreter Immobilienankäufer mit Fokus auf Wohnimmobilien in Dresden und Sachsen. Markterfahrung und starkes lokales Netzwerk.",
  alternates: { canonical: "/ueber-uns" },
  openGraph: {
    title: "Über uns — Immobilienankäufer aus Dresden | CADA Invest GmbH",
    description:
      "Professioneller, diskreter Immobilienankäufer mit Fokus auf Wohnimmobilien in Dresden und Sachsen. Markterfahrung und starkes lokales Netzwerk.",
    url: "/ueber-uns",
    type: "website",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.cada-invest.de" },
    { "@type": "ListItem", position: 2, name: "Über uns", item: "https://www.cada-invest.de/ueber-uns" },
  ],
};

export default function UeberUnsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
