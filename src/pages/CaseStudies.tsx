import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoCard from '@/components/VideoCard';
import { BentoGrid, BentoCard } from '@/components/BentoGrid';
import ParallaxItem from '@/components/ParallaxItem';
import ScrollReveal from '@/utils/ScrollReveal';
import GlobalMuteButton from '@/components/GlobalMuteButton';

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
  const projects: Project[] = [
    { 
      id: 'triller', 
      title: 'Trillerfest', 
      youtubeId: 'QEQpdYYYlhc',
      description: 'Largest music festival in human history during COVID with 169M+ audience.',
      size: "large" 
    },
    { 
      id: 'damon', 
      title: 'Damon Motorcycles', 
      youtubeId: 'T6FyMkSAf7w',
      description: 'The "Tesla" of the motor-bike industry with advanced AI safety features & 500x ROI.',
      size: "large" 
    },
    { 
      id: 'cover-build', 
      title: 'Cover Build', 
      youtubeId: 'zZwdjRw3w2w',
      description: 'Luxurious prefab housing, a one-stop shop solution and building partner.',
      size: "medium",
      className: "h-full"
    },
    { 
      id: 'bella-beat', 
      title: 'Bella Beat', 
      youtubeId: 'rsda3VIuRxM',
      description: 'A revolutionized women\'s health industry & surpassed $100M revenue with Hanzo.',
      size: "medium",
      className: "h-full" 
    },
    { 
      id: 'unikoin-gold', 
      title: 'Unikoin Gold', 
      youtubeId: '8TbWsxiyKUE',
      description: 'Blockchain-based esports betting platform that raised $34.9M in ICO.',
      size: "medium",
      className: "h-full" 
    },
    { 
      id: 'casper-blockchain', 
      title: 'Casper Blockchain', 
      youtubeId: '7zQZmovxRNs',
      description: 'Foundational partnership creating the first enterprise-ready blockchain from inception',
      size: "medium",
      className: "h-full" 
    },
    { 
      id: 'myle-tap', 
      title: 'Myle Tap', 
      youtubeId: 'A43eWc8vddg',
      description: 'Innovative wearable interaction technology, Hanzo launched first AI wearable.',
      size: "medium",
      className: "h-full" 
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
                {projects.map((project, index) => (
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
                        projectId={project.id}
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