"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  type PointerEvent,
  type ReactNode,
} from "react";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "plain";
  /** For plain variant: bottom border accent on hover */
  underline?: boolean;
  /** Stretch to container width (e.g. full-width submit) */
  fullWidth?: boolean;
  disabled?: boolean;
};

/**
 * GSAP magnetic pull (max 8px). GSAP is loaded dynamically to avoid SSR issues.
 */
export function MagneticButton({
  children,
  className = "",
  href,
  type = "button",
  variant = "primary",
  underline = false,
  fullWidth = false,
  disabled = false,
}: MagneticButtonProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const gsapRef = useRef<Awaited<typeof import("gsap")>["default"] | null>(
    null,
  );
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    let cancelled = false;
    void import("gsap").then((m) => {
      if (!cancelled) gsapRef.current = m.default;
    });
    return () => {
      cancelled = true;
    };
  }, [reducedMotion]);

  const resetPosition = useCallback(() => {
    const inner = innerRef.current;
    const gsap = gsapRef.current;
    if (!inner || !gsap || disabled || reducedMotion) return;
    gsap.to(inner, {
      x: 0,
      y: 0,
      duration: 0.75,
      ease: "elastic.out(1, 0.45)",
    });
  }, [disabled, reducedMotion]);

  const onPointerMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (disabled || reducedMotion) return;
      const outer = outerRef.current;
      const inner = innerRef.current;
      const gsap = gsapRef.current;
      if (!outer || !inner || !gsap) return;

      const rect = outer.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const max = 8;
      const nx = Math.max(-max, Math.min(max, dx * 0.14));
      const ny = Math.max(-max, Math.min(max, dy * 0.14));

      gsap.to(inner, {
        x: nx,
        y: ny,
        duration: 0.35,
        ease: "power3.out",
      });
    },
    [disabled, reducedMotion],
  );

  const primaryInner = `inline-flex items-center justify-center gap-2 rounded-none border border-accent px-6 py-3 text-[13px] font-medium tracking-wide text-primary transition-colors hover:bg-surface ${fullWidth ? "w-full" : ""}`;
  const plainInner = `inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-primary ${
    underline
      ? "border-b border-transparent pb-0.5 transition-colors hover:border-accent"
      : ""
  }`;

  const innerClass =
    variant === "primary"
      ? `${primaryInner} ${className}`
      : `${plainInner} ${className}`;

  const shell = (
    <div
      ref={outerRef}
      className={`select-none ${fullWidth ? "block w-full" : "inline-block"} ${disabled ? "pointer-events-none" : ""}`}
      data-cursor-hover={disabled ? undefined : true}
      onPointerMove={onPointerMove}
      onPointerLeave={resetPosition}
      onPointerCancel={resetPosition}
    >
      <div
        ref={innerRef}
        className={`${innerClass} ${disabled ? "opacity-45" : ""}`}
        style={{ willChange: "transform" }}
      >
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`outline-none focus-visible:rounded-sm ${fullWidth ? "block w-full" : "inline-block"}`}
        data-cursor-hover
      >
        {shell}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={`border-0 bg-transparent p-0 outline-none focus-visible:rounded-sm ${fullWidth ? "block w-full" : "inline-block"} ${disabled ? "cursor-not-allowed" : ""}`}
      data-cursor-hover={disabled ? undefined : true}
    >
      {shell}
    </button>
  );
}
