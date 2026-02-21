"use client";

import { useParams } from "next/navigation";
import { useLanguage } from "@/app/context/LanguageContext";
import { getProject, getAllProjectSlugs } from "@/lib/data/projects";
import {
  ProjectHero,
  ProjectSidebar,
  ChallengeSection,
  ResponsiveShowcase,
  ArchitectureSection,
  ImpactMetrics,
} from "@/components/project-detail";
import { notFound } from "next/navigation";

// Labels for i18n
const labels = {
  en: {
    back: "Back to Portfolio",
    viewLive: "View Live Site",
    sourceCode: "Source Code",
    role: "Role",
    timeline: "Timeline",
    coreStack: "Core Stack",
    toc: "Table of Contents",
    responsive: "Responsive Execution",
    architecture: "Component Architecture",
    impact: "Impact & Performance",
  },
  th: {
    back: "กลับไปหน้า Portfolio",
    viewLive: "ดูเว็บไซต์",
    sourceCode: "ซอร์สโค้ด",
    role: "ตำแหน่ง",
    timeline: "ระยะเวลา",
    coreStack: "เทคโนโลยีหลัก",
    toc: "สารบัญ",
    responsive: "การรองรับทุกหน้าจอ",
    architecture: "สถาปัตยกรรมระบบ",
    impact: "ผลลัพธ์และประสิทธิภาพ",
  },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const { language } = useLanguage();
  const slug = params.slug as string;

  const project = getProject(slug, language);
  const l = labels[language];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <ProjectHero
        project={project}
        backLabel={l.back}
        viewLiveLabel={l.viewLive}
        sourceCodeLabel={l.sourceCode}
      />

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="grid md:grid-cols-[240px_1fr] gap-12 md:gap-16">
          {/* Sidebar */}
          <ProjectSidebar
            project={project}
            roleLabel={l.role}
            timelineLabel={l.timeline}
            coreStackLabel={l.coreStack}
            tocLabel={l.toc}
          />

          {/* Main Content */}
          <div className="space-y-0">
            {/* Challenge */}
            <ChallengeSection project={project} />

            {/* Responsive Showcase */}
            <ResponsiveShowcase 
              project={project} 
              title={l.responsive}
            />

            {/* Architecture */}
            <ArchitectureSection 
              project={project}
              title={l.architecture}
            />

            {/* Impact Metrics */}
            <ImpactMetrics 
              project={project}
              title={l.impact}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
