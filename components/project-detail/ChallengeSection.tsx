"use client";

import { motion } from "framer-motion";
import type { ProjectData } from "@/lib/data/projects";

interface ChallengeSectionProps {
  project: ProjectData;
}

export function ChallengeSection({ project }: ChallengeSectionProps) {
  return (
    <section id="challenge" className="py-6 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
          {project.challenge.title}
        </h2>
        <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
          {project.challenge.content}
        </p>
      </motion.div>
    </section>
  );
}
