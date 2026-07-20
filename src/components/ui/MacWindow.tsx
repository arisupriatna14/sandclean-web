import Image from "next/image";

/* macOS window chrome (traffic lights + optional title) wrapping a screenshot.
   Used by the hero and the showcase strip so the framing stays identical. */
export function MacWindow({
  src,
  alt,
  title,
  priority = false,
  sizes,
  compact = false,
  className = "",
}: {
  src: string;
  alt: string;
  title?: string;
  priority?: boolean;
  sizes?: string;
  /* Smaller chrome for the showcase cards. */
  compact?: boolean;
  className?: string;
}) {
  const dot = compact ? "h-2.5 w-2.5" : "h-3 w-3";

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-[var(--stroke)] bg-surface shadow-[var(--card-shadow-hi)] ${className}`}
    >
      <div
        className={`flex items-center gap-2 border-b border-[var(--stroke)] bg-surface-hi ${
          compact ? "px-3 py-2" : "px-4 py-3"
        }`}
      >
        <span className={`${dot} rounded-full bg-[#FF5F57]`} />
        <span className={`${dot} rounded-full bg-[#FFBD2E]`} />
        <span className={`${dot} rounded-full bg-[#28C840]`} />
        {title && (
          <span className="ml-3 text-xs font-bold text-ink-dim">{title}</span>
        )}
      </div>
      <div className="relative aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
