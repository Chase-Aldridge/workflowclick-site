import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { createMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { FinalCTA } from '@/components/sections/FinalCTA'

// ---------------------------------------------------------------------------
// Static generation
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return createMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    path: `/blog/${slug}`,
    image: post.frontmatter.image,
  })
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const { frontmatter, content, readingTime } = post

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors mb-8"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>

            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {frontmatter.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-white border-white/30">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
              {frontmatter.title}
            </h1>

            <p className="mt-4 text-lg text-white/70">{frontmatter.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/50">
              <span>{frontmatter.author}</span>
              <span>&middot;</span>
              <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
              <span>&middot;</span>
              <span>{readingTime} min read</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <article className="prose">
              <MDXRemote source={content} />
            </article>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  )
}
