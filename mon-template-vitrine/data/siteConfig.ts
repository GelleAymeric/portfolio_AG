export const siteConfig = {
  name: 'Mon Template Vitrine',
  description:
    'Un template de site vitrine moderne et réutilisable construit avec Next.js, TypeScript et Tailwind CSS.',
  url: 'http://localhost:3000', // Remplacez par l'URL de production
  ogImage: 'http://localhost:3000/og.png', // Image pour les partages sur les réseaux sociaux
  author: 'Votre Nom ou Nom de l\'entreprise',
  links: {
    twitter: 'https://twitter.com/votrecompte',
    github: 'https://github.com/votrecompte',
    // Ajoutez d'autres liens si nécessaire
  },
}

export type SiteConfig = typeof siteConfig
