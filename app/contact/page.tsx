import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach ${COMPANY.brandName} (${COMPANY.legalName}) by email to start a conversation about your project or pipeline.`,
};

export default function ContactPage() {
  return (
    <div className="pt-28 md:pt-36">
      <div className="container-editorial section-y">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h1 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] italic leading-tight text-primary">
              Let&apos;s begin quietly.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-secondary">
              Share context, constraints, and what “done” looks like. We respond
              with clarity—not a sales script.
            </p>
            <div className="mt-12 space-y-4 font-mono text-sm text-secondary">
              <p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-primary/90 transition-colors hover:text-primary"
                  data-cursor-hover
                >
                  {COMPANY.email}
                </a>
              </p>
              {COMPANY.phone ? <p>{COMPANY.phone}</p> : null}
              {COMPANY.address ? (
                <p className="max-w-xs leading-relaxed">{COMPANY.address}</p>
              ) : null}
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="mb-8 flex justify-center lg:justify-start">
              <MagneticButton
                href="https://wa.me/260973971192"
                variant="primary"
              >
                Chat on WhatsApp
              </MagneticButton>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
