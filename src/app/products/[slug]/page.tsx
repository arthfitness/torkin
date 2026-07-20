import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { getProductBySlug, products } from "@/lib/data/products";
import { specTablesByProduct } from "@/lib/data/spec-tables";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProductCard from "@/components/ui/ProductCard";
import ProductFrame from "@/components/ui/ProductFrame";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SpecTables from "@/components/ui/SpecTables";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} Manufacturer`,
    description: product.summary,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const specTables = specTablesByProduct[product.slug];

  return (
    <>
      <Breadcrumb
        title={product.name}
        items={[{ label: "Products", href: "/products" }, { label: product.name }]}
      />

      <section className="section-y">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ScrollReveal className="overflow-hidden rounded shadow-card">
            <ProductFrame
              src={product.heroImage}
              alt={`${product.name} manufactured by Torkin`}
              size="lg"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <span className="sub-title">Torkin Coupling</span>
            <h2 className="mt-3 font-heading text-4xl text-ink-900 dark:text-white sm:text-5xl">{product.name}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted dark:text-muted-light">{product.summary}</p>

            <dl className="mt-6 grid grid-cols-2 gap-4 rounded bg-surface-alt p-5 dark:bg-surface-dark">
              {product.specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="font-accent text-xs font-bold uppercase tracking-wide text-muted dark:text-muted-light">
                    {spec.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-ink-900 dark:text-white">{spec.value}</dd>
                </div>
              ))}
            </dl>

            <Link href="/contact" className="btn-brand mt-7">
              Request a Quote <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {specTables && specTables.length > 0 && (
        <section className="section-y bg-surface-alt dark:bg-surface-dark-alt">
          <div className="container-x">
            <ScrollReveal className="mb-8 text-center">
              <span className="sub-title">Size Range</span>
              <h3 className="mt-3 font-heading text-4xl text-ink-900 dark:text-white">Available Models</h3>
              <p className="mx-auto mt-3 max-w-xl text-sm text-muted dark:text-muted-light">
                Item codes below correspond to bore and torque variants of the{" "}
                {product.name.toLowerCase()}. Confirm shaft diameter and torque
                against a code when requesting a quote.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="mx-auto max-w-2xl">
              <SpecTables tables={specTables} />
            </ScrollReveal>
          </div>
        </section>
      )}

      <section className="section-y">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <h3 className="font-heading text-3xl text-ink-900 dark:text-white">Overview</h3>
            <div className="mt-4 space-y-4">
              {product.description.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-muted dark:text-muted-light">
                  {para}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <ScrollReveal delay={0.1}>
              <h3 className="font-heading text-3xl text-ink-900 dark:text-white">Key Features</h3>
              <ul className="mt-4 space-y-3">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-ink-900 dark:text-white">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h3 className="font-heading text-3xl text-ink-900 dark:text-white">Applications</h3>
              <ul className="mt-4 space-y-3">
                {product.applications.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm text-ink-900 dark:text-white">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <ScrollReveal className="mb-8 text-center">
            <span className="sub-title">Related</span>
            <h3 className="mt-3 font-heading text-4xl text-ink-900 dark:text-white">Other Couplings</h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
