You are implementing website copy into the Eleventy + TypeScript project.

## Your Task

1. Read the website copy document (user will provide path or paste content)
2. Transform the copy into a structured data file at `src/_data/yourBusinessName.js`
3. Create the page template at `src/pages/your-business-name.11ty.tsx`
4. Update necessary configuration files
5. Provide instructions for asset placement and final steps

## Step 1: Read the Copy Document

Ask the user: "Please provide the path to your website copy document, or paste the content directly."

Once received, parse all sections and prepare for transformation.

## Step 2: Create Data File

Generate `src/_data/[businessName].js` with this structure:

```javascript
export default {
  hero: {
    title: "[Main headline from copy]",
    imageSrc: "/assets/img/hero-image.jpg", // User will replace
    description: "[Description paragraph]",
    ctaPrimary: { text: "[Primary CTA]", href: "#contact" },
    ctaSecondary: { text: "[Secondary CTA]", href: "#services" }
  },

  about: {
    heading: "[About section headline]",
    imageSrc: "/assets/img/about-photo.jpg", // User will replace
    imagePosition: "left",
    content: [
      "[Introduction paragraph]",
      "[Second paragraph]",
      "[Third paragraph if present]"
    ],
    ctaText: "[CTA button text]",
    ctaHref: "#services"
  },

  clientLogos: {
    title: "[Client logos section headline]",
    brands: [
      { src: "/assets/img/logos/client1.png", alt: "Client 1" },
      { src: "/assets/img/logos/client2.png", alt: "Client 2" },
      { src: "/assets/img/logos/client3.png", alt: "Client 3" },
      { src: "/assets/img/logos/client4.png", alt: "Client 4" },
      { src: "/assets/img/logos/client5.png", alt: "Client 5" },
      { src: "/assets/img/logos/client6.png", alt: "Client 6" },
      // Optional 7th logo
    ],
    columns: 6,
    darkMode: true
  },

  whyChooseUs: {
    heading: "[Why Choose Us headline]",
    imageSrc: "/assets/img/differentiator-image.jpg", // Optional
    imagePosition: "right",
    content: "[Introduction paragraph if present]",
    features: [
      {
        title: "[Differentiator 1 title]:",
        description: " [Differentiator 1 explanation - combine all paragraphs]"
      },
      {
        title: "[Differentiator 2 title]:",
        description: " [Differentiator 2 explanation]"
      },
      {
        title: "[Differentiator 3 title]:",
        description: " [Differentiator 3 explanation]"
      }
    ]
  },

  howAIHelps: {
    heading: "[How AI Helps headline]",
    imageSrc: "/assets/img/ai-benefits-image.jpg", // Optional
    imagePosition: "left",
    content: "[Introduction if present]",
    features: [
      {
        title: "[Benefit 1 title]:",
        description: " [Benefit 1 explanation - combine all paragraphs]"
      },
      {
        title: "[Benefit 2 title]:",
        description: " [Benefit 2 explanation]"
      },
      {
        title: "[Benefit 3 title]:",
        description: " [Benefit 3 explanation]"
      }
    ]
  },

  services: {
    title: "[Services section headline]",
    subtitle: "[Services subtitle if present]",
    columns: 3, // Adjust based on number of services
    solutions: [
      {
        title: "[Service 1 name]",
        description: "[Service 1 description - combine all text]",
        buttonText: "Book a Call",
        buttonHref: "#contact",
        icon: "check"
      },
      {
        title: "[Service 2 name]",
        description: "[Service 2 description]",
        buttonText: "Book a Call",
        buttonHref: "#contact",
        icon: "check"
      },
      {
        title: "[Service 3 name]",
        description: "[Service 3 description]",
        buttonText: "Book a Call",
        buttonHref: "#contact",
        icon: "check"
      }
    ]
  },

  ctaBanner1: {
    heading: "[CTA Banner 1 headline]",
    buttonText: "[CTA 1 button text]",
    buttonHref: "#contact", // Or calendar link if provided
    backgroundType: "gradient", // or "image" if background image suggested
    backgroundColor: "#3e32da"
  },

  solutions: {
    title: "[AI For Companies headline]",
    subtitle: "[Subtitle about implementation capabilities]",
    columns: 2,
    solutions: [
      {
        title: "[Solution 1 name]",
        description: "[Solution 1 description]",
        buttonText: "Book a Call",
        buttonHref: "#contact",
        icon: "check"
      },
      {
        title: "[Solution 2 name]",
        description: "[Solution 2 description]",
        buttonText: "Book a Call",
        buttonHref: "#contact",
        icon: "check"
      },
      {
        title: "[Solution 3 name]",
        description: "[Solution 3 description]",
        buttonText: "Book a Call",
        buttonHref: "#contact",
        icon: "check"
      },
      {
        title: "Looking for Something Else?",
        description: "[Custom solution description]",
        buttonText: "Contact Us",
        buttonHref: "#contact",
        icon: "question"
      }
    ]
  },

  ctaBanner2: {
    heading: "[CTA Banner 2 headline]",
    buttonText: "[CTA 2 button text]",
    buttonHref: "#contact",
    backgroundType: "gradient",
    backgroundColor: "#3e32da"
  },

  faq: {
    title: "[FAQ section headline]",
    items: [
      {
        question: "[FAQ 1 question]",
        answer: "[FAQ 1 answer - combine all paragraphs]"
      },
      {
        question: "[FAQ 2 question]",
        answer: "[FAQ 2 answer]"
      },
      {
        question: "[FAQ 3 question]",
        answer: "[FAQ 3 answer]"
      },
      {
        question: "[FAQ 4 question]",
        answer: "[FAQ 4 answer]"
      },
      {
        question: "[FAQ 5 question]",
        answer: "[FAQ 5 answer]"
      }
    ]
  },

  contact: {
    heading: "[Contact section headline]",
    description: "[Contact subheadline/value statement]",
    ctaText: "[Not used - form has 'Send Message' button]",
    ctaHref: "#contact",
    brands: [] // Empty array - not using brands in contact section
  }
};
```

