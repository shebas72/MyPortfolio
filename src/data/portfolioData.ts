import { Project, ExperienceItem, ServiceItem, Certification, TechStackKey } from '../types';

export const DESIGNER_INFO = {
  name: "Shebas Khan",
  title: "Senior Full-Stack Architect & UI/UX Specialist",
  specialization: "WordPress • Laravel • React Specialist",
  marketFocus: "Saudi Arabia (KSA) & GCC Enterprise Ecosystem",
  location: "Riyadh, Saudi Arabia",
  timezone: "Asia/Riyadh",
  timezoneOffset: "UTC+3",
  email: "shebas.veer@gmail.com",
  backupEmail: "shebas.khan@nesma.com",
  phone: "+966 550 860 467",
  availability: "Open to Full-Time Senior & Lead Engineering Roles (Riyadh & Remote)",
  bio: "15+ years architecting enterprise digital products across Saudi Arabia and the GCC. Deep specialization in the WordPress (Headless CMS), Laravel (Secure API & ZATCA/Mada Core), and React (High-Performance UI & Design Systems) triad. Proven record delivering mission-critical portals, e-invoicing integrations, and bilingual RTL interfaces.",
  arabicBio: "أكثر من ١٥ عاماً من الخبرة في تطوير وتصميم المنصات الرقمية في المملكة العربية السعودية ومنطقة الخليج. متخصص في منظومة (ووردبريس، لارافيل، ورياكت) مع توافق كامل مع الفوترة الإلكترونية لهيئة الزكاة والدخل (ZATCA)، بوابات الدفع السعودية (مدى، ميسر، هايبرباي)، والواجهات ثنائية اللغة (عربي/إنجليزي).",
  statYears: "15+",
  statProjects: "140+",
  statConversionUplift: "+40%",
  statSecurityRating: "0.02%",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    dribbble: "https://dribbble.com",
    twitter: "https://twitter.com",
    whatsapp: "https://wa.me/966550860467"
  }
};

