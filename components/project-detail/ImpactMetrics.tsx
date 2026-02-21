"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ProjectData } from "@/lib/data/projects";

interface ImpactMetricsProps {
  project: ProjectData;
  title?: string;
}

interface CircularProgressProps {
  value: number;
  label: string;
  color: string;
}

function CircularProgress({ value, label, color }: CircularProgressProps) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  const getColorClass = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 50) return "text-orange-500";
    return "text-red-500";
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-28 h-28">
        {/* Background circle */}
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-muted"
          />
          <motion.circle
            cx="56"
            cy="56"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            className={getColorClass(value)}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            style={{
              strokeDasharray: circumference,
            }}
          />
        </svg>
        {/* Score text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className={cn("text-2xl font-bold", getColorClass(value))}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {value}
          </motion.span>
        </div>
      </div>
      <span className="text-sm font-medium text-muted-foreground text-center">
        {label}
      </span>
    </div>
  );
}

export function ImpactMetrics({ project, title = "Impact & Performance" }: ImpactMetricsProps) {
  if (!project.metrics) return null;

  const metrics = [
    { value: project.metrics.performance, label: "Performance" },
    { value: project.metrics.accessibility, label: "Accessibility" },
    { value: project.metrics.bestPractices, label: "Best Practices" },
    { value: project.metrics.seo, label: "SEO" },
  ];

  return (
    <section id="impact" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {title}
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Lighthouse scores reflecting the quality and optimization of the final build.
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <CircularProgress
                value={metric.value}
                label={metric.label}
                color=""
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
