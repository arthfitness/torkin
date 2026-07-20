import Link from "next/link";
import { faqs } from "@/lib/data/faqs";
import Accordion from "@/components/ui/Accordion";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FaqSection() {
  return (
    <section className="section-y dark:bg-surface-dark-alt">
      <div className="container-x">
        <ScrollReveal className="mx-auto max-w-xl text-center">
          <span className="sub-title">Common Questions</span>
          <h2 className="mt-3 font-heading text-4xl text-ink-900 dark:text-white sm:text-5xl">FAQ</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <Accordion items={faqs} />
          <p className="mt-6 text-center text-sm text-muted dark:text-muted-light">
            Still have a question?{" "}
            <Link href="/contact" className="font-bold text-brand hover:underline">
              Get in touch
            </Link>
            .
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
