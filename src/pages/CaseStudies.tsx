
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectsGallery from '@/components/ProjectsGallery';
import ScrollReveal from '@/utils/ScrollReveal';
import { projectCategories } from '@/data/projectsData';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const CaseStudies = () => {
  const [category, setCategory] = useState<string>('All');
  
  return (
    <ScrollReveal>
      <div className="min-h-screen flex flex-col bg-beige-50 text-black">
        <Navbar />
        
        <main className="flex-grow pt-24">
          <div className="container-custom">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none mb-12 pt-12 text-[#ffffff]">
              CASE<br />STUDIES
            </h1>
            
            {/* Featured case studies */}
            <div className="mb-16 reveal">
              <h2 className="text-2xl md:text-4xl font-bold mb-8">Featured Projects</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative aspect-[4/3] overflow-hidden group reveal">
                  <img 
                    src="/lovable-uploads/919bfa95-912a-489f-a859-7a42e0d7d435.png" 
                    alt="TrillerFest Music Festival" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white uppercase">TRILLERFEST</h3>
                    <p className="text-white/80 mt-1 text-sm uppercase font-medium">LARGEST VIRTUAL MUSIC FESTIVAL IN HISTORY</p>
                    <Link to="/case-study-trillerfest" className="mt-4 lets-talk-btn w-fit">
                      Explore
                      <ArrowUpRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
                
                <div className="relative aspect-[4/3] overflow-hidden group reveal">
                  <img 
                    src="/lovable-uploads/7269bbbd-37f4-4f9e-af2b-4e6a47122f10.png" 
                    alt="KROTE Motorcycle" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white uppercase">KROTE VILLA</h3>
                    <p className="text-white/80 mt-1 text-sm uppercase font-medium">A NIFTY DUPLEX NEAR FLORIDA, USA</p>
                    <button className="mt-4 lets-talk-btn w-fit">
                      Explore
                      <ArrowUpRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project category filter */}
            <div className="overflow-x-auto pb-6 mb-8 reveal">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">All Projects</h2>
              <div className="flex space-x-4 min-w-max">
                {projectCategories.map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setCategory(cat)} 
                    className={`py-2 px-4 text-sm font-medium transition-colors ${
                      category === cat ? 'bg-black text-white' : 'bg-transparent text-black hover:bg-black/10'
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

export default CaseStudies;
