import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface VideoMuteButtonProps {
  videoId: string;
  className?: string;
}

const VideoMuteButton: React.FC<VideoMuteButtonProps> = ({ videoId, className = '' }) => {
  const [isMuted, setIsMuted] = useState(true);
  const storageKey = `video_mute_state_${videoId}`;

  useEffect(() => {
    // Initialize from local storage if available
    const savedState = localStorage.getItem(storageKey);
    if (savedState !== null) {
      setIsMuted(savedState === 'true');
    }
  }, [storageKey]);
  
  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    
    // Store state in local storage for persistence
    localStorage.setItem(storageKey, newMuteState.toString());
    
    // Attempt to find the video iframe and update its mute state
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      // Only try to update iframes that are YouTube embeds
      if (iframe.src && iframe.src.includes('youtube.com/embed')) {
        const currentSrc = new URL(iframe.src);
        
        // Update the mute parameter
        if (newMuteState) {
          currentSrc.searchParams.set('mute', '1');
        } else {
          currentSrc.searchParams.set('mute', '0');
        }
        
        // Update the iframe source
        iframe.src = currentSrc.toString();
      }
    });
  };

  return (
    <button 
      onClick={toggleMute}
      className={`absolute z-20 p-2 rounded-full bg-black/50 text-white transition-all duration-300 hover:bg-black/70 border ${isMuted ? 'border-gray-400' : 'border-white'} ${className}`}
      aria-label={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? 
        <div className="relative">
          <VolumeX size={20} className="text-gray-400" />
          <div className="absolute top-1/2 left-1/2 w-0.5 h-7 bg-gray-400 -rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
        </div> : 
        <Volume2 size={20} className="text-white" />
      }
    </button>
  );
};

export default VideoMuteButton;