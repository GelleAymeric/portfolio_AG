// app/blog/page.tsx
import { Suspense } from 'react'
import { BlogPageClient } from '@/components/BlogPageClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Retrouvez ici tous nos articles sur le développement web, le design et les nouvelles technologies.',
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <BlogPageClient />
    </Suspense>
  )
}
