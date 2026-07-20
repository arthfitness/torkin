import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import LegalContent from "@/components/ui/LegalContent";
import { disclaimerSections } from "@/lib/data/legal";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer regarding the information published on the Torkin website.",
};

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumb title="Disclaimer" items={[{ label: "Disclaimer" }]} />
      <section className="section-y">
        <div className="container-x">
          <LegalContent sections={disclaimerSections} effectiveDate="January 1, 2025" />
        </div>
      </section>
    </>
  );
}
