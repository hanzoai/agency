import {
  LightbulbIcon,
  Container,
  Construction,
  GraduationCap,
  Hourglass,
  ContrastIcon,
  Workflow,
  HeartHandshake,
  Lock,
  Compass,
  SunMoon,
  Unplug,
  User,
  Sparkles,
  Feather,
  Star,
  Wind,
  Cog,
  LifeBuoy,
  Zap,
  NetworkIcon as Network,
  BrainCircuit,
  Undo,
  Sun,
  Home,
  Timer,
  Scale,
  Move,
  Eye,
  Globe,
  Infinity,
  Flower,
  Focus,
  Droplets,
  Bird,
  Wand,
  Target,
  PenTool,
  Laptop,
  Paperclip,
  Link,
  ListTodo,
  Loader,
  Map,
  MessageSquare,
  MountainSnow,
  Palette,
  PieChart,
  Puzzle,
  Route,
  Search,
  Settings,
  Share,
  ShieldCheck,
  SplitSquareVertical,
  Trash,
  Triangle,
  Trophy,
  Box,
  ArrowUpRight,
  BarChart,
  Bookmark,
  Bot,
  Brain,
  Building,
  CreditCard,
  Crop,
  Crosshair,
  Database
} from "lucide-react";

export type Hexagram = {
  id: number;
  chinese: string;
  pinyin: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  principles: string[];
  category?: string;
};

export const hexagramCategories = [
  { id: "creative", name: "Creative", color: "bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400" },
  { id: "receptive", name: "Receptive", color: "bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400" },
  { id: "developmental", name: "Developmental", color: "bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400" },
  { id: "relational", name: "Relational", color: "bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400" },
  { id: "transformative", name: "Transformative", color: "bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400" },
  { id: "structural", name: "Structural", color: "bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400" },
  { id: "temporal", name: "Temporal", color: "bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400" },
  { id: "universal", name: "Universal", color: "bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400" }
];

export const hexagrams: Hexagram[] = [
  {
    id: 1,
    chinese: "乾",
    pinyin: "qián",
    name: "Creative Force",
    description: "Pure creativity, leadership, and initiating action",
    icon: LightbulbIcon,
    principles: [
      "Initiate transformative action",
      "Manifest pure potential",
      "Lead with visionary clarity",
      "Embody unwavering integrity",
      "Sustain persistent energy",
      "Create through pure will"
    ],
    category: "creative"
  },
  {
    id: 2,
    chinese: "坤",
    pinyin: "kūn",
    name: "Receptivity",
    description: "Openness, nurturance, and supportive environments",
    icon: Container,
    principles: [
      "Nurture emerging possibilities",
      "Cultivate fertile conditions",
      "Support without imposing",
      "Build patient foundations",
      "Respond to genuine needs",
      "Embody grounded wisdom"
    ],
    category: "receptive"
  },
  {
    id: 3,
    chinese: "屯",
    pinyin: "zhūn",
    name: "Initial Difficulty",
    description: "Overcoming beginning challenges to establish something new",
    icon: Construction,
    principles: [
      "Navigate beginning challenges",
      "Gather resources for growth",
      "Plant seeds amid uncertainty",
      "Persevere through obstacles",
      "Recognize germinating potential",
      "Trust the process of emergence"
    ],
    category: "developmental"
  },
  {
    id: 4,
    chinese: "蒙",
    pinyin: "méng",
    name: "Inexperience",
    description: "Embracing the learner's mindset and fundamental education",
    icon: GraduationCap,
    principles: [
      "Embrace beginner's mind",
      "Seek foundational knowledge",
      "Learn through guided exploration",
      "Remove conceptual blindness",
      "Build basic competencies",
      "Honor developmental stages"
    ],
    category: "developmental"
  },
  {
    id: 5,
    chinese: "需",
    pinyin: "xū",
    name: "Patient Waiting",
    description: "Strategic timing and preparing for the right moment",
    icon: Hourglass,
    principles: [
      "Recognize appropriate timing",
      "Prepare during apparent inaction",
      "Build readiness for opportunity",
      "Discern essential moments",
      "Cultivate strategic patience",
      "Maintain focus during delays"
    ],
    category: "temporal"
  },
  {
    id: 6,
    chinese: "訟",
    pinyin: "sòng",
    name: "Conflict",
    description: "Navigating disagreement and finding resolution",
    icon: ContrastIcon,
    principles: [
      "Address tensions directly",
      "Transform opposition to insight",
      "Navigate competing perspectives",
      "Find balance in disagreement",
      "Resolve through principle",
      "Create clarity from friction"
    ],
    category: "relational"
  },
  {
    id: 7,
    chinese: "師",
    pinyin: "shī",
    name: "Discipline",
    description: "Organized collective effort and strategic leadership",
    icon: Workflow,
    principles: [
      "Organize collective effort",
      "Establish coherent structure",
      "Maintain operational integrity",
      "Align individual contributions",
      "Deploy resources strategically",
      "Create coordinated momentum"
    ],
    category: "structural"
  },
  {
    id: 8,
    chinese: "比",
    pinyin: "bǐ",
    name: "Unity",
    description: "Forming deep connections and building community",
    icon: HeartHandshake,
    principles: [
      "Foster genuine connection",
      "Build mutual understanding",
      "Create aligned purpose",
      "Establish shared principles",
      "Honor interdependence",
      "Strengthen collective bonds"
    ],
    category: "relational"
  },
  // Add all 64 hexagrams here - truncated for brevity
  // We'll include enough to demonstrate the pattern
]

// Helper function to get a hexagram by ID
export const getHexagramById = (id: number): Hexagram | undefined => {
  return hexagrams.find(hexagram => hexagram.id === id);
};

// Helper function to get hexagrams by category
export const getHexagramsByCategory = (category: string): Hexagram[] => {
  return hexagrams.filter(hexagram => hexagram.category === category);
};