"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { basePath, careerRoadmap } from "@/lib/content";
import SectionHeading from "./SectionHeading";

type Step = (typeof careerRoadmap)[number];

function CompanyLogo({
  logo,
  company,
  active,
  size = "md",
}: {
  logo: string;
  company: string;
  active: boolean;
  size?: "md" | "lg";
}) {
  const dims = size === "lg" ? "h-20 w-20 p-3.5" : "h-16 w-16 p-3";
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-2xl bg-white/95 shadow-lg transition-all duration-300 ${dims} ${
        active ? "ring-2 ring-accent/70" : "ring-1 ring-white/10"
      }`}
    >
      <img
        src={`${basePath}/logos/${logo}`}
        alt={`${company} logo`}
        className="h-full w-full object-contain"
      />
    </div>
  );
}

function MilestoneButton({
  step,
  active,
  onSelect,
}: {
  step: Step;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`glow-card flex w-full flex-col items-center gap-3 rounded-[18px] bg-white/[0.03] px-5 py-6 text-center transition-all duration-300 ${
        active
          ? "border-accent/60 shadow-[0_0_30px_-6px_rgba(75,156,211,0.5)]"
          : "border-transparent opacity-70 shadow-none hover:opacity-100"
      }`}
    >
      <CompanyLogo logo={step.logo} company={step.company} active={active} />
      <div>
        <p
          className={`font-display text-xl ${active ? "text-foreground" : "text-foreground/80"}`}
        >
          {step.company}
        </p>
        <p className="mt-1 text-xs text-muted">{step.role}</p>
        <p className="mt-1 text-xs tracking-wide text-accent uppercase">
          {step.period}
        </p>
      </div>
    </button>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="glow-card rounded-2xl bg-white/[0.04] p-6 shadow-lg backdrop-blur-md">
      <p className="font-display text-3xl text-foreground sm:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-xs font-medium tracking-[0.1em] text-muted uppercase">
        {label}
      </p>
    </div>
  );
}

function DetailPanel({ step }: { step: Step }) {
  return (
    <div key={step.id} className="animate-fade-in mt-16 md:mt-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <CompanyLogo
          logo={step.logo}
          company={step.company}
          active
          size="lg"
        />
        <div>
          <h3 className="font-display text-4xl leading-tight md:text-5xl">
            {step.company}
          </h3>
          <p className="mt-2 text-base text-foreground/80">
            {step.role} &middot;{" "}
            <span className="text-accent">{step.period}</span>
          </p>
          <p className="mt-2 text-sm text-muted">{step.companyDescription}</p>
        </div>
      </div>

      <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h4 className="text-xs tracking-[0.2em] text-accent uppercase">
            Role Overview
          </h4>
          <p className="mt-4 text-lg leading-relaxed text-foreground/90">
            {step.roleOverview}
          </p>

          <h4 className="mt-12 text-xs tracking-[0.2em] text-accent uppercase">
            Responsibilities
          </h4>
          <ul className="mt-4 space-y-3">
            {step.responsibilities.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  strokeWidth={1.75}
                />
                <span className="text-sm leading-relaxed text-muted">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <h4 className="mt-12 text-xs tracking-[0.2em] text-accent uppercase">
            Skills Developed
          </h4>
          <div className="mt-4 flex flex-wrap gap-2">
            {step.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-accent/30 px-3 py-1 text-xs tracking-wide text-accent uppercase"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <h4 className="text-xs tracking-[0.2em] text-accent uppercase">
            Key Impact
          </h4>
          <div className="mt-4 grid grid-cols-2 gap-5">
            {step.metrics.map((metric) => (
              <MetricCard
                key={metric.label}
                value={metric.value}
                label={metric.label}
              />
            ))}
          </div>

          <div className="mt-10 border-l-2 border-accent/60 pl-6">
            <p className="font-display text-xl leading-relaxed text-foreground/90 italic">
              &ldquo;{step.takeaway}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CareerRoadmap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const progress =
    careerRoadmap.length > 1
      ? (activeIndex / (careerRoadmap.length - 1)) * 100
      : 0;

  return (
    <section
      id="career-roadmap"
      className="bg-theme relative overflow-hidden border-b-2 border-line"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-24 h-[380px] w-[520px] rotate-180 bg-contain bg-left-top bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${basePath}/wave-lines-b.svg)` }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <SectionHeading index="02" label="Career Roadmap" />

        <div>
          <div className="mb-8 hidden h-px bg-line sm:block">
            <div
              className="h-px bg-accent transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {careerRoadmap.map((step, i) => (
              <MilestoneButton
                key={step.id}
                step={step}
                active={i === activeIndex}
                onSelect={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>

        <DetailPanel step={careerRoadmap[activeIndex]} />
      </div>
    </section>
  );
}
