import { notFound } from 'next/navigation';
import { ProjectLanding } from '@/components/ProjectLanding';
import { allProjects } from 'contentlayer/generated';

export async function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) return notFound();
  return <ProjectLanding slug={slug} />;
}
