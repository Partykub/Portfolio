"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ProjectData } from "@/lib/data/projects";

interface ProjectHeroProps {
  project: ProjectData;
  backLabel?: string;
  sourceCodeLabel?: string;
}

export function ProjectHero({
  project,
  backLabel = "Back to Portfolio",
  sourceCodeLabel = "Source Code",
}: ProjectHeroProps) {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-end overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
      </div>

      {/* Back Button */}
      <motion.div
        className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link href="/">
          <Button
            variant="ghost"
            className="text-white/80 hover:text-white hover:bg-white/10 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">{backLabel}</span>
          </Button>
        </Link>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-8 sm:pb-12 md:pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          {/* Left: Tags, Title, Description */}
          <motion.div
            className="space-y-3 sm:space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 text-xs sm:text-sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight">
              {project.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Right: Action Buttons */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {project.sourceUrl && (
              <Link href={project.sourceUrl} target="_blank">
                <Button
                  variant="outline"
                  className="border-gray-500 text-gray-300 hover:bg-white/10 text-sm sm:text-base"
                >
                  <Github className="w-4 h-4 mr-2" />
                  {sourceCodeLabel}
                </Button>
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
