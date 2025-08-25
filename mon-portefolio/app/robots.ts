// app/robots.ts
import { MetadataRoute } from 'next'
import { siteConfig } from '@/data/siteConfig'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Vous pourriez ajouter des règles "disallow" ici pour des pages spécifiques
      // disallow: '/private/', 
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
