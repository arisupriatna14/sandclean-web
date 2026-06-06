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
  Beer,
  ScrollText,
  GitBranch,
  Box,
  Globe,
  Smartphone,
  Images,
  FolderClock,
  Mail,
  Braces,
  Network,
  Cloud,
  LayoutDashboard,
  PieChart,
  TrendingUp,
  Shield,
  Zap,
  History,
  Brain,
  MonitorDot,
} from "lucide-react";

const cleaningFeatures = [
  {
    icon: Trash2,
    title: "System Cache",
    description:
      "Scan and delete user & system caches, browser caches (Chrome, Safari, Firefox, Edge), and Photos cache.",
    accent: "#3B82F6",
    bg: "#3B82F610",
  },
  {
    icon: Code2,
    title: "Xcode Cleaner",
    description:
      "Delete DerivedData, Archives, Simulator devices, and unused iOS Device Support files.",
    accent: "#8B5CF6",
    bg: "#8B5CF610",
  },
  {
    icon: HardDrive,
    title: "System Data",
    description:
      "Analyze Time Machine snapshots, iOS backups, iCloud cache, and diagnostic reports.",
    accent: "#3B82F6",
    bg: "#3B82F610",
  },
  {
    icon: Copy,
    title: "Large & Duplicate Files",
    description:
      "Find files >50 MB and detect exact duplicates using SHA-256 two-pass hashing.",
    accent: "#F97316",
    bg: "#F9731610",
  },
  {
    icon: LayoutGrid,
    title: "Applications",
    description:
      "Scan installed applications, view their sizes, and permanently remove unused ones.",
    accent: "#3B82F6",
    bg: "#3B82F610",
  },
  {
    icon: Ghost,
    title: "App Leftovers",
    description:
      "Find orphaned Preferences, Application Support, Containers, and Saved State from uninstalled apps.",
    accent: "#8B5CF6",
    bg: "#8B5CF610",
  },
  {
    icon: Terminal,
    title: "Dev Tools Cache",
    description:
      "Clean cache from npm, Yarn, pip, CocoaPods, Swift PM, Gradle, Maven, Cargo, Go, Ruby Gems, and Pub.",
    accent: "#F97316",
    bg: "#F9731610",
  },
  {
    icon: Beer,
    title: "Homebrew Deep Clean",
    description:
      "Analyze Homebrew cache in detail — find old bottles, cask cache, and update outdated formulas.",
    accent: "#EAB308",
    bg: "#EAB30810",
  },
  {
    icon: ScrollText,
    title: "Log Files",
    description:
      "Scan and delete old log files and crash reports older than a configurable number of days.",
    accent: "#6B7280",
    bg: "#6B728010",
  },
  {
    icon: GitBranch,
    title: "Git Repository Cleaner",
    description:
      "Find and delete node_modules, .build, Pods, vendor, and other dependency folders across local repos.",
    accent: "#F97316",
    bg: "#F9731610",
  },
  {
    icon: Box,
    title: "Docker Cleanup",
    description:
      "Remove dangling images, stopped containers, unused volumes, and build cache via Docker CLI.",
    accent: "#06B6D4",
    bg: "#06B6D410",
  },
  {
    icon: Globe,
    title: "Language Pack",
    description:
      "Find and remove unused .lproj language resource files bundled inside installed applications.",
    accent: "#10B981",
    bg: "#10B98110",
  },
  {
    icon: Smartphone,
    title: "iOS Simulator Manager",
    description:
      "Find and delete unused iOS, watchOS, and tvOS simulator runtimes to free disk space.",
    accent: "#8B5CF6",
    bg: "#8B5CF610",
  },
  {
    icon: Images,
    title: "Duplicate Photos",
    description:
      "Find visually similar duplicate photos using perceptual hash (dHash) in Pictures, Desktop, Downloads, and Documents.",
    accent: "#EC4899",
    bg: "#EC489910",
  },
  {
    icon: FolderClock,
    title: "Old Downloads & Files",
    description:
      "Scan Downloads, Desktop, and Documents for files that haven't been modified in months.",
    accent: "#F97316",
    bg: "#F9731610",
  },
  {
    icon: Mail,
    title: "Mail Attachments Cleaner",
    description:
      "Find old email attachments stored locally — safely re-downloadable from your mail server.",
    accent: "#3B82F6",
    bg: "#3B82F610",
  },
  {
    icon: Braces,
    title: "Python venv Finder",
    description:
      "Locate forgotten Python virtual environments in old projects — each can be 300 MB–1 GB+.",
    accent: "#EAB308",
    bg: "#EAB30810",
  },
  {
    icon: Network,
    title: "Network & External Drive",
    description:
      "Scan mounted network volumes and external drives for junk files and duplicates.",
    accent: "#10B981",
    bg: "#10B98110",
  },
  {
    icon: Cloud,
    title: "iCloud Storage Analyzer",
    description:
      "Find iCloud Drive files stored locally and evict them to free up disk space.",
    accent: "#06B6D4",
    bg: "#06B6D410",
  },
];

