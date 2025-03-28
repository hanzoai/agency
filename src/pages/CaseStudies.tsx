import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoCard from '@/components/VideoCard';
import { BentoGrid, BentoCard } from '@/components/BentoGrid';
import ParallaxItem from '@/components/ParallaxItem';
import ScrollReveal from '@/utils/ScrollReveal';
import GlobalMuteButton from '@/components/GlobalMuteButton';
import { caseStudiesData } from '@/data/caseStudiesData';

interface Project {
  id: string;
  title: string;
  youtubeId: string;
  description: string;
  size: "small" | "medium" | "large";
  thumbnailUrl?: string;
  className?: string;
}

const CaseStudies = () => {
  // Extract YouTube IDs from case study data
  const getYoutubeIdFromUrl = (url: string | undefined): string => {
    if (!url) return '';
    const match = url.match(/embed\/([^?]+)/);
    return match ? match[1] : '';
  };

  // Define project size based on importance or other criteria
  const getProjectSize = (id: string): "small" | "medium" | "large" => {
    const largeProjects = ['trillerfest', 'damon-motorcycles'];
    return largeProjects.includes(id) ? 'large' : 'medium';
  };

  // Map from caseStudiesData to the format required by this component
  const projectsFromCaseStudies: Project[] = Object.values(caseStudiesData).map(caseStudy => {
    // Handle ID mapping for display purposes
    const displayId = caseStudy.id === 'damon-motorcycles' ? 'damon' : caseStudy.id;
    
    return {
      id: displayId, // Use the display ID for UI, but keep original ID for links
      title: caseStudy.title,
      youtubeId: getYoutubeIdFromUrl(caseStudy.videoUrl),
      description: caseStudy.subtitle,
      size: getProjectSize(caseStudy.id),
      className: "h-full"
    };
  });

  useEffect(() => {
    // Set the body to dark theme
    document.body.classList.add('dark');
    
    return () => {
      document.body.classList.remove('dark');
    };
  }, []);

  return (
    <ScrollReveal>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <GlobalMuteButton />
        
        <main className="pt-24">
          <header className="pt-16 md:pt-24 pb-12 container mx-auto px-6">
            <ParallaxItem speed={0.1}>
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none mb-12 pt-12 text-white text-center md:text-left">
                CASE STUDIES
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
                Showcasing our most impactful digital campaigns and creative work
              </p>
            </ParallaxItem>
          </header>
          
          <section id="gallery" className="py-8 md:py-16 bg-gradient-to-b from-black via-black/95 to-black/90">
            <div className="container-custom">
              <BentoGrid className="max-w-7xl mx-auto gap-6 md:gap-8">
                {projectsFromCaseStudies.map((project, index) => (
                  <ParallaxItem 
                    key={project.id} 
                    speed={project.id === 'cover-build' ? 0 : 0.03 * (index % 3 + 1)} 
                    className="h-full"
                  >
                    <BentoCard 
                      size={project.size}
                      className={project.className}
                    >
                      <VideoCard 
                        title={project.title} 
                        youtubeId={project.youtubeId}
                        description={project.description}
                        index={index} 
                        projectId={project.id === 'damon' ? 'damon-motorcycles' : project.id} // Map display ID back to data ID for links
                        thumbnailUrl={project.thumbnailUrl}
                      />
                    </BentoCard>
                  </ParallaxItem>
                ))}
              </BentoGrid>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </ScrollReveal>
  );
};

export default CaseStudies;