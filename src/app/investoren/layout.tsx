import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investoren — Immobilieninvestments in Sachsen",
  description:
    "Investitionsmöglichkeiten mit CADA Invest in Sachsen: Ankauf, Aufwertung und Weiterverkauf von Wohnimmobilien. Informationen für Kapitalanleger und Partner.",
  alternates: { canonical: "/investoren" },
  openGraph: {
    title: "Investoren — Immobilieninvestments in Sachsen | CADA Invest GmbH",
    description:
      "Investitionsmöglichkeiten mit CADA Invest in Sachsen: Ankauf, Aufwertung und Weiterverkauf von Wohnimmobilien. Informationen für Kapitalanleger.",
    url: "/investoren",
    type: "website",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.cada-invest.de" },
    { "@type": "ListItem", position: 2, name: "Investoren", item: "https://www.cada-invest.de/investoren" },
  ],
};

export default function InvestorenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
