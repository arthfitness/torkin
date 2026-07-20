import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import LegalContent from "@/components/ui/LegalContent";
import { privacySections } from "@/lib/data/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Torkin collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb title="Privacy Policy" items={[{ label: "Privacy Policy" }]} />
      <section className="section-y">
        <div className="container-x">
          <LegalContent sections={privacySections} effectiveDate="January 1, 2025" />
        </div>
      </section>
    </>
  );
}
