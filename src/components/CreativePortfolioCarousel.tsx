import React from 'react';

const CreativePortfolioCarousel = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Creative Portfolio</h2>
          <p className="text-lg text-gray-600">Showcasing our latest design work and creative campaigns</p>
        </div>
        
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 w-max">
            {/* First set of images */}
            <div className="w-80 bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0">
              <img src="/images/carousel/ad creative.jpeg" alt="ad creative" className="w-full h-80 object-cover" />
              <div className="p-4"><h3 className="font-semibold">ad creative</h3></div>
            </div>
            
            <div className="w-80 bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0">
              <img src="/images/carousel/web design.jpeg" alt="web design" className="w-full h-80 object-cover" />
              <div className="p-4"><h3 className="font-semibold">web design</h3></div>
            </div>
            
            <div className="w-80 bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0">
              <img src="/images/carousel/branding services.jpeg" alt="branding services" className="w-full h-80 object-cover" />
              <div className="p-4"><h3 className="font-semibold">branding services</h3></div>
            </div>
            
            <div className="w-80 bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0">
              <img src="/images/carousel/illustration design.jpeg" alt="illustration design" className="w-full h-80 object-cover" />
              <div className="p-4"><h3 className="font-semibold">illustration design</h3></div>
            </div>
            
            <div className="w-80 bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0">
              <img src="/images/carousel/presentation design.jpg" alt="presentation design" className="w-full h-80 object-cover" />
              <div className="p-4"><h3 className="font-semibold">presentation design</h3></div>
            </div>
            
            <div className="w-80 bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0">
              <img src="/images/carousel/social media creative.jpeg" alt="social media creative" className="w-full h-80 object-cover object-[center_75%]" />
              <div className="p-4"><h3 className="font-semibold">social media creative</h3></div>
            </div>
            
            <div className="w-80 bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0">
              <img src="/images/carousel/video production.jpeg" alt="video production" className="w-full h-80 object-cover" />
              <div className="p-4"><h3 className="font-semibold">video production</h3></div>
            </div>
            
            <div className="w-80 bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0">
              <img src="/images/carousel/motion design.jpg" alt="motion design" className="w-full h-80 object-cover" />
              <div className="p-4"><h3 className="font-semibold">motion design</h3></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativePortfolioCarousel;
