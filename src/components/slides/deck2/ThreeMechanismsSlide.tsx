"use client";

import { motion } from "framer-motion";
import { Box, ShieldHalf, Fingerprint } from "lucide-react";

export default function ThreeMechanismsSlide() {

  const mechanisms = [
    {
      icon: Box,
      accent: "#3B82F6",
      name: "App Sandbox",
      subtitle: "The wall around the app",
      enforcer: "macOS itself, at the deepest level",
      protects: "The rest of your Mac from the app — it can only touch its own folder",
      requiredFor: "Mac App Store — no exceptions",
      optIn: "An entitlement you add yourself",
    },
    {
      icon: ShieldHalf,
      accent: "#F97316",
      name: "Hardened Runtime",
      subtitle: "The lock on the app itself",
      enforcer: "macOS, as the app is loading",
      protects: "The app from other programs slipping their own code into it while it runs",
      requiredFor: "Notarization — no exceptions",
      optIn: "One build setting",
    },
    {
      icon: Fingerprint,
      accent: "#10B981",
      name: "TCC",
      subtitle: "Transparency, Consent & Control — the “App wants to access your Photos” prompts, and the Privacy & Security list in Settings",
      enforcer: "A record of what you have agreed to",
      protects: "Your private data — Photos, Contacts, Camera — from every app",
      requiredFor: "Nothing — it only ever says no",
      optIn: "You cannot. Only the user can grant it.",
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-6">
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          05 — {"Three Different Things"}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {"Sandbox ≠ Hardened Runtime ≠ TCC"}
        </h2>
        <p className="mt-3 text-[#94A3B8] text-sm max-w-3xl">
          {"Three separate protections that get mixed up constantly. Turning one on says nothing about the other two."}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {mechanisms.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="p-4 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D]"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div
                  className="inline-flex items-center justify-center w-9 h-9 rounded-xl flex-shrink-0"
                  style={{ background: m.accent + "15" }}
                >
                  <Icon className="w-4 h-4" style={{ color: m.accent }} strokeWidth={1.8} />
                </div>
                <p className="text-[#F1F5F9] font-bold text-sm">{m.name}</p>
              </div>

              <p className="text-[#94A3B8] text-xs leading-snug mb-3 min-h-[3.6em]">{m.subtitle}</p>

              <dl className="flex flex-col gap-2.5">
                {[
                  ["Who enforces it", m.enforcer],
                  ["What it protects", m.protects],
                  ["Required for", m.requiredFor],
                  ["How you get it", m.optIn],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[#64748B] text-[10px] font-semibold uppercase tracking-wider">{k}</dt>
                    <dd className="text-[#94A3B8] text-xs leading-snug">{v}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        <div className="p-3.5 rounded-xl border border-[#1E3A5F] bg-[#0F1F3D]">
          <p className="text-[#F1F5F9] text-xs font-semibold mb-1">
            {"DMG build"}
          </p>
          <p className="text-[#94A3B8] text-xs leading-relaxed">
            <span className="text-[#F97316] font-mono">ENABLE_HARDENED_RUNTIME: YES</span> —{" "}
            {"locked against tampering, but free to read your disk. Not sandboxed at all."}
          </p>
        </div>
        <div className="p-3.5 rounded-xl border border-[#1E3A5F] bg-[#0F1F3D]">
          <p className="text-[#F1F5F9] text-xs font-semibold mb-1">
            {"App Store build"}
          </p>
          <p className="text-[#94A3B8] text-xs leading-relaxed">
            <span className="text-[#F97316] font-mono">ENABLE_HARDENED_RUNTIME: NO</span> —{" "}
            {"sandboxed instead, and Apple handles the tamper-proofing on their side."}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
