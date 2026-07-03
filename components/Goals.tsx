import { goals } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function Goals() {
  return (
    <section
      id="goals"
      className="border-b-2 border-line-panel bg-panel text-panel-foreground"
    >
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <SectionHeading index="03" label={goals.label} tone="light" />
        <h2 className="max-w-3xl font-display text-4xl leading-[1.1] font-normal text-balance sm:text-5xl md:text-6xl">
          {goals.headline}
        </h2>

        <div className="mt-16 grid gap-12 border-t-2 border-line-panel pt-12 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="text-xs tracking-[0.15em] text-muted-panel uppercase">
              {goals.shortTerm.title}
            </h3>
            <ul className="mt-6 space-y-5">
              {goals.shortTerm.items.map((item, i) => (
                <li key={i} className="flex gap-4 text-lg leading-relaxed">
                  <span className="text-accent">&mdash;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.15em] text-muted-panel uppercase">
              {goals.longTerm.title}
            </h3>
            <ul className="mt-6 space-y-5">
              {goals.longTerm.items.map((item, i) => (
                <li key={i} className="flex gap-4 text-lg leading-relaxed">
                  <span className="text-accent">&mdash;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
