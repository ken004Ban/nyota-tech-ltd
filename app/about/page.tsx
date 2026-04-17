import type { Metadata } from "next";
import Image from "next/image";
import { TEAM_FOCUS_AREAS, VALUES, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Mission, values, and how ${COMPANY.brandName} is organizing as ${COMPANY.legalName} begins work with early clients.`,
};

export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-36">
      <section
        aria-labelledby="mission-heading"
        className="container-editorial section-y border-b border-border"
      >
        <h2 id="mission-heading" className="sr-only">
          Mission
        </h2>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          <blockquote className="max-w-4xl flex-1 font-serif text-[clamp(1.75rem,4vw,2.75rem)] italic leading-snug text-primary">
            “We are at the beginning—building a practice where stillness
            precedes motion. Our job is to make dependable software feel
            inevitable for the people who operate it, even when the portfolio is
            still taking shape.”
          </blockquote>
          <div className="shrink-0 opacity-40 grayscale">
            <Image
              src="/mark.svg"
              alt=""
              width={160}
              height={160}
              className="h-auto w-[120px] md:w-[160px]"
              priority
            />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="values-heading"
        className="container-editorial section-y"
      >
        <h2
          id="values-heading"
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary"
        >
          Values
        </h2>
        <ul className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
          {VALUES.map((v) => (
            <li key={v.n} className="border-t border-border pt-8">
              <p className="font-mono text-[13px] text-secondary">{v.n}</p>
              <h3 className="mt-4 font-sans text-xl font-medium text-primary">
                {v.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-secondary">
                {v.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="team-heading"
        className="container-editorial section-y border-t border-border"
      >
        <h2
          id="team-heading"
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary"
        >
          Founding focus
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-secondary">
          Role-shaped pillars while the core team forms—no placeholder names,
          just the work we are organizing around first.
        </p>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_FOCUS_AREAS.map((item) => (
            <li key={item.code} className="flex flex-col gap-4">
              <div
                className="flex aspect-square w-full max-w-[180px] items-center justify-center rounded-2xl border border-border bg-surface font-mono text-lg text-accent"
                aria-hidden
              >
                {item.code}
              </div>
              <div>
                <p className="font-sans text-lg font-medium text-primary">
                  {item.title}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-secondary">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
