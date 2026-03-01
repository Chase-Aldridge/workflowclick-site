import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Cold email tips, deliverability guides, and outbound strategies for B2B startups.',
}

export default function BlogPage() {
  return (
    <>
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

      <section className="py-20">
        <Container>
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
        </Container>
      </section>

      <FinalCTA />
    </>
  )
}
