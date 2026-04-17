import { COMPANY } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ScrambleText } from "@/components/ui/ScrambleText";

function HeroNoise() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]"
      aria-hidden
    >
      <filter id="heroNoise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="4"
          stitchTiles="stitch"
          result="noise"
        />
        <feColorMatrix
          type="matrix"
          values="1 0 0 0 0 0 1 0 0 0  0 0 1 0 0  0 0 0 0.35 0"
          in="noise"
          result="mono"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#heroNoise)" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] overflow-hidden pt-28 md:pt-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-surface)_0%,var(--color-bg)_65%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, var(--color-text-primary) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <HeroNoise />

      <div className="container-editorial relative z-[1] pb-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-secondary">
          EST. {COMPANY.est} — {COMPANY.tagline.toUpperCase()}
        </p>

        <div className="mt-10 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <ScrambleText
              as="h1"
              id="hero-heading"
              className="text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight text-primary"
              parts={[
                {
                  text: "Building ",
                  className: "font-sans font-medium",
                },
                {
                  text: "reliable",
                  className: "font-serif italic",
                },
                {
                  text: "\ndigital systems.",
                  className: "font-sans font-medium",
                },
              ]}
            />
          </div>
        </div>

        <RevealOnScroll className="mt-10 max-w-[420px]" delay={0.3}>
          <p className="text-lg leading-relaxed text-secondary">
            {COMPANY.brandName} is at the start of its story—taking a small
            number of early engagements while we prove delivery discipline in
            the open. If you need calm execution more than hype, we should talk.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-12 flex flex-wrap items-center gap-6">
          <MagneticButton href="/contact" variant="primary">
            Start a project →
          </MagneticButton>
          <MagneticButton href="/services" variant="plain" underline>
            What we build
          </MagneticButton>
        </RevealOnScroll>

        <div className="mt-20 flex items-center gap-4 border-t border-border pt-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
            Scroll
          </span>
          <span
            className="inline-block h-8 w-px bg-border"
            aria-hidden
          />
          <span
            className="scroll-cue-arrow block h-2 w-2 rounded-full bg-highlight/80"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
