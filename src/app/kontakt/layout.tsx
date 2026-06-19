import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — Immobilie in Dresden verkaufen",
  description:
    "Sprechen Sie CADA Invest in Dresden an. Kostenlose, unverbindliche Ersteinschätzung Ihrer Immobilie in Sachsen innerhalb von 48 Stunden.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt — Immobilie in Dresden verkaufen | CADA Invest GmbH",
    description:
      "Sprechen Sie CADA Invest in Dresden an. Kostenlose, unverbindliche Ersteinschätzung Ihrer Immobilie innerhalb von 48 Stunden.",
    url: "/kontakt",
    type: "website",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.cada-invest.de" },
    { "@type": "ListItem", position: 2, name: "Kontakt", item: "https://www.cada-invest.de/kontakt" },
  ],
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
