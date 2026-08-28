"use client";

interface CodeBlockProps {
  code: string;
  caption?: string;
  /** 1-indexed line numbers to emphasise. */
  highlight?: number[];
  accent?: string;
  className?: string;
}

/**
 * Minimal code surface for the deck — no syntax-highlighting dependency.
 * Text is deliberately tiny because the slides layout sets html { font-size: 20px }.
 */
export default function CodeBlock({
  code,
  caption,
  highlight = [],
  accent = "#3B82F6",
  className = "",
}: CodeBlockProps) {
  const lines = code.replace(/\n$/, "").split("\n");

  return (
    <div className={`rounded-xl border border-[#1E3A5F] bg-[#0F1F3D] overflow-hidden ${className}`}>
      {caption && (
        <div className="px-3 py-1.5 border-b border-[#1E3A5F] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />
          <code className="text-[10px] font-mono text-[#64748B]">{caption}</code>
        </div>
      )}
      <div className="overflow-x-auto scrollbar-none">
        <pre className="py-2 text-[10px] leading-[1.55] font-mono">
          {lines.map((line, i) => {
            const isHot = highlight.includes(i + 1);
            return (
              <div
                key={i}
                className={`px-3 border-l-2 ${isHot ? "" : "border-transparent"}`}
                style={
                  isHot
                    ? { borderLeftColor: accent, background: accent + "14" }
                    : undefined
                }
              >
                <span className={isHot ? "text-[#F1F5F9]" : "text-[#94A3B8]"}>
                  {line === "" ? " " : line}
                </span>
              </div>
            );
          })}
        </pre>
      </div>
    </div>
  );
}
