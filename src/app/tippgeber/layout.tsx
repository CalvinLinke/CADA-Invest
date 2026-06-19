import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tippgeber werden — bis zu 2.500 € Prämie",
  description:
    "Kennen Sie einen Eigentümer mit Verkaufswunsch in Sachsen? Geben Sie uns den Hinweis und erhalten Sie nach erfolgreichem Notartermin bis zu 2.500 € Prämie.",
  alternates: { canonical: "/tippgeber" },
  openGraph: {
    title: "Tippgeber werden — bis zu 2.500 € Prämie | CADA Invest GmbH",
    description:
      "Kennen Sie einen Eigentümer mit Verkaufswunsch in Sachsen? Geben Sie uns den Hinweis und erhalten Sie nach erfolgreichem Notartermin bis zu 2.500 € Prämie.",
    url: "/tippgeber",
    type: "website",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.cada-invest.de" },
    { "@type": "ListItem", position: 2, name: "Tippgeber", item: "https://www.cada-invest.de/tippgeber" },
  ],
};

export default function TippgeberLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
