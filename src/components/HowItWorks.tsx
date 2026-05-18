"use client";

import { motion } from "framer-motion";
import { ScanSearch, ListChecks, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ScanSearch,
    title: "Scan",
    description:
      'Hit “Smart Scan” and SandClean concurrently analyzes all seven categories on your Mac — takes seconds, not minutes.',
    accent: "#3B82F6",
    bg: "#3B82F610",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Review",
    description:
      "See exactly what's using your storage, broken down by category with sizes. Decide what stays and what goes.",
    accent: "#8B5CF6",
    bg: "#8B5CF610",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Clean",
    description:
      "Remove the clutter with one click. SandClean moves everything to Trash — nothing is permanently deleted without your say-so.",
    accent: "#F97316",
    bg: "#F9731610",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 border-t border-[#1E3A5F]">
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
            How It Works
          </p>
          <h2 className="text-4xl font-bold text-[#F1F5F9] tracking-tight">
            Clean in Three Steps
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-gradient-to-r from-[#3B82F6]/40 via-[#8B5CF6]/40 to-[#F97316]/40" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div
                  className="relative z-10 flex items-center justify-center w-20 h-20 rounded-2xl border border-[#1E3A5F] mb-6"
                  style={{ background: step.bg }}
                >
                  <Icon className="w-8 h-8" style={{ color: step.accent }} strokeWidth={1.5} />
                  {/* Step number badge */}
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: step.accent }}
                  >
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#F1F5F9] mb-3">{step.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
