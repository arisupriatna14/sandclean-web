"use client";

import { motion } from "framer-motion";
import { Wind } from "lucide-react";
import { useLang } from "../LangContext";
import { t } from "../translations";

export default function TitleSlide() {
  const lang = useLang();
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 select-none">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#1E3A5F] bg-[#0F1F3D] mb-10"
      >
        <Wind className="w-4 h-4 text-[#3B82F6]" strokeWidth={1.8} />
        <span className="text-[#94A3B8] text-sm font-mono">SandClean — {t(lang, "Dev Story", "Kisah Pengembangan")}</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="text-6xl sm:text-7xl font-extrabold text-[#F1F5F9] tracking-tight leading-tight"
      >
        {t(lang, "Building", "Membangun")}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">
          SandClean
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.22 }}
        className="mt-6 text-xl text-[#94A3B8] max-w-xl leading-relaxed"
      >
        {t(
          lang,
          "How I built a native macOS disk cleaner from scratch — Swift, SwiftUI, and zero subscriptions.",
          "Bagaimana saya membangun disk cleaner macOS native dari nol — Swift, SwiftUI, tanpa biaya langganan."
        )}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-14 flex items-center gap-6 text-[#64748B] text-sm font-mono"
      >
        <span>Ari Supriatna</span>
        <span className="w-px h-4 bg-[#1E3A5F]" />
        <span>2026</span>
        <span className="w-px h-4 bg-[#1E3A5F]" />
        <span>Swift · SwiftUI · macOS</span>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
