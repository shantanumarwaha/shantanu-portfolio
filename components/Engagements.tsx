"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { basePath, engagements } from "@/lib/content";
import SectionHeading from "./SectionHeading";

type Engagement = (typeof engagements)[number];

function EngagementCard({
  engagement,
  active,
  onSelect,
}: {
  engagement: Engagement;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`glow-card flex flex-col rounded-[22px] border bg-white/[0.04] p-5 text-left shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
        active
          ? "border-accent/60 shadow-[0_0_30px_-6px_rgba(75,156,211,0.5)]"
          : "border-white/10 hover:border-accent/40"
      }`}
    >
      <span className="text-xs text-muted">[{engagement.index}]</span>
      <h3 className="mt-1.5 font-display text-lg leading-tight md:text-xl">
        {engagement.title}
      </h3>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {engagement.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-accent/30 px-2 py-0.5 text-[10px] tracking-wide uppercase text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-2.5 line-clamp-3 text-xs leading-snug text-muted">
        {engagement.situation}
      </p>
      <p className="mt-2.5 font-display text-sm leading-snug text-foreground/90 italic">
        {engagement.outcome}
      </p>
      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-accent">
        {active ? "Hide Full Case" : "View Full Case"}
        <ArrowRight
          className={`h-3.5 w-3.5 transition-transform duration-300 ${active ? "rotate-90" : ""}`}
        />
      </span>
    </button>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="glow-card rounded-xl bg-white/[0.04] p-4 shadow-lg backdrop-blur-md">
      <p className="font-display text-2xl text-foreground">{value}</p>
      <p className="mt-1.5 text-xs font-medium tracking-[0.08em] text-muted uppercase">
        {label}
      </p>
    </div>
  );
}

function ExpandedPanel({ engagement }: { engagement: Engagement }) {
  return (
    <div
      key={engagement.id}
      className="animate-fade-in glow-card mt-6 rounded-[22px] border border-white/10 bg-white/[0.03] p-6 shadow-lg backdrop-blur-md md:p-8"
    >
      <div className="flex items-baseline gap-3">
        <span className="text-xs text-muted">[{engagement.index}]</span>
        <h3 className="font-display text-2xl leading-tight md:text-3xl">
          {engagement.title}
        </h3>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h4 className="text-xs tracking-[0.15em] text-accent uppercase">
            Situation
          </h4>
          <p className="mt-2 text-base leading-relaxed text-foreground/90">
            {engagement.situation}
          </p>

          <h4 className="mt-5 text-xs tracking-[0.15em] text-accent uppercase">
            Our Approach
          </h4>
          <p className="mt-2 text-base leading-relaxed text-foreground/90">
            {engagement.approach}
          </p>
        </div>

        <div className="lg:col-span-7">
          <h4 className="text-xs tracking-[0.15em] text-accent uppercase">
            Impact
          </h4>
          <div className="mt-2 grid grid-cols-3 gap-3">
            {engagement.metrics.map((metric) => (
              <MetricCard
                key={metric.label}
                value={metric.value}
                label={metric.label}
              />
            ))}
          </div>

          <h4 className="mt-5 text-xs tracking-[0.15em] text-accent uppercase">
            Key Capabilities
          </h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {engagement.capabilities.map((capability) => (
              <span
                key={capability}
                className="rounded-full border border-accent/30 px-3 py-1 text-xs tracking-wide text-accent"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Engagements() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = engagements.find((engagement) => engagement.id === activeId) ?? null;

  return (
    <section
      id="engagements"
      className="bg-theme sticky top-0 z-30 h-screen overflow-y-auto overflow-x-hidden border-b-2 border-line"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-20 h-[300px] w-[460px] scale-x-[-1] bg-contain bg-right-top bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${basePath}/wave-lines-a.svg)` }}
      />
      <div className="flex min-h-full flex-col justify-center">
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-8 pb-20 md:px-10">
          <SectionHeading index="03" label="Selected Engagements" compact />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {engagements.map((engagement) => (
              <EngagementCard
                key={engagement.id}
                engagement={engagement}
                active={engagement.id === activeId}
                onSelect={() =>
                  setActiveId((current) =>
                    current === engagement.id ? null : engagement.id,
                  )
                }
              />
            ))}
          </div>

          {active && <ExpandedPanel engagement={active} />}
        </div>
      </div>
    </section>
  );
}
