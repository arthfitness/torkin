"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LiquidText from "@/components/ui/LiquidText";
import SparkParticles from "@/components/ui/SparkParticles";

const slides = [
  {
    eyebrow: "Coupling — Manufacturer of Industrial Couplings",
    line1: "Torkin",
    line2: "Couplings",
    subtitle:
      "Precision-manufactured industrial couplings built for continuous duty across textile, packaging, HVAC and power-generation drivetrains.",
  },
  {
    eyebrow: "Engineered in India — Since 2015",
    line1: "Built to Run",
    line2: "Without Failure",
    subtitle:
      "From tyre couplings to heavy-duty star couplers — every unit is machined to shaft tolerance and tested before it leaves the floor.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((v) => (v + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden bg-ink-950">
      {/* Full-bleed workshop/product photo — the image itself contains the diagonal split and accent line */}
      <div className="absolute inset-0 bg-[url('/images/hero/workshop-background.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />

      <SparkParticles />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,95,19,0.2),transparent_45%)]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute -right-10 top-10 h-72 w-72 rounded-full border border-white/5" />

      <div className="relative z-10 w-full px-6 py-24 sm:px-10 lg:px-16 xl:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-md sm:max-w-lg lg:max-w-xl"
          >
            <span className="flex items-center gap-2 font-accent text-xs font-bold uppercase tracking-[2px] text-white/80 sm:text-sm">
              <span className="h-px w-6 bg-brand" />
              {slides[active].eyebrow}
            </span>

            <h1 className="mt-4 font-heading text-5xl leading-[0.95] text-brand sm:text-6xl lg:text-7xl">
              {slides[active].line1}
            </h1>

            <div className="relative mt-1 select-none leading-[0.95]">
              <span
                aria-hidden
                className="absolute left-[6px] top-[6px] font-heading text-5xl text-transparent sm:text-6xl lg:text-7xl"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.18)" }}
              >
                {slides[active].line2}
              </span>
              <LiquidText className="relative font-heading text-5xl sm:text-6xl lg:text-7xl">
                {slides[active].line2}
              </LiquidText>
            </div>

            <p className="mt-6 max-w-md font-body text-base leading-relaxed text-white/70">
              {slides[active].subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/products" className="btn-brand">
                Explore Products <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-14 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-10 bg-brand" : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
