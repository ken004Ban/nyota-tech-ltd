import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { SplitText } from "@/components/ui/SplitText";

export function ServicesSection() {
  return (
    <section
      aria-labelledby="services-heading"
      className="section-y border-t border-border"
    >
      <div className="container-editorial">
        <SplitText
          id="services-heading"
          as="h2"
          lines={["What we", "build for you."]}
          className="max-w-[14ch] text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-tight text-primary"
          lineClassName="font-serif italic"
        />

        <ul className="mt-16 divide-y divide-border border-y border-border">
          {SERVICES.map((s) => (
            <li key={s.id}>
              <Link
                href="/services"
                className="group relative block transition-colors"
                data-cursor-hover
              >
                <div className="absolute inset-x-0 top-0 h-px scale-x-0 bg-border transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex flex-col gap-4 px-2 py-8 transition-colors group-hover:bg-surface md:flex-row md:items-start md:gap-10 md:px-4">
                  <span className="shrink-0 font-mono text-[13px] text-secondary">
                    {s.number}
                  </span>
                  <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div className="md:max-w-[40%]">
                      <h3 className="font-serif text-[28px] leading-snug text-primary">
                        {s.title}
                      </h3>
                    </div>
                    <p className="max-w-xl text-sm leading-relaxed text-secondary opacity-100 transition-opacity duration-300 md:pt-1 md:opacity-0 md:group-hover:opacity-100">
                      {s.short}
                    </p>
                    <span
                      className="font-sans text-lg text-accent transition-transform duration-300 group-hover:translate-x-1 md:ml-0"
                      aria-hidden
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <MarqueeStrip />
        </div>
      </div>
    </section>
  );
}
