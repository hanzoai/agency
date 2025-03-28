import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import caseStudies from '@/data/caseStudies';

const CaseStudy = () => {
  // Define featured case study IDs - ensure Unikoin Gold is included
  const featuredIds = ['trillerfest', 'damon-motorcycles', 'unikoin-gold', 'casper-blockchain'];
  
  // Get the featured case studies in the specified order
  const featuredStudies = featuredIds
    .map(id => caseStudies[id])
    .filter(study => study); // Filter out any undefined studies (in case an ID doesn't exist)
  
  // Function to get the display image for a case study
  const getDisplayImage = (studyId: string): string => {
    const study = caseStudies[studyId];
    
    // If the study has images, use the first one
    if (study?.images && study.images.length > 0) {
      return study.images[0];
    }
    
    // Fallback image mapping
    const fallbackImages: Record<string, string> = {
      'trillerfest': '/images/triller/triller-1.jpg',
      'damon-motorcycles': '/images/damon/damon-1.jpg',
      'unikoin-gold': '/images/unikrn/unikrn-1.jpg',
      'casper-blockchain': '/images/casper/casper-1.jpg',
      'bellabeat': '/images/bellabeat/bella-1.jpg',
      'cover-build': '/images/cover/cover-1.png',
      'myle-tap': '/images/myle/myle-1.jpg'
    };
    
    return fallbackImages[studyId] || '/placeholder.svg';
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
          {featuredStudies.slice(0, 4).map((study, index) => (
            <div 
              key={study.id}
              className="relative aspect-[4/3] overflow-hidden group reveal"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img 
                src={getDisplayImage(study.id)}
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