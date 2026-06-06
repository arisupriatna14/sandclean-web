"use client";

import { motion } from "framer-motion";
import { Lightbulb, CheckCircle2 } from "lucide-react";
import { useLang } from "../LangContext";
import { t } from "../translations";

export default function IdeationSlide() {
  const lang = useLang();

  const principles = [
    { text: t(lang, "Native SwiftUI — no Electron, no web wrapper", "Native SwiftUI — tanpa Electron, tanpa web wrapper"), accent: "#3B82F6" },
    { text: t(lang, "Free & open-source — no subscriptions, ever", "Gratis & open-source — tidak ada langganan, selamanya"), accent: "#3B82F6" },
{ text: t(lang, "Full Disk Access, requested once — no hidden tricks", "Full Disk Access, diminta sekali — tidak ada trik tersembunyi"), accent: "#8B5CF6" },
    { text: t(lang, "Developer-aware — knows Xcode, Homebrew, npm, Cargo", "Paham developer — tahu Xcode, Homebrew, npm, Cargo"), accent: "#F97316" },
    { text: t(lang, "macOS 13+ only — use modern APIs, no legacy cruft", "macOS 13+ saja — gunakan API modern, tanpa kode lama"), accent: "#F97316" },
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
          02 — {t(lang, "Ideation", "Ideasi")}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {t(lang, "What if I just built it myself?", "Bagaimana kalau saya bangun sendiri?")}
        </h2>
        <p className="mt-4 text-[#94A3B8] text-lg max-w-2xl">
          {t(
            lang,
            "The idea started from frustration. I wanted a cleaner that was transparent, free, and actually understood how developers use their machines.",
            "Ide ini lahir dari rasa frustrasi. Saya ingin cleaner yang transparan, gratis, dan benar-benar memahami cara developer menggunakan Mac mereka."
          )}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="flex items-start gap-4 p-5 rounded-2xl border border-[#3B82F6]/30 bg-[#3B82F6]/5 mb-8"
      >
        <Lightbulb className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" strokeWidth={1.8} />
        <p className="text-[#F1F5F9] text-sm leading-relaxed">
          <span className="font-semibold">{t(lang, "Core insight:", "Insight utama:")}</span>{" "}
          {t(
            lang,
            "Developers already know where the mess lives. They just need a tool that lets them act on that knowledge safely and quickly.",
            "Developer sudah tahu di mana letak sampahnya. Mereka hanya butuh tools yang memungkinkan mereka bertindak dengan aman dan cepat."
          )}
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        {principles.map((p) => (
          <motion.div
            key={p.text}
            variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
            className="flex items-center gap-3"
          >
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: p.accent }} strokeWidth={1.8} />
            <span className="text-[#94A3B8] text-sm">{p.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
