import Link from "next/link";
import { navLinks, profile } from "@/lib/content";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="#top"
          className="font-display text-lg tracking-wide text-foreground"
        >
          {profile.name}
        </Link>
        <nav className="flex gap-5 overflow-x-auto text-[0.65rem] tracking-[0.15em] whitespace-nowrap text-muted uppercase md:gap-8 md:text-xs">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
