import React, { useState } from 'react';
import { Project } from './types';
import { PROJECTS } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SaudiTriadExplorer } from './components/SaudiTriadExplorer';
import { ProjectGallery } from './components/ProjectGallery';
import { ProjectModal } from './components/ProjectModal';
import { DesignPlayground } from './components/DesignPlayground';
import { ServicesAndExperience } from './components/ServicesAndExperience';
import { ProjectEstimatorModal } from './components/ProjectEstimatorModal';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [isArabic, setIsArabic] = useState(false);

  const toggleLanguage = () => {
    setIsArabic((prev) => !prev);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setSelectedProject(PROJECTS[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    setSelectedProject(PROJECTS[prevIndex]);
  };

  const scrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      dir={isArabic ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-[#0B0D13] text-[#E4E7EC] selection:bg-emerald-500/30 selection:text-emerald-200 ${
        isArabic ? 'font-arabic' : 'font-sans'
      }`}
    >
      <Navbar
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        activeSection="work"
        isArabic={isArabic}
        onToggleLanguage={toggleLanguage}
      />

      <main>
        <Hero
          onExploreWork={scrollToGallery}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
          isArabic={isArabic}
        />

        {/* Saudi Market Core Architecture: WordPress + Laravel + React */}
        <SaudiTriadExplorer
          onOpenEstimator={() => setIsEstimatorOpen(true)}
          isArabic={isArabic}
        />

        {/* Selected Works & Case Studies */}
        <ProjectGallery
          onSelectProject={(p) => setSelectedProject(p)}
          isArabic={isArabic}
        />

        {/* Interactive Design & Typography Tokens Lab */}
        <DesignPlayground isArabic={isArabic} />

        {/* 15+ Years Industry Experience & Services */}
        <ServicesAndExperience
          onOpenEstimator={() => setIsEstimatorOpen(true)}
          isArabic={isArabic}
        />
      </main>

      <Footer
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        isArabic={isArabic}
      />

      {/* Case Study Inspector Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNext={handleNextProject}
        onPrev={handlePrevProject}
        isArabic={isArabic}
      />

      {/* Project Brief Estimator Modal */}
      <ProjectEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        isArabic={isArabic}
      />
    </div>
  );
}
