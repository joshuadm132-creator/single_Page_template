/* =========================================
   TYPES
   ========================================= */
export interface NavLink {
  label: string;
  href: string;
}
export interface NavConfig {
  logoText: string;
  links: NavLink[];
  cta: { text: string; href: string };
}

export interface SocialLink {
  icon: string;
  href: string;
}
export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroConfig {
  credentials: string;
  headline: string;
  name: string;
  tagline: string;
  image: { src: string; alt: string };
  cta: { text: string; href: string };
  socials: SocialLink[];
  stats: HeroStat[];
}
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServicesConfig {
  id: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

export interface AboutConfig {
  title: string;
  subtitle: string;
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
  };
  cta: {
    text: string;
    href: string;
  };
}
export interface AwardItem {
  year: string;
  title: string;
  organization: string;
  icon: string;
}

export interface AwardsConfig {
  title: string;
  subtitle: string;
  items: AwardItem[];
}
export interface ContactConfig {
  title: string;
  subtitle: string;
  whatsappNumber: string; // Format: country code + number, no symbols (e.g., 263782222868)
  email: string;
  location: string;
}

export interface FooterConfig {
  tagline: string;
  copyright: string;
  links: NavLink[]; // Reusing the NavLink type from above
}

export interface SiteConfig {
  nav: NavConfig;
  hero: HeroConfig;
  services: ServicesConfig;
  about: AboutConfig;
  awards: AwardsConfig;
  contact: ContactConfig;
  footer: FooterConfig; 
}


/* =========================================
   DATA
   ========================================= */
export const siteConfig: SiteConfig = {
  nav: {
    logoText: "LM.",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { text: "Hire Me", href: "#contact" },
  },
  hero: {
    // Added credentials back
    credentials: "PMP · PMI-ACP · Certified Project Director",
    // Adjusted headline to match the reference "I'm a [Role]" structure
    headline: "I'm a Project Management Consultant",
    name: "Lorna Moffat",
    tagline:
      "Strategic Programs and Portfolio Leader with over 15 years of experience leading multi-million-dollar initiatives across regulated, multi-stakeholder environments.",
    image: {
      src: "/Lorna-Hero.png",
      alt: "Lorna Moffat",
    },
    cta: { text: "Learn more", href: "#about" },
    socials: [
      { icon: "fa-linkedin-in", href: "#" },
      { icon: "fa-facebook", href: "#" },
    ],
    stats: [
      { value: "15+", label: "Years Experience" },
      { value: "$12.9M+", label: "Portfolio Managed" },
      { value: "50+", label: "Projects Delivered" },
    ],
  },
  ///////////////////////////////////SERVICES////////////////////////////////////////
  services: {
    id: "home-page-Services",
    title: "Consulting Services",
    subtitle:
      "Comprehensive project management and business development solutions tailored to your organization's needs.",
    items: [
      {
        id: "project-management",
        title: "Project Planning & Execution",
        description:
          "End-to-end project management from conception to completion, ensuring timely delivery and quality results.",
        icon: "fa-project-diagram",
      },
      {
        id: "business-strategy",
        title: "Business Strategy & Development",
        description:
          "Strategic planning and business development to drive growth and competitive advantage.",
        icon: "fa-chart-line",
      },
      {
        id: "process-improvement",
        title: "Process Improvement",
        description:
          "Streamlining operations and implementing efficient processes to maximize productivity.",
        icon: "fa-cogs",
      },
      {
        id: "team-leadership",
        title: "Team Building & Leadership",
        description:
          "Developing high-performing teams and coaching leaders to achieve their full potential.",
        icon: "fa-users",
      },
      {
        id: "change-management",
        title: "Change Management",
        description:
          "Guiding organizations through transformational changes with minimal disruption.",
        icon: "fa-exchange-alt",
      },
      {
        id: "risk-assessment",
        title: "Risk Assessment & Mitigation",
        description:
          "Identifying potential risks and developing strategies to minimize their impact.",
        icon: "fa-shield-alt",
      },
    ],
  },

  ///////////////////////////////////////////ABOUT/////////////////////////////////////////

  about: {
    title: "About Lorna",
    subtitle:
      "Strategic leadership backed by 15+ years of delivering complex initiatives.",
    paragraphs: [
      "I specialize in leading multi-million-dollar initiatives across regulated, multi-stakeholder environments. My expertise spans program design, cross-functional coordination, strategic planning, monitoring and evaluation oversight, proposal development, and governance compliance.",
      "I am passionate about guiding teams in translating strategy into measurable operational plans, supervising implementation against Key Performance Indicators, ensuring financial and narrative reporting integrity, and maintaining alignment with regulatory and institutional frameworks.",
    ],
    image: {
      src: "/About-Lorna.jpeg",
      alt: "Lorna Moffat working",
    },
    cta: {
      text: "Download Full CV",
      href: "/cv.pdf",
    },
  },

  ///////////////////////////////////awards////////////////////////////////
  awards: {
    title: "Achievements & Recognition",
    subtitle:
      "Industry recognition that speaks to my commitment to excellence and strategic leadership.",
    items: [
      {
        year: "2024",
        title: "Leader of the Year - Telecommunications",
        organization: "Chartered Institute of Project Managers",
        icon: "fa-trophy",
      },
      {
        year: "2023",
        title: "Woman of Impact",
        organization: "CEO's Network",
        icon: "fa-crown",
      },
      {
        year: "2023",
        title: "Silver Award - Project Management",
        organization: "CEO's Network",
        icon: "fa-medal",
      },
      {
        year: "2022",
        title: "Woman of Influence",
        organization: "Marketers Association of Zimbabwe",
        icon: "fa-star",
      },
      {
        year: "2022 & 2023",
        title: "Influential Woman in Project Management",
        organization: "PMI Zimbabwe & CIPMZ",
        icon: "fa-award",
      },
      {
        year: "2022",
        title: "Top 50 Visionary Women",
        organization: "Women Corporate Directors Network",
        icon: "fa-gem",
      },
    ],
  },
  
  contact: {
    title: "Let's Work Together",
    subtitle: "Ready to move your business forward? Fill out the form below and it will send a message directly to my WhatsApp.",
    whatsappNumber: "263782222868", // Make sure this matches Lorna's actual WhatsApp number
    email: "lornamoffat3@gmail.com",
    location: "Harare, Zimbabwe",
  },
  footer: {
    tagline: "Strategic projects, delivered with clarity and measurable impact.",
    copyright: `© ${new Date().getFullYear()} Lorna Moffat. All rights reserved.`,
    links: [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },

};

