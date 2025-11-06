import { ReactNode } from "react";
import {
  Code2,
  Heart,
  Lightbulb,
  Target,
  Award,
  Users,
  Globe,
  TrendingUp,
} from "lucide-react";

export interface TechItem {
  name: string;
  icon: string;
  years: string;
}

export interface Achievement {
  icon: ReactNode;
  title: string;
  description: string;
  metric: string;
}

export interface Value {
  icon: ReactNode;
  title: string;
  description: string;
}

export const techStack: TechItem[] = [
  { name: "React", icon: "⚛️", years: "4+" },
  { name: "TypeScript", icon: "📘", years: "3+" },
  { name: "Next.js", icon: "🔺", years: "1.5+" },
  { name: "Tailwind CSS", icon: "🎨", years: "1.5+" },
  { name: "Framer Motion", icon: "🎬", years: "1+" },
  { name: "Node.js", icon: "🟢", years: "1+" },
  { name: "GraphQL", icon: "🔗", years: "1+" },
  { name: "Vercel", icon: "☁️", years: "3+" },
];

export const achievements: Achievement[] = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "83% Faster Load",
    description:
      "Suggested and implemented a performance optimization for an AI email service, reducing load time by 83%",
    metric: "83% faster",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Leadership",
    description:
      "Led a team of 6 engineers in developing Neptunes Sushi website from scratch to launch",
    metric: "6 devs",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Investor Interest",
    description:
      "Launched an AI Email Generator that attracted multiple investor inquiries",
    metric: "Investor-ready",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Client-Facing Delivery",
    description:
      "Delivered multiple client projects on time under tight deadlines, aligning with all specifications",
    metric: "100% delivery",
  },
];

export const values: Value[] = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "User-Centric",
    description: "Putting user experience at the heart of every decision",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation",
    description: "Constantly exploring new technologies and methodologies",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Results-Driven",
    description: "Focusing on outcomes that deliver real business value",
  },
];

export const techNames = ["React", "TypeScript", "Next.js", "Tailwind"];
