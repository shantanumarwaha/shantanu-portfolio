import { profile } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex h-screen min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-black"
    >
      <div className="animate-fade-in-up mx-auto flex max-w-3xl flex-col items-center">
        <h1 className="font-sans text-5xl font-semibold tracking-tight text-black sm:text-6xl md:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-6 text-lg text-neutral-600 sm:text-xl">
          {profile.subtitle}
        </p>

        <p className="mt-4 text-sm tracking-wide text-neutral-500 sm:text-base">
          {profile.expertise}
        </p>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-700 sm:text-lg">
          {profile.statement}
        </p>

        <a
          href="#executive-summary"
          className="mt-14 inline-flex items-center gap-2 text-sm tracking-wide text-carolina-blue transition-opacity hover:opacity-70"
        >
          Explore Portfolio
          <span aria-hidden>↓</span>
        </a>
      </div>
    </section>
  );
}
