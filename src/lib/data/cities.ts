export interface City {
  slug: string;
  name: string;
}

export const cities: City[] = [
  { slug: "Delhi-NCR", name: "Delhi NCR" },
  { slug: "Mumbai", name: "Mumbai" },
  { slug: "Nepal", name: "Nepal" },
  { slug: "Jaipur", name: "Jaipur" },
  { slug: "Banglore", name: "Bangalore" },
  { slug: "Chandigarh", name: "Chandigarh" },
  { slug: "Kolkata", name: "Kolkata" },
  { slug: "Chennai", name: "Chennai" },
  { slug: "Pune", name: "Pune" },
  { slug: "Hyderabad", name: "Hyderabad" },
  { slug: "Ahmedabad", name: "Ahmedabad" },
  { slug: "Surat", name: "Surat" },
  { slug: "Kochi", name: "Kochi" },
  { slug: "Indore", name: "Indore" },
  { slug: "Bhuvneshwar", name: "Bhubaneswar" },
  { slug: "Guwahati", name: "Guwahati" },
  { slug: "Jammu-and-Kashmir", name: "Jammu & Kashmir" },
  { slug: "Raipur", name: "Raipur" },
  { slug: "Ranchi", name: "Ranchi" },
  { slug: "Bhopal", name: "Bhopal" },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
