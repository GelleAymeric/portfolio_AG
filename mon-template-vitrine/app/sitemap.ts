// app/sitemap.ts
import { MetadataRoute } from 'next'
import { siteConfig } from '@/data/siteConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/contact', '/services'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route ? 0.8 : 1.0,
  }));

  // Si vous aviez un blog ou des pages dynamiques, vous les ajouteriez ici.
  // Par exemple:
  // const posts = allPosts.map((post) => ({
  //   url: `${siteConfig.url}/blog/${post.slug}`,
  //   lastModified: post.date,
  //   changeFrequency: 'weekly',
  //   priority: 0.6,
  // }));

  return [...routes];
}
