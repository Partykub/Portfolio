"use client";

import { useParams } from "next/navigation";
import { useLanguage } from "@/app/context/LanguageContext";
import { getProject, getAllProjectSlugs } from "@/lib/data/projects";
import {
  ProjectHero,
  ProjectSidebar,
  ChallengeSection,
  ResponsiveShowcase,
} from "@/components/project-detail";
import { Navbar } from "@/components/ui/Navbar";
import { notFound } from "next/navigation";

// Labels for i18n
const labels = {
  en: {
    back: "Back to Portfolio",
    sourceCode: "Source Code",
    role: "Role",
    timeline: "Timeline",
    coreStack: "Core Stack",
    toc: "Table of Contents",
    responsive: "Responsive Execution",
  },
  th: {
    back: "กลับไปหน้า Portfolio",
    sourceCode: "ซอร์สโค้ด",
    role: "ตำแหน่ง",
    timeline: "ระยะเวลา",
    coreStack: "เทคโนโลยีหลัก",
    toc: "สารบัญ",
    responsive: "การรองรับทุกหน้าจอ",
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
      {/* Navbar with Language and Theme Toggle */}
      <Navbar />

      {/* Hero Section */}
      <ProjectHero
        project={project}
        backLabel={l.back}
        sourceCodeLabel={l.sourceCode}
      />

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 xl:gap-16">
          {/* Sidebar */}
          <ProjectSidebar
            project={project}
            roleLabel={l.role}
            timelineLabel={l.timeline}
            coreStackLabel={l.coreStack}
            tocLabel={l.toc}
          />

          {/* Main Content */}
          <div className="space-y-0 min-w-0">
            {/* Challenge */}
            <ChallengeSection project={project} />

            {/* Responsive Showcase */}
            <ResponsiveShowcase project={project} title={l.responsive} />
          </div>
        </div>
      </div>
    </main>
  );
}
