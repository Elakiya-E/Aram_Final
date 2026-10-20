export type NavSubLink = {
  title: string;
  description?: string;
  href: string;
  icon?: string;
  badge?: string;
};

export type MegaMenuItem = NavSubLink;

export type NavDropdown = {
  kicker: string;
  title: string;
  description: string;
  pageHref: string;
  pageCta: string;
  layout?: "standard" | "industries-grid" | "portfolio";
  links: NavSubLink[];
  featured?: {
    kicker?: string;
    title: string;
    description: string;
    href: string;
    ctaText: string;
    badge?: string;
  };
};

export type NavItem = {
  label: string;
  href: string;
  variant?: "zoho";
  alignment?: "left" | "center" | "right";
  dropdown: NavDropdown;
};

export const NAV_ITEMS: NavItem[] = [
  // 1. ZOHO
  {
    label: "Zoho",
    href: "/zoho",
    variant: "zoho",
    alignment: "left",
    dropdown: {
      kicker: "ZOHO ECOSYSTEM",
      title: "Zoho Business Solutions",
      description:
        "Configure and customize Zoho tools to support your business workflows.",
      pageHref: "/zoho",
      pageCta: "Explore Zoho Solutions",
      layout: "standard",
      links: [
        {
          title: "Zoho CRM",
          description: "Organize customer relationships, lead tracking & sales pipelines.",
          href: "/zoho#products",
          icon: "Users",
          badge: "CRM",
        },
        {
          title: "Zoho Books",
          description: "Invoicing, financial accounts, cash visibility & reporting.",
          href: "/zoho#products",
          icon: "FileSpreadsheet",
          badge: "FINANCE",
        },
        {
          title: "Zoho Creator",
          description: "Custom low-code business applications & team portals.",
          href: "/zoho#products",
          icon: "Database",
          badge: "CUSTOM APPS",
        },
        {
          title: "Setup & Configuration",
          description: "Initial rollout, security roles, data modeling & migration.",
          href: "/zoho#services",
          icon: "Sliders",
        },
        {
          title: "Customization & Support",
          description: "Deluge scripting, automated integrations & ongoing maintenance.",
          href: "/zoho#services",
          icon: "Wrench",
        },
      ],
      featured: {
        kicker: "OFFICIAL PARTNER",
        title: "Certified Zoho Guidance",
        description:
          "Practical consultation, Deluge automation, and tailored workflow configuration.",
        href: "/zoho",
        ctaText: "View Zoho services",
      },
    },
  },

  // 2. WHAT WE DO
  {
    label: "What we do",
    href: "/what-we-do",
    alignment: "left",
    dropdown: {
      kicker: "CORE CAPABILITIES",
      title: "What We Do",
      description:
        "Connected technology solutions designed around real business needs.",
      pageHref: "/what-we-do",
      pageCta: "Explore All Capabilities",
      layout: "standard",
      links: [
        {
          title: "AI Solutions",
          description: "Intelligent assistants, document retrieval & decision models.",
          href: "/what-we-do#ai-solutions",
          icon: "Bot",
        },
        {
          title: "Software & Digital Products",
          description: "Modern web platforms, responsive web apps & client portals.",
          href: "/what-we-do#software-products",
          icon: "Layers",
        },
        {
          title: "Data & Analytics",
          description: "Unified metrics, interactive BI dashboards & executive reports.",
          href: "/what-we-do#data-analytics",
          icon: "BarChart3",
        },
        {
          title: "Business Systems",
          description: "Connected CRM, ERP workflows & operations architecture.",
          href: "/what-we-do#zoho-systems",
          icon: "Boxes",
        },
        {
          title: "Cloud & Managed Services",
          description: "Infrastructure reliability, API bridges & continuous improvements.",
          href: "/what-we-do#cloud-services",
          icon: "Cloud",
        },
      ],
      featured: {
        kicker: "WORKFLOW AUDIT",
        title: "Not sure where to start?",
        description:
          "Book a free 30-min workflow audit. We'll map one small, real win with you.",
        href: "/#contact",
        ctaText: "Book the audit",
      },
    },
  },

  // 3. INDUSTRIES
  {
    label: "Industries",
    href: "/industries",
    alignment: "center",
    dropdown: {
      kicker: "SECTOR EXPERTISE",
      title: "Industries We Serve",
      description:
        "Technology solutions for businesses, institutions, and organizations.",
      pageHref: "/industries",
      pageCta: "View Industry Gallery",
      layout: "industries-grid",
      links: [
        { title: "Banking & Financial Services", href: "/industries#industries-showcase", icon: "Landmark" },
        { title: "Healthcare", href: "/industries#industries-showcase", icon: "Activity" },
        { title: "Retail & E-commerce", href: "/industries#industries-showcase", icon: "ShoppingBag" },
        { title: "Manufacturing", href: "/industries#industries-showcase", icon: "Factory" },
        { title: "Telecommunications", href: "/industries#industries-showcase", icon: "Radio" },
        { title: "Energy", href: "/industries#industries-showcase", icon: "Zap" },
        { title: "Travel & Tourism", href: "/industries#industries-showcase", icon: "Plane" },
        { title: "Public Sector", href: "/industries#industries-showcase", icon: "Building" },
        { title: "Logistics & Supply Chain", href: "/industries#industries-showcase", icon: "Truck" },
        { title: "Education", href: "/industries#industries-showcase", icon: "GraduationCap" },
        { title: "NGOs & Nonprofits", href: "/industries#industries-showcase", icon: "HeartHandshake" },
        { title: "Local Businesses", href: "/industries#industries-showcase", icon: "Store" },
      ],
      featured: {
        kicker: "VISUAL SHOWCASE",
        title: "12 Industry Domains",
        description:
          "High-impact technology systems engineered for specific sector requirements.",
        href: "/industries",
        ctaText: "Explore industries",
      },
    },
  },

  // 4. OUR WORK
  {
    label: "Our work",
    href: "/our-work",
    alignment: "center",
    dropdown: {
      kicker: "SELECTED PORTFOLIO",
      title: "Selected Work",
      description:
        "Explore digital experiences, applications, and technology projects built by Aram Analytics.",
      pageHref: "/our-work",
      pageCta: "View Project Portfolio",
      layout: "portfolio",
      links: [
        {
          title: "Websites & E-commerce",
          description: "Online stores and digital portals built for performance & conversion.",
          href: "/our-work#projects",
          icon: "Globe",
          badge: "DIGITAL PRESENCE",
        },
        {
          title: "Applications & Digital Platforms",
          description: "Cloud-native web and mobile platforms for operational efficiency.",
          href: "/our-work#projects",
          icon: "LayoutGrid",
          badge: "PLATFORMS",
        },
        {
          title: "Business & Organization Platforms",
          description: "Civic gateways, municipal portals and community platforms.",
          href: "/our-work#projects",
          icon: "Building2",
          badge: "SYSTEMS",
        },
        {
          title: "AI & Intelligent Solutions",
          description: "Conversational agents, predictive models & automated pipelines.",
          href: "/our-work#projects",
          icon: "Cpu",
          badge: "AI SOLUTIONS",
        },
      ],
      featured: {
        kicker: "REAL DELIVERABLES",
        title: "Proven Deployments",
        description:
          "Explore live regional platforms, cultural showcases, and scalable tools.",
        href: "/our-work",
        ctaText: "View all projects",
      },
    },
  },

  // 5. AI & AUTOMATION
  {
    label: "AI & Automation",
    href: "/ai-automation",
    alignment: "right",
    dropdown: {
      kicker: "APPLIED INTELLIGENCE",
      title: "AI & Automation",
      description:
        "Make everyday business processes smarter with practical AI and workflow automation.",
      pageHref: "/ai-automation",
      pageCta: "Explore AI Solutions",
      layout: "standard",
      links: [
        {
          title: "AI-Powered Applications",
          description: "Web and mobile software with embedded machine intelligence.",
          href: "/ai-automation#what-we-build",
          icon: "Sparkles",
        },
        {
          title: "Business Workflow Automation",
          description: "Connect tools and triggers to eliminate repetitive manual busywork.",
          href: "/ai-automation#what-we-build",
          icon: "Workflow",
        },
        {
          title: "AI Assistants & Chatbots",
          description: "Grounded conversational agents for customer support & internal teams.",
          href: "/ai-automation#what-we-build",
          icon: "MessageSquareCode",
        },
        {
          title: "AI Integration",
          description: "Embed modern LLMs, vector search & APIs into your existing stack.",
          href: "/ai-automation#what-we-build",
          icon: "Cable",
        },
        {
          title: "Our Approach",
          description: "Human-in-the-loop, practical thinking focused on real business value.",
          href: "/ai-automation#approach",
          icon: "Compass",
        },
      ],
      featured: {
        kicker: "EFFICIENCY GAINS",
        title: "Less Busywork, More Value",
        description:
          "We build intelligent solutions that streamline operations and free up team bandwidth.",
        href: "/ai-automation",
        ctaText: "Discover AI solutions",
      },
    },
  },

  // 6. ABOUT
  {
    label: "About",
    href: "/about",
    alignment: "right",
    dropdown: {
      kicker: "COMPANY & APPROACH",
      title: "About Aram Analytics",
      description:
        "Learn about our approach to connecting software, AI, data, and business operations.",
      pageHref: "/about",
      pageCta: "Explore Our Story",
      layout: "standard",
      links: [
        {
          title: "Who We Are",
          description: "Our mission, engineering culture & multidisciplinary team.",
          href: "/about#who-we-are",
          icon: "Users",
        },
        {
          title: "Our Vision",
          description: "How we envision connected technology driving business growth.",
          href: "/about#vision",
          icon: "Eye",
        },
        {
          title: "Why Aram",
          description: "Direct senior collaboration, technical rigour & lasting value.",
          href: "/about#approach",
          icon: "ShieldCheck",
        },
        {
          title: "How We Work",
          description: "Our structured Understand → Design → Build → Improve methodology.",
          href: "/about#process",
          icon: "Workflow",
        },
        {
          title: "Contact Us",
          description: "Start a conversation about your challenges or project goals.",
          href: "/about#contact",
          icon: "Mail",
        },
      ],
      featured: {
        kicker: "GET IN TOUCH",
        title: "Start a Conversation",
        description:
          "No pitch decks, no sales pressure. Just thoughtful technical exploration.",
        href: "/#contact",
        ctaText: "Contact our team",
      },
    },
  },
];

export const SHOW_ANNOUNCEMENT_BAR = false;
export const ANNOUNCEMENT_TEXT =
  "Now booking Q4 automation projects. Reserve your slot";
export const ANNOUNCEMENT_HREF = "/#contact";
