import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "gold" | "green" | "white";
  className?: string;
}

const variants = {
  gold:  "bg-brand-gold/10 text-brand-gold border border-brand-gold/20",
  green: "bg-brand-green/10 text-brand-green border border-brand-green/20",
  white: "bg-white/15 text-white border border-white/25",
};

export function Badge({ children, variant = "gold", className = "" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
