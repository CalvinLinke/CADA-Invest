"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { RuneIcon } from "@/components/ui/RuneIcon";
import { RuneDivider } from "@/components/ui/RuneDivider";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/sections/CtaSection";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const criteria = [
  "Lage: Sachsen, insbesondere Dresden, Leipzig, Chemnitz",
  "Wohnimmobilien: Einzelwohnungen, Pakete, Mehrfamilienhäuser",
  "Zustand: beliebig, auch sanierungsbedürftig",
  "Größe: ab ca. 30 m² bis Mehrfamilienhäuser",
  "Leerstand: leerstehende oder leerwerdende Immobilien",
  "Off-Market-Objekte bevorzugt, diskret",
];

export default function PartnerPage() {
  const [form, setForm]       = useState({ name: "", email: "", telefon: "", immobilienart: "", adresse: "", groesse: "", zustand: "", anmerkungen: "" });
  const [step, setStep]       = useState<1 | 2>(1);
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);

  function update(k: keyof typeof form, v: string) {
    setForm((p) => ({ ...p, [k]: v }));
  }

  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
    } finally {
      setLoading(false);
    }
  }

  const inp = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-anthracite placeholder:text-brand-anthracite/40 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/10 transition-all";
  const lbl = "block text-[12px] font-semibold text-brand-anthracite/70 mb-1.5 uppercase tracking-wide";

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 bg-brand-green relative overflow-hidden">
        <RuneIcon size={480} className="absolute bottom-[-60px] right-[-80px] text-white/[0.05] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-2xl">
            <motion.div variants={fadeUp}>
              <Badge variant="white" className="mb-8">B2B Partner</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-nazare text-white mb-6">
              Ihr verlässlicher{" "}
              <span className="text-brand-gold">Ankaufspartner.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/65 max-w-lg">
              Für Makler, Hausverwalter und Netzwerkpartner, die diskrete und schnelle Transaktionen schätzen.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Für Partner */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.p variants={fadeUp} className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">
                Was wir bieten
              </motion.p>
              <RuneDivider className="max-w-xs mb-6" />
              <motion.h2 variants={fadeUp} className="text-4xl font-nazare text-brand-anthracite mb-6">
                Zusammenarbeit auf Augenhöhe
              </motion.h2>
              <motion.div variants={staggerContainer} className="space-y-4">
                {[
                  { t: "Schnelle Entscheidungen",       d: "Klare Rückmeldung innerhalb von 24–48 Stunden nach Einreichen eines Objekts." },
                  { t: "Faire Partnerkonditionen",      d: "Für Vermittler attraktive Vermittlungsgebühren bei erfolgreichen Transaktionen." },
                  { t: "Diskrete Abwicklung",           d: "Off-Market-Objekte werden vertraulich behandelt." },
                  { t: "Zuverlässige Abschlüsse",       d: "Wir stehen zu unseren Angeboten." },
                ].map((i) => (
                  <motion.div key={i.t} variants={fadeUp} className="flex items-start gap-4">
                    <RuneIcon size={16} className="text-brand-gold mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-brand-anthracite text-sm">{i.t}</p>
                      <p className="text-sm text-brand-anthracite/60 mt-1">{i.d}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <div className="bg-brand-cream rounded-2xl p-8 border border-brand-gold/15 relative overflow-hidden">
                <RuneIcon size={120} className="absolute -top-4 -right-4 text-brand-gold/[0.07] pointer-events-none" />
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-4">
                  Ankaufskriterien
                </p>
                <ul className="space-y-3">
                  {criteria.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm">
                      <RuneIcon size={14} className="text-brand-gold mt-0.5 shrink-0" />
                      <span className="text-brand-anthracite/75">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ankaufsprofil Download */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: text + CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-3">
                Für Partner & Makler
              </p>
              <RuneDivider className="max-w-[180px]" />
              <h2 className="text-3xl md:text-4xl font-nazare text-brand-anthracite mt-5 mb-5 leading-tight">
                Unser Ankaufsprofil:{" "}
                <span className="text-brand-green">kompakt & klar</span>
              </h2>
              <p className="text-brand-anthracite/60 leading-relaxed mb-8 max-w-md">
                Standorte, Objekttypen, Ankaufskriterien und Kontaktdaten kompakt auf einer Seite, hochwertig gestaltet und direkt weiterleitbar.
              </p>

              {/* Download stats row */}
              <div className="flex items-center gap-8 mb-8 pb-8 border-b border-gray-100">
                {[
                  { val: "2", label: "Seiten" },
                  { val: "A4", label: "Format" },
                  { val: "PDF", label: "Dateiformat" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-nazare text-brand-gold leading-none">{s.val}</p>
                    <p className="text-xs text-brand-anthracite/50 mt-1 tracking-wide">{s.label}</p>
                  </div>
                ))}
              </div>

              <a
                href="/api/ankaufsprofil"
                download="CADA-Invest-Ankaufsprofil.pdf"
                className="inline-flex items-center gap-3 bg-brand-green hover:bg-[#0f3d1f] text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors duration-[450ms] ease-in-out group"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
                     className="transition-transform duration-[450ms] group-hover:translate-y-0.5">
                  <path d="M8 2v8M4 7l4 4 4-4M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Ankaufsprofil herunterladen
              </a>
            </motion.div>

            {/* Right: document preview */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-56 select-none">
                {/* Page 2 peeking out behind */}
                <div
                  className="absolute inset-0 bg-white border border-gray-200 rounded-xl shadow-sm"
                  style={{ transform: "rotate(3deg) translate(10px, 6px)", aspectRatio: "1/1.414" }}
                />
                {/* Cover card */}
                <div
                  className="relative bg-brand-green rounded-xl overflow-hidden shadow-2xl"
                  style={{ aspectRatio: "1/1.414", transform: "rotate(-1.5deg)" }}
                >
                  {/* Rune watermark */}
                  <RuneIcon size={120} className="absolute -bottom-4 -right-4 text-brand-gold/10 pointer-events-none" />

                  <div className="absolute inset-0 p-5 flex flex-col justify-between">
                    {/* Header */}
                    <div className="flex items-center gap-2">
                      <div className="w-0.5 h-4 bg-brand-gold" />
                      <span className="text-white/60 text-[7px] font-semibold tracking-[0.18em] uppercase font-inter">
                        CADA INVEST GMBH
                      </span>
                    </div>

                    {/* Title area */}
                    <div>
                      <div className="w-6 h-px bg-brand-gold mb-3" />
                      <p className="text-white font-nazare text-lg leading-tight mb-2">
                        Ankaufsprofil
                      </p>
                      <p className="text-white/50 text-[8px] leading-relaxed font-inter">
                        Direktankauf von{"\n"}Wohnimmobilien
                      </p>
                      <div className="w-6 h-px bg-brand-gold mt-3" />
                    </div>

                    {/* Footer */}
                    <div>
                      <div className="w-full h-px bg-brand-gold/25 mb-2" />
                      <p className="text-brand-gold text-[7px] tracking-[0.2em] font-semibold font-inter">
                        SACHSEN · 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Tippgeber CTA */}
      <section className="py-24 bg-brand-anthracite relative overflow-hidden">
        <RuneIcon size={480} className="absolute -left-20 top-1/2 -translate-y-1/2 text-white/[0.03] pointer-events-none" />
        <RuneIcon size={200} className="absolute right-10 bottom-10 text-brand-gold/[0.06] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.p variants={fadeUp} className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-3">
                Tippgeberprogramm
              </motion.p>
              <RuneDivider light className="max-w-[180px]" />
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-nazare text-white mt-5 mb-5 leading-tight">
                Kennen Sie einen Eigentümer,{" "}
                <span className="text-brand-gold">der verkaufen möchte?</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/55 leading-relaxed mb-8 max-w-lg">
                Geben Sie uns den Hinweis, kein Aufwand, keine Verpflichtung. Nach erfolgreichem Notartermin erhalten Sie Ihre Prämie.
              </motion.p>
              <motion.div variants={fadeUp}>
                <a
                  href="/tippgeber"
                  className="inline-flex items-center gap-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-semibold text-[15px] px-8 py-4 rounded-full transition-all duration-[450ms] ease-in-out group"
                >
                  Zum Tippgeberprogramm
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"
                       className="transition-transform duration-[450ms] group-hover:translate-x-1">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex justify-center lg:justify-end"
            >
              <div className="text-center">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold/60 mb-4">Ihre Prämie</p>
                <p className="text-7xl md:text-8xl font-nazare text-brand-gold leading-none">1.000 –</p>
                <p className="text-7xl md:text-8xl font-nazare text-brand-gold leading-none mb-4">2.500 €</p>
                <p className="text-white/35 text-xs tracking-wide">nach erfolgreichem Notartermin</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kontaktformular */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-2xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">Deal einreichen</p>
            <RuneDivider className="max-w-xs mx-auto" />
            <h2 className="text-4xl font-nazare text-brand-anthracite mt-4">Objekt einreichen</h2>
            <p className="text-brand-anthracite/60 mt-3 text-sm max-w-sm mx-auto">
              Senden Sie uns Ihr Objekt direkt zu. Wir melden uns innerhalb von 24 Stunden.
            </p>
          </div>

          {sent ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-gray-100">
              <RuneIcon size={48} className="text-brand-gold mx-auto mb-4" />
              <h3 className="text-2xl font-nazare text-brand-anthracite mb-2">Vielen Dank!</h3>
              <p className="text-brand-anthracite/60 text-sm">Wir melden uns innerhalb von 24 Stunden.</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100">
              {/* Step indicator */}
              <div className="flex items-center gap-2 mb-8">
                {([1, 2] as const).map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${step >= s ? "bg-brand-green text-white" : "bg-gray-100 text-gray-400"}`}>
                      {step > s ? "✓" : s}
                    </div>
                    <span className={`text-xs font-medium hidden sm:block ${step >= s ? "text-brand-green" : "text-gray-400"}`}>
                      {s === 1 ? "Kontaktdaten" : "Objektdaten"}
                    </span>
                    {s < 2 && <div className={`w-8 h-px ${step > s ? "bg-brand-green" : "bg-gray-200"}`} />}
                  </div>
                ))}
              </div>

              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className={lbl}>Name</label>
                    <input type="text" className={inp} required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Max Mustermann" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={lbl}>E-Mail</label>
                      <input type="email" className={inp} required value={form.email} onChange={(e) => update("email", e.target.value)} />
                    </div>
                    <div>
                      <label className={lbl}>Telefon</label>
                      <input type="tel" className={inp} value={form.telefon} onChange={(e) => update("telefon", e.target.value)} />
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button
                      onClick={() => setStep(2)}
                      variant="primary" size="md"
                      disabled={!form.name || !form.email}
                    >
                      Weiter
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={submit} className="space-y-4">
                  <div>
                    <label className={lbl}>Immobilienart</label>
                    <select className={inp} required value={form.immobilienart} onChange={(e) => update("immobilienart", e.target.value)}>
                      <option value="">Bitte auswählen</option>
                      <option>Eigentumswohnung</option>
                      <option>Mehrfamilienhaus</option>
                      <option>Wohnungspaket</option>
                      <option>Einfamilienhaus / DHH</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                  <div>
                    <label className={lbl}>Adresse</label>
                    <input type="text" className={inp} value={form.adresse} onChange={(e) => update("adresse", e.target.value)} placeholder="Musterstraße 5, 01069 Dresden" />
                  </div>
                  <div>
                    <label className={lbl}>Größe (m²)</label>
                    <input type="number" className={inp} value={form.groesse} onChange={(e) => update("groesse", e.target.value)} placeholder="75" />
                  </div>
                  <div>
                    <label className={lbl}>Zustand</label>
                    <select className={inp} value={form.zustand} onChange={(e) => update("zustand", e.target.value)}>
                      <option value="">Bitte auswählen</option>
                      <option>Bewohnt / Vermietet</option>
                      <option>Leerstehend</option>
                      <option>Leerwerdend (demnächst frei)</option>
                      <option>Renovierungsbedürftig</option>
                      <option>Sanierungsbedürftig</option>
                    </select>
                  </div>
                  <div>
                    <label className={lbl}>Anmerkungen</label>
                    <textarea className={`${inp} resize-none h-24`} value={form.anmerkungen} onChange={(e) => update("anmerkungen", e.target.value)} placeholder="Weitere Informationen zum Objekt..." />
                  </div>
                  {error && (
                    <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">{error}</p>
                  )}
                  <div className="flex items-center justify-between pt-2">
                    <button type="button" onClick={() => setStep(1)} className="text-sm text-brand-anthracite/50 hover:text-brand-anthracite transition-colors">
                      ← Zurück
                    </button>
                    <Button type="submit" variant="primary" size="md" disabled={loading}>
                      {loading ? "Wird gesendet..." : "Objekt einreichen"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </section>

      <CtaSection
        headline="Regelmäßig Objekte?"
        subtext="Werden Sie fester Netzwerkpartner von CADA Invest. Wir bieten verlässliche Abwicklung und schnelle Entscheidungen."
      />
    </>
  );
}
