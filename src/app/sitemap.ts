import type { MetadataRoute } from "next";
import { products } from "@/lib/data/products";
import { cities } from "@/lib/data/cities";

const BASE_URL = "https://www.example-torkin-clone.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/contact",
    "/market-area",
    "/privacy",
    "/terms",
    "/disclaimer",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    priority: route === "" ? 1 : 0.8,
  }));

  const productRoutes = products.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  const cityProductRoutes = cities.flatMap((city) =>
    products.map((p) => ({
      url: `${BASE_URL}/${city.slug}/${p.slug}`,
      lastModified: new Date(),
      priority: 0.51,
    }))
  );

  return [...staticRoutes, ...productRoutes, ...cityProductRoutes];
}
