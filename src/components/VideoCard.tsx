import React, { useRef, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Volume2, VolumeX, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VideoCardProps {
  title: string;
  youtubeId: string;
  description?: string;
  index: number;
  projectId: string;
  thumbnailUrl?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, youtubeId, description, index, projectId, thumbnailUrl }) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setIsPlaying(true);
          } else {
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.6 }
    );
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  
  const getYouTubeEmbedUrl = (youtubeId: string): string => {
    return `https://www.youtube.com/embed/${youtubeId}?autoplay=${isPlaying || isHovered ? 1 : 0}&mute=${isMuted ? 1 : 0}&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&color=white&disablekb=1&enablejsapi=1`;
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsPlaying(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!window.matchMedia('(hover: hover)').matches) {
      // On mobile, keep playing if visible in viewport
      return;
    }
    setIsPlaying(false);
  };
  
  // Get default thumbnail if not provided
  const getThumbnailUrl = () => {
    if (thumbnailUrl) return thumbnailUrl;
    // Map project IDs to standard image paths
    const imageMap: Record<string, string> = {
      'damon': '/images/damon/hero-image.jpg',
      'damon-motorcycles': '/images/damon/hero-image.jpg',
      'bellabeat': '/images/bellabeat/bella-1.jpg',
      'cover-build': '/images/cover-build/cover-1.jpg',
      'casper-blockchain': '/images/casper/casper-1.jpg',
      'myle-tap': '/images/myle-tap/myle-1.jpg',
      'unikoin-gold': '/images/unikoin/unikoin-1.jpeg',
      'trillerfest': '/images/trillerfest/main-promo.jpg'
    };
    
    return imageMap[projectId] || (youtubeId ? 'https://img.youtube.com/vi/' + youtubeId + '/maxresdefault.jpg' : '/placeholder.svg');
  };
  
  useEffect(() => {
    // Create a context for global mute state
    if (typeof window !== 'undefined') {
      // Initialize global mute state if not exists
      if (window.globalMuteState === undefined) {
        window.globalMuteState = true;
      }
      
      // Sync with global mute state
      setIsMuted(window.globalMuteState);
      
      // Add listener for global mute changes
      const handleGlobalMuteChange = () => {
        setIsMuted(window.globalMuteState);
      };
      
      window.addEventListener('globalMuteChange', handleGlobalMuteChange);
      
      return () => {
        window.removeEventListener('globalMuteChange', handleGlobalMuteChange);
      };
    }
  }, []);
  
  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Update global mute state
    if (typeof window !== 'undefined') {
      window.globalMuteState = !window.globalMuteState;
      // Dispatch event to notify other components
      window.dispatchEvent(new Event('globalMuteChange'));
    }
    
    setIsMuted(!isMuted);
  };

  return (
    <div 
      ref={videoRef}
      className={`video-container rounded-xl overflow-hidden h-full ${isVisible ? 'animate-scale-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col h-full"
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}>
        <div className="relative w-full h-[360px] overflow-hidden">
          {/* Thumbnail image overlay */}
          <div 
            className={`absolute inset-0 z-10 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            style={{
              backgroundImage: `url(${getThumbnailUrl()})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              width: '100%',
              objectFit: 'cover'
            }}
          >
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 hover:bg-black/40">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                <Play className="text-white" size={30} />
              </div>
            </div>
          </div>

          {/* YouTube iframe - always loaded, visibility controlled by CSS */}
          <div className={`w-full h-full transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <iframe
              className="w-full h-full object-cover"
              src={getYouTubeEmbedUrl(youtubeId)}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          
          {/* Sound toggle button */}
          <button 
            onClick={toggleMute}
            className={`absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white z-30 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} border ${isMuted ? 'border-gray-400' : 'border-white'}`}
          >
            {isMuted ? 
              <div className="relative">
                <VolumeX size={20} className="text-gray-400" />
                <div className="absolute top-1/2 left-1/2 w-0.5 h-7 bg-gray-400 -rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
              </div> : 
              <Volume2 size={20} className="text-white" />
            }
          </button>
        </div>
        
        <div className="p-8 pt-8 pb-8 bg-gray-900 flex-shrink-0 h-[220px]">
          <div className="text-left flex flex-col h-full">
            <div className="mb-auto">
              <h2 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">
                {title}
              </h2>
              {description && (
                <p className="text-white/90 text-base md:text-lg font-medium mb-4 max-w-md font-inter line-clamp-2">
                  {description}
                </p>
              )}
            </div>
            <div className="mb-4">
              <Link to={`/case-study/${projectId}`}>
                <Button className="bg-gray-700 hover:bg-gray-800 text-white font-medium rounded-full px-6 py-2 transition-all duration-300">
                  Explore <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;