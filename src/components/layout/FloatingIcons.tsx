"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { siteConfig } from "@/lib/data/site";
import EmailModal from "@/components/forms/EmailModal";

const socialIcons = [
  {
    href: siteConfig.social.instagram,
    label: "Instagram",
    icon: FaInstagram,
    className: "bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
  },
  {
    href: siteConfig.social.facebook,
    label: "Facebook",
    icon: FaFacebookF,
    className: "bg-gradient-to-b from-[#2ea2f8] to-[#1461c9]",
  },
  { href: siteConfig.social.youtube, label: "YouTube", icon: FaYoutube, className: "bg-[#ff0000]" },
];

export default function FloatingIcons() {
  const [emailOpen, setEmailOpen] = useState(false);

  return (
    <>
      <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2.5 md:flex">
        {socialIcons.map(({ href, label, icon: Icon, className }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            className={`flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-200 hover:scale-110 ${className}`}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>

      <div className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-start gap-2.5 md:flex">
        {siteConfig.paymentLink && (
          <a
            href={siteConfig.paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Pay Now"
            className="mb-3 rounded-r-full bg-[#25d366] py-2.5 pl-4 pr-5 font-accent text-xs font-bold text-white shadow-lg transition-transform duration-200 hover:scale-105"
          >
            Payment Gateway
          </a>
        )}

        <button
          title="Email"
          onClick={() => setEmailOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-r-full bg-red-600 text-white shadow-lg transition-transform duration-200 hover:scale-110"
        >
          <Mail size={20} />
        </button>

        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          className="flex h-11 w-11 items-center justify-center rounded-r-full bg-[#25d366] text-white shadow-lg transition-transform duration-200 hover:scale-110"
        >
          <FaWhatsapp size={22} />
        </a>

        <a
          href={`tel:${siteConfig.phone}`}
          title="Call"
          className="flex h-11 w-11 items-center justify-center rounded-r-full bg-blue-600 text-white shadow-lg transition-transform duration-200 hover:scale-110"
        >
          <Phone size={20} />
        </a>
      </div>

      <EmailModal open={emailOpen} onClose={() => setEmailOpen(false)} />
    </>
  );
}
