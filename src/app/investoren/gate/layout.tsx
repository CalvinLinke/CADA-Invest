import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investoren-Zugang",
  description: "Geschützter Zugang zum Investorenbereich der CADA Invest GmbH.",
  alternates: { canonical: "/investoren/gate" },
  robots: { index: false, follow: false },
};

export default function InvestorenGateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
