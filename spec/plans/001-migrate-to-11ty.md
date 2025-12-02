# Migration Plan: Index.html to Eleventy with TypeScript/React Components

**Date:** 2025-12-02
**Target:** Single page migration (index.html)
**Approach:** Incremental, phase-by-phase with working site at each checkpoint
**Framework:** Eleventy 3.0+ with Native TSX/TypeScript support

---

## Executive Summary

This plan outlines a practical, simplified migration of the Masco index.html page to Eleventy with TypeScript/React components. Each phase ends with a fully functional site that can be run locally. The migration prioritizes simplicity over edge cases while leveraging TypeScript for enhanced developer experience and type safety.

**Current State:**
- Static HTML with Tailwind CSS
- Existing build process: `npm start` runs live-server + Tailwind watch
- Assets: fonts, images, vendor CSS/JS already organized
- Page size: ~1,288 lines of HTML

**Target State:**
- Eleventy 3.0+ with TypeScript TSX components
- Full type safety with TypeScript interfaces
- Server-side rendered HTML (zero client-side React)
- Preserved Tailwind CSS styling and @layer directives
- Maintained vendor JavaScript functionality
- Component-based architecture with excellent IDE support

---

## Visual Component Analysis

Based on viewing http://127.0.0.1:3000/index.html, the page structure breaks down into:

### Small Reusable Components (Atomic)

1. **Button** - Multiple variants (primary, outline, text-only)
   - Used in: Header, Hero, Content sections, CTA
   - Variants: `.btn.is-blue.is-transparent`, `.btn.is-outline-black`, `.btn-text`

2. **Logo** - Company logo image component
   - Used in: Header, Footer
   - Props: src, alt, width, height

3. **Icon** - Font Awesome icon wrapper
   - Used in: Navigation, Social links, Feature lists, Service arrows
   - Props: iconClass, size, color

4. **Input** - Form input field with label
   - Used in: CTA form
   - Variants: text, email

5. **Textarea** - Multi-line text input with label
   - Used in: CTA form
   - Props: label, id, placeholder, required

6. **Select** - Dropdown selector with label
   - Used in: CTA form
   - Props: label, options array

7. **SocialLink** - Circular social media icon button
   - Used in: Footer
   - Props: platform, url, icon

8. **HorizontalLine** - Full-width separator
   - Used in: Between sections, Footer
   - Props: bgColor

### Medium Components (Molecular)

9. **NavLink** - Navigation menu item
   - Used in: Header
   - Variants: Simple link, Dropdown trigger
   - Props: label, href, hasDropdown, children

10. **DropdownMenu** - Submenu with nested items
   - Used in: Header navigation
   - Props: items array, id

11. **StatCard** - Statistics display card with animated counter
   - Used in: Fun-fact section
   - Props: number, suffix, description, delay
   - Features: White background, shadow, rounded corners

12. **ServiceCard** - Horizontal service listing with hover effects
   - Used in: Services section (4 instances)
   - Props: title, description, link
   - Features: Dark border, arrow icon with animation

13. **ProcessStep** - Numbered workflow step with hover border
   - Used in: Work Process section (3 instances)
   - Props: stepNumber, title, description, delay

14. **TeamMemberCard** - Team profile with image and details
   - Used in: Team section (6 instances)
   - Props: imageSrc, name, title, delay
   - Features: Flip animation, dark background

15. **AccordionItem** - Expandable FAQ question/answer
   - Used in: FAQ section (5 instances)
   - Props: question, answer, isActive
   - Features: Plus/minus icon toggle

16. **FormField** - Label + input/select/textarea combination
   - Used in: CTA form
   - Props: type, label, id, placeholder, required, options

17. **BrandLogo** - Partner brand image display
   - Used in: CTA section (5 instances)
   - Props: src, alt, maxWidth

18. **FooterLinkList** - Titled navigation list
   - Used in: Footer (5 columns)
   - Props: title, links array

19. **ContentImageBlock** - Rounded image container
   - Used in: Content sections
   - Props: src, alt, width, height, alignment

20. **IconBulletList** - Feature list with checkmark icons
   - Used in: "Why Choose Us" section
   - Props: items array with { title, description }

### Large Components (Organisms)

21. **Header** - Full navigation header
   - Elements: Logo, NavLinks, DropdownMenus, Login/Signup buttons, Mobile menu
   - Features: Sticky positioning, white theme, responsive

22. **Hero** - Large introductory section
   - Elements: Headline, Hero image, Description text, CTA buttons
   - Props: title, imageSrc, description, ctaPrimary, ctaSecondary

23. **StatsSection** - Three-column statistics showcase
   - Elements: Section heading, Grid of StatCards
   - Props: title, stats array

24. **ServicesSection** - Dark-themed service offerings
   - Elements: Section heading, ServiceCards (4 items)
   - Props: title, services array
   - Features: Black background, vertical stack

25. **TwoColumnContent** - Image + text content block
   - Elements: Image, Heading, Text, Optional IconBulletList, CTA button
   - Props: heading, content, imageSrc, imagePosition, features array
   - Used twice: "Know About Us", "Why Choose Us"

26. **ProcessSection** - Three-step workflow visualization
   - Elements: Section heading, ProcessStep grid (3 items)
   - Props: title, steps array
   - Features: Top border hover animations

27. **TeamSection** - Team member showcase
   - Elements: Section heading, TeamMemberCard grid (6 items)
   - Props: title, members array
   - Features: Black background, responsive grid

28. **FaqSection** - Expandable FAQ accordion
   - Elements: Section heading, AccordionItems (5 items)
   - Props: title, faqs array
   - Features: Custom accordion icons

29. **CtaSection** - Two-column CTA with contact form
   - Elements: Left (Heading, text, CTA, brands), Right (Contact form)
   - Props: heading, description, brands array, formFields
   - Features: Blue background, responsive layout

30. **Footer** - Comprehensive footer
   - Elements: 5 FooterLinkLists, SocialLinks, Logo, Copyright
   - Props: linkSections array, socialLinks array, year
   - Features: Responsive grid

---

## Phase 1: Foundation Setup (1-2 hours)

**Goal:** Install Eleventy and configure basic build system alongside existing setup.

### Steps:

1. **Install Eleventy and TypeScript dependencies**
   ```bash
   npm install --save-dev @11ty/eleventy@^3.0.0 tsx npm-run-all rimraf typescript
   npm install react react-dom
   npm install --save-dev @types/react @types/react-dom
   ```

2. **Update package.json**
   - Add `"type": "module"` to enable ESM
   - Add new scripts:
     ```json
     "clean": "rimraf _site",
     "dev:11ty": "eleventy --serve --quiet --incremental",
     "dev:tailwind": "tailwindcss -i ./src/tailwind.css -o ./_site/assets/css/style.css --watch",
     "dev:11ty-all": "npm-run-all clean --parallel dev:11ty dev:tailwind",
     "build:11ty": "eleventy",
     "build:tailwind": "tailwindcss -i ./src/tailwind.css -o ./_site/assets/css/style.css --minify",
     "build:all": "npm-run-all clean build:11ty build:tailwind"
     ```
   - Keep existing scripts for fallback: `start`, `start:server`, `dev:css`, `minify`

