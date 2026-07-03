import { executiveSummary } from "@/lib/content";
import SectionHeading from "./SectionHeading";

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-line bg-foreground/[0.04] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset] md:p-7">
      <p className="font-display text-4xl leading-none text-foreground md:text-5xl">
        {value}
      </p>
      <p className="mt-3 text-sm leading-snug text-muted">{label}</p>
    </div>
  );
}

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-4 w-4",
};

const industryIcons: Record<string, React.ReactNode> = {
  FinTech: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8M9.5 10a2.5 2 0 0 1 2.5-2c1.4 0 2.5.9 2.5 2s-1.1 2-2.5 2-2.5.9-2.5 2 1.1 2 2.5 2 2.5-.9 2.5-2" />
    </svg>
  ),
  "Artificial Intelligence": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z" />
    </svg>
  ),
  Retail: (
    <svg {...iconProps}>
      <path d="M6 8h12l-1 12H7L6 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  ),
  Healthcare: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 9v6M9 12h6" />
    </svg>
  ),
  "D2C / Consumer": (
    <svg {...iconProps}>
      <circle cx="12" cy="8.2" r="3.2" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
    </svg>
  ),
  SaaS: (
    <svg {...iconProps}>
      <path d="M7 18h10a3.5 3.5 0 0 0 0-7 5 5 0 0 0-9.6-1.6A4 4 0 0 0 7 18z" />
    </svg>
  ),
  "Industrials / Chemicals": (
    <svg {...iconProps}>
      <path d="M9 3h6M10 3v5l-4.5 8a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 8V3" />
    </svg>
  ),
};

function IndustryPill({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-foreground/[0.03] px-4 py-2 text-sm text-foreground/90">
      <span className="text-accent">{industryIcons[name]}</span>
      {name}
    </span>
  );
}

export default function ExecutiveSummary() {
  return (
    <section
      id="executive-summary"
      className="border-b-2 border-line bg-background"
    >
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <SectionHeading index="01" label={executiveSummary.label} />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-5">
            {executiveSummary.paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-display text-xl leading-relaxed text-foreground/90 md:text-2xl"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {executiveSummary.metrics.map((metric) => (
                <MetricCard
                  key={metric.label}
                  value={metric.value}
                  label={metric.label}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-line pt-12 md:mt-20 md:pt-16">
          <h3 className="text-xs tracking-[0.2em] text-muted uppercase">
            Industries Worked Across
          </h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {executiveSummary.industries.map((industry) => (
              <IndustryPill key={industry} name={industry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
