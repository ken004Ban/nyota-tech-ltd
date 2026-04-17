"use client";

import {
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

type AnimatedStatProps = {
  label: string;
  /** e.g. "12+", "200+", "98%" */
  value: string;
};

function parseStat(value: string): { num: number; suffix: string } {
  const m = value.match(/^(\d+)(.*)$/);
  if (!m) return { num: 0, suffix: value };
  return { num: Number(m[1]), suffix: m[2] ?? "" };
}

function CountDisplay({
  spring,
  suffix,
}: {
  spring: MotionValue<number>;
  suffix: string;
}) {
  const [display, setDisplay] = useState(0);
  useMotionValueEvent(spring, "change", (v) => {
    setDisplay(Math.round(v));
  });
  return (
    <>
      {display}
      {suffix}
    </>
  );
}

/**
 * Counts up when scrolled into view; respects reduced motion.
 */
export function AnimatedStat({ label, value }: AnimatedStatProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reducedMotion = usePrefersReducedMotion();
  const { num, suffix } = useMemo(() => parseStat(value), [value]);

  const mv = useMotionValue(0);
  const spring = useSpring(mv, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  useEffect(() => {
    if (reducedMotion) {
      mv.set(num);
      return;
    }
    if (inView) mv.set(num);
  }, [inView, mv, num, reducedMotion]);

  return (
    <div ref={ref} className="flex flex-col gap-3 px-4 py-2 md:px-8">
      <span className="font-sans text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-none tracking-tight text-primary">
        {reducedMotion ? (
          <>
            {num}
            {suffix}
          </>
        ) : (
          <CountDisplay spring={spring} suffix={suffix} />
        )}
      </span>
      <p className="max-w-[14rem] text-sm leading-relaxed text-secondary">
        {label}
      </p>
    </div>
  );
}
