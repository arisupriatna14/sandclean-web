"use client";

import { motion } from "framer-motion";
import { Terminal, Lock, Minus } from "lucide-react";
import CodeBlock from "../CodeBlock";
import { useLang } from "../LangContext";
import { t } from "../translations";

const CODE = `private static let cliDependentCategories: Set<ScanCategory> =
    [.docker, .homebrewCleaner, .simulatorManager, .startupManager,
     .storageTimeline, .languagePack]

private static let sandboxBlockedCategories: Set<ScanCategory> =
    [.mailCleaner, .applications]

var isAvailableInThisBuild: Bool {
    #if APPSTORE
    return !Self.cliDependentCategories.contains(self)
        && !Self.sandboxBlockedCategories.contains(self)
    #else
    return true
    #endif
}`;

export default function SandboxCostSlide() {
  const lang = useLang();

  const cli = ["Docker Cleanup", "Homebrew Deep Clean", "Simulator Manager", "Startup Items", "Storage Timeline", "Language Pack"];

  const blocked = [
    {
      name: "Mail Attachments",
      why: t(lang, "your mail stays off-limits even after you grant the Home folder", "email kamu tetap tidak bisa disentuh walau folder Home sudah diizinkan"),
    },
    {
      name: "Applications",
      why: t(lang, "it can see your apps but not remove them — and removing them is the entire point", "bisa melihat app kamu tapi tidak bisa menghapusnya — padahal menghapus itu seluruh gunanya"),
    },
  ];

  const others = [
    { label: t(lang, "Updates", "Update"), dmg: t(lang, "updates itself", "update sendiri"), as: t(lang, "waits for the App Store", "menunggu App Store") },
    { label: t(lang, "Stubborn files", "File bandel"), dmg: t(lang, "can ask for your password", "bisa meminta password kamu"), as: t(lang, "just moves them to Trash", "cuma memindahkannya ke Trash") },
    { label: "AI Analysis", dmg: t(lang, "uses Claude CLI", "memakai Claude CLI"), as: t(lang, "needs your own API key", "butuh API key kamu sendiri") },
    { label: t(lang, "Extras", "Ekstra"), dmg: t(lang, "Widget + Finder menu", "Widget + menu Finder"), as: t(lang, "neither is included", "keduanya tidak ikut") },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-5">
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          09 — {"What You Lose"}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {"24 features become 16."}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          className="sm:col-span-2"
        >
          <CodeBlock code={CODE} caption="ScanCategory.swift" accent="#EF4444" highlight={[9, 10, 11]} />
        </motion.div>

        <div className="sm:col-span-3 flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="p-3.5 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D]"
          >
            <div className="flex items-center gap-2 mb-2.5">
              <Terminal className="w-3.5 h-3.5 text-[#F97316]" strokeWidth={2} />
              <p className="text-[#F1F5F9] text-xs font-semibold">
                {t(lang, "6 — work by running other tools, which the sandbox forbids", "6 — bekerja dengan menjalankan tool lain, yang dilarang sandbox")}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cli.map((c) => (
                <span key={c} className="px-2 py-1 rounded-lg border border-[#F97316]/25 bg-[#F97316]/10 text-[#94A3B8] text-[10px] font-mono">
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="p-3.5 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D]"
          >
            <div className="flex items-center gap-2 mb-2.5">
              <Lock className="w-3.5 h-3.5 text-[#EF4444]" strokeWidth={2} />
              <p className="text-[#F1F5F9] text-xs font-semibold">
                {t(lang, "2 — blocked even after the user grants their Home folder", "2 — tetap diblokir walau user sudah mengizinkan folder Home")}
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              {blocked.map((b) => (
                <p key={b.name} className="text-[#64748B] text-xs leading-snug">
                  <code className="text-[#EF4444] font-mono">{b.name}</code> — {b.why}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="p-3.5 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D]"
          >
            <div className="flex items-center gap-2 mb-2.5">
              <Minus className="w-3.5 h-3.5 text-[#8B5CF6]" strokeWidth={2} />
              <p className="text-[#F1F5F9] text-xs font-semibold">
                {t(lang, "And the things that quietly get worse", "Dan hal-hal yang diam-diam jadi lebih terbatas")}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {others.map((o) => (
                <p key={o.label} className="text-xs leading-snug">
                  <span className="text-[#94A3B8]">{o.label}: </span>
                  <span className="text-[#64748B]">{o.dmg}</span>
                  <span className="text-[#334155]"> → </span>
                  <span className="text-[#8B5CF6]">{o.as}</span>
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
