"use client";

import { SERVICES } from "@/lib/constants";

/**
 * Slow horizontal marquee of service names separated by em dash.
 */
export function MarqueeStrip() {
  const items = SERVICES.map((s) => s.title);
  const text = items.join(" — ");

  return (
    <div className="relative overflow-hidden border-y border-border py-4">
           <div className="marquee-track flex w-max animate-marquee font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
        <span className="shrink-0 pr-16" aria-hidden>
          {text}
        </span>
        <span className="shrink-0 pr-16" aria-hidden>
          {text}
        </span>
      </div>
      <span className="sr-only">{text}</span>
    </div>
  );
}
