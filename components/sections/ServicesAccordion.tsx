"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import { SERVICES } from "@/lib/constants";
import { PAGE_EASE } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

export function ServicesAccordion() {
  const [openId, setOpenId] = useState<string | null>(SERVICES[0]?.id ?? null);
  const reducedMotion = usePrefersReducedMotion();
  const baseId = useId();

  return (
    <ul className="divide-y divide-border border-y border-border">
      {SERVICES.map((s) => {
        const expanded = openId === s.id;
        const panelId = `${baseId}-${s.id}-panel`;
        const headerId = `${baseId}-${s.id}-header`;

        return (
          <li key={s.id}>
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={expanded}
                aria-controls={panelId}
                data-cursor-hover
                className="flex w-full items-start justify-between gap-6 py-8 text-left transition-colors hover:bg-surface/40 md:px-4"
                onClick={() => setOpenId(expanded ? null : s.id)}
              >
                <span className="flex gap-6 md:gap-10">
                  <span className="font-mono text-[13px] text-secondary">
                    {s.number}
                  </span>
                  <span className="font-serif text-[clamp(1.35rem,3vw,2rem)] italic text-primary">
                    {s.title}
                  </span>
                </span>
                <span
                  className="mt-1 font-mono text-secondary"
                  aria-hidden
                >
                  {expanded ? "−" : "+"}
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={
                    reducedMotion
                      ? undefined
                      : { height: 0, opacity: 0 }
                  }
                  transition={{
                    duration: reducedMotion ? 0 : 0.45,
                    ease: PAGE_EASE,
                  }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-8 border-t border-border bg-surface/30 px-4 py-8 md:grid-cols-2 md:px-8">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
                        What it includes
                      </p>
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-primary/85">
                        {s.includes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
                          Who it&apos;s for
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-primary/85">
                          {s.audience}
                        </p>
                      </div>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
                          Differentiator
                        </p>
                        <p className="mt-3 border-l border-border pl-4 text-sm italic leading-relaxed text-accent">
                          {s.differentiator}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
