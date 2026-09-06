import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, ShieldCheck, TrendingUp, Layers, CheckCircle2, Copy, Check, ExternalLink, Code2, Globe, Briefcase, FileText, Download } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onOpenEstimator: () => void;
  onOpenCV?: () => void;
  isArabic: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenEstimator, onOpenCV, isArabic }) => {
  const [riyadhTime, setRiyadhTime] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat(isArabic ? 'ar-SA' : 'en-US', {
          timeZone: 'Asia/Riyadh',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        }).format(new Date());
        setRiyadhTime(timeStr);
      } catch {
        setRiyadhTime('11:15 AM');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, [isArabic]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-noise border-b border-white/5">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Status Indicators & Saudi Market Tag */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-300 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-semibold">{isArabic ? 'متاح للانضمام الفوري لوظائف قيادية بدوام كامل' : 'Open to Full-Time Senior & Lead Roles • Riyadh & Remote'}</span>
            <span className="text-emerald-600">•</span>
            <span className="text-emerald-400 font-mono">2026</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-xs font-mono text-neutral-400">
            <span>📍 {isArabic ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-300 font-semibold">{riyadhTime || 'AST UTC+3'}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300">
            <span>🇸🇦 15+ Years in KSA</span>
          </div>
        </div>

        {/* Hero Main Headline */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-neutral-300 mb-4">
            <span className="text-indigo-400 font-semibold">WordPress</span>
            <span className="text-neutral-500">•</span>
            <span className="text-emerald-400 font-semibold">Laravel 11</span>
            <span className="text-neutral-500">•</span>
            <span className="text-cyan-400 font-semibold">React 19</span>
            <span className="text-neutral-500">•</span>
            <span className="text-amber-400 font-semibold">ZATCA Phase 2</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6 font-display">
            {isArabic ? (
              <>
                مهندس برمجيات ومصمم واجهات أول في{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-neutral-400">
                  السوق السعودي
                </span>
              </>
            ) : (
              <>
                Senior Full-Stack Architect &amp; UI/UX Specialist for the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-neutral-400">
                  Saudi Market.
                </span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-3xl mb-8">
            {isArabic ? (
              DESIGNER_INFO.arabicBio
            ) : (
              <>
                15+ years delivering mission-critical web platforms across Riyadh and the GCC. 
                Deep mastery in the <strong className="text-white font-medium">WordPress</strong> (Headless CMS), <strong className="text-white font-medium">Laravel 11</strong> (ZATCA Phase 2 &amp; Mada Core), and <strong className="text-white font-medium">React 19</strong> (Bilingual RTL UI) triad.
              </>
            )}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              onClick={onExploreWork}
              id="hero-explore-work-btn"
              className="px-6 py-3.5 rounded-xl font-medium text-sm bg-white text-neutral-900 hover:bg-neutral-100 shadow-xl shadow-white/5 transition-all transform active:scale-95 flex items-center gap-2.5 font-sans"
            >
              <span>{isArabic ? 'استعراض المشاريع والمنصات' : 'Explore Selected Projects'}</span>
              <ArrowDown className="w-4 h-4 text-neutral-800 animate-bounce" />
            </button>

            <button
              onClick={onOpenEstimator}
              id="hero-open-estimator-btn"
              className="px-6 py-3.5 rounded-xl font-medium text-sm bg-indigo-600/20 text-indigo-200 border border-indigo-500/30 hover:bg-indigo-600/30 hover:border-indigo-400/50 shadow-lg shadow-indigo-950/40 transition-all transform active:scale-95 flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4 text-indigo-400" />
              <span>{isArabic ? 'مناقشة فرصة عمل / مقابلة' : 'Discuss Full-Time Role / Interview'}</span>
            </button>

            {/* Direct Download & View CV */}
            {onOpenCV ? (
              <button
                onClick={onOpenCV}
                id="hero-open-cv-btn"
                className="px-5 py-3.5 rounded-xl font-medium text-sm bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-400/50 shadow-lg shadow-emerald-950/30 transition-all transform active:scale-95 flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>{isArabic ? 'السيرة الذاتية (PDF)' : 'Download CV (PDF)'}</span>
                <Download className="w-3.5 h-3.5 text-emerald-300" />
              </button>
            ) : (
              <a
                href="/Shebas_Khan_CV.pdf"
                download="Shebas_Khan_Senior_Architect_CV.pdf"
                id="hero-download-cv-link"
                className="px-5 py-3.5 rounded-xl font-medium text-sm bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-400/50 shadow-lg shadow-emerald-950/30 transition-all transform active:scale-95 flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>{isArabic ? 'تحميل السيرة الذاتية (PDF)' : 'Download CV (PDF)'}</span>
                <Download className="w-3.5 h-3.5 text-emerald-300" />
              </a>
            )}

            <button
              onClick={handleCopyEmail}
              id="hero-copy-email-btn"
              className="px-4 py-3.5 rounded-xl font-mono text-xs text-neutral-300 border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:text-white transition-colors flex items-center gap-2"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">{isArabic ? 'تم النسخ للحافظة' : 'Copied to clipboard'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-400" />
                  <span>{DESIGNER_INFO.email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Real Metrics & 15+ Years Track Record Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-white/10">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-2 text-indigo-400 mb-1">
              <Layers className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-mono text-neutral-400">
                {isArabic ? 'الخبرة الميدانية' : 'Field Track Record'}
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-display">15+ Years</div>
            <p className="text-xs text-neutral-400 mt-0.5">
              {isArabic ? 'في السوق السعودي والخليج' : 'Saudi & GCC enterprise'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-mono text-neutral-400">
                {isArabic ? 'نمو المبيعات' : 'Client ROI'}
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-display">+40% Sales</div>
            <p className="text-xs text-neutral-400 mt-0.5">
              {isArabic ? 'متوسط تحسين التحويل' : 'Average conversion lift'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-mono text-neutral-400">
                {isArabic ? 'المشاريع المنفذة' : 'Delivered'}
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-display">140+ Systems</div>
            <p className="text-xs text-neutral-400 mt-0.5">
              {isArabic ? 'منصات وتطبيقات ويب معتمدة' : 'Web apps & enterprise portals'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-mono text-neutral-400">
                {isArabic ? 'الأمان والاعتماد' : 'Security & ZATCA'}
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-display">0.02%</div>
            <p className="text-xs text-neutral-400 mt-0.5">
              {isArabic ? 'أعلى معايير الأمن السيبراني' : 'Flaw rate & ZATCA approved'}
            </p>
          </div>
        </div>

        {/* Discipline & Saudi Stack Badges */}
        <div className="mt-8 flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs text-neutral-400 font-mono mr-2">
            {isArabic ? 'التقنيات الأساسية:' : 'Core Stack & Compliance:'}
          </span>
          {[
            'WordPress Decoupled',
            'Laravel 11 API',
            'React 19',
            'ZATCA Phase 2 Fatoora',
            'Mada & Moyasar Payment',
            'Bilingual RTL / LTR',
            'Nafath SSO',
            'Vision 2030 Aligned'
          ].map((spec) => (
            <span
              key={spec}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.03] text-neutral-300 border border-white/5 hover:border-white/20 transition-colors"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
