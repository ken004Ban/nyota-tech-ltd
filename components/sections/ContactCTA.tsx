import { COMPANY } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function ContactCTA() {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="section-y border-t border-border"
    >
      <div className="container-editorial text-center">
        <h2
          id="contact-cta-heading"
          className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] italic leading-tight text-primary"
        >
          Ready to build something?
        </h2>
        <div className="mt-10 flex justify-center">
          <MagneticButton href="/contact" variant="primary">
            Let&apos;s talk
          </MagneticButton>
        </div>
        <p className="mt-8 font-mono text-sm text-secondary">
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-primary/80 transition-colors hover:text-primary"
            data-cursor-hover
          >
            {COMPANY.email}
          </a>
        </p>
      </div>
    </section>
  );
}
