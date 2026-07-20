import ScrollReveal from "@/components/ui/ScrollReveal";

const industries = [
  "Textile Machinery",
  "Packaging",
  "HVAC",
  "Power Generation",
  "Material Handling",
  "Pumps & Compressors",
  "Printing Machinery",
  "Agitators & Mixers",
];

export default function IndustriesStrip() {
  const looped = [...industries, ...industries];

  return (
    <section className="overflow-hidden bg-ink-950 py-14">
      <ScrollReveal className="container-x mb-8 text-center">
        <span className="sub-title !text-white">Who We Serve</span>
        <h2 className="mt-3 font-heading text-3xl text-white sm:text-4xl">Industries We Supply</h2>
      </ScrollReveal>

      <div className="relative">
        <div className="flex w-max gap-4 marquee-track">
          {looped.map((industry, i) => (
            <span
              key={`${industry}-${i}`}
              className="flex shrink-0 items-center rounded-full border border-white/10 px-6 py-3 font-accent text-sm font-bold uppercase tracking-wide text-white/80"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
