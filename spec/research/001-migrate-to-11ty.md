# Migration Research: Static HTML + Tailwind CSS to Eleventy with JSX/React

**Date:** 2025-12-02
**Status:** Research Complete - Updated for JSX/React Components
**Recommended Approach:** Eleventy v3.0+ Native JSX Support

---

## Executive Summary

This migration guide covers moving from static HTML templates with Tailwind CSS to Eleventy (11ty) using **JSX/React components** for a modern component-based architecture. The integration is primarily for **server-side rendering (SSG)** with optional selective hydration using islands architecture.

**Key Benefits:**
- Modern component-based architecture with React/JSX
- Full type safety with TypeScript support
- Zero client-side JavaScript by default (optimal performance)
- Selective hydration for interactive components via `@11ty/is-land`
- Seamless Tailwind CSS integration
- Superior IDE support and developer experience

---

## Table of Contents

1. [JSX Setup Options](#1-jsx-setup-options)
2. [Recommended Setup: Native JSX (v3.0+)](#2-recommended-setup-native-jsx)
3. [How React/JSX Integrates with Eleventy](#3-how-reactjsx-integrates-with-eleventy)
4. [Server-Rendered vs Hydrated Components](#4-server-rendered-vs-hydrated-components)
5. [Tailwind CSS with JSX Components](#5-tailwind-css-with-jsx-components)
6. [Project Structure](#6-project-structure)
7. [Complete Build Process](#7-complete-build-process)
8. [Migration Steps](#8-migration-steps)
9. [Code Examples](#9-code-examples)
10. [JSX vs Nunjucks Comparison](#10-jsx-vs-nunjucks-comparison)
11. [Best Practices 2025](#11-best-practices-2025)
12. [Resources](#12-resources)

---

## 1. JSX Setup Options

### Option A: Native JSX Support (Eleventy v3.0+) ⭐ **RECOMMENDED**

Eleventy 3.0.0 introduced native JSX support using the `tsx` package and `react-dom/server`.

**Advantages:**
- Official Eleventy support (not relying on third-party plugins)
- Uses esbuild via `tsx` (extremely fast)
- Full TypeScript support out of the box
- Simple configuration
- Modern ESM-first approach

**Installation:**
```bash
npm install tsx react react-dom @11ty/eleventy@^3.0.0
```

### Option B: eleventy-plugin-react-ssr (Community)

Third-party plugin with additional features.

**Advantages:**
- Standard `.jsx` extension (not `.11ty.jsx`)
- Custom Babel configuration support
- `EleventyContext` hook for data cascade

**Disadvantages:**
- Community-maintained (not official)
- Additional dependency on Babel
- More configuration complexity

### Option C: Preact + htm (Lightweight)

For projects prioritizing bundle size.

**Advantages:**
- Smallest bundle (~9KB vs React's ~130KB)
- No build step required
- JSX-like syntax with `htm`

**Disadvantages:**
- Different syntax (template literals instead of JSX)
- DIY approach
- Limited tooling support

---

## 2. Recommended Setup: Native JSX

### Installation

```bash
npm install --save-dev @11ty/eleventy@^3.0.0 tsx npm-run-all rimraf
npm install react react-dom
npm install --save-dev tailwindcss @tailwindcss/typography
```

### Configuration

**`.eleventy.js` (or `.eleventy.mjs`):**

```javascript
import "tsx/esm";
import { renderToStaticMarkup } from "react-dom/server";

export default function (eleventyConfig) {
  // JSX/TSX support
  eleventyConfig.addExtension(["11ty.jsx", "11ty.tsx"], {
    key: "11ty.js",
    compile: function () {
      return async function (data) {
        let content = await this.defaultRenderer(data);
        return renderToStaticMarkup(content);
      };
    },
  });

  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/css/vendors");
  eleventyConfig.addPassthroughCopy("src/assets/css/custom.css");

  // Watch CSS for changes
  eleventyConfig.addWatchTarget("src/assets/css/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["html", "njk", "md", "11ty.jsx", "11ty.tsx"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
```

**`package.json`:**

```json
{
  "name": "masco-eleventy",
  "version": "1.0.0",
  "type": "module",
  "description": "Masco - Eleventy + React + Tailwind CSS",
  "scripts": {
    "clean": "rimraf _site",

    "dev:11ty": "eleventy --serve --quiet --incremental",
    "dev:css": "tailwindcss -i ./src/assets/css/tailwind.css -o ./_site/assets/css/style.css --watch",
    "dev": "npm-run-all clean --parallel dev:*",

    "build:11ty": "eleventy",
    "build:css": "tailwindcss -i ./src/assets/css/tailwind.css -o ./_site/assets/css/style.css --minify",
    "build": "npm-run-all clean build:11ty build:css",

    "start": "npm run dev"
  },
  "devDependencies": {
    "@11ty/eleventy": "^3.1.0",
    "@tailwindcss/typography": "^0.5.10",
    "npm-run-all": "^4.1.5",
    "rimraf": "^6.0.1",
    "tailwindcss": "^3.4.0",
    "tsx": "^4.7.0"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

**Key Requirements:**
- `"type": "module"` in package.json for ESM support
- File naming: `.11ty.jsx` or `.11ty.tsx` for page templates
- Regular `.jsx`/`.tsx` for reusable components

---

## 3. How React/JSX Integrates with Eleventy

### Build Pipeline Flow

```
┌─────────────────────────────────────────────────────────┐
│ 1. Eleventy reads .11ty.jsx files                      │
│    └─> Processes via tsx (esbuild)                     │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ 2. React components render server-side                 │
│    └─> renderToStaticMarkup() converts JSX → HTML      │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ 3. Eleventy wraps HTML in layouts (if specified)       │
│    └─> Can use Nunjucks/Liquid layouts with JSX pages  │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ 4. Static HTML files written to _site/                 │
│    └─> No React runtime shipped to client by default   │
└─────────────────────────────────────────────────────────┘
```

**Key Points:**
- Components execute **only at build time**
- `renderToStaticMarkup()` produces pure HTML (no React attributes)
- No client-side JavaScript included unless explicitly added
- Each `.11ty.jsx` file becomes a static HTML page
- Zero performance penalty for end users

---

## 4. Server-Rendered vs Hydrated Components

### Default: Server-Side Rendering (SSG) ✅

All components are rendered to static HTML at build time:

```jsx
// src/pages/about.11ty.jsx
export default function About({ title, content }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <p className="text-lg text-gray-700">{content}</p>
    </div>
  );
}

export const data = {
  layout: "layouts/base.njk",
  title: "About Us",
  content: "This is server-rendered HTML with zero JavaScript"
};
```

**Output:** Pure static HTML, zero JavaScript sent to client.

---

### Adding Interactivity: Islands Architecture 🏝️

For selective hydration, use `@11ty/is-land` (Eleventy's official islands implementation).

**Installation:**
```bash
npm install @11ty/is-land
```

**Setup in base layout:**
```html
<!-- src/_includes/layouts/base.njk -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{{ title }}</title>
  <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
  {{ content | safe }}

  <!-- Load islands architecture -->
  <script type="module" src="https://unpkg.com/@11ty/is-land"></script>
</body>
</html>
```

**Interactive Component Example:**

```jsx
// src/components/Counter.jsx (interactive)
import { useState } from 'react';

export default function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <p className="text-2xl font-bold mb-4">Count: {count}</p>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
      </div>
    </div>
  );
}
```

**Island Wrapper in Page:**

```html
<!-- Use in your .11ty.jsx page -->
<is-land on:visible on:idle>
  <template data-island>
    <script type="module">
      import { h, render } from 'https://esm.sh/preact';
      import { useState } from 'https://esm.sh/preact/hooks';
      import htm from 'https://esm.sh/htm';

      const html = htm.bind(h);

      function Counter({ initialCount = 0 }) {
        const [count, setCount] = useState(initialCount);

        return html`
          <div class="p-6 bg-white rounded-lg shadow-md">
            <p class="text-2xl font-bold mb-4">Count: ${count}</p>
            <div class="flex gap-2">
              <button
                onClick=${() => setCount(count - 1)}
                class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Decrement
              </button>
              <button
                onClick=${() => setCount(count + 1)}
                class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Increment
              </button>
            </div>
          </div>
        `;
      }

      const target = document.currentScript.parentElement;
      render(h(Counter, { initialCount: 0 }), target);
    </script>
  </template>

  <!-- Fallback/SSR content -->
  <div class="p-6 bg-white rounded-lg shadow-md">
    <p class="text-2xl font-bold mb-4">Count: 0</p>
    <div class="flex gap-2">
      <button class="px-4 py-2 bg-red-500 text-white rounded">Decrement</button>
      <button class="px-4 py-2 bg-blue-500 text-white rounded">Increment</button>
    </div>
  </div>
</is-land>
```

**Hydration Triggers:**
- `on:visible` – When element enters viewport
- `on:idle` – When browser is idle
- `on:interaction` – On user interaction
- `on:media="(min-width: 768px)"` – Media query match
- `on:load` – On window load

**Recommended:** Use Preact (~9KB) for islands instead of full React (~130KB)

---

## 5. Tailwind CSS with JSX Components

### Key Difference: `className` instead of `class`

**HTML/Nunjucks:**
```html
<div class="bg-blue-500 text-white p-4">
```

**JSX:**
```jsx
<div className="bg-blue-500 text-white p-4">
```

### Tailwind Configuration

**`tailwind.config.js`:**

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,njk,md,jsx,tsx,js}",  // Include JSX/TSX files!
    "./_site/**/*.html",                     // For production purge
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    extend: {
      fontFamily: {
        Syne: ["Syne", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#0000FF",
          hover: "#0000CC",
        },
        dark: {
          DEFAULT: "#2C2C2C",
          light: "#414141",
        },
        light: {
          DEFAULT: "#EAEDF0",
          border: "#B8C1CC",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
```

### Source CSS with @layer Directives

**`src/assets/css/tailwind.css`:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body,
  .page-wrapper {
    @apply min-h-screen font-sans text-lg leading-[1.66] text-black/80;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-Syne font-extrabold leading-[1.05] -tracking-[2px] text-black;
  }
}

@layer components {
  .btn {
    @apply relative border-2 px-8 py-3 text-center text-base font-semibold leading-[1.5] transition-all duration-[400ms];
  }

  .btn-primary {
    @apply btn border-primary bg-primary text-white hover:bg-transparent hover:text-primary;
  }

  .btn-outline {
    @apply btn border-black bg-transparent text-black hover:bg-black hover:text-white;
  }
}

/* Custom keyframes outside @layer */
@keyframes fill-up {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
```

**Your existing @layer directives work perfectly with JSX components!**

### Dynamic Classes Warning ⚠️

```jsx
// ❌ May be purged by Tailwind
const color = "blue";
<div className={`bg-${color}-500`}>Content</div>

// ✅ Use complete class names
const colorClass = isActive ? "bg-blue-500" : "bg-gray-500";
<div className={colorClass}>Content</div>

// ✅ Or safelist patterns in config
// tailwind.config.js
module.exports = {
  safelist: [
    { pattern: /bg-(red|blue|green)-(500|600)/ }
  ]
}
```

---

## 6. Project Structure

### Recommended Directory Organization

```
masco/
├── .eleventy.js (or .mjs)          # Eleventy configuration (ESM)
├── package.json                     # "type": "module" for ESM
├── tailwind.config.js               # Tailwind configuration
├── tsconfig.json                    # TypeScript config (optional)
├── .gitignore                       # Add _site/, node_modules/
│
├── src/
│   ├── _data/                      # Global data files
│   │   ├── site.js                 # Site metadata
│   │   └── navigation.js           # Navigation structure
│   │
│   ├── _includes/                  # Layouts (can mix Nunjucks + JSX)
│   │   └── layouts/
│   │       └── base.njk            # Base HTML wrapper
│   │
│   ├── components/                 # Reusable React components
│   │   ├── Button.jsx              # ⚠️ No .11ty prefix
│   │   ├── Card.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Navigation.jsx
│   │
│   ├── pages/                      # Page components
│   │   ├── index.11ty.jsx          # Homepage (note .11ty prefix)
│   │   ├── about.11ty.jsx
│   │   ├── services.11ty.jsx
│   │   └── contact.11ty.jsx
│   │
│   └── assets/
│       ├── css/
│       │   ├── tailwind.css        # Tailwind source with @layer
│       │   ├── vendors/            # Third-party CSS
│       │   └── custom.css          # Non-Tailwind custom CSS
│       ├── img/
│       ├── fonts/
│       │   ├── webfonts/
│       │   │   ├── inter/
│       │   │   └── syne/
│       │   └── iconfonts/
│       └── js/
│           ├── vendors/
│           └── main.js
│
├── _site/                          # Build output (gitignored)
│   ├── index.html
│   ├── about/index.html
│   └── assets/
│       └── css/
│           └── style.css
│
└── .archive/                       # Original HTML templates
    ├── index.html (original)
    └── ...
```

### File Naming Convention

| File Type | Extension | Example | Purpose |
|-----------|-----------|---------|---------|
| **Page Template** | `.11ty.jsx` | `index.11ty.jsx` | Becomes a static HTML page |
| **Reusable Component** | `.jsx` | `Button.jsx` | Imported by page templates |
| **Layout** | `.njk` | `base.njk` | Wraps page content |
| **Data** | `.js` | `site.js` | Global data accessible everywhere |

---

## 7. Complete Build Process

### Development Workflow

```bash
npm run dev
```

Runs concurrently:
1. **Tailwind CSS watch** (`tailwindcss --watch`)
   - Watches for class changes in JSX/HTML files
   - Recompiles CSS on save
   - Outputs to `_site/assets/css/style.css`

2. **Eleventy dev server** (`eleventy --serve`)
   - Watches for changes in JSX/template files
   - Rebuilds pages
   - Live reloads browser

### Production Build

```bash
npm run build
```

Runs sequentially:
1. `clean` – Removes `_site/` directory
2. `build:11ty` – Builds Eleventy site
3. `build:css` – Compiles and minifies Tailwind CSS

---

## 8. Migration Steps

### Phase 1: Setup (2-3 hours)

**Step 1: Install Dependencies**

```bash
npm install --save-dev @11ty/eleventy@^3.0.0 tsx npm-run-all rimraf tailwindcss
npm install react react-dom
```

**Step 2: Update package.json**

Add `"type": "module"` and update scripts (see section 2).

**Step 3: Create Eleventy Config**

Create `.eleventy.js` or `.eleventy.mjs` with configuration from section 2.

**Step 4: Update Tailwind Config**

Update `content` paths to include JSX files:

```javascript
content: [
  "./src/**/*.{html,njk,md,jsx,tsx,js}",
  "./_site/**/*.html",
],
```

**Step 5: Create Directory Structure**

```bash
mkdir -p src/{_data,_includes/layouts,components,pages,assets/{css,img,fonts,js}}
```

**Step 6: Update .gitignore**

```
_site/
node_modules/
.DS_Store
```

---

### Phase 2: Create Base Layout (2-3 hours)

**Step 1: Create Base Nunjucks Layout**

`src/_includes/layouts/base.njk`:

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{ title }} - Masco</title>
    <meta name="description" content="{{ description }}" />

    <!-- Favicon -->
    <link rel="icon" href="/assets/img/favicon.png" />

    <!-- Icon Font -->
    <link rel="stylesheet" href="/assets/fonts/iconfonts/font-awesome/stylesheet.css" />

    <!-- Site fonts -->
    <link rel="stylesheet" href="/assets/fonts/webfonts/inter/stylesheet.css" />
    <link rel="stylesheet" href="/assets/fonts/webfonts/syne/stylesheet.css" />

    <!-- Vendor CSS -->
    <link rel="stylesheet" href="/assets/css/vendors/swiper-bundle.min.css" />
    <link rel="stylesheet" href="/assets/css/vendors/jos.css" />
    <link rel="stylesheet" href="/assets/css/vendors/menu.css" />

    <!-- Custom CSS -->
    <link rel="stylesheet" href="/assets/css/custom.css" />

    <!-- Tailwind CSS -->
    <link href="/assets/css/style.css" rel="stylesheet" />
</head>
<body>
    <div class="page-wrapper relative z-[1] bg-white">
        {{ content | safe }}
    </div>

    <!-- Vendor Scripts -->
    <script src="/assets/js/vendors/counterup.js" type="module"></script>
    <script src="/assets/js/vendors/swiper-bundle.min.js"></script>
    <script src="/assets/js/vendors/fslightbox.js"></script>
    <script src="/assets/js/vendors/jos.min.js"></script>
    <script src="/assets/js/vendors/menu.js"></script>
    <script src="/assets/js/main.js"></script>
</body>
</html>
```

---

### Phase 3: Extract Components (3-4 hours)

**Step 1: Create Header Component**

`src/components/Header.jsx`:

```jsx
export default function Header({ logoUrl = "/", logoSrc = "/assets/img/logo-dark.png" }) {
  return (
    <header className="site-header site-header--absolute is--white py-3" id="sticky-menu">
      <div className="container-default">
        <div className="flex items-center justify-between gap-x-8">
          <a href={logoUrl} className="">
            <img src={logoSrc} alt="Masco" width="109" height="24" />
          </a>

          <div className="menu-block-wrapper">
            <div className="menu-overlay"></div>
            <nav className="menu-block" id="append-menu-header">
              <div className="mobile-menu-head">
                <div className="go-back">
                  <i className="fa-solid fa-angle-left"></i>
                </div>
                <div className="current-menu-title"></div>
                <div className="mobile-menu-close">&times;</div>
              </div>
              <ul className="site-menu-main">
                <li className="nav-item">
                  <a href="/" className="nav-link-item">Home</a>
                </li>
                <li className="nav-item">
                  <a href="/about" className="nav-link-item">About</a>
                </li>
                <li className="nav-item">
                  <a href="/services" className="nav-link-item">Services</a>
                </li>
                <li className="nav-item">
                  <a href="/contact" className="nav-link-item">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <a href="/login" className="btn-text hidden text-white hover:text-primary sm:inline-block">
              Login
            </a>
            <a href="/signup" className="btn is-blue is-transparent btn-animation group hidden rounded-[3px] sm:inline-block">
              <span>Sign up free</span>
            </a>
            <div className="block lg:hidden">
              <button id="openBtn" className="hamburger-menu mobile-menu-trigger">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
```

**Step 2: Create Footer Component**

`src/components/Footer.jsx`:

```jsx
export default function Footer({ year = new Date().getFullYear() }) {
  return (
    <footer className="section-footer">
      <div className="bg-white">
        <div className="py-[60px] lg:py-20">
          <div className="container-default">
            {/* Footer widget content here */}
            <div className="grid gap-x-16 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-20">
              {/* Footer columns */}
            </div>
          </div>
        </div>
      </div>

      <div className="horizontal-line -mt-px bg-black"></div>

      <div className="bg-white text-black">
        <div className="py-10">
          <div className="container-default">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:justify-between">
              <a href="/">
                <img src="/assets/img/logo-dark.png" alt="Masco" width="109" height="24" />
              </a>
              <div className="text-center">
                &copy; Copyright {year}, All Rights Reserved by Hip Dot Media, Inc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

### Phase 4: Convert Homepage (2-3 hours)

**Step 1: Create Homepage Component**

`src/pages/index.11ty.jsx`:

```jsx
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function Home({ title, hero }) {
  return (
    <>
      <Header />

      <main className="main-wrapper relative overflow-hidden">
        {/* Hero Section */}
        <section className="section-hero">
          <div className="relative z-10 overflow-hidden">
            <div className="pb-[60px] pt-28 md:pb-20 md:pt-36 lg:pb-[100px] lg:pt-[150px] xxl:pb-[120px] xxl:pt-[185px]">
              <div className="container-default">
                <div>
                  <div className="jos mb-6 max-w-xl lg:max-w-2xl xl:max-w-3xl xxl:max-w-[1076px]">
                    <h1 className="mb-6 font-Syne text-[40px] font-semibold uppercase leading-none -tracking-[2px] text-black sm:text-5xl lg:text-6xl xl:text-[90px]">
                      {hero.title}
                    </h1>
                  </div>

                  <div className="relative mx-auto my-[60px] max-w-[1296px] overflow-hidden rounded-tl-[10px] rounded-tr-[10px]">
                    <img
                      src={hero.image}
                      alt="hero"
                      width="1296"
                      height="550"
                      data-jos_animation="zoom-in-down"
                      className="h-auto w-full"
                    />
                  </div>

                  <div className="flex flex-col items-start justify-between gap-x-[200px] xl:flex-row xl:items-center">
                    <p className="text-2xl font-semibold text-[#2C2C2C] xl:max-w-[665px]">
                      {hero.subtitle}
                    </p>
                    <div className="mb-3 flex flex-wrap gap-6">
                      <a href="#" className="btn is-blue is-transparent btn-animation is-large group inline-block rounded-[3px]">
                        <span>Talk To Us</span>
                      </a>
                      <a href="#" className="btn is-outline-black btn-animation is-large inline-block rounded-[3px]">
                        <span>View Our Services</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Add other sections here */}
      </main>

      <Footer />
    </>
  );
}

export const data = {
  layout: "layouts/base.njk",
  title: "IT Service - Smart Solutions for a Modern Era",
  description: "We are dedicated to shaping the future through innovation",
  hero: {
    title: "Smart Solutions for a Modern era",
    subtitle: "We are dedicated to shaping the future. In the fast-paced world of technology, our company stands as a beacon of innovation and progress.",
    image: "/assets/img/th-15/hero-img.jpg"
  }
};
```

**Step 2: Test**

```bash
npm run dev
```

Visit `http://localhost:8080` to verify the homepage renders correctly.

---

### Phase 5: Create Reusable Components (Ongoing)

**Example: Card Component**

`src/components/Card.jsx`:

```jsx
export default function Card({ title, description, link, className = "" }) {
  return (
    <div className={`jos rounded-[10px] bg-white p-10 shadow-[0_4px_80px_0px_rgba(0,0,0,0.06)] ${className}`}>
      <h3 className="mb-4 text-2xl font-semibold text-black">{title}</h3>
      <p className="mb-6 text-lg text-gray-700">{description}</p>
      {link && (
        <a
          href={link}
          className="text-primary hover:text-primary-hover font-medium transition-colors"
        >
          Learn more →
        </a>
      )}
    </div>
  );
}
```

**Usage in page:**

```jsx
import Card from '../components/Card.jsx';

export default function Services({ services }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <Card
          key={index}
          title={service.title}
          description={service.description}
          link={service.link}
        />
      ))}
    </div>
  );
}
```

---

### Phase 6: Production Build & Testing

**Step 1: Test Build**

```bash
npm run build
```

**Step 2: Verify Output**

Check `_site/` directory:
- All HTML files generated
- CSS compiled and minified
- Assets copied correctly
- Links working

**Step 3: Test Locally**

```bash
npx @11ty/eleventy --serve
```

Navigate through all pages to verify functionality.

---

## 9. Code Examples

### Example 1: Hero Section Component

`src/components/HeroSection.jsx`:

```jsx
export default function HeroSection({
  title,
  subtitle,
  image,
  ctaPrimary,
  ctaSecondary
}) {
  return (
    <section className="section-hero">
      <div className="relative z-10 overflow-hidden">
        <div className="pb-[60px] pt-28 md:pb-20 md:pt-36 lg:pb-[100px] lg:pt-[150px]">
          <div className="container-default">
            <div className="jos mb-6 max-w-xl lg:max-w-2xl xl:max-w-3xl">
              <h1 className="mb-6 font-Syne text-4xl font-semibold uppercase leading-none -tracking-[2px] text-black sm:text-5xl lg:text-6xl xl:text-[90px]">
                {title}
              </h1>
            </div>

            {image && (
              <div className="relative mx-auto my-[60px] max-w-[1296px] overflow-hidden rounded-tl-[10px] rounded-tr-[10px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full"
                />
              </div>
            )}

            <div className="flex flex-col items-start justify-between gap-x-[200px] xl:flex-row xl:items-center">
              <p className="text-2xl font-semibold text-dark xl:max-w-[665px]">
                {subtitle}
              </p>

              {(ctaPrimary || ctaSecondary) && (
                <div className="mb-3 flex flex-wrap gap-6">
                  {ctaPrimary && (
                    <a
                      href={ctaPrimary.href}
                      className="btn is-blue is-transparent btn-animation is-large group inline-block rounded-[3px]"
                    >
                      <span>{ctaPrimary.text}</span>
                    </a>
                  )}
                  {ctaSecondary && (
                    <a
                      href={ctaSecondary.href}
                      className="btn is-outline-black btn-animation is-large inline-block rounded-[3px]"
                    >
                      <span>{ctaSecondary.text}</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Usage:**

```jsx
<HeroSection
  title="Smart Solutions for a Modern era"
  subtitle="We are dedicated to shaping the future..."
  image={{
    src: "/assets/img/th-15/hero-img.jpg",
    alt: "Hero image",
    width: 1296,
    height: 550
  }}
  ctaPrimary={{ text: "Talk To Us", href: "/contact" }}
  ctaSecondary={{ text: "View Our Services", href: "/services" }}
/>
```

---

### Example 2: Stats/Fun Facts Component

`src/components/StatsSection.jsx`:

```jsx
export default function StatsSection({ title, stats }) {
  return (
    <section className="section-fan-fact">
      <div className="section-space">
        <div className="container-default">
          <div className="jos mb-[60px]">
            <div className="mx-auto max-w-[843px]">
              <div className="mb-5">
                <h2 className="text-center font-Syne text-4xl font-semibold uppercase leading-[1.07] text-black sm:text-5xl lg:text-6xl xl:text-[65px]">
                  {title}
                </h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="jos rounded-[10px] bg-white p-10 shadow-[0_4px_80px_0px_rgba(0,0,0,0.06)]"
                data-jos_delay={index * 0.3}
              >
                <div className="mb-[5px] font-Syne text-6xl font-semibold uppercase leading-[1.5] text-primary lg:text-7xl xl:text-[90px]">
                  <span className="start-number text-black">{stat.number}</span>
                  {stat.suffix}
                </div>
                <span className="text-lg text-black lg:text-xl">
                  {stat.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Usage:**

```jsx
<StatsSection
  title="Impactful Numbers"
  stats={[
    {
      number: 15,
      suffix: "+",
      description: "We have worked with reputation for the last 15 years"
    },
    {
      number: 2,
      suffix: "M+",
      description: "Worked with 2M clients in different countries around the world"
    },
    {
      number: 99,
      suffix: "%",
      description: "About 99% of our clients express their satisfaction with our work"
    }
  ]}
/>
```

---

### Example 3: Service List Component

`src/components/ServiceList.jsx`:

```jsx
export default function ServiceList({ title, services }) {
  return (
    <section className="section-service">
      <div className="bg-black">
        <div className="section-space">
          <div className="container-default">
            <div className="jos mb-[60px]">
              <div className="max-w-[789px]">
                <div className="mb-5">
                  <h2 className="font-Syne text-4xl font-semibold uppercase leading-[1.07] text-white sm:text-5xl lg:text-6xl xl:text-[65px]">
                    {title}
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-y-6">
              {services.map((service, index) => (
                <div key={index} className="jos">
                  <div className="group flex h-full flex-col items-start justify-between gap-10 gap-x-[50px] rounded-[5px] border border-[#414141] p-10 md:flex-row md:items-center lg:gap-x-10">
                    <div className="flex-1">
                      <div className="mb-6 font-Syne text-3xl font-semibold leading-none text-white lg:text-[35px]">
                        {service.title}
                      </div>
                      <p className="max-w-[898px] text-xl leading-[1.33] text-white lg:text-2xl">
                        {service.description}
                      </p>
                    </div>
                    <a
                      href={service.link}
                      className="relative flex h-[43px] w-[43px] items-center justify-center overflow-hidden"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <img
                        src="/assets/img/icons/icon-white-top-right.svg"
                        alt=""
                        width="43"
                        height="43"
                        className="absolute inset-0 transition-all duration-300 group-hover:-translate-y-full group-hover:translate-x-full"
                      />
                      <img
                        src="/assets/img/icons/icon-blue-top-right.svg"
                        alt=""
                        width="43"
                        height="43"
                        className="absolute inset-0 -translate-x-full translate-y-full transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### Example 4: With TypeScript

`src/components/Button.tsx`:

```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  className = '',
}: ButtonProps) {
  const baseClasses = 'btn transition-all duration-300';

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-hover',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
```

---

## 10. JSX vs Nunjucks Comparison

### Feature Comparison

| Feature | Nunjucks | JSX |
|---------|----------|-----|
| **Conditionals** | `{% if condition %}...{% endif %}` | `{condition && <div>...</div>}` |
| **Loops** | `{% for item in items %}...{% endfor %}` | `{items.map(item => <div key={item.id}>...</div>)}` |
| **Variables** | `{{ variable }}` | `{variable}` |
| **Components** | `{% include "component.njk" %}` | `<Component prop={value} />` |
| **Front Matter** | YAML at top of file | `export const data = {}` |
| **Type Safety** | None | Full TypeScript support |
| **IDE Support** | Basic | Excellent (autocomplete, refactoring) |
| **Learning Curve** | Easy for non-developers | Requires JavaScript knowledge |
| **Ecosystem** | Limited | Massive (React ecosystem) |

### Syntax Examples

**Conditionals:**

```njk
{# Nunjucks #}
{% if user.isLoggedIn %}
  <p>Welcome, {{ user.name }}!</p>
{% else %}
  <p>Please log in.</p>
{% endif %}
```

```jsx
// JSX
{user.isLoggedIn ? (
  <p>Welcome, {user.name}!</p>
) : (
  <p>Please log in.</p>
)}
```

**Loops:**

```njk
{# Nunjucks #}
<ul>
{% for post in posts %}
  <li>{{ post.title }}</li>
{% endfor %}
</ul>
```

```jsx
// JSX
<ul>
  {posts.map(post => (
    <li key={post.id}>{post.title}</li>
  ))}
</ul>
```

---

### Advantages of JSX (2025)

✅ **Modern Tooling**: Superior IDE support, type checking, refactoring
✅ **Type Safety**: Full TypeScript support
✅ **Component Composition**: True component-based architecture
✅ **JavaScript Native**: No template syntax to learn
✅ **Large Ecosystem**: React patterns, libraries, and best practices
✅ **Better Refactoring**: IDE-powered rename, extract component, etc.
✅ **Official Support**: Eleventy v3.0+ has native JSX support

### Disadvantages of JSX

⚠️ **Learning Curve**: Requires React/JavaScript knowledge
⚠️ **Build Step**: Requires tsx/esbuild
⚠️ **ESM Required**: Must use `"type": "module"`
⚠️ **Quirks**: `className` instead of `class`, `htmlFor` instead of `for`
⚠️ **Less Documentation**: Newer in Eleventy ecosystem

---

## 11. Best Practices 2025

### 1. Use TypeScript for Type Safety

```typescript
// src/pages/index.11ty.tsx
interface HomeProps {
  title: string;
  description: string;
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
}

export default function Home({ title, description, hero }: HomeProps) {
  // ...
}
```

### 2. Co-locate Related Components

```
src/components/
  Card/
    Card.tsx
    Card.test.tsx
    card.css (if component-specific styles)
```

### 3. Use Islands Architecture for Interactivity

Only hydrate what needs to be interactive:

```jsx
// Static by default
<ServiceList services={services} />

// Interactive where needed
<is-land on:visible>
  <Newsletter />
</is-land>
```

### 4. Leverage Tailwind @layer with Component Classes

```css
/* src/assets/css/tailwind.css */
@layer components {
  .card {
    @apply rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg;
  }
}
```

```jsx
<div className="card">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>
```

### 5. Use Semantic HTML

```jsx
// ✅ Good
<article>
  <header>
    <h1>{post.title}</h1>
    <time dateTime={post.date}>{formatDate(post.date)}</time>
  </header>
  <main dangerouslySetInnerHTML={{ __html: post.content }} />
</article>

// ❌ Avoid
<div>
  <div>
    <div>{post.title}</div>
    <div>{formatDate(post.date)}</div>
  </div>
  <div dangerouslySetInnerHTML={{ __html: post.content }} />
</div>
```

### 6. Extract Data to _data Files

```javascript
// src/_data/site.js
export default {
  title: "Masco",
  description: "Smart Solutions for a Modern Era",
  url: "https://masco.example.com",
  author: {
    name: "Your Name",
    email: "hello@example.com"
  },
  navigation: [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Contact", url: "/contact" }
  ]
};
```

### 7. Use Proper Image Optimization

```jsx
<img
  src="/assets/img/hero.jpg"
  alt="Hero image"
  width="1200"
  height="600"
  loading="lazy"
  decoding="async"
  className="w-full h-auto"
/>
```

### 8. Implement Proper SEO

```jsx
export const data = {
  layout: "layouts/base.njk",
  title: "About Us - Company Name",
  description: "Learn about our mission, vision, and the team behind our success.",
  socialImage: "/assets/img/og-about.jpg",
  permalink: "/about/"
};
```

### 9. Test Components

```javascript
// tests/components/Button.test.jsx
import { renderToStaticMarkup } from 'react-dom/server';
import Button from '../src/components/Button.jsx';
import { expect, test } from 'vitest';

test('Button renders correctly', () => {
  const html = renderToStaticMarkup(
    <Button variant="primary">Click me</Button>
  );

  expect(html).toContain('btn');
  expect(html).toContain('Click me');
});
```

### 10. Use Environment Variables

```javascript
// .eleventy.js
export default function(eleventyConfig) {
  const isProduction = process.env.NODE_ENV === 'production';

  if (isProduction) {
    // Minify HTML in production
    eleventyConfig.addTransform("htmlmin", function(content) {
      // ... minification logic
    });
  }
}
```

---

## 12. Resources

### Official Documentation
- [Eleventy JSX Documentation](https://www.11ty.dev/docs/languages/jsx/)
- [Eleventy Getting Started](https://www.11ty.dev/docs/)
- [Partial Hydration with is-land](https://www.11ty.dev/docs/plugins/is-land/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)

### Community & Examples
- [eleventy-plugin-react-ssr](https://github.com/scinos/eleventy-plugin-react-ssr)
- [eleventy-react-example](https://github.com/ashleydavis/eleventy-react-example)
- [Eleventy Starter Projects](https://www.11ty.dev/docs/starter/)

### Tailwind + Eleventy
- [Combining Eleventy with Tailwind CSS](https://medium.com/@grahamrb/combining-eleventy-with-tailwind-css-and-daisyui-9b87c3f40d67)
- [Integrating Tailwind CSS with Eleventy](https://ulfschneider.io/2025-05-20-tailwind-css-and-11ty/)
- [How to setup TailwindCSS for Eleventy](https://everythingcs.dev/blog/setup-tailwindcss-eleventy/)

### Islands Architecture
- [@11ty/is-land GitHub](https://github.com/11ty/is-land)
- [Islands Architecture Pattern](https://www.patterns.dev/vanilla/islands-architecture/)
- [Interactive Islands Article](https://danthedev.com/interactive-islands/)

### Best Practices
- [Structuring Eleventy Projects](https://www.webstoemp.com/blog/eleventy-projects-structure/)
- [Setting up Eleventy with Preact](https://markus.oberlehner.net/blog/setting-up-eleventy-with-preact-and-htm)
- [Eleventy Server Components](https://www.seancdavis.com/posts/eleventy-server-components/)

---

## Conclusion

Migrating from static HTML + Tailwind CSS to **Eleventy with JSX/React components** provides:

✅ **Modern Component Architecture**: Reusable, composable React components
✅ **Type Safety**: Full TypeScript support for better DX
✅ **Zero Runtime Cost**: Server-rendered HTML, no React shipped to client
✅ **Selective Interactivity**: Islands architecture for progressive enhancement
✅ **Seamless Tailwind Integration**: Your existing @layer directives work perfectly
✅ **Superior Tooling**: IDE autocomplete, refactoring, and type checking
✅ **Official Support**: Native JSX support in Eleventy v3.0+

### Recommended Migration Timeline

- **Phase 1 (Setup)**: 2-3 hours
- **Phase 2 (Base Layout)**: 2-3 hours
- **Phase 3 (Component Extraction)**: 3-4 hours
- **Phase 4 (Homepage Conversion)**: 2-3 hours
- **Phase 5 (Additional Pages)**: 1-2 hours per page
- **Phase 6 (Testing & Polish)**: 4-6 hours

**Total Estimated Time**: 40-60 hours for full migration of 56 pages

The JSX approach represents the **state of the art for Eleventy development in 2025**, providing a modern development experience while maintaining the performance and simplicity that makes Eleventy exceptional.
