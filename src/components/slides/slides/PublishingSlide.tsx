"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Shield, Package, Upload, Stamp, Info, X } from "lucide-react";
import { useLang } from "../LangContext";
import { t } from "../translations";

interface StepInfo {
  command: string;
  title: string;
  detail: string;
  info: string;
  accent: string;
  icon: React.ElementType;
}

function InfoModal({ step, onClose }: { step: StepInfo; onClose: () => void }) {
  const Icon = step.icon;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center px-6"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 16 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative w-full max-w-md rounded-2xl border bg-[#0A1628] p-6 shadow-2xl"
          style={{ borderColor: step.accent + "40" }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#64748B] hover:text-[#94A3B8] transition-colors"
          >
            <X className="w-4 h-4" strokeWidth={2} />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: step.accent + "20" }}>
              <Icon className="w-4 h-4" style={{ color: step.accent }} strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-[#F1F5F9] font-bold text-sm">{step.title}</p>
              <code className="text-xs font-mono" style={{ color: step.accent }}>{step.command}</code>
            </div>
          </div>

          <p className="text-[#94A3B8] text-sm leading-relaxed">{step.info}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function PublishingSlide() {
  const lang = useLang();
  const [activeStep, setActiveStep] = useState<StepInfo | null>(null);

  const steps: StepInfo[] = [
    {
      icon: Package,
      command: "make archive",
      title: t(lang, "Archive", "Arsip"),
      detail: t(lang, "xcodebuild archive with Developer ID certificate + Hardened Runtime", "xcodebuild archive dengan sertifikat Developer ID + Hardened Runtime"),
      info: t(
        lang,
        "Compiles the app using xcodebuild with the Developer ID Application certificate and Hardened Runtime enabled. The result is an .xcarchive bundle saved to ~/Library/Developer/Xcode/Archives/. Hardened Runtime is required by Apple for notarization — it restricts the process from running unsigned code or accessing sensitive APIs without explicit entitlements.",
        "Mengkompilasi app menggunakan xcodebuild dengan sertifikat Developer ID Application dan Hardened Runtime aktif. Hasilnya adalah bundle .xcarchive yang disimpan di ~/Library/Developer/Xcode/Archives/. Hardened Runtime wajib diaktifkan oleh Apple untuk notarisasi — membatasi proses dari menjalankan kode tidak bertanda tangan atau mengakses API sensitif tanpa entitlement eksplisit."
      ),
      accent: "#3B82F6",
    },
    {
      icon: Package,
      command: "make export",
      title: t(lang, "Export .app", "Ekspor .app"),
      detail: t(lang, "Extract signed .app from .xcarchive via ExportOptions.plist", "Ekstrak .app yang sudah ditandatangani dari .xcarchive via ExportOptions.plist"),
      info: t(
        lang,
        "Extracts the signed .app bundle from the .xcarchive using an ExportOptions.plist file. This plist specifies the export method (developer-id), signing identity, and team ID. The output is a standalone .app ready to be packaged into a DMG. Without this step, the .xcarchive format cannot be distributed directly to users.",
        "Mengekstrak bundle .app yang sudah ditandatangani dari .xcarchive menggunakan file ExportOptions.plist. Plist ini menentukan metode ekspor (developer-id), identitas penandatanganan, dan team ID. Hasilnya adalah .app mandiri yang siap dikemas ke dalam DMG. Tanpa langkah ini, format .xcarchive tidak bisa didistribusikan langsung ke pengguna."
      ),
      accent: "#8B5CF6",
    },
    {
      icon: Package,
      command: "make dmg",
      title: t(lang, "Package DMG", "Paket DMG"),
      detail: t(lang, "UDRW staging → convert to UDZO (compressed) → sign DMG", "Staging UDRW → konversi ke UDZO (terkompresi) → tandatangani DMG"),
      info: t(
        lang,
        "Creates a disk image in three steps: first a read/write UDRW image is created and the .app is copied in along with a /Applications symlink for drag-install UX. Then it's converted to the compressed UDZO format to reduce file size. Finally the DMG itself is code-signed with the Developer ID certificate — Apple requires the DMG to be signed before it can be notarized.",
        "Membuat disk image dalam tiga langkah: pertama image UDRW baca/tulis dibuat dan .app disalin ke dalamnya bersama symlink /Applications untuk UX drag-install. Kemudian dikonversi ke format UDZO yang terkompresi untuk mengurangi ukuran file. Terakhir DMG itu sendiri ditandatangani dengan sertifikat Developer ID — Apple mewajibkan DMG untuk ditandatangani sebelum bisa dinotarisasi."
      ),
      accent: "#F97316",
    },
    {
      icon: Upload,
      command: "make notarize",
      title: t(lang, "Notarize", "Notarisasi"),
      detail: t(lang, "Submit to Apple via notarytool. Poll up to 30 min for approval.", "Kirim ke Apple via notarytool. Tunggu hingga 30 menit untuk persetujuan."),
      info: t(
        lang,
        "Sends the DMG to Apple's notarization service via notarytool. Apple automatically scans the binary for malware and policy violations. If approved, Apple issues a notarization ticket. Without notarization, macOS Gatekeeper shows a blocking warning when users try to open the app: \"Apple cannot verify this app doesn't contain malware.\" This is a hard requirement for distributing outside the App Store.",
        "Mengirim DMG ke layanan notarisasi Apple via notarytool. Apple secara otomatis memindai binary untuk malware dan pelanggaran kebijakan. Jika disetujui, Apple menerbitkan tiket notarisasi. Tanpa notarisasi, Gatekeeper macOS menampilkan peringatan blokir saat pengguna mencoba membuka app: \"Apple tidak dapat memverifikasi app ini tidak mengandung malware.\" Ini adalah persyaratan wajib untuk distribusi di luar App Store."
      ),
      accent: "#10B981",
    },
    {
      icon: Stamp,
      command: "stapler staple",
      title: t(lang, "Staple", "Staple"),
      detail: t(lang, "Embed notarization ticket into DMG for offline Gatekeeper checks", "Sisipkan tiket notarisasi ke DMG untuk pemeriksaan Gatekeeper offline"),
      info: t(
        lang,
        "Embeds the notarization ticket directly into the DMG file. Without stapling, Gatekeeper needs an active internet connection to contact Apple's servers and verify the notarization every time a user opens the app. After stapling, the ticket travels with the file — so verification works fully offline. This is especially important for users in environments with restricted internet access or when Apple's servers are temporarily unavailable.",
        "Menyisipkan tiket notarisasi langsung ke dalam file DMG. Tanpa stapling, Gatekeeper membutuhkan koneksi internet aktif untuk menghubungi server Apple dan memverifikasi notarisasi setiap kali pengguna membuka app. Setelah stapling, tiket ikut bersama file — sehingga verifikasi berfungsi penuh secara offline. Ini sangat penting untuk pengguna di lingkungan dengan akses internet terbatas atau ketika server Apple sedang tidak tersedia."
      ),
      accent: "#3B82F6",
    },
    {
      icon: CheckCircle2,
      command: "spctl --assess",
      title: t(lang, "Validate", "Validasi"),
      detail: t(lang, "Verify Gatekeeper accepts the DMG before distribution", "Verifikasi Gatekeeper menerima DMG sebelum distribusi"),
      info: t(
        lang,
        "Runs a local Gatekeeper assessment on the DMG to confirm it will pass security checks on end users' machines before publishing. It's a dry-run that simulates exactly what happens when a user double-clicks the DMG. If this passes, the DMG is ready for distribution. If it fails, it means something went wrong in the signing or notarization step and needs to be fixed before shipping.",
        "Menjalankan penilaian Gatekeeper lokal pada DMG untuk memastikan akan lolos pemeriksaan keamanan di mesin pengguna sebelum dipublikasikan. Ini adalah dry-run yang mensimulasikan persis apa yang terjadi saat pengguna klik dua kali DMG. Jika lolos, DMG siap didistribusikan. Jika gagal, berarti ada yang salah di langkah penandatanganan atau notarisasi dan perlu diperbaiki sebelum dirilis."
      ),
      accent: "#10B981",
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-8">
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          09 — {t(lang, "Publishing", "Publikasi")}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {t(lang, "From code to signed DMG.", "Dari kode ke DMG yang ditandatangani.")}
        </h2>
        <p className="mt-3 text-[#94A3B8] text-lg">
          {t(lang, "One command:", "Satu perintah:")}{" "}
          <code className="text-white bg-[#F97316]/20 border border-[#F97316]/30 px-2 py-0.5 rounded font-mono text-2xl">
            make release
          </code>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.command}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.09 }}
              className="p-4 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ background: s.accent }}>
                  {i + 1}
                </span>
                <code className="text-xs font-mono flex-1" style={{ color: s.accent }}>{s.command}</code>
                <button
                  onClick={() => setActiveStep(s)}
                  className="flex-shrink-0 text-[#334155] hover:text-[#94A3B8] transition-colors duration-150"
                  aria-label={`Info about ${s.title}`}
                >
                  <Info className="w-3.5 h-3.5" strokeWidth={2} />
                </button>
              </div>
              <p className="text-[#F1F5F9] font-semibold text-xs mb-1">{s.title}</p>
              <p className="text-[#64748B] text-xs leading-relaxed">{s.detail}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-5 flex items-start gap-3 p-4 rounded-xl border border-[#1E3A5F] bg-[#0F1F3D]"
      >
        <Shield className="w-4 h-4 text-[#94A3B8] flex-shrink-0 mt-0.5" strokeWidth={1.8} />
        <p className="text-[#94A3B8] text-xs leading-relaxed">
          <span className="text-[#F1F5F9] font-semibold">{t(lang, "Requirements: ", "Persyaratan: ")}</span>
          {t(
            lang,
            "Paid Apple Developer account · Developer ID Application certificate · App-specific password in",
            "Akun Apple Developer berbayar · Sertifikat Developer ID Application · App-specific password di"
          )}{" "}
          <code className="text-[#F97316] font-mono">.env</code> (APPLE_ID, TEAM_ID, APP_SPECIFIC_PASSWORD)
        </p>
      </motion.div>

      {activeStep && <InfoModal step={activeStep} onClose={() => setActiveStep(null)} />}
    </div>
  );
}
