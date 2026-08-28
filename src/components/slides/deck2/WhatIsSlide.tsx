"use client";

import { motion } from "framer-motion";
import { HardDrive, Store, Sparkles } from "lucide-react";

export default function WhatIsSlide() {

  const stats = [
    { value: "1.1.0", label: "Current version", accent: "#3B82F6" },
    { value: "24", label: "Things it can clean", accent: "#F97316" },
    { value: "13+", label: "macOS Ventura and up", accent: "#10B981" },
    { value: "0", label: "Rupiah, forever", accent: "#8B5CF6" },
  ];

  const cleans = [
    "Xcode DerivedData",
    "Docker",
    "node_modules",
    "Homebrew",
    "Android Studio",
    "iOS Simulators",
    "System cache",
    "Duplicate photos",
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-6">
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          01 — SandClean
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {"A cleaner for disks you filled yourself."}
        </h2>
        <p className="mt-3 text-[#94A3B8] text-lg leading-relaxed max-w-3xl">
          {"Developer tools leave things behind — build folders, container images, caches nobody ever opens again. SandClean finds them, shows you the size, and moves them to the Trash. Native, free, and open-source."}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08 }}
            className="p-4 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D]"
          >
            <p className="text-2xl font-bold tabular-nums" style={{ color: s.accent }}>{s.value}</p>
            <p className="text-[#94A3B8] text-xs mt-1 leading-snug">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap gap-1.5 mb-4"
      >
        {cleans.map((c) => (
          <span
            key={c}
            className="px-2.5 py-1 rounded-lg border border-[#1E3A5F] bg-[#0F1F3D] text-[#64748B] text-xs font-mono"
          >
            {c}
          </span>
        ))}
        <span className="px-2.5 py-1 text-[#334155] text-xs font-mono">
          {"+16 more"}
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3"
      >
        <div className="p-3.5 rounded-xl border border-[#3B82F6]/30 bg-[#3B82F6]/5">
          <div className="flex items-center gap-2 mb-1">
            <HardDrive className="w-3.5 h-3.5 text-[#3B82F6]" strokeWidth={2} />
            <p className="text-[#F1F5F9] text-xs font-semibold">{"Downloaded as a DMG"}</p>
          </div>
          <p className="text-[#64748B] text-xs leading-relaxed">
            {"The full version, straight from GitHub."}
          </p>
        </div>

        <div className="p-3.5 rounded-xl border border-[#8B5CF6]/30 bg-[#8B5CF6]/5">
          <div className="flex items-center gap-2 mb-1">
            <Store className="w-3.5 h-3.5 text-[#8B5CF6]" strokeWidth={2} />
            <p className="text-[#F1F5F9] text-xs font-semibold">{"And on the App Store"}</p>
          </div>
          <p className="text-[#64748B] text-xs leading-relaxed">
            {"The same app, living under Apple's rules."}
          </p>
        </div>

        <div className="p-3.5 rounded-xl border border-[#1E3A5F] bg-[#0F1F3D]">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" strokeWidth={2} />
            <p className="text-[#F1F5F9] text-xs font-semibold">{"That gap is the talk"}</p>
          </div>
          <p className="text-[#64748B] text-xs leading-relaxed">
            {"Two versions, and everything between them."}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
