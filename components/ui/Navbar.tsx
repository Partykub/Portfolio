"use client";

import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { motion, useScroll, useTransform } from "framer-motion";

export function Navbar() {
  const { scrollY } = useScroll();

  // Animate backdrop blur and shadow based on scroll
  const backdropBlur = useTransform(scrollY, [0, 100], [8, 20]);
  const shadowOpacity = useTransform(scrollY, [0, 100], [0.1, 0.3]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        backdropFilter: useTransform(
          backdropBlur,
          (value) => `blur(${value}px)`,
        ),
        boxShadow: useTransform(
          shadowOpacity,
          (value) => `0 4px 24px rgba(0, 0, 0, ${value})`,
        ),
      }}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 p-2 rounded-full bg-background/50 border border-border"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <LanguageToggle />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <ModeToggle />
      </motion.div>
    </motion.nav>
  );
}
