"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { RuneIcon } from "@/components/ui/RuneIcon";
import { cn } from "@/lib/utils";

const links = [
  { href: "/ankauf",                label: "Ankauf" },
  { href: "/immobilienbewertung",   label: "Bewertung" },
  { href: "/ueber-uns",             label: "Über uns" },
  { href: "/referenzen",            label: "Referenzen" },
  { href: "/partner",               label: "Kooperationen" },
];

export function Navigation() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const pathname                  = usePathname();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const transparent = !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-brand-gold/15 shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/CI/logo-cropped.png"
              alt="CADA Invest"
              width={265}
              height={36}
              className={cn(
                "transition-all duration-300",
                transparent ? "brightness-0 invert" : "brightness-100"
              )}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-[14px] font-medium transition-colors duration-150 relative group",
                  transparent ? "text-white/90 hover:text-white" : "text-brand-anthracite hover:text-brand-green"
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 right-0 h-0.5 origin-left transition-transform duration-200",
                    pathname === l.href ? "scale-x-100 bg-brand-gold" : "scale-x-0 bg-brand-gold group-hover:scale-x-100"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button href="/immobilienbewertung" variant="primary" size="sm">
              Immobilie anbieten
            </Button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className={cn(
              "lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg",
              transparent ? "text-white" : "text-brand-anthracite"
            )}
            aria-label="Menü öffnen"
          >
            <span className={cn("w-6 h-0.5 bg-current transition-all duration-200", open && "translate-y-2 rotate-45")} />
            <span className={cn("w-6 h-0.5 bg-current transition-all duration-200", open && "opacity-0")} />
            <span className={cn("w-6 h-0.5 bg-current transition-all duration-200", open && "-translate-y-2 -rotate-45")} />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-brand-green flex flex-col transition-all duration-300 lg:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Rune Watermark */}
        <RuneIcon
          size={320}
          className="absolute bottom-8 right-[-60px] text-white/[0.05] pointer-events-none"
        />

        <div className="flex flex-col items-center justify-center flex-1 gap-8 pt-20">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              className={cn(
                "text-3xl font-nazare text-white/90 hover:text-white transition-all duration-200",
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              {l.label}
            </Link>
          ))}
          <div className={cn("mt-4 transition-all duration-300", open ? "opacity-100" : "opacity-0")}>
            <Button href="/immobilienbewertung" variant="secondary" size="md">
              Immobilie anbieten
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
