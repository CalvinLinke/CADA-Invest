"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { RuneIcon } from "@/components/ui/RuneIcon";
import { RuneDivider } from "@/components/ui/RuneDivider";
import { Badge } from "@/components/ui/Badge";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const privateItems = [
  "Eigentümer aus Ihrem Netzwerk mit Verkaufsabsicht",
  "Erben, die eine Immobilie unkompliziert veräußern möchten",
  "Eigentümer in Veränderungssituationen, die schnell handeln möchten",
  "Eigentümer, die diskret verkaufen möchten",
];

const proItems = [
  "Makler mit Objekten außerhalb des eigenen Fokus",
  "Steuerberater & Anwälte mit Mandantensituationen",
  "Hausverwalter mit verkaufswilligen Eigentümern",
  "Banken & Finanzberater",
];

export default function TippgeberPage() {
  const [form, setForm] = useState({ name: "", email: "", nachricht: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function update(k: keyof typeof form, v: string) {
    setForm((p) => ({ ...p, [k]: v }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/tippgeber", {
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
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp}>
              <Badge variant="white" className="mb-8">Tippgeberprogramm</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-nazare text-white mb-6">
              Kennen Sie jemanden,{" "}
              <span className="text-brand-gold">der verkaufen möchte?</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/65 max-w-lg">
              Geben Sie uns den Hinweis, wir übernehmen alles Weitere. Bei erfolgreichem Abschluss erhalten Sie eine Prämie von bis zu <strong className="text-white/90">2.500 €</strong>.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* So funktioniert es */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">In drei Schritten</p>
            <RuneDivider className="max-w-xs mx-auto" />
            <h2 className="text-4xl md:text-5xl font-nazare text-brand-anthracite mt-4">So funktioniert es</h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                n: "01",
                title: "Sie kennen einen Eigentümer",
                text: "Eine Immobilie in Sachsen, ein Eigentümer mit Verkaufswunsch. Mehr braucht es nicht.",
              },
              {
                n: "02",
                title: "Sie geben uns den Hinweis",
                text: "Diskret, unkompliziert, per Formular oder telefonisch. Keine Verpflichtung, kein Aufwand.",
              },
              {
                n: "03",
                title: "Sie erhalten Ihre Prämie",
                text: "Nach erfolgreichem Notartermin zahlen wir Ihre Tippgeberprämie, schnell und zuverlässig.",
              },
            ].map((s) => (
              <motion.div
                key={s.n}
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 border border-gray-100 relative overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <RuneIcon size={80} className="absolute -top-3 -right-3 text-brand-gold/[0.07] pointer-events-none" />
                <p className="text-5xl font-nazare text-brand-gold/30 mb-4 leading-none">{s.n}</p>
                <h3 className="text-xl font-nazare text-brand-anthracite mb-3">{s.title}</h3>
                <p className="text-sm text-brand-anthracite/60 leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Prämien-Highlight */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="bg-white rounded-2xl border border-brand-gold/20 p-10 text-center max-w-xl mx-auto relative overflow-hidden"
          >
            <RuneIcon size={160} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-gold/[0.04] pointer-events-none" />
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold/70 mb-3">Ihre Vergütung</p>
            <p className="text-6xl md:text-7xl font-nazare text-brand-gold leading-none mb-2">1.000 –</p>
            <p className="text-6xl md:text-7xl font-nazare text-brand-gold leading-none mb-5">2.500 €</p>
            <p className="text-sm text-brand-anthracite/55 max-w-xs mx-auto leading-relaxed">
              Tippgeberprämie nach erfolgreichem Notartermin, unabhängig vom Kaufpreis der Immobilie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Für wen? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">Zielgruppe</p>
            <RuneDivider className="max-w-xs mx-auto" />
            <h2 className="text-4xl md:text-5xl font-nazare text-brand-anthracite mt-4">Für wen eignet sich das?</h2>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid md:grid-cols-2 gap-10"
          >
            {/* Privatpersonen */}
            <motion.div variants={fadeUp} className="bg-brand-cream rounded-2xl p-8 border border-brand-gold/10">
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-4">Privatpersonen</p>
              <h3 className="text-2xl font-nazare text-brand-anthracite mb-6">
                Jeder kann Tippgeber sein
              </h3>
              <ul className="space-y-3">
                {privateItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <RuneIcon size={14} className="text-brand-gold mt-0.5 shrink-0" />
                    <span className="text-sm text-brand-anthracite/70">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Professionals */}
            <motion.div variants={fadeUp} className="bg-brand-cream rounded-2xl p-8 border border-brand-gold/10">
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-4">Professionals</p>
              <h3 className="text-2xl font-nazare text-brand-anthracite mb-6">
                Netzwerkpartner aus der Branche
              </h3>
              <ul className="space-y-3">
                {proItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <RuneIcon size={14} className="text-brand-gold mt-0.5 shrink-0" />
                    <span className="text-sm text-brand-anthracite/70">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Opt-in Formular */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">Jetzt melden</p>
            <RuneDivider className="max-w-xs mx-auto" />
            <h2 className="text-4xl font-nazare text-brand-anthracite mt-4">Tippgeber werden</h2>
            <p className="text-brand-anthracite/55 mt-3 text-sm">
              Hinterlassen Sie Ihre Kontaktdaten, wir melden uns innerhalb von 24 Stunden.
            </p>
          </div>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm"
            >
              <RuneIcon size={52} className="text-brand-gold mx-auto mb-5" />
              <h3 className="text-3xl font-nazare text-brand-anthracite mb-3">Vielen Dank.</h3>
              <p className="text-brand-anthracite/60 text-sm leading-relaxed">
                Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich bei Ihnen.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={submit} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10 space-y-5">
              <div>
                <label className={lbl}>Vollständiger Name</label>
                <input
                  type="text"
                  className={inp}
                  required
                  placeholder="Max Mustermann"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </div>
              <div>
                <label className={lbl}>E-Mail-Adresse</label>
                <input
                  type="email"
                  className={inp}
                  required
                  placeholder="max@beispiel.de"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </div>
              <div>
                <label className={lbl}>Hinweis (optional)</label>
                <textarea
                  className={`${inp} resize-none h-28`}
                  placeholder="Optional: Haben Sie bereits einen konkreten Tipp? Ort, Objekttyp…"
                  value={form.nachricht}
                  onChange={(e) => update("nachricht", e.target.value)}
                />
              </div>

              <p className="text-xs text-brand-anthracite/35 leading-relaxed">
                Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
              </p>

              {error && (
                <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">{error}</p>
              )}

              <Button type="submit" variant="primary" size="md" disabled={loading}>
                {loading ? "Wird gesendet..." : "Jetzt als Tippgeber melden"}
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
