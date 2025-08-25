"use client"

import { useMDXComponent } from 'next-contentlayer/hooks'

// Applique un style de base au contenu MDX
const proseClassName = `
  prose prose-slate mx-auto dark:prose-invert max-w-none
  prose-h2:text-2xl prose-h3:text-xl
  prose-a:text-primary hover:prose-a:text-primary/80
  prose-code:before:content-[''] prose-code:after:content-['']
  prose-blockquote:border-l-primary
`

export function MdxContent({ code }: { code: string }) {
  const MDXContent = useMDXComponent(code)

  return (
    <div className={proseClassName}>
      <MDXContent />
    </div>
  )
}
