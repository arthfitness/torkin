import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-ink-950 px-4 text-center text-white">
      <span className="font-heading text-[10rem] leading-none text-brand sm:text-[14rem]">404</span>
      <h1 className="mt-2 font-heading text-3xl sm:text-4xl">Page Not Found</h1>
      <p className="mt-3 max-w-md text-sm text-white/60">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved. Try heading back home or browsing our products.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className="btn-brand">
          <Home size={16} /> Back to Home
        </Link>
        <Link href="/products" className="btn-outline">
          <Search size={16} /> Browse Products
        </Link>
      </div>
    </section>
  );
}
