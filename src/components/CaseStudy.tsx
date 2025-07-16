import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import caseStudies from '@/data/caseStudies';
import { Button } from './ui/button';
import './Services.css';

const CaseStudy = () => {
  // Define featured case study IDs - only show 3
  const featuredIds = ['trillerfest', 'damon-motorcycles', 'unikoin-gold'];

  // Get the featured case studies in the specified order
  const featuredStudies = featuredIds
    .map(id => caseStudies[id])
    .filter(study => study); // Filter out any undefined studies (in case an ID doesn't exist)

  // Function to get the display image for a case study
  const getDisplayImage = (studyId: string): string => {
    // Hardcode Triller image for debugging
    if (studyId === 'trillerfest') {
      return '/images/triller/Migos-poster.jpg';  // Use the Migos poster image
    }
    
    const study = caseStudies[studyId];

    // If the study has images, use the first one
    if (study?.images && study.images.length > 0) {
      return study.images[0];
    }

    // Fallback image mapping
    const fallbackImages: Record<string, string> = {
      'trillerfest': '/images/triller/thumbnail.jpg',
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
    <section id="case-studies" className="section-padding bg-black relative overflow-hidden">
      <div className="container-custom">
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-white">Growth-driven innovation</h2>
              <p className="text-lg md:text-xl text-white/70">
                Award-winning strategies that transform businesses through AI-powered solutions
              </p>
            </div>
            <Link to="/our-work" className="hidden md:block">
              <Button
                variant="outline"
                className="rounded-full px-16 py-3 border-white/20 hover:bg-white/5 text-white text-sm font-medium"
              >
                VIEW ALL
              </Button>
            </Link>
          </div>
        </div>

        {/* Cards Container - Centered */}
        <div className="flex justify-center gap-6 lg:gap-8 flex-wrap lg:flex-nowrap">
          {featuredStudies.map((study, index) => (
            <div
              key={index}
              className="w-full max-w-[380px] lg:w-[380px] xl:w-[400px]"
            >
              <div className="relative h-full">
                {/* Card Container with Hover Effect */}
                <div className="relative group cursor-pointer">
                  {/* Top Image Card - Separate rounded rectangle */}
                  <Link to={`/case-study/${study.id}`} className="block">
                    <div className="bg-black border border-gray-800 rounded-[24px] overflow-hidden h-[260px] mb-4 transition-all duration-300 group-hover:border-gray-700 group-hover:shadow-xl">
                      <div className="relative h-full bg-gray-900 overflow-hidden">
                        <img
                          src={getDisplayImage(study.id)}
                          alt={study.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white font-medium flex items-center">
                            View Case Study <ArrowUpRight size={20} className="ml-2" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Bottom Content Card - Separate rounded rectangle */}
                  <Link to={`/case-study/${study.id}`} className="block">
                    <div className="bg-black border border-gray-800 rounded-[24px] p-8 transition-all duration-300 group-hover:border-gray-700 group-hover:transform group-hover:-translate-y-2">
                      <h3 className="text-[18px] font-bold mb-4 text-white">
                        {study.title} -<br />
                        <span className="font-normal italic text-gray-400">{study.subtitle}</span>
                      </h3>
                      <p className="text-gray-400 text-sm leading-[1.6]">
                        {study.description}
                      </p>
                      <div className="mt-6 inline-flex items-center text-white hover:text-gray-300 transition-colors">
                        <span className="text-sm font-medium">Explore Case Study</span>
                        <ArrowUpRight size={16} className="ml-1" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 md:hidden">
          <Link to="/our-work" className="block">
            <Button
              variant="outline"
              className="w-full rounded-full px-16 py-3 border-white/20 hover:bg-white/5 text-white text-sm font-medium max-w-sm mx-auto"
            >
              VIEW ALL CASE STUDIES
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;