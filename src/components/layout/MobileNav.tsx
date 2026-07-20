"use client";

import Link from "next/link";
import { ChevronDown, Phone, X } from "lucide-react";
import { useState } from "react";
import { products } from "@/lib/data/products";
import { siteConfig, navLinks } from "@/lib/data/site";
import Logo from "@/components/ui/Logo";

export default function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed inset-y-0 right-0 z-[70] w-[85%] max-w-sm overflow-y-auto bg-white shadow-2xl transition-transform duration-300 dark:bg-surface-dark lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b px-5 py-4 dark:border-white/10">
          <Logo className="h-10 w-auto" />
          <button aria-label="Close menu" onClick={onClose} className="text-ink-900 dark:text-white">
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col px-2 py-3">
          {navLinks.map((link) =>
            link.label === "Our Products" ? (
              <div key={link.href} className="border-b dark:border-white/10">
                <button
                  className="flex w-full items-center justify-between px-3 py-3 font-accent text-sm font-bold uppercase text-ink-900 dark:text-white"
                  onClick={() => setProductsOpen((v) => !v)}
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${productsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    productsOpen ? "grid-rows-[1fr] pb-2" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    {products.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/products/${p.slug}`}
                        onClick={onClose}
                        className="block px-6 py-2 font-accent text-sm text-muted dark:text-muted-light"
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="border-b px-3 py-3 font-accent text-sm font-bold uppercase text-ink-900 dark:border-white/10 dark:text-white"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="border-t p-5 dark:border-white/10">
          <a
            href={`tel:${siteConfig.phone}`}
            className="mb-3 flex items-center gap-2 font-accent text-sm font-bold text-ink-900 dark:text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
              <Phone size={16} />
            </span>
            {siteConfig.phone}
          </a>
          <Link href="/contact" onClick={onClose} className="btn-brand w-full">
            Get a Quote
          </Link>
        </div>
      </aside>
    </>
  );
}
