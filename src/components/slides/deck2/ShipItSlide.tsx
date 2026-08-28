"use client";

import { motion } from "framer-motion";
import { KeyRound, Rss, GitCommitVertical } from "lucide-react";
import CodeBlock from "../CodeBlock";

const APPCAST = `<item>
  <title>Version 1.1.0</title>
  <sparkle:version>2</sparkle:version>
  <sparkle:shortVersionString>1.1.0</sparkle:shortVersionString>
  <sparkle:releaseNotesLink>
    https://sandclean.vercel.app/release-notes/1.1.0.html
  </sparkle:releaseNotesLink>
  <enclosure
    url="https://github.com/.../SandClean-1.1.0.dmg"
    sparkle:edSignature="7dl8eYCpvtVwIvs/+mXRGeFZ79NThRyEbxJdbg3beXG..."
    length="6453698"
    type="application/octet-stream"/>
</item>`;

export default function ShipItSlide() {

  const chain = [
    "bump project.yml",
    "git log v1.1.0..HEAD",
    "make release",
    "sign_update",
    "update appcast.xml",
    "write release notes",
    "gh release create",
    "push both repos",
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-5">
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          13 — {"Ship It"}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {"Your own update server."}
        </h2>
        <p className="mt-3 text-[#94A3B8] text-sm">
          {"Outside the App Store, nobody delivers updates for you. The whole system is one XML file on a web server that the app quietly checks now and then."}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }} className="sm:col-span-3">
          <CodeBlock code={APPCAST} caption="public/appcast.xml" accent="#F97316" highlight={[10]} />
        </motion.div>

        <div className="sm:col-span-2 flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="p-3.5 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D]"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <KeyRound className="w-3.5 h-3.5 text-[#10B981]" strokeWidth={2} />
              <p className="text-[#F1F5F9] text-xs font-semibold">
                {"Every update is signed"}
              </p>
            </div>
            <p className="text-[#64748B] text-xs leading-relaxed">
              {"The app is built already knowing one specific signature, and every update has to carry a matching one or it is refused. So even if someone took over the web server and swapped the file, the app still would not install it."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="p-3.5 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D]"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Rss className="w-3.5 h-3.5 text-[#3B82F6]" strokeWidth={2} />
              <p className="text-[#F1F5F9] text-xs font-semibold">
                {"None of this exists in the App Store version"}
              </p>
            </div>
            <p className="text-[#64748B] text-xs leading-relaxed">
              <code className="text-[#F97316] font-mono">#if !APPSTORE import Sparkle</code> —{" "}
              {"Sparkle is left out of that version entirely and the Updates tab disappears from Settings. App Store apps are updated by the App Store, and are not allowed to do it themselves."}
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-4 p-3.5 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D]"
      >
        <div className="flex items-center gap-2 mb-2.5">
          <GitCommitVertical className="w-3.5 h-3.5 text-[#8B5CF6]" strokeWidth={2} />
          <p className="text-[#F1F5F9] text-xs font-semibold">
            {"One command, two repos"}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1.5">
          {chain.map((c, i) => (
            <span key={c} className="flex items-center gap-1.5">
              <code className="px-2 py-0.5 rounded-lg border border-[#1E3A5F] bg-[#0A1628] text-[#94A3B8] text-[10px] font-mono">
                {c}
              </code>
              {i < chain.length - 1 && <span className="text-[#334155] text-[10px]">→</span>}
            </span>
          ))}
        </div>
        <p className="mt-2.5 text-[#64748B] text-xs leading-relaxed">
          {"One repo holds the app, the other holds the website and that update file. Pushing the second one publishes the website, and from that moment every copy already installed finds the new version on its next check. The whole release is a single command."}
        </p>
      </motion.div>
    </div>
  );
}
