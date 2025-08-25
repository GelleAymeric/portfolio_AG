// app/page.tsx
import { Metadata } from "next";
import { allProjects } from 'contentlayer/generated';
import Image from 'next/image';
import { ServicesSection } from '@/components/ServicesSection';
import { ContactForm } from '@/components/ContactForm';
import { HeroPortfolio } from "@/components/HeroPortfolio";
import { FaCode, FaServer, FaTools } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Accueil - MonSiteVitrine",
  description: "Bienvenue sur MonSiteVitrine. Nous créons des sites web modernes et performants.",
};
export default function HomePage() {
  return (
    <>
  {/* Hero Section */}
  <HeroPortfolio />

  {/* Services */}
  <ServicesSection />

  {/* À propos / Bio */}
      <section id="a-propos" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 max-w-2xl flex flex-col items-center text-center">
          <Image
            src="/photo-Aymeric.jpg"
            alt="Aymeric Gelle"
            width={128}
            height={128}
            className="w-32 h-32 rounded-full mb-6 border-4 border-primary object-cover shadow-lg"
            priority
          />
          <h2 className="text-3xl font-bold mb-4 text-primary">À propos</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
            Fraîchement diplômé en développement web et mobile, je suis passionné par la création d&apos;expériences numériques modernes et accessibles. J&apos;aime apprendre, relever des défis techniques et imaginer des solutions qui simplifient la vie des utilisateurs.
          </p>
        </div>
      </section>

      {/* Compétences */}
      <section id="competences" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 flex flex-col items-center transition-colors duration-300">
              <FaCode className="text-4xl text-primary mb-2" />
              <span className="text-xl font-bold text-primary mb-2">Front-end</span>
              <ul className="text-center text-gray-700 dark:text-gray-300 space-y-1">
                <li>HTML5, CSS3, SASS</li>
                <li>JavaScript (ES6+), TypeScript</li>
                <li>React, Next.js</li>
                <li>Tailwind CSS, Bootstrap</li>
              </ul>
            </div>
            {/* Backend */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 flex flex-col items-center transition-colors duration-300">
              <FaServer className="text-4xl text-primary mb-2" />
              <span className="text-xl font-bold text-primary mb-2">Back-end</span>
              <ul className="text-center text-gray-700 dark:text-gray-300 space-y-1">
                <li>Node.js, Express</li>
                <li>API REST, GraphQL</li>
                <li>MongoDB, PostgreSQL</li>
                <li>Prisma, Mongoose</li>
              </ul>
            </div>
            {/* Outils & Techno */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 flex flex-col items-center transition-colors duration-300">
              <FaTools className="text-4xl text-primary mb-2" />
              <span className="text-xl font-bold text-primary mb-2">Outils & Techno</span>
              <ul className="text-center text-gray-700 dark:text-gray-300 space-y-1">
                <li>Git, GitHub</li>
                <li>Figma, Trello</li>
                <li>Framer Motion, Zod</li>
                <li>Vercel, Netlify</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projets / Portfolio */}
      <section id="projets" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Mes projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <div key={project.slug} className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-card flex flex-col">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="mt-auto flex gap-2">
                  <a href={`/projects/${project.slug}`} className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition" >Détail</a>
                  {project.demo && (
                    <a href={project.demo} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition" target="_blank" rel="noopener noreferrer">Voir</a>
                  )}
                  {/* Pas de bouton Code pour les visiteurs */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact */}
      <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Contact</h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 text-center text-sm text-gray-500 dark:text-gray-400">
        <div className="container mx-auto px-4">
          &copy; {new Date().getFullYear()} Aymeric Gelle. Tous droits réservés. | <a href="/mentions-legales" className="underline">Mentions légales</a>
        </div>
      </footer>
    </>
  );
}