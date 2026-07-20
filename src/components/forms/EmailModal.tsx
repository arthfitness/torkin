"use client";

import { FormEvent, useState } from "react";
import Modal from "@/components/ui/Modal";
import { products } from "@/lib/data/products";
import { siteConfig } from "@/lib/data/site";

interface EmailFormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  message: string;
}

const initialValues: EmailFormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  product: "",
  message: "",
};

export default function EmailModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [values, setValues] = useState<EmailFormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof EmailFormValues, string>>>({});

  const set = (field: keyof EmailFormValues, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: Partial<Record<keyof EmailFormValues, string>> = {};
    if (!values.name.trim()) nextErrors.name = "Required";
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email";
    }
    if (!values.message.trim()) nextErrors.message = "Required";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = `Website Enquiry from ${values.name}${values.product ? ` — ${values.product}` : ""}`;
    const bodyLines = [
      `Name: ${values.name}`,
      values.company && `Company: ${values.company}`,
      `Email: ${values.email}`,
      values.phone && `Phone: ${values.phone}`,
      values.product && `Product: ${values.product}`,
      "",
      values.message,
    ].filter(Boolean);

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
    setValues(initialValues);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <h3 className="font-heading text-2xl text-ink-900 dark:text-white">Send Email</h3>
      <form onSubmit={handleSubmit} className="mt-4 max-h-[70vh] space-y-4 overflow-y-auto pr-1 custom-scroll" noValidate>
        <div>
          <label htmlFor="em-name" className="mb-1.5 block text-sm font-semibold text-ink-900 dark:text-white">
            Your Name
          </label>
          <input
            id="em-name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            className={`w-full rounded border bg-white px-3 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand dark:bg-surface-dark dark:text-white ${
              errors.name ? "border-red-400" : "border-black/15 dark:border-white/15"
            }`}
          />
        </div>
        <div>
          <label htmlFor="em-company" className="mb-1.5 block text-sm font-semibold text-ink-900 dark:text-white">
            Company Name
          </label>
          <input
            id="em-company"
            value={values.company}
            onChange={(e) => set("company", e.target.value)}
            className="w-full rounded border border-black/15 bg-white px-3 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand dark:border-white/15 dark:bg-surface-dark dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="em-email" className="mb-1.5 block text-sm font-semibold text-ink-900 dark:text-white">
            Your Email
          </label>
          <input
            id="em-email"
            type="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            className={`w-full rounded border bg-white px-3 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand dark:bg-surface-dark dark:text-white ${
              errors.email ? "border-red-400" : "border-black/15 dark:border-white/15"
            }`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="em-phone" className="mb-1.5 block text-sm font-semibold text-ink-900 dark:text-white">
            Phone Number
          </label>
          <input
            id="em-phone"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            className="w-full rounded border border-black/15 bg-white px-3 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand dark:border-white/15 dark:bg-surface-dark dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="em-product" className="mb-1.5 block text-sm font-semibold text-ink-900 dark:text-white">
            Product
          </label>
          <select
            id="em-product"
            value={values.product}
            onChange={(e) => set("product", e.target.value)}
            className="w-full rounded border border-black/15 bg-white px-3 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand dark:border-white/15 dark:bg-surface-dark dark:text-white"
          >
            <option value="">Select a product (optional)</option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="em-message" className="mb-1.5 block text-sm font-semibold text-ink-900 dark:text-white">
            Message
          </label>
          <textarea
            id="em-message"
            rows={4}
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            className={`w-full resize-none rounded border bg-white px-3 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand dark:bg-surface-dark dark:text-white ${
              errors.message ? "border-red-400" : "border-black/15 dark:border-white/15"
            }`}
          />
          {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full rounded bg-[#4a6fa5] py-2.5 font-accent text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#3d5c8a]"
        >
          Send
        </button>
      </form>
    </Modal>
  );
}
