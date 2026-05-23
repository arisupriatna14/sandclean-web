"use client";

import { motion } from "framer-motion";
import { HardDrive, Code2, AlertTriangle, DollarSign } from "lucide-react";
import { useLang } from "../LangContext";
import { t } from "../translations";

export default function ProblemSlide() {
  const lang = useLang();

  const problems = [
    {
      icon: HardDrive,
      title: t(lang, "Storage bloat is invisible", "Storage bloat tidak terlihat"),
      body: t(
        lang,
        "macOS hides gigabytes of junk — caches, logs, old backups — and gives you no easy way to find them.",
        "macOS menyembunyikan gigabyte sampah — cache, log, backup lama — tanpa cara mudah untuk menemukannya."
      ),
      accent: "#3B82F6", bg: "#3B82F610",
    },
    {
      icon: Code2,
      title: t(lang, "Xcode is the worst offender", "Xcode adalah pelaku terburuk"),
      body: t(
        lang,
        "DerivedData, old simulators, iOS device support files. A clean build can silently eat 30–50 GB.",
        "DerivedData, simulator lama, file iOS device support. Satu build bersih bisa diam-diam makan 30–50 GB."
      ),
      accent: "#8B5CF6", bg: "#8B5CF610",
    },
    {
      icon: AlertTriangle,
      title: t(lang, "Dev tools accumulate silently", "Dev tools menumpuk diam-diam"),
      body: t(
        lang,
        "npm, pip, Homebrew, CocoaPods, Cargo… each tool caches packages globally. Nobody cleans them.",
        "npm, pip, Homebrew, CocoaPods, Cargo… setiap tool menyimpan cache secara global. Tidak ada yang membersihkannya."
      ),
      accent: "#F97316", bg: "#F9731610",
    },
    {
      icon: DollarSign,
      title: t(lang, "CleanMyMac X costs $40/year", "CleanMyMac X seharga $40/tahun"),
      body: t(
        lang,
        "It works, but it's a subscription, it's closed-source, and it's overkill for what most devs need.",
        "Memang bekerja, tapi berbasis langganan, closed-source, dan terlalu berlebihan untuk kebutuhan developer."
      ),
      accent: "#EF4444", bg: "#EF444410",
    },
  ];

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.45 } } };

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-10"
      >
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          01 — {t(lang, "Problem", "Masalah")}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {t(lang, "Your Mac is hoarding junk.", "Mac kamu penuh sampah tersembunyi.")}
          <br />
          <span className="text-[#94A3B8] font-normal">
            {t(lang, "And you have no good tools to fix it.", "Dan tidak ada tools yang cukup baik untuk mengatasinya.")}
          </span>
        </h2>
      </motion.div>

      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {problems.map((p) => {
          const Icon = p.icon;
          return (
            <motion.div key={p.title} variants={item} className="flex gap-4 p-5 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D]">
              <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl" style={{ background: p.bg }}>
                <Icon className="w-5 h-5" style={{ color: p.accent }} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-[#F1F5F9] font-semibold text-sm mb-1">{p.title}</h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