3. **Create .eleventy.js configuration**
   ```javascript
   import "tsx/esm";
   import { renderToStaticMarkup } from "react-dom/server";

   export default function (eleventyConfig) {
     // TypeScript/TSX support
     eleventyConfig.addExtension(["11ty.tsx", "11ty.tsx"], {
       key: "11ty.js",
       compile: function () {
         return async function (data) {
           let content = await this.defaultRenderer(data);
           return renderToStaticMarkup(content);
         };
       },
     });

     // Passthrough copy for static assets
     eleventyConfig.addPassthroughCopy("assets/img");
     eleventyConfig.addPassthroughCopy("assets/fonts");
     eleventyConfig.addPassthroughCopy("assets/js");
     eleventyConfig.addPassthroughCopy("assets/css/vendors");
     eleventyConfig.addPassthroughCopy("assets/css/custom.css");

     // Watch CSS for changes
     eleventyConfig.addWatchTarget("src/");

     return {
       dir: {
         input: "src",
         output: "_site",
         includes: "_includes",
         data: "_data",
       },
       templateFormats: ["html", "md", "11ty.tsx", "11ty.tsx"],
     };
   }
   ```

4. **Create tsconfig.json**
   ```json
   {
     "compilerOptions": {
       "target": "ES2020",
       "module": "ESNext",
       "lib": ["ES2020", "DOM", "DOM.Iterable"],
       "jsx": "react",
       "jsxImportSource": "react",
       "moduleResolution": "bundler",
       "allowImportingTsExtensions": true,
       "resolveJsonModule": true,
       "noEmit": true,
       "strict": true,
       "skipLibCheck": true,
       "esModuleInterop": true,
       "allowSyntheticDefaultImports": true,
       "forceConsistentCasingInFileNames": true
     },
     "include": ["src/**/*"],
     "exclude": ["node_modules", "_site"]
   }
   ```

5. **Update tailwind.config.js content paths**
   ```javascript
   content: [
     "./src/**/*.{html,njk,md,jsx,tsx,js,ts}",
     "./_site/**/*.html",
   ],
   ```

6. **Create directory structure**
   ```bash
   mkdir -p src/_includes/layouts
   mkdir -p src/_includes/components
   mkdir -p src/_data
   mkdir -p src/pages
   ```

7. **Update .gitignore**
   ```
   _site/
   node_modules/
   .DS_Store
   ```

8. **Move Tailwind source** (if not already in src/)
   - Ensure `src/tailwind.css` exists with @layer directives

### Verification:
- Run `npm run dev:11ty-all` - Eleventy should start on port 8080
- Visit http://localhost:8080 (should show empty directory for now)
- Original site still works: `npm start` on port 3000
- Tailwind compiles to `_site/assets/css/style.css`

---

## Phase 2: Base Layout and Static Homepage (2-3 hours)

**Goal:** Create Nunjucks base layout and convert index.html to a TypeScript page template.

### Steps:

1. **Create base Nunjucks layout**

   **File:** `src/_includes/layouts/base.njk`
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

2. **Copy entire index.html body content to TSX page**

   **File:** `src/pages/index.11ty.tsx`
   ```tsx
   export default function Home() {
     return (
       <>
         {/* Paste entire body content from index.html here */}
         {/* For now, convert only: class -> className, for -> htmlFor */}
         {/* Keep all HTML structure identical */}
       </>
     );
   }

   export const data = {
     layout: "layouts/base.njk",
     title: "Masco - Saas Software Startup Tailwind Template",
     description: "AIMass Tailwind based SASS Template",
     permalink: "/index.html",
   };
   ```

3. **Perform basic HTML-to-TSX conversion**
   - Replace all `class=` with `className=`
   - Replace `for=` with `htmlFor=` (in form labels)
   - Close self-closing tags: `<img>` → `<img />`
   - Keep all other attributes unchanged initially
   - TypeScript will provide inline error checking as you convert

4. **Test the converted page**
   ```bash
   npm run dev:11ty-all
   ```
   - Visit http://localhost:8080/index.html
   - Verify page renders identically to original
   - Check browser console for errors
   - Test interactive elements (menu, accordion, counters)

### Verification:
- Page appears identical to original
- All styles apply correctly
- Vendor JavaScript works (menu, animations, counters)
- No console errors
- Forms display correctly
- Responsive design works

---

## Phase 3: Extract Header and Footer (1-2 hours)

**Goal:** Create reusable Header and Footer components.

### Steps:

1. **Create Header component**

   **File:** `src/_includes/components/Header.tsx`
   ```tsx
   export default function Header() {
     return (
       <header className="site-header site-header--absolute is--white py-3" id="sticky-menu">
         <div className="container-default">
           <div className="flex items-center justify-between gap-x-8">
             {/* Paste header content from index.html (lines 40-277) */}
             {/* Convert class to className */}
           </div>
         </div>
       </header>
     );
   }
   ```

2. **Create Footer component**

   **File:** `src/_includes/components/Footer.tsx`
   ```tsx
   interface FooterProps {
     year?: number;
   }

   export default function Footer({ year = new Date().getFullYear() }: FooterProps) {
     return (
       <footer className="section-footer">
         {/* Paste footer content from index.html (lines 1091-1272) */}
         {/* Replace hardcoded year with {year} prop */}
       </footer>
     );
   }
   ```

3. **Update index.11ty.tsx to use components**
   ```tsx
   import Header from '../_includes/components/Header.tsx';
   import Footer from '../_includes/components/Footer.tsx';

   export default function Home() {
     return (
       <>
         <Header />
         <main className="main-wrapper relative overflow-hidden">
           {/* Keep main content sections here */}
         </main>
         <Footer />
       </>
     );
   }

   export const data = {
     layout: "layouts/base.njk",
     title: "Masco - Saas Software Startup Tailwind Template",
     description: "AIMass Tailwind based SASS Template",
     permalink: "/index.html",
   };
   ```

### Verification:
- Page still renders identically
- Header and footer appear correctly
- Navigation menu works
- Footer links functional

---

## Phase 4: Create Atomic Components (2-3 hours)

**Goal:** Build small reusable components for buttons, icons, inputs.

### Components to Create:

1. **Button Component**

   **File:** `src/_includes/components/Button.tsx`
   ```tsx
   import React from 'react';

   interface ButtonProps {
     children: React.ReactNode;
     variant?: 'primary' | 'outline' | 'outlineWhite';
     size?: 'medium' | 'large';
     href?: string;
     className?: string;
   }

   export default function Button({
     children,
     variant = 'primary',
     size = 'medium',
     href,
     className = ''
   }: ButtonProps) {
     const baseClasses = 'btn btn-animation inline-block rounded-[3px]';

     const variantClasses = {
       primary: 'is-blue is-transparent',
       outline: 'is-outline-black',
       outlineWhite: 'is-outline-white',
     };

     const sizeClasses = {
       medium: '',
       large: 'is-large',
     };

     const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

     if (href) {
       return (
         <a href={href} className={classes}>
           <span>{children}</span>
         </a>
       );
     }

     return (
       <button type="button" className={classes}>
         <span>{children}</span>
       </button>
     );
   }
   ```

