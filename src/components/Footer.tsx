import React, { useState } from 'react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { Mail, Phone, Copy, Check, ArrowUp, Github, Linkedin, MessageCircle, ShieldCheck, FileText, Download, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenEstimator: () => void;
  onOpenCV?: () => void;
  isArabic: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEstimator, onOpenCV, isArabic }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="about" className="pt-20 pb-12 border-t border-white/10 bg-[#0A0C12] text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/5">
          {/* Identity & 15+ Yrs KSA Market */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 font-display text-lg">
                SK
              </div>
              <div>
                <span className="font-bold text-lg text-white font-display block">{DESIGNER_INFO.name}</span>
                <span className="text-xs text-neutral-400 font-mono">15+ Yrs • Riyadh &amp; GCC Enterprise</span>
              </div>
            </div>

            <p className="text-sm text-neutral-300 max-w-md leading-relaxed">
              {isArabic 
                ? 'استشاري ومهندس برمجيات متقدم متخصص في منظومة ووردبريس، لارافيل، ورياكت، مع خبرة ١٥+ عاماً في الفوترة الإلكترونية زاتكا، بوابات مدى، وأنظمة التصميم ثنائية اللغة في المملكة العربية السعودية.'
                : 'Senior full-stack architect specializing in the WordPress (Headless), Laravel 11 (API & ZATCA), and React 19 triad with 15+ years of verified trajectory across Saudi Arabia and the GCC.'}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{isArabic ? 'متاح للانضمام بدوام كامل • ٢٠٢٦' : 'Actively Seeking Full-Time Roles • 2026'}</span>
              </span>
              <span className="text-xs text-neutral-400 font-mono">🇸🇦 Riyadh, KSA</span>
            </div>
          </div>

          {/* Quick Connect & Direct Channels */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase text-white font-semibold block">
              {isArabic ? 'قنوات التواصل المباشر' : 'Direct Channels'}
            </span>
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 text-xs text-neutral-300 hover:text-white transition-colors group"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              <span className="font-mono">{copied ? 'Email Copied!' : DESIGNER_INFO.email}</span>
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100" />}
            </button>
            <a
              href={`tel:${DESIGNER_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-xs text-neutral-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span className="font-mono">{DESIGNER_INFO.phone}</span>
            </a>
            <a
              href={DESIGNER_INFO.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isArabic ? 'محادثة مباشرة عبر واتساب' : 'WhatsApp (+966 55 086 0467)'}</span>
            </a>
            <a
              href={DESIGNER_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-github-link"
              className="flex items-center gap-2 text-xs text-neutral-300 hover:text-white transition-colors group"
            >
              <Github className="w-4 h-4 text-indigo-400" />
              <span className="font-mono">github.com/shebas72</span>
              <ExternalLink className="w-3 h-3 text-neutral-500 group-hover:text-neutral-300 transition-colors" />
            </a>
          </div>

          {/* Action & Regulatory Assurance */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase text-white font-semibold block">
              {isArabic ? 'فرص العمل والتوظيف' : 'Full-Time Recruitment'}
            </span>
            <p className="text-xs text-neutral-400">
              {isArabic 
                ? 'تبحث عن مهندس برمجيات أول أو قائد تقني لمنظومة ووردبريس ولارافيل ورياكت في شركتك؟' 
                : 'Seeking a Senior Full-Stack Architect to spearhead your enterprise engineering team in KSA?'}
            </p>
            <div className="flex flex-col gap-2 pt-1">
              {onOpenCV ? (
                <button
                  onClick={onOpenCV}
                  id="footer-download-cv-btn"
                  className="w-full py-2.5 px-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isArabic ? 'تحميل السيرة الذاتية (PDF CV)' : 'Download Candidate CV (PDF)'}</span>
                  <Download className="w-3.5 h-3.5 text-emerald-300" />
                </button>
              ) : (
                <a
                  href="/Shebas_Khan_CV.pdf"
                  download="Shebas_Khan_Senior_Architect_CV.pdf"
                  id="footer-download-cv-link"
                  className="w-full py-2.5 px-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isArabic ? 'تحميل السيرة الذاتية (PDF CV)' : 'Download Candidate CV (PDF)'}</span>
                  <Download className="w-3.5 h-3.5 text-emerald-300" />
                </a>
              )}

              <button
                onClick={onOpenEstimator}
                id="footer-start-brief-btn"
                className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-lg shadow-indigo-600/20"
              >
                {isArabic ? 'تواصل لتحديد مقابلة عمل' : 'Schedule Full-Time Interview'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Compliance Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} {DESIGNER_INFO.name}. All rights reserved.</span>
            <span className="text-neutral-600">•</span>
            <span className="text-emerald-400 font-mono">ZATCA Phase 2 &amp; SAMA Aligned</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400 font-mono">15+ Years in Saudi Market</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
          >
            <span>{isArabic ? 'إلى الأعلى' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
