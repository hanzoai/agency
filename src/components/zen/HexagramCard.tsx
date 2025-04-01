import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import type { Hexagram } from "./data/zenHexagrams";

type HexagramCardProps = {
  hexagram: Hexagram;
  className?: string;
};

export function HexagramCard({ hexagram, className = "" }: HexagramCardProps) {
  const Icon = hexagram.icon;

  return (
    <Card className={`h-full transition-all hover:shadow-md ${className}`}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <Icon className="h-6 w-6 text-primary" />
            <CardTitle className="text-lg">
              {hexagram.id}. {hexagram.chinese} ({hexagram.pinyin}) - {hexagram.name}
            </CardTitle>
          </div>
          {hexagram.category && (
            <Badge variant="outline" className="ml-2 capitalize">
              {hexagram.category}
            </Badge>
          )}
        </div>
        <CardDescription>{hexagram.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="ml-5 list-disc space-y-1 text-sm">
          {hexagram.principles.map((principle, index) => (
            <li key={index} className="text-muted-foreground">
              {principle}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
