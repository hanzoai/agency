
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectsGallery from '@/components/ProjectsGallery';
import ScrollReveal from '@/utils/ScrollReveal';

const Projects = () => {
  return (
    <ScrollReveal>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />
        
        <main className="flex-grow pt-24">
          <div className="container-custom">
            <h1 className="text-[120px] md:text-[180px] font-bold tracking-tighter text-[#F97316] leading-none mb-12">
              PROJECTS
            </h1>
            
            <ProjectsGallery />
          </div>
        </main>
        
        <Footer />
      </div>
    </ScrollReveal>
  );
};

export default Projects;
