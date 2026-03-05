import { createMetadata } from '@/lib/metadata'
import { ROICalculator } from '@/components/sections/ROICalculator'
import { Container } from '@/components/ui/Container'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata = createMetadata({
  title: 'Cold Email ROI Calculator for Insurance Agencies',
  description:
    'Calculate your return on cold email prospecting. Enter your commission rates, close rate, and average premium to see projected book growth over 1-10 years.',
  path: '/roi-calculator',
})

export default function ROICalculatorPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Cold Email <span className="text-primary">ROI Calculator</span>
            </h1>
            <p className="mt-4 text-lg text-white/70">
              One closed commercial account can pay for months of prospecting.
              Plug in your numbers and see what cold email is worth for your agency.
            </p>
          </div>
        </Container>
      </section>

      <ROICalculator />

      <section className="py-16 bg-bg-light">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-dark text-center mb-6">
              How the Math Works
            </h2>
            <div className="space-y-4 text-medium-gray leading-relaxed">
              <p>
                This calculator uses real insurance industry data. Commission
                rates are based on Chubb Producer Compensation reports and
                industry benchmarks. Retention rates reflect independent agency
                averages from the Big &ldquo;I&rdquo; Best Practices Study.
              </p>
              <p>
                The compounding effect is what makes cold email different from
                lead vendors. Every account you write stays on your book,
                generating renewal commission year after year. A $25,000
                premium account at 12% commission and 85% retention earns
                $15,150 over its lifetime.
              </p>
              <p>
                Your actual results depend on your lines of business, your
                market, and your team&apos;s ability to close meetings. We
                build the pipeline. Your producers do the rest.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  )
}
