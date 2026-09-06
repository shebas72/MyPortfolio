export type ProjectCategory = 
  | 'All'
  | 'WordPress + Headless'
  | 'Laravel API & Fintech'
  | 'React & Design Systems'
  | 'Full Triad Solutions'
  | 'Saudi eCommerce';

export type TechStackKey = 'wordpress' | 'laravel' | 'react' | 'triad';

export interface ProjectMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface ArchitectureStack {
  wordpress?: string;
  laravel?: string;
  react?: string;
  database?: string;
  compliance?: string;
}

export interface Project {
  id: string;
  title: string;
  arabicTitle?: string;
  client: string;
  year: string;
  category: Exclude<ProjectCategory, 'All'>;
  stackType: TechStackKey;
  tagline: string;
  arabicTagline?: string;
  description: string;
  challenge: string;
  solution: string;
  coverImage: string;
  mockupScreens: { title: string; subtitle: string; previewType: 'dashboard' | 'mobile' | 'ecommerce' | 'tokens' | 'editor'; image?: string }[];
  tags: string[];
  saudiTags: string[];
  architectureStack: ArchitectureStack;
  metrics: ProjectMetric[];
  deliverables: string[];
  tools: string[];
  colorPalette: ColorSwatch[];
  typography: {
    primary: string;
    secondary: string;
    sampleText: string;
  };
  featured: boolean;
  liveUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  skills: string[];
  featured?: boolean;
  isCurrent?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  tools: string[];
}

export interface Certification {
  title: string;
  credentialId: string;
  issuer: string;
  year: string;
}
