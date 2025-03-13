
import React from 'react';
const TrillerFestGallery = () => {
  const images = [{
    src: '/lovable-uploads/919bfa95-912a-489f-a859-7a42e0d7d435.png',
    alt: 'TrillerFest Marshmello Artist'
  }, {
    src: '/lovable-uploads/b92d4c8a-c139-4a28-b4a8-8a2a71abcd2f.png',
    alt: 'TrillerFest Pitbull announcement'
  }];
  return <div className="relative w-full max-w-4xl mx-auto mt-8 mb-12 space-y-8 reveal">
      {/* First image */}
      <div className="bg-card p-4 rounded-xl shadow-md border border-border">
        <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden rounded-lg">
          <img src={images[0].src} alt={images[0].alt} className="max-w-full max-h-full object-contain" />
        </div>
        
        <div className="text-center mt-3 mb-1 text-sm text-primary/60">
          {images[0].alt}
        </div>
      </div>

      {/* Second image */}
      <div className="bg-card p-4 rounded-xl shadow-md border border-border">
        <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden rounded-lg">
          <img src={images[1].src} alt={images[1].alt} className="max-w-full max-h-full object-contain" />
        </div>
        
        <div className="text-center mt-3 mb-1 text-sm text-primary/60">
          {images[1].alt}
        </div>
      </div>
    </div>;
};
export default TrillerFestGallery;
