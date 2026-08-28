import { Suspense } from "react";
import SlideShow from "@/components/slides/SlideShow";
import { slides } from "@/components/slides/deck2";

export const metadata = {
  title: "SandClean Deep Dive — Sandbox, Signing & Distribution",
  description:
    "What App Sandbox actually means on macOS, how strict Apple is about Full Disk Access, and how one source tree ships both a DMG and a Mac App Store build.",
};

export default function SlidesTwoPage() {
  return (
    <Suspense>
      <SlideShow slides={slides} />
    </Suspense>
  );
}
