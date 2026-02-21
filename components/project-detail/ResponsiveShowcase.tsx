"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Tablet, Smartphone } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ProjectData } from "@/lib/data/projects";

interface ResponsiveShowcaseProps {
  project: ProjectData;
  title?: string;
}

type DeviceType = "desktop" | "tablet" | "mobile";

const deviceIcons = {
  desktop: Monitor,
  tablet: Tablet,
  mobile: Smartphone,
};

export function ResponsiveShowcase({ 
  project,
  title = "Responsive Execution"
}: ResponsiveShowcaseProps) {
  const [activeDevice, setActiveDevice] = useState<DeviceType>("desktop");

  if (!project.responsive) return null;

  const devices: DeviceType[] = ["desktop", "tablet", "mobile"];

  return (
    <section id="responsive" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          {title}
        </h2>

        {/* Device Tab Switcher */}
        <div className="flex gap-2 mb-8 p-1 bg-muted rounded-lg w-fit">
          {devices.map((device) => {
            const Icon = deviceIcons[device];
            const isActive = activeDevice === device;
            
            return (
              <button
                key={device}
                onClick={() => setActiveDevice(device)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all",
                  isActive 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="w-4 h-4" />
                <span className="capitalize">{device}</span>
              </button>
            );
          })}
        </div>

        {/* Device Mockup */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDevice}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {/* Image Container */}
            <div 
              className={cn(
                "relative mx-auto overflow-hidden rounded-xl border border-border bg-card shadow-lg",
                activeDevice === "desktop" && "max-w-4xl aspect-video",
                activeDevice === "tablet" && "max-w-md aspect-[3/4]",
                activeDevice === "mobile" && "max-w-xs aspect-[9/16]"
              )}
            >
              <Image
                src={project.responsive[activeDevice].image}
                alt={project.responsive[activeDevice].label}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Label & Description */}
            <div className="text-center max-w-xl mx-auto">
              <h3 className="text-lg font-semibold text-foreground">
                {project.responsive[activeDevice].label}
              </h3>
              <p className="text-muted-foreground mt-1">
                {project.responsive[activeDevice].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
