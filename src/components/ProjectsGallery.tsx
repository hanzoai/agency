
import React, { useState } from 'react';
import { projects } from '@/data/projectsData';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsGalleryProps {
  selectedCategory: string;
}

const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ selectedCategory }) => {
  // State to track image loading errors
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // If no projects found in selected category, show all projects
  const displayProjects = filteredProjects.length > 0 ? filteredProjects : projects;

  const handleImageError = (projectId: number) => {
    console.error(`Image loading error for project ID: ${projectId}`);
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  return (
    <div className="mb-20">
      {/* Mobile display (single column, show first project only) */}
      <div className="block md:hidden">
        {displayProjects.length > 0 && (
          <div className="relative aspect-[3/4] overflow-hidden mb-4 reveal">
            <img 
              src={imageErrors[displayProjects[0].id] ? "/placeholder.svg" : displayProjects[0].image} 
              alt={displayProjects[0].title} 
              className="w-full h-full object-cover"
              onError={() => handleImageError(displayProjects[0].id)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white uppercase">Bella Beat</h3>
              <p className="text-white/80 mt-1 text-sm uppercase font-medium">How we transformed wellness wearables for women and made company millions.</p>
              <button className="mt-4 lets-talk-btn w-fit">
                Explore
                <ArrowUpRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Desktop display (grid layout with all projects) */}
      <div className="hidden md:grid md:grid-cols-2 gap-6">
        {displayProjects.slice(0, 4).map((project) => (
          <div key={project.id} className="relative aspect-[4/3] overflow-hidden group reveal">
            <img 
              src={imageErrors[project.id] ? "/placeholder.svg" : project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
              onError={() => handleImageError(project.id)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white uppercase">Bella Beat</h3>
              <p className="text-white/80 mt-1 text-sm uppercase font-medium">How we transformed wellness wearables for women and made company millions.</p>
              <button className="mt-4 lets-talk-btn w-fit">
                Explore
                <ArrowUpRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGallery;
