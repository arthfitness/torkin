export interface LegalSection {
  heading: string;
  body: string[];
}

export const privacySections: LegalSection[] = [
  {
    heading: "Information We Collect",
    body: [
      "When you submit an enquiry, request a quote, or subscribe to updates, we collect the details you provide directly — typically your name, company name, email address, phone number, and the content of your message.",
      "We also collect standard technical data automatically, such as browser type, device information, and pages visited, to help us understand how the site is used and to keep it running reliably.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "Enquiry details are used to respond to your request, prepare quotations, and provide ongoing support for orders you place with us.",
      "We do not sell or rent your personal information to third parties. Information may be shared with logistics partners solely to fulfil an order you have placed.",
    ],
  },
  {
    heading: "Cookies",
    body: [
      "This site may use cookies to remember basic preferences and to measure aggregate traffic patterns. You can disable cookies through your browser settings; doing so may limit some site functionality.",
    ],
  },
  {
    heading: "Data Retention",
    body: [
      "Enquiry and order records are retained for as long as necessary to fulfil the purpose they were collected for and to meet applicable legal and accounting obligations.",
    ],
  },
  {
    heading: "Your Rights",
    body: [
      "You may request access to, correction of, or deletion of the personal information we hold about you by contacting us using the details on our Contact page.",
    ],
  },
  {
    heading: "Changes to This Policy",
    body: [
      "We may update this policy from time to time to reflect changes in our practices. The revised policy will be posted on this page with an updated effective date.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    heading: "Acceptance of Terms",
    body: [
      "By accessing or using this website, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the site.",
    ],
  },
  {
    heading: "Product Information",
    body: [
      "We make reasonable efforts to ensure product descriptions, specifications, and images on this site are accurate. Actual dimensions, tolerances and finishes for custom-machined orders are confirmed in writing at the time of order.",
    ],
  },
  {
    heading: "Quotations and Orders",
    body: [
      "Quotations issued through this site or by our sales team are valid for the period stated on the quotation and are subject to confirmation of specifications, pricing, and lead time at the time of order.",
      "Orders are only confirmed once accepted in writing by both parties. We reserve the right to decline any order.",
    ],
  },
  {
    heading: "Payment",
    body: [
      "Payment terms are agreed at the time of order confirmation. Any online payment facility linked from this site is provided for the convenience of existing customers with a confirmed order.",
    ],
  },
  {
    heading: "Intellectual Property",
    body: [
      "All content on this site, including text, graphics, logos, and product images, is the property of Torkin or its licensors and may not be reproduced without written permission.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "We are not liable for indirect or consequential losses arising from the use of this website or from delays in delivery beyond our reasonable control.",
    ],
  },
  {
    heading: "Governing Law",
    body: [
      "These terms are governed by the laws of India, and any disputes will be subject to the exclusive jurisdiction of the courts of New Delhi.",
    ],
  },
];

export const disclaimerSections: LegalSection[] = [
  {
    heading: "General Information",
    body: [
      "The content on this website is provided for general informational purposes about our products and services. While we strive for accuracy, we make no warranties about the completeness or reliability of any information on this site.",
    ],
  },
  {
    heading: "Technical Specifications",
    body: [
      "Published torque ratings, bore ranges, and material specifications are indicative and intended for initial selection guidance. Final application suitability should always be confirmed with our engineering team before commissioning.",
    ],
  },
  {
    heading: "Third-Party Links",
    body: [
      "This site may link to third-party websites, including payment gateways and social media platforms. We are not responsible for the content or practices of those external sites.",
    ],
  },
  {
    heading: "No Professional Advice",
    body: [
      "Nothing on this website constitutes engineering, safety, or legal advice specific to your installation. Consult a qualified engineer before installing or operating industrial machinery.",
    ],
  },
];
