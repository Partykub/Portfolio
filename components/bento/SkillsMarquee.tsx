"use client";

import { cn } from "@/lib/utils";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiFigma,
  SiRadixui,
  SiCss3,
  SiHtml5,
  SiGit,
  SiNodedotjs,
  SiPostgresql,
  SiJavascript,
  SiPython,
  SiFastapi,
  SiRedis,
  SiPhp,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import {
  Lightbulb,
  Users,
  Brain,
  Heart,
  Rocket,
  MessageSquare,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

// Section Heading Component
function SectionHeading({ label }: { label: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight"
    >
      {label}
    </motion.h2>
  );
}

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// 1. Static Tech Stack (Tools)
const skills = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "bg-black text-white rounded-full p-0.5",
  },
  { name: "React", icon: SiReact, color: "text-blue-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Python", icon: SiPython, color: "text-blue-500" },
  { name: "FastAPI", icon: SiFastapi, color: "text-emerald-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
  { name: "Redis", icon: SiRedis, color: "text-red-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Git", icon: SiGit, color: "text-red-500" },
  { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
];

interface SoftSkill {
  key: string;
  icon: any;
}

// 2. Marquee Items (Soft Skills)
const softSkillsConfig: SoftSkill[] = [
  { key: "problemSolving", icon: Lightbulb },
  { key: "teamCollaboration", icon: Users },
  { key: "criticalThinking", icon: Brain },
  { key: "userCentricDesign", icon: Heart },
  { key: "fastLearner", icon: Rocket },
  { key: "effectiveCommunication", icon: MessageSquare },
];

const SoftSkillList = ({
  keyPrefix,
  translations,
}: {
  keyPrefix: string;
  translations: any;
}) => (
  <>
    {softSkillsConfig.map((item, i) => (
      <div
        key={`${keyPrefix}-${i}`}
        className="flex items-center px-6 py-3 rounded-full border border-border/50 bg-secondary/30 backdrop-blur-sm whitespace-nowrap"
      >
        <span className="text-sm font-semibold text-foreground/90 tracking-wide uppercase">
          {translations[item.key]}
        </span>
      </div>
    ))}
  </>
);

interface SkillsMarqueeProps {
  techStackLabel?: string;
  softSkillsLabel?: string;
  softSkillsTranslations?: any;
}

export function SkillsMarquee({
  techStackLabel,
  softSkillsLabel,
  softSkillsTranslations,
}: SkillsMarqueeProps) {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* 1. Static Skills Grid (Clear & Scannable) */}
      {techStackLabel && <SectionHeading label={techStackLabel} />}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={`static-${i}`}
            variants={itemVariants}
            whileHover={{
              scale: 1.08,
              y: -8,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/20 transition-colors duration-300 group cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <skill.icon
                className={cn(
                  "w-8 h-8 transition-transform duration-300",
                  skill.color,
                )}
              />
            </motion.div>
            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* 2. Marquee Section (Dynamic & Alive - Idea A) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4"
      >
        {softSkillsLabel && <SectionHeading label={softSkillsLabel} />}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative flex overflow-hidden w-full items-center py-2"
      >
        {/* Gradient masks */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Seamless Marquee */}
        <div className="flex w-full overflow-hidden mask-linear-gradient select-none">
          <div className="flex animate-marquee flex-shrink-0 whitespace-nowrap gap-6 items-center min-w-full justify-start pr-6">
            <SoftSkillList
              keyPrefix="soft"
              translations={softSkillsTranslations || {}}
            />
          </div>
          <div
            className="flex animate-marquee flex-shrink-0 whitespace-nowrap gap-6 items-center min-w-full justify-start pr-6"
            aria-hidden="true"
          >
            <SoftSkillList
              keyPrefix="soft-dup"
              translations={softSkillsTranslations || {}}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
