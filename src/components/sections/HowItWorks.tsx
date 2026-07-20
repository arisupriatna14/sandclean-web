import { Reveal, Eyebrow } from "@/components/ui/Reveal";
import { STEPS } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Clean in three steps
          </h2>
        </Reveal>

        <div className="relative mt-10 grid gap-5 md:grid-cols-3">
          {/* connector, desktop only */}
          <div className="pointer-events-none absolute inset-x-[16%] top-16 hidden h-px bg-gradient-to-r from-brand/40 via-violet/40 to-ember/40 md:block" />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={i * 0.12}>
                <div className="card relative h-full p-7">
                  <div
                    className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ background: `color-mix(in srgb, ${step.accent} 14%, white)` }}
                  >
                    <Icon className="h-7 w-7" style={{ color: step.accent }} strokeWidth={1.6} />
                    <span
                      className="tnum absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full text-[0.62rem] font-bold text-white"
                      style={{ background: step.accent }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-dim">{step.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
