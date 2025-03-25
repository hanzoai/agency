import React, { useRef, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VideoCardProps {
  title: string;
  youtubeId: string;
  description?: string;
  index: number;
  projectId: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, youtubeId, description, index, projectId }) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
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
    return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&color=white&disablekb=1`;
  };

  return (
    <div 
      ref={videoRef}
      className={`video-container rounded-xl overflow-hidden h-full ${isVisible ? 'animate-scale-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col h-full">
        <div className="relative w-full flex-grow">
          <iframe
            className="w-full h-full aspect-video object-cover"
            src={getYouTubeEmbedUrl(youtubeId)}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        
        <div className="p-8 bg-gray-900 flex-shrink-0">
          <div className="text-left">
            <h2 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2">
              {title}
            </h2>
            {description && (
              <p className="text-white/90 text-base md:text-lg font-medium mb-6 max-w-md">
                {description}
              </p>
            )}
            <Link to={`/project/${projectId}`}>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium rounded-full px-6 py-2 transition-all duration-300">
                Explore <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;