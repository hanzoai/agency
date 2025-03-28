import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowRight, Globe, Linkedin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';
import { socialLinksData } from '@/data/socialLinksData';
import GlobalMuteButton from '@/components/GlobalMuteButton';
import { caseStudiesData } from '@/data/caseStudiesData';
import { CaseStudyData } from '@/types/caseStudy';

// Extended interface that includes additional fields from the static data
// that aren't in the CaseStudyData interface
interface ExtendedCaseStudyData extends CaseStudyData {
  youtubeId?: string;
  technologies?: string[];
  galleryImages?: string[];
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ExtendedCaseStudyData | null>(null);
  
  useEffect(() => {
    // Set the body to dark theme
    document.body.classList.add('dark');
    
    // This mapping handles the case where URL params might use different IDs than the data
    const idMapping: Record<string, string> = {
      'damon': 'damon-motorcycles',
      // Add other mappings if needed
    };
    
    // Get the correct ID to use for data lookup
    const dataId = idMapping[id || ''] || id;
    
    if (dataId && caseStudiesData[dataId]) {
      const caseStudy = caseStudiesData[dataId];
      
      // Extract YouTube ID from videoUrl if available
      let youtubeId = '';
      if (caseStudy.videoUrl) {
        const match = caseStudy.videoUrl.match(/embed\/([^?]+)/);
        youtubeId = match ? match[1] : '';
      }
      
      // Create an extended case study with additional fields
      const extendedCaseStudy: ExtendedCaseStudyData = {
        ...caseStudy,
        youtubeId,
        // Map images to galleryImages for compatibility with existing rendering
        galleryImages: caseStudy.images,
        // Add technologies if we want to display them (not in original CaseStudyData)
        technologies: getTechnologiesForProject(dataId)
      };
      
      setProject(extendedCaseStudy);
    }
    
    return () => {
      document.body.classList.remove('dark');
    };
  }, [id]);
  
  // Helper function to provide technologies based on project ID
  // This data was previously hardcoded in the static object
  const getTechnologiesForProject = (projectId: string): string[] => {
    const technologiesMap: Record<string, string[]> = {
      'trillerfest': ['React', 'WebRTC', 'Node.js', 'AWS Media Services', 'WebGL'],
      'bellabeat': ['AI Algorithms', 'Data Analytics', 'Wearable Tech', 'Health Metrics', 'Cloud Infrastructure', 'Marketing Automation', 'User Experience', 'Data Visualization'],
      'damon-motorcycles': ['Three.js', 'WebGL', 'Facebook Ads', 'Google Analytics', 'Hubspot'],
      'cover-build': ['React', 'Three.js', 'WebGL', 'Gatsby', 'Contentful'],
      'unikoin-gold': ['Blockchain', 'Ethereum', 'Smart Contracts', 'ERC20 Tokens', 'API Integration', 'AI Algorithms', 'Web3', 'Decentralized Finance'],
      'casper-blockchain': ['Blockchain', 'Rust', 'Proof of Stake', 'Smart Contracts', 'Validator Nodes', 'Enterprise Architecture', 'Decentralized Finance'],
      'myle-tap': ['Mobile App Development', 'UX/UI Design', 'API Integration', 'Bluetooth Technology', 'Voice Recognition', 'Video Production', 'Digital Marketing']
    };
    
    return technologiesMap[projectId] || [];
  };
  
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

  // Helper function to join string arrays into a single string
  // Used for converting arrays in caseStudiesData to strings needed for rendering
  const joinStringArray = (arr: string[]): string => {
    return arr.join(' ');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <GlobalMuteButton />
      
      <main className="pt-36">
        {/* Hero Section - Video for most projects, Image for Damon */}
        {project.id === 'damon-motorcycles' ? (
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
          <p className="text-xl md:text-2xl text-white/80 mb-6">{project.subtitle}</p>
          
          {/* Social Media Icons - Now using the socialLinks from caseStudiesData directly */}
          {project.socialLinks && (
            <div className="flex flex-col space-y-4 mb-12">
              <SocialLinks 
                links={project.socialLinks.links}
                totalFollowers={project.socialLinks.totalFollowers}
              />
            </div>
          )}
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {project.overview && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                {project.overview.map((paragraph, index) => (
                  <p key={`overview-${index}`} className="text-lg text-white/80 mb-4">{paragraph}</p>
                ))}
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
                  project.id === 'damon-motorcycles' && index === 1 ? (
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
                {project.challenge.map((paragraph, index) => (
                  <p key={`challenge-${index}`} className="text-white/80 mb-2">{paragraph}</p>
                ))}
              </div>
            )}
            
            {project.solution && (
              <div className="bg-white/5 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-3">Solution</h2>
                {project.solution.map((paragraph, index) => (
                  <p key={`solution-${index}`} className="text-white/80 mb-2">{paragraph}</p>
                ))}
              </div>
            )}
            
            {project.results && (
              <div className="bg-white/5 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-3">Results</h2>
                <ul className="text-white/80">
                  {project.results.map((result, index) => (
                    <li key={`result-${index}`} className="mb-1">• {result}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="mb-16 bg-white/5 p-8 rounded-lg">
              <blockquote className="text-xl italic mb-4">
                "{project.testimonial.quote}"
              </blockquote>
              <p className="font-bold">
                - {project.testimonial.author}, {project.testimonial.role}
              </p>
            </div>
          )}

          {/* Related Projects */}
          {project.relatedProjects && project.relatedProjects.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.relatedProjects.map((relatedProject, index) => (
                  <div key={`related-${index}`} className="relative aspect-[4/3] overflow-hidden group">
                    <img 
                      src={relatedProject.imageUrl} 
                      alt={relatedProject.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-xl font-bold text-white uppercase">{relatedProject.title}</h3>
                      <p className="text-white/80 mt-1 text-sm uppercase font-medium">{relatedProject.subtitle}</p>
                      <Link to={relatedProject.route} className="mt-4 lets-talk-btn w-fit">
                        Explore
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;