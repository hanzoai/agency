import React from 'react';

type GradientVariant = 'primary' | 'secondary' | 'tertiary' | 'accent';

interface GradientBackgroundProps {
  variant?: GradientVariant;
  intensity?: 'subtle' | 'medium' | 'strong';
  className?: string;
  children: React.ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  variant = 'primary',
  intensity = 'subtle',
  className = '',
  children
}) => {
  // Define gradient styles based on variant
  const gradientStyles = {
    primary: {
      subtle: 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800',
      medium: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700',
      strong: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-blend-overlay'
    },
    secondary: {
      subtle: 'bg-gradient-to-tr from-gray-950 via-gray-900 to-gray-800',
      medium: 'bg-gradient-to-tr from-gray-950 via-gray-900 to-gray-800/90',
      strong: 'bg-gradient-to-tr from-gray-950 via-gray-900 to-gray-800/80'
    },
    tertiary: {
      subtle: 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950',
      medium: 'bg-gradient-to-b from-gray-950 via-gray-900/95 to-gray-950',
      strong: 'bg-gradient-to-b from-gray-950 via-gray-900/90 to-gray-950'
    },
    accent: {
      subtle: 'bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/90',
      medium: 'bg-gradient-to-r from-gray-900 via-gray-800/95 to-gray-900/90',
      strong: 'bg-gradient-to-r from-gray-900 via-gray-800/90 to-gray-900/85'
    }
  };

  return (
    <div className={`${gradientStyles[variant][intensity]} ${className}`}>
      {children}
    </div>
  );
};

export default GradientBackground;
