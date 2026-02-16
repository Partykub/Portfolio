"use client";

import { motion, Variants } from "framer-motion";
import { HeroCard } from "./HeroCard";
import { ProfileCard } from "./ProfileCard";
import { SkillsMarquee } from "./SkillsMarquee";
import { ProjectCard } from "./ProjectCard";

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
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto"
        >
            {/* Row 1: Hero (2/3) + Profile (1/3) */}
            <motion.div variants={item} className="md:col-span-2 row-span-2">
                <HeroCard />
            </motion.div>

            <motion.div variants={item} className="md:col-span-1 row-span-2 h-full">
                <ProfileCard />
            </motion.div>

            {/* Row 2: Skills (Full Width) */}
            <motion.div variants={item} className="md:col-span-3">
                <SkillsMarquee />
            </motion.div>

            {/* Row 3: Projects */}
            <motion.div variants={item} className="md:col-span-2">
                <ProjectCard
                    title="Traffix"
                    description="Smart Parking AI Platform – Next.js & Python"
                    tags={["Next.js", "Python", "AI", "Dashboard"]}
                    image="/traffix-dashboard.png"
                    theme="dark"
                    link="#"
                />
            </motion.div>

            <motion.div variants={item} className="md:col-span-1">
                <ProjectCard
                    title="Warehouse System"
                    description="Real-time Inventory System – WebSocket & NestJS"
                    tags={["NestJS", "WebSocket", "Real-time"]}
                    image="/warehouse-ui.png"
                    theme="light" // Light theme as per request (or default)
                    link="#"
                />
            </motion.div>
        </motion.div>
    );
}
