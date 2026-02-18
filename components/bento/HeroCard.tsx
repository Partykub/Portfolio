"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { motion, Variants } from "framer-motion";

export function HeroCard() {
    const { t } = useLanguage();

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <Card className="col-span-1 md:col-span-3 bg-gradient-to-br from-blue-500/5 to-orange-500/5 border-none relative overflow-hidden h-full flex flex-col justify-center min-h-[400px]">
            {/* Background Grid */}
            <div className="absolute top-0 left-0 w-full h-full bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10 rounded-xl" />

            {/* Aurora Background Effect */}
            <motion.div
                className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -z-10"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 30, 0],
                    y: [0, 20, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -z-10"
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, -20, 0],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            <CardContent className="flex flex-col-reverse md:flex-row items-center justify-between p-8 md:p-12 lg:p-16 gap-8 md:gap-12 max-w-6xl mx-auto w-full relative z-10">

                {/* Left: Text Content */}
                <motion.div
                    className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 flex-1 w-full"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="space-y-4 w-full">
                        <motion.div variants={fadeInUp} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 mx-auto md:mx-0">
                            Available for work
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tight text-foreground -ml-0.5">
                            {t.hero.greeting}
                        </motion.h1>

                        <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl font-medium text-muted-foreground max-w-xl mx-auto md:mx-0">
                            {t.hero.role}
                        </motion.h2>

                        <motion.p variants={fadeInUp} className="text-base md:text-lg text-muted-foreground/80 max-w-lg leading-relaxed mx-auto md:mx-0">
                            {t.hero.description}
                        </motion.p>
                    </div>

                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start w-full">
                        <Button className="rounded-full font-medium h-12 px-6 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all" size="lg" asChild>
                            <Link href="/Resume_Ratchanon_Kunyodying.pdf" target="_blank" download className="flex items-center">
                                <Download className="mr-2 h-5 w-5" />
                                {t.hero.downloadResume}
                            </Link>
                        </Button>

                        <Button variant="outline" className="rounded-full h-12 px-6 text-base hover:bg-muted/50 transition-all" asChild>
                            <Link href="https://github.com/Partykub" target="_blank" className="flex items-center">
                                <Github className="mr-2 h-5 w-5" />
                                GitHub
                            </Link>
                        </Button>

                        <Button variant="outline" className="rounded-full h-12 px-6 text-base hover:bg-muted/50 transition-all" asChild>
                            <Link href="https://linkedin.com/in/ratchanon-kunyodying" target="_blank" className="flex items-center">
                                <Linkedin className="mr-2 h-5 w-5" />
                                LinkedIn
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Right: Profile Image */}
                <motion.div
                    className="relative flex-shrink-0 group"
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "backOut", delay: 0.2 }}
                >
                    <div className="w-48 h-48 md:w-72 md:h-72 rounded-3xl border-4 border-background shadow-2xl overflow-hidden relative z-10 transition-transform duration-500 hover:scale-105 bg-muted rotate-3 hover:rotate-0">
                        <Image
                            src="/profile_background.png"
                            alt="Ratchanon Profile"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 192px, 288px"
                            priority
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
                        />
                    </div>
                </motion.div>

            </CardContent>
        </Card>
    );
}
