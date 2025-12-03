# Quick Start Guide: Website Content Creation

**Time Required:** 30-45 minutes for content interview + 2-3 hours for asset preparation

---

## Step 1: Gather Digital Assets

Before starting the copywriting interview, collect these files:

### Required Assets

**Brand Identity**
- [ ] Company logo (SVG or high-resolution PNG format)
- [ ] Brand colors (hex codes for primary, secondary, accent)
  - If you don't have defined colors, purple (#3E32DA) and navy (#0D1036) work well
- [ ] Favicon (16x16px icon, or we'll generate from logo)

**Professional Photography**
- [ ] Professional headshot or portrait (high resolution)
- [ ] Action photo showing you consulting, speaking, or working (optional but recommended)
- [ ] Hero section image suggestion or we'll recommend stock photo direction

**Client Logos**
- [ ] **6-7 major client logos** (PNG format with transparent background)
- [ ] Written permission to display each logo on your website
- [ ] Focus on most recognizable brands to maximize credibility

**Note:** Quality over quantity. 6-7 well-known clients > 17 unknown companies.

**Contact Information**
- [ ] Business location (city, country)
- [ ] Contact email address
- [ ] LinkedIn profile URL
- [ ] Calendar booking URL (Calendly, Cal.com, etc.) - if you have one
- [ ] Other social media URLs you want to include

**Optional But Helpful**
- [ ] Existing educational content (webinar recordings, guides)
- [ ] Newsletter details if you have one
- [ ] Privacy policy URL (or note that you need one created)
- [ ] Terms of service URL (or note that you need one created)

---

## Step 2: Run the Copywriting Command

Once assets are gathered, issue this command in Claude Code:

```
/write-website-copy
```

This will launch an AI copywriting interview that takes 20-30 minutes.

---

## Step 3: Interview Preparation

The AI will ask you approximately **15-20 focused questions** in these areas:

### Phase 1: Business Differentiation (5-7 questions)
**Be ready to explain:**
- What makes your AI consulting approach different from Vetrici and other consultants
- Your key credentials and credibility markers (background, experience, notable projects)
- Your unique value proposition
- Your service structure (similar to Training → Implementation → Strategy model, or different?)

**Example questions:**
- "You're in AI consulting like Vetrici. What makes your approach different?"
- "Vetrici emphasizes Ph.D. credentials and Fortune 500 clients. What are YOUR key credibility markers?"
- "Why should someone choose you over other AI consultants?"

### Phase 2: Brand Voice & Tone (3-4 questions)
**Be ready to describe:**
- Your brand personality (3-4 adjectives: professional? approachable? innovative? bold?)
- Whether you want a tone similar to Vetrici or something different
- Any specific words/phrases you want emphasized or avoided
- First-person ("I help...") vs. company voice ("We help...")

**Example questions:**
- "How would you describe your brand personality?"
- "Should your copy be similar to Vetrici's professional tone, or more casual/technical/warm?"
- "Do you want first-person or company voice?"

### Phase 3: Services & Approach (4-5 questions)
**Be ready to describe:**
- Your main service offerings (how many tiers/packages)
- For each service: name, target audience, main outcome
- Any implementation services beyond consulting (chatbot setup, custom dev, digitalization)
- Free resources or educational content you offer

**Example questions:**
- "Describe your main service offerings. How many distinct packages do you have?"
- "For each service: what's it called, who is it for, what outcome do they get?"
- "Beyond consulting, do you offer implementation services?"

### Phase 4: Positioning & FAQ (2-3 questions)
**Be ready to share:**
- The 3-5 most common questions prospects ask before hiring you
- Typical objections or concerns prospects have
- The ONE key message you want visitors to remember

**Example questions:**
- "What are the most common questions prospects ask?"
- "What objections do prospects typically have?"
- "If someone visits for 30 seconds, what should they remember?"

---

## What Happens After the Interview

The AI will deliver a complete markdown document with professional copy for:

1. Hero section (headline, subheadline, description)
2. About section (your story, credentials, approach)
3. Why Choose Us (3-4 differentiators with detailed explanations)
4. How AI Helps (3-4 benefits with use cases)
5. Services section (descriptions for each offering)
6. CTA banners (2 different mid-page conversion points)
7. Implementation solutions (4 specific offerings)
8. Educational content section
9. FAQ section (5-7 questions with detailed answers)
10. Contact form copy
11. Footer navigation structure

**The copy will be:**
- Written in your established brand voice
- Differentiated from Vetrici and competitors
- Conversion-optimized with clear CTAs
- Ready to transform into data files
- Professional quality requiring minimal editing

---

## Tips for Best Results

### During the Interview

1. **Be specific, not generic**
   - Bad: "I offer AI consulting services"
   - Good: "I specialize in AI implementation for healthcare organizations dealing with HIPAA compliance"

2. **Share concrete examples**
   - Bad: "I've worked with many companies"
   - Good: "I led the AI chatbot implementation for [Hospital Name] that reduced call center volume by 40%"

3. **Highlight what makes you different**
   - Think about what competitors DON'T offer
   - Consider your unique background or methodology
   - Mention specific results you've achieved

4. **Don't worry about perfect phrasing**
   - The AI will polish your answers into professional copy
   - Focus on conveying the right ideas
   - You can refine the copy after delivery

### Common Mistakes to Avoid

❌ Being too modest about credentials/results
✓ State your achievements clearly - this is marketing

❌ Answering "similar to Vetrici" for everything
✓ Identify specific differences even if subtle

❌ Using vague business speak
✓ Give concrete examples and specific outcomes

❌ Listing features ("We offer X, Y, Z")
✓ Explain outcomes ("Clients achieve X result")

---

## After You Receive the Copy

1. **Review for accuracy** - Verify all facts, credentials, client names
2. **Check tone** - Does it sound like you? Request adjustments if needed
3. **Add specifics** - Insert exact metrics, client names, or details
4. **Refine as needed** - Ask the AI to adjust any sections

Then transform the copy into code with:

```
/implement-website-copy
```

This command will:
1. Read your website copy document
2. Create the data file (`src/_data/yourBusiness.js`)
3. Create the page template (`src/pages/your-business.11ty.tsx`)
4. Provide instructions for placing your images
5. Guide you through testing and deployment

---

## Estimated Timeline

| Task | Time |
|------|------|
| Gather digital assets | 30-60 min |
| Copywriting interview (`/write-website-copy`) | 20-30 min |
| Review and refine copy | 30-60 min |
| Transform into code (`/implement-website-copy`) | 5-10 min |
| Place images and test | 30-60 min |
| **Total time** | **2-3.5 hours** |

---

## Ready?

When you have your assets gathered and are ready to begin:

```
/write-website-copy
```

The AI will guide you through the rest.

---

*This process typically takes 20-30 minutes and results in complete, professional website copy ready for implementation.*
