import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "images", "products");
mkdirSync(outDir, { recursive: true });

const items = [
  ["tyre-coupling-hero", "Tyre Coupling", 800, 600],
  ["tyre-coupling-thumb", "Tyre Coupling", 640, 480],
  ["rigid-coupling-hero", "Rigid Coupling", 800, 600],
  ["rigid-coupling-thumb", "Rigid Coupling", 640, 480],
  ["pin-bush-coupling-hero", "Pin Bush Coupling", 800, 600],
  ["pin-bush-coupling-thumb", "Pin Bush Coupling", 640, 480],
  ["spacer-coupling-hero", "Spacer Coupling", 800, 600],
  ["spacer-coupling-thumb", "Spacer Coupling", 640, 480],
  ["star-coupling-hero", "Star Coupling", 800, 600],
  ["star-coupling-thumb", "Star Coupling", 640, 480],
  ["star-coupler-hero", "Star Coupler", 800, 600],
  ["star-coupler-thumb", "Star Coupler", 640, 480],
  ["about-workshop", "Workshop", 900, 700],
  ["about-team", "Our Team", 900, 700],
];

function svg(name, w, h) {
  const id = name.replace(/\s+/g, "-").toLowerCase();
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#161e46"/>
      <stop offset="100%" stop-color="#0e132a"/>
    </linearGradient>
    <pattern id="grid-${id}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g-${id})"/>
  <rect width="${w}" height="${h}" fill="url(#grid-${id})"/>
  <circle cx="${w / 2}" cy="${h / 2 - 30}" r="${Math.min(w, h) * 0.16}" fill="none" stroke="#ff5f13" stroke-width="6" opacity="0.85"/>
  <circle cx="${w / 2}" cy="${h / 2 - 30}" r="${Math.min(w, h) * 0.06}" fill="#ff5f13" opacity="0.9"/>
  <text x="50%" y="${h - 60}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.max(18, w * 0.032)}" font-weight="700" fill="#ffffff" letter-spacing="1">${name}</text>
  <text x="50%" y="${h - 32}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.max(11, w * 0.016)}" fill="#9fa6bd" letter-spacing="2">PLACEHOLDER IMAGE — REPLACE IN /public/images/products</text>
</svg>`;
}

for (const [file, label, w, h] of items) {
  writeFileSync(join(outDir, `${file}.svg`), svg(label, w, h), "utf8");
}

console.log(`Generated ${items.length} placeholder SVGs in ${outDir}`);
