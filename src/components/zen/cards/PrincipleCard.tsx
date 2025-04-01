import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Principle } from "../data/zenPrinciples";

interface PrincipleCardProps {
  principle: Principle;
  index: number;
  color?: string;
  className?: string;
}

export function PrincipleCard({ 
  principle, 
  index, 
  color = "border-gray-200 dark:border-gray-800",
  className
}: PrincipleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: 0.1 * index,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={cn("h-full", className)}
    >
      <Card className={cn(
        "h-full transition-all hover:shadow-md overflow-hidden", 
        color
      )}>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">{principle.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm">{principle.description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}