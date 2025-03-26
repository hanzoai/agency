
import { useEffect } from 'react';
import ScrollReveal from '@/utils/ScrollReveal';
import TrillerFestGallery from '@/components/TrillerFestGallery';
import HeroSection from '@/components/case-studies/triller-fest/HeroSection';
import KeyMetrics from '@/components/case-studies/triller-fest/KeyMetrics';
import CaseStudyContent from '@/components/case-studies/triller-fest/CaseStudyContent';
import SidebarContent from '@/components/case-studies/triller-fest/SidebarContent';
import TestimonialSection from '@/components/case-studies/triller-fest/TestimonialSection';
import CTASection from '@/components/case-studies/triller-fest/CTASection';
import Navbar from '@/components/Navbar';
import GlobalMuteButton from '@/components/GlobalMuteButton';
import VideoMuteButton from '@/components/VideoMuteButton';

const CaseStudyTrillerFest = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <ScrollReveal>
      <div className="min-h-screen bg-beige-50">
        <Navbar />
        <GlobalMuteButton />
        {/* Hero Section */}
        <HeroSection />

        <div className="container-custom py-16 md:py-24">
          {/* Video Showcase */}
          <div className="mb-16 mt-8 max-w-4xl mx-auto relative">
            <h2 className="text-2xl font-bold mb-6 text-center">Campaign Video</h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg relative">
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/QEQpdYYYlhc?autoplay=1&mute=1&loop=1&playlist=QEQpdYYYlhc&controls=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
                title="TrillerFest Campaign Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
              <VideoMuteButton videoId="trillerfest-main" />
            </div>
          </div>

          {/* Image Gallery */}
          <TrillerFestGallery />
          
          {/* Key Metrics */}
          <KeyMetrics />

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Column - Main Content */}
            <div className="lg:w-2/3">
              <CaseStudyContent />
            </div>

            {/* Right Column - Sticky Sidebar */}
            <div className="lg:w-1/3">
              <SidebarContent />
            </div>
          </div>

          {/* Testimonial Section */}
          <TestimonialSection />

          {/* CTA Section */}
          <CTASection />
        </div>
      </div>
    </ScrollReveal>
  );
};

export default CaseStudyTrillerFest;
