"use client";

import { useLayoutEffect, useMemo, useState, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&";

export type ScramblePart = {
  text: string;
  className?: string;
};

type ScrambleTextProps = {
  parts: ScramblePart[];
  /** Total settle duration in seconds */
  duration?: number;
  as?: "h1" | "h2" | "p" | "span";
  className?: string;
  id?: string;
};

function randomChar(): string {
  return CHARSET[Math.floor(Math.random() * CHARSET.length)] ?? "X";
}

/**
 * Per-character scramble on mount; supports mixed typography via `parts`.
 * With prefers-reduced-motion, text is static. SSR shows final copy (progressive enhancement).
 */
export function ScrambleText({
  parts,
  duration = 1.2,
  as: Tag = "h1",
  className = "",
  id,
}: ScrambleTextProps) {
  const reducedMotion = usePrefersReducedMotion();

  const indices = useMemo(() => {
    const rows: { ch: string }[] = [];
    for (const part of parts) {
      for (const ch of part.text) {
        rows.push({ ch });
      }
    }
    return rows;
  }, [parts]);

  const finalChars = useMemo(() => indices.map((r) => r.ch), [indices]);

  const [display, setDisplay] = useState(() => [...finalChars]);

  useLayoutEffect(() => {
    if (reducedMotion) return;

    setDisplay(finalChars.map((ch) => (ch === "\n" ? "\n" : randomChar())));

    const letterPositions = finalChars
      .map((ch, i) => ({ ch, i }))
      .filter(({ ch }) => ch !== "\n")
      .map(({ i }) => i);

    const total = letterPositions.length;
    const totalMs = duration * 1000;
    const staggerMs = total > 0 ? totalMs / (total + 4) : 0;
    const timers: number[] = [];

    letterPositions.forEach((charIndex, order) => {
      const settleAt = staggerMs * order;
      const cycles = 6;
      const cycleMs = Math.max(28, (totalMs - settleAt) / (cycles + 1));

      for (let step = 0; step < cycles; step++) {
        timers.push(
          window.setTimeout(() => {
            setDisplay((prev) => {
              const next = [...prev];
              next[charIndex] = randomChar();
              return next;
            });
          }, settleAt + step * cycleMs),
        );
      }

      timers.push(
        window.setTimeout(() => {
          setDisplay((prev) => {
            const next = [...prev];
            next[charIndex] = finalChars[charIndex] ?? "";
            return next;
          });
        }, settleAt + cycles * cycleMs),
      );
    });

    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [duration, finalChars, reducedMotion]);

  const rendered: ReactNode[] = [];
  let global = 0;

  parts.forEach((part, pIdx) => {
    const inner: ReactNode[] = [];
    for (let k = 0; k < part.text.length; k++) {
      const idx = global++;
      const ch = display[idx] ?? part.text[k];
      if (ch === "\n") {
        inner.push(<br key={`${pIdx}-${k}`} />);
      } else {
        inner.push(
          <span key={`${pIdx}-${k}`} className="inline-block min-w-[0.04em]">
            {ch}
          </span>,
        );
      }
    }
    rendered.push(
      <span key={`part-${pIdx}`} className={part.className}>
        {inner}
      </span>,
    );
  });

  return (
    <Tag id={id} className={`font-sans font-medium ${className}`}>
      {rendered}
    </Tag>
  );
}
