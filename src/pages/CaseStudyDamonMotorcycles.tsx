
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/utils/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const CaseStudyDamonMotorcycles = () => {
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

  return <ScrollReveal>
      <div className="min-h-screen flex flex-col bg-beige-50 text-white">
        <Navbar />
        
        <main className="flex-grow mt-24">
          <div className="container-custom">
            {/* All Case Studies link with improved positioning */}
            <div className={`sticky ${isBannerVisible ? 'top-24' : 'top-16'} z-10 mb-8 w-full`}>
              <Link to="/case-studies" className="inline-flex items-center text-sm font-medium hover:underline text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <ArrowLeft size={16} className="mr-2" />
                All Case Studies
              </Link>
            </div>
            
            {/* Hero section */}
            <div className="mb-16">
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none mb-6 text-white">
                DAMON<br />MOTORCYCLES
              </h1>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-8">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold mb-2">CLIENT</h3>
                  <p>Damon Motorcycles</p>
                </div>
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold mb-2">SERVICES</h3>
                  <p>Digital Marketing, Brand Strategy, Content Production, Web Design and Development</p>
                </div>
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold mb-2">RESULTS</h3>
                  <p>500x ROI on marketing spend</p>
                </div>
              </div>
            </div>
            
            {/* Featured image */}
            <div className="mb-16 reveal">
              <img src="/lovable-uploads/7269bbbd-37f4-4f9e-af2b-4e6a47122f10.png" alt="Damon Motorcycles" className="w-full h-auto aspect-video object-cover rounded-lg" />
            </div>
            
            {/* Project overview */}
            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h2 className="text-3xl font-bold mb-6">PROJECT OVERVIEW</h2>
                <p className="text-lg mb-4">
                  Damon Motorcycles came to us with a challenge: create a high-converting marketing campaign that would generate significant ROI for their innovative electric motorcycles.
                </p>
                <p className="text-lg mb-4">
                  Through a comprehensive digital strategy focusing on targeted audience segments, we were able to create a campaign that resonated with motorcycle enthusiasts and eco-conscious consumers alike.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">CHALLENGE</h2>
                <p className="text-lg mb-4">
                  The electric motorcycle market was growing, but Damon needed to stand out in a space dominated by traditional combustion engine bikes and establish credibility for their revolutionary technology.
                </p>
                <p className="text-lg mb-4">
                  We needed to communicate complex technological advantages while creating an emotional connection with potential customers.
                </p>
              </div>
            </div>
            
            {/* Solution & Results */}
            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h2 className="text-3xl font-bold mb-6">SOLUTION</h2>
                <p className="text-lg mb-4">
                  We developed a multi-channel digital campaign that highlighted Damon's revolutionary safety features and performance capabilities, using a mix of video content, interactive demonstrations, and targeted advertising.
                </p>
                <p className="text-lg mb-4">
                  Our strategy incorporated influencer partnerships with respected motorcycle enthusiasts and sustainability advocates to build trust with multiple audience segments.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">RESULTS</h2>
                <ul className="text-lg space-y-4">
                  <li>• 500x return on marketing investment</li>
                  <li>• 230% increase in qualified leads</li>
                  <li>• 65% conversion rate from lead to sale</li>
                  <li>• 45% reduction in customer acquisition cost</li>
                  <li>• Featured in top industry publications</li>
                </ul>
              </div>
            </div>
            
            {/* Additional images */}
            <div className="grid md:grid-cols-2 gap-6 mb-16 reveal">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative w-full h-full cursor-pointer group">
                      <iframe 
                        src="https://www.youtube.com/embed/TVExxxHKqF8?autoplay=1&loop=1&playlist=TVExxxHKqF8&mute=1&controls=0&showinfo=0" 
                        title="Damon Motorcycles Video"
                        className="w-full h-full object-cover"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                      ></iframe>
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="bg-white/90 text-black px-4 py-2 rounded-full font-medium">Watch Video</span>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl bg-black p-0 border-none">
                    <AspectRatio ratio={16/9} className="bg-black">
                      <iframe 
                        src="https://www.youtube.com/embed/TVExxxHKqF8?autoplay=1&loop=1&playlist=TVExxxHKqF8" 
                        title="Damon Motorcycles Video"
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                      ></iframe>
                    </AspectRatio>
                  </DialogContent>
                </Dialog>
              </div>
              <img src="/lovable-uploads/3e0ed6d6-8d6d-4b77-a6c1-aa1c7df4f868.png" alt="Damon Motorcycles Result" className="w-full h-auto aspect-square object-cover rounded-lg" />
            </div>
            
            {/* Testimonial */}
            <div className="mb-16 bg-black text-white p-8 md:p-12 rounded-lg reveal">
              <blockquote className="text-xl md:text-2xl italic mb-6">
                "The campaign Hanzo created for us exceeded all expectations. Not only did they help us reach new customers, but they truly understood our technology and brand values. The ROI speaks for itself."
              </blockquote>
              <p className="font-bold">- Jay Giraud, CEO at Damon Motorcycles</p>
            </div>
            
            {/* CTA */}
            <div className="text-center mb-16 reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to achieve similar results?</h2>
              <Link to="/contact" className="lets-talk-btn inline-flex items-center">
                Let's Talk
                <ArrowUpRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Related case studies */}
            <div className="mb-16 reveal">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Case Studies</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <img src="/lovable-uploads/919bfa95-912a-489f-a859-7a42e0d7d435.png" alt="TrillerFest Music Festival" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white uppercase">TRILLERFEST</h3>
                    <p className="text-white/80 mt-1 text-sm uppercase font-medium">LARGEST VIRTUAL MUSIC FESTIVAL IN HISTORY</p>
                    <Link to="/case-study-trillerfest" className="mt-4 lets-talk-btn w-fit">
                      Explore
                      <ArrowUpRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </ScrollReveal>;
};

export default CaseStudyDamonMotorcycles;
