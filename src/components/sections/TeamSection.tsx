"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { RuneIcon } from "@/components/ui/RuneIcon";
import { RuneDivider } from "@/components/ui/RuneDivider";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const team = [
  {
    name: "Calvin Linke",
    role: "Geschäftsführer",
    image: "/team/calvin-linke.jpg",
    bio: "Verantwortet Ankauf und Bewertung. Direkter Ansprechpartner für Eigentümer in Dresden und ganz Sachsen – mit klarem Blick für faire, realistische Einschätzungen.",
  },
  {
    name: "Dave Blümel",
    role: "Geschäftsführer",
    image: "/team/dave-bluemel.jpg",
    bio: "Verantwortet Netzwerk und Abwicklung. Sorgt für reibungslose, diskrete Transaktionen – vom Erstkontakt bis zum Notartermin in unter vier Wochen.",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <RuneIcon
        size={420}
        className="absolute -bottom-24 -right-24 text-brand-gold/[0.05] pointer-events-none"
      />
      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">
            Unser Team
          </p>
          <RuneDivider className="max-w-xs mx-auto" />
          <h2 className="text-4xl md:text-5xl font-nazare text-brand-anthracite mt-4">
            Die Menschen hinter CADA Invest
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 gap-12 max-w-3xl mx-auto"
        >
          {team.map((m) => (
            <motion.div key={m.name} variants={fadeUp}>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-brand-cream shadow-[0_16px_50px_rgba(42,42,42,0.10)]">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="w-11 h-0.5 bg-brand-gold mt-6 mb-3.5" />
              <h3 className="font-nazare text-2xl text-brand-anthracite mb-1.5">
                {m.name}
              </h3>
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-brand-gold mb-3.5">
                {m.role}
              </p>
              <p className="text-[15px] leading-relaxed text-brand-anthracite/65">
                {m.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
