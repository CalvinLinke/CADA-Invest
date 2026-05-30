"use client";
import { useState, useRef, useCallback } from "react";
import { RuneIcon } from "./ui/RuneIcon";

interface Pair {
  vorher: string;
  nachher: string;
  label?: string;
}

export function BeforeAfterSlider({ pairs }: { pairs: Pair[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPos, setSliderPos]     = useState(50);
  const containerRef                  = useRef<HTMLDivElement>(null);
  const dragging                      = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const pair = pairs[activeIndex];

  function selectPair(i: number) {
    setActiveIndex(i);
    setSliderPos(50);
  }

  return (
    <div className="w-full">
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-2xl aspect-[16/10] cursor-ew-resize select-none"
        onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX); }}
        onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
        onMouseUp={() => { dragging.current = false; }}
        onMouseLeave={() => { dragging.current = false; }}
        onTouchStart={(e) => updatePos(e.touches[0].clientX)}
        onTouchMove={(e) => { e.preventDefault(); updatePos(e.touches[0].clientX); }}
      >
        {/* Nachher — base layer */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={pair.nachher}
          alt="Nachher"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Vorher — overlay */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={pair.vorher}
          alt="Vorher"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          draggable={false}
        />

        {/* Divider + Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/80 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-brand-green flex items-center justify-center shadow-lg border-2 border-white/30">
            <RuneIcon size={20} className="text-white" />
          </div>
        </div>

        {/* Labels */}
        <span className="absolute bottom-4 left-4 text-white text-xs font-semibold bg-brand-anthracite/60 px-3 py-1.5 rounded-full backdrop-blur-sm pointer-events-none">
          Vorher
        </span>
        <span className="absolute bottom-4 right-4 text-white text-xs font-semibold bg-brand-green/70 px-3 py-1.5 rounded-full backdrop-blur-sm pointer-events-none">
          Nachher
        </span>

        {pair.label && (
          <span className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-xs font-semibold bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm pointer-events-none">
            {pair.label}
          </span>
        )}
      </div>

      {/* Navigation buttons */}
      {pairs.length > 1 && (
        <div className="flex gap-2 justify-center mt-5 flex-wrap">
          {pairs.map((p, i) => (
            <button
              key={i}
              onClick={() => selectPair(i)}
              className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                i === activeIndex
                  ? "bg-brand-green text-white shadow-sm"
                  : "bg-brand-cream text-brand-anthracite hover:bg-brand-green/10 hover:text-brand-green"
              }`}
            >
              {p.label ?? `Projekt ${i + 1}`}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
