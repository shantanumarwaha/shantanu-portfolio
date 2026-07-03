import { projects } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="border-b-2 border-line bg-background">
      <div className="mx-auto max-w-6xl px-6 pt-28 md:px-10 md:pt-36">
        <SectionHeading index="04" label="Projects & Flagship Cases" />
      </div>

      <div>
        {projects.map((project, i) => {
          const dark = i % 2 === 0;
          return (
            <div
              key={project.index}
              className={`border-t-2 border-line ${
                dark ? "bg-background text-foreground" : "bg-panel text-panel-foreground"
              }`}
            >
              <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-14 md:grid-cols-12 md:gap-10 md:px-10 md:py-20">
                <div className="md:col-span-5">
                  <span
                    className={`text-sm ${dark ? "text-muted" : "text-muted-panel"}`}
                  >
                    [{project.index}]
                  </span>
                  <h3 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                    {project.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-current/20 px-3 py-1 text-xs tracking-wide uppercase text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-7">
                  <p
                    className={`font-display text-xl italic ${
                      dark ? "text-foreground/90" : "text-panel-foreground/90"
                    }`}
                  >
                    {project.result}
                  </p>
                  <p
                    className={`mt-4 text-base leading-relaxed ${
                      dark ? "text-muted" : "text-muted-panel"
                    }`}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
