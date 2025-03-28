import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import caseStudies from '@/data/caseStudies';
import { CaseStudyData } from '@/types/caseStudy';

const CaseStudy = () => {
  const [featuredStudies, setFeaturedStudies] = useState<CaseStudyData[]>([]);
  
  useEffect(() => {
    // Get all case studies as an array
    const allStudies = Object.values(caseStudies);
    
    // Shuffle the array using Fisher-Yates algorithm
    const shuffled = [...allStudies];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // Take the first 4 studies (or fewer if less than 4 available)
    setFeaturedStudies(shuffled.slice(0, 4));
  }, []);
  
  // Function to get the display image for a case study
  const getDisplayImage = (study: CaseStudyData): string => {
    // If the study has images, use the first one
    if (study.images && study.images.length > 0) {
      return study.images[0];
    }
    
    // Fallback image mapping for studies without images
    const fallbackImages: Record<string, string> = {
      'trillerfest': '/images/trillerfest/main-promo.jpg',
      'damon-motorcycles': '/lovable-uploads/7269bbbd-37f4-4f9e-af2b-4e6a47122f10.png',
      'bellabeat': '/lovable-uploads/7269bbbd-37f4-4f9e-af2b-4e6a47122f10.png',
      'unikoin-gold': '/images/unikoin/unikoin-1.jpeg',
      'cover-build': '/images/cover-build/cover-1.jpg',
      'casper-blockchain': '/images/casper/casper-1.jpg',
      'myle-tap': '/images/myle-tap/myle-1.jpg'
    };
    
    return fallbackImages[study.id] || '/placeholder.svg';
  };

  return (
    <section id="case-studies" className="section-padding bg-beige-50 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center md:text-left max-w-3xl mb-16">
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-8 reveal">
            FEATURED<br/>PROJECTS
          </h2>
          <p className="text-lg text-primary/80 reveal">
            Some of our best work to date.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {featuredStudies.map((study, index) => (
            <div 
              key={study.id}
              className="relative aspect-[4/3] overflow-hidden group reveal"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img 
                src={getDisplayImage(study)}
                alt={study.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white uppercase">{study.title}</h3>
                <p className="text-white/80 mt-1 text-sm uppercase font-medium">{study.subtitle}</p>
                <Link to={`/case-study/${study.id}`} className="mt-4 lets-talk-btn w-fit">
                  Explore
                  <ArrowUpRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:text-left">
          <Link to="/case-studies" className="lets-talk-btn">
            View All Case Studies
            <ArrowUpRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;