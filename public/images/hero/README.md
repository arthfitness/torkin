# Hero Background

`workshop-background.svg` is a generated placeholder (dark gradient + abstract
spark/gear motif) standing in for your real hero photography — a workshop
shot composited with product renders, per the reference screenshot.

## To use the real photo

1. Add your image (e.g. `workshop-background.jpg`) to this folder.
2. In [`src/components/home/Hero.tsx`](../../../src/components/home/Hero.tsx),
   update the `bg-[url('/images/hero/workshop-background.svg')]` class to
   point at the new file.
3. If the photo already contains the coupling product renders composited
   in (as in the reference), you likely won't need the separate product
   thumbnails on this section — otherwise layer them in as additional
   `<img>` elements positioned over the diagonal panel.

Export at 1200×900 or larger, compressed for web (target well under 300KB).
