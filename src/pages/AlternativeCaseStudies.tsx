import React, { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/utils/ScrollReveal';
import GlobalMuteButton from '@/components/GlobalMuteButton';
import caseStudies from '@/data/caseStudies';

const AlternativeCaseStudies = () => {
  // Extract YouTube IDs from case study data
  const getYoutubeIdFromUrl = (url: string | undefined): string => {
    if (!url) return '';
    const match = url.match(/embed\/([^?]+)/);
    return match ? match[1] : '';
  };

  useEffect(() => {
    // Set the body to dark theme
    document.body.classList.add('dark');
    
    return () => {
      document.body.classList.remove('dark');
    };
  }, []);

  return (
    <ScrollReveal>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <GlobalMuteButton />
        
        <main className="pt-24">
          {/* Hero Section */}
          <div className="relative bg-gradient-to-b from-black to-gray-900 pt-16 pb-24">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-8 text-white">
                  Our Work
                </h1>
                <p className="text-white/80 text-xl md:text-2xl">
                  Browse our portfolio of successful client projects and case studies
                </p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
          </div>
          
          {/* Featured Case Studies */}
          <section className="py-16">
            <div className="container-custom">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase text-center">Featured Projects</h2>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                {/* TrillerFest - Featured Large */}
                <div className="col-span-2 relative overflow-hidden rounded-xl h-[500px] group">
                  <img 
                    src="/images/trillerfest/trillerfest-banner.png"
                    alt="TrillerFest Music Festival" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8 md:p-12">
                    <span className="text-accent font-medium mb-2">VIRTUAL EVENT</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white uppercase mb-3">TRILLERFEST</h3>
                    <p className="text-white/90 text-lg max-w-xl mb-6">
                      The largest virtual music festival in history, featuring 100+ artists and reaching over 5 million viewers during the pandemic.
                    </p>
                    <Link to="/case-study/trillerfest" className="bg-accent hover:bg-accent/80 text-black font-bold py-3 px-6 rounded-full inline-flex items-center transition-all duration-300 w-fit">
                      View Case Study
                      <ArrowUpRight size={18} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Grid Layout of All Case Studies */}
              <div className="grid md:grid-cols-3 gap-8">
                {Object.values(caseStudies).map((study, index) => (
                  index !== 0 && ( // Skip the first one (TrillerFest) as it's featured above
                    <div 
                      key={study.id} 
                      className="bg-gray-800 rounded-xl overflow-hidden h-full flex flex-col group"
                    >
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        {study.images && study.images[0] ? (
                          <img 
                            src={study.images[0]} 
                            alt={study.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                            <span className="text-gray-500">No image available</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-800/90 to-transparent"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold text-white uppercase mb-2">{study.title}</h3>
                        <p className="text-white/70 text-sm uppercase mb-4">{study.subtitle}</p>
                        <p className="text-white/80 text-base mb-6 flex-grow">
                          {study.overview[0].substring(0, 120)}...
                        </p>
                        <div className="mt-auto">
                          <Link 
                            to={`/case-study/${study.id}`} 
                            className="text-accent hover:text-white flex items-center font-medium transition-colors"
                          >
                            View Details
                            <ArrowUpRight size={16} className="ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="py-16 bg-black/50">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to create your success story?</h2>
                <p className="text-white/80 text-lg mb-8">
                  Let's discuss how we can help your business achieve extraordinary results.
                </p>
                <Link 
                  to="/contact" 
                  className="bg-accent hover:bg-accent/80 text-black font-bold py-3 px-8 rounded-full inline-flex items-center transition-all duration-300"
                >
                  Start a Project
                  <ArrowUpRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </ScrollReveal>
  );
};

export default AlternativeCaseStudies;