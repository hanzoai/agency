import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const GlobalMuteButton = () => {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Initialize from global state
    if (typeof window !== 'undefined') {
      if (window.globalMuteState === undefined) {
        window.globalMuteState = true;
      }
      setIsMuted(window.globalMuteState);
      
      // Listen for global mute changes
      const handleGlobalMuteChange = () => {
        setIsMuted(window.globalMuteState);
      };
      
      window.addEventListener('globalMuteChange', handleGlobalMuteChange);
      return () => {
        window.removeEventListener('globalMuteChange', handleGlobalMuteChange);
      };
    }
  }, []);
  
  const toggleMute = () => {
    if (typeof window !== 'undefined') {
      window.globalMuteState = !window.globalMuteState;
      window.dispatchEvent(new Event('globalMuteChange'));
      setIsMuted(!isMuted);
    }
  };

  return (
    <button 
      onClick={toggleMute}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-black/50 text-white z-50 transition-all duration-300 shadow-lg hover:bg-black/70 border ${isMuted ? 'border-gray-400' : 'border-white'}`}
      aria-label={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? 
        <div className="relative">
          <VolumeX size={24} className="text-gray-400" />
          <div className="absolute top-1/2 left-1/2 w-0.5 h-8 bg-gray-400 -rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
        </div> : 
        <Volume2 size={24} className="text-white" />
      }
    </button>
  );
};

export default GlobalMuteButton;