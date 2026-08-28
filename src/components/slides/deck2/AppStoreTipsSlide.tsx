"use client";

import { motion } from "framer-motion";
import { Fingerprint, FileCheck2, EyeOff, RefreshCcwDot, TerminalSquare, FlaskConical, AlertTriangle } from "lucide-react";
import { useLang } from "../LangContext";
import { t } from "../translations";

export default function AppStoreTipsSlide() {
  const lang = useLang();

  const tips = [
    {
      icon: Fingerprint,
      accent: "#3B82F6",
      title: t(lang, "Give it its own identity", "Beri identitasnya sendiri"),
      detail: t(lang, "A separate bundle ID and its own App Group. To Apple this is a different app, with its own App Store Connect record — and sharing storage with the DMG version would let two apps fight over the same data.", "Bundle ID terpisah dan App Group sendiri. Bagi Apple ini app yang berbeda, dengan record App Store Connect sendiri — dan berbagi penyimpanan dengan versi DMG akan membuat dua app berebut data yang sama."),
    },
    {
      icon: FileCheck2,
      accent: "#8B5CF6",
      title: t(lang, "Answer the encryption question once", "Jawab pertanyaan enkripsi sekali saja"),
      detail: t(lang, "Put ITSAppUsesNonExemptEncryption in the plist. Leave it out and App Store Connect stops and asks you about export compliance on every single upload, forever.", "Taruh ITSAppUsesNonExemptEncryption di plist. Kalau tidak, App Store Connect akan berhenti dan menanyakan export compliance di setiap unggahan, selamanya."),
    },
    {
      icon: EyeOff,
      accent: "#F97316",
      title: t(lang, "Hide what cannot run", "Sembunyikan yang tidak bisa jalan"),
      detail: t(lang, "Do not ship a button that fails because the sandbox blocked it. A reviewer who taps it sees a broken app, and that is a rejection. Remove the feature from the build instead.", "Jangan merilis tombol yang gagal karena diblokir sandbox. Reviewer yang menekannya melihat app yang rusak, dan itu berarti penolakan. Lebih baik keluarkan fiturnya dari build."),
    },
    {
      icon: RefreshCcwDot,
      accent: "#10B981",
      title: t(lang, "Remove self-updating entirely", "Hapus update mandiri sepenuhnya"),
      detail: t(lang, "App Store apps are updated by the App Store. Sparkle has to be left out of the build, not merely hidden — shipping the code at all is grounds for rejection.", "App di App Store di-update oleh App Store. Sparkle harus dikeluarkan dari build, bukan sekadar disembunyikan — menyertakan kodenya saja sudah jadi alasan penolakan."),
    },
    {
      icon: TerminalSquare,
      accent: "#F59E0B",
      title: t(lang, "Upload from the command line", "Unggah dari command line"),
      detail: t(lang, "With destination: upload in ExportOptions, the export step sends the build to App Store Connect by itself. No Xcode Organizer, no Transporter, and it is one line in a Makefile.", "Dengan destination: upload di ExportOptions, langkah export mengirim sendiri build-nya ke App Store Connect. Tanpa Xcode Organizer, tanpa Transporter, dan cukup satu baris di Makefile."),
    },
    {
      icon: FlaskConical,
      accent: "#EC4899",
      title: t(lang, "Test with the sandbox on", "Uji dengan sandbox menyala"),
      detail: t(lang, "This is the easiest one to miss. Blocked paths do not crash — they quietly return nothing. Everything looks fine in development, and half the app is empty on a reviewer's Mac.", "Ini yang paling mudah terlewat. Path yang diblokir tidak membuat crash — ia diam-diam mengembalikan kosong. Semua terlihat baik saat development, lalu separuh app kosong di Mac reviewer."),
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-5">
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          14 — {"Tips"}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {"Before you hit upload."}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {tips.map((tip, i) => {
          const Icon = tip.icon;
          return (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="p-4 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D]"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <div
                  className="inline-flex items-center justify-center w-7 h-7 rounded-lg flex-shrink-0"
                  style={{ background: tip.accent + "15" }}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: tip.accent }} strokeWidth={1.8} />
                </div>
                <span className="text-[20px] font-bold font-mono leading-none" style={{ color: tip.accent }}>
                  0{i + 1}
                </span>
              </div>
              <p className="text-[#F1F5F9] font-semibold text-xs mb-1">{tip.title}</p>
              <p className="text-[#64748B] text-xs leading-relaxed">{tip.detail}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
        className="mt-4 flex items-start gap-3 p-3.5 rounded-xl border border-[#F59E0B]/30 bg-[#F59E0B]/5"
      >
        <AlertTriangle className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" strokeWidth={2} />
        <p className="text-[#94A3B8] text-xs leading-relaxed">
          <span className="text-[#F1F5F9] font-semibold">
            {t(lang, "The one that cost the most time: ", "Yang paling banyak memakan waktu: ")}
          </span>
          {t(lang, "two versions means two settings files, and Xcode only knows to leave out the one it is actually using. The other gets copied into the app as a stray file full of placeholders that were never filled in — and App Store validation rejects the upload without explaining why.", "dua versi berarti dua file setting, dan Xcode hanya tahu mengecualikan yang sedang dipakainya. Satunya ikut tersalin ke dalam app sebagai file nyasar berisi placeholder yang tidak pernah terisi — dan validasi App Store menolak unggahannya tanpa menjelaskan kenapa.")}
        </p>
      </motion.div>
    </div>
  );
}
