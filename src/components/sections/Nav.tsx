"use client";

import { useEffect, useState } from "react";
import { Logo, Wordmark } from "@/components/ui/Logo";
import { DownloadButton } from "@/components/ui/DownloadButton";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#privacy", label: "Privacy" },
  { href: "#faq", label: "FAQ" },
];

/* Floating pill navbar — transparent at the top, morphs to glass on scroll. */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between gap-4 rounded-full px-3 py-2 transition-all duration-300 ${
          scrolled ? "glass shadow-[0_8px_30px_rgba(15,30,51,0.10)]" : "bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 pl-1">
          <Logo size={30} />
          <Wordmark className="text-lg" />
        </a>

        <div className="hidden items-center gap-7 text-sm font-bold text-ink-dim md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>

        <DownloadButton label="Download" size="sm" />
      </nav>
    </header>
  );
}
