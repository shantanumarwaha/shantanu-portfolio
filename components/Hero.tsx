import { profile } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="border-b border-line bg-background">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:px-10 md:pt-28 md:pb-32">
        <p className="mb-6 text-xs tracking-[0.2em] text-accent uppercase">
          {profile.tagline}
        </p>
        <h1 className="max-w-4xl font-display text-4xl leading-[1.1] font-normal text-balance sm:text-5xl md:text-6xl">
          {profile.headline}
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {profile.subhead}
        </p>
        <a
          href="#contact"
          className="group mt-12 inline-flex items-center gap-3 border-b border-accent pb-1 text-sm tracking-wide text-foreground"
        >
          Let&apos;s talk
          <span className="transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </a>
      </div>
    </section>
  );
}