2. **Icon Component**

   **File:** `src/_includes/components/Icon.tsx`
   ```tsx
   interface IconProps {
     name: string;
     className?: string;
   }

   export default function Icon({ name, className = '' }: IconProps) {
     return <i className={`fa-${name} ${className}`}></i>;
   }
   ```

3. **Logo Component**

   **File:** `src/_includes/components/Logo.tsx`
   ```tsx
   interface LogoProps {
     href?: string;
     variant?: 'dark' | 'light';
   }

   export default function Logo({ href = '/', variant = 'dark' }: LogoProps) {
     const logoSrc = `/assets/img/logo-${variant}.png`;

     return (
       <a href={href}>
         <img src={logoSrc} alt="Masco" width="109" height="24" />
       </a>
     );
   }
   ```

4. **SocialLink Component**

   **File:** `src/_includes/components/SocialLink.tsx`
   ```tsx
   interface SocialLinkProps {
     platform: string;
     url: string;
     iconClass: string;
   }

   export default function SocialLink({ platform, url, iconClass }: SocialLinkProps) {
     return (
       <a
         href={url}
         target="_blank"
         rel="noopener noreferrer"
         className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#EAEDF0] text-sm text-black transition-all duration-300 hover:bg-[#0000FF] hover:text-white"
         aria-label={platform}
       >
         <i className={iconClass}></i>
       </a>
     );
   }
   ```

5. **HorizontalLine Component**

   **File:** `src/_includes/components/HorizontalLine.tsx`
   ```tsx
   interface HorizontalLineProps {
     bgColor?: string;
   }

   export default function HorizontalLine({ bgColor = 'bg-ColorBlack' }: HorizontalLineProps) {
     return <div className={`horizontal-line ${bgColor}`}></div>;
   }
   ```

6. **FormField Component**

   **File:** `src/_includes/components/FormField.tsx`
   ```tsx
   interface FormFieldOption {
     value: string;
     label: string;
   }

   interface FormFieldProps {
     type?: 'text' | 'email' | 'select' | 'textarea';
     label: string;
     id: string;
     placeholder: string;
     required?: boolean;
     options?: FormFieldOption[];
   }

   export default function FormField({
     type = 'text',
     label,
     id,
     placeholder,
     required = false,
     options = []
   }: FormFieldProps) {
     const inputClasses = "rounded-[5px] border border-[#B8C1CC] px-4 py-2 outline-none transition-all duration-150 focus:border-[#0000FF] focus:text-black lg:px-[30px] lg:py-[15px]";

     return (
       <div className="flex flex-col">
         <label htmlFor={id} className="mb-[10px] font-semibold text-black">
           {label}
         </label>

         {type === 'textarea' ? (
           <textarea
             id={id}
             name={id}
             className={`${inputClasses} min-h-[120px] w-full`}
             placeholder={placeholder}
             required={required}
           />
         ) : type === 'select' ? (
           <select
             id={id}
             name={id}
             className={inputClasses}
             required={required}
           >
             <option value="">{placeholder}</option>
             {options.map((opt, idx) => (
               <option key={idx} value={opt.value}>
                 {opt.label}
               </option>
             ))}
           </select>
         ) : (
           <input
             type={type}
             id={id}
             name={id}
             className={inputClasses}
             placeholder={placeholder}
             required={required}
           />
         )}
       </div>
     );
   }
   ```

### Update Components to Use Atomics:

- Update Header to use `<Logo />` and `<Icon />`
- Update Footer to use `<SocialLink />` and `<Logo />`
- Update any buttons in main sections to use `<Button />`

### Verification:
- All buttons render correctly with proper variants
- Icons display properly
- Logo links work
- Social links functional
- Form fields render with proper styling

---

## Phase 5: Create Molecular Components (3-4 hours)

**Goal:** Build medium-sized components for cards and repeated elements.

### Components to Create:

1. **StatCard**

   **File:** `src/_includes/components/StatCard.tsx`
   ```tsx
   interface StatCardProps {
     number: number;
     suffix: string;
     description: string;
     delay?: number;
   }

   export default function StatCard({ number, suffix, description, delay = 0 }: StatCardProps) {
     return (
       <div
         className="jos rounded-[10px] bg-white p-10 shadow-[0_4px_80px_0px_rgba(0,0,0,0.06)]"
         data-jos_delay={delay}
       >
         <div
           className="mb-[5px] font-Syne text-6xl font-semibold uppercase leading-[1.5] text-[#00F] lg:text-7xl xl:text-[90px]"
           data-module="countup"
         >
           <span className="start-number text-black" data-countup-number={number}>
             {number}
           </span>
           {suffix}
         </div>
         <span className="text-lg text-black lg:text-xl">{description}</span>
       </div>
     );
   }
   ```

2. **ServiceCard**

   **File:** `src/_includes/components/ServiceCard.tsx`
   ```tsx
   interface ServiceCardProps {
     title: string;
     description: string;
     link: string;
   }

   export default function ServiceCard({ title, description, link }: ServiceCardProps) {
     return (
       <div className="jos">
         <div className="group flex h-full flex-col items-start justify-between gap-10 gap-x-[50px] rounded-[5px] border border-[#414141] p-10 md:flex-row md:items-center lg:gap-x-10">
           <div className="flex-1">
             <div className="mb-6 font-Syne text-3xl font-semibold leading-none text-white lg:text-[35px]">
               {title}
             </div>
             <p className="max-w-[898px] text-xl leading-[1.33] text-white lg:text-2xl">
               {description}
             </p>
           </div>
           <a
             href={link}
             className="relative flex h-[43px] w-[43px] items-center justify-center overflow-hidden"
             aria-label={`Learn more about ${title}`}
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
     );
   }
   ```

3. **TeamMemberCard**

   **File:** `src/_includes/components/TeamMemberCard.tsx`
   ```tsx
   interface TeamMemberCardProps {
     imageSrc: string;
     name: string;
     title: string;
     delay?: number;
   }

   export default function TeamMemberCard({ imageSrc, name, title, delay = 0 }: TeamMemberCardProps) {
     return (
       <div
         className="jos rounded-[5px] bg-[#2C2C2C] p-5"
         data-jos_animation="flip-left"
         data-jos_delay={delay}
       >
         <div className="mb-6 w-full overflow-hidden rounded-[6px] md:h-80 lg:h-60 xl:h-80">
           <img
             src={imageSrc}
             alt={name}
             width="376"
             height="320"
             className="h-full w-full object-cover object-top"
           />
         </div>
         <div>
           <div className="mb-[5px] font-Syne text-2xl font-semibold text-white">
             {name}
           </div>
           <span className="text-xl text-white">{title}</span>
         </div>
       </div>
     );
   }
   ```

