"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { RuneIcon } from "@/components/ui/RuneIcon";

export default function InvestorenGate() {
  const [password, setPassword]   = useState("");
  const [show, setShow]           = useState(false);
  const [error, setError]         = useState(false);
  const [loading, setLoading]     = useState(false);
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
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                placeholder="Zugangscode eingeben"
                className="w-full bg-white/[0.08] border border-white/20 rounded-xl px-5 py-4 pr-14 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-gold/50 transition-colors duration-200"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/35 hover:text-white/70 transition-colors duration-150"
                aria-label={show ? "Passwort verbergen" : "Passwort anzeigen"}
              >
                {show ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
            {error && (
              <p className="text-red-400/90 text-xs mt-2 pl-1">Falsches Passwort.</p>
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
