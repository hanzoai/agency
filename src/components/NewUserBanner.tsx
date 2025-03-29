
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

const NewUserBanner = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(true); // Set to true by default to show the banner

  useEffect(() => {
    // Set initial timer to 24 hours
    const bannerExpiry = localStorage.getItem('bannerExpiry');
    if (bannerExpiry) {
      const expiryTime = parseInt(bannerExpiry, 10);
      const currentTime = new Date().getTime();
      
      // If less than 24 hours have passed
      if (expiryTime > currentTime) {
        setTimeLeft(Math.floor((expiryTime - currentTime) / 1000));
      } else {
        // Expired - set new expiry time
        const newExpiryTime = new Date().getTime() + 24 * 60 * 60 * 1000;
        localStorage.setItem('bannerExpiry', newExpiryTime.toString());
        setTimeLeft(24 * 60 * 60);
      }
    } else {
      // First visit - set expiry time
      const expiryTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now
      localStorage.setItem('bannerExpiry', expiryTime.toString());
      setTimeLeft(24 * 60 * 60); // 24 hours in seconds
    }
    
    // Always mark as shown
    localStorage.setItem('bannerShown', 'true');
    
    // Dispatch a custom event to notify other components that banner visibility changed
    window.dispatchEvent(new CustomEvent('bannerVisibilityChanged', { detail: { visible: true } }));
  }, []);
  
  useEffect(() => {
    // Set up the countdown timer
    if (timeLeft !== null && timeLeft > 0) {
      const timerInterval = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime === null || prevTime <= 1) {
            clearInterval(timerInterval);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      
      return () => clearInterval(timerInterval);
    }
  }, [timeLeft]);
  
  // Format the time left into HH:MM:SS
  const formatTimeLeft = () => {
    if (timeLeft === null) return "00:00:00";
    
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  const handleStartTrial = () => {
    toast({
      title: "Free trial activated!",
      description: "You're being redirected to complete your subscription details.",
    });
    navigate('/subscribe');
  };
  
  const closeBanner = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    // Dispatch event to notify other components when banner is closed
    window.dispatchEvent(new CustomEvent('bannerVisibilityChanged', { detail: { visible: false } }));
  };
  
  if (!isVisible || timeLeft === 0) {
    return null;
  }
  
  return (
    <div className="bg-black/90 backdrop-blur-sm text-white py-0 h-16 px-4 sm:px-6 fixed top-0 left-0 right-0 z-[200] border-b border-border/20 flex items-center">
      <button 
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full"
        onClick={closeBanner}
      >
        <X size={16} className="text-white" />
      </button>
      
      <div className="container-custom h-full">
        <div className="flex h-full flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
          <div className="flex items-center">
            <span className="text-base font-medium">Try Today with our 7-Day Free Trial!</span>
          </div>
          <div className="text-sm whitespace-nowrap">
            Offer expires in: <span className="font-mono">{formatTimeLeft()}</span>
          </div>
          <button 
            className="text-sm sm:text-base whitespace-nowrap bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-white/90 transition-colors"
            onClick={handleStartTrial}
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewUserBanner;
