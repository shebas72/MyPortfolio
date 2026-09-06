import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { LayoutGrid, List, Search, ArrowUpRight, TrendingUp, Sparkles, Filter, ShieldCheck, Database, Globe2, Code2 } from 'lucide-react';

interface ProjectGalleryProps {
  onSelectProject: (project: Project) => void;
  isArabic: boolean;
}

const CATEGORIES: ProjectCategory[] = [
  'All',
  'WordPress + Headless',
  'Laravel API & Fintech',
  'React & Design Systems',
  'Full Triad Solutions',
  'Saudi eCommerce'
];

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onSelectProject, isArabic }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.arabicTitle && project.arabicTitle.includes(searchQuery)) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.arabicClient && project.arabicClient.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.saudiTags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="gallery" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header section with section eyebrow and title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              {isArabic ? 'سجل المشاريع والمنصات المنفذة' : 'Saudi & GCC Case Studies'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
            {isArabic ? 'أبرز المشاريع والتطبيقات' : 'Selected Works & Case Studies'}
          </h2>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base max-w-xl">
            {isArabic 
              ? 'مجموعة مختارة من المنصات الرقمية الكبرى، أنظمة الفوترة الإلكترونية زاتكا، المتاجر الإلكترونية، وتطبيقات الويب السحابية المبنية على ووردبريس، لارافيل، ورياكت.'
              : 'A curated showcase of enterprise platforms, ZATCA e-invoicing systems, luxury eCommerce, and cloud portals architected across WordPress, Laravel, and React.'}
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2 self-start md:self-auto bg-white/[0.03] border border-white/10 p-1 rounded-xl">
          <button
            onClick={() => setViewMode('grid')}
            id="view-mode-grid"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              viewMode === 'grid'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>{isArabic ? 'بطاقات' : 'Grid Cards'}</span>
          </button>
          <button
            onClick={() => setViewMode('table')}
            id="view-mode-table"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              viewMode === 'table'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span>{isArabic ? 'الأرشيف' : 'Index Archive'}</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Controls Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-white/10 mb-10">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-white text-neutral-900 font-semibold shadow-md'
                    : 'bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Filter Input */}
        <div className="relative min-w-[240px] sm:min-w-[280px]">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={isArabic ? 'ابحث بالتقنية، العميل، أو زاتكا...' : 'Search by tech, client, or ZATCA...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#121520] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white font-mono"
            >
              clear
            </button>
          )}
        </div>
      </div>

      {/* Results Count & Active Filter Indicator */}
      <div className="flex items-center justify-between text-xs text-neutral-400 mb-6 font-mono">
        <div>
          {isArabic 
            ? `عرض ${filteredProjects.length} من أصل ${PROJECTS.length} دراسة حالة موثقة`
            : `Showing ${filteredProjects.length} of ${PROJECTS.length} verified Saudi case studies`}
        </div>
        {selectedCategory !== 'All' && (
          <div className="flex items-center gap-2">
            <span>{isArabic ? 'التصنيف:' : 'Category:'} <strong className="text-indigo-400">{selectedCategory}</strong></span>
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-neutral-500 hover:text-white underline underline-offset-2"
            >
              {isArabic ? 'إعادة ضبط' : 'Reset'}
            </button>
          </div>
        )}
      </div>

      {/* Grid Cards View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const primaryMetric = project.metrics[0];
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative rounded-2xl bg-[#121522] border border-white/5 hover:border-emerald-500/40 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer hover:shadow-2xl hover:shadow-emerald-950/30 transform hover:-translate-y-1"
                id={`project-card-${project.id}`}
              >
                {/* Image Container with Hover Zoom & Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback to dependable architecture image if CDN fails
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80";
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121522] via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-black/70 backdrop-blur-md text-emerald-300 border border-emerald-500/30">
                      {project.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-lg text-[11px] font-mono bg-black/70 backdrop-blur-md text-neutral-400 border border-white/10">
                      {project.year}
                    </span>
                  </div>

                  {/* Hover Quick Inspect Indicator */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold shadow-lg">
                      <span>{isArabic ? 'فحص دراسة الحالة والمنظومة' : 'Inspect Case Study'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono text-indigo-400 tracking-wider flex items-center gap-1.5">
                        <ShieldCheck className="w-3 h-3 text-indigo-400 shrink-0" />
                        <span>{isArabic ? (project.arabicClient || project.client) : project.client}</span>
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                        {project.saudiTags[0] || 'KSA Enterprise'}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors font-display">
                      {isArabic ? (project.arabicTitle || project.title) : project.title}
                    </h3>
                    <p className="text-sm text-neutral-300 mt-2 line-clamp-2 leading-relaxed">
                      {isArabic ? (project.arabicTagline || project.tagline) : project.tagline}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex flex-col gap-3">
                    {/* Primary Metric Pill */}
                    {primaryMetric && (
                      <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5">
                        <span className="text-xs text-neutral-400">{primaryMetric.label}</span>
                        <span className="text-sm font-bold text-emerald-400 font-display flex items-center gap-1">
                          <TrendingUp className="w-3.5 h-3.5" />
                          {primaryMetric.value}
                        </span>
                      </div>
                    )}

                    {/* Stack & Saudi Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/[0.03] text-neutral-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-neutral-500">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Editorial Index / Table View */}
      {viewMode === 'table' && (
        <div className="rounded-2xl border border-white/10 bg-[#121522] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-[11px] font-mono uppercase tracking-wider text-neutral-400 bg-white/[0.01]">
                  <th className="py-4 px-6">Year</th>
                  <th className="py-4 px-6">{isArabic ? 'المشروع والجهة (سري)' : 'Project & Client (Confidential)'}</th>
                  <th className="py-4 px-6 hidden sm:table-cell">{isArabic ? 'المنظومة' : 'Category & Stack'}</th>
                  <th className="py-4 px-6 hidden md:table-cell">{isArabic ? 'النتيجة والأثر' : 'Key Metric / Result'}</th>
                  <th className="py-4 px-6 hidden lg:table-cell">{isArabic ? 'معايير السعودية' : 'Saudi Market Tags'}</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {filteredProjects.map((project) => (
                  <tr
                    key={project.id}
                    onClick={() => onSelectProject(project)}
                    className="group hover:bg-white/[0.03] transition-colors cursor-pointer"
                  >
                    <td className="py-4 px-6 font-mono text-xs text-neutral-400">
                      {project.year}
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-semibold text-white group-hover:text-emerald-300 transition-colors font-display">
                        {isArabic ? (project.arabicTitle || project.title) : project.title}
                      </div>
                      <div className="text-xs text-neutral-400 font-mono flex items-center gap-1 mt-0.5">
                        <ShieldCheck className="w-3 h-3 text-neutral-500 shrink-0" />
                        <span>{isArabic ? (project.arabicClient || project.client) : project.client}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 hidden sm:table-cell">
                      <span className="px-2.5 py-1 rounded-lg text-xs bg-white/[0.04] text-neutral-300 border border-white/5">
                        {project.category}
                      </span>
                    </td>
                    <td className="py-4 px-6 hidden md:table-cell">
                      {project.metrics[0] ? (
                        <div className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>{project.metrics[0].value}</span>
                          <span className="text-neutral-500 font-normal">({project.metrics[0].label})</span>
                        </div>
                      ) : (
                        <span className="text-neutral-500 text-xs">—</span>
                      )}
                    </td>
                    <td className="py-4 px-6 hidden lg:table-cell">
                      <div className="flex gap-1">
                        {project.saudiTags.slice(0, 2).map((st) => (
                          <span key={st} className="text-[10px] text-emerald-300 font-mono bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                            {st}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                        <span>{isArabic ? 'معاينة' : 'Inspect'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Empty State when no filters match */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 rounded-2xl border border-dashed border-white/10 bg-white/[0.01]">
          <Filter className="w-8 h-8 text-neutral-500 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">
            {isArabic ? 'لم يتم العثور على مشاريع مطابقة' : 'No matching projects found'}
          </h3>
          <p className="text-sm text-neutral-400 max-w-sm mx-auto mb-6">
            {isArabic 
              ? 'جرّب تعديل كلمات البحث أو العودة إلى تصنيف "All"'
              : 'Try adjusting your search keywords or switching back to the "All" category filter.'}
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl text-xs font-medium bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            {isArabic ? 'مسح الفلاتر' : 'Clear Filters'}
          </button>
        </div>
      )}
    </section>
  );
};