const utilityFeatures = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    description:
      "Overview of total cleaned storage, active scan results, and quick-access to all features.",
    accent: "#3B82F6",
    bg: "#3B82F610",
  },
  {
    icon: PieChart,
    title: "Disk Visualizer",
    description:
      "Visual treemap breakdown of disk usage by folder and file type.",
    accent: "#8B5CF6",
    bg: "#8B5CF610",
  },
  {
    icon: TrendingUp,
    title: "Storage Timeline",
    description:
      "Track storage usage over time and see cleaning history as a chart.",
    accent: "#10B981",
    bg: "#10B98110",
  },
  {
    icon: Shield,
    title: "Security Scan",
    description:
      "Detect potentially sensitive files left on disk — credentials, private keys, and old backups.",
    accent: "#EF4444",
    bg: "#EF444410",
  },
  {
    icon: Zap,
    title: "Startup Manager",
    description:
      "View and manage Login Items and Launch Agents that run at startup.",
    accent: "#EAB308",
    bg: "#EAB30810",
  },
  {
    icon: History,
    title: "History",
    description:
      "Full log of all cleaning sessions with timestamps and bytes freed.",
    accent: "#6B7280",
    bg: "#6B728010",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description:
      "Claude-powered analysis of selected items with recommendations on what is safe to delete.",
    accent: "#EC4899",
    bg: "#EC489910",
  },
  {
    icon: MonitorDot,
    title: "Menu Bar",
    description:
      "Quick-access menu bar item showing current disk usage and one-click scan shortcut.",
    accent: "#3B82F6",
    bg: "#3B82F610",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function FeatureCard({ f }: { f: (typeof cleaningFeatures)[0] }) {
  const Icon = f.icon;
  return (
    <motion.div
      variants={item}
      className="group relative p-5 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D] hover:bg-[#162850] hover:border-[#3B82F6]/30 transition-all duration-300 cursor-default"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ring-1 ring-[#3B82F6]/20" />
      <div
        className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3"
        style={{ background: f.bg }}
      >
        <Icon className="w-5 h-5" style={{ color: f.accent }} strokeWidth={1.8} />
      </div>
      <h3 className="font-semibold text-[#F1F5F9] mb-1.5 text-sm leading-snug">
        {f.title}
      </h3>
      <p className="text-[#94A3B8] text-xs leading-relaxed">{f.description}</p>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
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
            27 powerful scanners and tools in one native app — no Electron, no subscriptions.
          </p>
        </motion.div>

        {/* Cleaning Features */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-4"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6]">
              Cleaning
            </span>
            <div className="flex-1 h-px bg-[#1E3A5F]" />
            <span className="text-xs text-[#475569]">{cleaningFeatures.length} features</span>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16"
        >
          {cleaningFeatures.map((f) => (
            <FeatureCard key={f.title} f={f} />
          ))}
        </motion.div>

        {/* Analysis & Utility Features */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-4"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5CF6]">
              Analysis &amp; Utility
            </span>
            <div className="flex-1 h-px bg-[#1E3A5F]" />
            <span className="text-xs text-[#475569]">{utilityFeatures.length} features</span>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {utilityFeatures.map((f) => (
            <FeatureCard key={f.title} f={f} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
