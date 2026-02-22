"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { ProjectData } from "@/lib/data/projects";

interface ArchitectureSectionProps {
  project: ProjectData;
  title?: string;
}

export function ArchitectureSection({
  project,
  title = "Component Architecture",
}: ArchitectureSectionProps) {
  if (!project.architecture) return null;

  return (
    <section id="architecture" className="py-12 sm:py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8">
          {title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Left: Description + Features */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {project.architecture.description}
            </p>

            <ul className="space-y-2.5 sm:space-y-3">
              {project.architecture.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-2.5 sm:gap-3"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-green-500" />
                  </span>
                  <span className="text-sm sm:text-base text-foreground">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right: Code Block */}
          {project.architecture.codeSnippet && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
                {/* Code header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/50 border-b border-zinc-800">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-zinc-500">code.js</span>
                </div>

                {/* Code content */}
                <pre className="p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm">
                  <code className="text-zinc-300 font-mono whitespace-pre">
                    {project.architecture.codeSnippet}
                  </code>
                </pre>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
