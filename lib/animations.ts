import type { Transition, Variants } from "framer-motion";

/** Page transition ease from spec */
export const PAGE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const pageTransition: Transition = {
  duration: 0.6,
  ease: PAGE_EASE,
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: PAGE_EASE },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: PAGE_EASE },
  },
};

/** Instant / no motion variants for prefers-reduced-motion */
export const reducedFadeUpVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export const reducedStaggerContainer: Variants = {
  hidden: {},
  visible: {},
};

export const reducedStaggerItem: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};
