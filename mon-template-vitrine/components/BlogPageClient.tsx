"use client";

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { allPosts, type Post } from 'contentlayer/generated'
import { AnimatedBlogList } from '@/components/AnimatedBlogList';
import { compareDesc } from 'date-fns'

export function BlogPageClient() {
  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  // Trie les articles du plus récent au plus ancien
  const posts: Post[] = allPosts.sort((a: Post, b: Post) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const currentPage = Number(page) || 1;
  const POSTS_PER_PAGE = 5; // Nombre d'articles par page
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="container mx-auto max-w-4xl py-24 px-4 sm:py-32">
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Notre Blog
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Conseils, tutoriels et réflexions sur le monde du digital.
        </p>
      </header>

      <AnimatedBlogList posts={paginatedPosts} />

      {/* Pagination Controls */}
      <div className="mt-16 flex items-center justify-between">
        <div>
          {currentPage > 1 && (
            <Link
              href={`/blog?page=${currentPage - 1}`}
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
            >
              ← Articles précédents
            </Link>
          )}
        </div>

        <span className="text-muted-foreground">
          Page {currentPage} sur {totalPages}
        </span>

        <div>
          {currentPage < totalPages && (
            <Link
              href={`/blog?page=${currentPage + 1}`}
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
            >
              Articles suivants →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
