"use client";

import { motion } from "framer-motion";
import { HardDrive, Store } from "lucide-react";

export default function ComparisonSlide() {

  const rows: [string, string, string][] = [
    ["Where you get it", "Downloaded from GitHub", "Mac App Store"],
    ["Sandbox", "Off", "On, and enforced"],
    ["Hardened Runtime", "Required", "Apple handles it"],
    ["Signed with", "Developer ID", "Apple Distribution"],
    ["Notarization", "You send it in", "Apple does it"],
    ["What it can read", "The whole disk", "Only folders you pick"],
    ["Things it can clean", "24", "16"],
    ["Stubborn files", "Can ask for your password", "Trash only"],
    ["Widget + Finder menu", "Included", "Not included"],
    ["Updates", "Updates itself", "Through the App Store"],
    ["Time to ship a fix", "Minutes", "Days, if review agrees"],
    ["Apple's cut", "0%", "15–30%"],
    ["Who it is for", "Developers", "Everyone else"],
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-5">
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          12 — {"Side by Side"}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {"Same code. Two products."}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D] overflow-hidden"
      >
        <div className="overflow-x-auto overflow-y-auto max-h-[56vh] scrollbar-none">
          <table className="w-full min-w-[520px] text-xs">
            <thead>
              <tr className="border-b border-[#1E3A5F]">
                <th className="text-left font-semibold text-[#64748B] px-4 py-2.5 w-1/3" />
                <th className="text-left font-semibold px-4 py-2.5">
                  <span className="inline-flex items-center gap-1.5 text-[#3B82F6]">
                    <HardDrive className="w-3.5 h-3.5" strokeWidth={2} /> DMG
                  </span>
                </th>
                <th className="text-left font-semibold px-4 py-2.5">
                  <span className="inline-flex items-center gap-1.5 text-[#8B5CF6]">
                    <Store className="w-3.5 h-3.5" strokeWidth={2} /> App Store
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, dmg, as], i) => (
                <motion.tr
                  key={label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.03 }}
                  className="border-b border-[#1E3A5F]/50 last:border-0"
                >
                  <td className="px-4 py-1.5 text-[#64748B]">{label}</td>
                  <td className="px-4 py-1.5 text-[#F1F5F9]">{dmg}</td>
                  <td className="px-4 py-1.5 text-[#94A3B8]">{as}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 text-[#94A3B8] text-xs leading-relaxed"
      >
        <span className="text-[#F1F5F9] font-semibold">{"Why keep both? "}</span>
        {"The DMG is the full product, for the people it was built for. The App Store version is smaller and safer, and it reaches everyone who would never download an app from GitHub in the first place. Keeping both costs one extra target — not a second codebase."}
      </motion.p>
    </div>
  );
}
