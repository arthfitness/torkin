import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { getProductBySlug, products } from "@/lib/data/products";
import { specTablesByProduct } from "@/lib/data/spec-tables";
import { cities, getCityBySlug } from "@/lib/data/cities";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProductFrame from "@/components/ui/ProductFrame";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SpecTables from "@/components/ui/SpecTables";

export function generateStaticParams() {
  return cities.flatMap((city) =>
    products.map((product) => ({ city: city.slug, product: product.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; product: string }>;
}): Promise<Metadata> {
  const { city: citySlug, product: productSlug } = await params;
  const city = getCityBySlug(citySlug);
  const product = getProductBySlug(productSlug);
  if (!city || !product) return {};
  return {
    title: `${product.name} Manufacturer in ${city.name}`,
    description: `${product.summary} Supplying ${product.name.toLowerCase()} units to industrial buyers in ${city.name}.`,
  };
}

export default async function CityProductPage({
  params,
}: {
  params: Promise<{ city: string; product: string }>;
}) {
  const { city: citySlug, product: productSlug } = await params;
  const city = getCityBySlug(citySlug);
  const product = getProductBySlug(productSlug);
  if (!city || !product) notFound();

  const specTables = specTablesByProduct[product.slug];

  return (
    <>
      <Breadcrumb
        title={`${product.name} in ${city.name}`}
        items={[
          { label: "Products", href: "/products" },
          { label: product.name, href: `/products/${product.slug}` },
          { label: city.name },
        ]}
      />

      <section className="section-y">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ScrollReveal className="overflow-hidden rounded shadow-card">
            <ProductFrame
              src={product.heroImage}
              alt={`${product.name} manufacturer in ${city.name}`}
              size="lg"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <span className="sub-title flex items-center gap-1.5">
              <MapPin size={14} /> Serving {city.name}
            </span>
            <h2 className="mt-3 font-heading text-4xl text-ink-900 dark:text-white sm:text-5xl">
              {product.name} Supplier in {city.name}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted dark:text-muted-light">
              {product.summary} We regularly dispatch {product.name.toLowerCase()}{" "}
              units to industrial buyers, distributors and machine-builders
              based in and around {city.name}.
            </p>

            <ul className="mt-6 space-y-3">
              {product.features.slice(0, 4).map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-ink-900 dark:text-white">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-brand">
                Request a Quote <ArrowRight size={16} />
              </Link>
              <Link href={`/products/${product.slug}`} className="btn-outline !text-ink-900 !border-ink-900/20 hover:!text-white dark:!text-white dark:!border-white/20">
                Full Specifications
              </Link>
            </div>
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
        <div className="container-x">
          <ScrollReveal className="mb-8 text-center">
            <span className="sub-title">Also Available In</span>
            <h3 className="mt-3 font-heading text-3xl text-ink-900 dark:text-white">
              {product.name} in Other Cities
            </h3>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3">
            {cities
              .filter((c) => c.slug !== city.slug)
              .slice(0, 12)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}/${product.slug}`}
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900 shadow-card ring-1 ring-black/5 transition-colors hover:bg-brand hover:text-white dark:bg-surface-dark dark:text-white dark:ring-white/10"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
