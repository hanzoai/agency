import React from "react";
import { motion } from "framer-motion";
import { PrincipleCard } from "./PrincipleCard";
import { PrincipleCategory as PrincipleCategoryType } from "../data/zenPrinciples";
import { cn } from "@/lib/utils";
import { AnimatedHexagon } from "../animations/AnimatedHexagon";

interface PrincipleCategoryProps {
  category: PrincipleCategoryType;
  index: number;
  className?: string;
}

export function PrincipleCategory({ category, index, className }: PrincipleCategoryProps) {
  const Icon = category.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 * index }}
      className={cn("space-y-6", className)}
    >
      <div className="flex items-center space-x-4">
        <div className={cn(
          "relative flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border",
          category.color
        )}>
          <AnimatedHexagon 
            size={40} 
            fill={`var(--${category.id}-50)`}
            stroke={`var(--${category.id}-600)`}
            animationDelay={0.1 * index}
            className="absolute"
          />
          <Icon className="h-6 w-6 z-10" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">{category.title}</h3>
          <p className="text-muted-foreground">{category.description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {category.principles.map((principle, idx) => (
          <PrincipleCard
            key={principle.id}
            principle={principle}
            index={idx}
            color={category.color}
          />
        ))}
      </div>
    </motion.div>
  );
}