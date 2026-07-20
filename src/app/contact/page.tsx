import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Torkin for coupling selection, custom sizing, and quotes.",
};

const infoCards = [
  { icon: MapPin, label: "Address", value: siteConfig.address },
  { icon: Phone, label: "Phone", value: siteConfig.phone },
  { icon: Mail, label: "Email", value: siteConfig.email },
  { icon: Clock, label: "Hours", value: "Mon – Sat, 9:30 AM – 6:30 PM IST" },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumb title="Contact Us" items={[{ label: "Contact" }]} />
      <section className="section-y">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="sub-title">Get In Touch</span>
            <h2 className="mt-3 font-heading text-4xl text-ink-900 dark:text-white">
              Talk to Our Engineering Team
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted dark:text-muted-light">
              Send us your shaft diameter, torque, and duty cycle and we&apos;ll
              recommend the right coupling family and get back with a quote.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {infoCards.map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded bg-surface-alt p-5 dark:bg-surface-dark">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon size={18} />
                  </span>
                  <p className="mt-3 font-accent text-xs font-bold uppercase tracking-wide text-muted dark:text-muted-light">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink-900 dark:text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded bg-white p-6 shadow-card ring-1 ring-black/5 dark:bg-surface-dark dark:ring-white/10 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="h-80 w-full bg-surface-muted dark:bg-surface-dark">
        <iframe
          title="Location map"
          src="https://maps.google.com/maps?q=Arth+Fitness+Pvt.+Ltd.,28.6751589,77.0654257&t=&z=16&ie=UTF8&iwloc=&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
        />
      </section>
    </>
  );
}
