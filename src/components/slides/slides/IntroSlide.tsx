"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Smartphone, Code2 } from "lucide-react";
import { useLang } from "../LangContext";
import { t } from "../translations";

export default function IntroSlide() {
  const lang = useLang();

  const highlights = [
    { icon: Smartphone, text: t(lang, "Native iOS & macOS development", "Pengembangan iOS & macOS native"), accent: "#3B82F6" },
    { icon: Code2, text: "Swift · SwiftUI · UIKit", accent: "#8B5CF6" },
    { icon: Briefcase, text: "Stockbit - Bibit", accent: "#F97316" },
    { icon: Calendar, text: t(lang, "2021 – present (4+ years)", "2021 – sekarang (4+ tahun)"), accent: "#10B981" },
    { icon: Briefcase, text: t(lang, "Core iOS Team @Stockbit", "Tim Core iOS @Stockbit"), accent: "#F97316" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 select-none">
      <div className="w-full max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-8 text-center"
        >
          00 — {t(lang, "Speaker", "Pembicara")}
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="flex-shrink-0 w-28 h-28 rounded-3xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center shadow-xl shadow-[#3B82F6]/20"
          >
            <span className="text-white text-4xl font-bold">A</span>
          </motion.div>

          <div className="flex-1 text-center sm:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.45 }}
              className="text-4xl sm:text-5xl font-extrabold text-[#F1F5F9] tracking-tight"
            >
              Ari Supriatna
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.4 }}
              className="mt-2 text-xl text-[#94A3B8]"
            >
              Senior iOS Engineer
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
              className="mt-1 flex items-center gap-2 justify-center sm:justify-start"
            >
              <span className="text-[#F97316] font-semibold text-sm">Stockbit</span>
              <span className="text-[#1E3A5F]">·</span>
              <span className="text-[#64748B] text-sm font-mono">2021 – {t(lang, "present", "sekarang")}</span>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.35 } } }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={h.text}
                    variants={{
                      hidden: { opacity: 0, x: -14 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.38 } },
                    }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#0F1F3D] border border-[#1E3A5F]"
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" style={{ color: h.accent }} strokeWidth={1.8} />
                    <span className="text-[#94A3B8] text-sm">{h.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
