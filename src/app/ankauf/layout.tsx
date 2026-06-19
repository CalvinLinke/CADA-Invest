import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immobilie verkaufen in Dresden & Sachsen — Direktankauf",
  description:
    "CADA Invest kauft Ihre Wohnimmobilie in Sachsen direkt an: Angebot in 48 Stunden, Notartermin in unter 4 Wochen, jeder Zustand. Diskret, kostenlos, unverbindlich.",
  alternates: { canonical: "/ankauf" },
  openGraph: {
    title: "Immobilie verkaufen in Dresden & Sachsen — Direktankauf | CADA Invest GmbH",
    description:
      "CADA Invest kauft Ihre Wohnimmobilie in Sachsen direkt an: Angebot in 48 Stunden, Notartermin in unter 4 Wochen, jeder Zustand.",
    url: "/ankauf",
    type: "website",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.cada-invest.de" },
    { "@type": "ListItem", position: 2, name: "Ankauf", item: "https://www.cada-invest.de/ankauf" },
  ],
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was kauft CADA Invest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir erwerben leerstehende und leerwerdende Einzelwohnungen, Wohnungspakete sowie Mehrfamilienhäuser in Sachsen, unabhängig vom Zustand.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange dauert der gesamte Prozess?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Von der ersten Kontaktaufnahme bis zur notariellen Beurkundung vergehen in der Regel 3–4 Wochen. Wir passen uns dabei Ihrem Zeitplan an.",
      },
    },
    {
      "@type": "Question",
      name: "Entstehen für mich Kosten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Für Sie entstehen keinerlei Kosten. Unser Angebot ist kostenlos und vollständig unverbindlich. Anfallende Nebenkosten übernehmen wir.",
      },
    },
    {
      "@type": "Question",
      name: "Muss die Immobilie renoviert sein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein. Wir kaufen Immobilien in jedem Zustand, auch stark sanierungsbedürftige Objekte oder solche mit baulichen Mängeln.",
      },
    },
    {
      "@type": "Question",
      name: "Ich bin Teil einer Erbengemeinschaft. Ist das möglich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Wir haben Erfahrung mit Erbfällen und unterstützen bei der Koordination. Sprechen Sie uns an, wir finden gemeinsam eine Lösung.",
      },
    },
  ],
};

export default function AnkaufLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      {children}
    </>
  );
}
