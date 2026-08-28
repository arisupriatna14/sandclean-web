"use client";

import { motion } from "framer-motion";
import { HardDrive, Store } from "lucide-react";
import { useLang } from "../LangContext";
import { t } from "../translations";

export default function ComparisonSlide() {
  const lang = useLang();

  const rows: [string, string, string][] = [
    [t(lang, "Where you get it", "Di mana mendapatkannya"), t(lang, "Downloaded from GitHub", "Diunduh dari GitHub"), "Mac App Store"],
    ["Sandbox", t(lang, "Off", "Mati"), t(lang, "On, and enforced", "Nyala, dan ditegakkan")],
    ["Hardened Runtime", t(lang, "Required", "Wajib"), t(lang, "Apple handles it", "Apple yang mengurus")],
    [t(lang, "Signed with", "Ditandatangani dengan"), "Developer ID", "Apple Distribution"],
    ["Notarization", t(lang, "You send it in", "Kamu yang mengirimnya"), t(lang, "Apple does it", "Apple yang melakukannya")],
    [t(lang, "What it can read", "Apa yang bisa dibaca"), t(lang, "The whole disk", "Seluruh disk"), t(lang, "Only folders you pick", "Hanya folder yang kamu pilih")],
    [t(lang, "Things it can clean", "Hal yang bisa dibersihkan"), "24", "16"],
    [t(lang, "Stubborn files", "File bandel"), t(lang, "Can ask for your password", "Bisa meminta password kamu"), t(lang, "Trash only", "Hanya Trash")],
    [t(lang, "Widget + Finder menu", "Widget + menu Finder"), t(lang, "Included", "Ikut disertakan"), t(lang, "Not included", "Tidak disertakan")],
    [t(lang, "Updates", "Update"), t(lang, "Updates itself", "Update sendiri"), t(lang, "Through the App Store", "Lewat App Store")],
    [t(lang, "Time to ship a fix", "Waktu merilis perbaikan"), t(lang, "Minutes", "Menit"), t(lang, "Days, if review agrees", "Berhari-hari, kalau review setuju")],
    [t(lang, "Apple's cut", "Potongan Apple"), "0%", "15–30%"],
    [t(lang, "Who it is for", "Untuk siapa"), t(lang, "Developers", "Developer"), t(lang, "Everyone else", "Semua orang lain")],
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
        <span className="text-[#F1F5F9] font-semibold">{t(lang, "Why keep both? ", "Kenapa mempertahankan keduanya? ")}</span>
        {t(lang, "The DMG is the full product, for the people it was built for. The App Store version is smaller and safer, and it reaches everyone who would never download an app from GitHub in the first place. Keeping both costs one extra target — not a second codebase.", "DMG adalah produk utuhnya, untuk orang-orang yang memang jadi tujuannya dibangun. Versi App Store lebih kecil dan lebih aman, dan menjangkau semua orang yang memang tidak akan pernah mengunduh app dari GitHub. Mempertahankan keduanya cuma butuh satu target tambahan — bukan codebase kedua.")}
      </motion.p>
    </div>
  );
}
