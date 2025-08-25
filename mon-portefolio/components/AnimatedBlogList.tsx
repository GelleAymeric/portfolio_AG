"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import type { Post } from "contentlayer/generated";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

interface AnimatedBlogListProps {
  posts: Post[];
}

export function AnimatedBlogList({ posts }: AnimatedBlogListProps) {
  return (
    <motion.div
      className="space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {posts.map((post) => (
        <motion.article
          key={post._id}
          className="group relative"
          variants={itemVariants}
        >
          <div className="mb-2">
            <time
              dateTime={post.date}
              className="block text-sm text-muted-foreground"
            >
              {format(new Date(post.date), "d MMMM yyyy", { locale: fr })}
            </time>
          </div>
          <h2 className="text-2xl font-bold leading-snug tracking-tight text-foreground">
            <Link href={post.url} className="static-link">
              <span className="absolute -inset-4 z-0 hidden rounded-2xl bg-secondary/50 transition group-hover:block md:-inset-6"></span>
              <span className="relative z-10">{post.title}</span>
            </Link>
          </h2>
          <p className="relative z-10 mt-3 text-base text-muted-foreground">
            {post.description}
          </p>
          <div className="relative z-10 mt-4">
            <Link
              href={post.url}
              className="text-sm font-semibold text-primary hover:underline"
            >
              Lire la suite →
            </Link>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
