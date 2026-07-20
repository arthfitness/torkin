import type { LegalSection } from "@/lib/data/legal";

export default function LegalContent({
  sections,
  effectiveDate,
}: {
  sections: LegalSection[];
  effectiveDate: string;
}) {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="mb-8 text-xs font-semibold uppercase tracking-wide text-muted dark:text-muted-light">
        Effective {effectiveDate}
      </p>
      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-heading text-2xl text-ink-900 dark:text-white">{section.heading}</h2>
            <div className="mt-2 space-y-3">
              {section.body.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-muted dark:text-muted-light">
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
