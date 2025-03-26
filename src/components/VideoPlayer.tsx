import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  youtubeId: string;
  title: string;
  className?: string;
  autoplay?: boolean;
  showControls?: boolean;
  isHero?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  youtubeId, 
  title, 
  className = 'w-full h-full', 
  autoplay = false,
  showControls = false,
  isHero = false
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle intersection observer for scroll-based playback
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: isHero ? 0.1 : 0.7 // Higher threshold for gallery videos
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Only control playback if not actively hovered (for desktop)
        if (!isHovered || !window.matchMedia('(hover: hover)').matches) {
          setIsPlaying(entry.isIntersecting);
        }
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isHero, isHovered]);

  // Generate YouTube embed URL with appropriate parameters
  const getYouTubeEmbedUrl = () => {
    const params = new URLSearchParams({
      autoplay: isPlaying ? '1' : '0',
      mute: isMuted ? '1' : '0',
      controls: showControls ? '1' : '0',
      loop: '1',
      playlist: youtubeId,
      showinfo: '0',
      rel: '0',
      modestbranding: '1',
      origin: window.location.origin,
      iv_load_policy: '3',
    });
    
    return `https://www.youtube.com/embed/${youtubeId}?${params.toString()}`;
  };

  // Handle mouse events for desktop
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (window.matchMedia('(hover: hover)').matches) {
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (window.matchMedia('(hover: hover)').matches) {
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <iframe
        key={`${youtubeId}-${isPlaying}-${isMuted}`} // Force iframe refresh when props change
        className="w-full h-full object-cover"
        src={getYouTubeEmbedUrl()}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      ></iframe>

      {/* Sound control button */}
      <button 
        onClick={toggleMute}
        className={`absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white z-30 transition-opacity duration-300 ${isHovered || !isMuted ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
};

export default VideoPlayer;