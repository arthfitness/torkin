export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    id: "f1",
    question: "How do I choose the right coupling type for my drive?",
    answer:
      "It depends on torque, shaft misalignment, and whether shock loads or reversing duty are present. Share your shaft diameter, motor power, and RPM through the contact form and our team will recommend a coupling type and size.",
  },
  {
    id: "f2",
    question: "Do you manufacture custom bore and keyway sizes?",
    answer:
      "Yes. Most couplings are machined to order once you confirm bore diameter, keyway dimensions, and any special finish requirements.",
  },
  {
    id: "f3",
    question: "What is the typical lead time for an order?",
    answer:
      "Standard catalog sizes typically ship within a few working days. Custom-machined units depend on specification complexity — we confirm a firm date at order confirmation.",
  },
  {
    id: "f4",
    question: "Do you supply outside India?",
    answer:
      "Yes, we ship to several neighbouring and international markets in addition to serving industrial hubs across India.",
  },
  {
    id: "f5",
    question: "What warranty applies to your couplings?",
    answer:
      "Manufacturing defects are covered under warranty for a period confirmed at the time of sale. Wear items such as rubber tyres, bushes, and spiders are treated as consumables outside the defect warranty.",
  },
  {
    id: "f6",
    question: "Can I get replacement elements without buying a full coupling?",
    answer:
      "Yes — rubber tyres, pin bushes, and star spiders are all available as standalone spare parts for coupling hubs already in service.",
  },
];
