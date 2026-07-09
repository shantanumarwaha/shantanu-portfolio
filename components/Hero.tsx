import { profile } from "@/lib/content";
import JourneyGlobe from "./JourneyGlobe";

export default function Hero() {
  return (
    <section
      id="top"
      className="sticky top-0 z-0 flex h-screen min-h-screen items-center overflow-hidden bg-background px-6 md:px-16"
    >
      <JourneyGlobe />

      <div className="animate-fade-in-up glow-card relative z-10 flex w-full max-w-xl flex-col items-start rounded-3xl border border-white/[0.14] bg-gradient-to-b from-white/[0.07] to-white/[0.02] px-8 py-14 text-left shadow-2xl backdrop-blur-md sm:px-10 sm:py-16">
        <h1 className="font-display text-4xl font-normal text-foreground sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>

        <p className="font-cover mt-6 text-lg tracking-wide text-muted uppercase sm:text-xl">
          {profile.subtitle}
        </p>

        <p className="font-cover mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-base tracking-wide text-muted uppercase sm:text-lg">
          {profile.expertise.split(" • ").map((item, i, arr) => (
            <span key={item} className="flex items-center gap-3">
              {item}
              {i < arr.length - 1 && (
                <span className="text-carolina-blue">&bull;</span>
              )}
            </span>
          ))}
        </p>

        <p className="font-cover mt-9 text-lg leading-relaxed text-foreground/80 sm:text-xl">
          {profile.statement}
        </p>

        <a
          href="#executive-summary"
          className="font-cover mt-14 flex flex-col items-start gap-2 text-sm tracking-[0.2em] text-carolina-blue uppercase transition-opacity hover:opacity-70"
        >
          Explore Portfolio
          <span aria-hidden>&darr;</span>
        </a>
      </div>
    </section>
  );
}
