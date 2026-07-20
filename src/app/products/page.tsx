import type { Metadata } from "next";
import { products } from "@/lib/data/products";
import ProductCard from "@/components/ui/ProductCard";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Browse Torkin's full range of industrial couplings: tyre, rigid, pin bush, spacer, star coupling and star coupler.",
};

export default function ProductsPage() {
  return (
    <>
      <Breadcrumb title="Our Products" items={[{ label: "Products" }]} />
      <section className="section-y">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
