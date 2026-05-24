"use client";

import { useEffect } from "react";
import { logEvent } from "firebase/analytics";
import { getAnalyticsInstance } from "@/lib/firebase";

export default function Analytics() {
  useEffect(() => {
    getAnalyticsInstance().then((analytics) => {
      if (!analytics) return;
      logEvent(analytics, "page_view", {
        page_title: "SandClean Landing Page",
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    });
  }, []);

  return null;
}
