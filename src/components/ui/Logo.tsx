import Image from "next/image";
import { APP_NAME } from "@/lib/config";

/* App mark + wordmark. The icon is the real app icon shipped in /public. */
export function Logo({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/app-icon.png"
      alt={`${APP_NAME} icon`}
      width={size}
      height={size}
      className="rounded-[22%]"
    />
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-bold tracking-tight text-ink ${className}`}>
      {APP_NAME}
    </span>
  );
}
