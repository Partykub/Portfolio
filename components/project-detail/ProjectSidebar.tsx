"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ProjectData } from "@/lib/data/projects";

interface ProjectSidebarProps {
  project: ProjectData;
  roleLabel?: string;
  timelineLabel?: string;
  coreStackLabel?: string;
  tocLabel?: string;
}

export function ProjectSidebar({
  project,
  roleLabel = "Role",
  timelineLabel = "Timeline",
  coreStackLabel = "Core Stack",
  tocLabel = "Table of Contents",
}: ProjectSidebarProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.aside
      className="space-y-6 lg:space-y-8 lg:sticky lg:top-24 bg-card/50 lg:bg-transparent p-4 lg:p-0 rounded-lg lg:rounded-none border lg:border-0"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {/* Mobile: Horizontal Layout for Role & Timeline */}
      <div className="grid grid-cols-2 gap-4 lg:contents">
        {/* Role */}
        <div className="space-y-2">
          <h4 className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {roleLabel}
          </h4>
          <p className="text-sm sm:text-base text-foreground font-medium">
            {project.role}
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          <h4 className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {timelineLabel}
          </h4>
          <p className="text-sm sm:text-base text-foreground font-medium">
            {project.timeline}
          </p>
        </div>
      </div>

      {/* Core Stack */}
      <div className="space-y-3">
        <h4 className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {coreStackLabel}
        </h4>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {[...project.tags]
            .sort((a, b) => {
              const SPECIAL = [
                "Design System",
                "Design Token",
                "Atomic Design",
                "Real-time",
                "UI/UX Refactor",
                "UI Refactor",
                "IoT",
                "MQTT",
                "Responsive",
                "Accessible",
              ];
              const isASpecial = SPECIAL.includes(a);
              const isBSpecial = SPECIAL.includes(b);
              return isASpecial === isBSpecial ? 0 : isASpecial ? 1 : -1;
            })
            .map((tag) => {
              const SPECIAL = [
                "Design System",
                "Design Token",
                "Atomic Design",
                "Real-time",
                "UI/UX Refactor",
                "UI Refactor",
                "IoT",
                "MQTT",
                "Responsive",
                "Accessible",
              ];
              const isSpecialTag = SPECIAL.includes(tag);
              return (
                <Badge
                  key={tag}
                  variant={isSpecialTag ? "default" : "secondary"}
                  className={cn(
                    "text-xs",
                    isSpecialTag &&
                      "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/30 font-medium",
                  )}
                >
                  {tag}
                </Badge>
              );
            })}
        </div>
      </div>

      {/* Table of Contents - Hidden on mobile, visible on lg+ */}
      <div className="space-y-3 hidden lg:block">
        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {tocLabel}
        </h4>
        <nav className="space-y-2">
          {project.sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left w-full"
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>
    </motion.aside>
  );
}
