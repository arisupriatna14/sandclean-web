import { Suspense } from "react";
import SlideShow from "@/components/slides/SlideShow";

export const metadata = {
  title: "Building SandClean — The Story",
  description: "A developer talk on building a native macOS disk cleaner from scratch.",
};

export default function SlidesPage() {
  return (
    <Suspense>
      <SlideShow />
    </Suspense>
  );
}
