"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PAGE_EASE } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

type SplitTextProps = {
  lines: string[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "h3" | "p";
  id?: string;
};

/**
 * Line-by-line clip reveal on scroll.
 */
export function SplitText({
  lines,
  className = "",
  lineClassName = "",
  as: Tag = "h2",
  id,
}: SplitTextProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div ref={ref}>
      <Tag id={id} className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span
              className={`block ${lineClassName}`}
              initial={
                reducedMotion
                  ? { clipPath: "inset(0% 0% 0% 0%)" }
                  : { clipPath: "inset(100% 0% 0% 0%)" }
              }
              animate={
                inView
                  ? { clipPath: "inset(0% 0% 0% 0%)" }
                  : { clipPath: "inset(100% 0% 0% 0%)" }
              }
              transition={{
                duration: reducedMotion ? 0 : 0.85,
                ease: PAGE_EASE,
                delay: reducedMotion ? 0 : i * 0.06,
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
