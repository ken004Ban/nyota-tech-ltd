import type { Metadata } from "next";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home",
  description: `${COMPANY.legalName} (${COMPANY.est}) is building a practice around reliable digital systems—now accepting early engagements while client work moves through the pipeline.`,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}
