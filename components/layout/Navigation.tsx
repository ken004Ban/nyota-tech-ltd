"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PAGE_EASE } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reducedMotion = usePrefersReducedMotion();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open && firstLinkRef.current) {
      window.setTimeout(() => firstLinkRef.current?.focus(), 50);
    }
  }, [open]);

  const barBg = scrolled
    ? "bg-[var(--color-nav-scrolled)] backdrop-blur-[12px]"
    : "bg-transparent";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <nav
          aria-label="Primary"
          className={`transition-colors duration-300 ${barBg}`}
        >
          <div className="container-editorial flex h-16 items-center justify-between md:h-[4.5rem]">
            <Link
              href="/"
              className="font-serif text-xl italic tracking-tight text-primary outline-none md:text-2xl"
              data-cursor-hover
            >
              {COMPANY.brandName}
            </Link>

            <ul className="hidden items-center gap-10 md:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link-underline relative text-[13px] font-medium tracking-wide text-primary/60 transition-opacity hover:opacity-100 ${
                      pathname === link.href ? "opacity-100" : ""
                    }`}
                    data-cursor-hover
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden md:block">
              <MagneticButton href="/contact" variant="primary">
                Get in touch
              </MagneticButton>
            </div>

            <button
              type="button"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary transition-colors hover:text-primary md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              data-cursor-hover
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.35, ease: PAGE_EASE }}
            className="fixed inset-0 z-40 flex flex-col bg-bg px-6 pb-12 pt-24 md:hidden"
          >
            <ul className="flex flex-col gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: reducedMotion ? 0 : 0.05 + i * 0.06,
                    ease: PAGE_EASE,
                  }}
                >
                  <Link
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    className="block font-sans text-3xl font-medium text-primary"
                    data-cursor-hover
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="mt-auto"
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: reducedMotion ? 0 : 0.35,
                ease: PAGE_EASE,
              }}
            >
              <MagneticButton href="/contact" variant="primary">
                Get in touch
              </MagneticButton>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