4. **ProcessStep**

   **File:** `src/_includes/components/ProcessStep.tsx`
   ```tsx
   interface ProcessStepProps {
     stepNumber: number;
     title: string;
     description: string;
     delay?: number;
   }

   export default function ProcessStep({ stepNumber, title, description, delay = 0 }: ProcessStepProps) {
     return (
       <div className="jos group relative lg:pt-[30px]" data-jos_delay={delay}>
         <div className="mb-6 font-Syne text-3xl font-semibold leading-none text-black lg:text-[26px] xl:text-3xl xxl:text-[35px]">
           {stepNumber}. {title}
         </div>
         <p className="m-0 text-lg leading-[1.33] -tracking-[0.5px] text-[#2C2C2C] md:text-xl xl:text-2xl">
           {description}
         </p>
         <div className="absolute -top-[3px] left-0 hidden h-[3px] w-full scale-x-0 overflow-hidden rounded-[50px] bg-[#0000FF] transition-all duration-300 group-hover:scale-x-100 lg:block"></div>
       </div>
     );
   }
   ```

5. **AccordionItem**

   **File:** `src/_includes/components/AccordionItem.tsx`
   ```tsx
   interface AccordionItemProps {
     question: string;
     answer: string;
     isActive?: boolean;
   }

   export default function AccordionItem({ question, answer, isActive = false }: AccordionItemProps) {
     return (
       <li className={`accordion-item ${isActive ? 'active' : ''} overflow-hidden border-b border-[#EAEDF0] py-[60px] first:pt-0 last:border-b-0`}>
         <div className="accordion-header flex justify-between gap-6 font-Syne text-3xl font-semibold leading-none text-black lg:text-[26px] xl:text-3xl xxl:text-[35px]">
           <button className="flex-1 text-left">
             {question}
           </button>
           <div className="accordion-icon-6 relative flex h-[50px] w-[50px] items-center justify-center">
             <span className="inline-block h-1 w-8 rounded-sm bg-black lg:w-10 xl:h-[7px] xl:w-[50px]"></span>
             <span className="absolute inline-block h-8 w-1 rotate-0 rounded-sm bg-black lg:h-10 xl:h-[50px] xl:w-[7px]"></span>
           </div>
         </div>
         <div className="accordion-body max-w-[898px] opacity-80">
           <p className="pt-5 text-lg leading-[1.33] -tracking-[0.5px] text-[#2C2C2C] md:text-xl xl:text-2xl">
             {answer}
           </p>
         </div>
       </li>
     );
   }
   ```

6. **IconBulletList**

   **File:** `src/_includes/components/IconBulletList.tsx`
   ```tsx
   import Icon from './Icon.tsx';

   interface IconBulletItem {
     title: string;
     description: string;
   }

   interface IconBulletListProps {
     items: IconBulletItem[];
   }

   export default function IconBulletList({ items }: IconBulletListProps) {
     return (
       <ul className="flex list-inside flex-col gap-y-8 text-lg leading-[1.33] -tracking-[0.5px] text-[#2C2C2C] md:text-xl xl:text-2xl">
         {items.map((item, idx) => (
           <li key={idx} className="flex gap-x-[10px]">
             <span className="mr-3 mt-[3px] text-[#0000FF]">
               <Icon name="solid fa-circle-check" />
             </span>
             <p>
               <strong className="font-semibold text-black">{item.title}</strong>
               {item.description}
             </p>
           </li>
         ))}
       </ul>
     );
   }
   ```

7. **FooterLinkList**

   **File:** `src/_includes/components/FooterLinkList.tsx`
   ```tsx
   interface FooterLink {
     label: string;
     href: string;
     external?: boolean;
   }

   interface FooterLinkListProps {
     title: string;
     links: FooterLink[];
   }

   export default function FooterLinkList({ title, links }: FooterLinkListProps) {
     return (
       <div className="flex flex-col gap-y-6">
         <div className="text-xl font-semibold capitalize text-black">
           {title}
         </div>
         <ul className="flex flex-col gap-y-[10px] capitalize">
           {links.map((link, idx) => (
             <li key={idx}>
               <a
                 href={link.href}
                 className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                 target={link.external ? "_blank" : undefined}
                 rel={link.external ? "noopener noreferrer" : undefined}
               >
                 {link.label}
               </a>
             </li>
           ))}
         </ul>
       </div>
     );
   }
   ```

8. **BrandLogo**

   **File:** `src/_includes/components/BrandLogo.tsx`
   ```tsx
   interface BrandLogoProps {
     src: string;
     alt: string;
     maxWidth?: string;
   }

   export default function BrandLogo({ src, alt, maxWidth = '170px' }: BrandLogoProps) {
     return (
       <div className="h-auto" style={{ maxWidth }}>
         <img src={src} alt={alt} className="w-full h-auto" />
       </div>
     );
   }
   ```

### Verification:
- Each molecular component renders correctly in isolation
- Props pass through properly
- Hover effects and animations work

---

## Phase 6: Create Organism Components (3-4 hours)

**Goal:** Build large section components that compose molecular components.

### Components to Create:

1. **Hero**

   **File:** `src/_includes/components/Hero.tsx`
   ```tsx
   import Button from './Button.tsx';

   interface CtaButton {
     text: string;
     href: string;
   }

   interface HeroProps {
     title: string;
     imageSrc: string;
     description: string;
     ctaPrimary?: CtaButton;
     ctaSecondary?: CtaButton;
   }

   export default function Hero({ title, imageSrc, description, ctaPrimary, ctaSecondary }: HeroProps) {
     return (
       <section className="section-hero">
         <div className="relative z-10 overflow-hidden">
           <div className="pb-[60px] pt-28 md:pb-20 md:pt-36 lg:pb-[100px] lg:pt-[150px] xxl:pb-[120px] xxl:pt-[185px]">
             <div className="container-default">
               <div>
                 <div className="jos mb-6 max-w-xl lg:max-w-2xl xl:max-w-3xl xxl:max-w-[1076px]">
                   <h1 className="mb-6 font-Syne text-[40px] font-semibold uppercase leading-none -tracking-[2px] text-black sm:text-5xl lg:text-6xl xl:text-[90px]">
                     {title}
                   </h1>
                 </div>

                 <div className="relative mx-auto my-[60px] max-w-[1296px] overflow-hidden rounded-tl-[10px] rounded-tr-[10px]">
                   <img
                     src={imageSrc}
                     alt="hero"
                     width="1296"
                     height="550"
                     data-jos_animation="zoom-in-down"
                     className="h-auto w-full"
                   />
                 </div>

                 <div className="flex flex-col items-start justify-between gap-x-[200px] xl:flex-row xl:items-center">
                   <p className="text-2xl font-semibold text-[#2C2C2C] xl:max-w-[665px]">
                     {description}
                   </p>
                   <div className="mb-3 flex flex-wrap gap-6">
                     {ctaPrimary && (
                       <Button variant="primary" size="large" href={ctaPrimary.href}>
                         {ctaPrimary.text}
                       </Button>
                     )}
                     {ctaSecondary && (
                       <Button variant="outline" size="large" href={ctaSecondary.href}>
                         {ctaSecondary.text}
                       </Button>
                     )}
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
     );
   }
   ```

2. **StatsSection**

   **File:** `src/_includes/components/StatsSection.tsx`
   ```tsx
   import StatCard from './StatCard.tsx';

   interface Stat {
     number: number;
     suffix: string;
     description: string;
   }

   interface StatsSectionProps {
     title: string;
     stats: Stat[];
   }

   export default function StatsSection({ title, stats }: StatsSectionProps) {
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
                 <StatCard
                   key={index}
                   number={stat.number}
                   suffix={stat.suffix}
                   description={stat.description}
                   delay={index * 0.3}
                 />
               ))}
             </div>
           </div>
         </div>
       </section>
     );
   }
   ```

3. **ServicesSection**

   **File:** `src/_includes/components/ServicesSection.tsx`
   ```tsx
   import ServiceCard from './ServiceCard.tsx';

   interface Service {
     title: string;
     description: string;
     link: string;
   }

   interface ServicesSectionProps {
     title: string;
     services: Service[];
   }

   export default function ServicesSection({ title, services }: ServicesSectionProps) {
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
                   <ServiceCard
                     key={index}
                     title={service.title}
                     description={service.description}
                     link={service.link}
                   />
                 ))}
               </div>
             </div>
           </div>
         </div>
       </section>
     );
   }
   ```

4. **TwoColumnContent**

   **File:** `src/_includes/components/TwoColumnContent.tsx`
   ```tsx
   import Button from './Button.tsx';
   import IconBulletList from './IconBulletList.tsx';

   interface Feature {
     title: string;
     description: string;
   }

   interface TwoColumnContentProps {
     heading: string;
     content: string | string[];
     imageSrc: string;
     imagePosition?: 'left' | 'right';
     features?: Feature[] | null;
     ctaText?: string | null;
     ctaHref?: string;
   }

   export default function TwoColumnContent({
     heading,
     content,
     imageSrc,
     imagePosition = 'right',
     features = null,
     ctaText = null,
     ctaHref = '#'
   }: TwoColumnContentProps) {
     const imageOrder = imagePosition === 'right' ? 'order-2 lg:order-1' : 'order-1 lg:order-2';
     const contentOrder = imagePosition === 'right' ? 'order-1 lg:order-2' : 'order-2 lg:order-1';

     return (
       <div className={`grid items-center gap-10 ${imagePosition === 'right' ? 'lg:grid-cols-[1fr_minmax(0,_0.75fr)]' : 'lg:grid-cols-[0.7fr_minmax(0,_1fr)]'} lg:gap-24 xl:gap-[110px]`}>
         <div className={`jos ${contentOrder}`} data-jos_animation="fade-right">
           <div>
             <div className="mb-6">
               <h2 className="font-Syne text-4xl font-semibold uppercase leading-[1.07] text-black sm:text-5xl lg:text-6xl xl:text-[65px]">
                 {heading}
               </h2>
             </div>
           </div>

           {Array.isArray(content) ? (
             content.map((paragraph, idx) => (
               <p key={idx} className="text-lg leading-[1.33] -tracking-[0.5px] text-[#2C2C2C] md:text-xl xl:text-2xl">
                 {paragraph}
               </p>
             ))
           ) : (
             <p className="text-lg leading-[1.33] -tracking-[0.5px] text-[#2C2C2C] md:text-xl xl:text-2xl">
               {content}
             </p>
           )}

           {features && <IconBulletList items={features} />}

           {ctaText && (
             <Button variant="primary" size="large" href={ctaHref} className="mt-8">
               {ctaText}
             </Button>
           )}
         </div>

         <div className={`jos ${imageOrder}`} data-jos_animation="fade-left">
           <div className="w-full overflow-hidden rounded-[5px] mx-auto lg:mx-0 max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-full">
             <img src={imageSrc} alt={heading} width="526" height="550" className="h-auto w-full" />
           </div>
         </div>
       </div>
     );
   }
   ```

5. **ProcessSection**

   **File:** `src/_includes/components/ProcessSection.tsx`
   ```tsx
   import ProcessStep from './ProcessStep.tsx';

   interface ProcessStepData {
     title: string;
     description: string;
   }

   interface ProcessSectionProps {
     title: string;
     steps: ProcessStepData[];
   }

   export default function ProcessSection({ title, steps }: ProcessSectionProps) {
     return (
       <section className="section-work-process">
         <div className="section-space-bottom">
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

             <div className="relative">
               <div className="hidden h-[3px] w-full overflow-hidden rounded-[50px] bg-[#EAEDF0] lg:block"></div>
               <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-[30px]">
                 {steps.map((step, index) => (
                   <ProcessStep
                     key={index}
                     stepNumber={index + 1}
                     title={step.title}
                     description={step.description}
                     delay={index * 0.3}
                   />
                 ))}
               </div>
             </div>
           </div>
         </div>
       </section>
     );
   }
   ```

6. **TeamSection**

   **File:** `src/_includes/components/TeamSection.tsx`
   ```tsx
   import TeamMemberCard from './TeamMemberCard.tsx';

   interface TeamMember {
     imageSrc: string;
     name: string;
     title: string;
   }

   interface TeamSectionProps {
     title: string;
     members: TeamMember[];
   }

   export default function TeamSection({ title, members }: TeamSectionProps) {
     return (
       <section className="section-team">
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

               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                 {members.map((member, index) => (
                   <TeamMemberCard
                     key={index}
                     imageSrc={member.imageSrc}
                     name={member.name}
                     title={member.title}
                     delay={index * 0.3}
                   />
                 ))}
               </div>
             </div>
           </div>
         </div>
       </section>
     );
   }
   ```

7. **FaqSection**

   **File:** `src/_includes/components/FaqSection.tsx`
   ```tsx
   import AccordionItem from './AccordionItem.tsx';

   interface Faq {
     question: string;
     answer: string;
   }

   interface FaqSectionProps {
     title: string;
     faqs: Faq[];
   }

   export default function FaqSection({ title, faqs }: FaqSectionProps) {
     return (
       <section className="section-faq">
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

             <div className="jos">
               <ul className="-mb-[60px]">
                 {faqs.map((faq, index) => (
                   <AccordionItem
                     key={index}
                     question={faq.question}
                     answer={faq.answer}
                     isActive={index === 0}
                   />
                 ))}
               </ul>
             </div>
           </div>
         </div>
       </section>
     );
   }
   ```

8. **CtaSection**

   **File:** `src/_includes/components/CtaSection.tsx`
   ```tsx
   import Button from './Button.tsx';
   import FormField from './FormField.tsx';
   import BrandLogo from './BrandLogo.tsx';

   interface Brand {
     src: string;
     alt: string;
   }

   interface CtaSectionProps {
     heading: string;
     description: string;
     ctaText: string;
     ctaHref: string;
     brands: Brand[];
   }

   export default function CtaSection({ heading, description, ctaText, ctaHref, brands }: CtaSectionProps) {
     return (
       <section className="section-cta">
         <div className="bg-[#0000FF]">
           <div className="section-space">
             <div className="container-default">
               <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-[1fr_minmax(0,_0.7fr)] xl:gap-20">
                 <div className="text-white">
                   <div className="jos" data-jos_animation="fade-left">
                     <div className="max-w-[789px]">
                       <div className="mb-5">
                         <h2 className="font-Syne text-4xl font-semibold uppercase leading-[1.07] text-white sm:text-5xl lg:text-6xl xl:text-[65px]">
                           {heading}
                         </h2>
                       </div>
                       <p className="mb-0 max-w-[636px] text-lg leading-[1.33] -tracking-[0.5px] md:text-xl xl:text-2xl">
                         {description}
                       </p>

                       <div className="mt-8 lg:mt-[50px]">
                         <Button variant="outlineWhite" size="large" href={ctaHref}>
                           {ctaText}
                         </Button>
                       </div>

                       <p className="mb-8 mt-16 text-sm md:mt-20 lg:mb-[50px] lg:mt-[100px] xl:mt-[120px]">
                         We have collaborated with several esteemed organizations.
                       </p>
                       <div className="flex flex-wrap gap-x-[60px] gap-y-8">
                         {brands.map((brand, index) => (
                           <BrandLogo
                             key={index}
                             src={brand.src}
                             alt={brand.alt}
                             maxWidth="170px"
                           />
                         ))}
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="jos rounded-[5px] bg-white p-10" data-jos_animation="fade-right">
                   <form action="#" method="post" className="flex flex-col gap-y-6">
                     <FormField
                       type="text"
                       label="Your name"
                       id="cta-name"
                       placeholder="Enter your full name"
                       required
                     />
                     <FormField
                       type="email"
                       label="Email address"
                       id="cta-email"
                       placeholder="Enter your email"
                       required
                     />
                     <FormField
                       type="select"
                       label="Email address"
                       id="cta-service"
                       placeholder="Select a service"
                       required
                       options={[
                         { value: 'ui/ux design', label: 'ui/ux design' },
                         { value: 'web development', label: 'web development' },
                         { value: 'cloud hosting', label: 'cloud hosting' }
                       ]}
                     />
                     <FormField
                       type="textarea"
                       label="Write your message"
                       id="cta-message"
                       placeholder="Write us your question here..."
                       required
                     />

                     <button
                       type="submit"
                       className="btn is-large rounded-[3px] border-[#0000FF] bg-[#0000FF] text-white hover:bg-white hover:text-[#0000FF]"
                     >
                       Send Message
                     </button>
                   </form>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
     );
   }
   ```

### Verification:
- Each organism component renders its children correctly
- Data flows through props properly
- Sections match original styling

---

## Phase 7: Create Data Files and Final Assembly (2-3 hours)

**Goal:** Extract content to data files and assemble the final component-based homepage.

### Steps:

1. **Create site data file**

   **File:** `src/_data/site.js`
   ```javascript
   export default {
     title: "Masco",
     description: "Smart Solutions for a Modern Era",
     url: "https://masco.example.com",
   };
   ```

2. **Create homepage data file**

   **File:** `src/_data/homepage.js`
   ```javascript
   export default {
     hero: {
       title: "Smart Solutions for a Modern era",
       imageSrc: "/assets/img/th-15/hero-img.jpg",
       description: "We are dedicated to shaping the future. In the fast-paced world of technology, our company stands as a beacon of innovation and progress.",
       ctaPrimary: { text: "Talk To Us", href: "#" },
       ctaSecondary: { text: "View Our Services", href: "#" }
     },

     stats: {
       title: "impactful numbers",
       items: [
         { number: 15, suffix: "+", description: "We have worked with reputation for the last 15 years" },
         { number: 2, suffix: "M+", description: "Worked with 2M clients in different countries around the world" },
         { number: 99, suffix: "%", description: "About 99% of our clients express their satisfaction with our work" }
       ]
     },

     services: {
       title: "impactful numbers",
       items: [
         {
           title: "Digital Transformation",
           description: "We partner with CTOs and CIOs to co-create and execute long-term digital strategies that increase sales, brand awareness, and operational efficiency.",
           link: "/service-details.html"
         },
         {
           title: "E-Commerce Development",
           description: "We build high converting, fast-loading, headless eCommerce websites for enterprise brands, that accelerate growth.",
           link: "/service-details.html"
         },
         {
           title: "Custom Software Development",
           description: "We work with startups and global enterprises to design and develop custom web & mobile apps that drive their business forward.",
           link: "/service-details.html"
         },
         {
           title: "Website Design & Development",
           description: "We design and develop beautiful websites that deliver best-in-class experiences to your users.",
           link: "/service-details.html"
         }
       ]
     },

     aboutUs: {
       heading: "Know about us",
       imageSrc: "/assets/img/th-15/content-img-1.jpg",
       imagePosition: "left",
       content: [
         "We started our journey in January 2010. We are innovation-driven and dedicated to shaping the future through forward-thinking and cutting-edge technology solutions. Founded by a team of visionary engineers & entrepreneurs.",
         "We believe that technology should not only meet the needs of today but also anticipate the challenges of tomorrow. We are committed to creating products & services that empower individuals and businesses, making their digital experiences smarter, safer, and more efficient."
       ],
       ctaText: "Discover More",
       ctaHref: "#"
     },

     whyChooseUs: {
       heading: "Why choose us",
       imageSrc: "/assets/img/th-15/content-img-2.jpg",
       imagePosition: "right",
       content: "Our core values include the relentless pursuit of excellence, a commitment to ethical and responsible tech development, and a dedication to continuous learning.",
       features: [
         {
           title: "Expertise & Specialization:",
           description: " We're experts in respective fields. They specialize in various aspects of technology."
         },
         {
           title: "Cost Efficiency:",
           description: " We can also scale services up or down based on making it a flexible and cost-efficient option."
         },
         {
           title: "Security & Compliance:",
           description: " Help businesses maintain high levels of security and ensure compliance with industry-specific regulations."
         }
       ]
     },

     process: {
       title: "Our work process",
       steps: [
         {
           title: "Project Discovery",
           description: "We create a detailed project plan with work outlines, milestones, timelines."
         },
         {
           title: "Implementation",
           description: "Developers & engineers is essential in creating the necessary solutions."
         },
         {
           title: "Establishment",
           description: "Includes all functional performance testing, testing, and security testing."
         }
       ]
     },

     team: {
       title: "Meet our team",
       members: [
         { imageSrc: "/assets/img/th-15/team-img-1.jpg", name: "Adam Smith", title: "Founder & CEO" },
         { imageSrc: "/assets/img/th-15/team-img-2.jpg", name: "Jones Marco", title: "Chief Operating Officer" },
         { imageSrc: "/assets/img/th-15/team-img-3.jpg", name: "Marsal Joy", title: "General Manager" },
         { imageSrc: "/assets/img/th-15/team-img-4.jpg", name: "Douglas Luhan", title: "Sales Executive" },
         { imageSrc: "/assets/img/th-15/team-img-5.jpg", name: "Alex Taylor", title: "Web Developer" },
         { imageSrc: "/assets/img/th-15/team-img-6.jpg", name: "Henry Fayol", title: "UI/UX Designer" }
       ]
     },

     faq: {
       title: "We're often asked",
       items: [
         {
           question: "What does your tech company do?",
           answer: "Masco Innovations is not just a tech company; it's a catalyst for progress, a hub of innovation, and a partner in your digital journey & connected future of technology."
         },
         {
           question: "What industries or sectors do you serve?",
           answer: "Masco Innovations is not just a tech company; it's a catalyst for progress, a hub of innovation, and a partner in your digital journey & connected future of technology."
         },
         {
           question: "How much does a custom software solution cost?",
           answer: "Masco Innovations is not just a tech company; it's a catalyst for progress, a hub of innovation, and a partner in your digital journey & connected future of technology."
         },
         {
           question: "Is data protection and privacy secure?",
           answer: "Masco Innovations is not just a tech company; it's a catalyst for progress, a hub of innovation, and a partner in your digital journey & connected future of technology."
         },
         {
           question: "Which software is right for me?",
           answer: "Masco Innovations is not just a tech company; it's a catalyst for progress, a hub of innovation, and a partner in your digital journey & connected future of technology."
         }
       ]
     },

     cta: {
       heading: "Are you ready to get started?",
       description: "Join us on this exciting journey as we continue to redefine what is possible with ever-evolving technology.",
       ctaText: "View Our Services",
       ctaHref: "#",
       brands: [
         { src: "/assets/img/th-15/brand-1.png", alt: "brand-1" },
         { src: "/assets/img/th-15/brand-2.png", alt: "brand-2" },
         { src: "/assets/img/th-15/brand-3.png", alt: "brand-3" },
         { src: "/assets/img/th-15/brand-4.png", alt: "brand-4" },
         { src: "/assets/img/th-15/brand-5.png", alt: "brand-5" }
       ]
     }
   };
   ```

3. **Refactor Footer to use data**

   Update `src/_includes/components/Footer.tsx` to accept props and use FooterLinkList:
   ```tsx
   import Logo from './Logo.tsx';
   import FooterLinkList from './FooterLinkList.tsx';
   import SocialLink from './SocialLink.tsx';

   interface FooterProps {
     year?: number;
   }

   export default function Footer({ year = new Date().getFullYear() }: FooterProps) {
     const footerLinks = {
       primaryPages: [
         { label: "Home", href: "/index.html" },
         { label: "About Us", href: "/about.html" },
         { label: "Services", href: "/services.html" },
         { label: "pricing", href: "/pricing.html" },
         { label: "Contact", href: "/contact.html" }
       ],
       learn: [
         { label: "Masco Blog", href: "/blog.html" },
         { label: "Cold Email", href: "/index-6.html" },
         { label: "Prospecting Podcast", href: "/index-2.html" },
         { label: "Follow-Up Strategy", href: "/index-14.html" },
         { label: "Email Analyzer", href: "/index-4.html" }
       ],
       utility: [
         { label: "Signup", href: "/signup.html" },
         { label: "Login", href: "/login.html" },
         { label: "404 Not found", href: "/error-404.html" },
         { label: "Password Reset", href: "/reset-password.html" }
       ],
       resources: [
         { label: "Support", href: "https://www.example.com/", external: true },
         { label: "Privacy policy", href: "https://www.example.com/", external: true },
         { label: "Terms & Conditions", href: "https://www.example.com/", external: true },
         { label: "Strategic finance", href: "https://www.example.com/", external: true },
         { label: "Video guide", href: "https://www.example.com/", external: true }
       ]
     };

     const socialLinks = [
       { platform: "twitter", url: "https://twitter.com", iconClass: "fa-brands fa-x-twitter" },
       { platform: "facebook", url: "https://www.facebook.com/", iconClass: "fa-brands fa-facebook-f" },
       { platform: "instagram", url: "https://www.instagram.com/", iconClass: "fa-brands fa-instagram" },
       { platform: "github", url: "https://www.github.com/", iconClass: "fa-brands fa-github" },
       { platform: "discord", url: "https://www.discord.com/", iconClass: "fa-brands fa-discord" },
       { platform: "tiktok", url: "https://www.tiktok.com/", iconClass: "fa-brands fa-tiktok" }
     ];

     return (
       <footer className="section-footer">
         <div className="bg-white">
           <div className="py-[60px] lg:py-20">
             <div className="container-default">
               <div className="grid gap-x-16 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-20">
                 <FooterLinkList title="Primary Pages" links={footerLinks.primaryPages} />
                 <FooterLinkList title="Learn" links={footerLinks.learn} />
                 <FooterLinkList title="Utility pages" links={footerLinks.utility} />
                 <FooterLinkList title="Resources" links={footerLinks.resources} />

                 <div className="flex flex-col gap-y-6">
                   <div className="text-xl font-semibold capitalize text-black">Community</div>
                   <div className="flex flex-wrap gap-4">
                     {socialLinks.map((social, idx) => (
                       <SocialLink
                         key={idx}
                         platform={social.platform}
                         url={social.url}
                         iconClass={social.iconClass}
                       />
                     ))}
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <div className="horizontal-line -mt-px bg-black"></div>

         <div className="bg-white text-black">
           <div className="py-10">
             <div className="container-default">
               <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:justify-between">
                 <Logo href="/index.html" variant="dark" />
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

4. **Final index.11ty.tsx assembly**

   **File:** `src/pages/index.11ty.tsx`
   ```tsx
   import Header from '../_includes/components/Header.tsx';
   import Footer from '../_includes/components/Footer.tsx';
   import Hero from '../_includes/components/Hero.tsx';
   import HorizontalLine from '../_includes/components/HorizontalLine.tsx';
   import StatsSection from '../_includes/components/StatsSection.tsx';
   import ServicesSection from '../_includes/components/ServicesSection.tsx';
   import TwoColumnContent from '../_includes/components/TwoColumnContent.tsx';
   import ProcessSection from '../_includes/components/ProcessSection.tsx';
   import TeamSection from '../_includes/components/TeamSection.tsx';
   import FaqSection from '../_includes/components/FaqSection.tsx';
   import CtaSection from '../_includes/components/CtaSection.tsx';

   interface HomePageData {
     homepage: any; // Define full type in homepage.js data file
   }

   export default function Home({ homepage }: HomePageData) {
     return (
       <>
         <Header />

         <main className="main-wrapper relative overflow-hidden">
           <Hero {...homepage.hero} />

           <HorizontalLine bgColor="bg-ColorBlack" />

           <StatsSection title={homepage.stats.title} stats={homepage.stats.items} />

           <ServicesSection title={homepage.services.title} services={homepage.services.items} />

           <section className="section-content">
             <div className="section-space">
               <div className="container-default">
                 <div className="flex flex-col gap-y-20 lg:gap-y-[100px] xl:gap-y-[120px]">
                   <TwoColumnContent {...homepage.aboutUs} />
                   <TwoColumnContent {...homepage.whyChooseUs} />
                 </div>
               </div>
             </div>
           </section>

           <ProcessSection title={homepage.process.title} steps={homepage.process.steps} />

           <TeamSection title={homepage.team.title} members={homepage.team.members} />

           <FaqSection title={homepage.faq.title} faqs={homepage.faq.items} />

           <CtaSection {...homepage.cta} />
         </main>

         <Footer />
       </>
     );
   }

   export const data = {
     layout: "layouts/base.njk",
     title: "Masco - Saas Software Startup Tailwind Template",
     description: "AIMass Tailwind based SASS Template",
     permalink: "/index.html",
   };
   ```

### Verification:
- Complete page renders from components
- All data flows from data files
- Styling matches original
- Interactive elements work (menu, accordion, counters)
- Responsive design functions properly

---

## Phase 8: Final Testing and Polish (1-2 hours)

**Goal:** Comprehensive testing and cleanup.

### Steps:

1. **Cross-browser testing**
   - Test in Chrome, Firefox, Safari
   - Verify responsive breakpoints (sm, md, lg, xl, xxl)
   - Check mobile menu functionality

2. **Interactive features verification**
   - Dropdown navigation menus
   - Mobile hamburger menu
   - FAQ accordion expand/collapse
   - Animated counters on scroll
   - Scroll animations (JOS library)
   - Hover effects on buttons, service cards, process steps
   - Form validation

3. **Performance check**
   - Run production build: `npm run build:all`
   - Verify CSS is minified in `_site/assets/css/style.css`
   - Check that all assets are copied correctly
   - Confirm no broken links or missing images

4. **Code cleanup**
   - Remove any unused imports
   - Ensure consistent code formatting
   - Verify all components export correctly
   - Check for console errors

5. **Documentation**
   - Update README with new build commands
   - Document component structure
   - Note any deviations from original

### Final Verification Checklist:
- [ ] `npm run dev:11ty-all` starts dev server successfully
- [ ] Page at http://localhost:8080/index.html matches original
- [ ] All images load correctly
- [ ] All fonts render properly
- [ ] Tailwind classes apply correctly
- [ ] Vendor JS libraries function (Swiper, JOS, menu, counters)
- [ ] Header navigation works (desktop and mobile)
- [ ] Footer links are functional
- [ ] Forms display and validate
- [ ] Accordion expands/collapses
- [ ] Animations trigger on scroll
- [ ] Hover effects work on interactive elements
- [ ] Production build generates optimized output
- [ ] No console errors
- [ ] Responsive design works across breakpoints

---

## Success Criteria

At the end of this migration:

✅ **Functional Parity**
- Site looks and behaves identically to original
- All interactive features work
- No regressions in functionality

✅ **Component Architecture**
- Clean component hierarchy (atomic → molecular → organism)
- Reusable components with clear props
- Data separated into data files
- Maintainable codebase

✅ **Build System**
- Eleventy 3.0+ with native TypeScript support
- Tailwind CSS compilation working
- Development and production builds functional
- Asset pipeline intact

✅ **Developer Experience**
- Simple dev workflow: `npm run dev:11ty-all`
- Fast rebuild times with Eleventy's incremental builds
- Live reload working
- Original site still accessible via `npm start` during migration

---

## Rollback Strategy

If issues arise at any phase:

1. **Phase 1-2**: Original site still works via `npm start`
2. **Phase 3+**: Each component can be reverted by switching back to inline HTML
3. **Nuclear option**: Entire migration reversible by:
   - Removing `.eleventy.js`
   - Deleting `src/` directory
   - Using original `index.html` in root

---

## Post-Migration Tasks

Once migration is complete and verified:

1. **Archive original file**
   ```bash
   mv index.html .archive/index.html.original
   ```

2. **Update deployment**
   - Point deployment to `_site/` directory
   - Update build command to `npm run build:all`

3. **Future migrations**
   - Use this same pattern for other pages (about.html, services.html, etc.)
   - Reuse existing components where possible
   - Maintain consistent data file structure

---

## Component Inventory Summary

**Total Components Created:** 30

**Breakdown:**
- **Atomic (8):** Button, Icon, Logo, SocialLink, HorizontalLine, Input, Textarea, Select
- **Molecular (12):** StatCard, ServiceCard, TeamMemberCard, ProcessStep, AccordionItem, IconBulletList, FooterLinkList, BrandLogo, NavLink, DropdownMenu, FormField, ContentImageBlock
- **Organism (10):** Header, Footer, Hero, StatsSection, ServicesSection, TwoColumnContent, ProcessSection, TeamSection, FaqSection, CtaSection

**Critical Files:**
- `.eleventy.js` - Eleventy configuration
- `src/pages/index.11ty.tsx` - Main page template
- `src/_includes/layouts/base.njk` - Base HTML wrapper
- `src/_data/homepage.js` - Page content data
- `tailwind.config.js` - Updated with TypeScript paths

---

## Estimated Timeline

| Phase | Task | Time Estimate |
|-------|------|---------------|
| 1 | Foundation Setup | 1-2 hours |
| 2 | Base Layout & Static Homepage | 2-3 hours |
| 3 | Header & Footer Components | 1-2 hours |
| 4 | Atomic Components | 2-3 hours |
| 5 | Molecular Components | 3-4 hours |
| 6 | Organism Components | 3-4 hours |
| 7 | Data Files & Assembly | 2-3 hours |
| 8 | Testing & Polish | 1-2 hours |
| **TOTAL** | **Complete Migration** | **15-23 hours** |

---

## Notes & Simplifications

Per instructions, this plan:
- ✅ Focuses on single page (index.html only)
- ✅ Keeps every step simple
- ✅ Ensures site runs locally after each phase
- ✅ Does not overcomplicate the approach
- ✅ Ignores edge cases for initial migration
- ✅ Maintains simplicity throughout

**Intentional Simplifications:**
- Full TypeScript with type interfaces for all components
- No advanced state management
- No client-side hydration (pure SSG)
- No image optimization plugins (using existing images as-is)
- No complex routing (single page focus)
- Vendor JS kept as-is (not bundled/optimized)
- Form submission not implemented (HTML only)

These can be enhanced post-migration if needed.

---

**End of Migration Plan**
