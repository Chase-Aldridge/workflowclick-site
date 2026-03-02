import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { getAllPosts } from '@/lib/mdx'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata = createMetadata({
  title: 'Blog',
  description:
    'Cold email tips, deliverability guides, and outbound strategies for B2B startups.',
  path: '/blog',
})

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              <span className="text-primary">Blog</span>
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Strategies, guides, and insights to help you master cold email and
              outbound sales.
            </p>
          </div>
        </Container>
      </section>

      {/* Posts list */}
      <section className="py-20">
        <Container>
          {posts.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-bg-light rounded-2xl p-12">
                <h2 className="text-2xl font-bold text-dark">
                  Blog posts coming soon
                </h2>
                <p className="mt-4 text-medium-gray">
                  We are working on in-depth guides covering email deliverability,
                  cold email copywriting, domain authentication, and outbound
                  strategy for startups.
                </p>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-1">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200 overflow-hidden"
                >
                  <div className="p-8">
                    {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.frontmatter.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <h2 className="text-xl font-bold text-dark group-hover:text-primary transition-colors sm:text-2xl leading-snug">
                      {post.frontmatter.title}
                    </h2>

                    <p className="mt-3 text-medium-gray leading-relaxed">
                      {post.frontmatter.description}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-light-gray">
                      <span>{post.frontmatter.author}</span>
                      <span>&middot;</span>
                      <time dateTime={post.frontmatter.date}>
                        {formatDate(post.frontmatter.date)}
                      </time>
                      <span>&middot;</span>
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>

      <FinalCTA />
    </>
  )
}
