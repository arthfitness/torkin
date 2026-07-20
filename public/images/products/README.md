# Product Images

This folder currently contains generated placeholder SVGs so the site renders
correctly out of the box. Replace them with your real product photography.

## Expected filenames

| File | Used on |
|---|---|
| `tyre-coupling-hero.svg` / `tyre-coupling-thumb.svg` | Tyre Coupling product page / cards |
| `rigid-coupling-hero.svg` / `rigid-coupling-thumb.svg` | Rigid Coupling product page / cards |
| `pin-bush-coupling-hero.svg` / `pin-bush-coupling-thumb.svg` | Pin Bush Coupling product page / cards |
| `spacer-coupling-hero.svg` / `spacer-coupling-thumb.svg` | Spacer Coupling product page / cards |
| `star-coupling-hero.svg` / `star-coupling-thumb.svg` | Star Coupling product page / cards |
| `star-coupler-hero.svg` / `star-coupler-thumb.svg` | Star Coupler product page / cards |
| `about-workshop.svg` | Homepage "Who We Are" section |
| `about-team.svg` | About page |

`hero` images are used at roughly 800×600 and larger; `thumb` images are used
in product cards at roughly 640×480. Any aspect ratio close to 4:3 will fit
the existing layout cleanly.

## To use real photos

1. Add your `.jpg`, `.png`, or `.webp` files to this folder (any filename).
2. Update the corresponding path in [`src/lib/data/products.ts`](../../../src/lib/data/products.ts)
   (`heroImage` / `thumb` fields) and, for the two About images, in
   [`src/components/home/AboutSnippet.tsx`](../../../src/components/home/AboutSnippet.tsx)
   and [`src/app/about/page.tsx`](../../../src/app/about/page.tsx).
3. Delete the placeholder `.svg` files once replaced.

For best performance, export photos at the sizes above and compress them
(e.g. via `squoosh.app`) before adding them to the repo.
