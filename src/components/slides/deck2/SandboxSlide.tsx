"use client";

import { motion } from "framer-motion";
import { Ban, Check, X, ShieldQuestion } from "lucide-react";
import { useLang } from "../LangContext";
import { t } from "../translations";

export default function SandboxSlide() {
  const lang = useLang();

  const blocked = [
    {
      label: t(lang, "Run other programs", "Menjalankan program lain"),
      detail: t(lang, "no docker, brew, simctl, launchctl", "tidak ada docker, brew, simctl, launchctl"),
    },
    {
      label: t(lang, "Open your real folders", "Membuka folder kamu yang asli"),
      detail: t(lang, "unless you picked them yourself", "kecuali kamu sendiri yang memilihnya"),
    },
    {
      label: t(lang, "Read what other apps saved", "Membaca simpanan app lain"),
      detail: t(lang, "Mail, Photos, browser data", "Mail, Photos, data browser"),
    },
    {
      label: t(lang, "Ask for your password", "Meminta password kamu"),
      detail: t(lang, "no admin rights, ever", "tidak ada hak admin, sama sekali"),
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-5">
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          04 — {"What Sandboxed Means"}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {"The app gets one folder. That's all."}
        </h2>
        <p className="mt-3 text-[#94A3B8] text-lg leading-relaxed max-w-3xl">
          {t(lang, "macOS locks the app inside a single folder and lets it believe that folder is the whole Mac. Every App Store app runs this way. Apps you download yourself do not.", "macOS mengunci app di dalam satu folder dan membiarkannya percaya folder itulah seluruh Mac. Semua app App Store berjalan begini. App yang kamu unduh sendiri tidak.")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          className="p-5 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D]"
        >
          <p className="text-[#F1F5F9] font-semibold text-sm mb-4">
            {t(lang, "Same line of code, two results", "Baris kode yang sama, dua hasil")}
          </p>

          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-[#10B981]/25 bg-[#10B981]/5 p-3">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Check className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" strokeWidth={2.5} />
                <p className="text-[#10B981] text-xs font-semibold">
                  {t(lang, "Not sandboxed — the DMG version", "Tidak sandboxed — versi DMG")}
                </p>
              </div>
              <code className="block text-sm font-mono text-[#94A3B8]">open ~/Documents</code>
              <p className="text-[#64748B] text-xs mt-1.5 leading-relaxed">
                {t(lang, "→ your real Documents, with all your files in it.", "→ Documents kamu yang asli, lengkap dengan semua file di dalamnya.")}
              </p>
            </div>

            <div className="rounded-xl border border-[#F97316]/25 bg-[#F97316]/5 p-3">
              <div className="flex items-center gap-1.5 mb-1.5">
                <X className="w-3.5 h-3.5 text-[#F97316] flex-shrink-0" strokeWidth={2.5} />
                <p className="text-[#F97316] text-xs font-semibold">
                  {t(lang, "Sandboxed — the App Store version", "Sandboxed — versi App Store")}
                </p>
              </div>
              <code className="block text-sm font-mono text-[#94A3B8]">open ~/Documents</code>
              <p className="text-[#64748B] text-xs mt-1.5 leading-relaxed">
                {t(lang, "→ an empty folder that belongs to the app alone, tucked away in here:", "→ folder kosong milik app itu sendiri, tersembunyi di sini:")}
              </p>
              <code className="block text-sm font-mono text-[#3B82F6] mt-2 leading-relaxed break-all">
                ~/Library/Containers/
                <br />
                com.arisupriatna.SandCleanAS/Data
              </code>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
          className="p-5 rounded-2xl border border-[#EF4444]/25 bg-[#EF4444]/5"
        >
          <div className="flex items-center gap-2 mb-1">
            <Ban className="w-4 h-4 text-[#EF4444]" strokeWidth={1.8} />
            <p className="text-[#F1F5F9] font-semibold text-sm">
              {t(lang, "Things it can never do", "Yang tidak akan pernah bisa dilakukan")}
            </p>
          </div>
          <p className="text-[#64748B] text-xs mb-4 leading-relaxed">
            {t(lang, "Not “ask and be refused” — the request never leaves the app.", "Bukan “minta lalu ditolak” — permintaannya bahkan tidak pernah keluar dari app.")}
          </p>

          <div className="flex flex-col gap-2.5">
            {blocked.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.08 }}
                className="flex items-start gap-2.5"
              >
                <span className="text-[#EF4444] text-xs mt-0.5 flex-shrink-0">✕</span>
                <div>
                  <p className="text-[#F1F5F9] text-xs font-semibold">{b.label}</p>
                  <p className="text-[#64748B] text-xs">{b.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-start gap-2.5 mt-4 pt-3 border-t border-[#EF4444]/20">
            <ShieldQuestion className="w-3.5 h-3.5 text-[#EF4444] flex-shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-[#94A3B8] text-xs leading-relaxed">
              <span className="text-[#F1F5F9] font-semibold">{t(lang, "Why Apple does this: ", "Kenapa Apple begini: ")}</span>
              {t(lang, "a malicious app — or an honest one with a bug — cannot reach anything it was not explicitly handed.", "app jahat — atau app jujur yang punya bug — tidak bisa menjangkau apa pun yang tidak diserahkan secara eksplisit kepadanya.")}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-4 text-[#94A3B8] text-xs leading-relaxed"
      >
        <span className="text-[#F1F5F9] font-semibold">{t(lang, "The catch for a cleaner: ", "Masalahnya untuk sebuah cleaner: ")}</span>
        {t(lang, "SandClean's whole job is looking at folders it did not create and running the tools that made the mess. Inside the sandbox it can do neither — unless you hand it the folder yourself.", "Seluruh pekerjaan SandClean adalah melihat folder yang bukan buatannya dan menjalankan tool yang membuat berantakan. Di dalam sandbox ia tidak bisa keduanya — kecuali kamu sendiri yang menyerahkan foldernya.")}
      </motion.p>
    </div>
  );
}
