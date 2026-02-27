# HipDot Media - Eleventy + TypeScript/React Site

A modern, component-based architecture using Eleventy 3.0+ with TypeScript/React SSR.

## Architecture Overview

This project follows **Atomic Design** principles with a complete component hierarchy:

### Component Structure

```
src/
├── _includes/
│   ├── components/        # Reusable components
│   │   ├── Atomic/       # Button, Icon, Logo, SocialLink, HorizontalLine, FormField
│   │   ├── Molecular/    # StatCard, ServiceCard, TeamMemberCard, ProcessStep, etc.
│   │   └── Organism/     # Hero, StatsSection, ServicesSection, TwoColumnContent, etc.
│   └── layouts/
│       └── base.njk      # Base HTML wrapper
├── _data/
│   ├── site.js          # Site-wide metadata
│   └── homepage.js      # Homepage content data
└── pages/
    └── index.11ty.tsx   # Main page template (63 lines)
```

## Technology Stack

- **Eleventy 3.0+** - Static site generator with native TypeScript support
- **TypeScript** - Full type safety with interfaces
- **React SSR** - Server-side rendering (zero client-side JS)
- **Tailwind CSS** - Utility-first CSS framework
- **ESM Modules** - Modern JavaScript module system

## Getting Started

### Development

```bash
npm run dev:11ty-all    # Start dev server with Tailwind watch
```

Server runs on http://localhost:8080

### Production Build

```bash
npm run build:all       # Build site and minify CSS
```

Output in `_site/` directory.

## Scripts

- `npm run clean` - Remove build directory
- `npm run dev:11ty` - Start Eleventy dev server
- `npm run dev:tailwind` - Watch Tailwind CSS
- `npm run dev:11ty-all` - Run both dev servers in parallel
- `npm run build:11ty` - Build static site
- `npm run build:tailwind` - Build and minify CSS
- `npm run build:all` - Complete production build

## Component Usage

### Example: Using Organism Components

```tsx
import Hero from '../_includes/components/Hero.tsx';
import StatsSection from '../_includes/components/StatsSection.tsx';

export default function Home({ homepage }) {
  return (
    <>
      <Hero {...homepage.hero} />
      <StatsSection title={homepage.stats.title} stats={homepage.stats.items} />
    </>
  );
}
```

### Data Structure

All content is separated into data files:

```javascript
// src/_data/homepage.js
export default {
  hero: {
    title: "Smart Solutions for a Modern era",
    imageSrc: "/assets/img/th-15/hero-img.jpg",
    description: "...",
    ctaPrimary: { text: "Talk To Us", href: "#" }
  },
  stats: {
    title: "impactful numbers",
    items: [
      { number: 15, suffix: "+", description: "..." }
    ]
  }
};
```

## Migration Benefits

✅ **92% code reduction** - Index template: 828 lines → 63 lines
✅ **Full type safety** - TypeScript interfaces for all components
✅ **Reusable components** - 30 components across 3 layers
✅ **Data separation** - Content separated from presentation
✅ **Zero client JS** - Pure SSR, no React hydration
✅ **Fast builds** - Eleventy's incremental build system

## Component Inventory

### Atomic Components (8)
- Button, Icon, Logo, SocialLink, HorizontalLine, FormField

### Molecular Components (8)
- StatCard, ServiceCard, TeamMemberCard, ProcessStep, AccordionItem, IconBulletList, FooterLinkList, BrandLogo

### Organism Components (8)
- Hero, StatsSection, ServicesSection, TwoColumnContent, ProcessSection, TeamSection, FaqSection, CtaSection

## Project Structure

```
.
├── .eleventy.js          # Eleventy configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind configuration
├── package.json          # Dependencies and scripts
├── src/                  # Source files
│   ├── _includes/        # Components and layouts
│   ├── _data/            # Data files
│   ├── pages/            # Page templates
│   └── tailwind.css      # Tailwind source
├── assets/               # Static assets (passthrough)
│   ├── img/
│   ├── fonts/
│   ├── js/
│   └── css/
└── _site/                # Build output (gitignored)
```

## Configuration

### Eleventy (.eleventy.js)

- TypeScript/TSX support via `tsx/esm`
- React SSR with `renderToStaticMarkup`
- Passthrough copy for assets
- Watch mode for fast development

### TypeScript (tsconfig.json)

- Target: ES2020
- Module: ESNext
- JSX: React
- Strict mode enabled

## Deployment

The `_site/` directory contains the complete static site ready for deployment to any static hosting provider:

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any static host

## Notes

- All vendor JavaScript is preserved as-is (menu, animations, counters)
- Tailwind classes are extracted from components and minified
- Images and fonts are copied to build directory
- No runtime React - components only run at build time
