"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "../LangContext";
import { t } from "../translations";

export default function ArchitectureSlide() {
  const lang = useLang();

  const layers = [
    {
      label: t(lang, "UI Layer", "Layer UI"),
      items: ["SwiftUI Views", "NavigationSplitView", t(lang, "Animated Components", "Komponen Animasi")],
      accent: "#3B82F6", bg: "#3B82F615",
    },
    {
      label: t(lang, "ViewModel Layer", "Layer ViewModel"),
      items: ["@Observable ViewModels", "@MainActor AppState", t(lang, "Published scan state", "State scan Published")],
      accent: "#8B5CF6", bg: "#8B5CF615",
    },
    {
      label: t(lang, "Core / Scanning", "Core / Scanning"),
      items: ["ScanEngine (withTaskGroup)", "Scanner Protocol (actors)", t(lang, "8 concurrent scanners", "8 scanner bersamaan")],
      accent: "#F97316", bg: "#F9731615",
    },
    {
      label: "Services",
      items: ["FileSystemService", "HashingService (SHA-256)", "ProcessService (tmutil)"],
      accent: "#10B981", bg: "#10B98115",
    },
  ];

  const safetyLevels = [
    { level: t(lang, "Safe", "Aman"), color: "#10B981", example: t(lang, "Browser cache, temp files", "Cache browser, file sementara") },
    { level: t(lang, "Caution", "Hati-hati"), color: "#F97316", example: t(lang, "DerivedData, dev caches", "DerivedData, cache dev") },
    { level: t(lang, "Keep", "Simpan"), color: "#EF4444", example: t(lang, "iOS backups, system files", "Backup iOS, file sistem") },
  ];

  const flowSteps = [
    t(lang, "User taps Scan", "User tekan Scan"),
    "ScanEngine",
    "withTaskGroup",
    t(lang, "8 Actors", "8 Actor"),
    t(lang, "Results → UI", "Hasil → UI"),
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-8">
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          06 — {t(lang, "Architecture", "Arsitektur")}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {t(lang, "MVVM + Actor-based concurrency.", "MVVM + konkurensi berbasis Actor.")}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <p className="text-[#64748B] text-xs font-semibold uppercase tracking-widest mb-4">
            {t(lang, "Layer Stack", "Susunan Layer")}
          </p>
          <div className="space-y-2">
            {layers.map((l, i) => (
              <motion.div
                key={l.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="p-4 rounded-xl border"
                style={{ borderColor: `${l.accent}30`, background: l.bg }}
              >
                <p className="text-xs font-semibold mb-1.5" style={{ color: l.accent }}>{l.label}</p>
                <div className="flex flex-wrap gap-2">
                  {l.items.map((item) => (
                    <span key={item} className="text-[#94A3B8] text-xs">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <p className="text-[#64748B] text-xs font-semibold uppercase tracking-widest mb-4">
              {t(lang, "Scan Flow", "Alur Scan")}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {flowSteps.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-[#0F1F3D] border border-[#1E3A5F] text-[#F1F5F9] text-xs">{step}</span>
                  {i < flowSteps.length - 1 && <ArrowRight className="w-3 h-3 text-[#64748B]" />}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <p className="text-[#64748B] text-xs font-semibold uppercase tracking-widest mb-4">
              {t(lang, "Safety Levels (per item)", "Tingkat Keamanan (per item)")}
            </p>
            <div className="space-y-2">
              {safetyLevels.map((s) => (
                <div key={s.level} className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#0F1F3D] border border-[#1E3A5F]">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: s.color }} />
                  <span className="text-sm font-medium" style={{ color: s.color }}>{s.level}</span>
                  <span className="text-[#64748B] text-xs ml-auto">{s.example}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="p-4 rounded-xl bg-[#0F1F3D] border border-[#1E3A5F] font-mono text-xs text-[#94A3B8] leading-relaxed"
          >
            <span className="text-[#8B5CF6]">protocol</span>{" "}
            <span className="text-[#F1F5F9]">Scanner</span>{" "}
            <span className="text-[#64748B]">{"{"}</span>
            <br />{"  "}
            <span className="text-[#3B82F6]">var</span> category: <span className="text-[#F97316]">ScanCategory</span>
            <br />{"  "}
            <span className="text-[#3B82F6]">func</span> scan(…) <span className="text-[#3B82F6]">async throws</span> → <span className="text-[#F97316]">ScanResult</span>
            <br />
            <span className="text-[#64748B]">{"}"}</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
