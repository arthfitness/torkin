import type { Metadata } from "next";
import { Check } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Torkin has manufactured industrial couplings since 2015, supplying tyre, rigid, pin bush, spacer and star couplings across India and neighbouring markets.",
};

const milestones = [
  { year: `${siteConfig.foundedYear}`, text: "Founded as a small coupling workshop in New Delhi." },
  { year: `${siteConfig.foundedYear + 3}`, text: "Expanded the product line to all six coupling families." },
  { year: `${siteConfig.foundedYear + 6}`, text: "Began supplying distributors across multiple states." },
  { year: "Today", text: "Serving textile, packaging, HVAC and power-generation customers nationwide." },
];

const values = [
  {
    title: "Precision Machining",
    text: "Every bore, keyway and flange is machined to the tolerance the application needs, checked before it ships.",
  },
  {
    title: "Material Consistency",
    text: "We source castings and elastomer compounds from qualified suppliers and batch-test wear elements.",
  },
  {
    title: "Responsive Support",
    text: "Our engineers help size the right coupling family for your torque, misalignment and duty-cycle needs.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb title="About Us" items={[{ label: "About" }]} />

      <section className="section-y">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ScrollReveal className="aspect-square overflow-hidden rounded bg-white p-8 shadow-card ring-1 ring-black/5 dark:ring-white/10 sm:p-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/products/about.png"
              alt="Torkin manufacturing team"
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <span className="sub-title">Our Story</span>
            <h2 className="mt-3 font-heading text-4xl text-ink-900 dark:text-white sm:text-5xl">
              Built On the Shop Floor, Not a Boardroom
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted dark:text-muted-light">
              Torkin started as a small coupling workshop in New Delhi in{" "}
              {siteConfig.foundedYear} and has grown into a manufacturer
              supplying six coupling families to industrial buyers across the
              country. We machine to order, keep wear parts in stock, and
              stand behind every unit we ship.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted dark:text-muted-light">
              Our focus has stayed the same since day one: couplings that
              keep running under continuous industrial duty, backed by
              engineers who can help you pick the right one the first time.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-y bg-surface-alt dark:bg-surface-dark-alt">
        <div className="container-x">
          <ScrollReveal className="mx-auto max-w-xl text-center">
            <span className="sub-title">What Drives Us</span>
            <h2 className="mt-3 font-heading text-4xl text-ink-900 dark:text-white">Our Values</h2>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1} className="rounded bg-white p-6 shadow-card ring-1 ring-black/5 dark:bg-surface-dark dark:ring-white/10">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Check size={20} />
                </span>
                <h3 className="mt-4 font-heading text-2xl text-ink-900 dark:text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted dark:text-muted-light">{v.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <ScrollReveal className="mx-auto max-w-xl text-center">
            <span className="sub-title">Milestones</span>
            <h2 className="mt-3 font-heading text-4xl text-ink-900 dark:text-white">Our Journey</h2>
          </ScrollReveal>
          <div className="mx-auto mt-12 max-w-2xl space-y-6">
            {milestones.map((m, i) => (
              <ScrollReveal
                key={m.year}
                delay={i * 0.08}
                className="flex gap-5 rounded bg-surface-alt p-5 dark:bg-surface-dark"
              >
                <span className="font-heading text-3xl text-brand">{m.year}</span>
                <p className="self-center text-sm text-ink-900 dark:text-white">{m.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
