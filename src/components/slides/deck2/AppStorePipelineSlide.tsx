"use client";

import { motion } from "framer-motion";
import { UploadCloud, FileDiff, Clock } from "lucide-react";
import CodeBlock from "../CodeBlock";
import { useLang } from "../LangContext";
import { t } from "../translations";

const EXPORT = `<!-- scripts/ExportOptions-AppStore.plist -->
<key>method</key>
<string>app-store-connect</string>
<key>destination</key>
<string>upload</string>
<key>signingStyle</key>
<string>automatic</string>`;

const DIFF = `  <key>CFBundleDisplayName</key>          <!-- + -->
  <key>LSApplicationCategoryType</key>    <!-- + -->
  <string>public.app-category.utilities</string>
  <key>ITSAppUsesNonExemptEncryption</key><!-- + -->
  <false/>

- <key>SUFeedURL</key>                    <!-- Sparkle -->
- <key>SUPublicEDKey</key>
- <key>SUEnableAutomaticChecks</key>

  <string>sandcleanas</string>            <!-- URL scheme -->
  <string>com.arisupriatna.SandCleanAS</string>`;

export default function AppStorePipelineSlide() {
  const lang = useLang();

  const notes = [
    {
      icon: UploadCloud,
      accent: "#8B5CF6",
      title: t(lang, "One step less", "Satu langkah lebih sedikit"),
      body: t(lang, "No DMG to build, nothing to send for scanning, nothing to staple. The build goes straight to Apple, and they handle the signing and the malware check themselves.", "Tidak ada DMG untuk dibangun, tidak ada yang dikirim untuk dipindai, tidak ada yang perlu di-staple. Build-nya langsung ke Apple, dan mereka sendiri yang mengurus penandatanganan dan pemeriksaan malware-nya."),
    },
    {
      icon: Clock,
      accent: "#F59E0B",
      title: t(lang, "And one step much longer", "Dan satu langkah jauh lebih lama"),
      body: t(lang, "The upload takes minutes. The review does not. A DMG release is live the moment you publish it; an App Store release waits for a real person to look at it, and one rejection sends you back to the beginning.", "Unggahannya makan waktu beberapa menit. Review-nya tidak. Rilis DMG langsung live begitu kamu mempublikasikannya; rilis App Store menunggu orang sungguhan meninjaunya, dan satu penolakan mengembalikanmu ke awal."),
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-5">
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          11 — {"App Store Pipeline"}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          <code className="text-white bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 px-2 py-0.5 rounded font-mono text-4xl sm:text-5xl">
            make appstore-upload
          </code>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-3">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
            <CodeBlock code={EXPORT} caption="ExportOptions-AppStore.plist" accent="#8B5CF6" highlight={[4, 5]} />
          </motion.div>

          {notes.map((n, i) => {
            const Icon = n.icon;
            return (
              <motion.div
                key={n.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.1 }}
                className="p-3.5 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D]"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: n.accent }} strokeWidth={2} />
                  <p className="text-[#F1F5F9] text-xs font-semibold">{n.title}</p>
                </div>
                <p className="text-[#64748B] text-xs leading-relaxed">{n.body}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <div className="flex items-center gap-2 mb-2">
            <FileDiff className="w-3.5 h-3.5 text-[#94A3B8]" strokeWidth={2} />
            <p className="text-[#F1F5F9] text-xs font-bold">
              Info.plist <span className="text-[#64748B] font-normal">→</span> Info-AppStore.plist
            </p>
          </div>
          <CodeBlock code={DIFF} accent="#10B981" highlight={[7, 8, 9]} />
          <p className="mt-2 text-[#64748B] text-xs leading-relaxed">
            {t(lang, "Every app carries a small settings file describing itself to macOS. Here there are two of them, one per version — the App Store one adds the category and a declaration about encryption, and drops everything to do with self-updating, because that version is not allowed to update itself.", "Setiap app membawa file setting kecil yang menjelaskan dirinya ke macOS. Di sini ada dua, satu untuk tiap versi — versi App Store menambahkan kategori dan pernyataan soal enkripsi, lalu membuang semua yang berkaitan dengan update mandiri, karena versi itu memang tidak boleh meng-update dirinya sendiri.")}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
