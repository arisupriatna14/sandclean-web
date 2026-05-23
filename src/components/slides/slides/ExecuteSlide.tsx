"use client";

import { motion } from "framer-motion";
import { Lightbulb, Bot, Code2, Hammer, FlaskConical, ArrowRight } from "lucide-react";
import { useLang } from "../LangContext";
import { t } from "../translations";

export default function ExecuteSlide() {
  const lang = useLang();

  const steps = [
    {
      icon: Lightbulb,
      title: t(lang, "Ideation", "Ideasi"),
      desc: t(lang, "Define the problem, scope the feature, sketch the approach", "Definisikan masalah, tentukan scope fitur, sketsa pendekatan"),
      accent: "#F97316",
      bg: "#F9731615",
    },
    {
      icon: Bot,
      title: t(lang, "Plan with Claude", "Plan dengan Claude"),
      desc: t(lang, "Use Claude to design architecture, write specs, and validate trade-offs before touching code", "Gunakan Claude untuk desain arsitektur, tulis spesifikasi, dan validasi trade-off sebelum mulai coding"),
      accent: "#8B5CF6",
      bg: "#8B5CF615",
    },
    {
      icon: Code2,
      title: t(lang, "Execute Code", "Eksekusi Kode"),
      desc: t(lang, "Write Swift — scanner protocol, ViewModel, SwiftUI view. Claude assists with boilerplate and edge cases", "Tulis Swift — scanner protocol, ViewModel, SwiftUI view. Claude bantu boilerplate dan edge case"),
      accent: "#3B82F6",
      bg: "#3B82F615",
    },
    {
      icon: Hammer,
      title: t(lang, "Build", "Build"),
      desc: t(lang, "XcodeGen generates .xcodeproj from project.yml. xcodebuild compiles and links", "XcodeGen generate .xcodeproj dari project.yml. xcodebuild compile dan link"),
      accent: "#10B981",
      bg: "#10B98115",
    },
    {
      icon: FlaskConical,
      title: t(lang, "Run & Test", "Run & Test"),
      desc: t(lang, "Launch on real macOS, scan with actual files, verify safety levels and Trash behavior", "Jalankan di macOS sungguhan, scan dengan file nyata, verifikasi safety level dan perilaku Trash"),
      accent: "#3B82F6",
      bg: "#3B82F615",
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-8"
      >
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          03 — {t(lang, "Execute", "Eksekusi")}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {t(lang, "From idea to running app.", "Dari ide ke aplikasi berjalan.")}
        </h2>
      </motion.div>

      {/* Flow */}
      <div className="flex flex-col sm:flex-row items-stretch gap-3">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="flex sm:flex-col flex-row items-start sm:items-stretch gap-3 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="flex-1 p-4 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D] flex flex-col gap-3"
                style={{ borderColor: `${s.accent}25` }}
              >
                {/* Step number + icon */}
                <div className="flex items-center gap-2">
                  <div
                    className="inline-flex items-center justify-center w-9 h-9 rounded-xl flex-shrink-0"
                    style={{ background: s.bg }}
                  >
                    <Icon className="w-4 h-4" style={{ color: s.accent }} strokeWidth={1.8} />
                  </div>
                  <span
                    className="text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center text-white flex-shrink-0"
                    style={{ background: s.accent }}
                  >
                    {i + 1}
                  </span>
                </div>

                <div>
                  <p className="text-[#F1F5F9] font-semibold text-sm mb-1">{s.title}</p>
                  <p className="text-[#64748B] text-xs leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div className="hidden sm:flex items-center justify-center self-center flex-shrink-0 -mx-1.5 z-10">
                  <ArrowRight className="w-4 h-4 text-[#1E3A5F]" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Claude callout */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-5 flex items-center gap-3 px-4 py-3 rounded-xl border border-[#8B5CF6]/30 bg-[#8B5CF6]/5"
      >
        <Bot className="w-4 h-4 text-[#8B5CF6] flex-shrink-0" strokeWidth={1.8} />
        <p className="text-[#94A3B8] text-xs leading-relaxed">
          <span className="text-[#F1F5F9] font-semibold">Claude </span>
          {t(
            lang,
            "acts as a pair programmer throughout — planning architecture, writing boilerplate, and reviewing edge cases.",
            "berperan sebagai pair programmer sepanjang proses — merencanakan arsitektur, menulis boilerplate, dan mereview edge case."
          )}
        </p>
      </motion.div>
    </div>
  );
}
