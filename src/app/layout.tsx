import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { CookieBanner } from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-nazare",
  display: "swap",
  weight: ["400", "500"],
});

const SITE_URL = "https://www.cada-invest.de";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CADA Invest GmbH | Immobilienankauf Sachsen",
    template: "%s | CADA Invest GmbH",
  },
  description:
    "Professioneller Immobilienankauf in Sachsen und Dresden. Angebot innerhalb von 48 Stunden, Notartermin in unter 4 Wochen. Diskret, effizient, verlässlich.",
  keywords: [
    "Immobilienankauf Sachsen",
    "Immobilien verkaufen Dresden",
    "Wohnung verkaufen Sachsen",
    "Direktankauf Immobilien",
    "CADA Invest",
    "Immobilienbewertung Dresden",
  ],
  authors: [{ name: "CADA Invest GmbH" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "CADA Invest GmbH",
    url: SITE_URL,
    title: "CADA Invest GmbH | Immobilienankauf Sachsen",
    description:
      "Professioneller Direktankauf von Wohnimmobilien in Sachsen. Angebot in 48 Stunden.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CADA Invest GmbH | Immobilienankauf Sachsen",
    description:
      "Professioneller Direktankauf von Wohnimmobilien in Sachsen. Angebot in 48 Stunden.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "RealEstateAgent", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "CADA Invest GmbH",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/CI/logo-cropped.png` },
      image: `${SITE_URL}/CI/logo-cropped.png`,
      description:
        "Professioneller Direktankauf von Wohnimmobilien in Sachsen und Dresden. Angebot innerhalb von 48 Stunden, Notartermin in unter 4 Wochen.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Glashütter Straße 53",
        postalCode: "01309",
        addressLocality: "Dresden",
        addressRegion: "Sachsen",
        addressCountry: "DE",
      },
      geo: { "@type": "GeoCoordinates", latitude: 51.0494, longitude: 13.7886 },
      email: "Info@cada-invest.de",
      areaServed: [
        { "@type": "City", name: "Dresden" },
        { "@type": "City", name: "Leipzig" },
        { "@type": "State", name: "Sachsen" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "14:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "CADA Invest GmbH",
      inLanguage: "de-DE",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-brand-green focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Zum Hauptinhalt springen
        </a>
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
