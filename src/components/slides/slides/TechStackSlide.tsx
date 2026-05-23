"use client";

import { motion } from "framer-motion";
import { useLang } from "../LangContext";
import { t } from "../translations";

export default function TechStackSlide() {
  const lang = useLang();

  const stack = [
    { name: "Swift 5.9+", role: t(lang, "Language", "Bahasa"), note: t(lang, "Modern, safe, fast", "Modern, aman, cepat"), accent: "#F97316" },
    { name: "SwiftUI", role: t(lang, "UI Framework", "Framework UI"), note: t(lang, "Declarative, macOS-native", "Deklaratif, native macOS"), accent: "#3B82F6" },
    { name: "Swift Concurrency", role: "Async/Await + Actors", note: t(lang, "Parallel scanning, cancellation", "Scan paralel, pembatalan"), accent: "#8B5CF6" },
    { name: "CryptoKit", role: t(lang, "Hashing", "Hashing"), note: t(lang, "SHA-256 duplicate detection", "Deteksi duplikat SHA-256"), accent: "#10B981" },
    { name: "NSMetadataQuery", role: t(lang, "File Search", "Pencarian File"), note: t(lang, "Spotlight-powered >50MB search", "Pencarian >50MB berbasis Spotlight"), accent: "#3B82F6" },
    { name: "Process API", role: t(lang, "Shell Commands", "Perintah Shell"), note: "tmutil, diskutil, launchctl", accent: "#F97316" },
    { name: "XcodeGen", role: t(lang, "Project Gen", "Generasi Proyek"), note: "project.yml → .xcodeproj", accent: "#8B5CF6" },
    { name: "Makefile", role: t(lang, "Build Pipeline", "Pipeline Build"), note: "archive → dmg → notarize", accent: "#94A3B8" },
  ];

  const decisions = [
    { label: t(lang, "Non-sandboxed", "Non-sandbox"), reason: t(lang, "Full Disk Access needs it; distributed via DMG, not App Store", "Full Disk Access memerlukannya; didistribusikan via DMG, bukan App Store") },
    { label: t(lang, "macOS 13+ only", "macOS 13+ saja"), reason: t(lang, "Use @Observable, modern SwiftUI, no legacy compromises", "Gunakan @Observable, SwiftUI modern, tanpa kompromi legacy") },
    { label: t(lang, "Actor-based scanners", "Scanner berbasis Actor"), reason: t(lang, "Thread safety without locks; each scanner runs concurrently", "Thread safety tanpa lock; setiap scanner berjalan bersamaan") },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-8"
      >
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          05 — {t(lang, "Tech Stack", "Tech Stack")}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {t(lang, "All Apple, all native.", "Semua Apple, semua native.")}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-2">
          {stack.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 + i * 0.05 }}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#0F1F3D] border border-[#1E3A5F]"
            >
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.accent }} />
                <span className="text-[#F1F5F9] text-sm font-medium">{s.name}</span>
              </div>
              <span className="text-[#64748B] text-xs font-mono text-right">{s.note}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <p className="text-[#64748B] text-xs font-semibold uppercase tracking-widest mb-4">
            {t(lang, "Key Design Decisions", "Keputusan Desain Utama")}
          </p>
          <div className="space-y-3">
            {decisions.map((d) => (
              <div key={d.label} className="p-4 rounded-xl border border-[#1E3A5F] bg-[#0F1F3D]">
                <p className="text-[#3B82F6] text-xs font-semibold mb-1">{d.label}</p>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{d.reason}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
