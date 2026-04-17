import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export function AboutPreview() {
  return (
    <section
      aria-labelledby="about-preview-heading"
      className="section-y border-t border-border"
    >
      <div className="container-editorial">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <p
              id="about-preview-heading"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary"
            >
              About us
            </p>
            <p className="mt-4 font-serif text-3xl italic text-primary/80">
              {COMPANY.est}
            </p>
          </div>
          <div className="md:col-span-9">
            <p className="max-w-2xl text-lg leading-relaxed text-secondary md:text-xl">
              {COMPANY.legalName} is newly registered and deliberately small.
              We&apos;re assembling the first wave of client work—prioritizing
              reliability, clear communication, and systems you can run without
              heroics.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-accent"
              data-cursor-hover
            >
              Learn more <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
