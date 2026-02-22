"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import {
  motion,
  Variants,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { MouseEvent } from "react";

export function HeroCard() {
  const { t } = useLanguage();

  // Magnetic mouse effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) * 0.05);
    mouseY.set((e.clientY - centerY) * 0.05);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <Card className="col-span-1 md:col-span-3 bg-card border-none relative overflow-hidden h-full flex flex-col justify-center min-h-[400px] shadow-sm group">
      {/* Animated Background Grid */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10 rounded-xl"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      {/* Gradient orb animation */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <CardContent
        className="flex flex-col-reverse md:flex-row items-center justify-between p-8 md:p-12 lg:p-16 gap-8 md:gap-12 max-w-6xl mx-auto w-full relative z-10"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left: Text Content */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 flex-1 w-full"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-4 w-full">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 mx-auto md:mx-0"
            >
              {t.hero.availableForWork}
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tight text-foreground -ml-0.5"
            >
              {t.hero.greeting}
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="text-xl md:text-2xl font-medium text-muted-foreground max-w-xl mx-auto md:mx-0"
            >
              {t.hero.role}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-muted-foreground/80 max-w-lg leading-relaxed mx-auto md:mx-0"
            >
              {t.hero.description}
            </motion.p>
          </div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start w-full"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                className="rounded-full font-semibold h-12 px-6 text-base shadow-md hover:shadow-xl transition-all bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
                asChild
              >
                <Link
                  href="/Resume_Ratchanon_Kunyodying.pdf"
                  target="_blank"
                  download
                  className="flex items-center"
                >
                  <Download className="mr-2 h-5 w-5" />
                  {t.hero.downloadResume}
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                className="rounded-full h-12 px-6 text-base hover:bg-muted/50 transition-all"
                asChild
              >
                <Link
                  href="https://github.com/Partykub"
                  target="_blank"
                  className="flex items-center"
                >
                  <Github className="mr-2 h-5 w-5" />
                  {t.contact.github}
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                className="rounded-full h-12 px-6 text-base hover:bg-muted/50 transition-all"
                asChild
              >
                <Link
                  href="https://linkedin.com/in/ratchanon-kunyodying"
                  target="_blank"
                  className="flex items-center"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  {t.contact.linkedin}
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right: Profile Image with Magnetic Effect */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8, rotate: -10, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          style={{ x, y }}
        >
          <motion.div
            className="w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-background shadow-2xl overflow-hidden relative z-10 bg-muted"
            whileHover={{
              scale: 1.05,
              rotate: 3,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
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
          </motion.div>

          {/* Floating glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/20 blur-2xl -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </CardContent>
    </Card>
  );
}
