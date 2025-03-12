
import React, { useState } from 'react';
import { projects } from '@/data/projectsData';

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
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4 reveal">
            <img 
              src={imageErrors[displayProjects[0].id] ? "/placeholder.svg" : displayProjects[0].image} 
              alt={displayProjects[0].title} 
              className="w-full h-full object-cover"
              onError={() => handleImageError(displayProjects[0].id)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <span className="text-sm font-medium text-white/70 mb-1">{displayProjects[0].category}</span>
              <h3 className="text-xl font-bold text-white">{displayProjects[0].title}</h3>
              <p className="text-white/80 mt-1">{displayProjects[0].description}</p>
            </div>
          </div>
        )}
      </div>

      {/* Desktop display (grid layout with all projects) - Changed to max 2x2 grid */}
      <div className="hidden md:grid md:grid-cols-2 gap-4">
        {displayProjects.map((project) => (
          <div key={project.id} className="relative aspect-[3/4] overflow-hidden rounded-lg reveal">
            <img 
              src={imageErrors[project.id] ? "/placeholder.svg" : project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
              onError={() => handleImageError(project.id)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-sm font-medium text-white/70 mb-1">{project.category}</span>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-white/80 mt-1">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGallery;
