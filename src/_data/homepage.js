const prefix = process.env.PATH_PREFIX || "";

export default {
  hero: {
    title: "Digital Consulting to Drive Strategic Growth and Market Leadership",
    imageSrc: `${prefix}/assets/img/th-15/hero-img.jpg`,
    description: "Empower your business with tailored digital strategies, modern web development, and intelligent automation that drive revenue, streamline operations, and set you apart from the competition.",
    ctaPrimary: { text: "Get in Touch", href: "#contact" },
    ctaSecondary: { text: "Explore Our Services", href: "#services" }
  },

  clientLogos: [
    { src: `${prefix}/assets/img/th-15/brand-1.png`, alt: "Client 1" },
    { src: `${prefix}/assets/img/th-15/brand-2.png`, alt: "Client 2" },
    { src: `${prefix}/assets/img/th-15/brand-3.png`, alt: "Client 3" },
    { src: `${prefix}/assets/img/th-15/brand-4.png`, alt: "Client 4" },
    { src: `${prefix}/assets/img/th-15/brand-5.png`, alt: "Client 5" },
    { src: `${prefix}/assets/img/th-15/brand-1.png`, alt: "Client 6" },
    { src: `${prefix}/assets/img/th-15/brand-2.png`, alt: "Client 7" },
    { src: `${prefix}/assets/img/th-15/brand-3.png`, alt: "Client 8" },
    { src: `${prefix}/assets/img/th-15/brand-4.png`, alt: "Client 9" },
    { src: `${prefix}/assets/img/th-15/brand-5.png`, alt: "Client 10" },
  ],

  stats: {
    title: "Results that speak",
    items: [
      { number: 12, suffix: "+", description: "Years delivering digital solutions for brands across every industry" },
      { number: 200, suffix: "+", description: "Projects launched for startups, agencies, and enterprise organizations" },
      { number: 98, suffix: "%", description: "Of our clients report measurable improvement in their digital presence" }
    ]
  },

  services: {
    title: "What we do",
    items: [
      {
        title: "Digital Strategy & Consulting",
        description: "We work with founders and executives to craft long-term digital roadmaps that align technology investments with business goals, market positioning, and revenue growth.",
        link: "#contact"
      },
      {
        title: "Web Design & Development",
        description: "We design and build high-performance websites and web applications that look exceptional, load fast, and convert visitors into customers.",
        link: "#contact"
      },
      {
        title: "E-Commerce & Platform Development",
        description: "From headless storefronts to custom platforms, we build scalable commerce experiences that accelerate growth for modern brands.",
        link: "#contact"
      },
      {
        title: "Automation & AI Integration",
        description: "We help businesses harness automation and AI to eliminate repetitive work, improve decision-making, and unlock operational efficiency at scale.",
        link: "#contact"
      }
    ]
  },

  aboutUs: {
    heading: "Who we are",
    imageSrc: `${prefix}/assets/img/th-15/content-img-1.jpg`,
    imagePosition: "left",
    content: [
      "HipDot Media is a digital consultancy built for businesses that refuse to stand still. We partner with ambitious teams to solve complex digital challenges — from reimagining web experiences to automating workflows that drain time and resources.",
      "Our approach is hands-on and results-driven. We don't hand you a slide deck and walk away. We embed with your team, understand your market, and build solutions that deliver measurable impact from day one."
    ],
    ctaText: "Learn More",
    ctaHref: "#contact"
  },

  whyChooseUs: {
    heading: "Why work with us",
    imageSrc: `${prefix}/assets/img/th-15/content-img-2.jpg`,
    imagePosition: "right",
    content: "Every engagement is tailored to your business. We combine deep technical expertise with strategic thinking to deliver solutions that move the needle — not just check a box.",
    features: [
      {
        title: "Proven Track Record:",
        description: " Over a decade of delivering digital solutions for brands of every size, from early-stage startups to established enterprises."
      },
      {
        title: "Tailored Strategies:",
        description: " No cookie-cutter approaches. We design solutions around your specific goals, workflows, and competitive landscape."
      },
      {
        title: "End-to-End Delivery:",
        description: " From strategy through implementation and ongoing optimization, we own the entire process so nothing falls through the cracks."
      }
    ]
  },

  solutions: {
    title: "Solutions for your business",
    subtitle: "From intelligent automation to full-scale digital transformation, we deliver practical solutions tailored to your industry and objectives.",
    items: [
      {
        title: "Custom Web Applications",
        description: "Purpose-built web applications designed around your unique workflows. We architect, build, and deploy solutions that integrate seamlessly with your existing tools and scale with your growth.",
        icon: "check",
        buttonText: "Learn More",
        buttonHref: "#contact"
      },
      {
        title: "AI-Powered Automation",
        description: "Streamline operations with intelligent automation. From customer support chatbots to data extraction pipelines, we implement AI solutions that save time and reduce human error.",
        icon: "check",
        buttonText: "Learn More",
        buttonHref: "#contact"
      },
      {
        title: "Digital Transformation",
        description: "Modernize legacy systems and processes with a clear, phased approach. We help organizations embrace digital-first thinking without disrupting day-to-day operations.",
        icon: "check",
        buttonText: "Learn More",
        buttonHref: "#contact"
      },
      {
        title: "Something Else?",
        description: "Have a challenge that doesn't fit neatly into a category? We thrive on unique problems. Tell us what you're working on and we'll figure out the best path forward together.",
        icon: "question",
        buttonText: "Get in Touch",
        buttonHref: "#contact"
      }
    ]
  },

  process: {
    title: "How we work",
    steps: [
      {
        title: "Discovery & Strategy",
        description: "We dig into your business goals, audience, and competitive landscape to define a clear digital strategy and project roadmap."
      },
      {
        title: "Design & Build",
        description: "Our team designs and develops your solution with constant collaboration, iterating quickly to get it right."
      },
      {
        title: "Launch & Optimize",
        description: "We launch, measure results, and continuously refine to ensure long-term performance and growth."
      }
    ]
  },

  team: {
    title: "The team behind the work",
    members: [
      { imageSrc: `${prefix}/assets/img/th-15/team-img-1.jpg`, name: "Adam Smith", title: "Founder & CEO" },
      { imageSrc: `${prefix}/assets/img/th-15/team-img-2.jpg`, name: "Jones Marco", title: "Chief Operating Officer" },
      { imageSrc: `${prefix}/assets/img/th-15/team-img-3.jpg`, name: "Marsal Joy", title: "Head of Strategy" },
      { imageSrc: `${prefix}/assets/img/th-15/team-img-4.jpg`, name: "Douglas Luhan", title: "Business Development" },
      { imageSrc: `${prefix}/assets/img/th-15/team-img-5.jpg`, name: "Alex Taylor", title: "Lead Developer" },
      { imageSrc: `${prefix}/assets/img/th-15/team-img-6.jpg`, name: "Henry Fayol", title: "UX Design Lead" }
    ]
  },

  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What services does HipDot Media offer?",
        answer: "We offer digital strategy consulting, web design and development, e-commerce platform builds, automation and AI integration, and ongoing optimization services. Our goal is to help businesses leverage technology to grow faster and operate more efficiently."
      },
      {
        question: "How do you tailor your approach to each client?",
        answer: "Every engagement starts with a deep discovery phase where we learn your business, goals, audience, and competitive landscape. From there, we design a solution and strategy built specifically around your needs — no templates, no one-size-fits-all."
      },
      {
        question: "What industries do you work with?",
        answer: "We work across a wide range of industries including technology, healthcare, finance, retail, professional services, and more. If your business has a digital presence or wants to build one, we can help."
      },
      {
        question: "How long does a typical project take?",
        answer: "Timelines vary based on scope and complexity. A focused website redesign might take 6-8 weeks, while a full digital transformation engagement can span several months. We'll give you a clear timeline during discovery."
      },
      {
        question: "Do you offer ongoing support after launch?",
        answer: "Absolutely. We offer ongoing optimization, maintenance, and strategic support to ensure your digital presence continues to perform and evolve as your business grows."
      }
    ]
  },

  cta: {
    heading: "Ready to elevate your digital presence?",
    description: "Let's discuss how we can help you solve complex challenges, reach new audiences, and build a digital experience that drives real results.",
    ctaText: "Explore Our Services",
    ctaHref: "#services",
    brands: [
      { src: `${prefix}/assets/img/th-15/brand-1.png`, alt: "brand-1" },
      { src: `${prefix}/assets/img/th-15/brand-2.png`, alt: "brand-2" },
      { src: `${prefix}/assets/img/th-15/brand-3.png`, alt: "brand-3" },
      { src: `${prefix}/assets/img/th-15/brand-4.png`, alt: "brand-4" },
      { src: `${prefix}/assets/img/th-15/brand-5.png`, alt: "brand-5" }
    ]
  }
};
