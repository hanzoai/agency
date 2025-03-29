import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyHanzo from '@/components/WhyHanzo';
import CaseStudy from '@/components/CaseStudy';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ScrollReveal from '@/utils/ScrollReveal';
import AICapabilities from '@/components/AICapabilities';
// import ModernTestimonials from '@/components/ModernTestimonials';
import StatsSection from '@/components/StatsSection';

const Index = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true); // Set to true by default

  useEffect(() => {
    // Check if trial was used - in that case don't show the banner
    const trialUsed = localStorage.getItem('trialUsed');
    if (trialUsed === 'true') {
      setIsBannerVisible(false);
    }

    // Listen for banner visibility changes
    const handleBannerVisibilityChanged = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsBannerVisible(customEvent.detail.visible);
    };

    window.addEventListener('bannerVisibilityChanged', handleBannerVisibilityChanged);

    // Listen for storage changes to update banner visibility
    const handleStorageChange = () => {
      const trialUsed = localStorage.getItem('trialUsed');
      if (trialUsed === 'true') {
        setIsBannerVisible(false);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href');
        if (!href) return;

        const targetElement = document.querySelector(href);
        if (!targetElement) return;

        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      });
    });

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('bannerVisibilityChanged', handleBannerVisibilityChanged);
    };
  }, []);

  return (
    <ScrollReveal>
      <div className="min-h-screen flex flex-col pt-16">
        <Hero />
        <Services />
        <AICapabilities />
        <StatsSection />
        <WhyHanzo />
        <CaseStudy />
        <Process />
        <Footer />
      </div>
    </ScrollReveal>
  );
};

export default Index;
