import { basePath, projects } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-theme sticky top-0 z-30 h-screen overflow-y-auto overflow-x-hidden border-b-2 border-line"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-20 h-[300px] w-[460px] scale-x-[-1] bg-contain bg-right-top bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${basePath}/wave-lines-a.svg)` }}
      />
      <div className="flex min-h-full flex-col justify-center">
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-8 pb-20 md:px-10">
          <SectionHeading index="03" label="Projects & Flagship Cases" compact />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.index}
                className="glow-card rounded-2xl bg-white/[0.04] p-5 shadow-lg backdrop-blur-md"
              >
                <span className="text-xs text-muted">[{project.index}]</span>
                <h3 className="mt-1.5 font-display text-lg leading-tight md:text-xl">
                  {project.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-accent/30 px-2 py-0.5 text-[10px] tracking-wide uppercase text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-2.5 font-display text-sm leading-snug text-foreground/90 italic">
                  {project.result}
                </p>
                <p className="mt-1.5 text-xs leading-snug text-muted">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
