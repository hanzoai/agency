
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectsGallery from '@/components/ProjectsGallery';
import ScrollReveal from '@/utils/ScrollReveal';
import { projectCategories } from '@/data/projectsData';

const Projects = () => {
  const [category, setCategory] = useState<string>('All');

  return (
    <ScrollReveal>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />
        
        <main className="flex-grow pt-24">
          <div className="container-custom">
            <h1 className="text-[90px] md:text-[150px] font-bold tracking-tighter text-[#F97316] leading-none mb-6">
              PROJECTS
            </h1>
            
            {/* Project category filter */}
            <div className="overflow-x-auto pb-6 mb-8 reveal">
              <div className="flex space-x-4 min-w-max">
                {projectCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                      category === cat 
                        ? 'bg-[#F97316] text-white' 
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            
            <ProjectsGallery selectedCategory={category} />
          </div>
        </main>
        
        <Footer />
      </div>
    </ScrollReveal>
  );
};

export default Projects;
