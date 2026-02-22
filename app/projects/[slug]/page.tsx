import { getAllProjectSlugs } from "@/lib/data/projects";
import { ProjectDetailClient } from "@/components/project-detail";

// Generate static params for all project slugs
export function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-background">
      <ProjectDetailClient slug={slug} />
    </main>
  );
}
