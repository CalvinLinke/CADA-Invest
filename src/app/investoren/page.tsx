"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RuneIcon } from "@/components/ui/RuneIcon";
import { RuneDivider } from "@/components/ui/RuneDivider";
import { Badge } from "@/components/ui/Badge";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

// ─── DataPanel ───────────────────────────────────────────────────────────────

function DataPanel({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-brand-gold/20 mt-10 pt-5">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold/60 hover:text-brand-gold transition-colors duration-200"
      >
        <span className="text-lg leading-none w-4 text-left">{open ? "−" : "+"}</span>
        {label}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.28 } }}
            style={{ overflow: "hidden" }}
          >
            <div className="pt-8">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Charts ──────────────────────────────────────────────────────────────────

function RateChart() {
  const W = 580;
  const H = 232;
  const padL = 38;
  const padR = 62;
  const padT = 28;
  const padB = 50;
  const botY = H - padB;
  const plotH = botY - padT;

  const rateY = (r: number) => botY - (r / 5) * plotH;
  // m=0 = Jan 2019, m=162 = Dez 2032
  const mX = (m: number) => padL + (m / 162) * (W - padL - padR);

  const historical = [
    { m: 0,  r: 1.2 },
    { m: 24, r: 1.0 },
    { m: 36, r: 1.1 },
    { m: 42, r: 2.7 },
    { m: 48, r: 3.7 },
    { m: 57, r: 4.5 },
    { m: 66, r: 3.8 },
    { m: 72, r: 3.6 },
    { m: 78, r: 3.9 },
  ];
  const basis = [
    { m: 78,  r: 3.9 },
    { m: 90,  r: 3.6 },
    { m: 102, r: 3.5 },
    { m: 126, r: 3.5 },
    { m: 162, r: 3.5 },
  ];
  const structural = [
    { m: 78,  r: 3.9 },
    { m: 90,  r: 4.1 },
    { m: 102, r: 4.3 },
    { m: 126, r: 4.5 },
    { m: 162, r: 4.5 },
  ];

  const histPoly = historical.map(p => `${mX(p.m)},${rateY(p.r)}`).join(" ");
  const basisPoly = basis.map(p => `${mX(p.m)},${rateY(p.r)}`).join(" ");
  const structuralPoly = structural.map(p => `${mX(p.m)},${rateY(p.r)}`).join(" ");
  const bandPoly = [
    ...basis.map(p => `${mX(p.m)},${rateY(p.r)}`),
    ...[...structural].reverse().map(p => `${mX(p.m)},${rateY(p.r)}`),
  ].join(" ");

  const splitX = mX(78);
  const histYears = [2019, 2020, 2021, 2022, 2023, 2024, 2025];
  const progYears = [2026, 2028, 2030, 2032];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" aria-label="Bauzinsen Entwicklung und Prognose 2019 bis 2032">
      <defs>
        <linearGradient id="rg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#aa734a" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#aa734a" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Prognose-Zone */}
      <rect x={splitX} y={padT} width={W - padR - splitX} height={plotH}
            fill="#2a2a2a" opacity="0.025" />
      <text x={(splitX + W - padR) / 2} y={padT + 13} fontSize="8.5"
            fill="#2a2a2a" textAnchor="middle" opacity="0.3">Szenarien 2025–2032</text>

      {/* Grid */}
      {[0, 1, 2, 3, 4, 5].map(r => (
        <g key={r}>
          <line x1={padL} y1={rateY(r)} x2={W - padR} y2={rateY(r)}
                stroke="#2a2a2a" strokeWidth="0.4" strokeDasharray="3 3" opacity="0.12" />
          <text x={padL - 5} y={rateY(r) + 4} fontSize="9" fill="#2a2a2a"
                textAnchor="end" opacity="0.4">{r}%</text>
        </g>
      ))}

      {/* Alte Normalität Referenzlinie */}
      <line x1={padL} y1={rateY(1.0)} x2={W - padR} y2={rateY(1.0)}
            stroke="#16542c" strokeWidth="1" strokeDasharray="6 4" opacity="0.2" />
      <text x={padL + 4} y={rateY(1.0) - 5} fontSize="8" fill="#16542c" opacity="0.35">
        Alte Normalität ~1% (2016–2022)
      </text>

      {/* Unsicherheitsband */}
      <polygon points={bandPoly} fill="#aa734a" opacity="0.08" />

      {/* Historische Fläche */}
      <polygon points={`${mX(0)},${botY} ${histPoly} ${splitX},${botY}`}
               fill="url(#rg2)" />

      {/* Historische Linie */}
      <polyline points={histPoly} fill="none" stroke="#aa734a" strokeWidth="2.5"
                strokeLinejoin="round" strokeLinecap="round" />

      {/* Basisszenario */}
      <polyline points={basisPoly} fill="none" stroke="#16542c" strokeWidth="1.8"
                strokeDasharray="6 3" strokeLinejoin="round" strokeLinecap="round" />

      {/* Strukturelles Szenario */}
      <polyline points={structuralPoly} fill="none" stroke="#aa734a" strokeWidth="1.8"
                strokeDasharray="6 3" strokeLinejoin="round" strokeLinecap="round"
                opacity="0.65" />

      {/* Trennlinie */}
      <line x1={splitX} y1={padT} x2={splitX} y2={botY}
            stroke="#2a2a2a" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.18" />

      {/* Historische Punkte */}
      {historical.map((p, i) => (
        <circle key={i} cx={mX(p.m)} cy={rateY(p.r)}
                r={i === historical.length - 1 ? 4.5 : 2.5}
                fill={i === historical.length - 1 ? "#aa734a" : "#16542c"} />
      ))}

      {/* Peak-Label */}
      <text x={mX(57)} y={rateY(4.5) - 8} fontSize="8.5" fill="#aa734a" textAnchor="middle">
        Peak 4,5%
      </text>

      {/* Endlabels */}
      <text x={mX(162) + 4} y={rateY(4.5) + 4} fontSize="8.5" fill="#aa734a" opacity="0.7">~4,5%</text>
      <text x={mX(162) + 4} y={rateY(3.5) + 4} fontSize="8.5" fill="#16542c" opacity="0.7">~3,5%</text>

      {/* Jahreslabels historisch */}
      {histYears.map((y, i) => (
        <text key={y} x={mX(i * 12)} y={botY + 14} fontSize="9"
              fill="#2a2a2a" textAnchor="middle" opacity="0.4">{y}</text>
      ))}

      {/* Jahreslabels Prognose */}
      {progYears.map((y) => (
        <text key={y} x={mX(78 + (y - 2025) * 12)} y={botY + 14} fontSize="9"
              fill="#2a2a2a" textAnchor="middle" opacity="0.3">{y}</text>
      ))}

      {/* Legende */}
      <line x1={padL} y1={H - 13} x2={padL + 16} y2={H - 13}
            stroke="#aa734a" strokeWidth="2.5" strokeLinecap="round" />
      <text x={padL + 21} y={H - 9} fontSize="8.5" fill="#2a2a2a" opacity="0.5">Historisch (Bauzinsen 10J)</text>

      <line x1={padL + 160} y1={H - 13} x2={padL + 176} y2={H - 13}
            stroke="#16542c" strokeWidth="1.8" strokeDasharray="5 3" strokeLinecap="round" />
      <text x={padL + 181} y={H - 9} fontSize="8.5" fill="#2a2a2a" opacity="0.5">Basisszenario ~3,5%</text>

      <line x1={padL + 290} y1={H - 13} x2={padL + 306} y2={H - 13}
            stroke="#aa734a" strokeWidth="1.8" strokeDasharray="5 3" strokeLinecap="round" opacity="0.65" />
      <text x={padL + 311} y={H - 9} fontSize="8.5" fill="#2a2a2a" opacity="0.5">Strukturelles Szenario ~4,5%</text>
    </svg>
  );
}

