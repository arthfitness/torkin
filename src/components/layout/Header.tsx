"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { products } from "@/lib/data/products";
import { siteConfig, navLinks } from "@/lib/data/site";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MobileNav from "./MobileNav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 dark:bg-surface-dark ${
          scrolled ? "bg-white shadow-card py-2 dark:shadow-none" : "bg-white/95 py-4 dark:bg-surface-dark/95"
        }`}
      >
        <div className="container-x flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-16 w-auto sm:h-20" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) =>
              link.label === "Our Products" ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <button className="flex items-center gap-1 font-accent text-sm font-bold uppercase tracking-wide text-ink-900 transition-colors hover:text-brand dark:text-white">
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className={`absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-4 transition-all duration-200 ${
                      productsOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-1 rounded bg-white p-4 shadow-card ring-1 ring-black/5 dark:bg-surface-dark dark:ring-white/10">
                      {products.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/products/${p.slug}`}
                          className="rounded px-3 py-2.5 font-accent text-sm text-ink-900 transition-colors hover:bg-surface-muted hover:text-brand dark:text-white dark:hover:bg-white/5"
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
                  className="font-accent text-sm font-bold uppercase tracking-wide text-ink-900 transition-colors hover:text-brand dark:text-white"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 font-accent text-sm font-bold text-ink-900 dark:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
                <Phone size={16} />
              </span>
              {siteConfig.phone}
            </a>
            <Link href="/contact" className="btn-brand">
              Get a Quote
            </Link>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <ThemeToggle />
            <button
              aria-label="Open menu"
              className="p-1 text-ink-900 dark:text-white"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>
      <div className="h-[80px]" />
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
