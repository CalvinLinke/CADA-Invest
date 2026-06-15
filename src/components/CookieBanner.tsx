"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "cada_cookies";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Hinweis"
      className="fixed bottom-0 inset-x-0 z-50 bg-brand-anthracite"
      style={{ borderTop: "1px solid rgba(170,115,74,0.35)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm text-white/60 leading-relaxed max-w-2xl">
          Diese Website verwendet ausschließlich technisch notwendige Cookies — kein Tracking, keine Analyse.{" "}
          <Link
            href="/datenschutz"
            className="text-brand-gold/80 hover:text-brand-gold transition-colors duration-150 underline underline-offset-2"
          >
            Datenschutzerklärung
          </Link>
        </p>
        <button
          onClick={accept}
          className="shrink-0 text-sm font-semibold tracking-[0.08em] uppercase px-6 py-2.5 bg-brand-gold/10 text-brand-gold border border-brand-gold/30 hover:bg-brand-gold hover:text-white transition-colors duration-200"
        >
          Verstanden
        </button>
      </div>
    </div>
  );
}
