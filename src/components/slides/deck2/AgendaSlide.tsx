"use client";

import { motion } from "framer-motion";
import { Boxes, Lock, KeyRound, Ship, Rocket } from "lucide-react";

export default function AgendaSlide() {

  const sections = [
    {
      icon: Boxes,
      accent: "#3B82F6",
      range: "03",
      title: "One repo, two apps",
      detail: "How the same code becomes two different products without copying anything.",
    },
    {
      icon: Lock,
      accent: "#8B5CF6",
      range: "04–06",
      title: "What sandboxed actually means",
      detail: "The sandbox, Hardened Runtime and TCC are three different things. Plus the permissions file that decides what an app may touch.",
    },
    {
      icon: KeyRound,
      accent: "#EF4444",
      range: "07–09",
      title: "The part that broke the plan",
      detail: "Why Apple will not hand out Full Disk Access, what is used instead, and the eight features it costs.",
    },
    {
      icon: Ship,
      accent: "#F97316",
      range: "10–12",
      title: "Getting it out the door",
      detail: "Signing and notarizing a DMG, uploading to the App Store, and the two side by side.",
    },
    {
      icon: Rocket,
      accent: "#10B981",
      range: "13–14",
      title: "Releasing, and what I'd do differently",
      detail: "Shipping updates without the App Store, and the tips I wish I had before my first upload.",
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-6">
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          02 — {"Agenda"}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {"Where this is going."}
        </h2>
      </motion.div>

      <div className="flex flex-col gap-2.5">
        {sections.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.09, duration: 0.4 }}
              className="flex items-start gap-4 px-4 py-3 rounded-2xl border bg-[#0F1F3D]"
              style={{ borderColor: s.accent + "30" }}
            >
              <div
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl flex-shrink-0 mt-0.5"
                style={{ background: s.accent + "15" }}
              >
                <Icon className="w-4 h-4" style={{ color: s.accent }} strokeWidth={1.8} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[#F1F5F9] font-semibold text-sm">{s.title}</p>
                <p className="text-[#64748B] text-xs mt-0.5 leading-relaxed">{s.detail}</p>
              </div>

              <code
                className="text-xs font-mono flex-shrink-0 mt-1 tabular-nums"
                style={{ color: s.accent }}
              >
                {s.range}
              </code>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-5 text-[#64748B] text-xs leading-relaxed"
      >
        {"Technical terms stay in English throughout — sandbox, entitlement, notarization. Everything around them is explained as plainly as I can manage."}
      </motion.p>
    </div>
  );
}
