import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SandClean — Native macOS Storage Cleaner",
  description:
    "Free up disk space on your Mac. SandClean removes caches, Xcode artifacts, large files, duplicates, and dev tool junk — safely and natively.",
  keywords: ["macOS", "storage cleaner", "Xcode cleaner", "disk cleanup", "SandClean"],
  authors: [{ name: "Ari Supriatna" }],
  openGraph: {
    title: "SandClean — Native macOS Storage Cleaner",
    description: "Free up disk space on your Mac the native way.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A1628] text-[#F1F5F9]">
        {children}
      </body>
    </html>
  );
}
