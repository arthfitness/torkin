import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items, title }: { items: Crumb[]; title: string }) {
  return (
    <section className="bg-ink-950 py-12">
      <div className="container-x">
        <h1 className="font-heading text-4xl text-white sm:text-5xl">{title}</h1>
        <nav className="mt-3 flex flex-wrap items-center gap-2 text-sm text-white/60">
          <Link href="/" className="flex items-center gap-1 hover:text-brand">
            <Home size={14} /> Home
          </Link>
          {items.map((item) => (
            <span key={item.label} className="flex items-center gap-2">
              <ChevronRight size={14} />
              {item.href ? (
                <Link href={item.href} className="hover:text-brand">
                  {item.label}
                </Link>
              ) : (
                <span className="text-brand">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
