
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TrillerFestGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: '/lovable-uploads/6f11fa66-23b1-4967-aab8-1fa841066ef6.png',
      alt: 'TrillerFest marshmello promo'
    },
    {
      src: '/lovable-uploads/6d99dc8e-9c12-43be-92a0-2ccfff19df71.png',
      alt: 'TrillerFest event poster'
    },
    {
      src: '/lovable-uploads/6b15d7d1-402e-4fe9-b788-242699e6177b.png',
      alt: 'TrillerFest Migos announcement'
    },
    {
      src: '/lovable-uploads/ea67c751-6546-4b12-8db7-f9089164b222.png',
      alt: 'TrillerFest Pitbull announcement'
    },
    {
      src: '/lovable-uploads/9192c050-a4bd-4523-946f-5e21a2628214.png',
      alt: 'TrillerFest statistics and comparisons'
    }
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8 mb-12 reveal">
      <div className="bg-white p-4 rounded-xl shadow-md">
        {/* Main image with fixed dimensions */}
        <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden rounded-lg">
          <img
            key={currentIndex} // Add key to force re-render when changing images
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="max-w-full max-h-full object-contain"
          />
          
          {/* Navigation buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="text-center mt-3 mb-1 text-sm text-gray-600">
          {images[currentIndex].alt}
        </div>
        
        {/* Thumbnails */}
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex-shrink-0 w-16 h-16 overflow-hidden rounded-md transition-all ${
                index === currentIndex ? 'ring-2 ring-accent' : 'opacity-70'
              }`}
              aria-label={`View ${image.alt}`}
            >
              <img 
                src={image.src} 
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {index === currentIndex && (
                <div className="absolute inset-0 border-2 border-accent rounded-md"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrillerFestGallery;
