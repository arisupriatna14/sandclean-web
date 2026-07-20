"use client";

import { useState } from "react";
import { Reveal, Eyebrow } from "@/components/ui/Reveal";
import { FAQ as ITEMS } from "@/lib/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Good to know
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-3">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={(i % 4) * 0.05}>
                <div className="card overflow-hidden">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-bold text-ink">{item.q}</span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg font-bold transition-all duration-300 ${
                        isOpen ? "rotate-45 bg-accent text-white" : "bg-surface-hi text-accent"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 leading-relaxed text-ink-dim">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
