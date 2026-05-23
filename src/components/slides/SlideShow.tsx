"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { slides } from "./slides";
import SlideProgress from "./SlideProgress";
import { LangContext, type Lang } from "./LangContext";

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: 0.35, ease: "easeIn" as const },
  }),
};

export default function SlideShow() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [lang, setLang] = useState<Lang>(() => {
    const param = searchParams.get("lang");
    return param === "id" ? "id" : "en";
  });
  const touchStartX = useRef<number>(0);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= slides.length) return;
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      else if (e.key === "Home") { e.preventDefault(); goTo(0); }
      else if (e.key === "End") { e.preventDefault(); goTo(slides.length - 1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, goTo]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
  };

  const toggleLang = () => {
    const next: Lang = lang === "en" ? "id" : "en";
    setLang(next);
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", next);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const CurrentSlide = slides[current];

  return (
    <LangContext.Provider value={lang}>
      <div
        className="relative w-screen h-screen overflow-hidden bg-[#0A1628]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex items-center justify-center"
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>

        <SlideProgress total={slides.length} current={current} onGoTo={goTo} />

        {/* Language toggle */}
        <button
          onClick={toggleLang}
          className="absolute top-5 right-5 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#1E3A5F] bg-[#0F1F3D] hover:border-[#3B82F6]/50 hover:bg-[#162850] transition-all duration-200"
        >
          <span className={`text-xs font-semibold transition-colors ${lang === "en" ? "text-[#3B82F6]" : "text-[#64748B]"}`}>EN</span>
          <span className="text-[#1E3A5F] text-xs">/</span>
          <span className={`text-xs font-semibold transition-colors ${lang === "id" ? "text-[#3B82F6]" : "text-[#64748B]"}`}>ID</span>
        </button>

        {/* Edge click zones */}
        {current > 0 && (
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-0 top-0 w-16 h-full z-40 cursor-w-resize opacity-0"
          />
        )}
        {current < slides.length - 1 && (
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-0 top-0 w-16 h-full z-40 cursor-e-resize opacity-0"
          />
        )}
      </div>
    </LangContext.Provider>
  );
}
