import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { getAllCaseStudies } from '@/lib/mdx'
import { Container } from '@/components/ui/Container'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata = createMetadata({
  title: 'Case Studies',
  description:
    'See how WorkflowClick helps seed-funded startups build pipeline through done-for-you cold email.',
  path: '/case-studies',
})

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies()

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Case <span className="text-primary">Studies</span>
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Real results from real campaigns. See how we help startups fill
              their pipeline.
            </p>
          </div>
        </Container>
      </section>

      {/* Studies list */}
      <section className="py-20">
        <Container>
          {studies.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-bg-light rounded-2xl p-12">
                <h2 className="text-2xl font-bold text-dark">
                  Case studies coming soon
                </h2>
                <p className="mt-4 text-medium-gray">
                  We are currently onboarding our first clients. Detailed case
                  studies with real metrics will be published here as results come
                  in.
                </p>
                <p className="mt-6 text-sm text-light-gray">
                  In the meantime, book a strategy call to learn about our
                  founder&apos;s track record of $50M+ in pipeline generated
                  across Element AI, Armilla AI, PointClickCare, Xero, and BlueCat.
                </p>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2">
              {studies.map((study) => {
                const firstMetric = Object.entries(study.frontmatter.metrics ?? {})[0]

                return (
                  <Link
                    key={study.slug}
                    href={`/case-studies/${study.slug}`}
                    className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200 overflow-hidden"
                  >
                    <div className="p-8">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wide mb-4">
                        {study.frontmatter.industry}
                      </span>

                      <h2 className="text-xl font-bold text-dark group-hover:text-primary transition-colors leading-snug">
                        {study.frontmatter.title}
                      </h2>

                      <p className="mt-3 text-medium-gray text-sm leading-relaxed">
                        {study.frontmatter.description}
                      </p>

                      {firstMetric && (
                        <div className="mt-6 pt-5 border-t border-gray-100">
                          <p className="text-3xl font-bold text-dark">
                            {String(firstMetric[1])}
                          </p>
                          <p className="mt-1 text-xs text-light-gray uppercase tracking-wide">
                            {firstMetric[0].replace(/_/g, ' ')}
                          </p>
                        </div>
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </Container>
      </section>

      <FinalCTA />
    </>
  )
}
