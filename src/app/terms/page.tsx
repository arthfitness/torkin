import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import LegalContent from "@/components/ui/LegalContent";
import { termsSections } from "@/lib/data/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions governing the use of the Torkin website.",
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumb title="Terms & Conditions" items={[{ label: "Terms & Conditions" }]} />
      <section className="section-y">
        <div className="container-x">
          <LegalContent sections={termsSections} effectiveDate="January 1, 2025" />
        </div>
      </section>
    </>
  );
}
