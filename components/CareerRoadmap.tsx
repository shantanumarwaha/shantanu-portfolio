import { careerRoadmap } from "@/lib/content";

export default function CareerRoadmap() {
  return (
    <section id="career-roadmap" className="border-b border-line bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <p className="mb-6 text-xs tracking-[0.2em] text-accent uppercase">
          Career Roadmap
        </p>
        <div className="border-t border-line">
          {careerRoadmap.map((step) => (
            <div
              key={step.index}
              className="grid grid-cols-1 gap-2 border-b border-line py-10 md:grid-cols-12 md:gap-8 md:py-12"
            >
              <div className="text-sm text-muted md:col-span-2">
                [{step.index}]
              </div>
              <div className="md:col-span-3">
                <p className="font-display text-2xl leading-tight md:text-3xl">
                  {step.role}
                </p>
                <p className="mt-2 text-sm text-muted">{step.org}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm tracking-wide text-accent">
                  {step.period}
                </p>
              </div>
              <div className="md:col-span-5">
                <p className="text-base leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
