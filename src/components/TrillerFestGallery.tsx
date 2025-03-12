
import React from 'react';

const TrillerFestGallery = () => {
  const image = {
    src: '/lovable-uploads/6f11fa66-23b1-4967-aab8-1fa841066ef6.png',
    alt: 'TrillerFest marshmello promo'
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8 mb-12 reveal">
      <div className="bg-white p-4 rounded-xl shadow-md">
        <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden rounded-lg">
          <img
            src={image.src}
            alt={image.alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        
        <div className="text-center mt-3 mb-1 text-sm text-gray-600">
          {image.alt}
        </div>
      </div>
    </div>
  );
};

export default TrillerFestGallery;
