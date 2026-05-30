"use client";
import { useId } from "react";
import { cn } from "@/lib/utils";

interface RuneIconProps {
  size?: number;
  className?: string;
}

export function RuneIcon({ size = 24, className = "" }: RuneIconProps) {
  const uid = useId().replace(/:/g, "");
  const clipId = `rune-clip-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipId}>
          <circle cx="50" cy="50" r="47" />
        </clipPath>
      </defs>
      {/*
        CADA Rune: 4-fold interlaced globe knot
        Approximation of the logo symbol using 4 overlapping bands
        at 0°, 45°, 90°, 135° — clipped to circle
      */}
      <g clipPath={`url(#${clipId})`}>
        {/* Horizontal band (0°) */}
        <rect x="3" y="38" width="94" height="24" rx="12" />
        {/* Vertical band (90°) */}
        <rect x="38" y="3" width="24" height="94" rx="12" />
        {/* Diagonal band (45°) */}
        <rect
          x="3" y="38" width="94" height="24" rx="12"
          transform="rotate(45 50 50)"
        />
        {/* Diagonal band (-45° / 135°) */}
        <rect
          x="3" y="38" width="94" height="24" rx="12"
          transform="rotate(-45 50 50)"
        />
      </g>
      {/* Center highlight ring — creates "woven center" effect */}
      <circle cx="50" cy="50" r="11" fill="none" strokeWidth="4.5" stroke="currentColor" opacity="0.35" />
    </svg>
  );
}
