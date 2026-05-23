"use client";

import { motion } from "framer-motion";
import { Rocket, Brain, Code2, Globe2 } from "lucide-react";
import { useLang } from "../LangContext";
import { t } from "../translations";

export default function RoadmapSlide() {
  const lang = useLang();

  const phases = [
    {
      icon: Rocket,
      phase: t(lang, "Phase 1", "Fase 1"),
      label: t(lang, "Ship & Polish", "Ship & Polish"),
      duration: t(lang, "4–6 weeks", "4–6 minggu"),
      accent: "#10B981",
      bg: "#10B98112",
      border: "#10B98128",
      items: [
        t(lang, "Sparkle Auto-Update — in-app update via DMG, prerequisite for real distribution", "Sparkle Auto-Update — update in-app via DMG, syarat utama distribusi"),
        t(lang, "Keyboard Shortcuts — ⌘R, ⌘A, ⌫, Space, ⌘E for power users", "Keyboard Shortcuts — ⌘R, ⌘A, ⌫, Space, ⌘E untuk power user"),
        t(lang, "Before/After Storage Card — animated counter, most rewarding UX feedback", "Kartu Before/After Storage — counter animasi, feedback UX paling rewarding"),
        t(lang, "Smart Auto-Clean — auto clean when disk < X GB", "Smart Auto-Clean — bersihkan otomatis saat disk < X GB"),
        t(lang, "Space Freed Milestone Cards — gamification: 1 GB, 10 GB achievements", "Milestone Cards — gamifikasi: pencapaian 1 GB, 10 GB"),
      ],
    },
    {
      icon: Brain,
      phase: t(lang, "Phase 2", "Fase 2"),
      label: t(lang, "Intelligence", "Kecerdasan"),
      duration: t(lang, "4–6 weeks", "4–6 minggu"),
      accent: "#3B82F6",
      bg: "#3B82F612",
      border: "#3B82F628",
      items: [
        t(lang, "Predictive Disk Full Warning — linear regression from scan history, \"~30 days left\"", "Prediksi Disk Penuh — regresi linier dari riwayat scan, \"~30 hari lagi\""),
        t(lang, "Category Comparison Report — month-over-month delta per category", "Laporan Perbandingan Kategori — delta per kategori bulan ke bulan"),
        t(lang, "Battery-Aware Throttling — halve concurrency on battery, show Eco Mode badge", "Throttling Baterai — kurangi concurrency saat baterai, tampilkan badge Eco Mode"),
        t(lang, "Global Search — ⌘F across all scan results simultaneously", "Pencarian Global — ⌘F di semua hasil scan sekaligus"),
      ],
    },
    {
      icon: Code2,
      phase: t(lang, "Phase 3", "Fase 3"),
      label: t(lang, "Developer Depth", "Developer Depth"),
      duration: t(lang, "3–4 weeks", "3–4 minggu"),
      accent: "#8B5CF6",
      bg: "#8B5CF612",
      border: "#8B5CF628",
      items: [
        t(lang, "Monorepo/Turbo/Nx/Bazel Cleaner — extend GitCleaner for modern JS tooling", "Pembersih Monorepo/Turbo/Nx/Bazel — extend GitCleaner untuk tooling JS modern"),
        t(lang, "Conda/Mamba Environment Finder — like PythonEnv but for data science envs", "Pencari Env Conda/Mamba — seperti PythonEnv tapi untuk lingkungan data science"),
        t(lang, "Android Studio Cleaner — Gradle cache (10–15 GB) + AVD emulator manager", "Pembersih Android Studio — Gradle cache (10–15 GB) + manajer AVD emulator"),
        t(lang, "VSCode Extension Cache — unused extensions & remote server cache", "Cache Ekstensi VSCode — ekstensi tak terpakai & cache server remote"),
        t(lang, "Rust target/ Cleaner — find Cargo.toml siblings, clean build artifacts", "Pembersih Rust target/ — temukan sibling Cargo.toml, bersihkan build artifact"),
      ],
    },
    {
      icon: Globe2,
      phase: t(lang, "Phase 4", "Fase 4"),
      label: t(lang, "Platform Expansion", "Ekspansi Platform"),
      duration: t(lang, "6–8 weeks", "6–8 minggu"),
      accent: "#F97316",
      bg: "#F9731612",
      border: "#F9731628",
      items: [
        t(lang, "Raycast / Alfred Integration — Quick Scan, Clean Xcode, Free Space commands", "Integrasi Raycast / Alfred — perintah Quick Scan, Clean Xcode, Free Space"),
        t(lang, "Scan Profile Import/Export — share .sandclean presets across machines", "Import/Export Profil Scan — berbagi preset .sandclean antar mesin"),
        t(lang, "Multi-User Admin Mode — scan /Users/*/Library for all accounts on shared Mac", "Mode Admin Multi-User — scan /Users/*/Library untuk semua akun di Mac bersama"),
        t(lang, "Sparkle Beta Channel — stable + beta appcast, early adopter opt-in toggle", "Channel Beta Sparkle — appcast stable + beta, toggle opt-in early adopter"),
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-5"
      >
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          11 — {t(lang, "Roadmap", "Roadmap")}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {t(lang, "4 phases. 18 features.", "4 fase. 18 fitur.")}
        </h2>
        <p className="text-[#64748B] text-sm mt-2">
          {t(
            lang,
            "From shipping polish to platform expansion — strategic priorities ordered by impact.",
            "Dari polish distribusi hingga ekspansi platform — prioritas strategis berdasarkan dampak."
          )}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-3">
        {phases.map((phase, gi) => {
          const Icon = phase.icon;
          return (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + gi * 0.1 }}
              className="flex flex-col rounded-xl border overflow-hidden"
              style={{ borderColor: phase.border }}
            >
              <div className="flex items-center gap-2 px-3 py-2" style={{ background: phase.bg }}>
                <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: phase.accent }} strokeWidth={2} />
                <span className="text-xs font-bold tracking-wide" style={{ color: phase.accent }}>
                  {phase.phase} — {phase.label}
                </span>
                <span className="ml-auto text-[10px] font-mono" style={{ color: phase.accent + "99" }}>
                  {phase.duration}
                </span>
              </div>

              <div className="flex flex-col bg-[#0F1F3D] flex-1 px-3 py-2.5 gap-1.5">
                {phase.items.map((item, ii) => (
                  <motion.div
                    key={ii}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + gi * 0.1 + ii * 0.04 }}
                    className="flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: phase.accent }} />
                    <span className="text-[16px] text-[#94A3B8] leading-snug">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
