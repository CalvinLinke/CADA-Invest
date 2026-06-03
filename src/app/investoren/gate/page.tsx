"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { RuneIcon } from "@/components/ui/RuneIcon";

export default function InvestorenGate() {
  const [password, setPassword] = useState("");
  const [error, setError]       = useState(false);
  const [loading, setLoading]   = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/investoren-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/investoren");
      router.refresh();
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-brand-green flex items-center justify-center relative overflow-hidden">
      <RuneIcon size={520} className="absolute bottom-[-80px] right-[-80px] text-white/[0.04] pointer-events-none" />
      <RuneIcon size={180} className="absolute top-16 left-10 text-white/[0.03] pointer-events-none" />

      <div className="relative z-10 w-full max-w-sm mx-auto px-6">
        <div className="text-center mb-10">
          <Image
            src="/CI/logo-cropped.png"
            alt="CADA Invest"
            width={190}
            height={26}
            className="brightness-0 invert opacity-90 mx-auto mb-8"
          />
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold/70">
            Investoren Pitch
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder="Zugangscode eingeben"
              className="w-full bg-white/[0.08] border border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-gold/50 transition-colors duration-200"
              autoFocus
            />
            {error && (
              <p className="text-red-400/80 text-xs mt-2 pl-1">Zugangscode ungültig.</p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full bg-brand-gold/90 hover:bg-brand-gold text-white font-semibold text-sm py-4 rounded-xl transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? "Prüfe..." : "Zugang bestätigen"}
          </button>
        </form>
      </div>
    </div>
  );
}
