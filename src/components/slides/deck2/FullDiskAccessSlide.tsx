"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, X, ShieldAlert, Hand, EyeOff, FileWarning } from "lucide-react";
import CodeBlock from "../CodeBlock";
import { useLang } from "../LangContext";
import { t } from "../translations";

const PROBE = `static func hasFullDiskAccess() -> Bool {
    // Enumerating ~/Library/Safari is what makes macOS register the
    // app in the TCC database, so it shows up in System Settings.
    // isReadableFile alone is not enough to trigger registration.
    let safariPath = PathConstants.fdaTestPath.path
    let contents = try? FileManager.default
        .contentsOfDirectory(atPath: safariPath)
    return contents != nil
}`;

interface Fact {
  icon: React.ElementType;
  accent: string;
  title: string;
  detail: string;
  info: string;
}

function InfoModal({ fact, onClose }: { fact: Fact; onClose: () => void }) {
  const Icon = fact.icon;
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
          style={{ borderColor: fact.accent + "40" }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#64748B] hover:text-[#94A3B8] transition-colors"
          >
            <X className="w-4 h-4" strokeWidth={2} />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: fact.accent + "20" }}
            >
              <Icon className="w-4 h-4" style={{ color: fact.accent }} strokeWidth={1.8} />
            </div>
            <p className="text-[#F1F5F9] font-bold text-sm">{fact.title}</p>
          </div>

          <p className="text-[#94A3B8] text-sm leading-relaxed">{fact.info}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function FullDiskAccessSlide() {
  const lang = useLang();
  const [activeFact, setActiveFact] = useState<Fact | null>(null);

  const facts: Fact[] = [
    {
      icon: ShieldAlert,
      accent: "#EF4444",
      title: t(lang, "You cannot just ask for it", "Kamu tidak bisa sekadar memintanya"),
      detail: t(lang, "The permission exists, but Apple has to hand it to you personally.", "Izinnya ada, tapi Apple harus memberikannya ke kamu secara personal."),
      info: t(lang, "There is an entitlement for reading the whole disk. Writing it into your app does nothing on its own — Apple has to countersign it, and you request that through a form, with a written explanation of why your app deserves it. In practice it goes to a handful of well-known utilities that have been around for years. The first plan for SandClean assumed the request would be approved. Waiting months to find out was not a plan, so it was dropped.", "Ada entitlement untuk membaca seluruh disk. Menuliskannya ke app kamu sendiri tidak berefek apa-apa — Apple harus ikut menandatanganinya, dan kamu mengajukannya lewat sebuah form, dengan penjelasan tertulis kenapa app kamu layak mendapatkannya. Praktiknya, itu diberikan ke segelintir utility terkenal yang sudah bertahun-tahun ada. Rencana pertama SandClean mengasumsikan pengajuannya akan disetujui. Menunggu berbulan-bulan hanya untuk tahu jawabannya bukan sebuah rencana, jadi rencana itu dibatalkan."),
    },
    {
      icon: Hand,
      accent: "#F97316",
      title: t(lang, "There is no pop-up to show", "Tidak ada pop-up untuk ditampilkan"),
      detail: t(lang, "The user has to go into Settings and switch it on themselves.", "User harus masuk ke Settings dan menyalakannya sendiri."),
      info: t(lang, "Camera, microphone, contacts, photos — an app can ask for all of those and macOS shows the familiar Allow / Don't Allow box. Full Disk Access has no such box. There is no way for an app to request it. The most it can do is open System Settings on the right page and explain what to do next; the user then has to find the app in a list and flip the switch. SandClean opens that page directly, and falls back to the general Privacy & Security page if the shortcut stops working in a future macOS.", "Kamera, mikrofon, kontak, foto — app bisa meminta semuanya dan macOS memunculkan kotak Allow / Don't Allow yang familiar. Full Disk Access tidak punya kotak seperti itu. Tidak ada cara bagi app untuk memintanya. Paling jauh, app bisa membuka System Settings di halaman yang tepat dan menjelaskan langkah berikutnya; user lalu harus menemukan sendiri app-nya di sebuah daftar dan menyalakan switch-nya. SandClean membuka halaman itu langsung, dan mundur ke halaman Privacy & Security umum kalau jalan pintasnya berhenti bekerja di macOS versi berikutnya."),
    },
    {
      icon: EyeOff,
      accent: "#8B5CF6",
      title: t(lang, "You are invisible until you try", "Kamu tidak terlihat sampai mencoba"),
      detail: t(lang, "The app only shows up in that list after it has been refused once.", "App baru muncul di daftar itu setelah sekali ditolak."),
      info: t(lang, "macOS does not list every installed app under Full Disk Access. An app is added to the list the first time it genuinely tries to open something protected and gets turned away. So there is a small trap: if the app never tries, the user opens Settings, cannot find it, and concludes the app is broken. SandClean deliberately reaches for a protected folder at launch just to get itself onto that list. Politely checking whether the folder is readable is not enough — that question is answered without ever reaching the part of macOS that keeps the list.", "macOS tidak menampilkan semua app terinstal di bawah Full Disk Access. Sebuah app ditambahkan ke daftar itu saat pertama kali benar-benar mencoba membuka sesuatu yang terproteksi lalu ditolak. Jadi ada jebakan kecil: kalau app-nya tidak pernah mencoba, user membuka Settings, tidak menemukannya, dan menyimpulkan app-nya rusak. SandClean sengaja menjangkau folder terproteksi saat launch semata-mata supaya masuk ke daftar itu. Sekadar menanyakan apakah foldernya bisa dibaca tidak cukup — pertanyaan itu dijawab tanpa pernah menyentuh bagian macOS yang menyimpan daftarnya."),
    },
    {
      icon: FileWarning,
      accent: "#F59E0B",
      title: t(lang, "And it does not help inside the sandbox", "Dan itu tidak membantu di dalam sandbox"),
      detail: t(lang, "Even if Apple granted it, a sandboxed app still cannot use it.", "Bahkan kalau Apple memberikannya, app yang sandboxed tetap tidak bisa memakainya."),
      info: t(lang, "This is the part that catches people out. Full Disk Access and the sandbox are two separate walls, and the sandbox is the inner one. An app locked in its room does not get out just because someone handed it a key to the building — macOS stops the request at the room door, long before the key is ever checked. So 'ship on the App Store and ask for Full Disk Access' is not a strategy that can work. The two things sound like they combine. They do not.", "Ini bagian yang sering membuat orang keliru. Full Disk Access dan sandbox adalah dua dinding terpisah, dan sandbox adalah dinding yang di dalam. App yang terkunci di kamarnya tidak jadi bisa keluar hanya karena diberi kunci gedung — macOS menghentikan permintaannya di pintu kamar, jauh sebelum kuncinya sempat diperiksa. Jadi 'rilis di App Store lalu minta Full Disk Access' bukan strategi yang bisa berhasil. Keduanya terdengar seperti bisa digabung. Nyatanya tidak."),
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-5">
        <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
          07 — {"Full Disk Access"}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] tracking-tight">
          {"Apple will not give you this."}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        <div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {facts.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.09 }}
                className="p-3.5 rounded-2xl border border-[#1E3A5F] bg-[#0F1F3D]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: f.accent }} strokeWidth={2} />
                  <p className="text-[#F1F5F9] font-semibold text-xs flex-1">{f.title}</p>
                  <button
                    onClick={() => setActiveFact(f)}
                    className="flex-shrink-0 text-[#334155] hover:text-[#94A3B8] transition-colors duration-150"
                    aria-label={`Info about ${f.title}`}
                  >
                    <Info className="w-3.5 h-3.5" strokeWidth={2} />
                  </button>
                </div>
                <p className="text-[#64748B] text-xs leading-relaxed">{f.detail}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
          className="sm:col-span-2"
        >
          <CodeBlock code={PROBE} caption="PermissionService.swift — DMG build" accent="#EF4444" highlight={[6, 7]} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4 p-3.5 rounded-xl border border-[#1E3A5F] bg-[#0F1F3D]"
      >
        <p className="text-[#94A3B8] text-xs leading-relaxed">
          <span className="text-[#F1F5F9] font-semibold">{t(lang, "The conclusion: ", "Kesimpulannya: ")}</span>
          {t(lang, "an app whose whole job is looking at your entire disk cannot be the same app on the App Store. CleanMyMac X and DaisyDisk are sold outside it for exactly this reason. SandClean does both — by being two apps.", "app yang pekerjaannya justru melihat seluruh disk kamu tidak bisa jadi app yang sama di App Store. CleanMyMac X dan DaisyDisk dijual di luar App Store persis karena alasan ini. SandClean melakukan keduanya — dengan menjadi dua app.")}
        </p>
      </motion.div>

      {activeFact && <InfoModal fact={activeFact} onClose={() => setActiveFact(null)} />}
    </div>
  );
}
