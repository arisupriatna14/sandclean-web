"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { useLang } from "../LangContext";
import { t } from "../translations";

export default function NextPlanSlide() {
  const lang = useLang();

  const phases = [
    {
      n: "1",
      label: t(lang, "Sandboxing Foundation", "Fondasi Sandboxing"),
      detail: t(lang, "App Sandbox + FDA entitlement, App Group container, guard ProcessService calls", "App Sandbox + entitlement FDA, container App Group, guard ProcessService"),
      accent: "#10B981",
    },
    {
      n: "2",
      label: t(lang, "AI Analysis: CLI → API", "AI Analysis: CLI → API"),
      detail: t(lang, "ClaudeAPIService via URLSession, API key stored in Keychain, Settings UI update", "ClaudeAPIService via URLSession, API key di Keychain, update Settings UI"),
      accent: "#8B5CF6",
    },
    {
      n: "3",
      label: t(lang, "Metadata & Assets", "Metadata & Aset"),
      detail: t(lang, "Privacy strings, screenshots 1280×800 & 1440×900, App Store Connect record", "Privacy strings, screenshot 1280×800 & 1440×900, record App Store Connect"),
      accent: "#F97316",
    },
    {
      n: "4",
      label: t(lang, "FDA Justification & Testing", "Justifikasi FDA & Pengujian"),
      detail: t(lang, "Submit FDA letter to Apple, full sandbox checklist, TestFlight internal", "Kirim surat FDA ke Apple, checklist sandbox lengkap, TestFlight internal"),
      accent: "#F59E0B",
    },
    {
      n: "5",
      label: t(lang, "Submit & Dual Distribution", "Submit & Distribusi Ganda"),
      detail: t(lang, "Upload build, App Review submission. Maintain DMG (power users) + App Store (general)", "Upload build, submit App Review. Pertahankan DMG (power user) + App Store (umum)"),
      accent: "#EC4899",
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-4xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-8">
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          10 — {t(lang, "Next Plan", "Rencana Selanjutnya")}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {t(lang, "From DMG to App Store.", "Dari DMG ke App Store.")}
        </h2>
        <div className="mt-3 flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" strokeWidth={2} />
            <span className="text-[#94A3B8] text-sm">
              {t(lang, "FDA strategy — same as CleanMyMac X & Gemini 2", "Strategi FDA — sama seperti CleanMyMac X & Gemini 2")}
            </span>
          </div>
          <span className="text-[#1E3A5F]">·</span>
          <span className="text-[#64748B] text-sm font-mono">
            {t(lang, "24 / 31 features retained", "24 / 31 fitur tetap berjalan")}
          </span>
          <span className="text-[#1E3A5F]">·</span>
          <span className="text-[#64748B] text-sm font-mono">~4–5 {t(lang, "weeks", "minggu")}</span>
        </div>
      </motion.div>

      <div className="flex flex-col">
        {phases.map((phase, i) => (
          <motion.div
            key={phase.n}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 + i * 0.1, duration: 0.4 }}
            className="flex gap-4"
          >
            {/* left column: circle + connector */}
            <div className="flex flex-col items-center w-9 flex-shrink-0">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white z-10 flex-shrink-0"
                style={{ background: phase.accent, boxShadow: `0 0 12px ${phase.accent}40` }}
              >
                {phase.n}
              </div>
              {i < phases.length - 1 && (
                <div className="w-px flex-1 my-1 opacity-30" style={{ background: phase.accent }} />
              )}
            </div>

            {/* card */}
            <div
              className={`flex-1 flex items-center gap-4 px-5 py-3.5 rounded-2xl border bg-[#0F1F3D] ${i < phases.length - 1 ? "mb-3" : ""}`}
              style={{ borderColor: phase.accent + "30" }}
            >
              <div className="flex-1">
                <p className="text-[#F1F5F9] font-semibold text-sm">{phase.label}</p>
                <p className="text-[#64748B] text-xs mt-0.5 leading-relaxed">{phase.detail}</p>
              </div>
              <ArrowRight className="w-4 h-4 flex-shrink-0 opacity-20" style={{ color: phase.accent }} strokeWidth={2} />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-6 text-[#64748B] text-xs pl-[52px] pr-4"
      >
        {t(
          lang,
          "Biggest challenge: FDA entitlement approval from Apple + re-architecting ProcessService calls.",
          "Tantangan terbesar: persetujuan entitlement FDA dari Apple + re-arsitektur ProcessService calls."
        )}
      </motion.p>
    </div>
  );
}