export const SAUDI_MARKET_PILLARS = [
  {
    title: "ZATCA Phase 2 Fatoora",
    arabicTitle: "الفوترة الإلكترونية (زاتكا)",
    description: "Full compliance with Saudi Zakat, Tax and Customs Authority Phase 2 e-invoicing, cryptographic stamping, and XML/QR code generation in Laravel and WordPress.",
    icon: "ShieldCheck",
    badge: "Phase 2 Certified"
  },
  {
    title: "Saudi Payment Switches (Mada)",
    arabicTitle: "بوابات الدفع ومدى",
    description: "Deep integration with Mada national debit scheme, Moyasar, HyperPay, STC Pay, and Saudi BNPL leaders Tabby and Tamara.",
    icon: "CreditCard",
    badge: "Mada Ready"
  },
  {
    title: "Bilingual Arabic & English (RTL/LTR)",
    arabicTitle: "واجهات ثنائية اللغة وتصميم عربي",
    description: "Flawless bidirectional RTL/LTR layout mirroring, authentic Arabic typography (Cairo, IBM Plex Arabic), and cultural UX localization.",
    icon: "Languages",
    badge: "Native RTL"
  },
  {
    title: "Vision 2030 Digital Compliance",
    arabicTitle: "التحول الرقمي ورؤية ٢٠٣٠",
    description: "Nafath SSO identity integration, CITC/NCA cybersecurity baseline adherence, and high-availability enterprise cloud architecture.",
    icon: "Compass",
    badge: "Vision 2030"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "injazat-superpay",
    title: "Injazat SuperPay & ZATCA Hub",
    arabicTitle: "إنجازات سوبر باي ومنصة زاتكا",
    client: "Nesma Injazat Fintech",
    year: "2025",
    category: "Laravel API & Fintech",
    stackType: "laravel",
    tagline: "Tactile fintech mobile experience & ZATCA Phase 2 engine for 1.2M+ Saudi users",
    arabicTagline: "تطبيق مالي فائق السرعة مع محرك الفوترة الإلكترونية للمرحلة الثانية لأكثر من ١.٢ مليون مستخدم",
    description: "An all-in-one financial ecosystem and digital wallet built for Saudi peer-to-peer transfers, Mada payment processing, corporate payroll, and automated ZATCA Phase 2 Fatoora cryptographic compliance.",
    challenge: "Traditional banking flows suffered from multi-step latency, while complex ZATCA Phase 2 XML cryptographic hashing, UUID generation, and QR verification required ultra-low latency response times under peak payroll hours.",
    solution: "Engineered a robust Laravel 11 API with Redis job queues for asynchronous cryptographic signing, paired with a tactile React 19 mobile-first interface featuring biometric auth, Mada instant payment switch, and native Arabic RTL typography.",
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80",
    mockupScreens: [
      {
        title: "OLED Wallet & Mada Feed",
        subtitle: "Biometric transaction cards with Mada national debit scheme authorization",
        previewType: "mobile",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80"
      },
      {
        title: "ZATCA Fatoora QR Inspector",
        subtitle: "Live cryptographic invoice validation with TLV base64 QR generation",
        previewType: "dashboard",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
      },
      {
        title: "Bilingual Transfer Flow",
        subtitle: "3-tap instant Saudi IBAN & mobile wallet remittance interface",
        previewType: "mobile",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1400&q=80"
      }
    ],
    tags: ["Laravel 11", "React 19", "ZATCA Phase 2", "Mada Gateway", "Moyasar", "RTL / LTR", "Redis"],
    saudiTags: ["ZATCA Phase 2", "Mada Certified", "Moyasar API", "Arabic RTL", "Riyadh Fintech"],
    architectureStack: {
      laravel: "Laravel 11 REST API with Sanctum, Redis Queues & ZATCA Cryptographic Signing Engine",
      react: "React 19 SPA with TypeScript, Tailwind CSS, Biometric Touch & RTL support",
      database: "PostgreSQL with connection pooling & automated audit trails",
      compliance: "ZATCA Phase 2 (Fatoora), Saudi Central Bank (SAMA) & NCA Cybersecurity Baselines"
    },
    metrics: [
      { label: "Transaction Time", value: "< 2.8 sec", detail: "Down from 18s in legacy banking portal" },
      { label: "ZATCA Signings", value: "100%", detail: "Zero rejection rate on ZATCA clearance API" },
      { label: "Security Incident Rate", value: "0.02%", detail: "Slashed from 2.3% via hardened Laravel middleware" }
    ],
    deliverables: ["Laravel Microservices Architecture", "ZATCA Cryptographic Helper Package", "React 19 Mobile-First UI Kit", "Arabic / English Figma Tokens"],
    tools: ["Laravel 11", "React 19", "TypeScript", "Tailwind CSS", "PostgreSQL", "Redis", "Figma"],
    colorPalette: [
      { name: "OLED Pitch", hex: "#000000" },
      { name: "Carbon Slate", hex: "#12141C" },
      { name: "Emerald Signal", hex: "#10B981" },
      { name: "Saudi Gold", hex: "#D4AF37" },
      { name: "Soft Platinum", hex: "#E2E8F0" }
    ],
    typography: {
      primary: "Cairo Arabic",
      secondary: "Plus Jakarta Sans",
      sampleText: "١٢٤,٥٠٠.٠٠ ر.س — توثيق بيومتري فوري ومعتمد من زاتكا"
    },
    featured: true,
    liveUrl: "https://superpay-preview.dev",
    testimonial: {
      quote: "Shebas Khan delivered unmatched mastery across the full spectrum: from deep Laravel backend architecture and ZATCA compliance to a world-class bilingual React interface. The product sets the benchmark in Saudi fintech.",
      author: "Fahad Al-Sulaiman",
      role: "Digital Banking Director",
      company: "Nesma Injazat Tech"
    }
  },
  {
    id: "riyadh-vision-portal",
    title: "Riyadh Vision 2030 Smart Portal",
    arabicTitle: "بوابة خدمات رؤية الرياض ٢٠٣٠",
    client: "Riyadh Municipal & Economic Council",
    year: "2024",
    category: "Full Triad Solutions",
    stackType: "triad",
    tagline: "Headless WordPress editorial hub, Laravel Nafath SSO middleware, and React RTL frontend",
    arabicTagline: "منظومة ثلاثية: ووردبريس لإدارة المحتوى، لارافيل للربط مع نفاذ، ورياكت للواجهة التفاعلية",
    description: "An enterprise public services and cultural initiatives portal powering digital interactions for Riyadh's flagship economic transformation programs. Features headless editorial management, high-volume news publishing, and verified citizen services.",
    challenge: "Editorial teams needed the intuitive content modeling of WordPress, government engineers required strict Laravel microservices with Saudi National Identity (Nafath SSO), and citizens demanded an ultra-fast, accessible bilingual experience.",
    solution: "Constructed the ultimate modern triad: Headless WordPress with ACF Pro and WPGraphQL for bilingual editorial content; a secure Laravel gateway handling Nafath citizen authentication and council APIs; and a blazing-fast React 19 frontend rendered with native RTL.",
    coverImage: "https://images.unsplash.com/photo-1512958789358-4dacacbe09c3?auto=format&fit=crop&w=1400&q=80",
    mockupScreens: [
      {
        title: "Bilingual Citizen Services Portal",
        subtitle: "High-density service catalog with Nafath digital identity verification",
        previewType: "dashboard",
        image: "https://images.unsplash.com/photo-1512958789358-4dacacbe09c3?auto=format&fit=crop&w=1400&q=80"
      },
      {
        title: "Headless WordPress Editorial Matrix",
        subtitle: "Custom ACF Pro bilingual block editor with real-time GraphQL preview",
        previewType: "editor",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1400&q=80"
      },
      {
        title: "Saudi Vision Metric Dashboard",
        subtitle: "Live economic KPI tracker with interactive charts and regional milestones",
        previewType: "dashboard",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
      }
    ],
    tags: ["WordPress Headless", "Laravel 11", "React 19", "WPGraphQL", "Nafath SSO", "Arabic RTL", "Vision 2030"],
    saudiTags: ["Nafath SSO", "Vision 2030", "Bilingual RTL", "WPGraphQL", "Riyadh Public Sector"],
    architectureStack: {
      wordpress: "Headless WordPress with ACF Pro, WPGraphQL, Polylang Pro & Redis Object Caching",
      laravel: "Laravel API gateway integrating Nafath SSO, Ministry APIs & rate-limited microservices",
      react: "React 19 Next-Gen SPA with Cairo Arabic typography, Tailwind CSS & Motion transitions",
      database: "MySQL 8 for CMS + PostgreSQL for Citizen Application Records",
      compliance: "Saudi National Cybersecurity Authority (NCA) Essential Cybersecurity Controls (ECC)"
    },
    metrics: [
      { label: "Daily Active Citizens", value: "380,000+", detail: "Zero server downtime during peak press releases" },
      { label: "Content Publishing Speed", value: "4x Faster", detail: "Editors publish bilingual updates seamlessly via WP" },
      { label: "Accessibility Score", value: "WCAG AAA", detail: "Full screen reader and high-contrast support" }
    ],
    deliverables: ["Headless WordPress Schema & ACF Kit", "Laravel Nafath SSO Integration Module", "React 19 RTL Component Library", "Comprehensive Security Documentation"],
    tools: ["WordPress", "Laravel 11", "React 19", "WPGraphQL", "Docker", "Tailwind CSS", "Figma"],
    colorPalette: [
      { name: "Riyadh Obsidian", hex: "#080B11" },
      { name: "Vision Teal", hex: "#0E7490" },
      { name: "Oasis Green", hex: "#15803D" },
      { name: "Sand Gold", hex: "#EAB308" },
      { name: "Pristine Snow", hex: "#F8FAFC" }
    ],
    typography: {
      primary: "Cairo SemiBold",
      secondary: "IBM Plex Sans Arabic",
      sampleText: "منصة الرياض الرقمية الموحدة — معتمدة عبر النفاذ الوطني الموحد"
    },
    featured: true,
    liveUrl: "https://riyadh-vision.preview.dev",
    testimonial: {
      quote: "Combining WordPress for content agility, Laravel for military-grade security, and React for frontend delight was a masterstroke by Shebas. It transformed our public portal.",
      author: "Dr. Tariq Al-Husseini",
      role: "Digital Governance Lead",
      company: "Riyadh Strategic Council"
    }
  },
  {
    id: "souq-alkhaleej-ecommerce",
    title: "Souq Al-Khaleej Luxury eCommerce",
    arabicTitle: "سوق الخليج للتجارة الإلكترونية الفاخرة",
    client: "Al-Khaleej Luxury Retail Group",
    year: "2024",
    category: "Saudi eCommerce",
    stackType: "wordpress",
    tagline: "Headless WooCommerce catalogue, Laravel ERP synchronization, and React instant-checkout",
    arabicTagline: "متجر إلكتروني فاخر يربط ووكومرس ولارافيل ورياكت مع دعم كامل لمدى وتابي وتمارا",
    description: "A flagship bilingual luxury eCommerce marketplace spanning perfume ateliers, fine jewelry, and Saudi fashion couture. Features frictionless Mada, Apple Pay, Tabby, and Tamara BNPL checkouts with real-time warehouse inventory sync.",
    challenge: "High cart abandonment due to complex traditional WooCommerce checkout pages and lack of native support for Saudi installment plans (Tabby/Tamara) and Mada debit cards.",
    solution: "Decoupled WooCommerce into a Headless catalogue, engineered a dedicated Laravel 11 microservice for real-time ERP inventory and ZATCA tax invoice generation, and created a single-gesture React 19 slide-over checkout.",
    coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
    mockupScreens: [
      {
        title: "Luxury Bilingual Product Stage",
        subtitle: "Dynamic Arabic/English typography pairing with high-resolution media zoom",
        previewType: "ecommerce",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80"
      },
      {
        title: "Instant 1-Click Mada Checkout",
        subtitle: "Slide-over checkout with native Mada, Apple Pay, Tabby and Tamara splits",
        previewType: "mobile",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=80"
      },
      {
        title: "Laravel ERP & ZATCA Invoice Bridge",
        subtitle: "Automated warehouse order routing and ZATCA QR receipt generation",
        previewType: "dashboard",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
      }
    ],
    tags: ["WooCommerce Headless", "WordPress REST", "Laravel 11", "React 19", "Mada", "Tabby & Tamara", "ZATCA Fatoora"],
    saudiTags: ["Mada Checkout", "Tabby & Tamara", "ZATCA Invoices", "Saudi Luxury", "Bilingual RTL"],
    architectureStack: {
      wordpress: "WooCommerce with WP REST API & ACF Pro custom product attributes",
      laravel: "Laravel order pipeline integrating Moyasar Mada, Tabby BNPL & ERP warehouse sync",
      react: "React 19 storefront with instant cart drawer, optimistic UI updates & RTL support",
      database: "MySQL 8 (WooCommerce) + Redis session cache",
      compliance: "Saudi Ministry of Commerce e-Commerce Regulations & ZATCA Phase 2"
    },
    metrics: [
      { label: "Checkout Conversion", value: "+44%", detail: "Slashed abandonment with 1-click Mada & Tabby" },
      { label: "Average Order Value", value: "+28%", detail: "Bespoke dynamic upsells in luxury cart drawer" },
      { label: "Page Load Speed", value: "0.6s", detail: "Sub-second load times across Saudi mobile networks" }
    ],
    deliverables: ["Headless WooCommerce Configuration", "Laravel Payment & Order Webhook Hub", "React 19 eCommerce Storefront UI", "ZATCA Compliant PDF Generator"],
    tools: ["WordPress", "WooCommerce", "Laravel 11", "React 19", "Tailwind CSS", "Moyasar", "Figma"],
    colorPalette: [
      { name: "Onyx Midnight", hex: "#08090C" },
      { name: "Cashmere Gold", hex: "#E5C07B" },
      { name: "Deep Charcoal", hex: "#1A1B23" },
      { name: "Alabaster Silk", hex: "#F3F4F6" }
    ],
    typography: {
      primary: "Cairo Bold",
      secondary: "Plus Jakarta Sans",
      sampleText: "الدفع الفوري عبر مدى أو قسّم فاتورتك مع تابي وتمارا بدون فوائد"
    },
    featured: true,
    liveUrl: "https://souq-alkhaleej.preview.dev",
    testimonial: {
      quote: "Shebas transformed our eCommerce presence. Our revenue spiked by 44% in the first quarter thanks to the frictionless Mada and Tabby integration and the astonishing speed of the React storefront.",
      author: "Reem Al-Ghamdi",
      role: "Managing Director",
      company: "Al-Khaleej Luxury Brands"
    }
  },
  {
    id: "nesma-enterprise-saas",
    title: "Nesma Operations SaaS & ERP Suite",
    arabicTitle: "نظام إدارة العمليات السحابي لمجموعة نسما",
    client: "Nesma Holding",
    year: "2024",
    category: "Laravel API & Fintech",
    stackType: "laravel",
    tagline: "Multi-tenant Laravel 11 ERP backend with React micro-frontend analytical workspace",
    arabicTagline: "منصة سحابية متكاملة تدير العمليات وسلاسل الإمداد مع ربط أنظمة أودو وواجهة رياكت المتقدمة",
    description: "Enterprise operational intelligence platform serving 22 business units across construction, engineering, and logistics throughout Saudi Arabia. Features complex workflow automation, contract approvals, and Odoo ERP synchronizations.",
    challenge: "Fragmented legacy databases, slow manual approval chains across regional offices, and severe downtime caused by unoptimized queries during end-of-month financial closings.",
    solution: "Designed an optimized multi-tenant Laravel 11 architecture utilizing database sharding and job queues, paired with modular React 19 micro-frontends with drag-and-drop workflow builders and dark ambient data visualization.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    mockupScreens: [
      {
        title: "Multi-Tenant Operations Matrix",
        subtitle: "Consolidated enterprise KPI monitoring across 22 regional Saudi subsidiaries",
        previewType: "dashboard",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
      },
      {
        title: "Contract & Workflow Engine",
        subtitle: "Visual step-by-step approval chain with digital signatures and role-based ACL",
        previewType: "editor",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1400&q=80"
      }
    ],
    tags: ["Laravel 11", "React 19", "Odoo ERP", "Multi-Tenant", "Enterprise SaaS", "PostgreSQL", "Bilingual"],
    saudiTags: ["Nesma Group", "Enterprise ERP", "Odoo Integration", "Saudi Supply Chain", "NCA ECC"],
    architectureStack: {
      laravel: "Laravel 11 Multi-Tenant architecture with PostgreSQL schema isolation & Redis queues",
      react: "React 19 with TanStack Table, Chart.js, Tailwind CSS & Arabic RTL localization",
      database: "PostgreSQL 16 with read replicas & Odoo XML-RPC connectors",
      compliance: "Saudi NCA ECC Cybersecurity Baselines & Internal Governance"
    },
    metrics: [
      { label: "Server Downtime", value: "Slashed 85%", detail: "Query optimizations eliminated monthly reporting bottlenecks" },
      { label: "Approval Cycle Time", value: "2.4 Hours", detail: "Down from 5 business days via automated push notifications" },
      { label: "Enterprise Users", value: "4,500+", detail: "Daily active engineers, project managers, and finance officers" }
    ],
    deliverables: ["Laravel Multi-Tenant Core Architecture", "React Component & Data Grid System", "Odoo ERP Bidirectional Sync", "Bilingual System Documentation"],
    tools: ["Laravel 11", "React 19", "PostgreSQL", "Odoo", "Redis", "Docker", "Tailwind CSS"],
    colorPalette: [
      { name: "Deep Navy Slate", hex: "#0B111E" },
      { name: "Cyan Spark", hex: "#06B6D4" },
      { name: "Emerald Valid", hex: "#10B981" },
      { name: "Pure Platinum", hex: "#E2E8F0" }
    ],
    typography: {
      primary: "Cairo Bold",
      secondary: "JetBrains Mono",
      sampleText: "لوحة التحكم المركزية لعمليات مجموعة نسما — تحديث فوري لكافة المشاريع"
    },
    featured: false,
    liveUrl: "https://nesma-ops.preview.dev"
  },
  {
    id: "sehacare-saudi-health",
    title: "SehaCare Saudi Telehealth Platform",
    arabicTitle: "منصة صحة كير للرعاية الصحية والطب الاتصالي",
    client: "Saudi Telehealth & Specialized Clinics",
    year: "2023",
    category: "WordPress + Headless",
    stackType: "wordpress",
    tagline: "Headless WordPress medical editorial hub & Laravel HIPAA/MOH compliant appointment engine",
    arabicTagline: "بوابة طبية معتمدة من وزارة الصحة تجمع محتوى ووردبريس ومحرك المواعيد بلارافيل وتطبيق رياكت",
    description: "A comprehensive digital health and teleconsultation platform adhering strictly to Saudi Ministry of Health (MOH) and National Health Information Center (NHIC) regulatory requirements.",
    challenge: "Medical content required rigorous editorial review and SEO visibility in Arabic, while patient appointment bookings and medical history needed encrypted, audit-trailed infrastructure.",
    solution: "Deployed Headless WordPress for medical knowledge base and doctor directory management, combined with an encrypted Laravel 11 HIPAA-compliant backend and a friendly React 19 consultation interface.",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80",
    mockupScreens: [
      {
        title: "Doctor Directory & Booking Stage",
        subtitle: "Real-time doctor schedule inspector with instant Mada co-pay authorization",
        previewType: "dashboard",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80"
      },
      {
        title: "Encrypted Consultation Room",
        subtitle: "WebRTC encrypted video room with real-time electronic prescription generation",
        previewType: "mobile",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1400&q=80"
      }
    ],
    tags: ["WordPress Headless", "Laravel 11", "React 19", "Saudi MOH", "Telehealth", "WebRTC", "Mada"],
    saudiTags: ["Saudi MOH Compliant", "Mada Health Pay", "Bilingual Arabic", "NHIC Ready", "Telemedicine"],
    architectureStack: {
      wordpress: "WordPress with custom Doctor & Clinic CPTs, Yoast SEO Arabic & WP REST API",
      laravel: "Laravel API with end-to-end encrypted medical records, SMS OTP & Mada gateway",
      react: "React 19 Patient Portal with WebRTC video consultation & bilingual RTL interface",
      database: "Encrypted PostgreSQL 15 + AWS KMS",
      compliance: "Saudi Ministry of Health (MOH) Cloud Data Guidelines & SAMA"
    },
    metrics: [
      { label: "Booked Consultations", value: "95,000+", detail: "Conducted safely with zero data leakages" },
      { label: "Patient Satisfaction", value: "4.92 / 5", detail: "Overwhelming praise for Arabic interface clarity" },
      { label: "SEO Organic Traffic", value: "+320%", detail: "Ranked #1 for medical symptom searches in KSA" }
    ],
    deliverables: ["WordPress Medical CPT Architecture", "Laravel Encrypted API Engine", "React 19 Patient Interface", "MOH Audit Report"],
    tools: ["WordPress", "Laravel 11", "React 19", "PostgreSQL", "WebRTC", "Tailwind CSS", "Figma"],
    colorPalette: [
      { name: "Clinical Dark", hex: "#090D14" },
      { name: "Healing Teal", hex: "#0D9488" },
      { name: "Cyan Light", hex: "#38BDF8" },
      { name: "Pure Snow", hex: "#F8FAFC" }
    ],
    typography: {
      primary: "Cairo",
      secondary: "Plus Jakarta Sans",
      sampleText: "احجز استشارتك الطبية المعتمدة من وزارة الصحة بضغطة زر واحدة"
    },
    featured: false,
    liveUrl: "https://sehacare-saudi.preview.dev"
  },
  {
    id: "aura-design-system",
    title: "Aura KSA Enterprise Design System",
    arabicTitle: "نظام التصميم السحابي أورا للمؤسسات السعودية",
    client: "Aura Enterprise Technologies",
    year: "2025",
    category: "React & Design Systems",
    stackType: "react",
    tagline: "Scalable bilingual UI architecture & design tokens for modern cloud SaaS",
    arabicTagline: "نظام تصميم متكامل يدعم الاتجاهين العربي والإنجليزي مع مكتبة مكونات رياكت ١٩",
    description: "A unified enterprise design system crafted for complex multi-tenant SaaS dashboards in Saudi Arabia. Encompasses over 120 accessible components, dark-mode native tokens, bidirectional RTL typography hierarchy, and live React 19 implementation guidelines.",
    challenge: "Engineering teams in Riyadh and Dubai were duplicating frontend code, building non-standardized Arabic layouts, and failing WCAG accessibility requirements for government clients.",
    solution: "Built a mathematically unified design token infrastructure synced directly to Tailwind CSS and React 19 components with automatic RTL flipping, high-density data tables, and keyboard accessible command palettes.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    mockupScreens: [
      {
        title: "Bilingual Design Token Sandbox",
        subtitle: "Semantic color tokens, spacing scales, and automatic RTL component reflection",
        previewType: "tokens",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80"
      },
      {
        title: "Enterprise Dashboard View",
        subtitle: "Multi-cluster metrics with real-time health monitors and low-latency graphs",
        previewType: "dashboard",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
      }
    ],
    tags: ["React 19", "Design System", "Figma Tokens", "Bilingual RTL", "Tailwind CSS", "Enterprise SaaS"],
    saudiTags: ["Arabic Typography", "Bidirectional Tokens", "RTL Mirroring", "WCAG AAA", "Saudi Cloud"],
    architectureStack: {
      react: "React 19 with atomic tokens, Motion animations, Tailwind CSS & bidirectional RTL",
      compliance: "WCAG AAA Accessible Color Contrasts & RTL Usability Guidelines"
    },
    metrics: [
      { label: "Frontend Velocity", value: "+3.2x", detail: "Teams ship new features in days instead of weeks" },
      { label: "Design Debt", value: "Zero", detail: "100% token consistency across 6 regional sub-products" },
      { label: "Bundle Size", value: "Under 38kB", detail: "Tree-shakeable micro-components with zero bloat" }
    ],
    deliverables: ["Figma Design Token Studio Library", "React 19 Accessible Component Package", "Storybook Interactive Documentation", "RTL UX Best Practices Guide"],
    tools: ["React 19", "Figma", "Tailwind CSS", "Storybook", "TypeScript"],
    colorPalette: [
      { name: "Void Dark", hex: "#080A10" },
      { name: "Indigo Pulse", hex: "#6366F1" },
      { name: "Saudi Emerald", hex: "#10B981" },
      { name: "Platinum Frost", hex: "#E5E7EB" }
    ],
    typography: {
      primary: "Cairo",
      secondary: "Syne",
      sampleText: "Aura Design Tokens — المعايير الموحدة للواجهات السحابية"
    },
    featured: false,
    liveUrl: "https://aura-ds.preview.dev"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "headless-wordpress",
    number: "01",
    title: "Headless WordPress & Enterprise CMS",
    subtitle: "Turn WordPress into a decoupled, secure content engine for modern web apps",
    description: "Architecting enterprise-grade WordPress instances configured as headless CMS powerhouses. Custom ACF Pro schemas, WPGraphQL / REST API endpoints, bilingual Polylang/WPML setups with native Arabic RTL typography, and hardened cloud security.",
    deliverables: [
      "Decoupled WordPress with WPGraphQL & REST APIs",
      "Custom ACF Pro Data Schemas & Flexible Blocks",
      "Bilingual Arabic (RTL) & English (LTR) Architecture",
      "Enterprise Security Hardening & Redis Caching"
    ],
    tools: ["WordPress", "WooCommerce", "ACF Pro", "WPGraphQL", "Polylang", "Redis", "MySQL"]
  },
  {
    id: "laravel-api-fintech",
    number: "02",
    title: "Laravel Backend & Saudi Fintech / ZATCA",
    subtitle: "High-throughput APIs, Mada payment switches, and Phase 2 Fatoora compliance",
    description: "Building resilient Laravel 11 backends tailored for the Saudi Arabian regulatory ecosystem. End-to-end ZATCA Phase 2 e-invoicing cryptographic signing (XML, TLV QR), Mada/Moyasar/HyperPay payment gateways, Nafath SSO, and queue-driven microservices.",
    deliverables: [
      "Laravel 11 REST / GraphQL API Microservices",
      "ZATCA Phase 2 Fatoora Cryptographic QR Engine",
      "Saudi Payment Gateways (Mada, Moyasar, HyperPay, STC Pay)",
      "Nafath National Single Sign-On (SSO) Integration"
    ],
    tools: ["Laravel 11", "PHP 8.3", "PostgreSQL", "Redis", "ZATCA SDK", "Moyasar API", "Docker"]
  },
  {
    id: "react-frontend-systems",
    number: "03",
    title: "Modern React & Bilingual Design Systems",
    subtitle: "Pixel-perfect, high-performance interfaces engineered for both Arabic and English",
    description: "Hands-on front-end engineering in modern React 19, TypeScript, and Tailwind CSS. Implementing fluid bidirectional layouts (RTL/LTR), accessible design tokens, micro-interactions, and instant state management with zero layout shifts.",
    deliverables: [
      "Production-Ready React 19 & TypeScript Components",
      "Bidirectional (RTL / LTR) Design Systems & Tokens",
      "High-Density Enterprise Dashboards & Data Grids",
      "Fluid Motion & Tactile Micro-interactions"
    ],
    tools: ["React 19", "TypeScript", "Tailwind CSS", "Motion", "Figma", "Vite"]
  },
  {
    id: "saudi-ecommerce-cro",
    number: "04",
    title: "Saudi eCommerce & Conversion Engineering",
    subtitle: "Eliminate cart friction with native Mada, Tabby, and Tamara integrations",
    description: "Optimizing the entire purchase funnel for the Saudi and GCC consumer. Decoupling WooCommerce or building custom checkout pipelines featuring 1-click Mada transactions, Apple Pay, Tabby/Tamara installment splits, and automated ZATCA tax invoicing.",
    deliverables: [
      "High-Converting Slide-Over Mada & Apple Pay Checkout",
      "Tabby & Tamara BNPL Installment Integration",
      "ZATCA Phase 2 Automatic Tax Receipt Delivery",
      "eCommerce CRO Funnel & Heatmap Optimization"
    ],
    tools: ["WooCommerce", "Laravel Cashier", "Moyasar", "Tabby", "Tamara", "Hotjar", "Google Analytics 4"]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "nesma",
    role: "Lead Full-Stack & UI/UX Architect",
    company: "Nesma Injazat",
    location: "Riyadh, KSA",
    period: "Sept 2025 – Present",
    description: "Leading enterprise web solutions architecture, ZATCA e-invoicing integrations, and mission-critical digital product experiences across the WordPress, Laravel, and React triad.",
    highlights: [
      "Architected high-performance Laravel 11 & React 19 solutions, driving a verified 40% increase in client sales revenue across key accounts",
      "Engineered automated ZATCA Phase 2 Fatoora cryptographic signing engine with 100% compliance rate and sub-second execution",
      "Revamped web application security posture, minimizing vulnerability surface and attacks from 2.3% down to 0.02%",
      "Trained 50+ engineers and content staff across organizational units on modern headless workflows and digital security"
    ],
    skills: ["WordPress", "Laravel 11", "React 19", "ZATCA Phase 2", "Mada Gateway", "Enterprise Security", "Design Systems"],
    featured: true,
    isCurrent: true
  },
  {
    id: "ugb",
    role: "Senior Full-Stack & Interface Lead",
    company: "UGB",
    location: "Riyadh / Jeddah, KSA",
    period: "2021 – 2025",
    description: "Spearheaded multi-tenant SaaS interfaces, Headless WordPress portals, Laravel API microservices, and Odoo ERP synchronizations across the Kingdom.",
    highlights: [
      "Built multi-tenant Laravel backends and React frontends that increased client retention by 15% across regional enterprises",
      "Engineered cross-platform mobile apps with Flutter and Laravel REST backends for Saudi logistic and financial clients",
      "Optimized high-traffic databases and background job queues, cutting server downtime by 85% during peak closing periods",
      "Delivered custom Headless WordPress editorial workflows with bilingual Arabic/English content publishing"
    ],
    skills: ["Laravel", "React", "Headless WordPress", "Odoo ERP", "MySQL", "Flutter", "Bilingual RTL"],
    featured: false,
    isCurrent: false
  },
  {
    id: "the-guardianchief",
    role: "Senior Web & Systems Architect",
    company: "The Guardianchief",
    location: "KSA",
    period: "2017 – 2021",
    description: "Managed end-to-end software development lifecycle and interface engineering for 15+ concurrent enterprise and eCommerce web systems.",
    highlights: [
      "Designed and deployed custom Laravel eCommerce engines and optimized checkout funnels that boosted conversion by 20%",
      "Delivered 100% on-time project milestones within budget across government and private sector clients",
      "Integrated early Saudi payment switches and automated tax calculation workflows for regional retail networks",
      "Standardized corporate WordPress CMS deployments with custom theme frameworks and security hardening"
    ],
    skills: ["Laravel", "WordPress", "Vue / React", "eCommerce CRO", "PHP MVC", "REST APIs"],
    featured: false
  },
  {
    id: "pencil-brands",
    role: "Full-Stack Web & UX Lead",
    company: "Pencil Brands",
    location: "Riyadh / Jeddah, KSA",
    period: "2013 – 2017",
    description: "Developed user interfaces, bespoke WordPress themes, and PHP/Laravel applications for 50+ corporate clients throughout Saudi Arabia.",
    highlights: [
      "Redesigned corporate client portals resulting in conversion and inbound inquiry improvements of up to 200%",
      "Audited 85+ websites for visual persuasiveness, Arabic typography balance, and usability metrics",
      "Facilitated cross-functional developer teams delivering bespoke WordPress plugins and custom post types",
      "Conducted unit and load testing for high-profile customer-facing applications, cutting failure rates by 70%"
    ],
    skills: ["WordPress Custom Themes", "PHP / Laravel", "JavaScript", "Arabic Calligraphic UI", "Information Architecture"],
    featured: false
  },
  {
    id: "gulf-media",
    role: "Web Developer & CMS Specialist",
    company: "Digital Apex & Gulf Media",
    location: "KSA & GCC",
    period: "2010 – 2013",
    description: "Pioneered early modern responsive web experiences, bilingual portals, and custom WordPress CMS integrations for regional business entities.",
    highlights: [
      "Developed 40+ responsive bilingual websites adhering to early mobile web standards and Arabic typography",
      "Built custom PHP and MySQL web applications for regional directory and classified portals",
      "Crafted bespoke WordPress themes and eCommerce plugins before mainstream adoption across the Gulf",
      "Collaborated directly with business stakeholders across Riyadh, Jeddah, and Khobar to establish their first digital footprints"
    ],
    skills: ["WordPress", "PHP / MySQL", "HTML5 / CSS3", "Bilingual Web", "Cross-Browser Optimization"],
    featured: false
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Saudi ZATCA E-Invoicing Phase 2 Architecture",
    credentialId: "ZATCA-ARCH-2024",
    issuer: "Saudi Compliance Verified",
    year: "2024"
  },
  {
    title: "Laravel Certified Solutions Architect",
    credentialId: "LCS-99182-DEV",
    issuer: "Certified Laravel Expert",
    year: "2023"
  },
  {
    title: "TypeScript & React Enterprise Architecture",
    credentialId: "UC-VN5FVYK2",
    issuer: "Verified Credential",
    year: "2022"
  },
  {
    title: "Google Analytics & Digital Optimization Strategy",
    credentialId: "6117095441956864",
    issuer: "Google",
    year: "Certified"
  }
];

export const KEY_SKILLS = [
  { 
    category: "WordPress & CMS", 
    items: ["Headless WordPress", "WooCommerce", "ACF Pro", "WPGraphQL", "REST API", "Polylang Pro / WPML", "Custom Gutenberg Blocks", "Bedrock / Roots", "Enterprise Hardening"] 
  },
  { 
    category: "Laravel & Backend", 
    items: ["Laravel 11", "Eloquent ORM", "ZATCA Phase 2 Fatoora", "Mada / Moyasar Gateway", "Nafath SSO", "Redis Queues", "PostgreSQL", "MySQL", "REST & GraphQL", "Microservices"] 
  },
  { 
    category: "React & Modern UI", 
    items: ["React 19", "TypeScript", "Tailwind CSS", "Design Systems & Tokens", "Bilingual RTL / LTR", "Motion / Framer", "Next.js / Inertia.js", "WCAG AAA Accessibility"] 
  },
  { 
    category: "Saudi & GCC Market", 
    items: ["ZATCA Phase 2 Compliance", "Mada Debit Scheme", "Tabby & Tamara BNPL", "Nafath Digital Identity", "Vision 2030 Standards", "Saudi MOH Telehealth", "NCA ECC Baselines"] 
  }
];
