import React, { useState } from 'react';
import { Project } from '../types';
import { X, ExternalLink, TrendingUp, Check, Copy, Sparkles, ChevronLeft, ChevronRight, Layers, ShieldCheck, Database, Code2, Globe2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  isArabic?: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onNext, onPrev, isArabic }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  if (!project) return null;

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  const activeScreen = project.mockupScreens[activeScreenIndex] || project.mockupScreens[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#0F121C] border border-white/10 shadow-2xl overflow-hidden text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141724]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-neutral-300 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>{isArabic ? (project.arabicClient || project.client) : project.client}</span> • {project.year}
            </span>
            <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-neutral-300">
              🇸🇦 {project.saudiTags[0]}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {onPrev && (
              <button onClick={onPrev} className="p-1.5 rounded-lg border border-white/10 hover:bg-white/5 text-neutral-400 hover:text-white" title="Previous Project">
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}
            {onNext && (
              <button onClick={onNext} className="p-1.5 rounded-lg border border-white/10 hover:bg-white/5 text-neutral-400 hover:text-white" title="Next Project">
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
            <button 
              onClick={onClose}
              id="close-project-modal"
              className="p-1.5 rounded-lg border border-white/10 hover:bg-white/10 text-neutral-300 hover:text-white ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display mb-2">
              {isArabic ? (project.arabicTitle || project.title) : project.title}
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              {isArabic ? (project.arabicTagline || project.tagline) : project.tagline}
            </p>
          </div>

          {/* Interactive Mockup Screen Viewport */}
          <div className="rounded-2xl border border-white/10 bg-black/50 overflow-hidden">
            <div className="aspect-[16/9] relative bg-neutral-950 overflow-hidden">
              <img 
                src={activeScreen.image || project.coverImage} 
                alt={activeScreen.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80";
                }}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F121C] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">{activeScreen.title}</h4>
                  <p className="text-xs text-neutral-300">{activeScreen.subtitle}</p>
                </div>
              </div>
            </div>

            {/* Screen Selector Tabs */}
            {project.mockupScreens.length > 1 && (
              <div className="flex items-center gap-2 p-3 bg-white/[0.02] border-t border-white/5 overflow-x-auto">
                {project.mockupScreens.map((screen, idx) => (
                  <button
                    key={screen.title}
                    onClick={() => setActiveScreenIndex(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                      activeScreenIndex === idx 
                        ? 'bg-indigo-600 text-white shadow-md' 
                        : 'bg-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {screen.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Architecture Triad Breakdown (WordPress + Laravel + React) */}
          <div className="p-6 rounded-2xl bg-[#121522] border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-display font-bold text-sm">
                <Database className="w-4 h-4 text-emerald-400" />
                <span>{isArabic ? 'البنية التقنية التفصيلية (ووردبريس • لارافيل • رياكت)' : 'Technical Architecture Stack Breakdown'}</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Saudi Enterprise Spec
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              {project.architectureStack.wordpress && (
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-300 mb-1">
                    <Globe2 className="w-3.5 h-3.5" />
                    <span>WordPress CMS</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">{project.architectureStack.wordpress}</p>
                </div>
              )}

              {project.architectureStack.laravel && (
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mb-1">
                    <Database className="w-3.5 h-3.5" />
                    <span>Laravel &amp; ZATCA Core</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">{project.architectureStack.laravel}</p>
                </div>
              )}

              {project.architectureStack.react && (
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 mb-1">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>React 19 &amp; RTL UI</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">{project.architectureStack.react}</p>
                </div>
              )}
            </div>

            {project.architectureStack.compliance && (
              <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-center gap-2 text-xs text-emerald-300 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Compliance:</strong> {project.architectureStack.compliance}</span>
              </div>
            )}
          </div>

          {/* Metrics Spotlight */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{metric.label}</span>
                </div>
                <div className="text-2xl font-bold text-emerald-400 font-display">{metric.value}</div>
                {metric.detail && <p className="text-xs text-neutral-400 mt-1">{metric.detail}</p>}
              </div>
            ))}
          </div>

          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <h3 className="text-sm font-mono uppercase tracking-wider text-rose-400 mb-2">
                {isArabic ? 'التحدي والمتطلبات' : 'The Challenge'}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">{project.challenge}</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-400 mb-2">
                {isArabic ? 'الحل الهندسي والتصميمي' : 'The Architecture & Design Solution'}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Design System Tokens (Palette & Typography) */}
          <div className="p-6 rounded-2xl bg-[#141824] border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <h3 className="text-sm font-bold text-white font-display">
                  {isArabic ? 'رموز التصميم ونظام الألوان' : 'Design Tokens & Color System'}
                </h3>
              </div>
              <span className="text-xs text-neutral-500 font-mono">Click to copy HEX</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {project.colorPalette.map((color) => (
                <button
                  key={color.name}
                  onClick={() => handleCopyColor(color.hex)}
                  className="group p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 text-left transition-all"
                >
                  <div 
                    className="w-full h-8 rounded-lg mb-2 shadow-inner border border-white/10"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="text-[11px] font-medium text-white truncate">{color.name}</div>
                  <div className="text-[10px] font-mono text-neutral-400 flex items-center justify-between">
                    <span>{color.hex}</span>
                    {copiedHex === color.hex ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100" />}
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between text-xs text-neutral-400 gap-2">
              <div>Type System: <strong className="text-neutral-200">{project.typography.primary}</strong> + <span className="font-mono text-neutral-300">{project.typography.secondary}</span></div>
              <div className="italic text-neutral-400">"{project.typography.sampleText}"</div>
            </div>
          </div>

          {/* Testimonial if available */}
          {project.testimonial && (
            <div className="p-6 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 relative">
              <p className="text-sm italic text-indigo-200 mb-3">"{project.testimonial.quote}"</p>
              <div className="text-xs font-semibold text-white">{project.testimonial.author}</div>
              <div className="text-xs text-neutral-400">
                {project.testimonial.role}, {isArabic && project.testimonial.arabicCompany ? project.testimonial.arabicCompany : project.testimonial.company}
              </div>
            </div>
          )}

          {/* Deliverables & Tools */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-neutral-400">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="font-mono">Tools &amp; Stack:</span>
              {project.tools.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-lg bg-white/5 text-neutral-200 font-mono">{t}</span>
              ))}
            </div>
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors"
              >
                <span>Live Prototype</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
