import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

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
          '/lovable-uploads/919bfa95-912a-489f-a859-7a42e0d7d435.png',
          '/images/trillerfest/trillerfest-1.jpg',
          '/images/trillerfest/trillerfest-2.jpg',
          '/images/trillerfest/trillerfest-3.jpg'
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
        technologies: ['Three.js', 'WebGL', 'Facebook Ads', 'Google Analytics', 'Hubspot']
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
        technologies: ['React', 'Three.js', 'WebGL', 'Gatsby', 'Contentful']
      }
      // Additional projects would be defined here
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
      
      <main className="pt-24">
        {/* Hero Video */}
        <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
          <iframe
            className="w-full h-full object-cover"
            src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${project.youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        
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
                {project.galleryImages.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${project.title} - Image ${index + 1}`} 
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
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