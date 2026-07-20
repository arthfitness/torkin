import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { products } from "@/lib/data/products";
import { siteConfig } from "@/lib/data/site";
import Logo from "@/components/ui/Logo";

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Market Area", href: "/market-area" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-white">
      <div className="container-x grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="h-14 w-auto" onDark />
          <p className="mt-4 text-sm leading-relaxed text-muted-light">
            Manufacturer of industrial couplings serving textile, packaging,
            HVAC, and power-generation drivetrains since {siteConfig.foundedYear}.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white transition-transform hover:scale-110"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-b from-[#2ea2f8] to-[#1461c9] text-white transition-transform hover:scale-110"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff0000] text-white transition-transform hover:scale-110"
            >
              <FaYoutube size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-heading text-xl text-white">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-muted-light transition-colors hover:text-brand">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-heading text-xl text-white">Our Products</h3>
          <ul className="space-y-3">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  className="text-sm text-muted-light transition-colors hover:text-brand"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-heading text-xl text-white">Get In Touch</h3>
          <ul className="space-y-4 text-sm text-muted-light">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
              {siteConfig.address}
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-brand" />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-brand">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-brand" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-muted-light sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {policyLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-brand">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
