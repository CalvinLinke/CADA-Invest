import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referenzen: Ankaufsprojekte in Dresden & Sachsen",
  description:
    "Ausgewählte Ankaufs- und Aufwertungsprojekte von CADA Invest in Dresden und Sachsen — Vorher-Nachher-Einblicke realisierter Wohnimmobilien.",
  alternates: { canonical: "/referenzen" },
  openGraph: {
    title: "Referenzen: Ankaufsprojekte in Dresden & Sachsen | CADA Invest GmbH",
    description:
      "Ausgewählte Ankaufs- und Aufwertungsprojekte in Dresden und Sachsen — Vorher-Nachher-Einblicke realisierter Wohnimmobilien.",
    url: "/referenzen",
    type: "website",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.cada-invest.de" },
    { "@type": "ListItem", position: 2, name: "Referenzen", item: "https://www.cada-invest.de/referenzen" },
  ],
};

export default function ReferenzenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
