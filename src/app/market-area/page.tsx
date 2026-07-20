import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cities } from "@/lib/data/cities";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Market Area",
  description:
    "Cities and regions where Torkin supplies industrial couplings, including Delhi NCR, Mumbai, Bangalore, Chennai, and more.",
};

export default function MarketAreaPage() {
  return (
    <>
      <Breadcrumb title="Market Area" items={[{ label: "Market Area" }]} />
      <section className="section-y">
        <div className="container-x">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="sub-title">Where We Supply</span>
            <h2 className="mt-3 font-heading text-4xl text-ink-900 dark:text-white">
              Serving Industrial Buyers Nationwide
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted dark:text-muted-light">
              We regularly dispatch couplings to distributors, OEMs and
              maintenance teams across the following regions. Select a city
              to see coupling options available for dispatch there.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city, i) => (
              <ScrollReveal
                key={city.slug}
                delay={(i % 6) * 0.05}
                className="rounded bg-surface-alt p-5 dark:bg-surface-dark"
              >
                <div className="flex items-center gap-2 font-heading text-2xl text-ink-900 dark:text-white">
                  <MapPin size={18} className="text-brand" />
                  {city.name}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {products.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/${city.slug}/${p.slug}`}
                      className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink-900 shadow-sm ring-1 ring-black/5 transition-colors hover:bg-brand hover:text-white dark:bg-surface-dark-alt dark:text-white dark:ring-white/10"
                    >
                      {p.shortName}
                    </Link>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
