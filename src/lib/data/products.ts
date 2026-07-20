export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  heroImage: string;
  thumb: string;
  summary: string;
  description: string[];
  features: string[];
  applications: string[];
  specs: ProductSpec[];
}

export const products: Product[] = [
  {
    slug: "tyre-coupling",
    name: "Tyre Coupling",
    shortName: "Tyre",
    tagline: "Flexible torque transmission with built-in shock absorption",
    heroImage: "/images/products/tyre-coupling1.jpeg",
    thumb: "/images/products/tyre-coupling1.jpeg",
    summary:
      "A flexible, tyre-profile rubber element sits between two hubs, absorbing misalignment and vibration while transmitting torque smoothly between driving and driven shafts.",
    description: [
      "Our tyre couplings use a single-piece rubber tyre insert clamped between two cast-iron hubs, giving the assembly the flexibility to absorb shock loads and angular, parallel, and axial misalignment without transmitting stress back into connected machinery.",
      "The rubber element is compounded to resist heat build-up and wear under continuous duty, which keeps replacement intervals long even in dusty or high-vibration plant environments.",
      "Because no lubrication or metal-to-metal contact is involved in the flexible element, maintenance is limited to periodic visual inspection of the tyre insert.",
    ],
    features: [
      "Dampens shock loads and torsional vibration",
      "Accommodates angular, parallel and axial misalignment",
      "No lubrication required",
      "Easy tyre replacement without moving connected units",
      "Available in multiple bore and torque ratings",
    ],
    applications: [
      "Textile machinery drives",
      "Blowers and fans",
      "Conveyor systems",
      "Pumps and compressors",
      "Packaging machinery",
    ],
    specs: [
      { label: "Material", value: "Cast iron hubs, rubber tyre element" },
      { label: "Bore Range", value: "14 mm – 150 mm" },
      { label: "Torque Range", value: "Up to 12,500 Nm" },
      { label: "Max Misalignment", value: "1° angular / 1 mm parallel" },
      { label: "Duty", value: "Continuous industrial duty" },
    ],
  },
  {
    slug: "rigid-coupling",
    name: "Rigid Coupling",
    shortName: "Rigid",
    tagline: "Precision-machined couplings for perfectly aligned shafts",
    heroImage: "/images/products/rigid-coupling.png",
    thumb: "/images/products/rigid-coupling.png",
    summary:
      "A solid, single-piece or clamped design that locks two shafts into one continuous rotating line — built for applications where shafts are precisely aligned and no flexing is required.",
    description: [
      "Rigid couplings are machined from a single billet or supplied as split-clamp pairs, holding the driving and driven shaft in exact concentric alignment with zero backlash.",
      "Because the coupling introduces no flexibility, it transmits torque with maximum efficiency and holds tight positional accuracy — important for applications like line shafting and encoder drives.",
      "Every unit is balanced and bored to customer shaft tolerance before dispatch, so installation is a straightforward keyway-and-bolt fit.",
    ],
    features: [
      "Zero backlash, high torsional stiffness",
      "Split-clamp or sleeve-type designs available",
      "Precision bore-to-shaft fit",
      "Compact axial footprint",
      "Corrosion-resistant finish options",
    ],
    applications: [
      "Line shafting",
      "Pump and motor coupling on rigid bases",
      "Machine tool drives",
      "Precision instrumentation shafts",
    ],
    specs: [
      { label: "Material", value: "EN8 / mild steel, alloy options available" },
      { label: "Bore Range", value: "10 mm – 200 mm" },
      { label: "Type", value: "Sleeve, split-clamp, flanged" },
      { label: "Backlash", value: "Zero" },
      { label: "Duty", value: "Aligned-shaft continuous duty" },
    ],
  },
  {
    slug: "pin-bush-coupling",
    name: "Pin Bush Coupling",
    shortName: "Pin Bush",
    tagline: "Rubber-bushed pins for smooth, quiet torque transfer",
    heroImage: "/images/products/pin-bush-coupling.png",
    thumb: "/images/products/pin-bush-coupling.png",
    summary:
      "Torque is carried through a ring of steel pins sleeved in moulded rubber bushes, giving a coupling that runs quietly and forgives minor misalignment between shafts.",
    description: [
      "Two flanged hubs are joined by a set of pins fitted with rubber bushes; torque passes through the bushes rather than metal-to-metal contact, which reduces gear-rattle and noise transmission.",
      "The bushes are individually replaceable, so wear items can be swapped without removing either hub from its shaft, minimising downtime during maintenance.",
      "The design tolerates moderate misalignment and cushions start-up shock loads common in motor-driven equipment.",
    ],
    features: [
      "Individually replaceable rubber bushes",
      "Quiet, low-vibration operation",
      "Tolerant of minor shaft misalignment",
      "Simple pin-and-bush maintenance",
      "Wide torque range for motor-driven equipment",
    ],
    applications: [
      "Electric motor to gearbox connections",
      "HVAC blower drives",
      "Agitators and mixers",
      "Material handling equipment",
    ],
    specs: [
      { label: "Material", value: "Cast iron hubs, steel pins, rubber bushes" },
      { label: "Bore Range", value: "16 mm – 160 mm" },
      { label: "Torque Range", value: "Up to 16,000 Nm" },
      { label: "Max Misalignment", value: "0.5° angular / 0.5 mm parallel" },
      { label: "Duty", value: "General industrial duty" },
    ],
  },
  {
    slug: "spacer-coupling",
    name: "Spacer Coupling",
    shortName: "Spacer",
    tagline: "Extended-span couplings built for maintenance access",
    heroImage: "/images/products/spacer-coupling.png",
    thumb: "/images/products/spacer-coupling.png",
    summary:
      "A mid-section spacer separates the two coupling hubs, opening a service gap so seals, bearings, or mechanical seals on the connected equipment can be serviced without disturbing the driver.",
    description: [
      "Spacer couplings insert a rigid or flexible mid-piece between the two hubs, creating a defined gap that lets maintenance teams pull pump seals or bearings without moving the motor.",
      "The spacer length is specified to match the equipment's service envelope, and the flexible elements at each hub still absorb the usual angular and parallel misalignment.",
      "This design is common wherever routine seal or cartridge replacement would otherwise require full coupling teardown.",
    ],
    features: [
      "Configurable spacer length for service access",
      "Retains flexible-element misalignment tolerance",
      "Reduces maintenance downtime on sealed equipment",
      "Balanced for higher-speed operation",
    ],
    applications: [
      "Process pumps with mechanical seals",
      "Chemical and slurry pumps",
      "Cooling tower fan drives",
      "Equipment requiring frequent seal service",
    ],
    specs: [
      { label: "Material", value: "Cast iron / steel hubs with flexible element" },
      { label: "Bore Range", value: "16 mm – 140 mm" },
      { label: "Spacer Length", value: "Custom, per application" },
      { label: "Max Misalignment", value: "1° angular / 1 mm parallel" },
      { label: "Duty", value: "Continuous process duty" },
    ],
  },
  {
    slug: "star-coupling",
    name: "Star Coupling",
    shortName: "Star",
    tagline: "Polyurethane star insert for compact, maintenance-light drives",
    heroImage: "/images/products/star-coupling1.png",
    thumb: "/images/products/star-coupling1.png",
    summary:
      "A star-shaped polyurethane spider sits between two claw-type hubs, giving a compact jaw coupling that damps vibration and needs no lubrication.",
    description: [
      "Two identical claw hubs mesh through a polyurethane spider insert; the star profile compresses under load to absorb shock and torsional vibration between shafts.",
      "The spider is offered in multiple hardness grades (shore ratings) so the same hub pair can be tuned from soft-cushioned to high-torque-rigid depending on the drive's shock characteristics.",
      "Jaw-type construction keeps the coupling compact and easy to fit in tight motor-to-pump envelopes.",
    ],
    features: [
      "Multiple spider hardness (shore) options",
      "Compact jaw-type construction",
      "No lubrication or metal-to-metal contact",
      "Fail-safe design — spider wear is visible before failure",
    ],
    applications: [
      "Small to mid-size pump drives",
      "Servo and stepper motor connections",
      "Packaging and printing machinery",
      "General power transmission",
    ],
    specs: [
      { label: "Material", value: "Aluminium / cast iron hubs, PU spider" },
      { label: "Bore Range", value: "6 mm – 100 mm" },
      { label: "Torque Range", value: "Up to 2,600 Nm" },
      { label: "Spider Options", value: "92, 98 and 64 Shore A" },
      { label: "Duty", value: "Light to medium industrial duty" },
    ],
  },
  {
    slug: "star-coupler",
    name: "Star Coupler",
    shortName: "Star Coupler",
    tagline: "Heavy-duty star-element coupler for high-torque drivetrains",
    heroImage: "/images/products/star-coupler.png",
    thumb: "/images/products/star-coupler.png",
    summary:
      "A reinforced evolution of the star coupling, built with heavier hubs and a stiffer elastomer element for higher-torque industrial drivetrains.",
    description: [
      "The star coupler uses the same claw-and-spider principle as our star coupling, scaled up with heavier cast hubs and a reinforced elastomer for applications carrying substantially higher torque.",
      "It is specified where drivetrains see frequent start-stop cycling or reversing loads, since the thicker spider section resists cumulative fatigue better than lighter-duty spiders.",
      "Hub bore and keyway are machined to order, and units are dynamically balanced for higher operating speeds.",
    ],
    features: [
      "Reinforced elastomer element for high-torque duty",
      "Handles frequent start-stop and reversing loads",
      "Dynamically balanced for higher speeds",
      "Machined-to-order bore and keyway",
    ],
    applications: [
      "Power generation auxiliary drives",
      "Heavy conveyor and crusher drives",
      "Industrial gearboxes",
      "High-torque pump and compressor trains",
    ],
    specs: [
      { label: "Material", value: "Cast steel hubs, reinforced PU spider" },
      { label: "Bore Range", value: "20 mm – 180 mm" },
      { label: "Torque Range", value: "Up to 24,000 Nm" },
      { label: "Spider Options", value: "98 Shore A / 64 Shore D" },
      { label: "Duty", value: "Heavy industrial duty" },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
