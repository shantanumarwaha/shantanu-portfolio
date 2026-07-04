"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/content";

export default function Nav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-line bg-background/95 backdrop-blur transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          className="font-display text-lg tracking-wide text-foreground"
        >
          {profile.name}
        </a>
        <nav className="flex gap-5 overflow-x-auto text-[0.65rem] tracking-[0.15em] whitespace-nowrap text-muted uppercase md:gap-8 md:text-xs">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
