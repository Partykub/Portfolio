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
  viewLiveLabel?: string;
  sourceCodeLabel?: string;
}

export function ProjectHero({ 
  project, 
  backLabel = "Back to Portfolio",
  viewLiveLabel = "View Live Site",
  sourceCodeLabel = "Source Code"
}: ProjectHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden">
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
        className="absolute top-6 left-6 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link href="/">
          <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {backLabel}
          </Button>
        </Link>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 md:pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          {/* Left: Tags, Title, Description */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white font-heading">
              {project.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
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
            {project.liveUrl && (
              <Link href={project.liveUrl} target="_blank">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {viewLiveLabel}
                </Button>
              </Link>
            )}
            {project.sourceUrl && (
              <Link href={project.sourceUrl} target="_blank">
                <Button variant="outline" className="border-gray-500 text-gray-300 hover:bg-white/10">
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