function PopulationChart() {
  const W = 480;
  const H = 200;
  const padL = 50;
  const padR = 20;
  const padT = 30;
  const padB = 36;
  const botY = H - padB;
  const plotH = botY - padT;

  // Y range 450k–650k to highlight differences
  const valY = (v: number) => botY - ((v - 450) / 200) * plotH;

  const data = [
    { year: "2010", val: 507, proj: false },
    { year: "2015", val: 544, proj: false },
    { year: "2020", val: 563, proj: false },
    { year: "2023", val: 577, proj: false },
    { year: "2030\nProg.", val: 620, proj: true },
  ];

  const n = data.length;
  const totalW = W - padL - padR;
  const barW = Math.floor(totalW / n * 0.6);
  const gap = totalW / n;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" aria-label="Dresden Bevölkerungsentwicklung">
      {/* Grid */}
      {[450, 500, 550, 600, 650].map(v => (
        <g key={v}>
          <line x1={padL} y1={valY(v)} x2={W - padR} y2={valY(v)}
                stroke="#2a2a2a" strokeWidth="0.4" strokeDasharray="3 3" opacity="0.12" />
          <text x={padL - 5} y={valY(v) + 4} fontSize="8.5" fill="#2a2a2a"
                textAnchor="end" opacity="0.4">{v < 1000 ? v : v / 1000 + "k"}</text>
        </g>
      ))}

      {data.map((d, i) => {
        const cx = padL + i * gap + gap / 2;
        const barX = cx - barW / 2;
        const barY = valY(d.val);
        const barH = botY - barY;
        return (
          <g key={d.year}>
            {d.proj ? (
              <>
                <rect x={barX} y={barY} width={barW} height={barH}
                      fill="none" stroke="#aa734a" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7" />
                <rect x={barX} y={barY} width={barW} height={barH}
                      fill="#aa734a" opacity="0.15" />
                <text x={cx} y={barY + 22} fontSize="11" fill="#aa734a"
                      textAnchor="middle" fontWeight="700">~+10%</text>
                <text x={cx} y={barY + 35} fontSize="7.5" fill="#aa734a"
                      textAnchor="middle" opacity="0.65">ggü. 2020</text>
              </>
            ) : (
              <rect x={barX} y={barY} width={barW} height={barH}
                    fill="#16542c" opacity="0.7" />
            )}
            <text x={cx} y={barY - 6} fontSize="9" fill={d.proj ? "#aa734a" : "#16542c"}
                  textAnchor="middle" fontWeight={d.proj ? "600" : "normal"}>
              {d.val}k
            </text>
            {d.year.includes("\n") ? (
              <>
                <text x={cx} y={botY + 16} fontSize="8.5" fill="#2a2a2a" textAnchor="middle" opacity="0.5">2030</text>
                <text x={cx} y={botY + 27} fontSize="8" fill="#aa734a" textAnchor="middle" opacity="0.6">Prognose</text>
              </>
            ) : (
              <text x={cx} y={botY + 18} fontSize="9" fill="#2a2a2a"
                    textAnchor="middle" opacity="0.5">{d.year}</text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

function YieldComparisonChart() {
  const W = 480;
  const H = 210;
  const padL = 38;
  const padR = 42;
  const padT = 28;
  const padB = 46;
  const botY = H - padB;
  const plotH = botY - padT;

  const maxY = 7;
  const valY = (v: number) => botY - (v / maxY) * plotH;
  // i=0=2017, i=8=2025 (jährlich)
  const iX = (i: number) => padL + (i / 8) * (W - padL - padR);

  const bau  = [1.5, 1.7, 1.2, 1.0, 1.0, 3.5, 4.5, 3.6, 3.9];
  const rend = [3.5, 3.3, 3.0, 2.8, 2.7, 3.5, 4.8, 5.2, 5.5];
  const years = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

  const bauPoly  = bau.map((v, i) => `${iX(i)},${valY(v)}`).join(" ");
  const rendPoly = rend.map((v, i) => `${iX(i)},${valY(v)}`).join(" ");
  const rendArea = `${iX(0)},${botY} ${rendPoly} ${iX(8)},${botY}`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" aria-label="Bauzinsen vs Mietrendite Dresden 2017 bis 2025">
      <defs>
        <linearGradient id="rendgrd" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16542c" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#16542c" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Grid */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map(v => (
        <g key={v}>
          <line x1={padL} y1={valY(v)} x2={W - padR} y2={valY(v)}
                stroke="#2a2a2a" strokeWidth="0.4" strokeDasharray="3 3" opacity="0.12" />
          <text x={padL - 5} y={valY(v) + 4} fontSize="9" fill="#2a2a2a"
                textAnchor="end" opacity="0.4">{v}%</text>
        </g>
      ))}

      {/* Rendite-Fläche */}
      <polygon points={rendArea} fill="url(#rendgrd)" />

      {/* Rendite-Linie */}
      <polyline points={rendPoly} fill="none" stroke="#16542c" strokeWidth="2.5"
                strokeLinejoin="round" strokeLinecap="round" />

      {/* Bauzins-Linie */}
      <polyline points={bauPoly} fill="none" stroke="#aa734a" strokeWidth="1.8"
                strokeDasharray="6 3" strokeLinejoin="round" strokeLinecap="round" />

      {/* Punkte Rendite */}
      {rend.map((v, i) => (
        <circle key={i} cx={iX(i)} cy={valY(v)} r={2.5} fill="#16542c" />
      ))}

      {/* Punkte Bauzins */}
      {bau.map((v, i) => (
        <circle key={i} cx={iX(i)} cy={valY(v)} r={2} fill="#aa734a" />
      ))}

      {/* Zinswende 2022 */}
      <line x1={iX(5)} y1={padT} x2={iX(5)} y2={botY}
            stroke="#aa734a" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.3" />
      <text x={iX(5) + 5} y={padT + 13} fontSize="8.5" fill="#aa734a" opacity="0.7">
        Zinswende 2022
      </text>

      {/* Rendite-Tief Label */}
      <text x={iX(4)} y={valY(2.7) - 8} fontSize="8.5" fill="#16542c" opacity="0.6" textAnchor="middle">
        Tief 2,7%
      </text>

      {/* Endlabels */}
      <text x={iX(8) + 5} y={valY(5.5) + 4} fontSize="8.5" fill="#16542c">5,5%</text>
      <text x={iX(8) + 5} y={valY(3.9) + 4} fontSize="8.5" fill="#aa734a" opacity="0.7">3,9%</text>

      {/* Jahreslabels */}
      {years.map((y, i) => (
        <text key={y} x={iX(i)} y={botY + 14} fontSize="9"
              fill="#2a2a2a" textAnchor="middle" opacity="0.4">{y}</text>
      ))}

      {/* Legende */}
      <line x1={padL} y1={H - 13} x2={padL + 16} y2={H - 13}
            stroke="#16542c" strokeWidth="2.5" strokeLinecap="round" />
      <text x={padL + 21} y={H - 9} fontSize="8.5" fill="#2a2a2a" opacity="0.5">Mietrendite Dresden (brutto)</text>

      <line x1={padL + 175} y1={H - 13} x2={padL + 191} y2={H - 13}
            stroke="#aa734a" strokeWidth="1.8" strokeDasharray="5 3" strokeLinecap="round" />
      <text x={padL + 196} y={H - 9} fontSize="8.5" fill="#2a2a2a" opacity="0.5">Bauzinsen 10J-fest</text>
    </svg>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function InvestorenPage() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-green relative overflow-hidden">
        <RuneIcon size={560} className="absolute bottom-[-80px] right-[-90px] text-white/[0.04] pointer-events-none" />
        <RuneIcon size={160} className="absolute top-28 left-12 text-brand-gold/[0.06] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-40 pb-20 relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-nazare text-white leading-tight mb-6 max-w-3xl">
              Potenziale erkennen. Werte entwickeln.{" "}
              <span className="text-brand-gold">Erfolge realisieren.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/60 max-w-xl leading-relaxed">
              Der Dresdner Immobilienmarkt bietet gerade ein Fenster, das sich mit sinkenden Zinsen wieder schließt. Wir kaufen günstig, entwickeln konsequent und kennen den Exit. Fehlt noch: das richtige Kapital.
            </motion.p>
          </motion.div>
        </div>

        {/* Stat strip */}
      </section>

      {/* ── 2. DAS MODELL ───────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.p variants={fadeUp} className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">
              Das Geschäftsmodell
            </motion.p>
            <RuneDivider className="max-w-xs mb-6" />
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-nazare text-brand-anthracite mb-5">
              Drei Schritte. Maximaler Hebel.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-brand-anthracite/60 max-w-2xl leading-relaxed">
              Wir erwerben Wohn- und Geschäftshäuser über unser Netzwerk zu Konditionen, die am freien Markt nicht verfügbar wären. Durch eine systematische Entwicklung heben wir verborgene Potenziale und realisieren den geschaffenen Mehrwert. Das Modell ist einfach. Unsere Stärke liegt in der Umsetzung.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-14 divide-y divide-brand-gold/10"
          >
            {[
              {
                num: "01",
                title: "Günstiger Einkauf über Netzwerk",
                body: [
                  "Unser Netzwerk verschafft uns regelmäßig Zugang zu Immobilien, bevor diese öffentlich vermarktet werden. Grundlage dafür sind langjährige Beziehungen zu Maklern, Hausverwaltungen und privaten Eigentümern in Sachsen. Viele Ansprechpartner schätzen die Möglichkeit, Objekte diskret anzubieten und zeitnah eine verlässliche Rückmeldung zu erhalten.",
                  "Für uns bedeutet das oft die Chance, Immobilien zu Konditionen zu erwerben, die unter dem späteren Marktpreis liegen. Je nach Objekt ergeben sich dabei häufig Preisvorteile im Bereich von 15 bis 25 Prozent. Das ist kein Garant für jeden Ankauf, gehört aber regelmäßig zu den Möglichkeiten, die sich aus unserem Netzwerk ergeben.",
                ],
              },
              {
                num: "02",
                title: "Systematische Entwicklung aller Ertragshebel",
                body: [
                  "Wir parken keine Immobilien. Wir entwickeln sie. Das bedeutet: Aufteilung in Einzelwohnungen dort, wo der Gesamtwert als Eigentumswohnungspaket deutlich über dem Globalwert liegt. Neuvermietung zu aktuellen Marktmieten, wenn alte Mietverträge das Potenzial bremsen. Gezielte Sanierung bei Leerstand, um die höchstmöglichen Neuvermietungsmieten zu erzielen.",
                  "In der Praxis drehen wir oft an mehreren Stellschrauben gleichzeitig. Ein Objekt, das wir kaufen, wird nicht nach dem günstigsten Einstandspreis bewertet, sondern nach dem, was wir daraus machen können. Das ist der Unterschied zwischen einem Händler und einem klassischen Bestandshalter.",
                ],
              },
              {
                num: "03",
                title: "Exit oder langfristiger Bestand — beides ist rentabel",
                body: [
                  "Nach Abschluss aller Maßnahmen stehen zwei Wege offen: Verkauf zur Gewinnrealisierung oder Halten im Bestand mit einer jetzt deutlich verbesserten Rendite. Beide Optionen sind attraktiv, weil die Entwicklungsarbeit in beiden Fällen den Wert gehoben hat.",
                  "Die Rendite entsteht aus drei Quellen: dem günstigen Einstieg, dem Wertzuwachs durch die Entwicklungsmaßnahmen und dem Aufpreis, den institutionelle Käufer für fertig entwickelte, renditestarke Objekte zahlen. Fonds, Family Offices und Bestandshalter suchen genau dieses Produkt. Wir liefern es.",
                  "Wichtig: Die entwickelten Objekte verkaufen wir an Bestandshalter. An Fonds, Family Offices und institutionelle Käufer, die fertig entwickelte Objekte mit solider Rendite suchen und dafür einen Aufpreis zahlen. Wir liefern das Produkt, das sie brauchen.",
                ],
              },
            ].map((step) => (
              <motion.div key={step.num} variants={fadeUp} className="py-12 grid grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
                <p className="text-6xl md:text-7xl font-nazare text-brand-gold/20 leading-none pt-1">{step.num}</p>
                <div>
                  <h3 className="text-2xl font-nazare text-brand-anthracite mb-4">{step.title}</h3>
                  <div className="space-y-3">
                    {step.body.map((p, i) => (
                      <p key={i} className="text-sm text-brand-anthracite/60 leading-relaxed">{p}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <DataPanel label="Vergleichsunternehmen: Argo Residential">
              <div className="flex items-start gap-4 bg-brand-cream rounded-xl p-6 border border-brand-gold/10">
                <RuneIcon size={14} className="text-brand-gold mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-brand-anthracite text-sm mb-2">Argo Residential</p>
                  <p className="text-sm text-brand-anthracite/60 leading-relaxed">
                    Argo Residential ist ein deutsches Unternehmen, das genau diesen Ansatz im größeren Maßstab betreibt: günstiger Ankauf, systematische Entwicklung, Exit an institutionelle und private Käufer. Das Unternehmen zeigt, dass das Modell skalierbar ist und dass der Markt für entwickelte Objekte vorhanden ist.
                  </p>
                  <p className="text-[10px] text-brand-anthracite/30 mt-3 tracking-wide">Vergleichsreferenz: Argo Residential GmbH</p>
                </div>
              </div>
            </DataPanel>
          </motion.div>
        </div>
      </section>

      {/* ── 3. FÜNF ARGUMENTE ───────────────────────────────────────────── */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.p variants={fadeUp} className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">
              Die Marktthese
            </motion.p>
            <RuneDivider className="max-w-xs mb-6" />
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-nazare text-brand-anthracite mb-4">
              Fünf Argumente.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-brand-anthracite/60 max-w-2xl leading-relaxed">
              Warum dieser Standort, warum jetzt und warum mit uns? Die Antwort ergibt sich aus dem Zusammenspiel von Markt, Zeitpunkt und Strategie.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-16 divide-y divide-brand-gold/20"
          >
            {/* ── ARGUMENT 1 ── */}
            <motion.div variants={fadeUp} className="py-14 grid grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
              <p className="text-6xl md:text-7xl font-nazare text-brand-gold/20 leading-none pt-1">01</p>
              <div>
                <h3 className="text-2xl md:text-3xl font-nazare text-brand-anthracite mb-6">
                  Dresden wird das neue Stuttgart.
                </h3>
                <div className="space-y-4 text-sm text-brand-anthracite/60 leading-relaxed">
                  <p>
                    Stuttgart wurde zum industriellen Herzstück Deutschlands nicht wegen seiner Lage, sondern weil dort die Automobilindustrie entstand. Heute passiert dasselbe in Sachsen, mit Halbleitern. TSMC baut gemeinsam mit Infineon, NXP und Bosch ein neues Fertigungswerk in Dresden. Das Investitionsvolumen liegt bei rund 10 Milliarden Euro, der Produktionsbeginn ist für 2027 geplant.
                  </p>
                  <p>
                    Dahinter steckt ein einfacher Kausalstrang: TSMC bringt tausende hochqualifizierter Stellen. Diese Stellen ziehen Fachkräfte an. Fachkräfte brauchen Wohnraum. Dresden wächst bereits seit Jahren, und dieser Trend wird beschleunigt. Silicon Saxony, der Halbleitercluster, umfasst heute bereits über 2.000 Unternehmen und mehr als 100.000 Beschäftigte.
                  </p>
                  <p>
                    Entscheidend ist die Qualität des Wachstums. Ein Ingenieur in der Halbleiterindustrie verdient das Zwei- bis Dreifache eines Lagerarbeiters. Das treibt Kaufkraft und Mietbereitschaft in der Region auf ein Niveau, das Dresden in dieser Form noch nicht kannte. Wer jetzt kauft, kauft in den Aufzug hinein.
                  </p>
                  <p>
                    Hinzu kommt der Effekt, den Stuttgart gut illustriert: Wo eine Schlüsselindustrie entsteht, entsteht auch ihre Zulieferkette. Chemielieferanten, Wartungsbetriebe, Engineering-Dienstleister und spezialisierte IT-Unternehmen siedeln sich an, um die Fertigung zu versorgen. Das schafft weitere Arbeitsplätze, zieht weitere Fachkräfte an und vertieft den Cluster. Die 2.000 direkten Stellen bei der ESMC sind der Anfang, nicht die Summe.
                  </p>
                  <p>
                    Das alles spielt sich nicht in einem regionalen Vakuum ab. Silicon Saxony ist heute bereits der größte Halbleitercluster Europas. Die ESMC wird das erste TSMC-Werk auf dem gesamten europäischen Kontinent sein. Der EU Chips Act, mit einem Investitionsvolumen von 43 Milliarden Euro, soll Europas Anteil an der globalen Chipproduktion bis 2030 verdoppeln, und Sachsen steht dabei im Zentrum dieser Strategie. Dresden ist nicht ein weiterer wachsender Standort in Europa. Es ist der Standort.
                  </p>
                </div>
                <DataPanel label="Daten und Quellen ansehen">
                  <div className="space-y-8">
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold/70 mb-4">
                        Dresden Bevölkerungsentwicklung
                      </p>
                      <div className="bg-white rounded-xl p-4 border border-gray-100">
                        <PopulationChart />
                        <p className="text-[10px] text-brand-anthracite/35 mt-3 tracking-wide">
                          Quelle: Statistisches Landesamt Sachsen, Landeshauptstadt Dresden. Prognose 2030 basierend auf Trendfortschreibung + TSMC-Effekt.
                        </p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { val: "10 Mrd. €", label: "TSMC Investitionsvolumen", source: "TSMC / BMWK, 2023" },
                        { val: "~2.000", label: "Direkte neue Stellen (ESMC)", source: "ESMC Pressemitteilung, 2023" },
                        { val: "100.000+", label: "Beschäftigte Silicon Saxony", source: "Silicon Saxony e.V., 2024" },
                        { val: "43 Mrd. €", label: "EU Chips Act Investitionsvolumen", source: "Europäische Kommission, 2023" },
                      ].map((s) => (
                        <div key={s.label} className="bg-white rounded-xl p-4 border border-gray-100">
                          <p className="text-2xl font-nazare text-brand-gold mb-1">{s.val}</p>
                          <p className="text-xs text-brand-anthracite/70 mb-2">{s.label}</p>
                          <p className="text-[10px] text-brand-anthracite/30 tracking-wide">Quelle: {s.source}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </DataPanel>
              </div>
            </motion.div>

            {/* ── ARGUMENT 2 ── */}
            <motion.div variants={fadeUp} className="py-14 grid grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
              <p className="text-6xl md:text-7xl font-nazare text-brand-gold/20 leading-none pt-1">02</p>
              <div>
                <h3 className="text-2xl md:text-3xl font-nazare text-brand-anthracite mb-6">
                  Die politische Lage begünstigt Sachsen doppelt.
                </h3>
                <div className="space-y-4 text-sm text-brand-anthracite/60 leading-relaxed">
                  <p>
                    Im Vergleich zu vielen deutschen Metropolregionen ist das regulatorische Umfeld in Sachsen weiterhin vergleichsweise investorenfreundlich. Zwar gelten auch hier wohnungspolitische Instrumente wie die Mietpreisbremse in den angespannten Wohnungsmärkten Leipzig und Dresden, insgesamt fällt die Regulierung jedoch deutlich moderater aus als in einigen westdeutschen Ballungsräumen. Für Eigentümer bedeutet das ein planbares Umfeld mit vergleichsweise guten Möglichkeiten, Bestände zu entwickeln, zu modernisieren und langfristig zu bewirtschaften.
                  </p>
                  <p>
                    Sachsen verfolgt eine Wirtschaftspolitik, die Investitionen fördert statt blockiert. Wer ein Land beobachtet, das TSMC mit Milliardensubventionen holt und gleichzeitig auf überbordende Regulierung verzichtet, erkennt eine konsistente Linie. Diese politische Haltung schafft Planungssicherheit für Eigentümer.
                  </p>
                  <p>
                    Die Konsequenz für Kapital ist einfach: Geld, das aus stark regulierten Märkten wie Berlin oder München abwandert, sucht Alternativen. Dresden steht auf dieser Liste oben. Geringe Regulierung, gute Rendite, starkes Wachstum. Das ist kein geheimnisvolles Alpha, das ist Mathematik.
                  </p>
                  <p>
                    Unser lokales Netzwerk ist dabei kein Zusatzvorteil, sondern Grundvoraussetzung. Marktkenntnis, die sich nicht googeln lässt, und Zugang zu Objekten, der sich über Jahre aufgebaut hat.
                  </p>
                </div>
                <DataPanel label="Regulierungsumfeld und Markttrend ansehen">
                  <div className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        {
                          region: "Berlin · München · Hamburg",
                          items: ["Mietpreisbremse", "Umwandlungsverbot (§250 BauGB)", "Zweckentfremdungsverbote", "Kaufpreisfaktoren 28–32x"],
                          highlight: false,
                        },
                        {
                          region: "Dresden · Sachsen",
                          items: ["Mietpreisbremse in angespannten Märkten", <><strong>kein</strong> Aufteilungsverbot</>, "Kaufpreisfaktor ~20x", "moderatere Gesamtregulierung"],
                          highlight: true,
                        },
                      ].map((r) => (
                        <div key={r.region} className={`p-5 rounded-xl border ${r.highlight ? "border-brand-green/20 bg-brand-green/[0.05]" : "border-gray-100 bg-gray-50"}`}>
                          <p className={`text-xs font-semibold mb-3 ${r.highlight ? "text-brand-green" : "text-brand-anthracite/60"}`}>{r.region}</p>
                          <ul className="space-y-1.5">
                            {r.items.map((item, i) => (
                              <li key={i} className="text-xs text-brand-anthracite/55 leading-relaxed flex items-start gap-2">
                                <span className="mt-[5px] w-1 h-1 rounded-full bg-brand-anthracite/25 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white rounded-xl p-5 border border-gray-100">
                      <p className="text-sm font-semibold text-brand-anthracite mb-2">Von A-Städten zu B-Städten: ein dokumentierter Trend</p>
                      <p className="text-xs text-brand-anthracite/60 leading-relaxed">
                        Institutionelle Investoren haben seit 2018 zunehmend Secondary Cities ins Visier genommen, als Renditen in den Top-7-Städten unter 3% fielen. CBRE und JLL dokumentieren diese Verschiebung in ihren jährlichen Investmentmarktberichten. Dresden profitiert davon durch die Kombination aus höheren Renditen, moderaterer Regulierung und strukturellem Wachstum. Der Zuzug durch TSMC und Silicon Saxony ist dabei ein Faktor, den andere B-Städte nicht aufweisen.
                      </p>
                      <p className="text-[10px] text-brand-anthracite/30 mt-3 tracking-wide">
                        Quellen: CBRE Germany Investment Market Snapshot 2024 · JLL Investmentmarkt Wohnimmobilien Deutschland 2024 · Mietrechtsregelungen der jeweiligen Länder, Stand 2024
                      </p>
                    </div>
                  </div>
                </DataPanel>
              </div>
            </motion.div>

            {/* ── ARGUMENT 3 ── */}
            <motion.div variants={fadeUp} className="py-14 grid grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
              <p className="text-6xl md:text-7xl font-nazare text-brand-gold/20 leading-none pt-1">03</p>
              <div>
                <h3 className="text-2xl md:text-3xl font-nazare text-brand-anthracite mb-6">
                  Hohe Zinsen schaffen seltene Einstiegspreise.
                </h3>
                <div className="space-y-4 text-sm text-brand-anthracite/60 leading-relaxed">
                  <p>
                    Die Mechanik ist simpel: Wenn Investoren Fremdkapital zu 4 Prozent leihen müssen, rechnet sich ein Objekt nur noch bei einer Rendite von mindestens 5 bis 6 Prozent. Solange Preise zu hoch sind, um diese Rendite zu erzielen, fallen die Preise, bis sie es tun. Genau das ist seit 2022 passiert. Der vdp-Immobilienpreisindex zeigt einen Rückgang von etwa 12 bis 14 Prozent vom Höchststand.
                  </p>
                  <p>
                    Weitere Preisrückgänge sind bei anhaltend hohen oder steigenden Zinsen nicht ausgeschlossen. Für langfristige Investoren ist das jedoch weniger ein Risiko als Teil einer Akkumulationsphase: Entscheidend ist nicht, den exakten Tiefpunkt zu treffen, sondern attraktive Vermögenswerte zu deutlich besseren Bewertungen als noch vor wenigen Jahren zu erwerben.
                  </p>
                  <p>
                    Im Dresdner Bestandsmarkt sind heute Bruttomietrenditen von 5 bis 6 Prozent erzielbar, ohne dass eine einzige Entwicklungsmaßnahme durchgeführt wurde. Vor 2022 lagen die Kaufpreisfaktoren bei 25 bis 30, was Renditen unter 4 Prozent bedeutete. Diese Niveaus werden auf absehbare Zeit nicht zurückkommen.
                  </p>
                  <p>
                    Auch wenn die weitere Zinsentwicklung offen ist, sprechen die aktuellen wirtschaftlichen Rahmenbedingungen nicht für eine schnelle Rückkehr zum Niedrigzinsumfeld der Jahre vor 2022. Für Eigenkapitalgeber schafft das ein attraktives Umfeld mit günstigeren Einstiegspreisen und höheren laufenden Renditen.
                  </p>
                  <p>
                    Dazu kommt der Angebotseffekt. Hohe Baukosten und fehlende politische Anreize für Neubau lassen das Angebot stagnieren. In Dresden trifft das auf eine strukturell steigende Nachfrage durch TSMC und Silicon Saxony. Bestandsmieten werden steigen. Das ist keine Spekulation, sondern das Ergebnis von Angebot und Nachfrage.
                  </p>
                </div>
                <DataPanel label="Zinsentwicklung und Renditen ansehen">
                  <div className="space-y-8">
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold/70 mb-4">
                        Bauzinsen 10J: Kein Weg zurück — Prognose bis 2032
                      </p>
                      <div className="bg-white rounded-xl p-4 border border-gray-100">
                        <RateChart />
                        <p className="text-[10px] text-brand-anthracite/35 mt-3 leading-relaxed">
                          Historisch: Interhyp Zinsentwicklung, Bundesbank MFI-Zinsstatistik Wohnungsbaukredite. Basisszenario: Dr. Klein 2026, Interhyp Expert Panel 2026 (Konsenskorridor 3,0–4,5%). Strukturelles Szenario: CaixaBank Research 2025 (Schuldenbremsereform), Morningstar European Bonds Outlook 2026 (EU ReArm Europe). Szenarien, keine Prognosen.
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold/70 mb-4">
                        Finanzierungskosten vs. erzielbare Rendite 2017–2025
                      </p>
                      <div className="bg-white rounded-xl p-4 border border-gray-100">
                        <YieldComparisonChart />
                        <p className="text-[10px] text-brand-anthracite/35 mt-3 leading-relaxed">
                          Bauzinsen 10J: Interhyp Zinsentwicklung, Bundesbank Wohnungsbaukreditstatistik. Dresdner Mietrenditen: Schätzwerte auf Basis Gutachterausschuss Dresden 2024, JLL Germany Residential Report 2024. Bruttomietrendite Bestandsmarkt.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                      <RuneIcon size={13} className="text-brand-gold mt-1 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-brand-anthracite mb-1">Preiskorrektur seit 2022</p>
                        <p className="text-xs text-brand-anthracite/55 leading-relaxed">
                          Der vdp-Immobilienpreisindex weist für Wohnimmobilien in Deutschland einen Rückgang von circa 12 bis 14 Prozent vom Höchststand (Q1 2022) bis zum Tiefpunkt (Q4 2023) aus. Ab 2024 stabilisieren sich die Preise in größeren Städten.
                        </p>
                        <p className="text-[10px] text-brand-anthracite/30 mt-2 tracking-wide">
                          Quelle: Verband deutscher Pfandbriefbanken (vdp), Immobilienpreisindex 2024
                        </p>
                      </div>
                    </div>
                  </div>
                </DataPanel>
              </div>
            </motion.div>

            {/* ── ARGUMENT 4 ── */}
            <motion.div variants={fadeUp} className="py-14 grid grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
              <p className="text-6xl md:text-7xl font-nazare text-brand-gold/20 leading-none pt-1">04</p>
              <div>
                <h3 className="text-2xl md:text-3xl font-nazare text-brand-anthracite mb-6">
                  Das Aufteilungsverbot kommt. Früher oder später.
                </h3>
                <div className="space-y-4 text-sm text-brand-anthracite/60 leading-relaxed">
                  <p>
                    Seit 2021 erlaubt §250 BauGB Kommunen, die Aufteilung von Mehrfamilienhäusern in Eigentumswohnungen zu verbieten. München, Berlin und Hamburg haben davon bereits Gebrauch gemacht. In Dresden gibt es das Verbot noch nicht.
                  </p>
                  <p>
                    Die Ausgangslage ist attraktiv: Wer eine Immobilie heute aufteilt, schafft die Voraussetzungen für eine spätere Einzelveräußerung der Wohnungen – unabhängig davon, ob künftig strengere Regulierungen eingeführt werden. Sollte Dresden ein Umwandlungsverbot oder vergleichbare Einschränkungen beschließen, wären bereits aufgeteilte Objekte davon nicht betroffen. Gleichzeitig würde das Angebot neuer Eigentumswohnungen aus Bestandsobjekten sinken, wodurch bereits aufgeteilte Bestände an Bedeutung gewinnen könnten. Das begrenzt das Risiko, während das Chancenpotenzial erhalten bleibt.
                  </p>
                  <p>
                    Hinzu kommt ein übergeordneter Trend: Je stärker Immobilienmärkte reguliert werden, desto stärker richtet sich der Blick vieler Investoren auf Regionen mit planbaren Rahmenbedingungen und einem vergleichsweise moderaten Regulierungsumfeld. Sachsen und insbesondere Dresden profitieren davon, da der Markt weiterhin attraktive wirtschaftliche Fundamentaldaten mit unternehmerischer Handlungsfreiheit verbindet.
                  </p>
                </div>
                <DataPanel label="Städteliste und Rechtsgrundlage ansehen">
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 border border-gray-100">
                      <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold/70 mb-4">
                        Städte mit Aufteilungsverbot (§250 BauGB)
                      </p>
                      <div className="space-y-2">
                        {[
                          { city: "Berlin", year: "seit 2021", area: "Gesamtes Stadtgebiet (Milieuschutzgebiete)" },
                          { city: "München", year: "seit 2021", area: "Zahlreiche Stadtbezirke" },
                          { city: "Hamburg", year: "seit 2021", area: "Gesamtes Stadtgebiet" },
                          { city: "Frankfurt a.M.", year: "seit 2022", area: "Ausgewählte Quartiere" },
                          { city: "Stuttgart", year: "seit 2022", area: "Zentrumsnahe Bereiche" },
                          { city: "Dresden", year: "nicht eingeführt", area: "Stand: 2025" },
                        ].map((c) => (
                          <div key={c.city} className={`flex items-center justify-between py-2.5 px-3 rounded-lg ${c.city === "Dresden" ? "bg-brand-green/[0.07] border border-brand-green/15" : "bg-gray-50"}`}>
                            <div className="flex items-center gap-3">
                              <RuneIcon size={11} className={c.city === "Dresden" ? "text-brand-green" : "text-brand-gold/40"} />
                              <span className={`text-xs font-semibold ${c.city === "Dresden" ? "text-brand-green" : "text-brand-anthracite"}`}>{c.city}</span>
                            </div>
                            <div className="text-right">
                              <p className={`text-xs ${c.city === "Dresden" ? "text-brand-green" : "text-brand-anthracite/50"}`}>{c.year}</p>
                              <p className="text-[10px] text-brand-anthracite/35">{c.area}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-[10px] text-brand-anthracite/30 mt-4 tracking-wide">
                        Rechtsgrundlage: §250 BauGB (Baugesetzbuch), eingeführt durch das Baulandmobilisierungsgesetz 2021.
                        Gesetzestext: gesetze-im-internet.de/bbaug/__250.html
                      </p>
                    </div>
                  </div>
                </DataPanel>
              </div>
            </motion.div>

            {/* ── ARGUMENT 5 ── */}
            <motion.div variants={fadeUp} className="py-14 grid grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
              <p className="text-6xl md:text-7xl font-nazare text-brand-gold/20 leading-none pt-1">05</p>
              <div>
                <h3 className="text-2xl md:text-3xl font-nazare text-brand-anthracite mb-6">
                  Cash is King.
                </h3>
                <div className="space-y-4 text-sm text-brand-anthracite/60 leading-relaxed">
                  <p>
                    In einem Markt, in dem die meisten Käufer auf Bankfinanzierungen angewiesen sind, verhandelt ein Eigenkapitalgeber aus einer grundsätzlich anderen Position. Kein Finanzierungsvorbehalt, kein Zeitdruck, keine Zinskosten, die den Businesscase eng machen. Das schlägt sich beim Einkauf direkt in günstigeren Preisen nieder. Verkäufer, die diskret und schnell handeln wollen, bevorzugen Käufer ohne Bankabhängigkeit.
                  </p>
                  <p>
                    Das gestiegene Zinsniveau hat den Kreis der tatsächlich handlungsfähigen Käufer deutlich verkleinert. Wer nicht auf eine Finanzierungszusage angewiesen ist, bewegt sich in einem Markt mit weniger Wettbewerb, mehr Auswahl und mehr Verhandlungsmacht.
                  </p>
                  <p>
                    Wer heute in Wohnimmobilien fremdfinanziert ist, trägt laufende Zinskosten. Je länger das Zinsniveau erhöht bleibt, desto stärker geraten Eigentümer unter Druck, deren Objekte sich nicht aus dem laufenden Cashflow tragen lassen. Die Folge sind Zwangsverkäufe und Portfoliobereinigungen zu Preisen, die der Markt diktiert, nicht der Eigentümer. Eigenkapital schafft in dieser Konstellation strukturelle Überlegenheit: keine Zinskosten, kein Liquiditätsdruck, kein aufgezwungener Zeitpunkt. Das ermöglicht, Objekte in Ruhe zu entwickeln, Maßnahmen sorgfältig umzusetzen und selbst zu entscheiden, wann und zu welchen Bedingungen ein Objekt veräußert wird. Nicht wann es veräußert werden muss.
                  </p>
                  <div className="mt-6 border border-brand-gold/25 rounded-xl p-5">
                    <p className="text-brand-gold font-nazare text-2xl mb-2">Akkumulationsphase.</p>
                    <p className="text-sm text-brand-anthracite/60 leading-relaxed">
                      Märkte, in denen Preise korrigieren, Nachfrage aber strukturell steigt, werden in der Rückschau als die offensichtlichsten Kaufzeitpunkte bezeichnet. Wir befinden uns gerade in einer solchen Phase.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. WARUM WIR ────────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-anthracite relative overflow-hidden">
        <RuneIcon size={480} className="absolute -right-16 top-1/2 -translate-y-1/2 text-white/[0.025] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-16">
            <motion.p variants={fadeUp} className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">
              Das Team
            </motion.p>
            <RuneDivider light className="max-w-xs mb-6" />
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-nazare text-white mb-5">
              Wir kennen jeden Schritt im Prozess.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/55 max-w-2xl leading-relaxed">
              CADA Invest ist weder ein Fonds noch ein klassischer Bestandshalter. Wir sind Immobilienhändler mit umfassender Entwicklungserfahrung und verfügen gleichzeitig über langjährige Erfahrung in der Immobilienvermittlung. Einkauf, Entwicklung und Exit steuern wir vollständig aus einer Hand – mit kurzen Entscheidungswegen, klarer Verantwortung und tiefem Marktverständnis.{" "}
              Unser Schwerpunkt liegt dabei nicht allein auf dem Ankauf, sondern auf der gezielten Weiterentwicklung der Objekte. Genau dieser Schritt unterscheidet uns von vielen klassischen Händlern und schafft die Grundlage für nachhaltige Wertsteigerungen.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_auto] gap-14 items-start">
            {/* Value Chain */}
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <div className="space-y-0">
                {[
                  {
                    phase: "Einkauf",
                    body: "Durch unser Netzwerk aus Maklern, Hausverwaltungen und Eigentümern erhalten wir regelmäßig Zugang zu Immobilien, bevor diese öffentlich vermarktet werden. Gleichzeitig verfügen wir durch unsere Tätigkeit als Immobilienhändler und Vermittler über umfangreiche Erfahrung in der Bewertung von Objekten. Dadurch können wir Potenziale, Risiken und Entwicklungsmöglichkeiten frühzeitig erkennen und fundierte Investitionsentscheidungen treffen.",
                    detail: "Wir haben ein Gefühl für diesen Markt entwickelt, das sich nicht aus Statistiken lesen lässt.",
                  },
                  {
                    phase: "Entwicklung",
                    body: "Unser Ziel ist nicht, lediglich günstig einzukaufen und zum Marktpreis weiterzuverkaufen. Wir konzentrieren uns darauf, das volle Potenzial einer Immobilie zu erschließen. Dazu setzen wir gezielt Maßnahmen um, die sowohl den Wert als auch die laufenden Erträge des Objekts nachhaltig steigern. Dazu gehören beispielsweise Aufteilungen, Neuvermietungen, Modernisierungen oder die Kombination mehrerer Entwicklungsmaßnahmen.",
                    detail: "Der Unterschied zwischen einem Objekt, das wir kaufen, und demselben Objekt nach 12 Monaten Entwicklung ist der Kern unseres Geschäftsmodells.",
                  },
                  {
                    phase: "Exit",
                    body: "Wir kennen den Einzelvertrieb aufgeteilter Wohnungen aus dem Händlergeschäft und den Globalverkauf ganzer Objekte aus der Maklertätigkeit. Beide Exit-Wege sind uns vertraut. Wir wissen, wer kauft, zu welchen Preisen und unter welchen Bedingungen.",
                    detail: "Die Abnehmer für entwickelte Objekte sind da. Fonds, Family Offices und institutionelle Käufer suchen genau das, was wir produzieren.",
                  },
                ].map((step, i) => (
                  <div key={step.phase} className="flex gap-8">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-3 h-3 rounded-full border-2 border-brand-gold mt-1.5" />
                      {i < 2 && <div className="w-px flex-1 bg-brand-gold/20 my-2" />}
                    </div>
                    <div className={`pb-12 ${i === 2 ? "pb-0" : ""}`}>
                      <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-3">{step.phase}</p>
                      <p className="text-sm text-white/55 leading-relaxed mb-3">{step.body}</p>
                      <p className="text-xs text-white/35 leading-relaxed italic">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Team + Why not alone */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="space-y-5 lg:w-72"
            >
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. DIE STRUKTUR ─────────────────────────────────────────────── */}
      <section className="py-28 bg-brand-green relative overflow-hidden">
        <RuneIcon size={520} className="absolute bottom-[-80px] right-[-80px] text-white/[0.04] pointer-events-none" />
        <RuneIcon size={180} className="absolute top-16 left-12 text-white/[0.03] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-14">
            <motion.p variants={fadeUp} className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">
              Die Struktur
            </motion.p>
            <RuneDivider light className="max-w-xs mb-6" />
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-nazare text-white mb-5">
              Kapital und Wertschöpfung aus einer Hand.
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <motion.p variants={fadeUp} className="text-white/65 leading-relaxed mb-5">
                Das Modell sieht eine gemeinsame Gesellschaft vor. Dave Blümel und Calvin Linke übernehmen die operative Geschäftsführung sowie die vollständige Steuerung des Investments – von der Akquisition über die Entwicklung bis zum Exit. Das eingebrachte Kapital wird gezielt für den Erwerb und die Weiterentwicklung von Immobilien eingesetzt, um durch aktives Asset Management und wertsteigernde Maßnahmen attraktive Ergebnisse zu erzielen.
              </motion.p>
              <motion.p variants={fadeUp} className="text-white/65 leading-relaxed mb-5">
                Da der Investor den wesentlichen Teil des Kapitals bereitstellt, partizipiert er entsprechend am wirtschaftlichen Erfolg der Gesellschaft. Wie die Kapitalstruktur im Detail ausgestaltet wird – ob als Gesellschafterdarlehen, Beteiligung oder in einer anderen Form – stimmen wir individuell ab. Es gibt keine Standardlösung. Die Struktur muss den Interessen und Zielen beider Seiten gerecht werden.
              </motion.p>
              <motion.p variants={fadeUp} className="text-white/40 text-sm leading-relaxed">
                Das weitere Gespräch führen wir vertraulich und individuell.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="space-y-4"
            >
              {[
                {
                  role: "Investor",
                  description: "Stellt das Eigenkapital bereit und definiert gemeinsam mit den operativen Partnern den Investitionsrahmen. Partizipiert am wirtschaftlichen Erfolg der Gesellschaft durch Wertsteigerungen der Immobilien sowie laufende Erträge.",
                },
                {
                  role: "Dave Blümel & Calvin Linke",
                  description: "Übernehmen die operative Geschäftsführung und verantworten die Umsetzung der Investmentstrategie. Dazu gehören die Akquisition geeigneter Objekte, die Entwicklung und Optimierung des Bestands, die Vermietung sowie die Veräußerung. Sämtliche Maßnahmen erfolgen transparent und nachvollziehbar.",
                },
                {
                  role: "Die Gesellschaft",
                  description: "Dient als gemeinsame Investitionsplattform und hält die Immobilien im Gesellschaftsvermögen. Sie bündelt Erträge und Wertsteigerungen innerhalb einer klaren Struktur und schafft eine saubere Trennung zwischen dem Investment und dem Privatvermögen der Beteiligten.",
                },
              ].map((item) => (
                <motion.div key={item.role} variants={fadeUp} className="bg-white/[0.07] border border-white/10 rounded-xl p-6">
                  <p className="text-brand-gold font-semibold text-sm mb-2">{item.role}</p>
                  <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
