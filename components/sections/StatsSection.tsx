import { AnimatedStat } from "@/components/ui/AnimatedStat";
import { COMPANY_STATS } from "@/lib/constants";

export function StatsSection() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="section-y border-t border-border"
    >
      <h2 id="stats-heading" className="sr-only">
        Key metrics
      </h2>
      <div className="container-editorial">
        <div className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {COMPANY_STATS.map((s) => (
            <AnimatedStat key={s.value + s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
