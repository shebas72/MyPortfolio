import React, { useState } from 'react';
import { Sliders, Sparkles, Check, Copy, RefreshCw, Bell, Shield, ArrowRight, CreditCard, Languages } from 'lucide-react';

interface DesignPlaygroundProps {
  isArabic: boolean;
}

export const DesignPlayground: React.FC<DesignPlaygroundProps> = ({ isArabic }) => {
  const [accent, setAccent] = useState<'emerald' | 'indigo' | 'amber' | 'violet' | 'cyan'>('emerald');
  const [radius, setRadius] = useState<'sm' | 'md' | 'lg'>('md');
  const [isLoading, setIsLoading] = useState(false);
  const [madaActive, setMadaActive] = useState(true);
  const [sliderVal, setSliderVal] = useState(85);
  const [copiedTokens, setCopiedTokens] = useState(false);
  const [activeFont, setActiveFont] = useState<'cairo' | 'ibm' | 'syne'>('cairo');

  const colors = {
    emerald: { name: 'Saudi Green', hex: '#10B981', bg: 'bg-emerald-600', text: 'text-emerald-400', border: 'border-emerald-500' },
    indigo: { name: 'Deep Enterprise', hex: '#6366F1', bg: 'bg-indigo-600', text: 'text-indigo-400', border: 'border-indigo-500' },
    amber: { name: 'Desert Amber', hex: '#F59E0B', bg: 'bg-amber-600', text: 'text-amber-400', border: 'border-amber-500' },
    violet: { name: 'Cyber Violet', hex: '#8B5CF6', bg: 'bg-violet-600', text: 'text-violet-400', border: 'border-violet-500' },
    cyan: { name: 'Vision Cyan', hex: '#06B6D4', bg: 'bg-cyan-600', text: 'text-cyan-400', border: 'border-cyan-500' },
  };

  const radiusStyles = {
    sm: { container: 'rounded-lg', button: 'rounded-md', pill: 'rounded' },
    md: { container: 'rounded-2xl', button: 'rounded-xl', pill: 'rounded-lg' },
    lg: { container: 'rounded-3xl', button: 'rounded-2xl', pill: 'rounded-full' },
  };

  const handleTestLoad = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1400);
  };

  const handleCopyTokens = () => {
    const tokens = {
      theme: 'Saudi Enterprise Dark',
      market: 'Saudi Arabia (KSA) & GCC',
      experienceYears: '15+',
      accentColor: colors[accent].hex,
      radiusScale: radius === 'sm' ? '6px' : radius === 'md' ? '16px' : '28px',
      direction: isArabic ? 'rtl' : 'ltr',
      fontStack: activeFont === 'cairo' ? 'Cairo, sans-serif' : activeFont === 'ibm' ? 'IBM Plex Sans Arabic, sans-serif' : 'Syne, sans-serif',
      compliance: ['ZATCA Phase 2', 'Mada Verified', 'NCA ECC Aligned']
    };
    navigator.clipboard.writeText(JSON.stringify(tokens, null, 2));
    setCopiedTokens(true);
    setTimeout(() => setCopiedTokens(false), 2000);
  };

  const activeColor = colors[accent];
  const activeRadius = radiusStyles[radius];

  return (
    <section id="playground" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              {isArabic ? 'مختبر أنظمة التصميم والتوافق' : 'Bilingual Design System Lab'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
            {isArabic ? 'معاينة رموز التصميم والخطوط العربية' : 'Design Tokens & Arabic Typography Lab'}
          </h2>
          <p className="text-neutral-400 text-sm mt-1 max-w-lg">
            {isArabic 
              ? 'اختبر تناغم الألوان، حواف المكونات، وبوابات مدى والتوافق ثنائي اللغة (RTL/LTR) في الوقت الفعلي.'
              : 'Test real-time design tokens, Arabic font pairing (Cairo / IBM Plex), Mada payment switches, and bidirectional layouts.'}
          </p>
        </div>

        <button
          onClick={handleCopyTokens}
          id="copy-tokens-btn"
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] text-xs font-mono text-neutral-300 hover:text-white transition-all self-start md:self-auto"
        >
          {copiedTokens ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copiedTokens ? (isArabic ? 'تم نسخ الرموز!' : 'Tokens Copied JSON') : (isArabic ? 'تصدير رموز التصميم' : 'Export Tokens JSON')}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Controls Panel */}
        <div className="p-6 rounded-2xl bg-[#121522] border border-white/10 space-y-6">
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
              {isArabic ? 'لون الهوية الرئيسي' : 'Theme Accent Color'}
            </label>
            <div className="grid grid-cols-5 gap-2">
              {(Object.keys(colors) as Array<keyof typeof colors>).map((colKey) => (
                <button
                  key={colKey}
                  onClick={() => setAccent(colKey)}
                  className={`p-2 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                    accent === colKey ? 'border-white bg-white/10' : 'border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full ${colors[colKey].bg}`} />
                  <span className="text-[10px] font-mono text-neutral-400 capitalize">{colKey}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
              {isArabic ? 'هندسة حواف المكونات' : 'Border Radius Geometry'}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['sm', 'md', 'lg'] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setRadius(r)}
                  className={`py-2 px-3 rounded-xl border text-xs font-mono capitalize transition-all ${
                    radius === r ? 'border-emerald-400 bg-emerald-500/20 text-white' : 'border-white/5 text-neutral-400 hover:text-white'
                  }`}
                >
                  {r === 'sm' ? 'Sharp (8px)' : r === 'md' ? 'Curved (16px)' : 'Soft (28px)'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
              {isArabic ? 'الخط العربي واللاتيني' : 'Typography Stack'}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'cairo', label: 'Cairo' },
                { id: 'ibm', label: 'IBM Plex' },
                { id: 'syne', label: 'Syne' }
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFont(f.id as any)}
                  className={`py-2 px-2.5 rounded-xl border text-xs font-medium transition-all ${
                    activeFont === f.id ? 'border-emerald-400 bg-emerald-500/20 text-white' : 'border-white/5 text-neutral-400 hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
              {isArabic ? `مؤشر الأداء: ${sliderVal}٪` : `Performance Metric: ${sliderVal}%`}
            </label>
            <input
              type="range"
              min="10"
              max="100"
              value={sliderVal}
              onChange={(e) => setSliderVal(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Live Interactive Component Workbench */}
        <div className={`lg:col-span-2 p-6 sm:p-8 bg-[#0F121C] border border-white/10 ${activeRadius.container} transition-all duration-300 space-y-6`}>
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${activeColor.bg}`}></span>
              <span className="text-sm font-semibold text-white">
                {isArabic ? 'معاينة حية للمكونات' : 'Live Interactive Preview'}
              </span>
              <span className="text-xs font-mono text-neutral-500">• {activeColor.name}</span>
            </div>
            <div className={`px-2.5 py-1 ${activeRadius.pill} text-[11px] font-mono bg-white/5 text-emerald-400 border border-emerald-500/20`}>
              {isArabic ? 'معتمد عبر مدى' : 'Mada Verified'}
            </div>
          </div>

          {/* Interactive Buttons & Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
              <span className="text-[11px] font-mono text-neutral-400">
                {isArabic ? 'أزرار التفاعل والإجراء' : 'Action Button States'}
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={handleTestLoad}
                  className={`px-4 py-2 ${activeRadius.button} text-xs font-semibold text-white ${activeColor.bg} hover:opacity-90 transition-all flex items-center gap-1.5 active:scale-95 shadow-lg`}
                >
                  {isLoading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
                  <span>{isLoading ? (isArabic ? 'جارٍ التحقق...' : 'Validating...') : (isArabic ? 'تأكيد الدفع' : 'Pay via Mada')}</span>
                </button>
                <button className={`px-4 py-2 ${activeRadius.button} text-xs font-medium text-neutral-300 border border-white/10 hover:bg-white/5 transition-all`}>
                  {isArabic ? 'إلغاء' : 'Cancel'}
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
              <span className="text-[11px] font-mono text-neutral-400">
                {isArabic ? 'الربط التلقائي مع زاتكا' : 'ZATCA Clearance Switch'}
              </span>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-300">
                  {isArabic ? 'إرسال الفاتورة لهيئة الزكاة' : 'Auto Push to ZATCA API'}
                </span>
                <button
                  onClick={() => setMadaActive(!madaActive)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${madaActive ? activeColor.bg : 'bg-neutral-800'}`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${madaActive ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Live Saudi Checkout Card */}
          <div className={`p-5 bg-white/[0.02] border border-white/10 ${activeRadius.container}`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <CreditCard className={`w-4 h-4 ${activeColor.text}`} />
                <h4 className="text-sm font-semibold text-white">
                  {isArabic ? 'بوابة الدفع الإلكتروني (مدى • فيزا • أبل باي)' : 'Unified Saudi Payment Switch'}
                </h4>
              </div>
              <span className={`text-xs font-bold ${activeColor.text}`}>{sliderVal * 1.5}% Speed Lift</span>
            </div>
            <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden mb-3">
              <div 
                className={`h-full ${activeColor.bg} transition-all duration-300`} 
                style={{ width: `${sliderVal}%` }}
              />
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {isArabic 
                ? 'تم تصميم جميع عناصر الواجهة لتعمل بمرونة تامة مع النظم السحابية السعودية، مع مطابقة كاملة لشروط الهيئة الوطنية للأمن السيبراني، وهيئة الزكاة والضريبة والجمارك.'
                : 'Engineered for high-volume enterprise stability: sub-second headless WordPress cache invalidation, asynchronous Laravel 11 ZATCA signing queues, and zero layout-shift React 19 interfaces.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
