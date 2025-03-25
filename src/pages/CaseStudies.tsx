import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoCard from '@/components/VideoCard';
import { BentoGrid, BentoCard } from '@/components/BentoGrid';
import ParallaxItem from '@/components/ParallaxItem';
import ScrollReveal from '@/utils/ScrollReveal';

interface Project {
  id: string;
  title: string;
  youtubeId: string;
  description: string;
  size: "small" | "medium" | "large";
}

const CaseStudies = () => {
  const projects: Project[] = [
    { 
      id: 'triller', 
      title: 'Trillerfest', 
      youtubeId: 'QEQpdYYYlhc',
      description: 'LARGEST VIRTUAL MUSIC FESTIVAL IN HISTORY',
      size: "large" 
    },
    { 
      id: 'damon', 
      title: 'Damon Motorcycles', 
      youtubeId: 'T6FyMkSAf7w',
      description: 'HIGHLY CONVERTING 500X ROI CAMPAIGN',
      size: "large" 
    },
    { 
      id: 'cover-build', 
      title: 'Cover Build', 
      youtubeId: 'zZwdjRw3w2w',
      description: 'REVOLUTIONARY PREFAB HOUSING SOLUTION',
      size: "medium"
    },
    { 
      id: 'bella-beat', 
      title: 'Bella Beat', 
      youtubeId: 'rsda3VIuRxM',
      description: 'WOMEN\'S HEALTH WEARABLE TECH PLATFORM',
      size: "medium" 
    },
    { 
      id: 'esports-coin', 
      title: 'E-Sports Coin', 
      youtubeId: '8TbWsxiyKUE',
      description: 'BLOCKCHAIN SOLUTION FOR GAMING COMMUNITY',
      size: "medium" 
    },
    { 
      id: 'casper-blockchain', 
      title: 'Casper Blockchain', 
      youtubeId: '7zQZmovxRNs',
      description: 'ENTERPRISE-GRADE SECURE BLOCKCHAIN PLATFORM',
      size: "medium" 
    },
    { 
      id: 'myle-tap', 
      title: 'Myle.Tap', 
      youtubeId: 'A43eWc8vddg',
      description: 'INNOVATIVE WEARABLE INTERACTION TECHNOLOGY',
      size: "medium" 
    }
  ];

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
        
        <main className="pt-24">
          <header className="pt-16 md:pt-24 pb-12 container mx-auto px-6">
            <ParallaxItem speed={0.1}>
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none mb-12 pt-12 text-white text-center md:text-left">
                CASE<br />STUDIES
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
                Showcasing our most impactful digital campaigns and creative work
              </p>
            </ParallaxItem>
          </header>
          
          <section id="gallery" className="py-8 md:py-16 bg-gradient-to-b from-black via-black/95 to-black/90">
            <div className="container-custom">
              <BentoGrid className="max-w-7xl mx-auto gap-6 md:gap-8">
                {projects.map((project, index) => (
                  <ParallaxItem 
                    key={project.id} 
                    speed={0.03 * (index % 3 + 1)} 
                    className="h-full"
                  >
                    <BentoCard 
                      size={project.size}
                    >
                      <VideoCard 
                        title={project.title} 
                        youtubeId={project.youtubeId}
                        description={project.description}
                        index={index} 
                        projectId={project.id}
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