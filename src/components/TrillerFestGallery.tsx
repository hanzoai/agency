
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main large image */}
        <div className="md:col-span-3 bg-white p-2 rounded-xl shadow-md">
          <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-contain"
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
          
          <div className="text-center mt-2 text-sm text-gray-600">
            {images[currentIndex].alt}
          </div>
        </div>
        
        {/* Thumbnails row */}
        <div className="md:col-span-3 flex justify-center gap-2 mt-4 overflow-x-auto py-2 px-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-16 h-16 border-2 rounded-md overflow-hidden transition-all ${
                index === currentIndex ? 'border-accent ring-2 ring-accent/30 scale-110' : 'border-transparent opacity-70'
              }`}
              aria-label={`View ${image.alt}`}
            >
              <img 
                src={image.src} 
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrillerFestGallery;
