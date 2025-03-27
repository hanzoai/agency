import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import GlobalMuteButton from '@/components/GlobalMuteButton';

interface Project {
  id: string;
  title: string;
  youtubeId: string;
  description: string;
  fullDescription?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  technologies?: string[];
  galleryImages?: string[];
}

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);
  
  useEffect(() => {
    // Set the body to dark theme
    document.body.classList.add('dark');
    
    // This would normally be an API call
    // For demo purposes, we'll use a static object
    const projectsData: Record<string, Project> = {
      'triller': {
        id: 'triller',
        title: 'Trillerfest',
        youtubeId: 'QEQpdYYYlhc',
        description: 'LARGEST VIRTUAL MUSIC FESTIVAL IN HISTORY',
        fullDescription: 'TrillerFest was a groundbreaking virtual music festival that brought together top artists during a time when live events were impossible. Our team was tasked with creating an immersive digital experience that would capture the energy of a live event while being accessible to millions worldwide.',
        challenge: 'The challenge was to create a seamless streaming experience for millions of concurrent viewers, integrate multiple artist performances from different locations, and build an engaging platform that would keep viewers engaged throughout the multi-day event.',
        solution: 'We developed a custom streaming platform with adaptive bitrate technology, created virtual stages with unique visual identities for each artist, and implemented real-time interaction features to connect artists with fans. The solution included a responsive design that worked across all devices and integrated social media sharing to maximize reach.',
        results: 'TrillerFest became the largest virtual music festival in history with over 5 million concurrent viewers and 20+ million total views. The event generated significant media coverage and established a new benchmark for virtual music experiences.',
        technologies: ['React', 'WebRTC', 'Node.js', 'AWS Media Services', 'WebGL'],
        galleryImages: [
          '/images/trillerfest/main-promo.jpg',    // Image 1 - Main poster with red background
          '/images/trillerfest/migos-promo.jpg',    // Image 2 - Migos promo image
          '/images/trillerfest/pitbull-promo.jpg'   // Image 3 - Pitbull promo image
        ]
      },
      'bella-beat': {
        id: 'bella-beat',
        title: 'Bellabeat',
        youtubeId: 'rsda3VIuRxM',
        description: 'WOMEN\'S HEALTH WEARABLE TECH PLATFORM',
        fullDescription: 'Bellabeat, established in 2014 by Urška Sršen and Sandro Mur, is a pioneering fem-tech company dedicated to women\'s health and wellness. The company specializes in wearable technology that enables women to monitor their health metrics, including menstrual cycles, sleep patterns, and stress levels.',
        challenge: 'In its early years, Bellabeat faced significant challenges in scaling its operations and reaching a broader audience. The competitive landscape of health tech demanded innovative marketing strategies and robust technological infrastructure to support growth. Data management and personalization at scale were key obstacles to overcome.',
        solution: 'Hanzo AI implemented advanced AI algorithms to analyze consumer behavior and preferences, enabling Bellabeat to tailor its marketing campaigns effectively. We overhauled Bellabeat\'s data management systems, introducing scalable solutions that could handle increased user data volumes and created personalized data visualization tools that improved user engagement with health metrics.',
        results: 'The strategic partnership between Bellabeat and Hanzo AI yielded substantial results. Bellabeat experienced a significant surge in sales, with revenue estimates reaching up to $35 million by May 2024. User retention increased by 45%, and overall engagement with the platform improved by 67%.',
        technologies: ['AI Algorithms', 'Data Analytics', 'Wearable Tech', 'Health Metrics', 'Cloud Infrastructure', 'Marketing Automation', 'User Experience', 'Data Visualization'],
        galleryImages: [
          '/images/bellabeat/bella-1.jpg',
          '/images/bellabeat/bella-2.jpg',
          '/images/bellabeat/bella-3.jpeg'
        ]
      },
      'damon': {
        id: 'damon',
        title: 'Damon Motorcycles',
        youtubeId: 'T6FyMkSAf7w',
        description: 'HIGHLY CONVERTING 500X ROI CAMPAIGN',
        fullDescription: 'Damon Motorcycles approached us to create a digital campaign for their revolutionary electric motorcycle. The goal was to generate pre-orders and investment interest by showcasing the bike\'s innovative safety features and performance capabilities.',
        challenge: 'The electric motorcycle market was crowded with competitors, and Damon needed to differentiate their product while convincing traditional motorcycle enthusiasts to consider an electric alternative. The campaign needed to generate tangible ROI through pre-orders.',
        solution: 'We created a multi-channel digital campaign centered around high-quality visual content that demonstrated the motorcycle\'s features in action. The campaign included targeted social media ads, an interactive landing page with 3D visualization, and retargeting strategies to maximize conversion.',
        results: 'The campaign achieved a remarkable 500X ROI, generating over $2M in pre-orders from an investment of $4,000. Additionally, it helped secure Series A funding by demonstrating market demand.',
        technologies: ['Three.js', 'WebGL', 'Facebook Ads', 'Google Analytics', 'Hubspot'],
        galleryImages: [
          '/images/damon/damon-2.jpg',    // Black model in studio
          '/images/damon/damon-1.jpg',    // White/gold and black models
          '/images/damon/damon-3.jpg'     // Black model on road
        ]
      },
      'cover-build': {
        id: 'cover-build',
        title: 'Cover Build',
        youtubeId: 'zZwdjRw3w2w',
        description: 'REVOLUTIONARY PREFAB HOUSING SOLUTION',
        fullDescription: 'Cover Build is reinventing housing with precision-engineered, fully customizable prefabricated homes. We partnered with them to create a digital presence that would showcase their innovative approach to modern living.',
        challenge: 'We needed to communicate the value of prefabricated housing to a market that often associates it with lower quality. The website needed to highlight the precision engineering while making the customization process intuitive for potential buyers.',
        solution: 'We developed an immersive website featuring 3D visualization tools that allowed users to explore and customize their potential homes. The site incorporated detailed animations explaining the engineering process and showcased completed projects through virtual tours.',
        results: 'The new digital platform increased qualified leads by 300% and reduced the sales cycle by 40%. The visualization tools proved particularly effective, with 70% of customers using them before making purchase decisions.',
        technologies: ['React', 'Three.js', 'WebGL', 'Gatsby', 'Contentful'],
        galleryImages: [
          '/images/cover-build/cover-1.jpg',
          '/images/cover-build/cover-2.jpeg',
          '/images/cover-build/cover-3.jpeg'
        ]
      },
      'unikoin-gold': {
        id: 'unikoin-gold',
        title: 'UnikoinGold',
        youtubeId: '8TbWsxiyKUE',
        description: 'BLOCKCHAIN-BASED ESPORTS BETTING PLATFORM',
        fullDescription: 'Unikrn, established in 2014, is a leading esports entertainment and betting platform. To enhance its offerings, Unikrn introduced UnikoinGold (UKG), an ERC20 token on the Ethereum blockchain, aiming to create a decentralized, community-driven virtual economy for esports enthusiasts.',
        challenge: 'The integration of blockchain technology into Unikrn\'s platform presented several challenges including regulatory compliance across various jurisdictions, technological integration of blockchain systems, and developing features that would drive adoption among the esports community.',
        solution: 'Hanzo AI collaborated with Unikrn to develop a compliance framework, assisted in designing and implementing Ethereum smart contracts, and helped develop user-centric features such as tipping for esports participants and a new skill-based betting platform powered by UnikoinGold.',
        results: 'The collaboration led to enhanced compliance allowing Unikrn to operate within legal frameworks across jurisdictions, successful integration of blockchain technology establishing a transparent transaction system, and increased user engagement through new interactive features for the esports community.',
        technologies: ['Blockchain', 'Ethereum', 'Smart Contracts', 'ERC20 Tokens', 'API Integration', 'AI Algorithms', 'Web3', 'Decentralized Finance'],
        galleryImages: [
          '/images/unikoin/unikoin-1.jpeg',
          '/images/unikoin/unikoin-2.jpeg',
          '/images/unikoin/unikoin-3.jpeg'
        ]
      },
      'casper-blockchain': {
        id: 'casper-blockchain',
        title: 'Casper Blockchain',
        youtubeId: '7zQZmovxRNs',
        description: 'Foundational partnership creating the first enterprise-ready blockchain from inception',
        fullDescription: 'Hanzo AI began collaborating with Casper Labs in 2018, significantly shaping the direction and technology underpinning what would become the Casper Blockchain, an innovative proof-of-stake network designed specifically for enterprise adoption.',
        challenge: 'The blockchain industry faced significant barriers to enterprise adoption, including performance limitations, security concerns, and lack of enterprise-grade features. Casper Labs needed strategic guidance and technical expertise to develop a solution that could effectively serve complex commercial demands.',
        solution: 'Hanzo AI secured Casper Labs\'s first-ever development grant, establishing early financial support. We advocated for and executed a strategic pivot to the Rust programming language, ensuring enhanced security and scalability. Our team co-designed Casper\'s architecture from inception and led initial deployment, being among the first entities to launch and run validator nodes before the official mainnet launch.',
        results: 'Through Hanzo AI\'s direct involvement, Casper Labs evolved from a conceptual project into a fully operational blockchain platform with a successful mainnet launch in 2021. We co-founded the DEVxDAO, the first Swiss-based blockchain association dedicated to funding cutting-edge blockchain research, which has become instrumental in attracting global blockchain talent and fostering innovation in decentralized technologies.',
        technologies: ['Blockchain', 'Rust', 'Proof of Stake', 'Smart Contracts', 'Validator Nodes', 'Enterprise Architecture', 'Decentralized Finance'],
        galleryImages: [
          '/images/casper/casper-1.jpg',
          '/images/casper/casper-2.png',
          '/images/casper/casper-3.png'
        ]
      },
      'myle-tap': {
        id: 'myle-tap',
        title: 'Myle Tap',
        youtubeId: 'A43eWc8vddg',
        description: 'Innovative wearable interaction technology',
        fullDescription: 'Myle Tap is the world\'s first truly hands-free, voice-activated, wearable shortcut to your apps. Our collaboration with Myle Tap helped launch this groundbreaking wearable technology that allows users to interact with their smart devices through simple, intuitive voice commands.',
        challenge: 'The wearable technology market was already crowded with established players. Myle Tap needed to differentiate itself with a unique value proposition while ensuring the user experience was seamless across different platforms and devices.',
        solution: 'We developed a comprehensive marketing and launch strategy, designing an intuitive mobile app interface that complemented the physical device. Our team created demonstration videos and interactive web experiences to showcase the product\'s capabilities and ease of use.',
        results: 'The campaign helped Myle Tap secure significant media coverage in major tech publications, leading to a successful product launch with 200% of their crowdfunding goal achieved. The app design received praise for its intuitive interface and seamless integration with the physical device.',
        technologies: ['Mobile App Development', 'UX/UI Design', 'API Integration', 'Bluetooth Technology', 'Voice Recognition', 'Video Production', 'Digital Marketing'],
        galleryImages: [
          '/images/myle-tap/myle-1.jpg',
          '/images/myle-tap/myle-2.jpg',
          '/images/myle-tap/myle-3.jpeg'
        ]
      }
    };
    
    const foundProject = projectsData[projectId || ''];
    if (foundProject) {
      setProject(foundProject);
    }
    
    return () => {
      document.body.classList.remove('dark');
    };
  }, [projectId]);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/case-studies" className="text-accent hover:underline">
            Return to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <GlobalMuteButton />
      
      <main className="pt-36">
        {/* Hero Section - Video for TrillerFest, Image for Damon */}
        {project.id === 'damon' ? (
          <div className="relative w-full h-[35vh] md:h-[49vh] overflow-hidden flex justify-center pt-12 mb-8">
            <div className="w-full md:w-[70%] h-full">
              <img
                src="/images/damon/damon-2.jpg"
                alt="Damon Motorcycles - Black model in studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          </div>
        ) : project.id === 'casper-blockchain' ? (
          <div className="relative w-full h-[35vh] md:h-[49vh] overflow-hidden flex justify-center pt-12 mb-8">
            <div className="w-full md:w-[49%] h-full">  {/* 30% smaller than the 70% default */}
              <iframe
                className="w-full h-full object-cover"
                src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&loop=1&playlist=${project.youtubeId}&controls=1&showinfo=0&rel=0&modestbranding=1&origin=http://localhost:8080&iv_load_policy=3`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          </div>
        ) : (
          <div className="relative w-full h-[35vh] md:h-[49vh] overflow-hidden flex justify-center pt-12 mb-8">
            <div className="w-full md:w-[70%] h-full">
              <iframe
                className="w-full h-full object-cover"
                src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&loop=1&playlist=${project.youtubeId}&controls=1&showinfo=0&rel=0&modestbranding=1&origin=http://localhost:8080&iv_load_policy=3`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          </div>
        )}
        
        {/* Content */}
        <div className="container-custom py-16">
          <Link to="/case-studies" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all projects
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12">{project.description}</p>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {project.fullDescription && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-lg text-white/80">{project.fullDescription}</p>
              </div>
            )}
            
            {project.technologies && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Gallery Section */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Display images with video in place of second image for Damon */}
                {project.galleryImages.map((image, index) => (
                  project.id === 'damon' && index === 1 ? (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <iframe
                        className="w-full h-64 object-cover"
                        src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&controls=1&showinfo=0&rel=0&modestbranding=1&origin=http://localhost:8080&iv_load_policy=3`}
                        title={`${project.title} - Campaign Video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                      ></iframe>
                    </div>
                  ) : (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${project.title} - Image ${index + 1}`} 
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )
                ))}
              </div>
            </div>
          )}
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {project.challenge && (
              <div className="bg-white/5 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-3">Challenge</h2>
                <p className="text-white/80">{project.challenge}</p>
              </div>
            )}
            
            {project.solution && (
              <div className="bg-white/5 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-3">Solution</h2>
                <p className="text-white/80">{project.solution}</p>
              </div>
            )}
            
            {project.results && (
              <div className="bg-white/5 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-3">Results</h2>
                <p className="text-white/80">{project.results}</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;