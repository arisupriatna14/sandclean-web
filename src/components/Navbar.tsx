"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0A1628]/80"
      style={{
        borderBottom: `1px solid rgba(30, 58, 95, ${borderOpacity})`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/app-icon.png"
            alt="SandClean icon"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="font-semibold text-[#F1F5F9] text-lg tracking-tight">
            SandClean
          </span>
        </div>

        {/* CTA */}
        <a
          href="#download"
          className="px-5 py-2 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-medium transition-colors duration-200"
        >
          Download for Mac
        </a>
      </div>
    </motion.nav>
  );
}
