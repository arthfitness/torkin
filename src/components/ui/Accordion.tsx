"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-black/5 rounded bg-white shadow-card ring-1 ring-black/5 dark:divide-white/10 dark:bg-surface-dark dark:ring-white/10">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div key={item.id}>
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenId(open ? null : item.id)}
              aria-expanded={open}
            >
              <span className="font-accent text-sm font-bold text-ink-900 dark:text-white sm:text-base">
                {item.question}
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface-muted text-ink-900 transition-transform duration-300 dark:bg-white/10 dark:text-white ${
                  open ? "rotate-180 bg-brand text-white dark:bg-brand" : ""
                }`}
              >
                <ChevronDown size={16} />
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-muted dark:text-muted-light">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
