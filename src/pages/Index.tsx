
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyHanzo from '@/components/WhyHanzo';
import CaseStudy from '@/components/CaseStudy';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ScrollReveal from '@/utils/ScrollReveal';
import NewUserBanner from '@/components/NewUserBanner';

const Index = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  
  useEffect(() => {
    // Check if banner is visible
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
    
    checkBannerVisible();
    
    // Listen for storage changes to update banner visibility
    const handleStorageChange = () => {
      checkBannerVisible();
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
    };
  }, []);
  
  return (
    <ScrollReveal>
      <div className="min-h-screen flex flex-col" style={{ paddingTop: isBannerVisible ? '40px' : '0' }}>
        <NewUserBanner />
        <Navbar />
        <Hero />
        <Services />
        <WhyHanzo />
        <CaseStudy />
        <Testimonials />
        <Process />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </ScrollReveal>
  );
};

export default Index;
