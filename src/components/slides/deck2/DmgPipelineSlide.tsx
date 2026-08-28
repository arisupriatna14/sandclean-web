"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, X, Copy, Disc, Send, Stamp, ShieldCheck, Hammer } from "lucide-react";
import CodeBlock from "../CodeBlock";

const SH = `# scripts/package_dmg.sh
# ditto preserves extended attributes and code signatures; cp -r does not
ditto "$APP_PATH" "$DMG_DIR/SandClean.app"
ln -s /Applications "$DMG_DIR/Applications"

hdiutil create -volname SandClean -srcfolder "$DMG_DIR" \\
    -ov -format UDRW -nospotlight "$TEMP_DMG"
hdiutil convert "$TEMP_DMG" -format UDZO -o "$DMG_PATH"

codesign --sign "$SIGNING_IDENTITY" --timestamp "$DMG_PATH"`;

interface Step {
  command: string;
  title: string;
  detail: string;
  info: string;
  accent: string;
  icon: React.ElementType;
}

function InfoModal({ step, onClose }: { step: Step; onClose: () => void }) {
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
          <button onClick={onClose} className="absolute top-4 right-4 text-[#64748B] hover:text-[#94A3B8] transition-colors">
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

export default function DmgPipelineSlide() {
  const [activeStep, setActiveStep] = useState<Step | null>(null);

  const steps: Step[] = [
    {
      icon: Hammer,
      command: "archive → export",
      title: "Sign it as you",
      detail: "So macOS can prove who made this app",
      info: "A code signature is a seal that says who built the app and proves nothing has been altered since. Apple issues two kinds: one for apps sold in the App Store, and a Developer ID for apps people download themselves. This is the second kind — the only seal macOS will accept for a direct download. The same step also locks the app against tampering, which Apple requires before it will check the app at all.",
      accent: "#3B82F6",
    },
    {
      icon: Copy,
      command: "ditto",
      title: "Copy it very carefully",
      detail: "The ordinary copy command breaks the seal",
      info: "Part of that seal is stored in a hidden layer attached to the file, and the ordinary copy command throws that layer away. Nothing looks wrong: the app copies, it opens on your machine, and then it is refused on the user's with no useful explanation. ditto is a copy command that keeps the hidden layer intact, so the seal survives. A shortcut to the Applications folder is added next to the app, which is what creates the familiar drag-across-to-install window.",
      accent: "#8B5CF6",
    },
    {
      icon: Disc,
      command: "hdiutil convert",
      title: "Wrap it in a DMG",
      detail: "The disk image gets signed too — 6.45 MB",
      info: "A DMG is the double-clickable container Mac apps are usually delivered in. It is built twice. First as a UDRW image — read/write, a working copy you can still add files to. Then converted to UDZO — compressed and read-only, the version people actually download. SandClean 1.1.0 comes to 6.45 MB. The container itself then gets its own signature. That is easy to forget, and it matters: Apple checks the container, so an unsigned DMG is rejected before anyone looks at the app inside it.",
      accent: "#F97316",
    },
    {
      icon: Send,
      command: "notarytool submit",
      title: "Send it to Apple",
      detail: "They scan it for malware. Usually minutes.",
      info: "Notarization is Apple scanning your app for malware before anyone can install it. No human reads the code and nothing is judged on quality — it is an automated check, and it applies to every Mac app distributed outside the App Store. The upload waits for the answer, usually a few minutes. If something is flagged, Apple returns a log naming the exact file and reason.",
      accent: "#10B981",
    },
    {
      icon: Stamp,
      command: "stapler staple",
      title: "Attach Apple's approval",
      detail: "So it opens without an internet connection",
      info: "Once Apple approves the app, that approval lives on Apple's servers. Skip this step and the Mac has to phone home the first time someone opens the app — which fails on a plane, behind an office firewall, or on a day Apple's servers are having problems, and the user just sees a scary warning. Stapling tucks the approval inside the file itself so it travels with the download. One command, and a whole category of support emails disappears.",
      accent: "#3B82F6",
    },
    {
      icon: ShieldCheck,
      command: "spctl --assess",
      title: "Rehearse the user's first open",
      detail: "Better to fail here than on their Mac",
      info: "This runs the exact check a stranger's Mac will run when they download the file, except it runs on your machine before you publish. It is a dress rehearsal for the first launch. Pass, and the DMG is genuinely ready. Fail, and something went wrong several steps earlier — but you find out in seconds instead of from a confused user a week later.",
      accent: "#10B981",
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-5">
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          10 — {"DMG Pipeline"}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {"Inside"}{" "}
          <code className="text-white bg-[#F97316]/20 border border-[#F97316]/30 px-2 py-0.5 rounded font-mono text-4xl sm:text-5xl">
            make release
          </code>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-3">
        {steps.map((s, i) => {
          return (
            <motion.div
              key={s.command}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="p-3.5 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: s.accent }}
                >
                  {i + 1}
                </span>
                <code className="text-[16px] font-mono font-medium flex-1 truncate" style={{ color: s.accent }}>{s.command}</code>
                <button
                  onClick={() => setActiveStep(s)}
                  className="flex-shrink-0 text-[#334155] hover:text-[#94A3B8] transition-colors duration-150"
                  aria-label={`Info about ${s.title}`}
                >
                  <Info className="w-3.5 h-3.5" strokeWidth={2} />
                </button>
              </div>
              <p className="text-[#F1F5F9] font-semibold text-[15px] leading-snug mb-1">{s.title}</p>
              <p className="text-[#64748B] text-xs leading-relaxed">{s.detail}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
        <CodeBlock code={SH} caption={"the line that bites you"} accent="#F97316" highlight={[3]} />
      </motion.div>

      {activeStep && <InfoModal step={activeStep} onClose={() => setActiveStep(null)} />}
    </div>
  );
}
