import type { Metadata } from "next";
import Link from "next/link";
import { Logo, Wordmark } from "@/components/ui/Logo";
import { Footer } from "@/components/sections/Footer";
import { PRIVACY_DOC, type Block } from "@/lib/privacy";
import { APP_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: `Privacy Policy — ${APP_NAME}`,
  description:
    "How SandClean handles your data: every scan runs locally on your Mac, nothing is uploaded, and deleted items go to the Trash. Covers the app, optional AI Analysis, updates, and this website.",
  alternates: { canonical: "/privacy-policy" },
};

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) =>
        block.type === "p" ? (
          <p key={i} className="mt-4 leading-relaxed text-ink-dim">
            {block.text}
          </p>
        ) : (
          <ul key={i} className="mt-4 grid gap-2">
            {block.items.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-ink-dim">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )
      )}
    </>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="hairline border-b px-6 py-4">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo size={30} />
            <Wordmark className="text-lg" />
          </Link>
          <Link
            href="/"
            className="text-sm font-extrabold text-accent transition-colors hover:text-accent-hi"
          >
            ← {PRIVACY_DOC.backHome}
          </Link>
        </div>
      </header>

      <main className="flex-1 px-6 py-16">
        <article className="mx-auto max-w-3xl">
          <p className="eyebrow mb-3">
            {PRIVACY_DOC.updatedLabel} · {PRIVACY_DOC.updated}
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {PRIVACY_DOC.title}
          </h1>

          <div className="mt-6 text-lg">
            <Blocks blocks={PRIVACY_DOC.intro} />
          </div>

          {PRIVACY_DOC.sections.map((section) => (
            <section key={section.id} id={section.id} className="mt-12">
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                {section.title}
              </h2>
              <Blocks blocks={section.blocks} />
            </section>
          ))}
        </article>
      </main>

      <Footer />
    </>
  );
}
