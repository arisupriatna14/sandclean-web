"use client";

import { logEvent } from "firebase/analytics";
import { getAnalyticsInstance } from "@/lib/firebase";
import { APP_VERSION, DOWNLOAD_URL } from "@/lib/config";

/* The single place the DMG link and its analytics event live — used by the
   nav, the hero, and the final CTA so the three can never drift apart. */
async function logDownloadClick() {
  const analytics = await getAnalyticsInstance();
  if (!analytics) return;
  logEvent(analytics, "download_dmg_click", {
    app_version: APP_VERSION,
    platform: "macOS",
  });
}

export function DownloadButton({
  label = "Download DMG",
  size = "md",
  className = "",
}: {
  label?: string;
  size?: "sm" | "md";
  className?: string;
}) {
  const sizing =
    size === "sm" ? "px-4 py-2 text-sm gap-1.5" : "px-6 py-3.5 text-sm gap-2";

  return (
    <a
      href={DOWNLOAD_URL}
      onClick={logDownloadClick}
      className={`inline-flex items-center rounded-full bg-accent font-extrabold text-white shadow-lg shadow-brand/20 transition-all hover:scale-105 hover:bg-accent-hi active:scale-95 ${sizing} ${className}`}
    >
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      {label}
    </a>
  );
}
