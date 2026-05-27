import Link from "next/link";
import { COMPANY, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative mt-24 overflow-hidden border-t border-border"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-serif text-[clamp(5rem,18vw,9rem)] italic leading-none text-primary/[0.11]"
        aria-hidden
      >
        {COMPANY.brandName}
      </div>

      <div className="container-editorial section-y relative z-[1]">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p
              id="footer-brand"
              className="font-serif text-3xl italic leading-tight text-primary md:text-4xl"
            >
              {COMPANY.brandName}
            </p>
            <p className="mt-3 text-base font-medium leading-snug tracking-tight text-primary/90 md:text-lg">
              {COMPANY.legalName}
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-secondary md:text-[15px]">
              {COMPANY.legalName} is new on the calendar—and intentional about
              it. We&apos;re building a practice around uptime, clarity, and
              calm delivery while early projects move through the pipeline.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-3 md:col-span-8 md:grid-cols-3">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
                Navigate
              </p>
              <ul className="mt-4 space-y-2">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-primary/80 transition-colors hover:text-primary"
                      data-cursor-hover
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
                Contact
              </p>
              <ul className="mt-4 space-y-2 text-sm text-primary/80">
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="transition-colors hover:text-primary"
                    data-cursor-hover
                  >
                    {COMPANY.email}
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/260771204563"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                    data-cursor-hover
                  >
                    WhatsApp
                  </a>
                </li>
                {COMPANY.phone ? <li>{COMPANY.phone}</li> : null}
                {COMPANY.address ? (
                  <li className="max-w-[12rem] leading-relaxed">
                    {COMPANY.address}
                  </li>
                ) : null}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
                Social
              </p>
              <ul className="mt-4 space-y-2">
                {SOCIAL_LINKS.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary/80 transition-colors hover:text-primary"
                      data-cursor-hover
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-[13px] text-secondary md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {COMPANY.legalName}. All rights reserved.
          </p>
          <p className="text-secondary/80">Designed with intention.</p>
        </div>
      </div>
    </footer>
  );
}
