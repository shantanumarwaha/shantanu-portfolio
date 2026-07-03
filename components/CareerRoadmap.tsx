"use client";

import { careerRoadmap } from "@/lib/content";
import { useInView } from "@/lib/useInView";
import SectionHeading from "./SectionHeading";

type Step = (typeof careerRoadmap)[number];

function RoadmapContent({ step, align }: { step: Step; align: "left" | "right" }) {
  return (
    <div className={align === "right" ? "md:ml-auto md:max-w-md" : "md:max-w-md"}>
      <p className="text-xs tracking-[0.15em] text-accent uppercase">
        {step.period}
      </p>
      <h3 className="mt-3 font-display text-2xl leading-tight md:text-3xl">
        {step.role}
      </h3>
      <p className="mt-1 text-sm text-muted">{step.org}</p>
      <p className="mt-4 text-base leading-relaxed text-muted">
        {step.description}
      </p>
    </div>
  );
}

function RoadmapItem({
  step,
  isLeft,
  isLast,
}: {
  step: Step;
  isLeft: boolean;
  isLast: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div className="grid grid-cols-[auto_1fr] gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-10">
      <div className="col-start-1 flex flex-col items-center md:col-start-2">
        <span className="h-3 w-3 shrink-0 rounded-full border-2 border-accent bg-background" />
        {!isLast && <span className="mt-2 w-px flex-1 bg-line" />}
      </div>
      <div
        ref={ref}
        className={`col-start-2 pb-16 transition-all duration-700 ease-out md:pb-24 ${
          isLeft ? "md:col-start-1 md:text-right" : "md:col-start-3"
        } ${inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
      >
        <RoadmapContent step={step} align={isLeft ? "right" : "left"} />
      </div>
    </div>
  );
}

export default function CareerRoadmap() {
  return (
    <section id="career-roadmap" className="border-b-2 border-line bg-background">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <SectionHeading index="02" label="Career Roadmap" />
        {careerRoadmap.map((step, i) => (
          <RoadmapItem
            key={step.index}
            step={step}
            isLeft={i % 2 === 0}
            isLast={i === careerRoadmap.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
