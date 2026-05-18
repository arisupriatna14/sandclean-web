"use client";

import { motion } from "framer-motion";
import {
  Trash2,
  Code2,
  HardDrive,
  Copy,
  LayoutGrid,
  Ghost,
  Terminal,
} from "lucide-react";

const features = [
  {
    icon: Trash2,
    title: "System Cache Cleaner",
    description:
      "Removes user & system caches, browser caches for Chrome, Safari, Firefox, Edge, and Photos cache.",
    accent: "#3B82F6",
    bg: "#3B82F610",
  },
  {
    icon: Code2,
    title: "Xcode Cleaner",
    description:
      "Wipes DerivedData, Archives, old Simulators, iOS Device Support files, and Documentation caches.",
    accent: "#8B5CF6",
    bg: "#8B5CF610",
  },
  {
    icon: HardDrive,
    title: "System Data Scanner",
    description:
      "Finds Time Machine snapshots, old iOS backups, iCloud cache, and diagnostic reports eating storage.",
    accent: "#3B82F6",
    bg: "#3B82F610",
  },
  {
    icon: Copy,
    title: "Large & Duplicate Files",
    description:
      "Locates files over 50 MB and finds exact duplicates using SHA-256 two-pass detection.",
    accent: "#F97316",
    bg: "#F9731610",
  },
  {
    icon: LayoutGrid,
    title: "Applications Scanner",
    description:
      "Lists all installed apps with their disk footprint so you can spot and remove the biggest offenders.",
    accent: "#3B82F6",
    bg: "#3B82F610",
  },
  {
    icon: Ghost,
    title: "App Leftovers Cleaner",
    description:
      "Hunts down orphaned preferences, containers, and App Support folders from uninstalled apps.",
    accent: "#8B5CF6",
    bg: "#8B5CF610",
  },
  {
    icon: Terminal,
    title: "Dev Tools Cache",
    description:
      "Clears caches for Homebrew, npm, Yarn, pip, CocoaPods, Swift PM, Gradle, Maven, Cargo, Go, and more.",
    accent: "#F97316",
    bg: "#F9731610",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#3B82F6] text-sm font-semibold uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="text-4xl font-bold text-[#F1F5F9] tracking-tight">
            Everything Your Mac Needs to Stay Fast
          </h2>
          <p className="mt-4 text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Seven powerful scanners in one native app — no Electron, no subscriptions.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={item}
                className="group relative p-6 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D] hover:bg-[#162850] hover:border-[#3B82F6]/30 transition-all duration-300 cursor-default"
              >
                {/* Gradient border glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ring-1 ring-[#3B82F6]/20" />

                <div
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4"
                  style={{ background: f.bg }}
                >
                  <Icon className="w-5 h-5" style={{ color: f.accent }} strokeWidth={1.8} />
                </div>
                <h3 className="font-semibold text-[#F1F5F9] mb-2 text-sm leading-snug">
                  {f.title}
                </h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{f.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
