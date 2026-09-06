import React, { useState } from 'react';
import { Layers, ShieldCheck, CreditCard, Code2, Database, Terminal, ExternalLink, Check, Copy, Sparkles, Cpu, Globe2, ArrowRight, Briefcase } from 'lucide-react';
import { SAUDI_MARKET_PILLARS } from '../data/portfolioData';

interface SaudiTriadExplorerProps {
  onOpenEstimator: () => void;
  isArabic: boolean;
}

export const SaudiTriadExplorer: React.FC<SaudiTriadExplorerProps> = ({ onOpenEstimator, isArabic }) => {
  const [activeStackTab, setActiveStackTab] = useState<'wordpress' | 'laravel' | 'react' | 'integration'>('integration');
  const [copiedCode, setCopiedCode] = useState(false);

  const stackDetails = {
    integration: {
      title: "The Full Triad: WordPress + Laravel + React",
      arabicTitle: "المنظومة الثلاثية المتكاملة: ووردبريس + لارافيل + رياكت",
      tagline: "The gold standard architecture for mission-critical Saudi enterprise & government platforms",
      arabicTagline: "البنية البرمجية القياسية للمؤسسات والجهات الحكومية في المملكة العربية السعودية",
      badge: "Unified Architecture",
      description: "Combining WordPress as a decoupled headless CMS for intuitive bilingual publishing, Laravel 11 as the secure API and ZATCA Phase 2 / Mada payment backbone, and React 19 for instantaneous, bidirectional (RTL/LTR) user interfaces.",
      codeSnippet: `// Saudi Enterprise Architecture: The WP + Laravel + React Pipeline
// 1. Editorial: Headless WordPress (ACF Pro + WPGraphQL)
// 2. Core API:  Laravel 11 (ZATCA Phase 2 Fatoora + Mada Switch + Nafath SSO)
// 3. Client:    React 19 SPA (Tailwind CSS + RTL Cairo Typography)

export async function fetchSaudiPlatformData(slug: string, locale: 'ar' | 'en') {
  // Call unified Laravel API gateway
  const response = await fetch(\`https://api.ksa-platform.gov.sa/v1/content/\${slug}\`, {
    headers: {
      'Accept-Language': locale,
      'X-Saudi-ZATCA-Ready': 'true',
      'X-Mada-Gateway': 'moyasar_v2'
    }
  });
  return response.json();
}`,
      highlights: [
        "Eliminates monolithic WordPress bloat while retaining editorial freedom",
        "Military-grade security in Laravel isolated from public frontend exposure",
        "Sub-second page transitions and native Arabic RTL UX in React 19",
        "Automated ZATCA Phase 2 cryptographic e-invoicing compliance"
      ]
    },
    wordpress: {
      title: "Headless WordPress: Decoupled Content Engine",
      arabicTitle: "ووردبريس كنظام إدارة محتوى منفصل (Headless CMS)",
      tagline: "Empowering Saudi marketing & editorial teams with zero frontend constraints",
      arabicTagline: "تمكين فرق التحرير والمحتوى مع واجهة برمجية GraphQL فائقة السرعة",
      badge: "Headless CMS",
      description: "WordPress decoupled into a high-performance API backend using ACF Pro, Polylang/WPML for bilingual Arabic/English taxonomy, and WPGraphQL. Marketing teams publish instantly without risking application downtime.",
      codeSnippet: `// WPGraphQL Query for Bilingual Saudi Portal
query GetSaudiVisionInitiative($slug: ID!) {
  initiative(id: $slug, idType: SLUG) {
    title(format: RENDERED)
    arabicTitle: customField(field: "arabic_title_field")
    zatcaTaxRate: customField(field: "vat_percentage") // 15% KSA VAT
    sectorCategory: terms(taxonomy: "vision_pillar") {
      nodes { name slug }
    }
    contentBlocks { ...FlexibleEditorialLayout }
  }
}`,
      highlights: [
        "Custom ACF Pro flexible layouts for Arabic and English press rooms",
        "WPGraphQL & REST API with Redis object caching for high concurrency",
        "Granular role-based editorial permissions with single sign-on",
        "Zero server downtime during breaking news releases or national announcements"
      ]
    },
    laravel: {
      title: "Laravel 11: ZATCA Phase 2 & Mada Payment Backbone",
      arabicTitle: "لارافيل ١١: محرك الفوترة الإلكترونية (زاتكا) وبوابات مدى",
      tagline: "Cryptographic security, microservices, and Saudi banking compliance",
      arabicTagline: "الأمان المشفر والربط مع بوابات الدفع الوطنية ونظام الفوترة زاتكا",
      badge: "Secure API Core",
      description: "Enterprise Laravel 11 backend engineering designed for Saudi regulations. Handles ZATCA Phase 2 Fatoora UBL 2.1 XML generation, cryptographic digital signatures (ECDSA secp256k1), TLV base64 QR hashing, Mada/Moyasar webhooks, and Nafath SSO verification.",
      codeSnippet: `<?php
namespace App\\Services\\Zatca;

use App\\Models\\SaudiInvoice;
use App\\Services\\Mada\\MoyasarPaymentSwitch;

class ZatcaPhase2FatooraService
{
    // Generate ZATCA Phase 2 Cryptographic Hash & QR
    public function signAndSubmitInvoice(SaudiInvoice $invoice): array
    {
        $ublXml = $this->buildUbl21Xml($invoice);
        $invoiceHash = hash('sha256', $ublXml);
        $qrCodeTlv = $this->generateTlvQrCode($invoice, $invoiceHash);
        
        // Asynchronously clear with ZATCA Clearance API via Redis Job
        dispatch(new PushToZatcaPortalJob($invoice->id, $invoiceHash));
        
        return [
            'status' => 'CLEARED',
            'qr_code_base64' => $qrCodeTlv,
            'mada_reference' => $invoice->payment_id,
        ];
    }
}`,
      highlights: [
        "Native ZATCA Phase 2 e-Invoicing engine with 100% acceptance clearance rate",
        "Mada, Moyasar, HyperPay, and STC Pay payment webhook reconciliation",
        "Nafath National Single Sign-On (SSO) token exchange and citizen validation",
        "High-throughput Redis queues handling millions of daily payroll transactions"
      ]
    },
    react: {
      title: "React 19: High-Speed Bilingual UI & Design Systems",
      arabicTitle: "رياكت ١٩: واجهات فائقة السرعة وأنظمة تصميم ثنائية اللغة",
      tagline: "Bidirectional Arabic (RTL) & English (LTR) design systems crafted for KSA",
      arabicTagline: "دعم أصيل للغة العربية والاتجاه من اليمين إلى اليسار مع خطوط كلاسيكية",
      badge: "Modern Frontend",
      description: "Built with React 19, TypeScript, and Tailwind CSS. Features mathematical design tokens that flip flawlessly between Arabic (RTL) and English (LTR), instant slide-over checkouts with Mada/Tabby, and WCAG AAA accessibility.",
      codeSnippet: `// React 19 Bidirectional RTL Component with Saudi Design Tokens
import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export const SaudiPaymentSummary: React.FC<{ amount: number }> = ({ amount }) => {
  const { lang, dir, formatCurrency } = useTranslation();

  return (
    <div dir={dir} className="p-5 rounded-2xl bg-[#121522] border border-white/10 font-sans">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-neutral-400">
          {lang === 'ar' ? 'إجمالي الدفع (شامل الضريبة ١٥٪)' : 'Total Due (Incl. 15% VAT)'}
        </span>
        <span className="text-lg font-bold text-white">
          {formatCurrency(amount, 'SAR')}
        </span>
      </div>
      <div className="mt-3 flex gap-2">
        <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
          {lang === 'ar' ? 'معتمد عبر مدى' : 'Mada Verified'}
        </span>
      </div>
    </div>
  );
};`,
      highlights: [
        "Bidirectional layout engine that mirrors padding, icons, and typography natively",
        "Pairing of Cairo / IBM Plex Arabic with Syne and Plus Jakarta Sans",
        "Instant optimistic UI state with zero layout shifts or visual flickering",
        "Deep integration with modern design tokens (Tokens Studio / Figma Variables)"
      ]
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(stackDetails[activeStackTab].codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const currentData = stackDetails[activeStackTab];

  return (
    <section id="saudi-stack" className="py-20 border-t border-white/5 bg-[#090B10] relative overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                {isArabic ? 'منظومة التطوير الخاصة بالسوق السعودي' : 'Saudi Market Core Architecture'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-display">
              {isArabic ? 'منظومة ووردبريس، لارافيل، ورياكت' : 'The WordPress, Laravel & React Triad'}
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
              {isArabic 
                ? 'خبرة أكثر من ١٥ عاماً في بناء المنصات المتوافقة مع متطلبات المملكة: الفوترة الإلكترونية لهيئة الزكاة (ZATCA)، بوابات الدفع مدى، النفاذ الوطني الموحد، والواجهات ثنائية اللغة.'
                : '15+ years of verified mastery delivering the ideal decoupled stack for Saudi Arabia: Headless WordPress editorial flexibility, Laravel 11 security & ZATCA Phase 2 compliance, and reactive React 19 user interfaces.'}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenEstimator}
              id="triad-consult-btn"
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/20 transition-all flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4 text-indigo-200" />
              <span>{isArabic ? 'تواصل بشأن الوظائف القيادية' : 'Connect for Full-Time Roles'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Saudi Market Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {SAUDI_MARKET_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="p-5 rounded-2xl bg-[#121522] border border-white/5 hover:border-emerald-500/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {pillar.badge}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5 font-display group-hover:text-emerald-300 transition-colors">
                {isArabic ? pillar.arabicTitle : pillar.title}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Stack Explorer Card */}
        <div className="rounded-3xl bg-[#10131E] border border-white/10 shadow-2xl overflow-hidden">
          {/* Top Selector Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/10 bg-[#141724] px-4 sm:px-6 py-3 gap-2">
            <div className="flex items-center gap-1 sm:gap-2">
              {[
                { id: 'integration', label: isArabic ? 'المنظومة الكاملة' : 'Full Triad Integration', icon: Layers },
                { id: 'wordpress', label: isArabic ? 'ووردبريس المنفصل' : 'WordPress Headless', icon: Globe2 },
                { id: 'laravel', label: isArabic ? 'لارافيل وزاتكا' : 'Laravel & ZATCA API', icon: Database },
                { id: 'react', label: isArabic ? 'رياكت وتصميم RTL' : 'React 19 & RTL UI', icon: Code2 }
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeStackTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveStackTab(tab.id as any)}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] text-xs font-mono text-neutral-300 transition-colors"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
              <span>{copiedCode ? (isArabic ? 'تم النسخ!' : 'Copied Code!') : (isArabic ? 'نسخ الكود' : 'Copy Code')}</span>
            </button>
          </div>

          {/* Tab Content & Code Inspector Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
            {/* Left: Strategic Context & Architecture Highlights */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 mb-3">
                  <Cpu className="w-3 h-3 text-indigo-400" />
                  <span>{currentData.badge}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
                  {isArabic ? currentData.arabicTitle : currentData.title}
                </h3>
                <p className="text-xs font-medium text-emerald-400 mb-4">
                  {isArabic ? currentData.arabicTagline : currentData.tagline}
                </p>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  {currentData.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                    {isArabic ? 'مزايا البنية البرمجية في السوق السعودي:' : 'Saudi Enterprise Architecture Highlights:'}
                  </span>
                  {currentData.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Saudi Compliance Micro-Badge */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{isArabic ? 'متوافق مع هيئة الزكاة والضريبة والجمارك (ZATCA)' : 'ZATCA Phase 2 & SAMA Aligned'}</span>
                </span>
                <span className="text-emerald-400 font-bold">15+ Yrs KSA</span>
              </div>
            </div>

            {/* Right: Syntax-Highlighted Code / Schema Inspector */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center justify-between px-4 py-2.5 rounded-t-xl bg-[#090C14] border-t border-x border-white/10 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70 inline-block" />
                  </div>
                  <span className="text-neutral-300 ml-2">
                    {activeStackTab === 'wordpress' ? 'schema.graphql' : activeStackTab === 'laravel' ? 'ZatcaFatooraController.php' : activeStackTab === 'react' ? 'SaudiPaymentSummary.tsx' : 'SaudiArchitecturePipeline.ts'}
                  </span>
                </div>
                <span className="text-[11px] text-neutral-500 font-mono">Production Tested</span>
              </div>

              <div className="p-4 sm:p-5 rounded-b-xl bg-[#07090F] border border-white/10 overflow-x-auto text-xs font-mono text-neutral-300 leading-relaxed font-normal">
                <pre className="whitespace-pre">
                  <code>{currentData.codeSnippet}</code>
                </pre>
              </div>

              {/* Bottom Quick Test Strip */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-neutral-500 px-2">
                <span>⚡ Latency: &lt; 2.8s across KSA networks</span>
                <span>🔒 Strict CORS &amp; Cryptographic Stamping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
