import { cn } from "@/lib/utils";
import { ButtonProps } from "@/components/ui/button";

/**
 * Button modifiers to provide consistent styling extensions
 * beyond the base button variants
 */

export const buttonModifiers = {
  /**
   * Applies active state styling to a button
   */
  active: (isActive: boolean = false) => 
    isActive ? "bg-accent/10" : "",

  /**
   * Adds subtle hover animation
   */
  animated: "transition-transform hover:scale-[1.01]",
  
  /**
   * Makes the button appear interactive with a slight grow/shrink effect
   */
  interactive: "transition-transform hover:scale-[1.01] active:scale-[0.99]",
  
  /**
   * Applies a subtle shadow for depth
   */
  elevated: "shadow-sm hover:shadow",
  
  /**
   * Creates a quiet/subtle version of the button
   */
  quiet: "bg-opacity-75 hover:bg-opacity-100",
};

/**
 * Helper function to apply button modifiers
 */
export function applyButtonModifiers(
  baseClassName: string = "",
  modifiers: { [key: string]: boolean } = {},
  className: string = ""
): string {
  const modifierClasses = Object.entries(modifiers)
    .filter(([_, isEnabled]) => isEnabled)
    .map(([modifierName]) => 
      buttonModifiers[modifierName as keyof typeof buttonModifiers])
    .filter(Boolean)
    .join(" ");

  return cn(baseClassName, modifierClasses, className);
}
