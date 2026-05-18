import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#1E3A5F] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/app-icon.png" alt="SandClean" width={24} height={24} className="rounded-md opacity-70" />
          <span className="text-sm font-medium text-[#64748B]">SandClean</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs text-[#64748B]">
          <span>macOS 13 Ventura or later</span>
        </div>

        <p className="text-xs text-[#64748B]">
          © 2026 Ari Supriatna · Requires Full Disk Access for complete scan coverage
        </p>
      </div>
    </footer>
  );
}
