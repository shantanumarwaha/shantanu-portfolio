import { basePath, profile } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-screen min-h-screen items-center justify-center overflow-hidden bg-background bg-cover bg-center px-6 text-center"
      style={{ backgroundImage: `url(${basePath}/hero-bg.svg)` }}
    >
      <div className="animate-fade-in-up relative mx-auto flex w-full max-w-2xl flex-col items-center rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-16 shadow-2xl backdrop-blur-xl sm:px-14 sm:py-20">
        <h1 className="font-display text-4xl font-normal text-foreground sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>

        <p className="font-cover mt-6 text-lg tracking-wide text-muted uppercase sm:text-xl">
          {profile.subtitle}
        </p>

        <p className="font-cover mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-base tracking-wide text-muted uppercase sm:text-lg">
          {profile.expertise.split(" • ").map((item, i, arr) => (
            <span key={item} className="flex items-center gap-3">
              {item}
              {i < arr.length - 1 && (
                <span className="text-carolina-blue">&bull;</span>
              )}
            </span>
          ))}
        </p>

        <p className="font-cover mt-9 max-w-xl text-lg leading-relaxed text-foreground/80 sm:text-xl">
          {profile.statement}
        </p>

        <a
          href="#executive-summary"
          className="font-cover mt-14 flex flex-col items-center gap-2 text-sm tracking-[0.2em] text-carolina-blue uppercase transition-opacity hover:opacity-70"
        >
          Explore Portfolio
          <span aria-hidden>&darr;</span>
        </a>
      </div>
    </section>
  );
}
