import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Menu, X, Mail, Languages, MessageSquare, Briefcase } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenEstimator: () => void;
  activeSection: string;
  isArabic: boolean;
  onToggleLanguage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator, isArabic, onToggleLanguage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const navLinks = [
    { label: isArabic ? 'المشاريع' : 'Projects', href: '#gallery' },
    { label: isArabic ? 'منظومة السعودية (Triad)' : 'Saudi Triad Stack', href: '#saudi-stack' },
    { label: isArabic ? 'الخدمات' : 'Services', href: '#services' },
    { label: isArabic ? '١٥+ عاماً من الخبرة' : '15+ Yrs Experience', href: '#experience' },
    { label: isArabic ? 'مختبر التصميم' : 'Design Lab', href: '#playground' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 transition-all duration-300">
      <div 
        className={`max-w-6xl mx-auto rounded-2xl border transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between ${
          scrolled 
            ? 'bg-[#0E111A]/90 backdrop-blur-md border-white/10 shadow-2xl shadow-black/50' 
            : 'bg-[#121520]/60 backdrop-blur-sm border-white/5 shadow-lg shadow-black/20'
        }`}
      >
        {/* Brand Logo & Title */}
        <a href="#" className="flex items-center gap-3 group" id="navbar-brand">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 via-emerald-500/10 to-white/0 border border-indigo-500/30 flex items-center justify-center font-bold text-white font-display text-lg tracking-wider group-hover:border-emerald-400/60 transition-colors">
            SK
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white tracking-tight text-sm sm:text-base group-hover:text-indigo-300 transition-colors">
                {DESIGNER_INFO.name}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{isArabic ? 'متاح للتوظيف بدوام كامل' : 'Seeking Full-Time Role'}</span>
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 hidden sm:block">
              {isArabic ? 'ووردبريس • لارافيل • رياكت (١٥+ سنة)' : 'WordPress • Laravel • React (15+ Yrs KSA)'}
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-all duration-150 text-xs sm:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Quick Action, Language Switcher & Contact */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Language Toggle Button */}
          <button
            onClick={onToggleLanguage}
            id="navbar-language-toggle-btn"
            title="Toggle Arabic / English"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-xs font-mono text-neutral-200 hover:text-white transition-all shadow-sm"
          >
            <Languages className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold">{isArabic ? 'English' : 'العربية'}</span>
          </button>

          <button
            onClick={handleCopyEmail}
            id="navbar-copy-email-btn"
            title="Copy email to clipboard"
            className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-xs font-mono text-neutral-300 hover:text-white transition-all"
          >
            <Mail className="w-3.5 h-3.5 text-indigo-400" />
            <span>{copiedEmail ? (isArabic ? 'تم النسخ!' : 'Copied!') : 'shebas.veer@gmail.com'}</span>
          </button>

          <button
            onClick={onOpenEstimator}
            id="navbar-hire-btn"
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all transform active:scale-95"
          >
            <Briefcase className="w-3.5 h-3.5 text-indigo-200" />
            <span>{isArabic ? 'توظيف بدوام كامل' : 'Hire Full-Time'}</span>
            <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
          </button>

          {/* Mobile menu hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-xl border border-white/10 text-neutral-300 hover:text-white hover:bg-white/5"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-6xl mx-auto mt-2 rounded-2xl bg-[#0F121C] border border-white/10 p-5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-3">
          <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3">
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
              {isArabic ? 'القائمة الرئيسية' : 'Navigation & Stack'}
            </span>
            <button
              onClick={onToggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs bg-white/5 border border-white/10 text-emerald-400 font-mono"
            >
              <Languages className="w-3 h-3" />
              <span>{isArabic ? 'Switch to English' : 'التحويل للعربية'}</span>
            </button>
          </div>

          <div className="flex flex-col gap-1 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-neutral-200 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 mt-3 border-t border-white/5 flex flex-col gap-2">
            <button
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 bg-white/5 text-xs text-neutral-200 font-mono"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              {copiedEmail ? 'Copied: shebas.veer@gmail.com' : 'shebas.veer@gmail.com'}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-indigo-600 text-white font-medium text-sm shadow-md"
            >
              <Briefcase className="w-4 h-4" />
              <span>{isArabic ? 'طلب مقابلة وظيفية (دوام كامل)' : 'Inquire for Full-Time Roles'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
