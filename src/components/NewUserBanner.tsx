
import { useState, useEffect } from 'react';
import { Copy, CheckCheck, X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

// Generate a trial code for new and unique customers
const generateTrialCode = (): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = 'FREE7';
  for (let i = 0; i < 3; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const NewUserBanner = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [trialCode, setTrialCode] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Set to true by default to show the banner

  useEffect(() => {
    // Generate trial code on first render
    const savedCode = localStorage.getItem('trialCode');
    if (savedCode) {
      setTrialCode(savedCode);
    } else {
      const newCode = generateTrialCode();
      setTrialCode(newCode);
      localStorage.setItem('trialCode', newCode);
    }
    
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
  
  const handleCopyCode = () => {
    navigator.clipboard.writeText(trialCode);
    setCopied(true);
    toast({
      title: "Trial code copied!",
      description: "Use this code during checkout to start your 7-day free trial.",
    });
    
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleStartTrial = () => {
    handleCopyCode();
    navigate('/subscribe');
  };
  
  const closeBanner = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
  };
  
  if (!isVisible || timeLeft === 0) {
    return null;
  }
  
  return (
    <div className="bg-accent text-white py-2 px-4 sm:px-6 fixed top-0 left-0 right-0 z-[60] shadow-md" 
      onTouchStart={handleCopyCode}
      onClick={handleCopyCode}>
      <button 
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full"
        onClick={closeBanner}
      >
        <X size={16} />
      </button>
      
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <div className="font-bold">🎉 New & Unique Customers Only!</div>
          <div className="flex items-center gap-2">
            <span>Try Today with our 7-Day Free Trial!</span>
            <span className="font-mono bg-white/20 px-2 py-1 rounded font-semibold">{trialCode}</span>
            <button 
              className="p-1 hover:bg-white/20 rounded-full flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                handleCopyCode();
              }}
            >
              {copied ? <CheckCheck size={16} /> : <Copy size={16} />}
            </button>
          </div>
          <div className="text-sm whitespace-nowrap">
            Offer expires in: <span className="font-mono">{formatTimeLeft()}</span>
          </div>
          <button 
            className="text-xs sm:text-sm whitespace-nowrap bg-white text-accent px-3 py-1 rounded-full font-semibold hover:bg-white/90 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              handleStartTrial();
            }}
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewUserBanner;
