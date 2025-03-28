import React from 'react';
import { Globe, Linkedin, Instagram, Facebook, Twitter, Youtube, MessageCircle, Hash } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export interface SocialLink {
  platform: string;
  url: string;
  followers?: number;
}

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
  showLabels?: boolean;
  totalFollowers?: number;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  links, 
  className = '',
  showLabels = false,
  totalFollowers
}) => {
  // Debug
  console.log('SocialLinks component rendering with:', { links, totalFollowers, showLabels });
  
  // Function to render the appropriate icon based on platform
  const renderIcon = (platform: string) => {
    const iconSize = 20;
    
    switch (platform.toLowerCase()) {
      case 'website':
        return <Globe size={iconSize} />;
      case 'linkedin':
        return <Linkedin size={iconSize} />;
      case 'instagram':
        return <Instagram size={iconSize} />;
      case 'facebook':
        return <Facebook size={iconSize} />;
      case 'twitter':
        return <Twitter size={iconSize} />;
      case 'youtube':
        return <Youtube size={iconSize} />;
      case 'tiktok':
        return <Hash size={iconSize} />; // Using Hash as a TikTok alternative icon
      case 'telegram':
        return <MessageCircle size={iconSize} />;
      case 'discord':
        return <Hash size={iconSize} />; // Using Hash as a Discord alternative icon
      case 'reddit':
        return <Hash size={iconSize} />; // Using Hash as a Reddit alternative icon
      default:
        return <Globe size={iconSize} />;
    }
  };

  // Format follower count to be more readable
  const formatFollowers = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div className={`flex flex-col space-y-4 ${className}`}>
      {totalFollowers && (
        <div className="bg-accent/10 p-4 rounded-xl mb-4">
          <div className="text-3xl font-bold text-accent mb-1">{formatFollowers(totalFollowers)}+</div>
          <div className="text-white/70 text-sm">Total followers across platforms</div>
        </div>
      )}
      
      <div className="flex flex-wrap gap-3">
        <TooltipProvider>
          {links.map((link, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center p-3 bg-white/10 hover:bg-accent/20 rounded-lg transition-colors"
                  aria-label={link.platform}
                >
                  {renderIcon(link.platform)}
                  {showLabels && (
                    <span className="ml-2 font-medium">{link.platform}</span>
                  )}
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.platform}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
};

export default SocialLinks;