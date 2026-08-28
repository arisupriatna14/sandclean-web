import { Suspense } from "react";
import SlideShow from "@/components/slides/SlideShow";
import { slides } from "@/components/slides/slides";

export const metadata = {
  title: "Building SandClean — The Story",
  description: "A developer talk on building a native macOS disk cleaner from scratch.",
};

export default function SlidesPage() {
  return (
    <Suspense>
      <SlideShow slides={slides} />
    </Suspense>
  );
}
