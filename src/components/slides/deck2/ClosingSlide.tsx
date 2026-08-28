"use client";

import { motion } from "framer-motion";
import { Wind, GitBranch, Globe } from "lucide-react";

export default function ClosingSlide() {

  const takeaways = [
    "Where an app lives decides what it may do",
    "Two versions, one source",
    "Automate the release on day one",
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center mb-8"
      >
        <Wind className="w-8 h-8 text-white" strokeWidth={1.8} />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl sm:text-6xl font-bold text-[#F1F5F9] tracking-tight"
      >
        {"Thank you."}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-5 text-lg text-[#94A3B8] max-w-xl leading-relaxed"
      >
        {"SandClean is free and open-source. Take the Makefile, take the two-target setup — both are more useful copied than admired."}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-2"
      >
        {takeaways.map((tk) => (
          <span
            key={tk}
            className="px-3 py-1.5 rounded-full border border-[#1E3A5F] bg-[#0F1F3D] text-[#94A3B8] text-xs"
          >
            {tk}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
      >
        <a
          href="https://sandclean.vercel.app"
          className="inline-flex items-center gap-1.5 text-sm font-mono text-[#3B82F6] hover:text-[#8B5CF6] transition-colors"
        >
          <Globe className="w-3.5 h-3.5" strokeWidth={2} />
          sandclean.vercel.app
        </a>
        <span className="w-px h-4 bg-[#1E3A5F]" />
        <a
          href="https://github.com/arisupriatna14/sandclean-app"
          className="inline-flex items-center gap-1.5 text-sm font-mono text-[#3B82F6] hover:text-[#8B5CF6] transition-colors"
        >
          <GitBranch className="w-3.5 h-3.5" strokeWidth={2} />
          arisupriatna14/sandclean-app
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
        className="mt-10 text-[#64748B] text-sm"
      >
        {"Questions?"}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 flex items-center gap-4 text-[#334155] text-xs font-mono"
      >
        <span>Ari Supriatna</span>
        <span className="w-px h-3 bg-[#1E3A5F]" />
        <span>SandClean 1.1.0</span>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#3B82F6]/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
