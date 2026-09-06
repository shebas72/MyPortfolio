import React, { useState } from 'react';
import { SERVICES, EXPERIENCES, CERTIFICATIONS, KEY_SKILLS } from '../data/portfolioData';
import { CheckCircle, Award, Briefcase, ChevronDown, ChevronUp, ArrowRight, Code, Palette, Zap, ShieldCheck } from 'lucide-react';

interface ServicesAndExperienceProps {
  onOpenEstimator: () => void;
  isArabic: boolean;
}

export const ServicesAndExperience: React.FC<ServicesAndExperienceProps> = ({ onOpenEstimator, isArabic }) => {
  const [expandedExp, setExpandedExp] = useState<string>('nesma');

  return (
    <div className="py-20 border-t border-white/5 space-y-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Services Section */}
      <section id="services">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              {isArabic ? 'الخبرات والكفاءات المعمارية' : 'Core Architecture & Technical Capabilities'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-display">
            {isArabic ? 'مجالات التخصص المؤسسي والحلول التقنية' : 'Enterprise Specializations & Systems'}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
            {isArabic 
              ? 'خبرات معمارية متقدمة في قيادة الفرق وتطوير المنظومات المؤسسية: ووردبريس كنظام محتوى headless، لارافيل للواجهات البرمجية وتكامل زاتكا ومدى، ورياكت للواجهات التفاعلية ثنائية اللغة.'
              : 'Senior architectural and engineering capabilities honed over 15+ years. Proven track record leading headless WordPress decoupled migrations, high-throughput Laravel & ZATCA Phase 2 API pipelines, and bilingual React 19 design systems.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#121522] border border-white/5 hover:border-emerald-500/30 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-emerald-400 font-semibold px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                    {srv.number}
                  </span>
                  <div className="flex gap-1">
                    {srv.tools.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] font-mono text-neutral-400 bg-white/[0.03] px-2 py-0.5 rounded border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors font-display mb-2">
                  {srv.title}
                </h3>
                <p className="text-xs font-medium text-neutral-400 mb-3">{srv.subtitle}</p>
                <p className="text-sm text-neutral-300 leading-relaxed mb-6">{srv.description}</p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-2">
                  {isArabic ? 'المخرجات الأساسية:' : 'Core Deliverables:'}
                </span>
                <ul className="space-y-1.5">
                  {srv.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Credentials Timeline (15+ Years) */}
      <section id="experience" className="pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                {isArabic ? 'المسار المهني عبر ١٥ عاماً' : 'Saudi & GCC Career Trajectory'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-display">
              {isArabic ? 'أكثر من ١٥ عاماً من الخبرة والريادة' : '15+ Years Industry Track Record'}
            </h2>
            <p className="text-neutral-400 text-sm mt-2 max-w-xl">
              {isArabic 
                ? 'مسيرة متواصلة منذ عام ٢٠١٠ في بناء المنظومات الرقمية في الرياض وجدة والخليج، وتأمين البنية التحتية لمنصات التجارة والبنوك والحكومة.'
                : 'Continuous hands-on leadership from 2010 to 2026 spanning high-traffic enterprise portals, ZATCA e-invoicing compliance, and conversion-focused web apps in Saudi Arabia.'}
            </p>
          </div>

          <button
            onClick={onOpenEstimator}
            id="book-consultation-btn"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg transition-all self-start md:self-auto flex items-center gap-2"
          >
            <span>{isArabic ? 'تواصل لفرص العمل' : 'Inquire for Full-Time Roles'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-4">
            {EXPERIENCES.map((exp) => {
              const isExpanded = expandedExp === exp.id;
              return (
                <div
                  key={exp.id}
                  className={`rounded-2xl border transition-all ${
                    isExpanded ? 'bg-[#121522] border-emerald-500/40 p-6 shadow-xl shadow-emerald-950/20' : 'bg-[#0E111A] border-white/5 p-5 hover:border-white/15'
                  }`}
                >
                  <div
                    onClick={() => setExpandedExp(isExpanded ? '' : exp.id)}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-white font-display">{exp.role}</span>
                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            {isArabic ? 'الحالي' : 'Current'}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-neutral-400 mt-0.5">
                        <strong className="text-neutral-200">{exp.company}</strong> • {exp.location} • <span className="font-mono text-emerald-400">{exp.period}</span>
                      </div>
                    </div>
                    <button className="text-neutral-400 hover:text-white p-1">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-white/5 space-y-3 animate-in fade-in duration-150">
                      <p className="text-xs text-neutral-300 leading-relaxed">{exp.description}</p>
                      <ul className="space-y-1.5">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                            <span className="text-emerald-400 font-bold mt-0.5">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.skills.map((s) => (
                          <span key={s} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-neutral-300 border border-white/5">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Certifications & Tooling Matrix Sidebar */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[#121522] border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>{isArabic ? 'الاعتمادات والتراخيص الموثقة' : 'Verified Certifications'}</span>
              </div>
              <div className="space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.credentialId} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-xs font-semibold text-white">{cert.title}</div>
                    <div className="text-[11px] font-mono text-neutral-400 mt-1 flex items-center justify-between">
                      <span>ID: {cert.credentialId}</span>
                      <span className="text-emerald-400">{cert.issuer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#121522] border border-white/10">
              <span className="text-xs font-mono uppercase text-neutral-400 block mb-3">
                {isArabic ? 'مصفوفة المهارات والتقنيات' : 'Core Tooling & Market Matrix'}
              </span>
              <div className="space-y-4">
                {KEY_SKILLS.map((grp) => (
                  <div key={grp.category}>
                    <div className="text-[11px] font-semibold text-emerald-300 mb-1.5">{grp.category}</div>
                    <div className="flex flex-wrap gap-1">
                      {grp.items.map((item) => (
                        <span key={item} className="px-2 py-0.5 rounded text-[10px] bg-white/[0.03] text-neutral-300 border border-white/5">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
