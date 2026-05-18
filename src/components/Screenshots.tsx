"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const screenshots = [1, 2, 4, 5, 6, 7, 8, 9, 10].map((n) => ({
  src: `/screenshots/${String(n).padStart(2, "0")}.png`,
  alt: `SandClean screenshot ${n}`,
}));

export default function Screenshots() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 border-t border-[#1E3A5F] overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center px-6 mb-12"
      >
        <p className="text-[#3B82F6] text-sm font-semibold uppercase tracking-widest mb-3">
          Screenshots
        </p>
        <h2 className="text-4xl font-bold text-[#F1F5F9] tracking-tight">
          See It in Action
        </h2>
      </motion.div>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {screenshots.map((s, i) => (
          <motion.div
            key={s.src}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex-none snap-center w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[36vw] xl:w-[30vw]"
          >
            {/* macOS window chrome */}
            <div className="rounded-xl border border-[#1E3A5F] bg-[#0F1F3D] shadow-xl overflow-hidden">
              <div className="flex items-center gap-2 px-3 py-2 border-b border-[#1E3A5F] bg-[#0A1628]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              </div>
              <div className="relative aspect-[16/10]">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 80vw, (max-width: 768px) 60vw, (max-width: 1024px) 45vw, 30vw"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll hint */}
      <p className="text-center text-xs text-[#64748B] mt-4 px-6">
        Scroll horizontally to see more
      </p>
    </section>
  );
}
