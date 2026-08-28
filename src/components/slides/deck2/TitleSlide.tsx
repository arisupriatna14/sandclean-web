"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function TitleSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 select-none">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#1E3A5F] bg-[#0F1F3D] mb-10"
      >
        <ShieldCheck className="w-4 h-4 text-[#3B82F6]" strokeWidth={1.8} />
        <span className="text-[#94A3B8] text-sm font-mono">
          SandClean
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="text-6xl sm:text-7xl font-extrabold text-[#F1F5F9] tracking-tight leading-tight"
      >
        {"Shipping"}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">
          {"a Mac App"}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.22 }}
        className="mt-6 text-xl text-[#94A3B8] max-w-2xl leading-relaxed"
      >
        {"What it means for an app to be sandboxed, why Apple guards your files so tightly, and how one project ends up shipping two different apps."}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-14 flex items-center gap-6 text-[#64748B] text-sm font-mono"
      >
        <span>Sandbox</span>
        <span className="w-px h-4 bg-[#1E3A5F]" />
        <span>Signing</span>
        <span className="w-px h-4 bg-[#1E3A5F]" />
        <span>Distribution</span>
      </motion.div>

      <motion.a
        href="/slides"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="mt-8 text-xs font-mono text-[#334155] hover:text-[#3B82F6] transition-colors"
      >
        ← {"Part 1 — Building SandClean"}
      </motion.a>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
