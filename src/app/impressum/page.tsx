import type { Metadata } from "next";
import { RuneIcon } from "@/components/ui/RuneIcon";
import { RuneDivider } from "@/components/ui/RuneDivider";

export const metadata: Metadata = {
  title: "Impressum | CADA Invest GmbH",
  description: "Impressum der CADA Invest GmbH gemäß § 5 TMG.",
};

export default function ImpressumPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 bg-brand-green relative overflow-hidden">
        <RuneIcon size={360} className="absolute bottom-[-40px] right-[-60px] text-white/[0.05] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10">
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-4">
            Rechtliches
          </p>
          <h1 className="text-5xl font-nazare text-white">Impressum</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10">

            {/* Angaben */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-3">
                Angaben gemäß § 5 TMG
              </p>
              <RuneDivider className="max-w-[160px] mb-5" />
              <p className="text-brand-anthracite font-semibold text-lg mb-1">CADA Invest GmbH</p>
              <p className="text-brand-anthracite/70 leading-relaxed">
                Glashütter Straße 53<br />
                01309 Dresden<br />
                Deutschland
              </p>
            </div>

            <div className="border-t border-gray-100" />

            {/* Vertreten durch */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-3">
                Vertreten durch
              </p>
              <p className="text-brand-anthracite/70">
                Geschäftsführer: Calvin Linke, Dave Blümel
              </p>
            </div>

            <div className="border-t border-gray-100" />

            {/* Kontakt */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-3">
                Kontakt
              </p>
              <p className="text-brand-anthracite/70 leading-relaxed">
                E-Mail:{" "}
                <a href="mailto:Info@cada-invest.de" className="text-brand-green hover:text-brand-gold transition-colors">
                  Info@cada-invest.de
                </a>
              </p>
            </div>

            <div className="border-t border-gray-100" />

            {/* Registereintrag */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-3">
                Registereintrag
              </p>
              <p className="text-brand-anthracite/70 leading-relaxed">
                Eingetragen im Handelsregister.<br />
                Registergericht: Amtsgericht Dresden<br />
                Registernummer: HRB 45325
              </p>
            </div>

            <div className="border-t border-gray-100" />

            {/* Umsatzsteuer */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-3">
                Umsatzsteuer-Identifikationsnummer
              </p>
              <p className="text-brand-anthracite/70">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE368436556
              </p>
            </div>

            <div className="border-t border-gray-100" />

            {/* Haftungsausschluss */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-3">
                Haftung für Inhalte
              </p>
              <p className="text-brand-anthracite/65 leading-relaxed text-sm">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div className="border-t border-gray-100" />

            {/* Haftung für Links */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-3">
                Haftung für Links
              </p>
              <p className="text-brand-anthracite/65 leading-relaxed text-sm">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div className="border-t border-gray-100" />

            {/* Urheberrecht */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-3">
                Urheberrecht
              </p>
              <p className="text-brand-anthracite/65 leading-relaxed text-sm">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>

            <div className="border-t border-gray-100" />

            {/* EU-Streitschlichtung */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-3">
                EU-Streitschlichtung
              </p>
              <p className="text-brand-anthracite/65 leading-relaxed text-sm">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-green hover:text-brand-gold transition-colors"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
