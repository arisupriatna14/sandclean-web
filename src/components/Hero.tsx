"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#3B82F6]/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#8B5CF6]/5 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316] text-xs font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
            macOS 13+
          </motion.div>

          <motion.h1
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F1F5F9] leading-[1.1] tracking-tight mb-6"
          >
            Reclaim Your
            <br />
            <span className="text-[#3B82F6]">Mac&apos;s Storage.</span>
          </motion.h1>

          <motion.p
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-lg text-[#94A3B8] leading-relaxed mb-8 max-w-lg"
          >
            SandClean is a native macOS cleaner that finds and removes caches,
            Xcode artifacts, large files, duplicates, and dev tool junk — safely.
            Everything moves to Trash, never permanently deleted.
          </motion.p>

          <motion.div
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4"
          >
            <a
              id="download"
              href="https://github.com/arisupriatna14/sandclean-app/releases/download/v.1.0.0/SandClean-1.0.dmg"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-sm transition-colors duration-200 shadow-lg shadow-[#3B82F6]/20"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Download DMG
            </a>
          </motion.div>

          <motion.p
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-xs text-[#64748B]"
          >
            Requires Full Disk Access · macOS 13 Ventura or later
          </motion.p>
        </div>

        {/* App screenshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* macOS window chrome */}
          <div className="rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D] shadow-2xl shadow-black/50 overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E3A5F] bg-[#0A1628]">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 text-xs text-[#64748B] font-medium">SandClean</span>
            </div>
            {/* Screenshot */}
            <div className="relative aspect-[16/10]">
              <Image
                src="/screenshot.png"
                alt="SandClean dashboard showing storage usage and scanner categories"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Glow under window */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-[#3B82F6]/15 blur-2xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
