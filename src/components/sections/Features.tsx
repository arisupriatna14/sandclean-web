"use client";

import { motion } from "framer-motion";
import { Reveal, Eyebrow, EASE } from "@/components/ui/Reveal";
import {
  CLEANING_FEATURES,
  TOTAL_FEATURES,
  UTILITY_FEATURES,
  type Feature,
} from "@/lib/content";

export function Features() {
  return (
    <section id="features" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <Eyebrow>Everything, in one app</Eyebrow>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Everything your Mac needs to stay fast
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-dim">
            {TOTAL_FEATURES} scanners and tools in one native app — no Electron, no
            subscriptions, no telemetry.
          </p>
        </Reveal>

        <FeatureGroup
          label="Cleaning"
          accent="var(--color-accent)"
          features={CLEANING_FEATURES}
        />
        <FeatureGroup
          label="Analysis & Utility"
          accent="var(--color-violet)"
          features={UTILITY_FEATURES}
        />
      </div>
    </section>
  );
}

function FeatureGroup({
  label,
  accent,
  features,
}: {
  label: string;
  accent: string;
  features: Feature[];
}) {
  return (
    <>
      <Reveal className="mb-6 mt-14 flex items-center gap-3">
        <span
          className="text-xs font-extrabold uppercase tracking-widest"
          style={{ color: accent }}
        >
          {label}
        </span>
        <span className="hairline h-px flex-1 border-t" />
        <span className="text-xs font-bold text-ink-dim">{features.length} features</span>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={(i % 4) * 0.06} className={f.wide ? "sm:col-span-2" : ""}>
            <FeatureCard feature={f} />
          </Reveal>
        ))}
      </div>
    </>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <article
      className="card h-full p-7 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[var(--card-shadow-hi)]"
      style={{
        background: `linear-gradient(160deg, color-mix(in srgb, ${feature.accent} 9%, white) 0%, white 60%)`,
        borderColor: `color-mix(in srgb, ${feature.accent} 22%, var(--stroke))`,
      }}
    >
      <div className="flex h-full flex-col">
        <div
          className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl"
          style={{ background: `color-mix(in srgb, ${feature.accent} 14%, white)` }}
        >
          <Icon className="h-6 w-6" style={{ color: feature.accent }} strokeWidth={1.8} />
        </div>
        <h3 className="font-display text-lg font-bold leading-snug text-ink">{feature.title}</h3>
        <p className="mt-2 max-w-md leading-relaxed text-ink-dim">{feature.description}</p>
        {feature.wide && (
          <div className="mt-auto pt-6">
            <FeatureAccent title={feature.title} accent={feature.accent} />
          </div>
        )}
      </div>
    </article>
  );
}

/* Small on-brand visuals for the wide cards, nodding to the real app screens. */
function FeatureAccent({ title, accent }: { title: string; accent: string }) {
  if (title === "System Cache") return <FreedBars accent={accent} />;
  if (title === "Xcode Cleaner") return <SegmentBar accent={accent} />;
  if (title === "Disk Visualizer") return <MiniTreemap accent={accent} />;
  return null;
}

/* Cache reclaimed per scan, like the dashboard's history chart. */
function FreedBars({ accent }: { accent: string }) {
  return (
    <div className="flex items-end gap-4">
      <div>
        <p className="text-[0.62rem] font-bold uppercase tracking-widest text-ink-dim">
          Reclaimed
        </p>
        <p className="tnum text-3xl font-bold" style={{ color: accent }}>
          3.38 <span className="text-base">GB</span>
        </p>
      </div>
      <div className="flex items-end gap-1 pb-1.5">
        {[12, 26, 18, 34, 14, 30, 22].map((h, i) => (
          <motion.span
            key={i}
            className="w-1.5 rounded-full"
            style={{ background: accent, opacity: 0.35 + i * 0.09 }}
            initial={{ height: 0 }}
            whileInView={{ height: h }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
          />
        ))}
      </div>
    </div>
  );
}

/* The split of a typical Xcode clean-up. */
function SegmentBar({ accent }: { accent: string }) {
  const parts = [
    { label: "DerivedData", pct: 48 },
    { label: "Simulators", pct: 32 },
    { label: "Archives", pct: 20 },
  ];
  return (
    <div>
      <div className="flex h-3 w-full gap-1 overflow-hidden">
        {parts.map((p, i) => (
          <motion.span
            key={p.label}
            className="rounded-full"
            style={{ background: `color-mix(in srgb, ${accent} ${85 - i * 25}%, white)` }}
            initial={{ width: 0 }}
            whileInView={{ width: `${p.pct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
          />
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
        {parts.map((p, i) => (
          <span
            key={p.label}
            className="flex items-center gap-1.5 text-[0.68rem] font-bold text-ink-dim"
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: `color-mix(in srgb, ${accent} ${85 - i * 25}%, white)` }}
            />
            {p.label}
          </span>
        ))}
      </div>
    </div>
  );
}

/* A tiny treemap, like the Disk Visualizer view. */
function MiniTreemap({ accent }: { accent: string }) {
  const tiles = [
    { w: "46%", h: 56, o: 90 },
    { w: "26%", h: 56, o: 62 },
    { w: "28%", h: 56, o: 38 },
    { w: "32%", h: 30, o: 50 },
    { w: "22%", h: 30, o: 72 },
    { w: "46%", h: 30, o: 28 },
  ];
  return (
    <div className="flex w-full flex-wrap gap-1">
      {tiles.map((t, i) => (
        <motion.span
          key={i}
          className="rounded-md"
          style={{
            width: `calc(${t.w} - 4px)`,
            height: t.h,
            background: `color-mix(in srgb, ${accent} ${t.o}%, white)`,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: i * 0.06, ease: EASE }}
        />
      ))}
    </div>
  );
}
