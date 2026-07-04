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
import { executiveSummary } from "@/lib/content";
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
    <div className="group rounded-[22px] border border-white/10 bg-white/[0.04] p-8 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 sm:p-9">
      <p className="font-display text-[56px] leading-none text-foreground sm:text-[64px]">
        {value}
      </p>
      <p className="mt-5 text-xs font-medium tracking-[0.15em] text-foreground/80 uppercase">
        {label}
      </p>
      <p className="mt-1.5 text-sm text-muted">{description}</p>
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
    <div className="group flex min-h-[120px] flex-col justify-center gap-4 rounded-[22px] border border-white/10 bg-white/[0.04] p-7 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_0_32px_rgba(75,156,211,0.18)]">
      <Icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
      <p className="text-base font-medium text-foreground/90">{name}</p>
    </div>
  );
}

export default function ExecutiveSummary() {
  return (
    <section
      id="executive-summary"
      className="border-b-2 border-line bg-background"
    >
      <div className="mx-auto max-w-[1480px] px-6 py-28 md:px-12 md:py-40">
        <SectionHeading index="01" label={executiveSummary.label} />

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="flex lg:col-span-5">
            <div className="max-w-[600px] space-y-7 self-center">
              {executiveSummary.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-display text-2xl leading-[1.65] text-foreground/90"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-[1480px] px-6 py-24 md:px-12 md:py-28">
          <h3 className="text-xs tracking-[0.2em] text-muted uppercase">
            {executiveSummary.industriesLabel}
          </h3>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {executiveSummary.industries.map((industry) => (
              <IndustryCard key={industry} name={industry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
