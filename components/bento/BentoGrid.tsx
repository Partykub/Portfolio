"use client";

import { motion, Variants } from "framer-motion";
import { HeroCard } from "./HeroCard";
import { SkillsMarquee } from "./SkillsMarquee";
import { ProjectCard } from "./ProjectCard";
import { TechnicalExpertiseCard } from "./FrontendHighlightsCard";
import { ExperienceCard } from "./ExperienceCard";
import { ContactCard } from "./ContactCard";
import { useLanguage } from "@/app/context/LanguageContext";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      duration: 0.8,
    },
  },
};

export function BentoGrid() {
  const { t } = useLanguage();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 p-6 md:p-12 max-w-7xl mx-auto pb-24"
    >
      {/* Row 1: Hero (Full Width) */}
      <motion.div variants={item} className="md:col-span-3">
        <HeroCard />
      </motion.div>

      {/* Row 3: Skills (Full Width) */}
      <motion.div variants={item} className="md:col-span-3">
        <SkillsMarquee
          techStackLabel={t.sections?.techStack}
          softSkillsLabel={t.sections?.softSkills}
          softSkillsTranslations={t.skills?.soft}
        />
      </motion.div>

      {/* Row 4: Projects */}
      <motion.div variants={item} className="md:col-span-3">
        <div className="flex flex-col gap-6">
          {t.sections?.projects && (
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight"
            >
              {t.sections.projects}
            </motion.h2>
          )}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 items-stretch"
          >
            <ProjectCard
              title={(t.projects as any)["ch7election"].title}
              description={(t.projects as any)["ch7election"].description}
              tags={[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "D3.js",
                "Design Token",
                "Atomic Design",
                "Responsive",
                "Real-time",
              ]}
              image="/projects/ch7-election-preview.png"
              link="/projects/ch7election"
            />
            <ProjectCard
              title={(t.projects as any)["traffix"]?.title || "Traffix"}
              description={(t.projects as any)["traffix"]?.description}
              tags={[
                "Next.js",
                "FastAPI",
                "LPR",
                "OCR",
                "IoT",
                "MQTT",
                "Design Token",
                "Atomic Design",
                "Responsive",
              ]}
              image="/projects/traffix-preview.png"
              link="/projects/traffix"
            />
            <ProjectCard
              title={(t.projects as any)["banthi-hospital"].title}
              description={(t.projects as any)["banthi-hospital"].description}
              tags={["Responsive", "HTML5", "CSS3", "Vanilla JS", "PHP"]}
              image="/projects/banthi-hospital-desktop.png"
              link="/projects/banthi-hospital"
            />
            <ProjectCard
              title={t.projects.careos.title}
              description={t.projects.careos.description}
              tags={[
                "Next.js",
                "React",
                "CSS Modules",
                "UI/UX Refactor",
                "Responsive",
              ]}
              image="/projects/careos-preview-v3.png"
              link="/projects/careos"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Row 4: Experience */}
      <motion.div variants={item} className="md:col-span-3">
        <ExperienceCard />
      </motion.div>

      {/* Row 5: Contact */}
      <motion.div variants={item} className="md:col-span-3">
        <ContactCard />
      </motion.div>
    </motion.div>
  );
}
