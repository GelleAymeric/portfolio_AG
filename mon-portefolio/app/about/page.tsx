// filepath: mon-template-vitrine/app/about/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos - MonSiteVitrine",
  description: "Découvrez notre histoire, notre équipe et nos valeurs.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        À Propos de MonSiteVitrine
      </h1>
      <div className="space-y-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-brand dark:text-brand-light">Notre Mission</h2>
          <p>
            Notre mission est de fournir des solutions web innovantes et sur mesure qui aident nos clients à atteindre leurs objectifs et à se démarquer dans le monde numérique.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-brand dark:text-brand-light">Notre Équipe</h2>
          <p>
            Nous sommes une équipe de passionnés, designers, développeurs et stratèges, dédiés à la création d&apos;expériences web exceptionnelles. Chaque membre apporte son expertise unique pour garantir le succès de vos projets.
          </p>
          {/* Vous pouvez ajouter des cartes de membres d'équipe ici plus tard */}
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-brand dark:text-brand-light">Nos Valeurs</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Innovation et Créativité</li>
            <li>Engagement envers le Client</li>
            <li>Qualité et Excellence</li>
            <li>Transparence et Intégrité</li>
            <li>Collaboration et Esprit d&apos;équipe</li>
          </ul>
        </section>
      </div>
    </div>
  );
}