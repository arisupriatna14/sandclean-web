"use client";

import { motion } from "framer-motion";
import { Wind, Heart } from "lucide-react";
import { useLang } from "../LangContext";
import { t } from "../translations";

export default function ClosingSlide() {
  const lang = useLang();

  const takeaways = [
    t(lang, "Build native — SwiftUI + Swift Concurrency is genuinely great", "Bangun native — SwiftUI + Swift Concurrency benar-benar luar biasa"),
    t(lang, "Automate everything — Makefile for archive → dmg → notarize", "Otomatiskan segalanya — Makefile untuk archive → dmg → notarize"),
    t(lang, "Open-source is a feature, not just a license", "Open-source adalah fitur, bukan sekadar lisensi"),
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center mb-8 shadow-lg shadow-[#3B82F6]/20"
      >
        <Wind className="w-8 h-8 text-white" strokeWidth={1.5} />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-5xl sm:text-6xl font-extrabold text-[#F1F5F9] tracking-tight"
      >
        SandClean
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-3 text-[#94A3B8] text-lg"
      >
        {t(lang, "Free · Open-source · Native · No subscriptions.", "Gratis · Open-source · Native · Tanpa langganan.")}
      </motion.p>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.3 } } }}
        className="mt-10 text-left space-y-2 max-w-lg w-full"
      >
        <p className="text-[#64748B] text-xs font-semibold uppercase tracking-widest mb-4 text-center">
          {t(lang, "Key Takeaways", "Poin Utama")}
        </p>
        {takeaways.map((item) => (
          <motion.div
            key={item}
            variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0, transition: { duration: 0.35 } } }}
            className="flex items-start gap-3"
          >
            <Heart className="w-3.5 h-3.5 text-[#3B82F6] flex-shrink-0 mt-0.5" strokeWidth={2} />
            <span className="text-[#94A3B8] text-sm">{item}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-10"
      >
        <a
          href="https://github.com/arisupriatna14/sandclean/releases/download/v1.0.0/SandClean-1.0.dmg"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-sm transition-colors duration-200 shadow-lg shadow-[#3B82F6]/20"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          {t(lang, "Download DMG", "Unduh DMG")}
        </a>
        <p className="mt-3 text-xs text-[#64748B]">
          {t(lang, "Requires Full Disk Access · macOS 13 Ventura or later", "Memerlukan Full Disk Access · macOS 13 Ventura atau lebih baru")}
        </p>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#8B5CF6]/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
