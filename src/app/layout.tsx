import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";

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

export const metadata: Metadata = {
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
    title: "CADA Invest GmbH | Immobilienankauf Sachsen",
    description:
      "Professioneller Direktankauf von Wohnimmobilien in Sachsen. Angebot in 48 Stunden.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
