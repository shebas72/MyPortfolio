import React, { useState } from 'react';
import { X, Send, Check, Copy, Briefcase, MessageSquare, MapPin, Building2, Calendar, Phone, Mail, Sparkles } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  isArabic: boolean;
}

export const ProjectEstimatorModal: React.FC<ProjectEstimatorModalProps> = ({ isOpen, onClose, isArabic }) => {
  const [targetRole, setTargetRole] = useState('Lead Full-Stack Architect');
  const [workModel, setWorkModel] = useState<'On-Site (Riyadh)' | 'Hybrid (Riyadh)' | 'Remote (KSA/GCC)'>('On-Site (Riyadh)');
  const [recruiterName, setRecruiterName] = useState('');
  const [recruiterEmail, setRecruiterEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneOrLinkedin, setPhoneOrLinkedin] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [copiedBio, setCopiedBio] = useState(false);

  if (!isOpen) return null;

  const getInterviewBrief = () => {
    return `FULL-TIME CAREER OPPORTUNITY & INTERVIEW INQUIRY
To: Shebas Khan (Senior Full-Stack Architect - 15+ Yrs KSA)
From: ${recruiterName || 'Hiring Manager'} ${companyName ? `at ${companyName}` : ''}
Email: ${recruiterEmail || 'Not specified'}
Contact/LinkedIn: ${phoneOrLinkedin || 'Not specified'}
Target Position: ${targetRole}
Work Model: ${workModel}

Role & Opportunity Overview:
${message || 'We are interested in interviewing Shebas Khan for a full-time senior engineering leadership role.'}

Candidate Profile Reference:
- 15+ Years in Saudi Arabia & GCC (2010–2026)
- Core Triad: WordPress (Headless CMS) • Laravel 11 (API & ZATCA Phase 2) • React 19 (Design Systems & RTL)
- Location: Riyadh, Saudi Arabia`;
  };

  const handleCopyProfile = () => {
    const text = `SHEBAS KHAN — SENIOR FULL-STACK ARCHITECT (15+ YEARS KSA)
Location: Riyadh, Saudi Arabia
Email: ${DESIGNER_INFO.email} | Phone: ${DESIGNER_INFO.phone}
Target Roles: Lead Architect, Senior Full-Stack Engineer, Technical Lead
Core Specialization: WordPress (Headless CMS) • Laravel 11 (API, ZATCA Phase 2, Mada) • React 19 (High-Performance UI)
Track Record: 15+ years delivering enterprise platforms, government integrations, and high-traffic systems across Saudi Arabia.`;
    navigator.clipboard.writeText(text);
    setCopiedBio(true);
    setTimeout(() => setCopiedBio(false), 2000);
  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(getInterviewBrief());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Full-Time Opportunity: ${targetRole} - ${companyName || recruiterName || 'Enterprise'}`);
    const body = encodeURIComponent(getInterviewBrief());
    window.open(`mailto:${DESIGNER_INFO.email}?subject=${subject}&body=${body}`, '_blank');
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(getInterviewBrief());
    window.open(`https://wa.me/966550860467?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-[#0F121C] border border-white/10 shadow-2xl overflow-hidden text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141724]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                {isArabic ? 'استقطاب كفاءات • فرصة عمل بدوام كامل' : 'Full-Time Recruitment & Interview Inquiry'}
              </h3>
              <p className="text-[11px] text-emerald-400 font-mono">
                {isArabic ? 'متاح للانضمام الفوري • الرياض، المملكة العربية السعودية' : 'Actively Seeking Senior & Lead Roles • Riyadh, KSA'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyProfile}
              title="Copy Candidate Bio & Summary"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-xs font-mono text-neutral-300 hover:text-white transition-all"
            >
              {copiedBio ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
              <span>{copiedBio ? (isArabic ? 'تم النسخ' : 'Copied') : (isArabic ? 'نسخ السيرة' : 'Copy Candidate Bio')}</span>
            </button>
            <button 
              onClick={onClose} 
              className="p-1.5 rounded-lg border border-white/10 hover:bg-white/10 text-neutral-400 hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Candidate Fast-Facts Banner */}
        <div className="px-6 py-3 bg-indigo-950/30 border-b border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span><strong>Shebas Khan</strong> • 15+ Years in KSA (2010–2026)</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-400 font-mono text-[11px]">
            <span>🇸🇦 WordPress • Laravel 11 • React 19</span>
            <span>📍 Riyadh, KSA</span>
          </div>
        </div>

        <form onSubmit={handleSendEmail} className="p-6 sm:p-8 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Target Role Selection */}
          <div>
            <label className="text-xs font-mono uppercase text-neutral-400 block mb-2">
              {isArabic ? '١. المسمى الوظيفي المستهدف' : '1. Target Role Being Recruited'}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                'Lead Full-Stack Architect',
                'Senior Laravel & ZATCA Phase 2 Engineer',
                'Senior React & Frontend UI Architect',
                'Headless WordPress & Systems Specialist',
                'Engineering Manager / Tech Lead'
              ].map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setTargetRole(role)}
                  className={`p-3 rounded-xl border text-xs text-left font-medium transition-all ${
                    targetRole === role
                      ? 'border-indigo-500 bg-indigo-500/15 text-indigo-200 shadow-md'
                      : 'border-white/5 bg-white/[0.02] text-neutral-400 hover:text-white hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{role}</span>
                    {targetRole === role && <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Work Model */}
          <div>
            <label className="text-xs font-mono uppercase text-neutral-400 block mb-2">
              {isArabic ? '٢. نمط العمل ومقر الوظيفة' : '2. Work Arrangement & Location'}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['On-Site (Riyadh)', 'Hybrid (Riyadh)', 'Remote (KSA/GCC)'] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setWorkModel(m)}
                  className={`p-2.5 rounded-xl border text-xs text-center font-medium transition-all ${
                    workModel === m
                      ? 'border-emerald-500 bg-emerald-500/15 text-emerald-300 font-semibold'
                      : 'border-white/5 bg-white/[0.02] text-neutral-400 hover:text-white'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Recruiter / Company Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-xs font-mono uppercase text-neutral-400 block mb-1">
                {isArabic ? 'اسم المسؤول / المستقطب *' : 'Recruiter / Hiring Lead *'}
              </label>
              <input 
                type="text" 
                required
                value={recruiterName}
                onChange={(e) => setRecruiterName(e.target.value)}
                placeholder="e.g. Tariq Al-Ghamdi"
                className="w-full bg-[#141724] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="text-xs font-mono uppercase text-neutral-400 block mb-1">
                {isArabic ? 'البريد المؤسسي *' : 'Work Email *'}
              </label>
              <input 
                type="email" 
                required
                value={recruiterEmail}
                onChange={(e) => setRecruiterEmail(e.target.value)}
                placeholder="tariq@enterprise.sa"
                className="w-full bg-[#141724] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="text-xs font-mono uppercase text-neutral-400 block mb-1">
                {isArabic ? 'الشركة / الجهة *' : 'Company / Entity *'}
              </label>
              <input 
                type="text" 
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. Riyadh Fintech Co."
                className="w-full bg-[#141724] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-mono uppercase text-neutral-400 block mb-1">
              {isArabic ? 'الهاتف أو حساب لينكد إن (اختياري)' : 'Phone or LinkedIn Profile (Optional)'}
            </label>
            <input 
              type="text" 
              value={phoneOrLinkedin}
              onChange={(e) => setPhoneOrLinkedin(e.target.value)}
              placeholder="+966 5X XXX XXXX or linkedin.com/in/..."
              className="w-full bg-[#141724] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="text-xs font-mono uppercase text-neutral-400 block mb-1">
              {isArabic ? 'تفاصيل الفرصة الوظيفية / حزمة المزايا' : 'Opportunity Summary / Team Context'}
            </label>
            <textarea 
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={isArabic ? 'أدخل نبذة عن المنصب، الفريق التقني، وموعد بدء المقابلات...' : 'Share brief context about the engineering team, tech stack priorities, and timeline for interviews...'}
              className="w-full bg-[#141724] border border-white/10 rounded-xl p-3 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500 resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-semibold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp (+966 55 086 0467)</span>
              </button>

              <button
                type="button"
                onClick={handleCopyBrief}
                className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 text-neutral-300 text-xs font-mono transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
                <span>{copied ? 'Copied' : 'Copy Inquiry'}</span>
              </button>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all transform active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isArabic ? 'إرسال دعوة للمقابلة' : 'Send Interview Invitation'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
