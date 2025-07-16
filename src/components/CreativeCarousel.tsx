import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface CreativeWork {
  id: string;
  title: string;
  imagePath: string;
  description?: string;
}

const creativeWorks: CreativeWork[] = [
  {
    id: 'april-recap',
    title: 'The April Recap',
    imagePath: '/images/creative-portfolio/presentation-design.jpg',
    description: 'Newsletter design with mountain landscape'
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity Design',
    imagePath: '/images/creative-portfolio/branding-services.jpeg',
    description: 'Complete brand identity system with color palette'
  },
  {
    id: 'illustration',
    title: 'Illustration Design',
    imagePath: '/images/creative-portfolio/illustration-design.jpeg',
    description: 'Custom illustration with star motif'
  },
  {
    id: 'future-belongs',
    title: 'The Future Belongs to the Impatient',
    imagePath: '/images/creative-portfolio/ad-creative.jpeg',
    description: 'Bold typography design'
  },
  {
    id: 'brand-strategy',
    title: 'Brand Strategy',
    imagePath: '/images/creative-portfolio/social-media-creative.jpeg',
    description: 'Brand elements and messaging framework'
  },
  {
    id: 'video-production',
    title: 'Video Production',
    imagePath: '/images/creative-portfolio/video-production.jpeg',
    description: 'Behind-the-scenes production shoot'
  },
  {
    id: 'web-design',
    title: 'Web Design',
    imagePath: '/images/creative-portfolio/web-design.jpeg',
    description: 'Modern website design concept'
  }
];

const CreativeCarousel = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Creative Portfolio</h2>
          <p className="text-lg text-gray-600">Showcasing our latest design work and creative campaigns</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {creativeWorks.map((work) => (
              <CarouselItem key={work.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative aspect-square overflow-hidden bg-gray-100">
                        <img
                          src={work.imagePath}
                          alt={work.title}
                          className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${
                            work.id === 'brand-strategy' ? 'object-[center_75%]' : ''
                          }`}
                          onError={(e) => {
                            console.error(`Failed to load image: ${work.imagePath}`);
                            e.currentTarget.src = '/placeholder.svg';
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2">{work.title}</h3>
                        {work.description && (
                          <p className="text-sm text-gray-600">{work.description}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default CreativeCarousel;