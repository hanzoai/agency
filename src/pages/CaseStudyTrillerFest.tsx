
import { useEffect } from 'react';
import ScrollReveal from '@/utils/ScrollReveal';
import TrillerFestGallery from '@/components/TrillerFestGallery';
import HeroSection from '@/components/case-studies/triller-fest/HeroSection';
import KeyMetrics from '@/components/case-studies/triller-fest/KeyMetrics';
import CaseStudyContent from '@/components/case-studies/triller-fest/CaseStudyContent';
import SidebarContent from '@/components/case-studies/triller-fest/SidebarContent';
import TestimonialSection from '@/components/case-studies/triller-fest/TestimonialSection';
import CTASection from '@/components/case-studies/triller-fest/CTASection';

const CaseStudyTrillerFest = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <ScrollReveal>
      <div className="min-h-screen bg-beige-50">
        {/* Hero Section */}
        <HeroSection />

        <div className="container-custom py-16 md:py-24">
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
