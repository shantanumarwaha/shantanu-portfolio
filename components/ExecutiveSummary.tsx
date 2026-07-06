import {
  Cloud,
  FlaskConical,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { basePath, executiveSummary } from "@/lib/content";
import SectionHeading from "./SectionHeading";

function MetricCard({
  value,
  label,
  description,
}: {
  value: string;
  label: string;
  description: string;
}) {
  return (
    <div className="glow-card rounded-[22px] bg-white/[0.04] p-5 shadow-lg backdrop-blur-md transition-transform duration-300 hover:-translate-y-1.5 sm:p-6">
      <p className="font-display text-[38px] leading-none break-words text-foreground sm:text-[44px]">
        {value}
      </p>
      <p className="mt-3 text-xs font-medium tracking-[0.15em] break-words text-foreground/80 uppercase">
        {label}
      </p>
      <p className="mt-1 text-sm text-muted">{description}</p>
    </div>
  );
}

const industryIcons: Record<string, LucideIcon> = {
  FinTech: Landmark,
  "Artificial Intelligence": Sparkles,
  Retail: ShoppingBag,
  Healthcare: HeartPulse,
  "D2C / Consumer": Users,
  SaaS: Cloud,
  "Industrials / Chemicals": FlaskConical,
};

function IndustryCard({ name }: { name: string }) {
  const Icon = industryIcons[name];
  return (
    <div className="glow-card flex min-h-[92px] w-full flex-col items-center justify-center gap-2.5 rounded-2xl bg-white/[0.04] p-5 text-center shadow-lg backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)]">
      <Icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
      <p className="text-sm font-medium text-foreground/90">{name}</p>
    </div>
  );
}

export default function ExecutiveSummary() {
  return (
    <section
      id="executive-summary"
      className="bg-theme sticky top-0 z-10 flex min-h-screen flex-col justify-center overflow-hidden border-b-2 border-line"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -bottom-16 h-[420px] w-[560px] bg-contain bg-right-bottom bg-no-repeat opacity-70"
        style={{ backgroundImage: `url(${basePath}/wave-lines-a.svg)` }}
      />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
        <SectionHeading label={executiveSummary.label} compact />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="flex lg:col-span-5">
            <div className="max-w-[600px] space-y-4 self-center">
              {executiveSummary.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-display text-lg leading-[1.5] text-foreground/90 sm:text-xl"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {executiveSummary.metrics.map((metric) => (
                <MetricCard
                  key={metric.label}
                  value={metric.value}
                  label={metric.label}
                  description={metric.description}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-12">
          <h3 className="text-center text-xs tracking-[0.2em] text-muted uppercase">
            {executiveSummary.industriesLabel}
          </h3>
          <div className="mt-5 flex flex-wrap justify-center gap-4">
            {executiveSummary.industries.map((industry) => (
              <IndustryCard key={industry} name={industry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
