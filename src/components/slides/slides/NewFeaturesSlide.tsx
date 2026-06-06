"use client";

import { motion } from "framer-motion";
import {
  Package2, ScrollText, GitBranch, Box, Smartphone, Cloud,
  BarChart2, TrendingDown, ShieldCheck, Zap, History, Sparkles, AlignJustify,
  Mail, FileCode, Wifi, Image,
} from "lucide-react";
import { useLang } from "../LangContext";
import { t } from "../translations";

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function FeatureCard({ icon: Icon, title, note, accent, bg }: {
  icon: React.ElementType;
  title: string;
  note: string;
  accent: string;
  bg: string;
}) {
  return (
    <motion.div
      variants={CARD_VARIANTS}
      className="p-3 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D] flex flex-col gap-2"
    >
      <div className="inline-flex items-center justify-center w-8 h-8 rounded-xl" style={{ background: bg }}>
        <Icon className="w-4 h-4" style={{ color: accent }} strokeWidth={1.8} />
      </div>
      <div>
        <p className="text-[#F1F5F9] font-semibold text-xs leading-snug">{title}</p>
        <p className="text-[#64748B] text-xs mt-0.5">{note}</p>
      </div>
    </motion.div>
  );
}

export default function NewFeaturesSlide() {
  const lang = useLang();

  const cleaners = [
    { icon: Package2, title: "Homebrew Deep Clean", note: t(lang, "Old bottles, casks, outdated", "Botol lama, cask, outdated"), accent: "#F97316", bg: "#F9731610" },
    { icon: ScrollText, title: t(lang, "Log Files", "File Log"), note: t(lang, "Crash reports, old logs", "Laporan crash, log lama"), accent: "#3B82F6", bg: "#3B82F610" },
    { icon: GitBranch, title: t(lang, "Git Cleaner", "Pembersih Git"), note: t(lang, "node_modules, .build, Pods", "node_modules, .build, Pods"), accent: "#10B981", bg: "#10B98110" },
    { icon: Box, title: "Docker Cleanup", note: t(lang, "Images, volumes, build cache", "Image, volume, build cache"), accent: "#3B82F6", bg: "#3B82F610" },
    { icon: Wifi, title: t(lang, "Network & External Drive", "Drive Jaringan & Eksternal"), note: t(lang, "Junk on mounted volumes", "Sampah di volume terpasang"), accent: "#8B5CF6", bg: "#8B5CF610" },
    { icon: Image, title: t(lang, "Duplicate Photos", "Foto Duplikat"), note: t(lang, "dHash perceptual matching", "Pencocokan perceptual dHash"), accent: "#F97316", bg: "#F9731610" },
    { icon: Mail, title: t(lang, "Mail Attachments", "Lampiran Email"), note: t(lang, "Re-downloadable from server", "Dapat diunduh ulang dari server"), accent: "#3B82F6", bg: "#3B82F610" },
    { icon: FileCode, title: "Python venv", note: t(lang, "Forgotten envs (300 MB–1 GB+)", "Env terlupakan (300 MB–1 GB+)"), accent: "#10B981", bg: "#10B98110" },
    { icon: Smartphone, title: t(lang, "iOS Simulator", "Simulator iOS"), note: t(lang, "Unused runtimes freed", "Runtime tak terpakai dibebaskan"), accent: "#8B5CF6", bg: "#8B5CF610" },
    { icon: Cloud, title: t(lang, "iCloud Analyzer", "Analisis iCloud"), note: t(lang, "Evict local copies", "Keluarkan salinan lokal"), accent: "#3B82F6", bg: "#3B82F610" },
  ];

  const utilities = [
    { icon: BarChart2, title: t(lang, "Disk Visualizer", "Visualisasi Disk"), note: t(lang, "Treemap by folder & type", "Treemap per folder & tipe"), accent: "#F97316", bg: "#F9731610" },
    { icon: TrendingDown, title: t(lang, "Storage Timeline", "Timeline Penyimpanan"), note: t(lang, "History chart of freed space", "Grafik riwayat ruang bebas"), accent: "#3B82F6", bg: "#3B82F610" },
    { icon: ShieldCheck, title: t(lang, "Security Scan", "Pemindaian Keamanan"), note: t(lang, "Keys, credentials, backups", "Kunci, kredensial, backup"), accent: "#10B981", bg: "#10B98110" },
    { icon: Zap, title: t(lang, "Startup Manager", "Manajer Startup"), note: t(lang, "Login Items & Launch Agents", "Login Items & Launch Agents"), accent: "#F97316", bg: "#F9731610" },
    { icon: History, title: t(lang, "History", "Riwayat"), note: t(lang, "All sessions + bytes freed", "Semua sesi + byte dibebaskan"), accent: "#8B5CF6", bg: "#8B5CF610" },
    { icon: Sparkles, title: t(lang, "AI Analysis", "Analisis AI"), note: t(lang, "Claude-powered suggestions", "Saran berbasis Claude"), accent: "#3B82F6", bg: "#3B82F610" },
    { icon: AlignJustify, title: t(lang, "Menu Bar", "Menu Bar"), note: t(lang, "Quick disk usage & scan", "Penggunaan disk & scan cepat"), accent: "#8B5CF6", bg: "#8B5CF610" },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full py-6">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-5">
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          08 — {t(lang, "New Features", "Fitur Baru")}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {t(lang, "10 more cleaners. 7 smart utilities.", "10 pembersih lagi. 7 utilitas cerdas.")}
        </h2>
        <p className="mt-2 text-[#94A3B8] text-base">
          {t(
            lang,
            "Beyond the basics — deeper cleaning, visual analysis, and AI-powered insights.",
            "Lebih dari sekadar dasar — pembersihan lebih dalam, analisis visual, dan wawasan berbasis AI."
          )}
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-[#64748B] text-xs font-semibold uppercase tracking-widest mb-2"
      >
        {t(lang, "More Cleaning Tools", "Alat Pembersih Lainnya")}
      </motion.p>
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        className="grid grid-cols-5 gap-2 mb-4"
      >
        {cleaners.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-[#64748B] text-xs font-semibold uppercase tracking-widest mb-2"
      >
        {t(lang, "Analysis & Utilities", "Analisis & Utilitas")}
      </motion.p>
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.65 } } }}
        className="grid grid-cols-7 gap-2"
      >
        {utilities.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </motion.div>
    </div>
  );
}
