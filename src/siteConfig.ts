export type PageKey = 'home' | 'about' | 'projects' | 'blog' | 'contact';

export interface NavItem {
  key: PageKey;
  label: string;
  href: string;
}

export interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  socials: SocialLinks;
  navItems: NavItem[];
}

export interface MaintenanceConfig {
  siteUnderConstruction: boolean;
  pagesUnderConstruction: Record<PageKey, boolean>;
  message: string;
}

export const siteConfig: SiteConfig = {
  name: "Fernando Valenzuela Jr.",
  title: "Fernando Valenzuela Jr. | Technology Leader & Quality Architect",
  description: "AI-Driven Quality Engineering, Product Ownership & Application Delivery portfolio by Fernando Valenzuela Jr.",
  author: "Fernando Valenzuela Jr.",
  siteUrl: "https://fernvalen.github.io/my-portfolio",
  socials: {
    email: "fernvalen@gmail.com",
    github: "https://github.com/fernvalen",
    linkedin: "https://linkedin.com/in/fernvalen",
  },
  navItems: [
    { key: 'home', label: 'Home', href: '/' },
    { key: 'about', label: 'About', href: '/about' },
    { key: 'projects', label: 'Projects', href: '/projects' },
    { key: 'blog', label: 'Blog', href: '/blog' },
    { key: 'contact', label: 'Contact', href: '/contact' },
  ],
};

export const maintenanceConfig: MaintenanceConfig = {
  // Set to true to lock down the entire site
  siteUnderConstruction: false,

  // Enable/disable maintenance mode for specific pages
  pagesUnderConstruction: {
    home: false,
    about: true,
    projects: true,
    blog: true,
    contact: false,
  },

  // Custom messaging
  message: "🚧 Under Construction: We're polishing this section. Check back soon!",
};