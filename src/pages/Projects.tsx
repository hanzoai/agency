
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
      <div className="min-h-screen flex flex-col bg-beige-50 text-black">
        <Navbar />
        
        <main className="flex-grow pt-24">
          <div className="container-custom">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-12 pt-12 text-[#ffffff]">
              Projects
            </h1>
            
            {/* Project category filter */}
            <div className="overflow-x-auto pb-6 mb-8 reveal">
              <div className="flex space-x-4 min-w-max">
                {projectCategories.map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setCategory(cat)} 
                    className={`py-2 px-4 text-sm font-medium transition-colors ${
                      category === cat ? 'bg-black text-white' : 'bg-transparent text-black hover:bg-black/10'
                    }`}
                    data-slot="filter-button"
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
