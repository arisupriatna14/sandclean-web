"use client";

import { motion } from "framer-motion";
import { Terminal, Lock, Minus } from "lucide-react";
import CodeBlock from "../CodeBlock";

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

  const cli = ["Docker Cleanup", "Homebrew Deep Clean", "Simulator Manager", "Startup Items", "Storage Timeline", "Language Pack"];

  const blocked = [
    {
      name: "Mail Attachments",
      why: "your mail stays off-limits even after you grant the Home folder",
    },
    {
      name: "Applications",
      why: "it can see your apps but not remove them — and removing them is the entire point",
    },
  ];

  const others = [
    { label: "Updates", dmg: "updates itself", as: "waits for the App Store" },
    { label: "Stubborn files", dmg: "can ask for your password", as: "just moves them to Trash" },
    { label: "AI Analysis", dmg: "uses Claude CLI", as: "needs your own API key" },
    { label: "Extras", dmg: "Widget + Finder menu", as: "neither is included" },
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
                {"6 — work by running other tools, which the sandbox forbids"}
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
                {"2 — blocked even after the user grants their Home folder"}
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
                {"And the things that quietly get worse"}
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
