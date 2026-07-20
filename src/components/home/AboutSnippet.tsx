import Link from "next/link";
import { Check } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/data/site";

const points = [
  "In-house machining with tight bore tolerances",
  "Coupling types for flexible, rigid and high-torque duty",
  "Replacement wear elements kept in stock",
  "Direct engineering support for sizing and selection",
];

export default function AboutSnippet() {
  return (
    <section className="section-y overflow-hidden">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <ScrollReveal className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="aspect-square overflow-hidden rounded bg-white p-4 shadow-card ring-1 ring-black/5 dark:ring-white/10 sm:p-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/products/about.png"
              alt="Torkin coupling manufacturing workshop"
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <span className="sub-title">Who We Are</span>
          <h2 className="mt-3 font-heading text-4xl text-ink-900 dark:text-white sm:text-5xl">
            Manufacturing Couplings Since {siteConfig.foundedYear}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted dark:text-muted-light">
            Torkin manufactures a full range of shaft couplings for
            industrial drivetrains — from shock-absorbing tyre couplings to
            precision rigid couplings for aligned-shaft applications. Every
            unit is machined to order and checked against shaft tolerance
            before it leaves the floor.
          </p>

          <div className="mt-6 flex w-full items-center gap-4 rounded bg-brand/5 p-4 dark:bg-brand/10">
            <span className="font-heading text-4xl leading-none text-brand">
              {new Date().getFullYear() - siteConfig.foundedYear}+
            </span>
            <span className="font-accent text-xs font-bold uppercase leading-snug tracking-wide text-ink-900 dark:text-white">
              Years in
              <br />
              Operation
            </span>
          </div>

          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-ink-900 dark:text-white">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Check size={12} strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <Link href="/about" className="btn-brand mt-8">
            More About Us
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
