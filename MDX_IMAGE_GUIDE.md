# Adding Images to MDX Articles

## Hero Images (Already Implemented)
Hero images are automatically displayed at the top of each article page using the `image` field in frontmatter:

```mdx
---
title: "Your Article Title"
image: "/images/your-image.webp"
---
```

The hero images have proper SEO:
- **Alt text**: Uses the article title
- **Priority loading**: Set to `true` for above-the-fold content
- **Responsive**: Uses Next.js Image component with `fill` and `object-cover`

## Adding Images Within Article Content

### Method 1: Using Next.js Image Component (Recommended for SEO)

Add this to your MDX file:

```mdx
import Image from "next/image"

# Your Article Title

Your intro paragraph...

<div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden">
  <Image
    src="/images/article---wood-grain-direction.webp"
    alt="Close-up of wood grain showing direction and pattern"
    fill
    className="object-cover"
  />
</div>

More content...
```

**SEO Benefits:**
- ✅ Proper `alt` attribute for accessibility
- ✅ Automatic image optimization
- ✅ Lazy loading (except priority images)
- ✅ Responsive sizing

### Method 2: Standard Markdown Images

```mdx
![Wood grain close-up showing natural patterns](/images/article---wood-grain-direction.webp)
```

**Note:** This method works but doesn't get Next.js optimization benefits.

## Available Optimized Images

All images are in `public/images/` as WebP files:

### Article Images
- `article---bark-texture-detail.webp`
- `article---bookmatched-slabs.webp`
- `article---chainsaw-milling.webp`
- `article---crack-filling-detail.webp`
- `article---epoxy-pour-process.webp`
- `article---knots-and-character.webp`
- `article---metal-leg-attachment.webp`
- `article---oil-finish-application.webp`
- `article---router-flattening.webp`
- `article---sanding-process.webp`
- `article---wax-application.webp`
- `article---wood-drying-kiln.webp`
- `article---wood-grain-direction.webp`
- `article---wood-moisture-meter.webp`

### Blog/General Images
- `blog---cutting-board-collection.webp`
- `blog---outdoor-patio-table.webp`
- `blog---raw-lumber-yard.webp`
- `blog---stacked-wood-slabs.webp`
- `blog---wood-species-comparison-flat-lay.webp`
- `blog---workshop-scene.webp`
- `blog-header---wood-grain-texture.webp`

### Design/Lifestyle Images
- `dining-table-lifestyle-shot.webp`
- `coffee-table-inspiration.webp`
- `desk-and-office-setup.webp`
- `pillar---industrial-loft-style.webp`
- `pillar---modern-interior-with-live-edge.webp`
- `pillar---rustic-dining-room.webp`
- `pillar---scandinavian-minimalist.webp`

### Educational/Infographic Images
- `care-and-maintenance-guide.webp`
- `finishing-options-comparison.webp`
- `size-guide-infographic.webp`
- `slab-selection-guide.webp`
- `what-is-live-edge-explainer.webp`
- `wood-grain-close-up-educational.webp`

### Social/Product Images
- `social---bench-lifestyle.webp`
- `social---charcuterie-board-styled.webp`
- `social---console-table-entryway.webp`
- `social---shelf-installation.webp`
- `social---wood-species-maple.webp`
- `social---wood-species-oak.webp`
- `social---wood-species-walnut.webp`

## SEO Best Practices

1. **Always include descriptive alt text** that describes what's in the image
2. **Use relevant keywords** in alt text (but don't keyword stuff)
3. **Keep alt text under 125 characters** for screen readers
4. **Use WebP format** (already done - 95% smaller than PNG)
5. **Set appropriate dimensions** to prevent layout shift

## Example: Adding Process Images to an Article

```mdx
---
title: "How to Sand a Live Edge Slab"
image: "/images/article---sanding-process.webp"
---

import Image from "next/image"

# How to Sand a Live Edge Slab

Sanding is the most critical step in achieving a glass-smooth finish...

## Step 1: Initial Flattening

<div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden">
  <Image
    src="/images/article---router-flattening.webp"
    alt="Router sled flattening a live edge slab surface"
    fill
    className="object-cover"
  />
</div>

Start with a router sled to ensure...

## Step 2: Progressive Sanding

<div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden">
  <Image
    src="/images/article---sanding-process.webp"
    alt="Orbital sander being used on live edge wood surface"
    fill
    className="object-cover"
  />
</div>

Begin with 80-grit sandpaper...
```
