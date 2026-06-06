"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Package, Upload, Stamp } from "lucide-react";
import { useLang } from "../LangContext";
import { t } from "../translations";

export default function PublishingSlide() {
  const lang = useLang();

  const steps = [
    {
      icon: Package,
      command: "make archive",
      title: t(lang, "Archive", "Arsip"),
      detail: t(lang, "xcodebuild archive with Developer ID certificate + Hardened Runtime", "xcodebuild archive dengan sertifikat Developer ID + Hardened Runtime"),
      accent: "#3B82F6",
    },
    {
      icon: Package,
      command: "make export",
      title: t(lang, "Export .app", "Ekspor .app"),
      detail: t(lang, "Extract signed .app from .xcarchive via ExportOptions.plist", "Ekstrak .app yang sudah ditandatangani dari .xcarchive via ExportOptions.plist"),
      accent: "#8B5CF6",
    },
    {
      icon: Package,
      command: "make dmg",
      title: t(lang, "Package DMG", "Paket DMG"),
      detail: t(lang, "UDRW staging → convert to UDZO (compressed) → sign DMG", "Staging UDRW → konversi ke UDZO (terkompresi) → tandatangani DMG"),
      accent: "#F97316",
    },
    {
      icon: Upload,
      command: "make notarize",
      title: t(lang, "Notarize", "Notarisasi"),
      detail: t(lang, "Submit to Apple via notarytool. Poll up to 30 min for approval.", "Kirim ke Apple via notarytool. Tunggu hingga 30 menit untuk persetujuan."),
      accent: "#10B981",
    },
    {
      icon: Stamp,
      command: "stapler staple",
      title: t(lang, "Staple", "Staple"),
      detail: t(lang, "Embed notarization ticket into DMG for offline Gatekeeper checks", "Sisipkan tiket notarisasi ke DMG untuk pemeriksaan Gatekeeper offline"),
      accent: "#3B82F6",
    },
    {
      icon: CheckCircle2,
      command: "spctl --assess",
      title: t(lang, "Validate", "Validasi"),
      detail: t(lang, "Verify Gatekeeper accepts the DMG before distribution", "Verifikasi Gatekeeper menerima DMG sebelum distribusi"),
      accent: "#10B981",
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-8">
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          08 — {t(lang, "Publishing", "Publikasi")}
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
                <code className="text-xs font-mono" style={{ color: s.accent }}>{s.command}</code>
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
    </div>
  );
}
