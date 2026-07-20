"use client";

import { motion } from "framer-motion";
import { MacWindow } from "@/components/ui/MacWindow";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { EASE } from "@/components/ui/Reveal";
import { APP_VERSION, MIN_MACOS } from "@/lib/config";
import { TOTAL_FEATURES } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-20 pt-32 md:pt-40">
      {/* signature background: blueprint grid, a scanning sweep, and a bloom */}
      <div className="blueprint-grid pointer-events-none absolute inset-0" />
      <SweepBackdrop />
      <div className="brand-glow pointer-events-none absolute -right-40 -top-24 h-[560px] w-[560px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-extrabold text-ink"
          >
            <span className="animate-softpulse h-2 w-2 rounded-full bg-ember" />
            {MIN_MACOS} · v{APP_VERSION}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06, ease: EASE }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Reclaim your
            <br />
            <span className="text-accent">Mac&apos;s storage.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14, ease: EASE }}
            className="mt-6 max-w-md text-lg leading-relaxed text-ink-dim"
          >
            A native macOS cleaner that finds caches, Xcode artifacts, large files,
            duplicates, and dev tool junk — then removes them safely. Everything
            moves to the Trash, never straight to nowhere.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <DownloadButton />
            <a
              href="#features"
              className="rounded-full border border-[var(--stroke-strong)] bg-surface px-6 py-3.5 text-sm font-extrabold text-ink transition-all hover:scale-105 hover:border-accent hover:text-accent active:scale-95"
            >
              See all {TOTAL_FEATURES} tools
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-xs font-bold uppercase tracking-widest text-ink-dim"
          >
            Free · No account · Full Disk Access recommended
          </motion.p>
        </div>

        {/* App window */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="relative"
        >
          <MacWindow
            src="/screenshot.png"
            alt="SandClean dashboard showing storage usage and scanner categories"
            title="SandClean"
            priority
            sizes="(max-width: 768px) 90vw, 45vw"
          />
          <div className="brand-glow pointer-events-none absolute -bottom-10 left-1/2 h-32 w-3/4 -translate-x-1/2" />
        </motion.div>
      </div>
    </section>
  );
}

/* A faint scanning sweep drawn across the hero — the disk being read, with
   node dots marking the categories as they report back. */
function SweepBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.16]"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M-20 470 C 180 470, 260 380, 420 372 S 700 300, 860 236 S 1090 190, 1240 132"
        stroke="var(--color-accent)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
      />
      {[
        [180, 462],
        [420, 372],
        [640, 322],
        [860, 236],
        [1080, 168],
      ].map(([x, y], i) => (
        <motion.circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r="7"
          fill="var(--color-accent)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 + i * 0.18, ease: EASE }}
        />
      ))}
    </svg>
  );
}
