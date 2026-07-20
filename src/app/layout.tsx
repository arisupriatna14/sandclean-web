import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* Display face — geometric and technical, a better fit for a developer
   utility than a serif. Used for headings via `font-display`. */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sandclean.vercel.app"),
  title: "SandClean — Native macOS Storage Cleaner",
  description:
    "Free up disk space on your Mac. SandClean removes caches, Xcode artifacts, large files, duplicates, and dev tool junk — safely and natively.",
  keywords: ["macOS", "storage cleaner", "Xcode cleaner", "disk cleanup", "SandClean"],
  authors: [{ name: "Ari Supriatna" }],
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png",
  },
  openGraph: {
    title: "SandClean — Native macOS Storage Cleaner",
    description: "Free up disk space on your Mac the native way.",
    images: ["/screenshot.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SandClean — Native macOS Storage Cleaner",
    description: "Free up disk space on your Mac the native way.",
    images: ["/screenshot.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F6F8FC",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
