"use client";

import { motion, useInView } from "framer-motion";
import { Children, useRef, type ReactNode } from "react";
import { reducedStaggerItem, staggerItem } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  /** Extra delay before stagger starts (seconds) */
  delay?: number;
};

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const reducedParentVariants = {
  hidden: {},
  visible: {},
};

/**
 * Scroll-triggered fade-up; direct children stagger by 0.08s.
 */
export function RevealOnScroll({
  children,
  className = "",
  delay = 0,
}: RevealOnScrollProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reducedMotion = usePrefersReducedMotion();

  const itemVars = reducedMotion ? reducedStaggerItem : staggerItem;
  const parent = reducedMotion ? reducedParentVariants : parentVariants;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: parent.hidden,
        visible: {
          ...parent.visible,
          transition: {
            staggerChildren: reducedMotion ? 0 : 0.08,
            delayChildren: reducedMotion ? 0 : delay,
          },
        },
      }}
    >
      {Children.map(children, (child, i) => (
        <motion.div key={i} variants={itemVars}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
