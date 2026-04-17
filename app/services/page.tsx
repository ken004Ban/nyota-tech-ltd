import type { Metadata } from "next";
import { ServicesAccordion } from "@/components/sections/ServicesAccordion";
import { SplitText } from "@/components/ui/SplitText";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description: `Capabilities ${COMPANY.brandName} is opening with—custom software, integration, support, web and mobile, data, and consulting—for organizations that value clarity and uptime.`,
};

export default function ServicesPage() {
  return (
    <div className="pt-28 md:pt-36">
      <section
        aria-labelledby="services-page-heading"
        className="container-editorial pb-16 md:pb-24"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
          Capabilities
        </p>
        <div className="mt-8 max-w-3xl">
          <SplitText
            id="services-page-heading"
            as="h1"
            lines={["What we", "deliver."]}
            className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] tracking-tight text-primary"
            lineClassName="font-serif italic"
          />
        </div>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-secondary">
          Expand any service for scope, timelines, and how we collaborate with
          your team.
        </p>
      </section>

      <section className="container-editorial section-y border-t border-border pt-0">
        <h2 className="sr-only">Service details</h2>
        <ServicesAccordion />
      </section>
    </div>
  );
}
