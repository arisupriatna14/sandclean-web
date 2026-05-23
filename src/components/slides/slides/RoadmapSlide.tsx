"use client";

import { motion } from "framer-motion";
import { Zap, Palette, BarChart2, Code2, Settings2, Rocket } from "lucide-react";
import { useLang } from "../LangContext";
import { t } from "../translations";

export default function RoadmapSlide() {
  const lang = useLang();

  const groups = [
    {
      icon: Zap,
      label: t(lang, "A — Quick Wins", "A — Quick Wins"),
      accent: "#10B981",
      bg: "#10B98112",
      border: "#10B98128",
      items: [
        t(lang, "Language Pack Remover", "Language Pack Remover"),
        t(lang, "Log File Cleaner", "Pembersih File Log"),
        t(lang, "Keyboard Shortcuts", "Pintasan Keyboard"),
        t(lang, "Cleaning Presets", "Preset Pembersihan"),
        t(lang, "Before/After Storage Card", "Kartu Before/After Storage"),
      ],
    },
    {
      icon: Palette,
      label: t(lang, "B — UX Improvements", "B — Perbaikan UX"),
      accent: "#3B82F6",
      bg: "#3B82F612",
      border: "#3B82F628",
      items: [
        t(lang, "Quick Look Preview", "Pratinjau Quick Look"),
        t(lang, "Sortable Results Table", "Tabel Hasil Sortable"),
        t(lang, "Drag & Drop Exclusion List", "Drag & Drop Exclusion List"),
      ],
    },
    {
      icon: BarChart2,
      label: t(lang, "C — Storage Analysis", "C — Analisis Storage"),
      accent: "#F59E0B",
      bg: "#F59E0B12",
      border: "#F59E0B28",
      items: [
        t(lang, "Disk Usage Visualizer (Treemap)", "Visualizer Disk (Treemap)"),
        t(lang, "Mail Attachments Cleaner", "Pembersih Lampiran Mail"),
        t(lang, "Python Venv Finder", "Pencari Venv Python"),
      ],
    },
    {
      icon: Code2,
      label: t(lang, "D — Developer Tools", "D — Developer Tools"),
      accent: "#8B5CF6",
      bg: "#8B5CF612",
      border: "#8B5CF628",
      items: [
        t(lang, "Terraform/Pulumi Cache Cleaner", "Pembersih Cache Terraform/Pulumi"),
        t(lang, "Jupyter Checkpoints Cleaner", "Pembersih Checkpoint Jupyter"),
        t(lang, "Homebrew Deep Clean", "Deep Clean Homebrew"),
      ],
    },
    {
      icon: Settings2,
      label: t(lang, "E — System Management", "E — Manajemen Sistem"),
      accent: "#EF4444",
      bg: "#EF444412",
      border: "#EF444428",
      items: [
        t(lang, "Startup Items Manager", "Manajer Item Startup"),
        t(lang, "Duplicate Photo Finder", "Pencari Foto Duplikat"),
        t(lang, "iCloud Storage Analyzer", "Analisis Penyimpanan iCloud"),
      ],
    },
    {
      icon: Rocket,
      label: t(lang, "F — Advanced", "F — Advanced"),
      accent: "#EC4899",
      bg: "#EC489912",
      border: "#EC489928",
      items: [
        t(lang, "Finder Context Menu Extension", "Ekstensi Menu Konteks Finder"),
        t(lang, "Notification Center Widget", "Widget Notification Center"),
        t(lang, "Smart Auto-Clean", "Auto-Clean Cerdas"),
        t(lang, "Storage Timeline (APFS)", "Storage Timeline (APFS)"),
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-6"
      >
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          10 — {t(lang, "Roadmap", "Roadmap")}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {t(lang, "Roadmap SandClean.", "Roadmap SandClean.")}
        </h2>
        <p className="text-[#64748B] text-sm mt-2">
          {t(lang, "21 planned features across 6 groups", "21 fitur lanjutan dalam 6 kelompok")}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {groups.map((group, gi) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + gi * 0.08 }}
              className="flex flex-col rounded-xl border overflow-hidden"
              style={{ borderColor: group.border }}
            >
              <div className="flex items-center gap-2 px-3 py-2.5" style={{ background: group.bg }}>
                <Icon className="w-4 h-4 flex-shrink-0" style={{ color: group.accent }} strokeWidth={2} />
                <span className="text-[20px] font-semibold" style={{ color: group.accent }}>
                  {group.label}
                </span>
              </div>

              <div className="flex flex-col bg-[#0F1F3D] flex-1 px-3 py-2.5 gap-1.5">
                {group.items.map((item, ii) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.18 + gi * 0.07 + ii * 0.04 }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: group.accent }} />
                    <span className="text-[20px] text-[#94A3B8] leading-tight">{item}</span>
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
