import { profile } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function Footer() {
  return (
    <footer id="contact" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <SectionHeading index="05" label="Contact" />
        <h2 className="max-w-2xl font-display text-4xl leading-[1.1] font-normal text-balance sm:text-5xl">
          Let&apos;s talk about what&apos;s next.
        </h2>

        <div className="mt-12 flex flex-col gap-6 border-t-2 border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 text-sm text-muted sm:flex-row sm:gap-8">
            <a
              href={`mailto:${profile.email}`}
              className="transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={profile.resumeUrl}
              className="transition-colors hover:text-accent"
            >
              Resume
            </a>
          </div>
          <p className="text-sm text-muted">{profile.location}</p>
        </div>

        <div className="mt-16 flex flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{profile.workAuthorization}</p>
          <p>
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
