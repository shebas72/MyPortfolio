import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Download, 
  FileText, 
  Briefcase, 
  Languages, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Check, 
  ExternalLink,
  Layers,
  Award,
  Code2,
  FolderGit2,
  Github
} from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenEstimator: () => void;
  onOpenCV: () => void;
  activeSection: string;
  isArabic: boolean;
  onToggleLanguage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenEstimator, 
  onOpenCV, 
  isArabic, 
  onToggleLanguage 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when burger menu is open
  useEffect(() => {
    if (burgerMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [burgerMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setBurgerMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Shebas_Khan_CV.pdf';
    link.download = 'Shebas_Khan_Senior_Architect_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navLinks = [
    { 
      label: isArabic ? 'المشاريع والمنصات المنفذة' : 'Enterprise Projects', 
      desc: isArabic ? 'نماذج أعمال لمؤسسات سعودية رائدة' : '140+ Delivered Digital Products & Portals',
      href: '#gallery',
      icon: FolderGit2 
    },
    { 
      label: isArabic ? 'منظومة السعودية (Triad)' : 'Saudi Triad Stack', 
      desc: isArabic ? 'ووردبريس • لارافيل وتكامل زاتكا ومدى • رياكت' : 'Decoupled WP • Laravel (ZATCA/Mada) • React 19',
      href: '#saudi-stack',
      icon: Layers 
    },
    { 
      label: isArabic ? 'الكفاءات المؤسسية والخدمات' : 'Architectural Services', 
      desc: isArabic ? 'هيكلة الأنظمة وقيادة الفرق التقنية' : 'Enterprise Solutions & Technical Advisory',
      href: '#services',
      icon: Code2 
    },
    { 
      label: isArabic ? '١٥+ عاماً من الخبرة في السعودية' : '15+ Yrs Career Trajectory', 
      desc: isArabic ? 'تدرج وظيفي من ٢٠١٠ وحتى الآن في الرياض' : 'Leading tier-1 enterprise tech groups across KSA & GCC',
      href: '#experience',
      icon: Award 
    },
    { 
      label: isArabic ? 'مختبر الرموز والتصميم' : 'Interactive Design Lab', 
      desc: isArabic ? 'تجربة حية لخطوط ومنظومة التصميم ثنائية اللغة' : 'Live Design Tokens & Arabic Typography Engine',
      href: '#playground',
      icon: Sparkles 
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-5 transition-all duration-300">
        <div 
          className={`max-w-6xl mx-auto rounded-2xl border transition-all duration-300 px-3.5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
            scrolled 
              ? 'bg-[#0E111A]/95 backdrop-blur-md border-white/15 shadow-2xl shadow-black/60' 
              : 'bg-[#121520]/80 backdrop-blur-sm border-white/10 shadow-lg shadow-black/20'
          }`}
        >
          {/* Brand Logo & Title */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group" id="navbar-brand">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 via-emerald-500/15 to-white/0 border border-indigo-500/30 flex items-center justify-center font-bold text-white font-display text-base sm:text-lg tracking-wider group-hover:border-emerald-400/60 transition-colors shrink-0">
              SK
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-semibold text-white tracking-tight text-sm sm:text-base group-hover:text-indigo-300 transition-colors">
                  {DESIGNER_INFO.name}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="hidden xs:inline">{isArabic ? 'متاح للتوظيف' : 'Seeking Full-Time Role'}</span>
                  <span className="xs:hidden">{isArabic ? 'متاح' : 'Available'}</span>
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 hidden md:block">
                {isArabic ? 'ووردبريس • لارافيل • رياكت (١٥+ سنة في السعودية)' : 'WordPress • Laravel • React (15+ Yrs KSA)'}
              </p>
            </div>
          </a>

          {/* Right Actions & Burger Menu Button */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Download CV (PDF) Button - Accessible on all screens */}
            <button
              onClick={onOpenCV}
              id="navbar-cv-btn"
              title={isArabic ? 'عرض وتحميل السيرة الذاتية (PDF)' : 'View & Download CV (PDF)'}
              className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-semibold shadow-sm transition-all transform active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">{isArabic ? 'السيرة الذاتية (PDF)' : 'CV (PDF)'}</span>
              <span className="sm:hidden">CV</span>
              <Download className="w-3 h-3 text-emerald-300" />
            </button>

            {/* Language Toggle */}
            <button
              onClick={onToggleLanguage}
              id="navbar-language-toggle-btn"
              title="Toggle Arabic / English"
              className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-xs font-mono text-neutral-200 hover:text-white transition-all"
            >
              <Languages className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold text-[11px] sm:text-xs">{isArabic ? 'EN' : 'عربي'}</span>
            </button>

            {/* Quick Hire Action */}
            <button
              onClick={onOpenEstimator}
              id="navbar-hire-btn"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 transition-all transform active:scale-95"
            >
              <Briefcase className="w-3.5 h-3.5 text-indigo-200" />
              <span>{isArabic ? 'توظيف بدوام كامل' : 'Hire Full-Time'}</span>
            </button>

            {/* GitHub Profile Link */}
            <a
              href={DESIGNER_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              id="navbar-github-btn"
              title="Shebas Khan on GitHub (shebas72)"
              className="hidden md:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 text-xs font-mono text-neutral-300 hover:text-white transition-all group"
            >
              <Github className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
              <span className="hidden lg:inline text-[11px]">GitHub</span>
            </a>

            {/* UNIVERSAL BURGER MENU BUTTON - Visible on ALL screen sizes */}
            <button
              onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
              id="burger-menu-toggle-btn"
              aria-label="Open main navigation menu"
              aria-expanded={burgerMenuOpen}
              className={`flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-xl border transition-all ${
                burgerMenuOpen
                  ? 'bg-indigo-600/20 border-indigo-500/50 text-white'
                  : 'bg-white/[0.04] border-white/15 text-neutral-200 hover:text-white hover:bg-white/10 hover:border-white/25'
              }`}
            >
              {burgerMenuOpen ? (
                <X className="w-5 h-5 text-indigo-300" />
              ) : (
                <Menu className="w-5 h-5 text-neutral-200" />
              )}
              <span className="text-xs font-semibold hidden md:inline font-mono uppercase tracking-wider">
                {burgerMenuOpen ? (isArabic ? 'إغلاق' : 'Close') : (isArabic ? 'القائمة' : 'Menu')}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* BURGER MENU OVERLAY & SLIDE-OVER DRAWER (FOR ALL SCREENS) */}
      {burgerMenuOpen && (
        <div 
          className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
          onClick={() => setBurgerMenuOpen(false)}
        >
          <div 
            className="relative w-full max-w-md sm:max-w-lg h-full bg-[#0E111A] border-l border-white/10 shadow-2xl flex flex-col text-neutral-200 overflow-hidden animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#141724]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/30 to-emerald-500/20 border border-indigo-500/40 flex items-center justify-center font-bold text-white font-display text-lg">
                  SK
                </div>
                <div>
                  <h3 className="font-bold text-white text-base font-display">
                    {DESIGNER_INFO.name}
                  </h3>
                  <p className="text-[11px] text-emerald-400 font-mono">
                    {isArabic ? 'مهندس معماري أول • ١٥+ سنة في السعودية' : 'Lead Architect • 15+ Yrs in KSA'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setBurgerMenuOpen(false)}
                className="p-2 rounded-xl border border-white/10 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Menu Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
              {/* FEATURED: PDF CV DOWNLOAD & PREVIEW CARD */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-[#141824] to-[#121622] border border-emerald-500/30 shadow-xl space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white">
                          {isArabic ? 'السيرة الذاتية الرسمية (PDF)' : 'Official Candidate CV (PDF)'}
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300">
                          13 KB
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400">
                        {isArabic ? 'محدثة لعام ٢٠٢٦ • معتمدة للتوظيف' : 'Shebas_Khan_Senior_Architect_CV.pdf'}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {isArabic 
                    ? 'ملخص تنفيذي يغطي ١٥ عاماً من الخبرة في الرياض وجدة، والشهادات المعتمدة، وسجل المشاريع مع الشركات الكبرى.'
                    : 'Complete resume detailing 15+ years enterprise leadership across leading Saudi conglomerates, ZATCA Phase 2 compliance, and tech stack.'}
                </p>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => {
                      handleDownloadCV();
                    }}
                    id="drawer-download-cv-btn"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-600/20 transition-all transform active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{isArabic ? 'تحميل مباشر (PDF)' : 'Download PDF CV'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setBurgerMenuOpen(false);
                      onOpenCV();
                    }}
                    id="drawer-preview-cv-btn"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white font-medium text-xs transition-colors"
                  >
                    <span>{isArabic ? 'معاينة' : 'Preview'}</span>
                  </button>
                </div>
              </div>

              {/* MAIN NAVIGATION LINKS */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2 px-1">
                  {isArabic ? 'أقسام الموقع' : 'Navigation Sections'}
                </span>
                <div className="space-y-1.5">
                  {navLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setBurgerMenuOpen(false)}
                        className="group flex items-start gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/15 transition-all text-neutral-300 hover:text-white"
                      >
                        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-indigo-500/20 text-neutral-400 group-hover:text-indigo-300 transition-colors mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-white group-hover:text-indigo-200 transition-colors flex items-center justify-between">
                            <span>{item.label}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                          </div>
                          <p className="text-xs text-neutral-400 mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* RECRUITER & LEADERSHIP INQUIRY CTA */}
              <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 space-y-3">
                <div className="flex items-center gap-2 text-indigo-300 font-semibold text-xs">
                  <Briefcase className="w-4 h-4" />
                  <span>{isArabic ? 'استقطاب الكفاءات والوظائف القيادية' : 'Full-Time Recruitment & Interviews'}</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {isArabic 
                    ? 'جاهز للانضمام الفوري كمهندس برمجيات رئيسي أو قائد معماري (الرياض أو عن بعد).'
                    : 'Open to Lead Full-Stack Architect and Engineering Lead roles across Saudi Arabia and the GCC.'}
                </p>
                <button
                  onClick={() => {
                    setBurgerMenuOpen(false);
                    onOpenEstimator();
                  }}
                  id="drawer-inquire-hire-btn"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 transition-all transform active:scale-95"
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'جدولة مقابلة عمل / تفاصيل العرض' : 'Schedule Full-Time Interview'}</span>
                </button>
              </div>

              {/* FAST CONTACT & REGION DETAILS */}
              <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                  {isArabic ? 'معلومات الاتصال المباشر' : 'Direct Contact Information'}
                </span>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Riyadh, Saudi Arabia (KSA)</span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500">UTC+3</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Phone className="w-3.5 h-3.5 text-indigo-400" />
                    <a href="tel:+966550860467" className="hover:text-white font-mono">+966 550 860 467</a>
                  </div>
                  <a 
                    href="https://wa.me/966550860467" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[10px] text-emerald-400 hover:underline"
                  >
                    WhatsApp
                  </a>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-neutral-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="font-mono">{DESIGNER_INFO.email}</span>
                  </div>
                  <span className="text-[10px] text-indigo-400 font-mono">
                    {copiedEmail ? 'Copied!' : 'Copy'}
                  </span>
                </button>

                <a
                  href={DESIGNER_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="drawer-github-link"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-neutral-300 hover:text-white hover:border-white/15 transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                    <span className="font-mono text-xs">github.com/shebas72</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-neutral-500 group-hover:text-neutral-300 transition-colors" />
                </a>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-white/10 bg-[#141724] flex items-center justify-between text-xs text-neutral-400">
              <button
                onClick={onToggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-emerald-400 font-mono transition-colors"
              >
                <Languages className="w-3 h-3" />
                <span>{isArabic ? 'Switch to English' : 'التحويل للعربية'}</span>
              </button>

              <span className="font-mono text-[11px] text-neutral-500">
                Shebas Khan • 2026
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
