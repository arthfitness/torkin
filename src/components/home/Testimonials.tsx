"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const go = (dir: 1 | -1) =>
    setActive((v) => (v + dir + testimonials.length) % testimonials.length);

  const current = testimonials[active];

  return (
    <section className="section-y bg-surface-alt dark:bg-surface-dark-alt">
      <div className="container-x">
        <ScrollReveal className="mx-auto max-w-xl text-center">
          <span className="sub-title">Testimonial</span>
          <h2 className="mt-3 font-heading text-4xl text-ink-900 dark:text-white sm:text-5xl">What Clients Say</h2>
        </ScrollReveal>

        <div className="relative mx-auto mt-12 max-w-2xl">
          <div className="rounded bg-white p-8 shadow-card ring-1 ring-black/5 dark:bg-surface-dark dark:ring-white/10 sm:p-10">
            <Quote className="text-brand/30" size={40} />
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4 }}
              >
                <p className="mt-4 text-base leading-relaxed text-ink-900 dark:text-white sm:text-lg">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-1 text-brand">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-3 font-heading text-xl text-ink-900 dark:text-white">{current.name}</p>
                <p className="text-xs uppercase tracking-wide text-muted dark:text-muted-light">{current.role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-900 shadow-card transition-colors hover:bg-brand hover:text-white dark:bg-surface-dark dark:text-white"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-brand" : "w-2 bg-ink-900/20 dark:bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-900 shadow-card transition-colors hover:bg-brand hover:text-white dark:bg-surface-dark dark:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
