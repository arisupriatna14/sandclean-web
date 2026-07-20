import { Reveal, Eyebrow } from "@/components/ui/Reveal";
import { PLATFORM } from "@/lib/content";

export function Platform() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <Eyebrow>Built for macOS</Eyebrow>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            More than a window on your desktop
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-dim">
            SandClean is Swift and SwiftUI end to end — MVVM with actor-based scanners
            and structured concurrency — and it reaches the rest of the system the way a
            native app should.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PLATFORM.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06}>
              <div className="card h-full p-6">
                <h3 className="font-display font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
