// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { allPosts, Post } from 'contentlayer/generated'
import { MdxContent } from '@/components/MdxContent'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import type { Metadata } from 'next'

// Statically generate routes at build time
export const generateStaticParams = async () => allPosts.map((post: Post) => ({ slug: post.slug }))

// Dynamically generate metadata for each post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = allPosts.find((post: Post) => post.slug === params.slug)

  if (!post) {
    return {
      title: 'Article non trouvé',
      description: "Cet article n'existe pas ou a été déplacé.",
    }
  }

  return {
    title: post.title,
    description: post.description,
  }
}

const PostLayout = async ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post: Post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto max-w-3xl py-24 px-4 sm:py-32">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          {post.title}
        </h1>
        <time dateTime={post.date} className="mt-3 block text-sm text-muted-foreground">
          Publié le {format(new Date(post.date), 'd MMMM yyyy', { locale: fr })}
        </time>
      </div>
      
      <MdxContent code={post.body.code} />
    </article>
  )
}

export default PostLayout
