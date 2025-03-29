import React from "react";

interface FeaturedItemProps {
  title: string;
  description: string;
  href: string;
  cta?: string;
  icon?: string;
  index: number;
}

const FeaturedItem: React.FC<FeaturedItemProps> = ({
  title,
  description,
  href,
  cta,
  icon,
  index
}) => {
  return (
    <div className={`bg-gray-800/50 rounded-md p-5 ${index > 0 ? 'mt-4' : ''}`}>
      {icon && (
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-gray-700 text-white w-6 h-6 rounded flex items-center justify-center text-xs font-bold">
            {icon}
          </div>
          <span className="text-sm font-medium text-white">{title}</span>
        </div>
      )}
      {!icon && (
        <h3 className="text-sm font-medium text-white mb-2">{title}</h3>
      )}
      <p className="text-xs text-gray-400 mb-3">{description}</p>
      {cta && (
        <a href={href} className="text-xs text-white inline-flex items-center hover:underline">
          {cta}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      )}
    </div>
  );
};

export default FeaturedItem;