"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar, Building2 } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { motion, Variants } from "framer-motion";

// Animation variants
const timelineItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
    scale: 0.95,
  },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: custom * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const dotPulseVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (custom: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: custom * 0.15,
      duration: 0.4,
      ease: "backOut",
    },
  }),
};

export function ExperienceCard() {
  const { t } = useLanguage();

  return (
    <Card className="col-span-1 md:col-span-3 bg-card border-border p-6 md:p-8 overflow-hidden">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-xl font-bold font-heading mb-6 flex items-center gap-2"
      >
        <Briefcase className="w-5 h-5 text-primary" />
        {t.experience.title}
      </motion.h3>

      <div className="space-y-10">
        {/* Work Experience Timeline */}
        <motion.div
          initial={{ scaleY: 0, originY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative border-l border-border ml-2 md:ml-4 space-y-10 pb-2"
        >
          {t.experience.jobs.map((job: any, i: number) => (
            <motion.div
              key={i}
              custom={i}
              variants={timelineItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="pl-6 md:pl-8 relative"
            >
              {/* Timeline Dot with Pulse */}
              <motion.div
                custom={i}
                variants={dotPulseVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.5 }}
                className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background"
              >
                {/* Animated ring pulse */}
                <motion.div
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.15,
                  }}
                  className="absolute inset-0 rounded-full bg-primary"
                />
              </motion.div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                <motion.h4
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.15 + 0.2 }}
                  viewport={{ once: true }}
                  className="font-bold text-lg text-foreground pb-3"
                >
                  {job.role}
                </motion.h4>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 self-start sm:self-auto bg-muted/20 px-3 py-1.5 rounded-md border border-border/50"
                >
                  <Calendar className="w-4 h-4 text-primary" />
                  {job.period}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.15 + 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-primary font-medium mb-3 text-sm pb-1"
              >
                <Building2 className="w-4 h-4" />
                {job.company}
              </motion.div>

              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.15 + 0.5, staggerChildren: 0.1 }}
                viewport={{ once: true }}
                className="space-y-2 text-muted-foreground text-sm list-disc pl-4 marker:text-primary/50"
              >
                {job.details.map((detail: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 + 0.5 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="leading-relaxed"
                  >
                    {detail}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-2 border-t border-border/50"
        >
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg font-bold font-heading mb-4 flex items-center gap-2 mt-6"
          >
            <GraduationCap className="w-5 h-5 text-primary" />
            {t.experience.education.title}
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pl-2 md:pl-4 mt-2"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
              <h4 className="font-bold text-lg text-foreground pb-2 sm:pb-3">
                {t.experience.education.degree}
              </h4>
              <div className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 self-start sm:self-auto bg-muted/20 px-3 py-1.5 rounded-md border border-border/50 mb-3 sm:mb-0">
                <Calendar className="w-4 h-4 text-primary" />
                {t.experience.education.period}
              </div>
            </div>

            <div className="flex items-center gap-2 text-primary font-medium mb-2 text-sm">
              <Building2 className="w-4 h-4" />
              {t.experience.education.university}
            </div>

            <div className="text-sm font-semibold pl-6 mt-1">
              <span className="text-muted-foreground/80 mr-1.5">GPA</span>
              <span className="text-foreground/90">
                {t.experience.education.gpa}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Card>
  );
}
