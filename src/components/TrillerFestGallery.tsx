
import React from 'react';

const TrillerFestGallery = () => {
  const images = [
    {
      src: '/lovable-uploads/6f11fa66-23b1-4967-aab8-1fa841066ef6.png',
      alt: 'TrillerFest marshmello promo'
    },
    {
      src: '/lovable-uploads/b92d4c8a-c139-4a28-b4a8-8a2a71abcd2f.png',
      alt: 'TrillerFest Pitbull announcement'
    }
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8 mb-12 space-y-8 reveal">
      {/* First image */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden rounded-lg">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        
        <div className="text-center mt-3 mb-1 text-sm text-gray-600">
          {images[0].alt}
        </div>
      </div>

      {/* Second image */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden rounded-lg">
          <img
            src={images[1].src}
            alt={images[1].alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        
        <div className="text-center mt-3 mb-1 text-sm text-gray-600">
          {images[1].alt}
        </div>
      </div>
    </div>
  );
};

export default TrillerFestGallery;
