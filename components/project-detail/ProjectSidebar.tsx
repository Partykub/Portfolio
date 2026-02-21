"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
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
  tocLabel = "Table of Contents"
}: ProjectSidebarProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.aside 
      className="space-y-8 md:sticky md:top-24"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {/* Role */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {roleLabel}
        </h4>
        <p className="text-foreground font-medium">{project.role}</p>
      </div>

      {/* Timeline */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {timelineLabel}
        </h4>
        <p className="text-foreground font-medium">{project.timeline}</p>
      </div>

      {/* Core Stack */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {coreStackLabel}
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.coreStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Table of Contents */}
      <div className="space-y-3">
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
