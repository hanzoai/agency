import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/utils/ScrollReveal';
import GlobalMuteButton from '@/components/GlobalMuteButton';
import VideoMuteButton from '@/components/VideoMuteButton';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const CaseStudyBellabeat = () => {
  useEffect(() => {
    // Set the body to dark theme
    document.body.classList.add('dark');
    
    return () => {
      document.body.classList.remove('dark');
    };
  }, []);

  return (
    <ScrollReveal>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />
        <GlobalMuteButton />
        
        <main className="flex-grow pt-36">
          <div className="container-custom">
            <Link to="/case-studies" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all projects
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Bellabeat</h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12">WOMEN'S HEALTH WEARABLE TECH PLATFORM</p>
            <div className="inline-block px-4 py-1 rounded-full text-accent-light text-sm font-medium mb-6 bg-neutral-50">
              Success Story
            </div>
            
            {/* Hero Image */}
            <div className="w-full aspect-video bg-gray-800 mb-16 overflow-hidden rounded-lg relative">
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/rsda3VIuRxM?autoplay=1&mute=1&loop=1&playlist=rsda3VIuRxM&controls=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
                title="Bellabeat - Women's Health Wearable Tech"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
              <VideoMuteButton videoId="bellabeat-hero" />
            </div>
            
            {/* Overview Section */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-lg text-white/80">
                  Bellabeat, established in 2014 by Urška Sršen and Sandro Mur, is a pioneering fem-tech company dedicated to women's health and wellness. The company specializes in wearable technology that enables women to monitor their health metrics, including menstrual cycles, sleep patterns, and stress levels. Hanzo AI was engaged to serve as an outsourced Chief Marketing Officer (CMO) and Chief Technology Officer (CTO), helping Bellabeat enhance their market position and technical infrastructure.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {['AI Algorithms', 'Data Analytics', 'Wearable Tech', 'Health Metrics', 'Cloud Infrastructure', 'Marketing Automation', 'User Experience', 'Data Visualization'].map(tech => (
                    <span key={tech} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Three Column Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/5 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-3">Challenge</h2>
                <p className="text-white/80">
                  In its early years, Bellabeat faced significant challenges in scaling its operations and reaching a broader audience. The competitive landscape of health tech demanded innovative marketing strategies and robust technological infrastructure to support growth. Data management and personalization at scale were key obstacles to overcome.
                </p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-3">Solution</h2>
                <p className="text-white/80">
                  Hanzo AI implemented advanced AI algorithms to analyze consumer behavior and preferences, enabling Bellabeat to tailor its marketing campaigns effectively. On the technological front, we overhauled Bellabeat's data management systems, introducing scalable solutions that could handle increased user data volumes and support the integration of new features. Our team created personalized data visualization tools that improved user engagement with health metrics.
                </p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-3">Results</h2>
                <p className="text-white/80">
                  The strategic partnership between Bellabeat and Hanzo AI yielded substantial results. Bellabeat experienced a significant surge in sales, with revenue estimates reaching up to $35 million by May 2024. User retention increased by 45%, and overall engagement with the platform improved by 67%. This growth underscored the effectiveness of Hanzo AI's integrated marketing and technological strategies.
                </p>
              </div>
            </div>
            
            {/* Detailed Sections */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Marketing Innovations</h2>
              <p className="text-lg text-white/80 mb-8">
                Hanzo AI implemented advanced AI algorithms to analyze consumer behavior and preferences, enabling Bellabeat to tailor its marketing campaigns effectively. This data-driven approach facilitated personalized content delivery, resonating with the target audience and boosting engagement. Our team developed segmented marketing strategies that addressed different user profiles, from fitness enthusiasts to those focused on reproductive health tracking.
              </p>
              
              <h2 className="text-2xl font-bold mb-6">Technological Enhancements</h2>
              <p className="text-lg text-white/80 mb-8">
                On the technological front, Hanzo AI overhauled Bellabeat's data management systems, introducing scalable solutions that could handle increased user data volumes. This upgrade ensured seamless user experiences and supported the integration of new features into Bellabeat's product offerings. We implemented cloud-based analytics that provided real-time insights while maintaining strict privacy standards essential for health data.
              </p>
              
              <h2 className="text-2xl font-bold mb-6">Key Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/5 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-accent mb-2">67%</div>
                  <p className="text-white/80">Increase in user engagement</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-accent mb-2">45%</div>
                  <p className="text-white/80">Improvement in user retention</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-accent mb-2">$35M</div>
                  <p className="text-white/80">Revenue estimation by 2024</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-6">Conclusion</h2>
              <p className="text-lg text-white/80">
                Hanzo AI's role as an outsourced CMO and CTO was instrumental in propelling Bellabeat's growth. By harnessing AI-driven marketing techniques and enhancing technological infrastructure, Bellabeat solidified its position in the fem-tech industry, achieving remarkable sales milestones. Our partnership demonstrates how strategic technological implementation combined with targeted marketing can transform business outcomes in the competitive health technology sector.
              </p>
            </div>
            
            {/* Testimonial Section */}
            <div className="my-16 bg-accent/10 rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-[150px] leading-none font-bold text-accent/5 -mt-10 -mr-5">"</div>
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <p className="text-xl md:text-2xl italic text-white mb-6">
                  "Hanzo AI transformed our approach to both marketing and technology. Their data-driven strategies helped us connect with our users on a deeper level while building the robust infrastructure we needed to scale. The results speak for themselves."
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full mr-4"></div>
                  <div className="text-left">
                    <div className="font-bold">Urška Sršen</div>
                    <div className="text-white/70">Co-founder & CPO at Bellabeat</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Related Projects Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Related Case Studies</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* First Related Project */}
                <div className="relative aspect-[4/3] overflow-hidden group rounded-lg">
                  <img 
                    src="/lovable-uploads/7269bbbd-37f4-4f9e-af2b-4e6a47122f10.png" 
                    alt="Damon Motorcycles" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white uppercase">DAMON MOTORCYCLES</h3>
                    <p className="text-white/80 mt-1 text-sm uppercase font-medium">HIGHLY CONVERTING 500X ROI CAMPAIGN</p>
                    <Link to="/project/damon" className="mt-4 lets-talk-btn w-fit">
                      Explore
                      <ArrowUpRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
                
                {/* Second Related Project */}
                <div className="relative aspect-[4/3] overflow-hidden group rounded-lg">
                  <img 
                    src="/lovable-uploads/919bfa95-912a-489f-a859-7a42e0d7d435.png" 
                    alt="TrillerFest Music Festival" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white uppercase">TRILLERFEST</h3>
                    <p className="text-white/80 mt-1 text-sm uppercase font-medium">LARGEST VIRTUAL MUSIC FESTIVAL IN HISTORY</p>
                    <Link to="/project/triller" className="mt-4 lets-talk-btn w-fit">
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
    </ScrollReveal>
  );
};

export default CaseStudyBellabeat;