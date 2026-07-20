import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/data/site";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-ink-700 py-16">
      <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
      <ScrollReveal className="container-x relative flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
        <div>
          <h2 className="font-heading text-4xl text-white sm:text-5xl">Let&apos;s Work Together</h2>
          <p className="mt-3 max-w-lg text-sm text-white/70">
            Tell us your shaft size, torque, and duty cycle — we&apos;ll
            recommend the right coupling and get a quote back to you fast.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-brand">
            Request a Quote <ArrowRight size={16} />
          </Link>
          <a href={`tel:${siteConfig.phone}`} className="btn-outline">
            {siteConfig.phone}
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
