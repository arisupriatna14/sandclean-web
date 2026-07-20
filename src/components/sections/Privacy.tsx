import Link from "next/link";
import { Reveal, Eyebrow } from "@/components/ui/Reveal";
import { PRIVACY_POINTS } from "@/lib/content";

export function Privacy() {
  return (
    <section id="privacy" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="card grid gap-10 rounded-[32px] p-8 sm:p-14 md:grid-cols-2 md:items-center">
          <Reveal>
            <Eyebrow>Safe & private</Eyebrow>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Your disk is scanned on your Mac — and nowhere else.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-dim">
              There is no SandClean server. The app reads file metadata locally to work
              out what is safe to remove, and what it removes lands in the Trash so you
              can always change your mind.
            </p>
            <Link
              href="/privacy-policy"
              className="mt-5 inline-block text-sm font-extrabold text-accent transition-colors hover:text-accent-hi"
            >
              Read the full Privacy Policy →
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="grid gap-3">
              {PRIVACY_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 rounded-2xl bg-surface-hi px-4 py-3.5"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                    ✓
                  </span>
                  <span className="font-bold text-ink">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
