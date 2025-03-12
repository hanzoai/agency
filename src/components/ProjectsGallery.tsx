
import React from 'react';

const ProjectsGallery = () => {
  // Project data
  const projects = [
    {
      id: 1,
      title: 'Luxury Automotive',
      description: 'Brand identity for premium vehicle experience',
      image: '/lovable-uploads/f71f63e4-4be8-4d49-badd-aed53446d9c5.png',
      category: 'Branding',
    },
    {
      id: 2,
      title: 'VR Experience',
      description: 'Immersive virtual reality application design',
      image: '/lovable-uploads/919bfa95-912a-489f-a859-7a42e0d7d435.png',
      category: 'Technology',
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
      {/* First project (always visible on both mobile and desktop) */}
      <div className="relative aspect-square overflow-hidden rounded-lg reveal">
        <img 
          src={projects[0].image} 
          alt={projects[0].title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <span className="text-sm font-medium text-white/70 mb-1">{projects[0].category}</span>
          <h3 className="text-xl font-bold text-white">{projects[0].title}</h3>
          <p className="text-white/80 mt-1">{projects[0].description}</p>
        </div>
      </div>
      
      {/* Second project (only visible on desktop) */}
      <div className="relative aspect-square overflow-hidden rounded-lg hidden md:block reveal">
        <img 
          src={projects[1].image} 
          alt={projects[1].title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <span className="text-sm font-medium text-white/70 mb-1">{projects[1].category}</span>
          <h3 className="text-xl font-bold text-white">{projects[1].title}</h3>
          <p className="text-white/80 mt-1">{projects[1].description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGallery;
