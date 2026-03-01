import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'See how WorkflowClick helps seed-funded startups build pipeline through done-for-you cold email.',
}

export default function CaseStudiesPage() {
  return (
    <>
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

      <section className="py-20">
        <Container>
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
                founder&apos;s track record of $10M+ in pipeline generated
                across Element AI, Armilla AI, PointClickCare, Xero, and BlueCat.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  )
}
