import { Reveal } from "@/components/ui/Reveal";
import { Logo } from "@/components/ui/Logo";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { APP_VERSION, MIN_MACOS } from "@/lib/config";

export function FinalCTA() {
  return (
    <section className="px-6 py-20">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[36px] border border-[var(--stroke)] px-6 py-16 text-center sm:px-14">
        <div className="brand-band absolute inset-0 -z-10" />
        <div className="blueprint-grid pointer-events-none absolute inset-0 -z-10" />
        <div className="brand-glow pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3" />

        <Reveal className="flex flex-col items-center">
          <Logo size={64} />
          <h2 className="font-display mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Get those gigabytes back.
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-dim">
            Download SandClean, run a Smart Scan, and see what your Mac has been hiding.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <DownloadButton label={`Download v${APP_VERSION}`} />
            <p className="text-xs font-bold uppercase tracking-widest text-ink-dim">
              Free · {MIN_MACOS}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
