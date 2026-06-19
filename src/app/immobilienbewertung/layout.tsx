import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immobilienbewertung Dresden — kostenlos in 48 Stunden",
  description:
    "Kostenlose, realistische Immobilienbewertung für Dresden und ganz Sachsen — diskret und unverbindlich. Ihre Einschätzung erhalten Sie innerhalb von 48 Stunden.",
  alternates: { canonical: "/immobilienbewertung" },
  openGraph: {
    title: "Immobilienbewertung Dresden — kostenlos in 48 Stunden | CADA Invest GmbH",
    description:
      "Kostenlose, realistische Immobilienbewertung für Dresden und ganz Sachsen — diskret und unverbindlich, innerhalb von 48 Stunden.",
    url: "/immobilienbewertung",
    type: "website",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.cada-invest.de" },
    { "@type": "ListItem", position: 2, name: "Immobilienbewertung", item: "https://www.cada-invest.de/immobilienbewertung" },
  ],
};

export default function BewertungLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
