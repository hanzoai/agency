import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/utils/ScrollReveal';
import GlobalMuteButton from '@/components/GlobalMuteButton';
import VideoMuteButton from '@/components/VideoMuteButton';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import caseStudies from '@/data/caseStudies';
import { getRelatedProjects } from '@/utils/projectUtils';

const CaseStudyV2 = () => {
  const { id } = useParams<{ id: string }>();
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  // If no ID is found, or the ID doesn't match any case study, redirect to case studies
  if (!id || !caseStudies[id]) {
    return <Navigate to="/case-studies" replace />;
  }

  // Get the case study data
  const data = caseStudies[id];
  
  // Get dynamically generated related projects
  const relatedProjects = data.relatedProjects || getRelatedProjects(id, 2);

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

  // Function to render social links
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
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />
        <GlobalMuteButton />
        
        <main className={`flex-grow ${isBannerVisible ? 'mt-32' : 'mt-24'}`}>
          <div className="container-custom">
            {/* Nav Section */}
            <div className="flex justify-between items-center mb-8">
              {/* All Case Studies link with improved positioning */}
              <div className={`sticky ${isBannerVisible ? 'top-28' : 'top-20'} z-10 w-full`}>
                <Link to="/case-studies" className="inline-flex items-center text-sm font-medium hover:underline text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  <ArrowLeft size={16} className="mr-2" />
                  All Case Studies
                </Link>
              </div>
              
              {/* Version Toggle */}
              <div className="flex gap-2">
                <Link 
                  to={`/case-study-v1/${id}`} 
                  className="text-xs text-accent/70 hover:text-accent"
                >
                  Switch to V1
                </Link>
                <Link 
                  to={`/case-study/${id}`} 
                  className="text-xs text-accent/70 hover:text-accent"
                >
                  Switch to V3
                </Link>
              </div>
            </div>
            
            {/* Hero section */}
            <div className="mb-16">
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none mb-6 text-white">
                {data.title}
              </h1>
              <p className="text-lg md:text-2xl text-white/80 mb-8">{data.subtitle}</p>
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
                <div className="relative w-full aspect-video overflow-hidden rounded-lg group">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative w-full h-full cursor-pointer group">
                        <iframe 
                          src={`${data.videoUrl}&mute=1`}
                          title={`${data.title} Video`}
                          className="w-full h-full object-cover"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          frameBorder="0"
                        ></iframe>
                        {data.videoId && <VideoMuteButton videoId={data.videoId} className="bottom-6 right-6" />}
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="bg-white/90 text-black px-4 py-2 rounded-full font-medium">Watch Video</span>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl bg-black p-0 border-none">
                      <AspectRatio ratio={16/9} className="bg-black relative">
                        <iframe 
                          src={data.videoUrl.replace('&mute=1', '')}
                          title={`${data.title} Video`}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          frameBorder="0"
                        ></iframe>
                        {data.videoId && <VideoMuteButton videoId={`${data.videoId}-modal`} />}
                      </AspectRatio>
                    </DialogContent>
                  </Dialog>
                </div>
              ) : data.images && data.images.length > 0 ? (
                <img src={data.images[0]} alt={data.title} className="w-full h-auto aspect-video object-cover rounded-lg" />
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
                    <li key={`result-${index}`} className="flex items-start">
                      <span className="mr-2 text-accent">•</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Additional images */}
            {data.images && data.images.length > 1 && (
              <div className="grid md:grid-cols-2 gap-6 mb-16 reveal">
                {data.images.slice(1, 3).map((image, index) => (
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
              <div className="mb-16 bg-gray-900 text-white p-8 md:p-12 rounded-lg reveal">
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
            {relatedProjects && relatedProjects.length > 0 && (
              <div className="mb-16 reveal">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Case Studies</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedProjects.map((project, index) => (
                    <div key={`related-${index}`} className="relative aspect-[4/3] overflow-hidden group">
                      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
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
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </ScrollReveal>
  );
};

export default CaseStudyV2;