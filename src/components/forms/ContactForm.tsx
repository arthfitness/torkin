"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import Toast, { ToastState } from "@/components/ui/Toast";
import { siteConfig } from "@/lib/data/site";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function validate(values: FormValues) {
  const errors: Partial<Record<keyof FormValues, string>> = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[0-9+\-\s()]{7,15}$/.test(values.phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!values.message.trim()) {
    errors.message = "Tell us a bit about your requirement.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [toast, setToast] = useState<ToastState | null>(null);

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const subject = values.subject || `Website Enquiry from ${values.name}`;
    const bodyLines = [
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email}`,
      "",
      values.message,
    ];
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;

    setToast({
      type: "success",
      message: "Opening your email app to send this enquiry to us — hit send there to complete it.",
    });
    setValues(initialValues);
  };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block font-accent text-xs font-bold uppercase tracking-wide text-ink-900 dark:text-white">
              Full Name
            </label>
            <input
              id="name"
              value={values.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={`w-full rounded border bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-brand dark:bg-surface-dark dark:text-white ${
                errors.name ? "border-red-400" : "border-black/10 dark:border-white/15"
              }`}
              placeholder="Your name"
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="mb-1.5 block font-accent text-xs font-bold uppercase tracking-wide text-ink-900 dark:text-white">
              Phone
            </label>
            <input
              id="phone"
              value={values.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className={`w-full rounded border bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-brand dark:bg-surface-dark dark:text-white ${
                errors.phone ? "border-red-400" : "border-black/10 dark:border-white/15"
              }`}
              placeholder="+91 98XXXXXXXX"
            />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block font-accent text-xs font-bold uppercase tracking-wide text-ink-900 dark:text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`w-full rounded border bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-brand dark:bg-surface-dark dark:text-white ${
              errors.email ? "border-red-400" : "border-black/10 dark:border-white/15"
            }`}
            placeholder="you@company.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="subject" className="mb-1.5 block font-accent text-xs font-bold uppercase tracking-wide text-ink-900 dark:text-white">
            Subject <span className="normal-case text-muted dark:text-muted-light">(optional)</span>
          </label>
          <input
            id="subject"
            value={values.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
            className="w-full rounded border border-black/10 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-brand dark:border-white/15 dark:bg-surface-dark dark:text-white"
            placeholder="e.g. Rigid coupling for 45mm shaft"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block font-accent text-xs font-bold uppercase tracking-wide text-ink-900 dark:text-white">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={values.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className={`w-full resize-none rounded border bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-brand dark:bg-surface-dark dark:text-white ${
              errors.message ? "border-red-400" : "border-black/10 dark:border-white/15"
            }`}
            placeholder="Shaft diameter, torque, RPM, and duty cycle help us respond faster."
          />
          {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
        </div>

        <button type="submit" className="btn-brand w-full sm:w-auto">
          Send Enquiry <Send size={16} />
        </button>
      </form>

      <Toast toast={toast} onClose={() => setToast(null)} />
    </>
  );
}
