import { products } from "@/lib/data/products";
import ProductCard from "@/components/ui/ProductCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ProductsShowcase() {
  return (
    <section className="section-y bg-surface-alt dark:bg-surface-dark-alt">
      <div className="container-x">
        <ScrollReveal className="mx-auto max-w-xl text-center">
          <span className="sub-title">What We Manufacture</span>
          <h2 className="mt-3 font-heading text-4xl text-ink-900 dark:text-white sm:text-5xl">Our Products</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted dark:text-muted-light">
            Six coupling families covering flexible, rigid, and high-torque
            drivetrain requirements — each machined to shaft tolerance and
            tested before dispatch.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 0.08}>
              <ProductCard product={p} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
