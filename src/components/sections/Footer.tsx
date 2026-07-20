import Link from "next/link";
import { Logo, Wordmark } from "@/components/ui/Logo";
import { APP_NAME, AUTHOR, MIN_MACOS, RELEASES_URL } from "@/lib/config";

export function Footer() {
  const year = 2026;

  return (
    <footer className="hairline border-t px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <Logo size={30} />
            <Wordmark className="text-lg" />
          </div>
          <p className="mt-3 max-w-xs text-sm text-ink-dim">
            A native macOS storage cleaner for people who fill up disks fast.
          </p>
          <p className="mt-1 text-xs text-ink-dim">
            {MIN_MACOS} · Full Disk Access recommended for complete coverage
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-ink-dim sm:items-end">
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="font-bold transition-colors hover:text-accent">
              Privacy Policy
            </Link>
            <a
              href={RELEASES_URL}
              className="font-bold transition-colors hover:text-accent"
              target="_blank"
              rel="noreferrer"
            >
              Releases
            </a>
          </div>
          <p className="text-xs">
            © {year} {AUTHOR} · {APP_NAME} is MIT licensed
          </p>
        </div>
      </div>
    </footer>
  );
}