**Important Notes:**
- Use actual business name for file name (lowercase, hyphens for spaces)
- Image paths are placeholders - user will replace with actual files
- Combine multi-paragraph sections into single strings for features/descriptions
- Preserve all copy exactly as written
- Use 6 logos by default (user has 6-7)

## Step 3: Create Page Template

Generate `src/pages/[business-name].11ty.tsx`:

```typescript
import Header from '../_includes/components/Header.tsx';
import Footer from '../_includes/components/Footer.tsx';
import Hero from '../_includes/components/Hero.tsx';
import HorizontalLine from '../_includes/components/HorizontalLine.tsx';
import ClientLogosSection from '../_includes/components/ClientLogosSection.tsx';
import TwoColumnContent from '../_includes/components/TwoColumnContent.tsx';
import SolutionCardsSection from '../_includes/components/SolutionCardsSection.tsx';
import SimpleCTA from '../_includes/components/SimpleCTA.tsx';
import FaqSection from '../_includes/components/FaqSection.tsx';
import CtaSection from '../_includes/components/CtaSection.tsx';

interface BusinessPageData {
  [businessName]: any; // Use actual business name
}

export default function BusinessPage({ [businessName] }: BusinessPageData) {
  return (
    <>
      <Header />

      <main className="main-wrapper relative overflow-hidden">
        {/* Hero */}
        <Hero {...[businessName].hero} />

        <HorizontalLine />

        {/* About */}
        <section className="section-content">
          <div className="section-space">
            <div className="container-default">
              <TwoColumnContent {...[businessName].about} />
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <ClientLogosSection {...[businessName].clientLogos} />

        {/* Why Choose Us */}
        <section className="section-content">
          <div className="section-space">
            <div className="container-default">
              <TwoColumnContent {...[businessName].whyChooseUs} />
            </div>
          </div>
        </section>

        {/* How AI Helps */}
        <section className="section-content">
          <div className="section-space">
            <div className="container-default">
              <TwoColumnContent {...[businessName].howAIHelps} />
            </div>
          </div>
        </section>

        {/* Services */}
        <SolutionCardsSection {...[businessName].services} />

        {/* CTA Banner 1 */}
        <SimpleCTA {...[businessName].ctaBanner1} />

        {/* Implementation Solutions */}
        <SolutionCardsSection {...[businessName].solutions} />

        {/* CTA Banner 2 */}
        <SimpleCTA {...[businessName].ctaBanner2} />

        {/* FAQ */}
        <FaqSection {...[businessName].faq} />

        {/* Contact Form */}
        <CtaSection {...[businessName].contact} />
      </main>

      <Footer />
    </>
  );
}

export const data = {
  layout: "layouts/base.njk",
  title: "[Business Name] - [Tagline from copy]",
  description: "[Meta description - use first sentence of hero description]",
  permalink: "/index.html", // Change to /business-name.html if not replacing homepage
};
```

