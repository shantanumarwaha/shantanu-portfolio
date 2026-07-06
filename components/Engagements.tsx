"use client";

import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
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
      className={`glow-card flex flex-col rounded-[22px] border bg-white/[0.04] p-6 text-left shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
        active
          ? "border-accent/60 shadow-[0_0_30px_-6px_rgba(75,156,211,0.5)]"
          : "border-white/10 hover:border-accent/40"
      }`}
    >
      <h3 className="font-display text-xl leading-tight md:text-2xl">
        {engagement.title}
      </h3>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {engagement.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-accent/30 px-2.5 py-1 text-xs tracking-wide uppercase text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
        {engagement.situation}
      </p>
      <p className="mt-3 font-display text-base leading-snug text-foreground/90 italic">
        {engagement.outcome}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium tracking-wide text-accent">
        View Full Case
        <ArrowRight className="h-4 w-4" />
      </span>
    </button>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="glow-card rounded-xl bg-white/[0.04] p-4 shadow-lg backdrop-blur-md">
      <p className="font-display text-3xl text-foreground">{value}</p>
      <p className="mt-1.5 text-sm font-medium tracking-[0.08em] text-muted uppercase">
        {label}
      </p>
    </div>
  );
}

function EngagementModal({
  engagement,
  onClose,
}: {
  engagement: Engagement;
  onClose: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="animate-fade-in fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm md:p-8"
      onClick={onClose}
    >
      <div
        key={engagement.id}
        onClick={(event) => event.stopPropagation()}
        className="animate-modal-in glow-card relative max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-[24px] border border-white/10 bg-[#0a0a09] p-6 shadow-2xl backdrop-blur-md md:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close case"
          className="absolute top-4 right-4 rounded-full border border-white/10 bg-white/[0.04] p-2 text-muted transition-colors hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="font-display text-3xl leading-tight pr-10 md:text-4xl">
          {engagement.title}
        </h3>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h4 className="text-sm tracking-[0.15em] text-accent uppercase">
              Situation
            </h4>
            <p className="mt-2.5 text-lg leading-relaxed text-foreground/90">
              {engagement.situation}
            </p>

            <h4 className="mt-6 text-sm tracking-[0.15em] text-accent uppercase">
              Our Approach
            </h4>
            <p className="mt-2.5 text-lg leading-relaxed text-foreground/90">
              {engagement.approach}
            </p>
          </div>

          <div className="lg:col-span-7">
            <h4 className="text-sm tracking-[0.15em] text-accent uppercase">
              Impact
            </h4>
            <div className="mt-2.5 grid grid-cols-3 gap-3">
              {engagement.metrics.map((metric) => (
                <MetricCard
                  key={metric.label}
                  value={metric.value}
                  label={metric.label}
                />
              ))}
            </div>

            <h4 className="mt-6 text-sm tracking-[0.15em] text-accent uppercase">
              Key Capabilities
            </h4>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {engagement.capabilities.map((capability) => (
                <span
                  key={capability}
                  className="rounded-full border border-accent/30 px-3 py-1.5 text-sm tracking-wide text-accent"
                >
                  {capability}
                </span>
              ))}
            </div>
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
          <SectionHeading label="Selected Engagements" compact />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {engagements.map((engagement) => (
              <EngagementCard
                key={engagement.id}
                engagement={engagement}
                active={engagement.id === activeId}
                onSelect={() => setActiveId(engagement.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {active && (
        <EngagementModal
          engagement={active}
          onClose={() => setActiveId(null)}
        />
      )}
    </section>
  );
}
