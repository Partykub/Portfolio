"use client";

import { BentoGrid } from "@/components/bento/BentoGrid";
import { Navbar } from "@/components/ui/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground flex items-center justify-center py-10 md:py-20 relative"
    >
      <Navbar />
      <BentoGrid />
    </motion.main>
  );
}
