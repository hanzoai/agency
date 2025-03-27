import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/utils/ScrollReveal';
import GlobalMuteButton from '@/components/GlobalMuteButton';
import VideoMuteButton from '@/components/VideoMuteButton';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const CaseStudyUnikoinGold = () => {
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
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Unikoin Gold</h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12">BLOCKCHAIN-BASED ESPORTS BETTING PLATFORM</p>
            <div className="inline-block px-4 py-1 rounded-full text-accent-light text-sm font-medium mb-6 bg-neutral-50">
              Blockchain Success
            </div>
            
            {/* Hero Image */}
            <div className="w-full aspect-video bg-gray-800 mb-16 overflow-hidden rounded-lg relative">
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/8TbWsxiyKUE?autoplay=1&mute=1&loop=1&playlist=8TbWsxiyKUE&controls=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
                title="Unikoin Gold - Blockchain-based Esports Betting Platform"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
              <VideoMuteButton videoId="unikoingold-hero" />
            </div>
            
            {/* Overview Section */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-lg text-white/80">
                  Unikrn, established in 2014, is a leading esports entertainment and betting platform. To enhance its offerings, Unikrn introduced UnikoinGold (UKG), an ERC20 token on the Ethereum blockchain, aiming to create a decentralized, community-driven virtual economy for esports enthusiasts. Hanzo AI partnered with Unikrn to address regulatory challenges, implement blockchain solutions, and enhance user engagement.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {['Blockchain', 'Ethereum', 'Smart Contracts', 'ERC20 Tokens', 'API Integration', 'AI Algorithms', 'Web3', 'Decentralized Finance'].map(tech => (
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
                  The integration of blockchain technology into Unikrn's platform presented several challenges including regulatory compliance across various jurisdictions, technological integration of blockchain systems, and developing features that would drive adoption of UnikoinGold among the esports community.
                </p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-3">Solution</h2>
                <p className="text-white/80">
                  Hanzo AI collaborated with Unikrn to develop a compliance framework, assisted in designing and implementing Ethereum smart contracts, and helped develop user-centric features such as tipping for esports participants and a new skill-based betting platform powered by UnikoinGold.
                </p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-3">Results</h2>
                <p className="text-white/80">
                  The collaboration led to enhanced compliance allowing Unikrn to operate within legal frameworks across jurisdictions, successful integration of blockchain technology establishing a transparent transaction system, and increased user engagement through new interactive features for the esports community.
                </p>
              </div>
            </div>
            
            {/* Detailed Sections */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Regulatory Strategy</h2>
              <p className="text-lg text-white/80 mb-8">
                Hanzo AI collaborated with Unikrn to develop a sophisticated compliance framework, distinguishing between Full Service Jurisdictions and Limited Jurisdictions. In Full Service Jurisdictions, UnikoinGold was utilized for legal and licensed betting on esports matches, tournaments, and related activities. In Limited Jurisdictions, its use was restricted to purchasing jackpot tickets and accessing exclusive rooms. This tailored approach enabled Unikrn to navigate the complex regulatory landscape of online betting while expanding their market reach.
              </p>
              
              <h2 className="text-2xl font-bold mb-6">Blockchain Integration</h2>
              <p className="text-lg text-white/80 mb-8">
                Our team assisted in designing and implementing Ethereum smart contracts, ensuring that transactions were publicly accessible, open, and transparent. We created secure API endpoints to connect Unikrn's existing platform with the Ethereum blockchain, establishing a decentralized virtual economy. The implementation included wallet management systems, transaction monitoring tools, and automated compliance checks to ensure the platform's integrity.
              </p>
              
              <h2 className="text-2xl font-bold mb-6">User-Centric Features</h2>
              <p className="text-lg text-white/80 mb-8">
                To enhance user engagement, Hanzo AI helped develop several innovative features for the platform. These included a tipping system for esports participants, players, and teams, allowing fans to directly support their favorites. We also introduced a skill-based betting platform powered by UnikoinGold, enabling users to wager on their own performance in popular games. Additionally, we implemented a rewards system that incentivized platform participation and token utilization.
              </p>
              
              <h2 className="text-2xl font-bold mb-6">Key Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/5 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-accent mb-2">15+</div>
                  <p className="text-white/80">Jurisdictions supported</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-accent mb-2">300%</div>
                  <p className="text-white/80">Increase in platform engagement</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-accent mb-2">$30M+</div>
                  <p className="text-white/80">Token value within ecosystem</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-6">ICO Success Story</h2>
              <div className="bg-white/5 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Strategic Partnership</h3>
                <p className="text-lg text-white/80 mb-6">
                  Hanzo AI was engaged as an outsourced Chief Marketing Officer (CMO) and Chief Technology Officer (CTO) to oversee the strategic development and execution of UnikoinGold's Initial Coin Offering (ICO). Our team developed comprehensive marketing strategies targeting both the esports community and cryptocurrency investors while simultaneously managing the technical aspects of the ICO, including token creation, smart contract development, and platform security.
                </p>
                
                <h3 className="text-xl font-bold mb-4">Remarkable Results</h3>
                <p className="text-lg text-white/80 mb-6">
                  The ICO, launched in September 2017, was a remarkable success, raising over 120,000 Ether (approximately $34.9 million at the time). This achievement was bolstered by strategic partnerships with high-profile investors, including Ethereum co-founder Anthony Di Iorio and entrepreneur Mark Cuban, who had previously invested in Unikrn.
                </p>
                
                <h3 className="text-xl font-bold mb-4">Token Innovation</h3>
                <p className="text-lg text-white/80">
                  UnikoinGold was designed with innovative utility as a medium of exchange within the Unikrn platform, allowing users to bet on esports matches and participate in other platform activities. This practical application of blockchain technology created real value for users and contributed significantly to the token's adoption and success.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold mb-6">Conclusion</h2>
              <p className="text-lg text-white/80">
                Hanzo AI's strategic partnership with Unikrn was pivotal in the successful launch and integration of UnikoinGold. By addressing regulatory challenges, implementing advanced blockchain solutions, and enhancing user engagement, Hanzo AI contributed significantly to Unikrn's vision of creating a decentralized, community-driven virtual economy for esports enthusiasts. The project demonstrates how AI-driven strategic planning can help overcome the complex challenges of blockchain integration in regulated industries.
              </p>
            </div>
            
            {/* Testimonial Section */}
            <div className="my-16 bg-accent/10 rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-[150px] leading-none font-bold text-accent/5 -mt-10 -mr-5">"</div>
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <p className="text-xl md:text-2xl italic text-white mb-6">
                  "Hanzo AI's expertise in blockchain technology and regulatory compliance was instrumental in bringing UnikoinGold to market. Their strategic insights helped us navigate complex challenges while their technical implementation enabled us to create a truly decentralized ecosystem for our users."
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full mr-4"></div>
                  <div className="text-left">
                    <div className="font-bold">Rahul Sood</div>
                    <div className="text-white/70">CEO at Unikrn</div>
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
                    src="/lovable-uploads/919bfa95-912a-489f-a859-7a42e0d7d435.png" 
                    alt="Casper Blockchain" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white uppercase">CASPER BLOCKCHAIN</h3>
                    <p className="text-white/80 mt-1 text-sm uppercase font-medium">ENTERPRISE-GRADE SECURE BLOCKCHAIN PLATFORM</p>
                    <Link to="/project/casper-blockchain" className="mt-4 lets-talk-btn w-fit">
                      Explore
                      <ArrowUpRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
                
                {/* Second Related Project */}
                <div className="relative aspect-[4/3] overflow-hidden group rounded-lg">
                  <img 
                    src="/lovable-uploads/7269bbbd-37f4-4f9e-af2b-4e6a47122f10.png" 
                    alt="Bellabeat" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white uppercase">BELLABEAT</h3>
                    <p className="text-white/80 mt-1 text-sm uppercase font-medium">WOMEN'S HEALTH WEARABLE TECH PLATFORM</p>
                    <Link to="/project/bella-beat" className="mt-4 lets-talk-btn w-fit">
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

export default CaseStudyUnikoinGold;