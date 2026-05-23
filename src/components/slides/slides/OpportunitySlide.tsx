"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, ExternalLink, Zap } from "lucide-react";
import { useLang } from "../LangContext";
import { t } from "../translations";

export default function OpportunitySlide() {
  const lang = useLang();

  const opportunities = [
    {
      icon: Users,
      title: t(lang, "~30M active Mac developers", "~30 juta developer Mac aktif"),
      body: t(
        lang,
        "Apple's developer platform is growing. Every Xcode install accumulates GB of waste. This is a universal pain point.",
        "Platform developer Apple terus berkembang. Setiap instalasi Xcode menumpuk GB sampah. Ini adalah masalah yang dirasakan semua developer."
      ),
      accent: "#3B82F6", bg: "#3B82F610",
    },
    {
      icon: ExternalLink,
      title: t(lang, "Open-source credibility", "Kredibilitas open-source"),
      body: t(
        lang,
        "Developers trust tools they can read. An open codebase is itself a feature — no black-box deletions.",
        "Developer mempercayai tools yang bisa mereka baca. Kode terbuka adalah fitur itu sendiri — tidak ada penghapusan black-box."
      ),
      accent: "#8B5CF6", bg: "#8B5CF610",
    },
    {
      icon: Zap,
      title: t(lang, "Direct distribution via DMG", "Distribusi langsung via DMG"),
      body: t(
        lang,
        "No App Store sandbox restrictions. Full Disk Access, full power. Distributed directly to developers who know how to use it.",
        "Tanpa batasan sandbox App Store. Full Disk Access, performa penuh. Didistribusikan langsung ke developer yang tahu cara menggunakannya."
      ),
      accent: "#F97316", bg: "#F9731610",
    },
    {
      icon: TrendingUp,
      title: t(lang, "Freemium ceiling is high", "Potensi freemium sangat tinggi"),
      body: t(
        lang,
        "Start free & open. Future: notarized binary releases, a Pro tier, or a one-time purchase. The ceiling is real.",
        "Mulai gratis & terbuka. Ke depan: rilis binary ternotarisasi, tier Pro, atau pembelian sekali. Potensinya nyata."
      ),
      accent: "#10B981", bg: "#10B98110",
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-10"
      >
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          04 — {t(lang, "Opportunity", "Peluang")}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {t(lang, "The gap is real.", "Celahnya nyata.")}
          <br />
          <span className="text-[#94A3B8] font-normal">
            {t(lang, "And it's underserved.", "Dan belum terlayani dengan baik.")}
          </span>
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {opportunities.map((o) => {
          const Icon = o.icon;
          return (
            <motion.div
              key={o.title}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
              className="p-5 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D]"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3" style={{ background: o.bg }}>
                <Icon className="w-5 h-5" style={{ color: o.accent }} strokeWidth={1.8} />
              </div>
              <h3 className="text-[#F1F5F9] font-semibold text-sm mb-1">{o.title}</h3>
              <p className="text-[#94A3B8] text-xs leading-relaxed">{o.body}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
