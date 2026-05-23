"use client";

import { motion } from "framer-motion";
import { ShoppingBag, CheckCircle2, ArrowRight } from "lucide-react";
import { useLang } from "../LangContext";
import { t } from "../translations";

export default function NextPlanSlide() {
  const lang = useLang();

  const goals = [
    {
      icon: ShoppingBag,
      title: t(lang, "App Store Distribution", "Distribusi App Store"),
      desc: t(
        lang,
        "Reach a wider audience via Mac App Store — paid upfront, no DMG, no manual install.",
        "Jangkau audiens lebih luas via Mac App Store — bayar di awal, tanpa DMG, tanpa instalasi manual."
      ),
      accent: "#3B82F6", bg: "#3B82F610",
    },
  ];

  const steps = [
    {
      phase: "Sandbox",
      items: [
        t(lang, "Enable App Sandbox entitlement", "Aktifkan entitlement App Sandbox"),
        t(lang, "Replace Process API (tmutil/diskutil) with sandboxed alternatives", "Ganti Process API (tmutil/diskutil) dengan alternatif berbasis sandbox"),
        t(lang, "Request com.apple.security.files.user-selected.read-write entitlement", "Minta entitlement com.apple.security.files.user-selected.read-write"),
      ],
      accent: "#F97316",
    },
    {
      phase: "App Store Connect",
      items: [
        t(lang, "Prepare screenshots (1280×800 & 2560×1600)", "Siapkan screenshot (1280×800 & 2560×1600)"),
        t(lang, "Write app description, keywords, privacy policy URL", "Tulis deskripsi app, kata kunci, URL kebijakan privasi"),
      ],
      accent: "#3B82F6",
    },
    {
      phase: t(lang, "Review & Release", "Review & Rilis"),
      items: [
        t(lang, "Submit for App Review (allow 1–3 days)", "Kirim untuk App Review (tunggu 1–3 hari)"),
        t(lang, "Respond to any sandbox permission rejections", "Tanggapi penolakan izin sandbox"),
        t(lang, "Phased release — 7-day rollout to catch regressions", "Rilis bertahap — rollout 7 hari untuk menangkap regresi"),
      ],
      accent: "#10B981",
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-7">
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          09 — {t(lang, "Next Plan", "Rencana Selanjutnya")}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {t(lang, "From DMG to App Store.", "Dari DMG ke App Store.")}
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 gap-3 mb-6"
      >
        {goals.map((g) => {
          const Icon = g.icon;
          return (
            <motion.div
              key={g.title}
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
              className="flex gap-4 p-4 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D]"
            >
              <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl" style={{ background: g.bg }}>
                <Icon className="w-5 h-5" style={{ color: g.accent }} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-[#F1F5F9] font-semibold text-sm mb-1">{g.title}</h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{g.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.phase}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + i * 0.09 }}
            className="p-4 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D]"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ background: s.accent }}>
                {i + 1}
              </span>
              <p className="text-xs font-semibold" style={{ color: s.accent }}>{s.phase}</p>
            </div>
            <div className="space-y-2">
              {s.items.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0 mt-0.5 text-[#1E3A5F]" strokeWidth={2} />
                  <span className="text-[#94A3B8] text-xs leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-5 flex items-center gap-2 text-[#64748B] text-xs"
      >
        <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
        <span>
          {t(
            lang,
            "Biggest challenge: re-architecting scanners to work inside the App Sandbox.",
            "Tantangan terbesar: re-arsitektur scanner agar bisa berjalan di dalam App Sandbox."
          )}
        </span>
      </motion.div>
    </div>
  );
}
