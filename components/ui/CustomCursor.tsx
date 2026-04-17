"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

/**
 * 10px dot (instant) + 40px ring (0.1s lag). Ring grows to 60px on interactive hover.
 */
export function CustomCursor() {
  const reducedMotion = usePrefersReducedMotion();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    if (reducedMotion) return;

    document.body.classList.add("cursor-none-override");

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const interactive = el?.closest(
        "[data-cursor-hover], a, button, input, textarea, select, summary",
      );
      setHover(Boolean(interactive));

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const loop = () => {
      const target = pos.current;
      const rp = ringPos.current;
      const lag = 0.18;
      rp.x += (target.x - rp.x) * lag;
      rp.y += (target.y - rp.y) * lag;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rp.x}px, ${rp.y}px, 0) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
      document.body.classList.remove("cursor-none-override");
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  const ringSize = hover ? 60 : 40;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] mix-blend-difference"
        style={{
          width: 10,
          height: 10,
          borderRadius: 9999,
          background: "var(--color-highlight)",
          willChange: "transform",
        }}
        aria-hidden
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9997]"
        style={{
          width: ringSize,
          height: ringSize,
          borderRadius: 9999,
          border: "1px solid var(--color-highlight)",
          opacity: 0.55,
          transition: "width 0.25s ease, height 0.25s ease, opacity 0.2s ease",
          willChange: "transform, width, height",
        }}
        aria-hidden
      />
    </>
  );
}
