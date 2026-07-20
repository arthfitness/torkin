export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "R. Malhotra",
    role: "Maintenance Head, Textile Unit",
    quote:
      "We switched three of our line-shaft drives to their tyre couplings after repeated vibration complaints. Noise dropped noticeably and we haven't had a comeback in over a year.",
    rating: 5,
  },
  {
    id: "t2",
    name: "S. Iyer",
    role: "Procurement Manager, Packaging Plant",
    quote:
      "Turnaround on custom bore sizes was faster than the last two suppliers we tried. Documentation and dispatch tracking were also straightforward.",
    rating: 5,
  },
  {
    id: "t3",
    name: "V. Deshmukh",
    role: "Plant Engineer, HVAC Manufacturing",
    quote:
      "Pin bush couplings have been running on our blower test rigs for months without a bush change. Good build quality for the price bracket.",
    rating: 4,
  },
  {
    id: "t4",
    name: "A. Chatterjee",
    role: "Owner, Machinery Trading Firm",
    quote:
      "Their spacer couplings solved a seal-access problem our previous vendor couldn't. Support team walked us through the exact spacer length we needed.",
    rating: 5,
  },
];
