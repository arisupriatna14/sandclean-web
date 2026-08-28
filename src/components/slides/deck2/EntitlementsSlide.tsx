"use client";

import { motion } from "framer-motion";
import { Puzzle } from "lucide-react";
import CodeBlock from "../CodeBlock";

const DMG = `<dict>
  <key>com.apple.security.application-groups</key>
  <array>
    <string>group.com.arisupriatna.SandClean</string>
  </array>
  <key>com.apple.security.network.client</key>
  <true/>
</dict>`;

const APPSTORE = `<dict>
  <key>com.apple.security.app-sandbox</key>
  <true/>
  <key>com.apple.security.files.user-selected.read-write</key>
  <true/>
  <key>com.apple.security.files.bookmarks.app-scope</key>
  <true/>
  <key>com.apple.security.network.client</key>
  <true/>
  <key>com.apple.security.application-groups</key>
  <array>
    <string>group.com.arisupriatna.SandCleanAS</string>
  </array>
</dict>`;

export default function EntitlementsSlide() {

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-5">
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          06 — {"Entitlements"}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {"The whole difference, in XML."}
        </h2>
        <p className="mt-3 text-[#94A3B8] text-sm">
          {"This file is the app's declared list of permissions. Everything the app is allowed to do has to be written down here before it is built."}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
            <p className="text-[#F1F5F9] text-xs font-bold">SandClean.entitlements</p>
            <span className="text-[#64748B] text-[10px] font-mono">— DMG</span>
          </div>
          <CodeBlock code={DMG} accent="#3B82F6" />
          <p className="mt-2 text-[#64748B] text-xs leading-relaxed">
            {"There is no app-sandbox line here at all. Nothing switched it on, so the app can go anywhere you can go."}
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }}>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
            <p className="text-[#F1F5F9] text-xs font-bold">SandCleanAppStore.entitlements</p>
            <span className="text-[#64748B] text-[10px] font-mono">— App Store</span>
          </div>
          <CodeBlock code={APPSTORE} accent="#8B5CF6" highlight={[2, 3, 6, 7]} />
          <p className="mt-2 text-[#64748B] text-xs leading-relaxed">
            {"Sandbox on, and only two file permissions: whatever the user personally chose, plus the right to remember that choice. Nothing that opens the disk in general."}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="mt-4 flex items-start gap-3 p-3.5 rounded-xl border border-[#1E3A5F] bg-[#0F1F3D]"
      >
        <Puzzle className="w-4 h-4 text-[#94A3B8] flex-shrink-0 mt-0.5" strokeWidth={1.8} />
        <p className="text-[#94A3B8] text-xs leading-relaxed">
          <span className="text-[#F1F5F9] font-semibold">{"Extensions get no vote: "}</span>
          {"the Widget and the Finder Extension are sandboxed even in the DMG version. Small add-ons like these are always sandboxed, whether you want it or not — which is why they cannot simply read the main app's files, and have to share data through a folder both sides are explicitly allowed into."}
        </p>
      </motion.div>
    </div>
  );
}
