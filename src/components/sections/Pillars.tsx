import { Reveal, Eyebrow } from "@/components/ui/Reveal";
import { PILLARS } from "@/lib/content";

export function Pillars() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>Why SandClean</Eyebrow>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="card h-full p-7">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-hi">
                    <Icon className="h-6 w-6 text-accent" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink">{pillar.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-dim">{pillar.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
