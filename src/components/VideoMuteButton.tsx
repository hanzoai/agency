import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface VideoMuteButtonProps {
  className?: string;
  videoId: string;
}

const VideoMuteButton: React.FC<VideoMuteButtonProps> = ({ className, videoId }) => {
  const [isMuted, setIsMuted] = useState(true);

  // Use video-specific state with global fallback
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize from global state if not set locally
      const storedState = localStorage.getItem(`video-muted-${videoId}`);
      if (storedState !== null) {
        setIsMuted(storedState === 'true');
      } else if (window.globalMuteState !== undefined) {
        setIsMuted(window.globalMuteState);
      }
      
      // Listen for global mute changes
      const handleGlobalMuteChange = () => {
        setIsMuted(window.globalMuteState);
        localStorage.setItem(`video-muted-${videoId}`, String(window.globalMuteState));
      };
      
      window.addEventListener('globalMuteChange', handleGlobalMuteChange);
      return () => {
        window.removeEventListener('globalMuteChange', handleGlobalMuteChange);
      };
    }
  }, [videoId]);
  
  // Toggle mute for this specific video and update global state
  const toggleMute = () => {
    if (typeof window !== 'undefined') {
      const newMutedState = !isMuted;
      // Update local state
      setIsMuted(newMutedState);
      // Store preference for this video
      localStorage.setItem(`video-muted-${videoId}`, String(newMutedState));
      // Update global mute state
      window.globalMuteState = newMutedState;
      // Notify other components
      window.dispatchEvent(new Event('globalMuteChange'));
    }
  };

  return (
    <button 
      onClick={toggleMute}
      className={`absolute bottom-6 right-6 p-3 rounded-full bg-black/60 text-white z-50 transition-all duration-300 shadow-lg hover:bg-black/80 border ${isMuted ? 'border-gray-400' : 'border-white'} ${className}`}
      aria-label={isMuted ? "Unmute video" : "Mute video"}
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