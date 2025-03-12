
import React from 'react';

const ProjectsGallery = () => {
  // Project data with uploaded images
  const projects = [
    {
      id: 1,
      title: 'Luxury Automotive',
      description: 'Brand identity for premium vehicle experience',
      image: '/lovable-uploads/50c4d7d3-402b-46b6-afd6-767f9bc954ed.png',
      category: 'Branding',
    },
    {
      id: 2,
      title: 'Crypto Trading Platform',
      description: 'User interface design for digital asset exchange',
      image: '/lovable-uploads/a7116aa4-e745-4045-b747-ae8d38f9fed9.png',
      category: 'UI/UX',
    },
    {
      id: 3,
      title: 'Resort Website',
      description: 'Luxury hospitality digital experience design',
      image: '/lovable-uploads/9ceafd4a-8066-40e0-a745-809463abd80f.png',
      category: 'Web Design',
    },
    {
      id: 4,
      title: 'Real Estate Platform',
      description: 'Mobile-first property listing application',
      image: '/lovable-uploads/ae9c7d5a-fc14-49b9-992f-ca422d215788.png',
      category: 'App Design',
    },
    {
      id: 5,
      title: 'Gaming NFT',
      description: 'Blockchain gaming character development',
      image: '/lovable-uploads/47f8fe39-fd8e-4cdd-b41e-f795472cb979.png',
      category: 'Digital Art',
    },
    {
      id: 6,
      title: 'DuckCoin Tokenomics',
      description: 'Visual presentation of cryptocurrency mechanics',
      image: '/lovable-uploads/c39108a4-efce-4f19-a0ac-9597bfcd6cc5.png',
      category: 'Blockchain',
    },
    {
      id: 7,
      title: 'Investment Platform',
      description: 'Financial technology dashboard and landing page design',
      image: '/lovable-uploads/5638c40b-a982-47cd-a7ee-92bb99098491.png',
      category: 'Fintech',
    },
    {
      id: 8,
      title: 'Skincare Brand',
      description: 'Premium beauty product digital marketing website',
      image: '/lovable-uploads/080060dd-e0f5-4bb9-920e-e038607705dd.png',
      category: 'E-commerce',
    },
    {
      id: 9,
      title: 'Electric Bicycle',
      description: 'Sustainable transportation product showcase',
      image: '/lovable-uploads/a6cf43f1-4bcc-451d-8872-c83bf42878f5.png',
      category: 'Product',
    }
  ];

  return (
    <div className="mb-20">
      {/* Mobile display (single column, show first project only) */}
      <div className="block md:hidden">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4 reveal">
          <img 
            src={projects[0].image} 
            alt={projects[0].title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
            <span className="text-sm font-medium text-white/70 mb-1">{projects[0].category}</span>
            <h3 className="text-xl font-bold text-white">{projects[0].title}</h3>
            <p className="text-white/80 mt-1">{projects[0].description}</p>
          </div>
        </div>
      </div>

      {/* Desktop display (grid layout with all projects) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="relative aspect-[3/4] overflow-hidden rounded-lg reveal">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
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
