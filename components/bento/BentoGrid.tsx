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
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
        }
    },
};

export function BentoGrid() {
    const { t } = useLanguage();

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 p-6 md:p-12 max-w-7xl mx-auto pb-24"
        >
            {/* Row 1: Hero (Full Width) */}
            <motion.div variants={item} className="md:col-span-3 mb-8 md:mb-12">
                <HeroCard />
            </motion.div>

            {/* Row 3: Skills (Full Width) */}
            <motion.div variants={item} className="md:col-span-3">
                <SkillsMarquee />
            </motion.div>

            {/* Row 3: Projects */}
            <motion.div variants={item} className="md:col-span-2">
                <ProjectCard
                    title={t.projects.careos.title}
                    description={t.projects.careos.description}
                    tags={["PHP", "jQuery", "HTML5", "CSS3", "MySQL", "76 Pages", "28 Modules"]}
                    image="/projects/careos-preview.png"
                    link="http://localhost:8081"
                />
            </motion.div>

            <motion.div variants={item} className="md:col-span-1">
                <ProjectCard
                    title={t.projects.smartdashboard.title}
                    description={t.projects.smartdashboard.description}
                    tags={["PHP", "ApexCharts", "AI/ML", "Real-time", "KPI"]}
                    image="/projects/smartdashboard-preview.png"
                    link="http://localhost:8082"
                />
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
