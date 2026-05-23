"use client";

import { motion } from "framer-motion";
import { Trash2, Code2, HardDrive, Copy, LayoutGrid, Ghost, Terminal, LayoutDashboard } from "lucide-react";
import { useLang } from "../LangContext";
import { t } from "../translations";

export default function FeaturesSlide() {
  const lang = useLang();

  const features = [
    { icon: LayoutDashboard, title: "Dashboard", note: t(lang, "Smart scan overview", "Ringkasan scan cerdas"), accent: "#3B82F6", bg: "#3B82F610" },
    { icon: Trash2, title: "System Cache", note: t(lang, "Browsers, apps, Photos", "Browser, apps, Photos"), accent: "#3B82F6", bg: "#3B82F610" },
    { icon: Code2, title: "Xcode Cleaner", note: t(lang, "DerivedData, simulators", "DerivedData, simulator"), accent: "#8B5CF6", bg: "#8B5CF610" },
    { icon: Copy, title: t(lang, "Large & Duplicates", "File Besar & Duplikat"), note: t(lang, ">50 MB + SHA-256 dedup", ">50 MB + dedup SHA-256"), accent: "#F97316", bg: "#F9731610" },
    { icon: HardDrive, title: "System Data", note: t(lang, "Time Machine, iCloud, iOS", "Time Machine, iCloud, iOS"), accent: "#3B82F6", bg: "#3B82F610" },
    { icon: LayoutGrid, title: "Applications", note: t(lang, "All apps + disk size", "Semua apps + ukuran disk"), accent: "#8B5CF6", bg: "#8B5CF610" },
    { icon: Ghost, title: "App Leftovers", note: t(lang, "Orphaned prefs & containers", "Prefs & container yatim"), accent: "#8B5CF6", bg: "#8B5CF610" },
    { icon: Terminal, title: "Dev Tools Cache", note: t(lang, "npm, pip, brew, cargo…", "npm, pip, brew, cargo…"), accent: "#F97316", bg: "#F9731610" },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-8">
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          07 — {t(lang, "Features", "Fitur")}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {t(lang, "8 scanners. One sidebar.", "8 scanner. Satu sidebar.")}
        </h2>
        <p className="mt-3 text-[#94A3B8] text-lg">
          {t(
            lang,
            "Each category is an independent, cancellable, concurrent scanner.",
            "Setiap kategori adalah scanner independen, bisa dibatalkan, dan berjalan bersamaan."
          )}
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-3"
      >
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
              className="p-4 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D] flex flex-col gap-3"
            >
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl" style={{ background: f.bg }}>
                <Icon className="w-4 h-4" style={{ color: f.accent }} strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-[#F1F5F9] font-semibold text-xs leading-snug">{f.title}</p>
                <p className="text-[#64748B] text-xs mt-0.5">{f.note}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 text-center text-[#64748B] text-xs font-mono"
      >
        ~4,700 {t(lang, "lines of Swift", "baris Swift")} · 51 {t(lang, "files", "file")} · MVVM {t(lang, "per feature", "per fitur")}
      </motion.p>
    </div>
  );
}
