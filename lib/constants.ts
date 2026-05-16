export type CompanyInfo = {
  /** Short name for nav, hero lockups, and large watermarks */
  brandName: string;
  /** Legal entity for copyright and formal copy */
  legalName: string;
  tagline: string;
  est: string;
  email: string;
  phone?: string;
  address?: string;
};

export const COMPANY: CompanyInfo = {
  brandName: "Nyota Tech",
  legalName: "Nyota Tech Limited",
  tagline: "Software & systems",
  est: "2026",
  email: "nyotatech.info@gmail.com",
};

/** Home stats — honest early-stage metrics (values parsed by AnimatedStat). */
export const COMPANY_STATS = [
  {
    value: "6",
    label: "Capability areas we’re launching with",
  },
  {
    value: "48h",
    label: "Target first response for new enquiries",
  },
  {
    value: "1",
    label: "Founding chapter — pipeline open",
  },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const SOCIAL_LINKS = [
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://twitter.com", label: "X" },
  { href: "https://wa.me/260973971192", label: "WhatsApp" },
] as const;

export type ServiceItem = {
  id: string;
  number: string;
  title: string;
  short: string;
  includes: string[];
  audience: string;
  differentiator: string;
};

export const SERVICES: ServiceItem[] = [
  {
    id: "custom-software",
    number: "01",
    title: "Custom Software Development",
    short:
      "Bespoke applications engineered for reliability, security, and long-term maintainability.",
    includes: [
      "Discovery and architecture",
      "Implementation and code review",
      "Testing, deployment, and runbooks",
    ],
    audience: "Teams that need mission-critical software without vendor lock-in.",
    differentiator:
      "We optimize for systems you can operate for years—not throwaway demos.",
  },
  {
    id: "integration",
    number: "02",
    title: "System Integration",
    short:
      "Connect legacy platforms, APIs, and data pipelines with clear contracts and observability.",
    includes: [
      "Integration mapping",
      "API design and middleware",
      "Monitoring and failure drills",
    ],
    audience: "Organizations juggling multiple vendors and internal tools.",
    differentiator:
      "Integration work centered on clear contracts and observable behavior.",
  },
  {
    id: "support",
    number: "03",
    title: "IT Support & Deployment",
    short:
      "Hands-on rollout, patching, and on-call support structured around your risk profile.",
    includes: [
      "Environment hardening",
      "Release management",
      "Incident response playbooks",
    ],
    audience: "Operations teams that need calm deployments.",
    differentiator:
      "Releases treated with seriousness—checklists, rollback paths, and calm communication.",
  },
  {
    id: "web-mobile",
    number: "04",
    title: "Web & Mobile Applications",
    short:
      "Fast, accessible interfaces with performance budgets and editorial polish.",
    includes: [
      "UX and UI systems",
      "Web and mobile delivery",
      "Analytics and quality gates",
    ],
    audience: "Product teams launching customer-facing experiences.",
    differentiator:
      "Interfaces built with performance budgets and accessible, editorial detail.",
  },
  {
    id: "database",
    number: "05",
    title: "Database Solutions",
    short:
      "Modeling, migration, and tuning for Postgres, SQL Server, and cloud-native stores.",
    includes: [
      "Schema design",
      "Migration planning",
      "Performance tuning",
    ],
    audience: "Teams hitting scaling or consistency limits.",
    differentiator:
      "Data modeling aimed at durability under real-world constraints—not slide-deck schemas.",
  },
  {
    id: "consulting",
    number: "06",
    title: "Technical Consulting",
    short:
      "Architecture reviews, security assessments, and roadmap clarity without fluff.",
    includes: [
      "Stakeholder workshops",
      "Written recommendations",
      "Optional implementation support",
    ],
    audience: "Leaders who need an honest technical second opinion.",
    differentiator:
      "Recommendations in plain language—actionable, prioritized, and honest.",
  },
];

export const VALUES = [
  {
    n: "01",
    title: "Clarity over noise",
    body: "We are starting with a simple rule: decisions should read clearly—weeks later, not only in the room where they were made.",
  },
  {
    n: "02",
    title: "Ownership",
    body: "From the first engagement, documentation, handoffs, and accountability are part of how we work—not an afterthought.",
  },
  {
    n: "03",
    title: "Calm velocity",
    body: "Speed without care creates debt. We intend to move quickly where it is safe—and slowly where it protects you.",
  },
] as const;

/** Placeholder focus areas while the founding team takes shape (no invented individuals). */
export const TEAM_FOCUS_AREAS = [
  {
    code: "01",
    title: "Engineering",
    description:
      "Architecture, implementation, and review—built for systems that stay understandable.",
  },
  {
    code: "02",
    title: "Delivery",
    description:
      "Scoping, sequencing, and communication that respects constraints and deadlines.",
  },
  {
    code: "03",
    title: "Operations mindset",
    description:
      "Runbooks, observability, and handover you can run without heroics.",
  },
] as const;