## Step 4: Update Configuration (If Needed)

Check if colors need updating in `tailwind.config.js`:

If the copy suggests different brand colors, show user where to update:
```javascript
// tailwind.config.js - Update these if not using purple/navy
colors: {
  primary: '#3e32da', // Purple - update if different brand color
  secondary: '#0d1036', // Navy - update if different
  // ... rest of config
}
```

## Step 5: Provide Asset Placement Instructions

After creating files, provide clear instructions:

```markdown
## Next Steps: Asset Placement

### 1. Place Images in Assets Directory

**Hero & Section Images:**
- Place your hero image at: `assets/img/hero-image.jpg`
- Place your about photo at: `assets/img/about-photo.jpg`
- Optionally add: `assets/img/differentiator-image.jpg`
- Optionally add: `assets/img/ai-benefits-image.jpg`

**Client Logos:**
Create directory: `assets/img/logos/`
Place 6-7 client logos as PNG files with transparent backgrounds:
- `assets/img/logos/client1.png`
- `assets/img/logos/client2.png`
- `assets/img/logos/client3.png`
- `assets/img/logos/client4.png`
- `assets/img/logos/client5.png`
- `assets/img/logos/client6.png`
- `assets/img/logos/client7.png` (optional)

**Logo & Favicon:**
- Place company logo at: `assets/img/logo-dark.png`
- Place company logo (light version if needed): `assets/img/logo-light.png`
- Place favicon at: `assets/img/favicon.png`

### 2. Update Image Alt Text (Recommended for SEO)

Edit `src/_data/[businessName].js` and update alt text for each logo:
```javascript
brands: [
  { src: "/assets/img/logos/client1.png", alt: "Company Name 1" },
  { src: "/assets/img/logos/client2.png", alt: "Company Name 2" },
  // ... update all alt attributes with actual company names
]
```

### 3. Test Locally

Run the development server:
```bash
npm run dev:11ty-all
```

Visit: http://localhost:8081/[page-name].html

**Check:**
- All images load correctly
- All text displays properly
- All links work
- Contact form displays
- Responsive design on mobile (resize browser)
- No console errors

### 4. Update Header Navigation (Optional)

If you want to customize the header navigation links:

Edit `src/_includes/components/Header.tsx` and update navigation items to match your sections.

### 5. Update Footer Links (Optional)

If you want to customize footer link sections:

Edit `src/_includes/components/Footer.tsx` and update the footerLinks object with your specific pages and links.

### 6. Customize Colors (If Needed)

If you're not using purple/navy as brand colors:

Edit `tailwind.config.js` and update color values in the theme.extend.colors section.

Then restart dev server for Tailwind to rebuild CSS.

### 7. Add Calendar Link (If You Have One)

Update CTA button hrefs to point to your calendar:
```javascript
ctaBanner1: {
  // ...
  buttonHref: "https://calendly.com/your-username", // Replace with your actual calendar link
}
```

### 8. Production Build

When ready to deploy:
```bash
npm run build:all
```

Output will be in `_site/` directory, ready for hosting.
```

## Step 6: Verify Implementation

After creating files, verify:
- [ ] Data file created at correct path
- [ ] Page template created at correct path
- [ ] All sections from copy included
- [ ] Image paths are placeholders for user to replace
- [ ] Calendar links noted for user to update
- [ ] Clear next steps provided

Inform user:
"Implementation complete! I've created two files:
1. Data file with all your copy: `src/_data/[name].js`
2. Page template: `src/pages/[name].11ty.tsx`

See instructions above for placing your images and testing locally."

## Additional Help

Offer to:
- Adjust any section structure
- Add missing sections from copy
- Explain how to modify components
- Help troubleshoot if user encounters issues
- Create educational content section if copy included webinars/newsletter
- Add testimonials section when user has collected them

---

*This command transforms website copy into working code, ready for asset placement and deployment.*
