"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowUpRight,
  Check,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ContactCard() {
  const { t } = useLanguage();
  const email = "ratchanon.kunyodying@gmail.com";

  return (
    <Card className="col-span-1 md:col-span-3 bg-card border-border p-8 md:p-12 flex flex-col items-center text-center justify-center gap-8 overflow-hidden relative">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 -z-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-3 max-w-2xl mx-auto"
      >
        <motion.h3
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold font-heading text-foreground"
        >
          {t.contact.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg md:text-xl font-medium"
        >
          {t.contact.cta}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col md:flex-row items-center justify-center gap-6 w-full py-4"
      >
        {/* Email Text Link */}
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link
            href={`mailto:${email}`}
            className="group flex items-center gap-3 text-lg md:text-xl font-semibold text-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted/50"
          >
            <Mail className="w-6 h-6 text-primary" />
            <span className="hidden sm:inline">{email}</span>
            <span className="sm:hidden">อีเมล</span>
          </Link>
        </motion.div>

        <div className="hidden md:block w-px h-8 bg-border" />

        {/* Primary Resume Button */}
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button
            size="lg"
            className="rounded-full px-8 text-base shadow-md hover:shadow-xl transition-all font-semibold"
            asChild
          >
            <Link
              href="/Resume_Ratchanon_Kunyodying.pdf"
              target="_blank"
              className="flex items-center"
            >
              <Download className="mr-2 h-5 w-5" />
              {t.contact.resume}
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Footer Grid - Contact Methods */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
      >
        {/* Location Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            y: -8,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="flex flex-col items-center justify-center p-6 rounded-2xl bg-secondary/20 border border-border/50 hover:bg-secondary/30 transition-colors gap-3 group cursor-pointer"
        >
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            className="p-3 rounded-full bg-background border border-border group-hover:border-primary/50 transition-colors"
          >
            <MapPin className="w-5 h-5 text-primary" />
          </motion.div>
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground mb-1">
              {t.contact.location}
            </p>
            <p className="text-base font-semibold text-foreground">
              {t.contact.city}
            </p>
          </div>
        </motion.div>

        {/* Phone Card (Clickable) */}
        <motion.div
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            y: -8,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link
            href="tel:+66903244616"
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-secondary/20 border border-border/50 hover:bg-secondary/30 hover:border-primary/30 transition-all gap-3 group cursor-pointer h-full"
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className="p-3 rounded-full bg-background border border-border group-hover:border-primary/50 transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
            </motion.div>
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground mb-1">
                {t.contact.phone}
              </p>
              <p className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                090-324-4616
              </p>
            </div>
          </Link>
        </motion.div>

        {/* LinkedIn Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            y: -8,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link
            href="https://linkedin.com/in/ratchanon-kunyodying"
            target="_blank"
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-secondary/20 border border-border/50 hover:bg-[#0077b5]/10 hover:border-[#0077b5]/30 transition-all gap-3 group cursor-pointer h-full"
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className="p-3 rounded-full bg-background border border-border group-hover:border-[#0077b5]/50 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-foreground group-hover:text-[#0077b5] transition-colors" />
            </motion.div>
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground mb-1 flex items-center justify-center gap-1">
                {t.contact.linkedin}{" "}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </p>
              <p className="text-base font-semibold text-foreground group-hover:text-[#0077b5] transition-colors">
                {t.contact.connect}
              </p>
            </div>
          </Link>
        </motion.div>

        {/* GitHub Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            y: -8,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link
            href="https://github.com/Partykub"
            target="_blank"
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-secondary/20 border border-border/50 hover:bg-foreground/5 hover:border-foreground/30 transition-all gap-3 group cursor-pointer h-full"
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className="p-3 rounded-full bg-background border border-border group-hover:border-foreground/50 transition-colors"
            >
              <Github className="w-5 h-5 text-foreground" />
            </motion.div>
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground mb-1 flex items-center justify-center gap-1">
                {t.contact.github}{" "}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </p>
              <p className="text-base font-semibold text-foreground group-hover:text-foreground transition-colors">
                {t.contact.follow}
              </p>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </Card>
  );
}
