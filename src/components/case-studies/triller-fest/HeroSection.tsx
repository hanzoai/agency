
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-primary text-white py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="/lovable-uploads/6f11fa66-23b1-4967-aab8-1fa841066ef6.png" alt="TrillerFest Background" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
      </div>
      <div className="container-custom relative z-10">
        <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl reveal">
          <div className="inline-block px-4 py-1 rounded-full text-accent-light text-sm font-medium mb-6 bg-neutral-50">
            Case Study
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            TrillerFest: Largest Virtual Music Festival in History
          </h1>
          <p className="text-xl text-white/80 mb-8">
            How Hanzo helped Triller reach 169 million users and become the #1 app in India with less than $60,000 in ad spend
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-sm">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Music & Social Media
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-sm">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              AI-Driven Marketing
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-sm">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Viral Growth
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
