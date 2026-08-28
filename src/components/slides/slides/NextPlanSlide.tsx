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
      label: t(lang, "A separate target, not a flag", "Target terpisah, bukan sekadar flag"),
      detail: t(lang, "SandCleanAppStore — same source tree, own bundle ID, own App Group, compiled with APPSTORE", "SandCleanAppStore — source tree sama, bundle ID sendiri, App Group sendiri, dikompilasi dengan APPSTORE"),
      accent: "#10B981",
    },
    {
      n: "2",
      label: t(lang, "Security-scoped bookmarks, not FDA", "Security-scoped bookmark, bukan FDA"),
      detail: t(lang, "The user grants a folder once via NSOpenPanel; access is restored on every launch", "User memberi akses folder sekali via NSOpenPanel; aksesnya dipulihkan tiap launch"),
      accent: "#8B5CF6",
    },
    {
      n: "3",
      label: t(lang, "AI Analysis: CLI → API", "AI Analysis: CLI → API"),
      detail: t(lang, "The sandbox cannot spawn the Claude CLI, so the App Store build takes an API key stored in Keychain", "Sandbox tidak bisa menjalankan Claude CLI, jadi build App Store memakai API key yang disimpan di Keychain"),
      accent: "#F97316",
    },
    {
      n: "4",
      label: t(lang, "Hide what cannot run", "Sembunyikan yang tidak bisa jalan"),
      detail: t(lang, "8 categories excluded from the App Store build — 6 need a CLI, 2 stay TCC-blocked", "8 kategori dikeluarkan dari build App Store — 6 butuh CLI, 2 tetap diblokir TCC"),
      accent: "#F59E0B",
    },
    {
      n: "5",
      label: t(lang, "Dual distribution", "Distribusi ganda"),
      detail: t(lang, "make release for the DMG, make appstore-upload for App Store Connect. Both from one repo.", "make release untuk DMG, make appstore-upload untuk App Store Connect. Keduanya dari satu repo."),
      accent: "#EC4899",
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-4xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-8">
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          10 — {t(lang, "App Store", "App Store")}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {t(lang, "From DMG to App Store.", "Dari DMG ke App Store.")}
        </h2>
        <div className="mt-3 flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" strokeWidth={2} />
            <span className="text-[#94A3B8] text-sm">
              {t(lang, "Shipped as a second, sandboxed target", "Dirilis sebagai target kedua yang sandboxed")}
            </span>
          </div>
          <span className="text-[#1E3A5F]">·</span>
          <span className="text-[#64748B] text-sm font-mono">
            {t(lang, "16 of 24 features", "16 dari 24 fitur")}
          </span>
          <span className="text-[#1E3A5F]">·</span>
          <span className="text-[#64748B] text-sm font-mono">com.arisupriatna.SandCleanAS</span>
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
          "The original plan was to request the Full Disk Access entitlement from Apple. It was dropped — a sandboxed app cannot read outside its container even with FDA granted.",
          "Rencana awalnya adalah mengajukan entitlement Full Disk Access ke Apple. Rencana itu dibatalkan — app yang sandboxed tetap tidak bisa membaca di luar container-nya walau FDA sudah diberikan."
        )}{" "}
        <a href="/slides-2" className="text-[#3B82F6] hover:text-[#8B5CF6] transition-colors">
          {t(lang, "Part 2 →", "Bagian 2 →")}
        </a>
      </motion.p>
    </div>
  );
}
