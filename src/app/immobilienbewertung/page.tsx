"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { RuneIcon } from "@/components/ui/RuneIcon";
import { RuneDivider } from "@/components/ui/RuneDivider";
import { Badge } from "@/components/ui/Badge";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

type Step = 1 | 2 | 3;

interface FormData {
  strasse: string;
  plz: string;
  ort: string;
  typ: string;
  groesse: string;
  zimmer: string;
  baujahr: string;
  zustand: string;
  info: string;
  name: string;
  email: string;
  telefon: string;
  kontaktweg: string;
}

const initialForm: FormData = {
  strasse: "", plz: "", ort: "",
  typ: "", groesse: "", zimmer: "", baujahr: "", zustand: "", info: "",
  name: "", email: "", telefon: "", kontaktweg: "E-Mail",
};

export default function BewertungPage() {
  const [step, setStep]       = useState<Step>(1);
  const [form, setForm]       = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [sent, setSent]       = useState(false);
  const [error, setError]     = useState("");

  function update(field: keyof FormData, val: string) {
    setForm((prev) => ({ ...prev, [field]: val }));
  }

  async function submit() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/bewertung", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Fehler beim Senden");
      setSent(true);
    } catch {
      setError("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
    } finally {
      setLoading(false);
    }
  }

  const inputCls =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-anthracite placeholder:text-brand-anthracite/40 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/10 transition-all";
  const labelCls = "block text-[12px] font-semibold text-brand-anthracite/70 mb-1.5 uppercase tracking-wide";

  if (sent) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-brand-cream pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg mx-auto px-6"
        >
          <RuneIcon size={64} className="text-brand-gold mx-auto mb-6" />
          <h1 className="text-4xl font-nazare text-brand-anthracite mb-4">
            Vielen Dank für Ihre Anfrage.
          </h1>
          <p className="text-brand-anthracite/65 mb-8 leading-relaxed">
            Wir haben Ihre Bewertungsanfrage erhalten und melden uns innerhalb von 48 Stunden bei Ihnen.
          </p>
          <Button href="/" variant="secondary" arrow={false}>
            Zurück zur Startseite
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 bg-brand-green relative overflow-hidden">
        <RuneIcon size={480} className="absolute bottom-[-60px] right-[-80px] text-white/[0.05] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp}>
              <Badge variant="white" className="mb-8">Kostenlos & Unverbindlich</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-nazare text-white mb-6">
              Immobilien&shy;bewertung
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/65 max-w-lg">
              Erhalten Sie innerhalb von 48 Stunden eine realistische Einschätzung Ihrer Immobilie, diskret und kostenlos.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Progress */}
      <div className="bg-white border-b border-gray-100 sticky top-20 z-30">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center gap-3">
          {([1, 2, 3] as Step[]).map((s) => (
            <div key={s} className="flex items-center gap-3 flex-1">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  step >= s
                    ? "bg-brand-green text-white"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {step > s ? "✓" : s}
              </div>
              <span className={`text-xs font-medium hidden sm:block ${step >= s ? "text-brand-green" : "text-gray-400"}`}>
                {s === 1 ? "Immobilie" : s === 2 ? "Details" : "Kontakt"}
              </span>
              {s < 3 && <div className={`flex-1 h-px ${step > s ? "bg-brand-green" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <section className="py-16 bg-brand-cream min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mb-10"
          >
            <motion.p variants={fadeUp} className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">
              Kostenlose Bewertung
            </motion.p>
            <RuneDivider className="max-w-sm mb-6" />
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-nazare text-brand-anthracite mb-6">Wo befindet sich Ihre Immobilie?</h2>
                <div className="space-y-4">
                  <div>
                    <label className={labelCls}>Art der Immobilie</label>
                    <select className={inputCls} value={form.typ} onChange={(e) => update("typ", e.target.value)}>
                      <option value="">Bitte auswählen</option>
                      <option value="Eigentumswohnung">Eigentumswohnung</option>
                      <option value="Mehrfamilienhaus">Mehrfamilienhaus</option>
                      <option value="Einfamilienhaus">Einfamilienhaus</option>
                      <option value="Doppelhaushälfte">Doppelhaushälfte</option>
                      <option value="Sonstiges">Sonstiges</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Straße & Hausnummer</label>
                    <input type="text" className={inputCls} placeholder="Musterstraße 12" value={form.strasse} onChange={(e) => update("strasse", e.target.value)} />
                  </div>
                  <div className="grid grid-cols-[120px_1fr] gap-4">
                    <div>
                      <label className={labelCls}>PLZ</label>
                      <input type="text" className={inputCls} placeholder="01001" value={form.plz} onChange={(e) => update("plz", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelCls}>Ort</label>
                      <input type="text" className={inputCls} placeholder="Dresden" value={form.ort} onChange={(e) => update("ort", e.target.value)} />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-center">
                  <Button onClick={() => setStep(2)} variant="primary">
                    Weiter
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-nazare text-brand-anthracite mb-6">Details zur Immobilie</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Wohnfläche (m²)</label>
                      <input type="number" className={inputCls} placeholder="75" value={form.groesse} onChange={(e) => update("groesse", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelCls}>Zimmer</label>
                      <input type="number" className={inputCls} placeholder="3" value={form.zimmer} onChange={(e) => update("zimmer", e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Baujahr</label>
                    <input type="number" className={inputCls} placeholder="1985" value={form.baujahr} onChange={(e) => update("baujahr", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Zustand</label>
                    <select className={inputCls} value={form.zustand} onChange={(e) => update("zustand", e.target.value)}>
                      <option value="">Bitte auswählen</option>
                      <option value="Neuwertig / Erstbezug">Neuwertig / Erstbezug</option>
                      <option value="Gut / Gepflegt">Gut / Gepflegt</option>
                      <option value="Renovierungsbedürftig">Renovierungsbedürftig</option>
                      <option value="Sanierungsbedürftig">Sanierungsbedürftig</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Zusatzinformationen (optional)</label>
                    <textarea
                      className={`${inputCls} resize-none h-28`}
                      placeholder="Z. B. besondere Situation, Nutzungsart, Mieterstatus..."
                      value={form.info}
                      onChange={(e) => update("info", e.target.value)}
                    />
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <button onClick={() => setStep(1)} className="text-sm text-brand-anthracite/50 hover:text-brand-anthracite transition-colors">
                    ← Zurück
                  </button>
                  <Button onClick={() => setStep(3)} variant="primary">
                    Weiter
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-nazare text-brand-anthracite mb-6">Ihre Kontaktdaten</h2>
                <div className="space-y-4">
                  <div>
                    <label className={labelCls}>Vollständiger Name</label>
                    <input type="text" className={inputCls} placeholder="Max Mustermann" value={form.name} onChange={(e) => update("name", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>E-Mail-Adresse</label>
                    <input type="email" className={inputCls} placeholder="max@beispiel.de" value={form.email} onChange={(e) => update("email", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Telefon (optional)</label>
                    <input type="tel" className={inputCls} placeholder="+49 351 ..." value={form.telefon} onChange={(e) => update("telefon", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Bevorzugter Kontaktweg</label>
                    <select className={inputCls} value={form.kontaktweg} onChange={(e) => update("kontaktweg", e.target.value)}>
                      <option>E-Mail</option>
                      <option>Telefon</option>
                      <option>Beides</option>
                    </select>
                  </div>
                  <p className="text-xs text-brand-anthracite/40 leading-relaxed">
                    Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben. Wir melden uns innerhalb von 48 Stunden.
                  </p>
                </div>

                {error && (
                  <p className="mt-4 text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">{error}</p>
                )}

                <div className="mt-8 flex justify-between">
                  <button onClick={() => setStep(2)} className="text-sm text-brand-anthracite/50 hover:text-brand-anthracite transition-colors">
                    ← Zurück
                  </button>
                  <Button onClick={submit} variant="primary" disabled={loading} aria-disabled={loading}>
                    {loading ? "Wird gesendet..." : "Kostenloses Kaufangebot erhalten"}
                  </Button>
                </div>
              </motion.div>
            )}
            {/* Trust badges */}
            <div className="mt-6 pt-6 border-t border-gray-50 flex flex-wrap gap-4">
              {[
                "Kostenlos & unverbindlich",
                "Antwort in 48 Stunden",
                "Diskrete Abwicklung",
              ].map((b) => (
                <span key={b} className="text-xs text-brand-anthracite/45 flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <svg width="7" height="7" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2L6.5 2" stroke="#16542c" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </span>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Next steps card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="bg-brand-green rounded-3xl p-7 relative overflow-hidden"
          >
            <RuneIcon size={160} className="absolute bottom-[-20px] right-[-20px] text-white/[0.07] pointer-events-none" />
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-5">
              Nach Ihrer Anfrage
            </p>
            <div className="grid sm:grid-cols-3 gap-6 relative z-10">
              {[
                { n: "1", title: "Wir prüfen Ihre Angaben", text: "Unser Team analysiert Lage, Zustand und Marktumfeld Ihrer Immobilie." },
                { n: "2", title: "Sie erhalten ein Angebot", text: "Innerhalb von 48 Stunden erhalten Sie eine realistische Einschätzung." },
                { n: "3", title: "Persönliches Gespräch", text: "Auf Wunsch besprechen wir alles Weitere telefonisch oder vor Ort." },
              ].map(({ n, title, text }) => (
                <div key={n} className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-brand-gold text-xs font-bold">{n}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">{title}</p>
                    <p className="text-white/55 text-xs leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-brand-anthracite relative overflow-hidden">
        <RuneIcon size={460} className="absolute bottom-[-50px] right-[-70px] text-white/[0.04] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-4">
              Kundenstimmen
            </motion.p>
            <RuneDivider light className="mb-6" />
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-nazare text-white">
              Was unsere Verkäufer sagen
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                quote: "Meine Geschwister und ich hätten das alleine nie so schnell gelöst. In zwei Telefonaten wurden alle Fragen geklärt, drei Wochen später war der Notartermin. Eine echte Erleichterung.",
                name: "S. Richter",
                context: "Erbengemeinschaft · Dresden-Löbtau",
              },
              {
                quote: "Ich arbeite regelmäßig mit CADA zusammen. Die Kommunikation ist direkt, Entscheidungen werden zügig getroffen und Zusagen eingehalten. So stelle ich mir eine professionelle Zusammenarbeit vor.",
                name: "T. Hoffmann",
                context: "Immobilienmakler · Dresden",
              },
              {
                quote: "Ich verwalte mehrere Häuser in Dresden und empfehle CADA, wenn Eigentümer verkaufen möchten. Unkompliziert, diskret, und die Eigentümer kommen immer mit positivem Feedback zurück.",
                name: "M. Schreiber",
                context: "Hausverwaltung · Dresden-Neustadt",
              },
            ].map(({ quote, name, context }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                className="bg-white/[0.05] border border-white/[0.08] rounded-2xl p-8 flex flex-col"
              >
                <span className="text-brand-gold text-5xl font-nazare leading-none mb-4 select-none">"</span>
                <p className="text-white/70 text-sm leading-relaxed flex-1 mb-8">{quote}</p>
                <div className="border-t border-white/10 pt-5">
                  <p className="text-white font-semibold text-sm">{name}</p>
                  <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-brand-gold/60 mt-0.5">{context}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
