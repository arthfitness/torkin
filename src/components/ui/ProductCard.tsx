import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/data/products";
import ProductFrame from "@/components/ui/ProductFrame";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded bg-white shadow-card ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-pop dark:bg-surface-dark dark:ring-white/10"
    >
      <div className="relative">
        <ProductFrame
          src={product.thumb}
          alt={`${product.name} manufactured by Torkin`}
          size="sm"
          imgClassName="transition-transform duration-500 [@media(hover:hover)]:group-hover:scale-110"
        />
        <span className="absolute left-3 top-3 rounded bg-white/90 px-2 py-1 font-accent text-xs font-bold text-ink-900">
          0{index + 1}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-2xl text-ink-900 transition-colors group-hover:text-brand dark:text-white">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted dark:text-muted-light">{product.tagline}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-accent text-xs font-bold uppercase tracking-wide text-brand">
          View Details
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>
    </Link>
  );
}
