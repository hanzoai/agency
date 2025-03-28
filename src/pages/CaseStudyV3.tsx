import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Globe, Linkedin, Instagram, Facebook, Twitter, ArrowUpRight } from 'lucide-react';
import GlobalMuteButton from '@/components/GlobalMuteButton';
import VideoMuteButton from '@/components/VideoMuteButton';
import caseStudies from '@/data/caseStudies';
import { getRelatedProjects } from '@/utils/projectUtils';
import ScrollReveal from '@/utils/ScrollReveal';

const CaseStudyV3 = () => {
  const { id } = useParams<{ id: string }>();
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  
  // If no ID is found, or the ID doesn't match any case study, redirect to case studies
  if (!id || !caseStudies[id]) {
    return <Navigate to="/case-studies" replace />;
  }
  
  // Get the case study data
  const data = caseStudies[id];

  // Get dynamically generated related projects
  const relatedProjects = data.relatedProjects || getRelatedProjects(id, 3);
  
  useEffect(() => {
    // Set the body to dark theme
    document.body.classList.add('dark');
    
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
      document.body.classList.remove('dark');
      window.removeEventListener('bannerVisibilityChanged', handleBannerVisibilityChanged);
    };
  }, []);

  // Function to render social links
  const renderSocialLinks = () => {
    if (!data.socialLinks || !data.socialLinks.links || data.socialLinks.links.length === 0) {
      return null;
    }
    
    const getSocialIcon = (platform: string) => {
      const normalizedPlatform = platform.toLowerCase();
      
      if (normalizedPlatform.includes('web') || normalizedPlatform.includes('site')) return <Globe size={20} className="text-white" />;
      if (normalizedPlatform.includes('linkedin')) return <Linkedin size={20} className="text-white" />;
      if (normalizedPlatform.includes('instagram')) return <Instagram size={20} className="text-white" />;
      if (normalizedPlatform.includes('facebook')) return <Facebook size={20} className="text-white" />;
      if (normalizedPlatform.includes('twitter')) return <Twitter size={20} className="text-white" />;
      
      // Default icon
      return <Globe size={20} className="text-white" />;
    };
    
    return (
      <div className="flex gap-4 mb-12">
        {data.socialLinks.links.map((link, index) => (
          <a 
            key={index}
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            {getSocialIcon(link.platform)}
          </a>
        ))}
      </div>
    );
  };

  const getVideoWidth = () => {
    // Special case for smaller video display
    if (id === 'casper-blockchain') {
      return 'md:w-[49%]';
    }
    return 'md:w-[70%]';
  };

  return (
    <ScrollReveal>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <GlobalMuteButton />
        
        <main className={`${isBannerVisible ? 'pt-36' : 'pt-32'}`}>
          {/* Hero Section - Video or Image */}
          <div className="relative w-full h-[35vh] md:h-[49vh] overflow-hidden flex justify-center pt-12 mb-8">
            <div className={`w-full ${getVideoWidth()} h-full`}>
              {data.videoUrl ? (
                <iframe
                  className="w-full h-full object-cover"
                  src={data.videoUrl}
                  title={data.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              ) : data.images && data.images.length > 0 ? (
                <img
                  src={data.images[0]}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
              ) : null}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            {data.videoId && <VideoMuteButton videoId={data.videoId} className="bottom-6 right-6 z-30" />}
          </div>
          
          {/* Content */}
          <div className="container-custom py-16">
            <Link to="/case-studies" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all projects
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{data.title}</h1>
            <p className="text-xl md:text-2xl text-white/80 mb-6">{data.subtitle}</p>
            
            {/* Social Media Icons */}
            {renderSocialLinks()}
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                {data.overview.map((paragraph, index) => (
                  <p key={`overview-${index}`} className="text-lg text-white/80 mb-4">{paragraph}</p>
                ))}
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Services</h2>
                <div className="flex flex-wrap gap-2">
                  {data.services.map(service => (
                    <span key={service} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Gallery Section */}
            {data.images && data.images.length > 1 && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {data.images.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${data.title} - Image ${index + 1}`} 
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/5 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-3">Challenge</h2>
                <p className="text-white/80">{data.challenge[0]}</p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-3">Solution</h2>
                <p className="text-white/80">{data.solution[0]}</p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-3">Results</h2>
                <ul className="text-white/80 space-y-2">
                  {data.results.slice(0, 3).map((result, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-accent">•</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Testimonial */}
            {data.testimonial && (
              <div className="mb-16 bg-black text-white p-8 md:p-12 rounded-lg border border-white/10">
                <blockquote className="text-xl md:text-2xl italic mb-6">
                  "{data.testimonial.quote}"
                </blockquote>
                <p className="font-bold">- {data.testimonial.author}, {data.testimonial.role}</p>
              </div>
            )}
            
            {/* Related Projects */}
            {relatedProjects && relatedProjects.length > 0 && (
              <div className="mt-20">
                <h2 className="text-2xl font-bold mb-6">More Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedProjects.map((project, index) => (
                    <Link key={index} to={project.route} className="group">
                      <div className="relative overflow-hidden rounded-lg h-64">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                          <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                          <p className="text-sm text-white/70">{project.subtitle}</p>
                          <span className="mt-2 text-accent flex items-center text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            View Project
                            <ArrowUpRight size={14} className="ml-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* CTA */}
            <div className="text-center mt-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.ctaTitle || "Want to create something amazing?"}</h2>
              <Link to="/contact" className="bg-accent hover:bg-accent/90 text-black py-3 px-6 rounded-full inline-flex items-center transition-all">
                Let's Talk
                <ArrowUpRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </ScrollReveal>
  );
};

export default CaseStudyV3;