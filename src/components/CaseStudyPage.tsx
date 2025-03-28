import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/utils/ScrollReveal';
import GlobalMuteButton from '@/components/GlobalMuteButton';
import VideoMuteButton from '@/components/VideoMuteButton';
import { CaseStudyData } from '@/types/caseStudy';

interface CaseStudyPageProps {
  data: CaseStudyData;
}

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ data }) => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    // Check banner visibility on mount
    const checkBannerVisible = () => {
      const bannerShown = localStorage.getItem('bannerShown');
      const bannerExpiry = localStorage.getItem('bannerExpiry');
      const discountUsed = localStorage.getItem('discountUsed');
      
      if (discountUsed === 'true') {
        setIsBannerVisible(false);
        return;
      }
      
      if (bannerShown === 'true' && bannerExpiry) {
        const expiryTime = parseInt(bannerExpiry, 10);
        const currentTime = new Date().getTime();
        
        setIsBannerVisible(expiryTime > currentTime);
      } else {
        setIsBannerVisible(false);
      }
    };
    
    // Listen for banner visibility changes
    const handleBannerVisibilityChanged = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsBannerVisible(customEvent.detail.visible);
    };
    
    window.addEventListener('bannerVisibilityChanged', handleBannerVisibilityChanged);
    checkBannerVisible();
    
    return () => {
      window.removeEventListener('bannerVisibilityChanged', handleBannerVisibilityChanged);
    };
  }, []);

  const renderSocialLinks = () => {
    if (!data.socialLinks) return null;
    
    return (
      <div className="mb-12 bg-white/5 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Social Media</h2>
        <ul className="space-y-2 text-white/80">
          {data.socialLinks.links.map((link, index) => (
            <li key={index}>
              <strong>{link.platform}:</strong> 
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-accent hover:underline ml-1"
              >
                {link.url}
              </a>
            </li>
          ))}
          {data.socialLinks.totalFollowers && (
            <li className="font-medium mt-4 text-lg text-accent">{data.socialLinks.totalFollowers.toLocaleString()}+ Followers</li>
          )}
        </ul>
      </div>
    );
  };

  return (
    <ScrollReveal>
      <div className="min-h-screen flex flex-col bg-beige-50 text-white">
        <Navbar />
        <GlobalMuteButton />
        
        <main className={`flex-grow ${isBannerVisible ? 'mt-32' : 'mt-24'}`}>
          <div className="container-custom">
            {/* All Case Studies link with improved positioning */}
            <div className={`sticky ${isBannerVisible ? 'top-28' : 'top-20'} z-10 mb-8 w-full`}>
              <Link to="/case-studies" className="inline-flex items-center text-sm font-medium hover:underline text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <ArrowLeft size={16} className="mr-2" />
                All Case Studies
              </Link>
            </div>
            
            {/* Hero section */}
            <div className="mb-16">
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none mb-6 text-white">
                {data.title}
              </h1>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-8">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold mb-2">CLIENT</h3>
                  <p>{data.client}</p>
                </div>
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold mb-2">SERVICES</h3>
                  <p>{data.services.join(', ')}</p>
                </div>
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold mb-2">RESULTS</h3>
                  <p>{data.results[0]}</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            {renderSocialLinks()}
            
            {/* Featured image/video */}
            <div className="mb-16 reveal">
              {data.videoUrl ? (
                <div className="w-full aspect-video overflow-hidden rounded-lg relative">
                  <iframe 
                    src={data.videoUrl}
                    title={`${data.title} Video`}
                    className="w-full h-full object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                  {data.videoId && <VideoMuteButton videoId={data.videoId} />}
                </div>
              ) : data.mainImageUrl ? (
                <img src={data.mainImageUrl} alt={data.title} className="w-full h-auto aspect-video object-cover rounded-lg" />
              ) : null}
            </div>
            
            {/* Project overview */}
            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h2 className="text-3xl font-bold mb-6">PROJECT OVERVIEW</h2>
                {data.overview.map((paragraph, index) => (
                  <p key={`overview-${index}`} className="text-lg mb-4">{paragraph}</p>
                ))}
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">CHALLENGE</h2>
                {data.challenge.map((paragraph, index) => (
                  <p key={`challenge-${index}`} className="text-lg mb-4">{paragraph}</p>
                ))}
              </div>
            </div>
            
            {/* Solution & Results */}
            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h2 className="text-3xl font-bold mb-6">SOLUTION</h2>
                {data.solution.map((paragraph, index) => (
                  <p key={`solution-${index}`} className="text-lg mb-4">{paragraph}</p>
                ))}
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">RESULTS</h2>
                <ul className="text-lg space-y-4">
                  {data.results.map((result, index) => (
                    <li key={`result-${index}`}>• {result}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Additional images */}
            {data.images && data.images.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6 mb-16 reveal">
                {data.images.map((image, index) => (
                  <img 
                    key={`image-${index}`} 
                    src={image} 
                    alt={`${data.title} Image ${index + 1}`} 
                    className="w-full h-auto aspect-square object-cover rounded-lg" 
                  />
                ))}
              </div>
            )}
            
            {/* Testimonial */}
            {data.testimonial && (
              <div className="mb-16 bg-black text-white p-8 md:p-12 rounded-lg reveal">
                <blockquote className="text-xl md:text-2xl italic mb-6">
                  "{data.testimonial.quote}"
                </blockquote>
                <p className="font-bold">- {data.testimonial.author}, {data.testimonial.role}</p>
              </div>
            )}
            
            {/* CTA */}
            <div className="text-center mb-16 reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.ctaTitle || "Ready to achieve similar results?"}</h2>
              <Link to="/contact" className="lets-talk-btn inline-flex items-center">
                Let's Talk
                <ArrowUpRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Related case studies */}
            <div className="mb-16 reveal">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Case Studies</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {data.relatedProjects.map((project, index) => (
                  <div key={`related-${index}`} className="relative aspect-[4/3] overflow-hidden group">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-xl font-bold text-white uppercase">{project.title}</h3>
                      <p className="text-white/80 mt-1 text-sm uppercase font-medium">{project.subtitle}</p>
                      <Link to={project.route} className="mt-4 lets-talk-btn w-fit">
                        Explore
                        <ArrowUpRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </ScrollReveal>
  );
};

export default CaseStudyPage;