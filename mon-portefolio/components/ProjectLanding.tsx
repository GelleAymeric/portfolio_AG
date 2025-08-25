import { allProjects } from 'contentlayer/generated';
import { MdxContent } from '@/components/MdxContent';
import Image from 'next/image';

export function ProjectLanding({ slug }: { slug: string }) {
  const project = allProjects.find(p => p.slug === slug);
  if (!project) return null;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl p-6 md:p-10 max-w-3xl mx-auto my-12">
      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={320}
          className="w-full h-64 object-cover rounded mb-6"
        />
      )}
      <h1 className="text-3xl font-bold mb-2 text-primary">{project.title}</h1>
      <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
      <MdxContent code={project.body.code} />
      {project.demo && (
        <div className="flex gap-4 mt-8">
          <a href={project.demo} className="px-5 py-2 bg-primary text-white rounded hover:bg-primary/90 transition" target="_blank" rel="noopener noreferrer">Voir la démo</a>
        </div>
      )}
    </div>
  );
}
