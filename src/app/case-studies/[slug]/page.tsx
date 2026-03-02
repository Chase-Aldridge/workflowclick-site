import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllCaseStudies, getCaseStudyBySlug } from '@/lib/mdx'
import { createMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { FinalCTA } from '@/components/sections/FinalCTA'

// ---------------------------------------------------------------------------
// Static generation
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  const studies = getAllCaseStudies()
  return studies.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  if (!study) return {}
  return createMetadata({
    title: study.frontmatter.title,
    description: study.frontmatter.description,
    path: `/case-studies/${slug}`,
    image: study.frontmatter.image,
  })
}

// ---------------------------------------------------------------------------
// Metric display helper
// ---------------------------------------------------------------------------

function formatMetricLabel(key: string): string {
  return key
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  if (!study) notFound()

  const { frontmatter, content } = study
  const metricEntries = Object.entries(frontmatter.metrics ?? {})

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/case-studies"
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
              Back to Case Studies
            </Link>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary-light uppercase tracking-wide">
                {frontmatter.industry}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
              {frontmatter.title}
            </h1>

            <p className="mt-4 text-lg text-white/70">{frontmatter.description}</p>
          </div>
        </Container>
      </section>

      {/* Metrics bar */}
      {metricEntries.length > 0 && (
        <section className="bg-dark border-t border-white/10 pb-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {metricEntries.map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-white/5 rounded-xl p-5 text-center border border-white/10"
                  >
                    <p className="text-2xl font-bold text-white sm:text-3xl">
                      {String(value)}
                    </p>
                    <p className="mt-1 text-xs text-white/50 uppercase tracking-wide">
                      {formatMetricLabel(key)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

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
