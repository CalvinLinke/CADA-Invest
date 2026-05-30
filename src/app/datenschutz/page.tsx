import type { Metadata } from "next";
import { RuneIcon } from "@/components/ui/RuneIcon";
import { RuneDivider } from "@/components/ui/RuneDivider";

export const metadata: Metadata = {
  title: "Datenschutz — CADA Invest GmbH",
  description: "Datenschutzerklärung der CADA Invest GmbH gemäß DSGVO.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-3">
        {title}
      </p>
      <div className="text-brand-anthracite/65 leading-relaxed text-sm space-y-3">
        {children}
      </div>
    </div>
  );
}

export default function DatenschutzPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 bg-brand-green relative overflow-hidden">
        <RuneIcon size={360} className="absolute bottom-[-40px] right-[-60px] text-white/[0.05] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10">
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-4">
            Rechtliches
          </p>
          <h1 className="text-5xl font-nazare text-white">Datenschutz&shy;erklärung</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10">

            <Section title="1. Verantwortlicher">
              <p>
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
              </p>
              <p>
                <strong className="text-brand-anthracite font-semibold">CADA Invest GmbH</strong><br />
                Glashütter Straße 53<br />
                01309 Dresden<br />
                Deutschland<br /><br />
                Vertreten durch: Calvin Linke (Geschäftsführer)<br />
                E-Mail:{" "}
                <a href="mailto:Info@cada-invest.de" className="text-brand-green hover:text-brand-gold transition-colors">
                  Info@cada-invest.de
                </a>
              </p>
            </Section>

            <div className="border-t border-gray-100" />

            <Section title="2. Allgemeine Hinweise">
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
              </p>
              <p>
                Diese Website wird über Vercel Inc., 340 Pine Street, Suite 900, San Francisco, CA 94104, USA, gehostet. Beim Aufruf dieser Website werden durch Vercel automatisch Server-Logfiles gespeichert, die Ihr Browser an uns übermittelt. Dies sind: Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners sowie Uhrzeit der Serveranfrage. Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Betrieb der Website).
              </p>
            </Section>

            <div className="border-t border-gray-100" />

            <Section title="3. Kontaktformulare">
              <p>
                Wenn Sie uns per Formular oder E-Mail kontaktieren, werden Ihre angegebenen Daten (Name, E-Mail-Adresse, ggf. Telefon, Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p>
                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung bzw. vorvertragliche Maßnahmen) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung Ihrer Anfrage). Die Daten werden gelöscht, sobald sie für die Erreichung des Zwecks ihrer Erhebung nicht mehr erforderlich sind — in der Regel nach abschließender Bearbeitung Ihrer Anfrage. Sofern gesetzliche Aufbewahrungspflichten bestehen (z. B. §§ 238, 257 HGB, § 147 AO), werden die Daten für die gesetzlich vorgeschriebene Dauer aufbewahrt.
              </p>
              <p>
                Für den Versand von E-Mail-Benachrichtigungen nutzen wir den Dienst Resend (Resend Inc., 2261 Market St #5039, San Francisco, CA 94114, USA). Mit Resend besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. Resend verarbeitet die übermittelten Daten ausschließlich zur Weiterleitung der Nachricht an uns und nicht für eigene Zwecke. Die Datenübertragung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).
              </p>
            </Section>

            <div className="border-t border-gray-100" />

            <Section title="4. Immobilienbewertung und Tippgeberanfragen">
              <p>
                Bei der Nutzung unseres Immobilienbewertungsformulars werden die von Ihnen eingegebenen Daten (Objektdaten, Kontaktdaten) zwecks Erstellung einer unverbindlichen Immobilienbewertung verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen auf Anfrage der betroffenen Person).
              </p>
              <p>
                Bei Nutzung des Tippgeberformulars werden Name und E-Mail-Adresse verarbeitet, um Ihre Anfrage zu bearbeiten und ggf. mit Ihnen in Kontakt zu treten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Entgegennahme und Bearbeitung von Tippgebermeldungen). Eine Weitergabe der Daten an Dritte erfolgt in keinem der genannten Fälle.
              </p>
            </Section>

            <div className="border-t border-gray-100" />

            <Section title="5. Google Maps">
              <p>
                Diese Website verwendet auf der Kontaktseite Google Maps der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Beim Aufruf der Kontaktseite wird automatisch eine Verbindung zu Googles Servern hergestellt, bei der unter anderem Ihre IP-Adresse übertragen wird. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.
              </p>
              <p>
                Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der anschaulichen Darstellung unseres Standorts). Die Datenübertragung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO). Mehr Informationen finden Sie in der Datenschutzerklärung von Google:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-green hover:text-brand-gold transition-colors"
                >
                  https://policies.google.com/privacy
                </a>.
              </p>
            </Section>

            <div className="border-t border-gray-100" />

            <Section title="6. Cookies">
              <p>
                Unsere Website verwendet keine Tracking-Cookies oder Analyse-Tools. Es werden lediglich technisch notwendige Cookies gesetzt, die für den Betrieb der Website erforderlich sind. Diese Cookies speichern keine personenbezogenen Daten und werden nach Ende der Browsersitzung gelöscht.
              </p>
            </Section>

            <div className="border-t border-gray-100" />

            <Section title="7. Ihre Rechte">
              <p>Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten grundsätzlich folgende Rechte zu:</p>
              <ul className="space-y-1.5 pl-4">
                {[
                  "Recht auf Auskunft (Art. 15 DSGVO)",
                  "Recht auf Berichtigung (Art. 16 DSGVO)",
                  "Recht auf Löschung (Art. 17 DSGVO)",
                  "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                  "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
                  "Widerspruchsrecht (Art. 21 DSGVO)",
                ].map((r) => (
                  <li key={r} className="flex items-start gap-2">
                    <span className="text-brand-gold mt-0.5">–</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <p>
                Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der zuständigen Aufsichtsbehörde beschweren. In Sachsen ist dies der Sächsische Datenschutz- und Transparenzbeauftragte (SDTB), Devrientstraße 5, 01067 Dresden.
              </p>
            </Section>

            <div className="border-t border-gray-100" />

            <Section title="8. Datensicherheit">
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </Section>

            <div className="border-t border-gray-100" />

            <Section title="9. Aktualität dieser Datenschutzerklärung">
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2025. Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
              </p>
            </Section>

          </div>
        </div>
      </section>
    </>
  );
}
