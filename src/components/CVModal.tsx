import React, { useState } from 'react';
import { X, Download, Printer, Check, Copy, FileText, Briefcase, Mail, Phone, MapPin, ShieldCheck, Award, ExternalLink } from 'lucide-react';
import { DESIGNER_INFO, EXPERIENCES, CERTIFICATIONS, KEY_SKILLS } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  isArabic: boolean;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose, isArabic }) => {
  const [downloaded, setDownloaded] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/Shebas_Khan_CV.pdf';
    link.download = 'Shebas_Khan_Senior_Architect_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-[#0F121C] border border-white/10 shadow-2xl overflow-hidden text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#141724]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white font-display flex items-center gap-2">
                <span>Shebas_Khan_CV.pdf</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  15+ Yrs KSA
                </span>
              </h3>
              <p className="text-[11px] text-neutral-400">
                {isArabic ? 'السيرة الذاتية الرسمية للمهندس شباس خان • بصيغة PDF قابلة للتحميل' : 'Official Candidate Resume & Architectural Profile • Ready to Download'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPDF}
              id="cv-modal-download-btn"
              className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-lg shadow-emerald-600/20 transition-all transform active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloaded ? (isArabic ? 'تم التحميل!' : 'Downloaded!') : (isArabic ? 'تحميل PDF' : 'Download PDF')}</span>
            </button>

            <button
              onClick={handlePrint}
              title="Print CV"
              className="hidden sm:flex p-2 rounded-xl border border-white/10 hover:bg-white/10 text-neutral-300 hover:text-white"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl border border-white/10 hover:bg-white/10 text-neutral-400 hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable CV Sheet Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#0B0D13]">
          <div className="max-w-3xl mx-auto rounded-2xl bg-[#121520] border border-white/10 p-6 sm:p-10 shadow-xl space-y-8 print:bg-white print:text-black print:border-none print:shadow-none print:p-0">
            
            {/* CV Header */}
            <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
                    SHEBAS KHAN
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    Lead Architect
                  </span>
                </div>
                <p className="text-emerald-400 text-sm font-medium mt-1">
                  Senior Full-Stack Architect & UI/UX Specialist • 15+ Years Enterprise KSA
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Core Triad: Headless WordPress • Laravel 11 (ZATCA Phase 2 / Mada) • React 19 & RTL
                </p>
              </div>

              <div className="flex flex-col gap-1.5 text-xs text-neutral-300 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Riyadh, Saudi Arabia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <a href="tel:+966550860467" className="hover:text-white">+966 550 860 467</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <button onClick={handleCopyEmail} className="hover:text-white underline underline-offset-2">
                    {copiedEmail ? 'Copied to clipboard' : 'shebas.veer@gmail.com'}
                  </button>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2.5 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Executive Summary</span>
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-neutral-300 font-normal">
                Accomplished Senior Full-Stack and Systems Architect with 15+ years (2010–2026) driving high-performance digital transformations and mission-critical applications across Saudi Arabia and the GCC. Deep engineering authority across the enterprise triad: decoupled Headless WordPress, resilient Laravel 11 backends (certified in ZATCA Phase 2 Fatoora, Mada debit switches, and NCA cybersecurity standards), and fluid React 19 / TypeScript interfaces with native Arabic RTL design systems. Proven track record boosting revenue by 40%, cutting downtime by 85%, and delivering 140+ compliant platforms.
              </p>
            </div>

            {/* Core Competencies Grid */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Core Competencies & Saudi Market Standards</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {KEY_SKILLS.map((skillGroup) => (
                  <div key={skillGroup.category} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <h3 className="text-xs font-semibold text-white mb-2">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {skillGroup.items.map((item) => (
                        <span key={item} className="text-[11px] px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 border border-white/5">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4 flex items-center gap-2">
                <Award className="w-3.5 h-3.5" />
                <span>Professional Experience</span>
              </h2>
              <div className="space-y-6">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="relative border-l-2 border-white/10 pl-4 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white">{exp.role}</span>
                        <span className="text-xs text-neutral-400">@ {exp.company}</span>
                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            Current
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono text-neutral-400">{exp.period} • {exp.location}</span>
                    </div>
                    <p className="text-xs text-neutral-400">{exp.description}</p>
                    <ul className="space-y-1.5 pt-1">
                      {exp.highlights.map((h, idx) => (
                        <li key={idx} className="text-xs text-neutral-300 flex items-start gap-2">
                          <span className="text-emerald-400 font-bold mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Certifications & Regulatory Accreditations</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.title} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                    <div className="font-semibold text-white">{cert.title}</div>
                    <div className="text-neutral-400 font-mono text-[11px] mt-0.5">
                      {cert.issuer} • ID: {cert.credentialId} ({cert.year})
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Notice */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400">
              <span>Prepared for Enterprise Full-Time Recruitment • Riyadh, KSA</span>
              <button
                onClick={handleDownloadPDF}
                className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1"
              >
                <Download className="w-3 h-3" />
                <span>Download Shebas_Khan_CV.pdf</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
