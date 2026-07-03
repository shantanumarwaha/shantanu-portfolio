import { executiveSummary } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function ExecutiveSummary() {
  return (
    <section
      id="executive-summary"
      className="border-b-2 border-line bg-background"
    >
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <SectionHeading index="01" label={executiveSummary.label} />
        <div className="max-w-3xl space-y-6">
          {executiveSummary.paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-display text-xl leading-relaxed text-foreground/90 md:text-2xl"
            >
              {p}
            </p>
          ))}
        </div>
      </div>

      <div className="border-t-2 border-line bg-panel text-panel-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-14 sm:grid-cols-3 sm:px-10 sm:py-16 lg:grid-cols-5">
          {executiveSummary.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl leading-none lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-4 text-sm text-muted-panel">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
