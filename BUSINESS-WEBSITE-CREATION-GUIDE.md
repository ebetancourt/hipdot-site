# Business Website Creation Guide
*Based on Vetrici.com Structure*

**Created:** December 3, 2025
**Updated:** December 3, 2025
**Purpose:** Build a professional AI consulting business website similar to Vetrici.com
**Framework:** Eleventy + TypeScript + React Components + Tailwind CSS

---

## Table of Contents

1. [Prerequisites Checklist](#1-prerequisites-checklist)
2. [Component Mapping](#2-component-mapping)
3. [AI Copywriting Interview](#3-ai-copywriting-interview)
4. [Implementation Guide](#4-implementation-guide)

---

## 1. Prerequisites Checklist

Before beginning the AI copywriting interview, gather these assets and information:

### Brand Assets (Required)

**Visual Identity**
- [ ] Company logo (SVG or high-resolution PNG)
- [ ] Brand color palette (primary, secondary, accent colors)
  - If undefined, choose from options during interview
- [ ] Favicon (or we'll create from logo)

**Professional Photography**
- [ ] Professional headshot or portrait
- [ ] Action photo (speaking, consulting, working) - optional but recommended
- [ ] Hero section image (or we'll suggest stock photo direction)

**Social Proof Materials**
- [ ] Client logos (12-17 PNG files, transparent background)
  - Must have permission to display
  - Alternative: List of client companies/industries
- [ ] Client testimonials with written permission
  - Name, title, company, quote, photo (gather separately later)

### Business Information (Required)

**Basic Details**
- [ ] Legal business name
- [ ] Location (city, country)
- [ ] Contact email address
- [ ] Phone number (optional)
- [ ] LinkedIn profile URL
- [ ] Other social media URLs (if applicable)

**Legal/Compliance**
- [ ] Privacy policy (provide URL or we'll note need to create)
- [ ] Terms of service (provide URL or we'll note need to create)
- [ ] Cookie policy (if applicable)

**External Links**
- [ ] Calendar booking link (Calendly, Cal.com, etc.) - if you have one
- [ ] Newsletter signup URL - if separate page
- [ ] Any existing content to link to (blog, resources, etc.)

### Optional Assets

**Educational Content**
- [ ] Webinar recordings or upcoming webinars
- [ ] Ebooks, guides, or downloadable resources
- [ ] Newsletter details (if you have one)

**Footer Content**
- [ ] Links to other pages you want in footer
- [ ] Developer/designer credit (if applicable)
- [ ] Certifications, awards, or accreditations to display

---

**Note:** The AI copywriting interview will generate all written content. You only need to provide the assets and information above.

---

## 2. Component Mapping

### Section-by-Section Component Usage

| Section | Available Component(s) | Notes |
|---------|------------------------|-------|
| **Navigation** | `Header` | Includes logo, nav links, mobile menu |
| **Hero Section** | `Hero` | Headline, image, description, CTA buttons |
| **Visual Separator** | `HorizontalLine` | Between major sections |
| **About Introduction** | `TwoColumnContent` | Image + text layout, supports bullets |
| **Client Logos** | `ClientLogosSection` | Grid of logos, dark/light mode, configurable columns |
| **Why Choose You** | Custom accordion component needed* | Or use `TwoColumnContent` with `IconBulletList` |
| **How You Help** | Custom accordion component needed* | Or use `TwoColumnContent` with `IconBulletList` |
| **Services** | `SolutionCardsSection` | Card grid with icons, descriptions, CTAs |
| **Testimonials** | `TeamSection` (adapted)* or custom | Need testimonial-specific component |
| **Mid-Page CTAs** | `SimpleCTA` | Background variants, headline, button |
| **Implementation Solutions** | `SolutionCardsSection` | Same as services section |
| **Educational Content** | Custom webinar/content component needed* | Card grid for resources |
| **FAQ Section** | `FaqSection` | Accordion-style Q&A |
| **Contact Form** | `CtaSection` | Two-column with form |
| **Footer** | `Footer` | Multi-column links, social icons |

**Components We Have Ready:**
- ✅ Header
- ✅ Hero
- ✅ HorizontalLine
- ✅ TwoColumnContent
- ✅ ClientLogosSection
- ✅ SolutionCardsSection (for services)
- ✅ SimpleCTA (for CTA banners)
- ✅ FaqSection
- ✅ CtaSection (with form)
- ✅ Footer
- ✅ IconBulletList (for feature lists)
- ✅ Button, Icon, Logo, SocialLink (atomic components)

**Components to Create:**
- ⚠️ TestimonialsSection (custom component with star ratings, photos, quotes)
- ⚠️ AccordionContentSection (for "Why Choose Me" and "How We Help")
- ⚠️ ContentCardsSection (for webinars/resources)

**Note:** We can adapt existing components in the short term:
- Use `TwoColumnContent` + `IconBulletList` instead of accordions
- Use `TeamMemberCard` adapted for testimonials temporarily
- Use `SolutionCardsSection` for educational content cards

---

### Page Structure Template

```tsx
// src/pages/business-name.11ty.tsx

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

export default function BusinessPage({ businessData }: any) {
  return (
    <>
      <Header />

      <main className="main-wrapper relative overflow-hidden">
        {/* Hero */}
        <Hero {...businessData.hero} />

        <HorizontalLine />

        {/* About/Introduction */}
        <section className="section-content">
          <div className="section-space">
            <div className="container-default">
              <TwoColumnContent {...businessData.about} />
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <ClientLogosSection {...businessData.clientLogos} />

        {/* Why Choose You */}
        <section className="section-content">
          <div className="section-space">
            <div className="container-default">
              <TwoColumnContent {...businessData.whyChooseYou} />
            </div>
          </div>
        </section>

        {/* Services */}
        <SolutionCardsSection {...businessData.services} />

        {/* Testimonials - TODO: Create TestimonialsSection component */}

        {/* Mid-Page CTA #1 */}
        <SimpleCTA {...businessData.ctaBanner1} />

        {/* Implementation Solutions */}
        <SolutionCardsSection {...businessData.solutions} />

        {/* Educational Content - TODO: Create ContentCardsSection */}

        {/* Mid-Page CTA #2 */}
        <SimpleCTA {...businessData.ctaBanner2} />

        {/* FAQ */}
        <FaqSection {...businessData.faq} />

        {/* Contact Form */}
        <CtaSection {...businessData.contact} />
      </main>

      <Footer />
    </>
  );
}

export const data = {
  layout: "layouts/base.njk",
  title: "Your Business Name - Tagline",
  description: "Your meta description",
  permalink: "/index.html",
};
```

---

## 3. AI Copywriting Interview

### Prompt for AI Copywriter

Copy and paste this prompt to an AI assistant (Claude, ChatGPT, etc.):

```
You are an expert copywriter specializing in B2B consulting and professional services websites. I'm building an AI consulting website similar in structure to https://vetrici.com/ (you should be familiar with this site).

Your role is to:
1. Conduct a brief interview (15-20 questions) to understand my business
2. Based on my answers and the Vetrici template, WRITE all the website copy
3. Deliver a complete content package ready for implementation

IMPORTANT: You are the copywriter, not a form-filler. I will answer your questions, and you will transform those answers into professional, compelling website copy.

CONTEXT ABOUT VETRICI:
- AI consulting business (training, implementation, strategy)
- Targets business leaders and C-suite executives
- Swiss-based Ph.D. consultant
- Works with Fortune 500 companies
- Three-tier service model
- Education-first approach
- Purple/navy brand, professional tone

MY BUSINESS:
- Also AI consulting, targeting similar market
- I will explain how I differ from Vetrici during interview
- You will write copy that differentiates while following proven structure

INTERVIEW STRUCTURE:
Phase 1: Business Differentiation (5-7 questions)
Phase 2: Brand Voice & Tone (3-4 questions)
Phase 3: Services & Approach (4-5 questions)
Phase 4: Educational Content & FAQ (2-3 questions)

After interview, you will deliver:
- Complete website copy for all sections
- Structured in markdown format matching our component architecture
- Written in the tone/voice we establish
- Ready to copy-paste into data files

Rules:
- Ask ONE question at a time
- Keep questions concise and clear
- Don't ask about assets (logos, photos) - I'll provide those separately
- Don't ask about testimonials - I'll add those later
- Focus on understanding business positioning and approach
- Use my answers to craft compelling copy that converts

Ready? Let's begin.
```

---

### Conversation Flow Guide

The AI copywriter should conduct a brief, focused interview (15-20 questions) to gather just enough information to write compelling copy that differentiates your business from Vetrici while following the proven structure.

#### Phase 1: Business Differentiation (5-7 questions, ~10 minutes)

**Core Business Understanding**
1. "What's your business name and location?"
2. "You're in AI consulting like Vetrici. What makes your approach different? How do you differentiate?"
3. "Vetrici emphasizes Ph.D. credentials and Fortune 500 clients. What are YOUR key credibility markers? (Background, experience, credentials, notable clients/projects)"
4. "What's your unique value proposition compared to other AI consultants? Why should someone choose you over Vetrici or others?"
5. "Vetrici offers Training → Implementation → Strategy. Do you follow a similar model, or is your service structure different?"

**Optional follow-ups based on answers:**
- "Can you elaborate on [specific differentiator mentioned]?"
- "What specific results or outcomes have you achieved that demonstrate this?"

---

#### Phase 2: Brand Voice & Tone (3-4 questions, ~5 minutes)

**Communication Style**
6. "How would you describe your brand personality in 3-4 adjectives? (e.g., professional, approachable, innovative, authoritative, conversational, technical)"
7. "Vetrici's tone is professional and credential-forward. Should your copy be similar, or more [casual/bold/technical/warm]?"
8. "Any words or phrases you want to emphasize or avoid? Industry jargon level preference?"
9. "Do you want to use first-person ('I help...') like Vetrici, or company voice ('We help...')?"

---

#### Phase 3: Services & Approach (4-5 questions, ~8 minutes)

**Service Details**
10. "Describe your main service offerings. How many distinct packages/tiers do you have?"
11. "For each service: What's it called, who is it for, and what's the main outcome they get?"
12. "Beyond consulting, do you offer implementation services? (Like: specific tool setup, custom development, process transformation)"
13. "What free resources or educational content do you offer? (Webinars, newsletter, guides, etc.)"

**Optional:**
14. "What's your typical client engagement process? (How you work with clients)"

---

#### Phase 4: Positioning & FAQ (2-3 questions, ~5 minutes)

**Key Messaging**
15. "What are the 3 most common questions prospects ask before hiring you?"
16. "What objections or concerns do prospects typically have? How do you address them?"
17. "If someone visits your website for 30 seconds, what's the ONE key message you want them to remember?"

---

### Expected AI Behavior

**After the Interview:**

The AI copywriter should deliver a complete markdown document with:

1. **Hero Section**
   - Headline (with suggested purple highlight phrases)
   - Subheadline
   - Description paragraph

2. **About Section**
   - Introduction paragraph
   - Credentials and experience
   - Approach/methodology description

3. **Why Choose You Section**
   - 3-4 differentiator titles and detailed explanations
   - Proof points and examples integrated

4. **How AI Helps Section**
   - 3-4 benefit titles and explanations
   - Use cases and outcomes

5. **Services Section**
   - Service titles and descriptions
   - Target audience for each
   - CTA button text

6. **Implementation Solutions**
   - 4 specific solution offerings with descriptions
   - Including "Looking for something else?" option

7. **CTA Banners**
   - Two different headline options
   - Button text suggestions

8. **FAQ Section**
   - 5-7 questions with detailed answers
   - Based on stated objections/concerns

9. **Contact Form Section**
   - Headline and subheadline
   - Value statement

10. **Footer Content**
    - Suggested section headings
    - Navigation structure

**Copy Quality Standards:**

- Written in the established brand voice/tone
- Differentiated from Vetrici while maintaining professional credibility
- Benefit-focused language (outcomes, not features)
- Specific examples and proof points integrated naturally
- Conversion-optimized (clear CTAs, value propositions)
- SEO-friendly (natural keyword integration)
- Ready to copy-paste into data files with minimal editing

---

### Example Conversation

**AI Copywriter:** "I'm ready to write your website copy! I'll ask you 15-20 focused questions about how you differ from Vetrici and your brand voice, then deliver complete copy for all sections.

Let's begin: **What's your business name and location?**"

**User:** "DataMind Consulting, based in London"

**AI:** "Perfect! DataMind Consulting in London. ✓

Now the key question: **You're in AI consulting like Vetrici. What makes your approach different? How do you differentiate from consultants like him?**

For example, do you:
- Focus on a specific industry or use case?
- Have a unique methodology or framework?
- Offer different delivery models?
- Have different expertise or background?"

**User:** "I focus specifically on financial services. I spent 15 years in banking before AI consulting, so I understand the compliance and regulatory challenges. My approach is more hands-on implementation rather than just strategy."

**AI:** "Excellent! So you're positioned as a financial services AI specialist with deep industry knowledge, not just technical expertise. And you emphasize hands-on implementation. 💡

**What are your key credibility markers?**

Vetrici highlights Ph.D. + Fortune 500 clients. For you, I'm thinking:
- 15 years banking experience
- Specific financial institutions you've worked with?
- Certifications, credentials, or specialized training?
- Measurable outcomes from implementations?"

*[Conversation continues for 12-15 more questions, then AI delivers complete copy]*

---

### Final Deliverable Format

The AI will provide content structured like this:

```markdown
# Website Copy for DataMind Consulting
*Tone: Professional yet approachable, industry-expert, implementation-focused*

---

## HERO SECTION

**Headline:**
AI Implementation for **Financial Services** That Drives **Measurable ROI**

*Suggested purple highlights: "Financial Services", "Measurable ROI"*

**Subheadline:**
Transform your financial operations with AI solutions built by consultants who understand banking compliance, regulatory requirements, and real-world implementation challenges.

**Description Paragraph:**
We combine 15+ years of banking experience with cutting-edge AI expertise to deliver implementations that work in highly regulated environments. From automated compliance checking to intelligent customer service, we help financial institutions harness AI safely and effectively.

---

## ABOUT SECTION

**Headline:** Industry Expertise Meets AI Innovation

**Content Paragraphs:**

Hi, I'm [YOUR NAME], founder of DataMind Consulting, a London-based AI consultancy specializing in financial services.

My passion is helping banks and financial institutions implement AI in ways that respect regulatory requirements while delivering real business value. Unlike generalist AI consultants, I've spent 15 years working inside major financial institutions, so I understand the unique challenges you face.

With deep expertise in both financial services operations and artificial intelligence, I guide you in making AI work within your compliance framework, risk appetite, and business objectives. We don't just consult—we implement, test, and ensure solutions work in production environments.

---

## WHY CHOOSE US

**1. Financial Services Specialization**
[Detailed paragraph about industry-specific expertise...]

**2. Hands-On Implementation**
[Detailed paragraph about practical approach...]

**3. Compliance-First Methodology**
[Detailed paragraph about regulatory awareness...]

---

[... rest of sections ...]
```

---

## 4. Implementation Guide

Once the AI copywriter delivers your content:

### Step 1: Review & Refine Copy
- [ ] Read through all AI-generated copy
- [ ] Verify accuracy of facts and credentials
- [ ] Adjust tone if needed
- [ ] Add specific client names/numbers if appropriate
- [ ] Ensure differentiation from competitors is clear

### Step 2: Asset Integration
- [ ] Place logo files in `/assets/img/`
- [ ] Resize and optimize all photos (TinyPNG, ImageOptim)
- [ ] Organize client logos in `/assets/img/logos/`
- [ ] Name files consistently (lowercase, no spaces)
- [ ] Create/verify favicon from logo

### Step 3: Data File Creation
- [ ] Create `src/_data/yourBusiness.js` with all copy
- [ ] Transform AI copy into data structure (see example below)
- [ ] Match component interfaces from Section 2
- [ ] Include asset paths for all images

### Step 4: Page Creation
- [ ] Create `src/pages/index.11ty.tsx` (or custom name)
- [ ] Import all necessary components
- [ ] Map data to component props
- [ ] Set page metadata (title, description, permalink)

### Step 5: Styling Customization
- [ ] Update brand colors in Tailwind config if not using purple/navy
- [ ] Adjust Header navigation links
- [ ] Customize Footer link sections
- [ ] Test color contrast for accessibility

### Step 6: Local Testing
- [ ] Test on localhost
- [ ] Check responsive design on mobile
- [ ] Verify all links work
- [ ] Test contact form submission
- [ ] Proofread all content
- [ ] Check image loading and alt text
- [ ] Test cross-browser compatibility

### Step 7: Deployment
- [ ] Build production version (`npm run build:all`)
- [ ] Set up hosting (Netlify, Vercel, etc.)
- [ ] Configure domain name
- [ ] Set up SSL certificate
- [ ] Configure form submissions (Netlify Forms, Formspree, etc.)
- [ ] Set up analytics (Google Analytics, Plausible, etc.)

---

### Example Data File Structure

Transform the AI-generated copy into this structure:

```javascript
// src/_data/business.js
export default {
  hero: {
    title: "Your Value Proposition Here",
    imageSrc: "/assets/img/hero-image.jpg",
    description: "Supporting description...",
    ctaPrimary: { text: "Book a Call", href: "#contact" },
    ctaSecondary: { text: "Learn More", href: "#services" }
  },

  about: {
    heading: "Know About Us",
    imageSrc: "/assets/img/about-photo.jpg",
    imagePosition: "left",
    content: [
      "First paragraph...",
      "Second paragraph..."
    ],
    ctaText: "Learn More",
    ctaHref: "#services"
  },

  clientLogos: {
    title: "Companies We've Worked With",
    brands: [
      { src: "/assets/img/logos/client1.png", alt: "Client 1" },
      // ... more logos
    ],
    columns: 6,
    darkMode: true
  },

  services: {
    title: "Services We Provide",
    subtitle: "Choose the option that fits your needs",
    columns: 3,
    solutions: [
      {
        title: "Service Name",
        description: "Service description...",
        buttonText: "Book a Call",
        buttonHref: "#contact",
        icon: "check"
      },
      // ... more services
    ]
  },

  // ... more sections
};
```

---

## Tips for Success

### Content Writing Tips

1. **Be Specific:** "Increased sales by 40%" > "Improved results"
2. **Focus on Benefits:** "Save 10 hours per week" > "Efficient system"
3. **Use Active Voice:** "I help you achieve" > "Results can be achieved"
4. **Address Objections:** Use FAQ section strategically
5. **Include Proof:** Numbers, percentages, specific outcomes

### Visual Content Tips

1. **Professional Photos:** Invest in quality headshots and action photos
2. **Consistent Style:** All images should have similar tone/style
3. **Alt Text:** Every image needs descriptive alt text for SEO and accessibility
4. **File Optimization:** Compress images before upload (TinyPNG, ImageOptim)
5. **Authentic Over Stock:** Real photos of you/your work > generic stock photos

### Conversion Optimization Tips

1. **Multiple CTAs:** Include 5-7 CTA opportunities throughout page
2. **Clear Next Steps:** Always tell visitors what to do next
3. **Reduce Friction:** Make contacting you as easy as possible
4. **Value First:** Offer free consultation/audit/strategy session
5. **Social Proof:** Testimonials and client logos build trust

### SEO Tips

1. **Page Title:** Include primary keyword + location + business name
2. **Meta Description:** Compelling 150-160 character summary
3. **Heading Hierarchy:** Proper H1 → H2 → H3 structure
4. **Alt Text:** Describe images with relevant keywords
5. **Internal Linking:** Link between sections and pages

---

## Summary

This guide provides a streamlined approach to creating professional website content modeled on the successful Vetrici.com structure. By using an AI copywriter instead of filling out forms, you significantly reduce the content creation burden.

**Time Investment:**
- Gather prerequisites: 30-60 minutes
- AI copywriting interview: 20-30 minutes
- Review and refine copy: 30-60 minutes
- Asset preparation: 1-2 hours
- Implementation: 3-4 hours
- Testing & refinement: 1-2 hours
- **Total: ~7-10 hours** (vs. 15-20 hours with manual writing)

**Key Success Factors:**
1. Clear differentiation from competitors (not generic)
2. Strong social proof (client logos, notable work)
3. Consistent brand voice throughout
4. Multiple conversion opportunities
5. Professional visual presentation
6. AI-written copy that sounds natural, not templated

**What Makes This Approach Different:**
- AI acts as copywriter, not form-filler
- Focused on differentiation, not data collection
- Delivers complete, polished copy ready to use
- Significantly faster than traditional methods
- Professional quality without hiring an agency

The result will be a high-converting, professional website that positions you as a differentiated expert in your market.

---

*End of Guide*
