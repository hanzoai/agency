
import { useState, useEffect } from 'react';
import { Copy, CheckCheck, X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

// Generate a discount code in the EZds8n format with random characters at the end
const generateDiscountCode = (): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = 'EZds8n';
  for (let i = 0; i < 2; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const NewUserBanner = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [discountCode, setDiscountCode] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if this is a new user
    const checkNewUser = () => {
      const bannerShown = localStorage.getItem('bannerShown');
      const bannerExpiry = localStorage.getItem('bannerExpiry');
      const discountUsed = localStorage.getItem('discountUsed');
      
      // If discount was used or banner was explicitly closed, don't show
      if (discountUsed === 'true') {
        return;
      }
      
      // Check if this is a returning user within 24 hours
      if (bannerShown === 'true' && bannerExpiry) {
        const expiryTime = parseInt(bannerExpiry, 10);
        const currentTime = new Date().getTime();
        
        // If less than 24 hours have passed, show the banner with remaining time
        if (expiryTime > currentTime) {
          const savedCode = localStorage.getItem('discountCode');
          if (savedCode) {
            setDiscountCode(savedCode);
          } else {
            const newCode = generateDiscountCode();
            setDiscountCode(newCode);
            localStorage.setItem('discountCode', newCode);
          }
          setTimeLeft(Math.floor((expiryTime - currentTime) / 1000));
          setIsVisible(true);
        }
      } 
      // New user - first visit
      else if (!bannerShown) {
        const newCode = generateDiscountCode();
        setDiscountCode(newCode);
        
        const expiryTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now
        
        localStorage.setItem('bannerShown', 'true');
        localStorage.setItem('bannerExpiry', expiryTime.toString());
        localStorage.setItem('discountCode', newCode);
        
        setTimeLeft(24 * 60 * 60); // 24 hours in seconds
        setIsVisible(true);
      }
    };
    
    checkNewUser();
  }, []);
  
  useEffect(() => {
    // Set up the countdown timer
    if (timeLeft !== null && timeLeft > 0) {
      const timerInterval = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime === null || prevTime <= 1) {
            clearInterval(timerInterval);
            setIsVisible(false);
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
    navigator.clipboard.writeText(discountCode);
    setCopied(true);
    toast({
      title: "Discount code copied!",
      description: "Use this code during checkout for your first month at $650.",
    });
    
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleUseNow = () => {
    handleCopyCode();
    navigate('/subscribe');
  };
  
  const closeBanner = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    
    // Note: We don't set bannerShown to false, just hide the banner temporarily for this session
    // This allows the banner to reappear on page refresh if the discount hasn't been used yet
    
    // Dispatch a storage event to update other components
    window.dispatchEvent(new Event('storage'));
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
          <div className="font-bold">🎉 Get your first month for $650!</div>
          <div className="flex items-center gap-2">
            <span>Use code:</span>
            <span className="font-mono bg-white/20 px-2 py-1 rounded font-semibold">{discountCode}</span>
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
            Expires in: <span className="font-mono">{formatTimeLeft()}</span>
          </div>
          <button 
            className="text-xs sm:text-sm whitespace-nowrap bg-white text-accent px-3 py-1 rounded-full font-semibold hover:bg-white/90 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              handleUseNow();
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewUserBanner;
