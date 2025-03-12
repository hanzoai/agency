
import { useEffect } from 'react';
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

const Index = () => {
  useEffect(() => {
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
  }, []);
  
  return (
    <ScrollReveal>
      <div className="min-h-screen flex flex-col">
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
