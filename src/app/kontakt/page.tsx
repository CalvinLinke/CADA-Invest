"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { RuneIcon } from "@/components/ui/RuneIcon";
import { RuneDivider } from "@/components/ui/RuneDivider";
import { Badge } from "@/components/ui/Badge";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

export default function KontaktPage() {
  const [form, setForm]       = useState({ name: "", email: "", telefon: "", betreff: "Allgemeine Anfrage", nachricht: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent]       = useState(false);
  const [error, setError]     = useState("");

  function update(field: keyof typeof form, val: string) {
    setForm((prev) => ({ ...prev, [field]: val }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/kontakt", {
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

  const inputCls =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-anthracite placeholder:text-brand-anthracite/40 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/10 transition-all bg-white";
  const labelCls = "block text-[12px] font-semibold text-brand-anthracite/70 mb-1.5 uppercase tracking-wide";

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-brand-green relative overflow-hidden">
        <RuneIcon
          size={420}
          className="absolute bottom-[-60px] right-[-60px] text-white/[0.05] pointer-events-none"
        />
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <Badge variant="white" className="mb-6">Nehmen Sie Kontakt auf</Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-nazare text-white mb-5 leading-tight"
            >
              Wir sind <span className="text-brand-gold">für Sie da.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-white/65 max-w-xl mx-auto leading-relaxed"
            >
              Stellen Sie uns Ihre Fragen oder reichen Sie Ihre Immobilie direkt ein.
              Wir antworten innerhalb von 48 Stunden.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main content: Form + Map */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-4"
            >
              Direkte Anfrage
            </motion.p>
            <RuneDivider className="mb-6" />
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-nazare text-brand-anthracite mb-4"
            >
              Schreiben Sie uns
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-brand-anthracite/55 text-base leading-relaxed max-w-xl mx-auto"
            >
              Nutzen Sie das Formular für allgemeine Anfragen oder um eine Immobilie einzureichen.
              Wir melden uns innerhalb von 48 Stunden bei Ihnen.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_480px] gap-10 items-start">

            {/* Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {sent ? (
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 text-center">
                  <RuneIcon size={52} className="text-brand-gold mx-auto mb-5" />
                  <h3 className="text-2xl font-nazare text-brand-anthracite mb-3">
                    Vielen Dank für Ihre Nachricht.
                  </h3>
                  <p className="text-brand-anthracite/60 leading-relaxed mb-8">
                    Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 48 Stunden bei Ihnen.
                  </p>
                  <Button onClick={() => setSent(false)} variant="secondary" arrow={false}>
                    Weitere Nachricht senden
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={submit}
                  className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10 space-y-5"
                >
                  <div>
                    <label className={labelCls}>Betreff</label>
                    <select
                      className={inputCls}
                      value={form.betreff}
                      onChange={(e) => update("betreff", e.target.value)}
                    >
                      <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
                      <option value="Zusammenarbeit">Zusammenarbeit</option>
                      <option value="Sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Name *</label>
                      <input
                        type="text"
                        required
                        className={inputCls}
                        placeholder="Max Mustermann"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className={labelCls}>E-Mail *</label>
                      <input
                        type="email"
                        required
                        className={inputCls}
                        placeholder="max@beispiel.de"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>Telefon (optional)</label>
                    <input
                      type="tel"
                      className={inputCls}
                      placeholder="+49 351 ..."
                      value={form.telefon}
                      onChange={(e) => update("telefon", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className={labelCls}>Ihre Nachricht *</label>
                    <textarea
                      required
                      className={`${inputCls} resize-none h-36`}
                      placeholder="Beschreiben Sie Ihr Anliegen..."
                      value={form.nachricht}
                      onChange={(e) => update("nachricht", e.target.value)}
                    />
                  </div>

                  <p className="text-xs text-brand-anthracite/40 leading-relaxed">
                    Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage genutzt und nicht an Dritte weitergegeben.
                  </p>

                  {error && (
                    <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">{error}</p>
                  )}

                  <div className="pt-1">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={loading}
                      aria-disabled={loading}
                      className="w-full sm:w-auto"
                    >
                      {loading ? "Wird gesendet..." : "Nachricht senden"}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Right column: Map + Address card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="space-y-5"
            >
              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-72">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.2!2d13.7886!3d51.0494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709cf6b4a5e9c7d%3A0x0!2sGlash%C3%BCtter+Stra%C3%9Fe+53%2C+01309+Dresden!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CADA Invest Standort"
                />
              </div>

              {/* Address card */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-7">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-green/8 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-brand-green">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-brand-anthracite/40 mb-1">
                      Adresse
                    </p>
                    <p className="text-[15px] font-medium text-brand-anthracite leading-relaxed">
                      Glashütter Straße 53<br />
                      01309 Dresden, Sachsen
                    </p>
                  </div>
                </div>

                <div
                  className="border-t border-gray-100 pt-5"
                >
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-brand-anthracite/40 mb-3">
                    Öffnungszeiten
                  </p>
                  <div className="space-y-2">
                    {[
                      { day: "Montag – Freitag", hours: "08:00 – 18:00 Uhr" },
                      { day: "Samstag",          hours: "09:00 – 14:00 Uhr" },
                      { day: "Sonntag",          hours: "Geschlossen" },
                    ].map(({ day, hours }) => (
                      <div key={day} className="flex justify-between items-center text-sm">
                        <span className="text-brand-anthracite/60">{day}</span>
                        <span className={`font-medium ${hours === "Geschlossen" ? "text-brand-anthracite/35" : "text-brand-anthracite"}`}>
                          {hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
