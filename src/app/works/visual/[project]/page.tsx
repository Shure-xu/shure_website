import { notFound } from "next/navigation";
import { VisualProjectPage } from "@/components/visual-project-page";
import { getVisualProject, visualProjects } from "@/lib/visual-projects";

type VisualProjectRouteProps = {
  params: Promise<{
    project: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return visualProjects.map((project) => ({
    project: project.slug,
  }));
}

export async function generateMetadata({ params }: VisualProjectRouteProps) {
  const { project: slug } = await params;
  const project = getVisualProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Visual Design`,
    description: project.summary,
  };
}

export default async function VisualProjectRoute({
  params,
}: VisualProjectRouteProps) {
  const { project: slug } = await params;
  const project = getVisualProject(slug);

  if (!project) {
    notFound();
  }

  return <VisualProjectPage project={project} />;
}
