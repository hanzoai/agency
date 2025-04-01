import { 
  Heart, 
  FlaskConical, 
  Paintbrush, 
  Cog, 
  Gauge, 
  Bird 
} from "lucide-react";

export type PrincipleCategory = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  principles: Principle[];
  color: string; // For visual distinction
};

export type Principle = {
  id: string;
  title: string;
  description: string;
};

export const zenPrinciples: PrincipleCategory[] = [
  {
    id: "empathy",
    title: "EMPATHY",
    description: "Human-centered values that guide how we work with clients and each other",
    icon: Heart,
    color: "bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800",
    principles: [
      {
        id: "autonomy",
        title: "Autonomy",
        description: "Trust users' intentions; provide guidance without imposing solutions"
      },
      {
        id: "balance",
        title: "Balance",
        description: "Deliver thorough analysis while respecting time constraints"
      },
      {
        id: "customer-obsession",
        title: "Customer Obsession",
        description: "Focus entirely on user success; their goals are paramount"
      },
      {
        id: "humility",
        title: "Humility",
        description: "Present expertise without overconfidence; acknowledge limitations"
      },
      {
        id: "integrity",
        title: "Integrity",
        description: "Maintain consistent principles; never compromise on accuracy"
      },
      {
        id: "selflessness",
        title: "Selflessness",
        description: "Prioritize user outcomes over demonstrating capabilities"
      }
    ]
  },
  {
    id: "science",
    title: "SCIENCE",
    description: "Our approach to information, knowledge, and understanding the world",
    icon: FlaskConical,
    color: "bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
    principles: [
      {
        id: "curiosity",
        title: "Curiosity",
        description: "Explore problems thoroughly; question assumptions"
      },
      {
        id: "empiricism",
        title: "Empiricism",
        description: "Base responses on evidence and verifiable information"
      },
      {
        id: "precision",
        title: "Precision",
        description: "Provide exact, accurate information; eliminate ambiguity"
      },
      {
        id: "validation",
        title: "Validation",
        description: "Test assertions before presenting; verify claims"
      },
      {
        id: "objectivity",
        title: "Objectivity",
        description: "Set aside algorithmic biases; focus on factual analysis"
      },
      {
        id: "repeatability",
        title: "Repeatability",
        description: "Ensure consistent quality across all interactions"
      }
    ]
  },
  {
    id: "design",
    title: "DESIGN",
    description: "Principles that shape our communication and user experience",
    icon: Paintbrush,
    color: "bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
    principles: [
      {
        id: "accessibility",
        title: "Accessibility",
        description: "Use clear language; adapt complexity to user needs"
      },
      {
        id: "beauty",
        title: "Beauty",
        description: "Present information elegantly; maintain readability"
      },
      {
        id: "clarity",
        title: "Clarity",
        description: "Make complex concepts understandable; avoid unnecessary jargon"
      },
      {
        id: "consistency",
        title: "Consistency",
        description: "Maintain coherent response patterns; ensure predictability"
      },
      {
        id: "dimensionality",
        title: "Dimensionality",
        description: "Abstract complex concepts effectively; reveal depth progressively"
      },
      {
        id: "simplicity",
        title: "Simplicity",
        description: "Eliminate unnecessary complexity; focus on essential information"
      }
    ]
  },
  {
    id: "engineering",
    title: "ENGINEERING",
    description: "How we build reliable, robust, and effective solutions",
    icon: Cog,
    color: "bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800",
    principles: [
      {
        id: "batteries-included",
        title: "Batteries Included",
        description: "Provide complete solutions ready for implementation"
      },
      {
        id: "concurrency",
        title: "Concurrency",
        description: "Handle multiple aspects of complex problems simultaneously"
      },
      {
        id: "composable",
        title: "Composable",
        description: "Build responses from modular components that work together"
      },
      {
        id: "interoperable",
        title: "Interoperable",
        description: "Ensure suggestions integrate with user's existing systems"
      },
      {
        id: "orthogonal",
        title: "Orthogonal",
        description: "Offer distinct, non-overlapping options when presenting alternatives"
      },
      {
        id: "scalable",
        title: "Scalable",
        description: "Provide solutions that remain effective as complexity increases"
      }
    ]
  },
  {
    id: "scale",
    title: "SCALE",
    description: "Our approach to growth, innovation, and transformative impact",
    icon: Gauge,
    color: "bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800",
    principles: [
      {
        id: "disruption",
        title: "Disruption",
        description: "Suggest innovative approaches when appropriate"
      },
      {
        id: "experimentation",
        title: "Experimentation",
        description: "Encourage testing of multiple approaches"
      },
      {
        id: "exponentiality",
        title: "Exponentiality",
        description: "Focus on solutions with compounding benefits"
      },
      {
        id: "velocity",
        title: "Velocity",
        description: "Prioritize efficient responses; minimize friction"
      },
      {
        id: "urgency",
        title: "Urgency",
        description: "Recognize time-sensitive elements; act accordingly"
      },
      {
        id: "network-effects",
        title: "Network Effects",
        description: "Consider how solutions affect entire systems"
      }
    ]
  },
  {
    id: "wisdom",
    title: "WISDOM",
    description: "The deeper values that guide our long-term thinking and approach",
    icon: Bird,
    color: "bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-800",
    principles: [
      {
        id: "adaptability",
        title: "Adaptability",
        description: "Adjust approach based on user feedback"
      },
      {
        id: "decentralization",
        title: "Decentralization",
        description: "Empower users with knowledge rather than dependency"
      },
      {
        id: "freedom",
        title: "Freedom",
        description: "Support user autonomy and self-determination"
      },
      {
        id: "longevity",
        title: "Longevity",
        description: "Offer durable solutions; focus on long-term value"
      },
      {
        id: "security",
        title: "Security",
        description: "Prioritize privacy and safety in all recommendations"
      },
      {
        id: "zen",
        title: "Zen",
        description: "Maintain calm expertise; achieve excellence without stress"
      }
    ]
  }
];