import React, { useState } from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
  index: number;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, index }) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => {
    console.error(`Failed to load gallery image ${index + 1}:`, src);
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="rounded-lg overflow-hidden bg-gray-900 relative h-64">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="animate-pulse text-gray-600">Loading...</div>
        </div>
      )}
      {imageError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="text-gray-500 text-center p-4">
            <p className="text-sm">Image could not be loaded</p>
            <p className="text-xs mt-2">{src}</p>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading="lazy"
        />
      )}
    </div>
  );
};

interface CaseStudyGalleryProps {
  images: string[];
  title: string;
}

const CaseStudyGallery: React.FC<CaseStudyGalleryProps> = ({ images, title }) => {
  if (!images || images.length <= 1) {
    return null;
  }

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.slice(0, 3).map((image, index) => (
          <GalleryImage
            key={index}
            src={image}
            alt={`${title} - Image ${index + 1}`}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudyGallery;
