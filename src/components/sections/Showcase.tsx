import { Reveal, Eyebrow } from "@/components/ui/Reveal";
import { MacWindow } from "@/components/ui/MacWindow";
import { SHOWCASE } from "@/lib/content";

export function Showcase() {
  return (
    <section className="overflow-hidden py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <Eyebrow>A closer look</Eyebrow>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            See it in action
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-dim">
            Every scanner shares the same layout: pick a category, review what it found
            with sizes, then clean. Scroll to browse.
          </p>
        </Reveal>
      </div>

      <div className="scrollbar-none mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 md:px-[max(1.5rem,calc((100vw-72rem)/2))]">
        {SHOWCASE.map((s, i) => (
          <Reveal key={s.src} delay={(i % 4) * 0.05} className="shrink-0 snap-center">
            <figure className="w-[78vw] max-w-[440px] sm:w-[52vw] lg:w-[400px]">
              <MacWindow
                src={s.src}
                alt={`SandClean — ${s.title}`}
                compact
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 52vw, 400px"
              />
              <figcaption className="mt-4 px-1">
                <h3 className="font-display font-bold text-ink">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-dim">{s.description}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
