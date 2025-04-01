import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedHexagonProps {
  size?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
  animationDelay?: number;
  children?: React.ReactNode;
  opacity?: number;
}

export function AnimatedHexagon({
  size = 100,
  fill = "none",
  stroke = "currentColor",
  strokeWidth = 2,
  className = "",
  animationDelay = 0,
  children,
  opacity = 1,
}: AnimatedHexagonProps) {
  // Calculate points for hexagon
  const points = calculateHexagonPoints(size / 2);

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: opacity,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0, delay: animationDelay },
        opacity: { duration: 0.5, delay: animationDelay },
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5, 
        delay: animationDelay + 0.2,
        ease: "easeOut" 
      },
    },
  };

  return (
    <div className={cn("relative", className)}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0"
      >
        <motion.path
          d={`M ${points.join(" L ")} Z`}
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={fill}
        />
      </svg>
      {children && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}

// Helper function to calculate hexagon points
function calculateHexagonPoints(radius: number, offsetX = 0, offsetY = 0) {
  const center = radius + Math.max(offsetX, offsetY);
  const points = [];
  
  for (let i = 0; i < 6; i++) {
    const angleDeg = 60 * i - 30;
    const angleRad = (Math.PI / 180) * angleDeg;
    const x = center + radius * Math.cos(angleRad) + offsetX;
    const y = center + radius * Math.sin(angleRad) + offsetY;
    points.push(`${x},${y}`);
  }
  
  return points;
}