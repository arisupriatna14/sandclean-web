"use client";

import { motion } from "framer-motion";
import { GitBranch, AlertTriangle } from "lucide-react";
import CodeBlock from "../CodeBlock";
import { useLang } from "../LangContext";
import { t } from "../translations";

const YAML = `SandCleanAppStore:
  type: application
  platform: macOS
  settings:
    base:
      PRODUCT_NAME: SandClean
      PRODUCT_BUNDLE_IDENTIFIER: com.arisupriatna.SandCleanAS
      CONFIGURATION_BUILD_DIR: "$(BUILD_DIR)/$(CONFIGURATION)-appstore"
      INFOPLIST_FILE: SandClean/Resources/Info-AppStore.plist
      CODE_SIGN_ENTITLEMENTS: .../SandCleanAppStore.entitlements
      SWIFT_ACTIVE_COMPILATION_CONDITIONS: "$(inherited) APPSTORE"
      ENABLE_HARDENED_RUNTIME: NO
  dependencies:
    - sdk: CryptoKit.framework`;

const CI = `# ci_scripts/ci_post_clone.sh — Xcode Cloud
cd "$CI_PRIMARY_REPOSITORY_PATH"
brew install xcodegen
xcodegen generate`;

export default function OneSourceSlide() {
  const lang = useLang();

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-5">
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          03 — {"One Source, Two Products"}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {"project.yml is the truth."}
        </h2>
        <p className="mt-3 text-[#94A3B8] text-sm">
          {t(lang, "Xcode normally keeps its own project file, and it is a nightmare to share. Here it is thrown away and rebuilt from one readable text file instead. Both Mac apps are described in it — same code, different settings.", "Xcode biasanya menyimpan file project-nya sendiri, dan file itu menyusahkan untuk dibagi. Di sini file itu dibuang dan dibangun ulang dari satu file teks yang bisa dibaca manusia. Kedua app Mac dijelaskan di situ — kode sama, setting berbeda.")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="sm:col-span-3"
        >
          <CodeBlock code={YAML} caption="project.yml" accent="#8B5CF6" highlight={[8, 9]} />
        </motion.div>

        <div className="sm:col-span-2 flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="p-4 rounded-2xl border border-[#F59E0B]/30 bg-[#F59E0B]/5"
          >
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-3.5 h-3.5 text-[#F59E0B]" strokeWidth={2} />
              <p className="text-[#F1F5F9] font-semibold text-xs">
                {t(lang, "Why the separate build dir", "Kenapa build dir dipisah")}
              </p>
            </div>
            <p className="text-[#94A3B8] text-xs leading-relaxed">
              {t(lang, "Both targets produce a file called SandClean.app. Give them the same output folder and building one quietly overwrites the other — you end up testing the wrong app and never notice.", "Kedua target menghasilkan file bernama SandClean.app. Kalau folder outputnya sama, build yang satu diam-diam menimpa yang lain — kamu berakhir menguji app yang salah tanpa sadar.")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <CodeBlock code={CI} caption="Xcode Cloud" accent="#10B981" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 flex items-start gap-3 p-3.5 rounded-xl border border-[#1E3A5F] bg-[#0F1F3D]"
      >
        <GitBranch className="w-4 h-4 text-[#94A3B8] flex-shrink-0 mt-0.5" strokeWidth={1.8} />
        <p className="text-[#94A3B8] text-xs leading-relaxed">
          <span className="text-[#F1F5F9] font-semibold">{t(lang, "One flag drives everything: ", "Satu flag menggerakkan semuanya: ")}</span>
          {t(lang, "APPSTORE is switched on for one target only. Every difference between the two apps in the rest of this deck is really just a line saying", "APPSTORE hanya dinyalakan di satu target. Setiap perbedaan antara kedua app di sisa deck ini sebenarnya cuma satu baris yang berbunyi")}{" "}
          <code className="text-[#F97316] font-mono">#if APPSTORE</code>{" "}
          {t(lang, "— build this bit only for the App Store version.", "— bangun bagian ini hanya untuk versi App Store.")}
        </p>
      </motion.div>
    </div>
  );
}
