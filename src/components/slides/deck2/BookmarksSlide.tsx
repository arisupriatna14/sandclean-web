"use client";

import { motion } from "framer-motion";
import { FolderOpen, Bookmark, Database, KeyRound, ArrowRight } from "lucide-react";
import CodeBlock from "../CodeBlock";
import { useLang } from "../LangContext";
import { t } from "../translations";

const GRANT = `let panel = NSOpenPanel()
panel.canChooseDirectories = true
panel.canChooseFiles = false
panel.directoryURL = UserPaths.home
guard panel.runModal() == .OK, let url = panel.url else { return nil }

let data = try? url.bookmarkData(options: .withSecurityScope)
bookmarks[url.path] = data
persist(bookmarks)
url.startAccessingSecurityScopedResource()`;

const RESTORE = `var isStale = false
let url = try URL(resolvingBookmarkData: data,
                  options: .withSecurityScope,
                  relativeTo: nil,
                  bookmarkDataIsStale: &isStale)

guard url.startAccessingSecurityScopedResource() else { continue }
if isStale, let fresh = try? url.bookmarkData(options: .withSecurityScope) {
    bookmarks[url.path] = fresh   // the folder moved — re-mint it
}`;

export default function BookmarksSlide() {
  const lang = useLang();

  const steps = [
    { icon: FolderOpen, accent: "#3B82F6", label: t(lang, "You pick a folder", "Kamu memilih folder"), sub: t(lang, "the usual Open dialog", "jendela Open yang biasa") },
    { icon: Bookmark, accent: "#8B5CF6", label: t(lang, "macOS issues a pass", "macOS menerbitkan tiketnya"), sub: t(lang, "proof you agreed", "bukti kamu setuju") },
    { icon: Database, accent: "#F97316", label: t(lang, "The app stores it", "App menyimpannya"), sub: t(lang, "written to disk", "ditulis ke disk") },
    { icon: KeyRound, accent: "#10B981", label: t(lang, "Next launch, no asking", "Buka lagi, tanpa bertanya"), sub: t(lang, "access comes straight back", "aksesnya langsung pulih") },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-5">
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          08 — {"The Way Around It"}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {"If you pick it, the app may keep it."}
        </h2>
        <p className="mt-3 text-[#94A3B8] text-sm">
          {t(lang, "The sandbox has exactly one exception: a folder you choose yourself in the Open dialog. macOS then hands the app a signed pass proving you gave it away — a security-scoped bookmark. Not a bookmark like in a browser: it is proof of your permission, and the app is allowed to keep it forever.", "Sandbox punya persis satu pengecualian: folder yang kamu pilih sendiri di jendela Open. macOS lalu memberi app sebuah tiket bertanda tangan sebagai bukti kamu menyerahkannya — namanya security-scoped bookmark. Bukan bookmark seperti di browser: ini bukti izin dari kamu, dan app boleh menyimpannya selamanya.")}
        </p>
      </motion.div>

      <div className="flex items-center gap-1.5 mb-4">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="flex items-center gap-1.5 flex-1 min-w-0"
            >
              <div className="flex-1 min-w-0 p-3 rounded-xl border border-[#1E3A5F] bg-[#0F1F3D]">
                <Icon className="w-4 h-4 mb-1.5" style={{ color: s.accent }} strokeWidth={1.8} />
                <p className="text-[#F1F5F9] text-xs font-semibold truncate">{s.label}</p>
                <code className="text-[10px] font-mono text-[#64748B]">{s.sub}</code>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-[#334155] flex-shrink-0" strokeWidth={2} />
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <CodeBlock code={GRANT} caption="BookmarkService.requestAccess()" accent="#3B82F6" highlight={[7]} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <CodeBlock code={RESTORE} caption="BookmarkService.restoreAll()" accent="#10B981" highlight={[8, 9]} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
        className="mt-4 p-3.5 rounded-xl border border-[#1E3A5F] bg-[#0F1F3D]"
      >
        <p className="text-[#94A3B8] text-xs leading-relaxed">
          <span className="text-[#F1F5F9] font-semibold">{t(lang, "So “full access” means two different things: ", "Jadi “akses penuh” berarti dua hal berbeda: ")}</span>
          {t(lang, "in the DMG version it means Full Disk Access, granted in System Settings. In the App Store version it means only this — at some point, you pointed at your Home folder. Same function name in the code, two completely different meanings.", "di versi DMG artinya Full Disk Access, yang diberikan lewat System Settings. Di versi App Store artinya cuma satu — kamu pernah menunjuk folder Home kamu. Nama fungsinya sama di dalam kode, artinya benar-benar berbeda.")}
        </p>
      </motion.div>
    </div>
  );
}
