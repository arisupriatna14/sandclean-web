"use client";

interface SlideProgressProps {
  total: number;
  current: number;
  onGoTo: (index: number) => void;
}

export default function SlideProgress({ total, current, onGoTo }: SlideProgressProps) {
  return (
    <div className="fixed bottom-6 left-0 right-0 flex items-center justify-center gap-4 z-50 pointer-events-none">
      {/* Keyboard hint */}
      <span className="absolute left-6 bottom-0 text-[#64748B] text-xs font-mono select-none">
        ← →  navigate
      </span>

      {/* Dot indicators */}
      <div className="flex items-center gap-2 pointer-events-auto">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onGoTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2 bg-[#3B82F6]"
                : "w-2 h-2 bg-[#1E3A5F] hover:bg-[#3B82F6]/50"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <span className="absolute right-6 bottom-0 text-[#64748B] text-xs font-mono select-none">
        {current + 1} / {total}
      </span>
    </div>
  );
}
