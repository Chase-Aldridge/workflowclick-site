import { Check, X } from 'lucide-react'
import { createMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata = createMetadata({
  title: 'Services',
  description:
    'Cold email and cold calling services for insurance agencies and insurtechs. Four packages from email-only to full outbound with done-for-you campaigns, infrastructure, and cold calling.',
  path: '/services',
})

const comparisonRows = [
  { feature: 'Verified companies/month', emailOnly: '100-150', coldCallOnly: false, fullOutbound: '100-150', outboundPro: '150-200' },
  { feature: 'Email sequences', emailOnly: '2-3', coldCallOnly: false, fullOutbound: '2-3', outboundPro: '3-4' },
  { feature: 'Reply forwarding', emailOnly: true, coldCallOnly: false, fullOutbound: true, outboundPro: true },
  { feature: 'Cold calling', emailOnly: false, coldCallOnly: '20 hrs/mo', fullOutbound: '15-20 hrs/mo', outboundPro: '40 hrs/mo' },
  { feature: 'Meeting booking', emailOnly: false, coldCallOnly: true, fullOutbound: true, outboundPro: true },
  { feature: 'Dedicated sending inboxes', emailOnly: '10', coldCallOnly: false, fullOutbound: '10', outboundPro: '10' },
  { feature: 'Full domain authentication', emailOnly: true, coldCallOnly: false, fullOutbound: true, outboundPro: true },
  { feature: 'Email verification', emailOnly: true, coldCallOnly: false, fullOutbound: true, outboundPro: true },
  { feature: 'WFC-provided dialer', emailOnly: false, coldCallOnly: true, fullOutbound: true, outboundPro: true },
  { feature: 'CRM integration available', emailOnly: false, coldCallOnly: true, fullOutbound: true, outboundPro: true },
  { feature: 'Deliverability monitoring', emailOnly: true, coldCallOnly: false, fullOutbound: true, outboundPro: true },
  { feature: 'Strategy calls/month', emailOnly: '1', coldCallOnly: '2', fullOutbound: '2', outboundPro: '2' },
]

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="h-5 w-5 text-green mx-auto" />
  if (value === false) return <X className="h-5 w-5 text-light-gray mx-auto" />
  return <span className="text-sm text-dark">{value}</span>
}

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Services Built to <span className="text-primary">Grow Your Pipeline</span>
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Four packages designed to match your goals. Email only, cold calling only,
              or the full outbound engine.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            title="Compare Packages"
            subtitle="We own the entire infrastructure. Domains, inboxes, warming, authentication, dialer. You show up to meetings."
          />

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px]">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 pr-4 text-sm font-medium text-light-gray w-1/5">
                    Feature
                  </th>
                  <th className="text-center py-4 px-3 text-sm font-semibold text-dark">
                    Email Only
                  </th>
                  <th className="text-center py-4 px-3 text-sm font-semibold text-dark">
                    Cold Call Only
                  </th>
                  <th className="text-center py-4 px-3 text-sm font-semibold text-primary bg-primary/5 rounded-t-lg">
                    Full Outbound
                    <span className="block text-xs font-normal text-primary/60">
                      Most Popular
                    </span>
                  </th>
                  <th className="text-center py-4 px-3 text-sm font-semibold text-dark">
                    Outbound Pro
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100">
                    <td className="py-4 pr-4 text-sm text-medium-gray">
                      {row.feature}
                    </td>
                    <td className="py-4 px-3 text-center">
                      <CellValue value={row.emailOnly} />
                    </td>
                    <td className="py-4 px-3 text-center">
                      <CellValue value={row.coldCallOnly} />
                    </td>
                    <td className="py-4 px-3 text-center bg-primary/5">
                      <CellValue value={row.fullOutbound} />
                    </td>
                    <td className="py-4 px-3 text-center">
                      <CellValue value={row.outboundPro} />
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td />
                  <td className="py-6 px-3 text-center">
                    <Button href="/contact" size="sm" variant="secondary">
                      Book a Call
                    </Button>
                  </td>
                  <td className="py-6 px-3 text-center">
                    <Button href="/contact" size="sm" variant="secondary">
                      Book a Call
                    </Button>
                  </td>
                  <td className="py-6 px-3 text-center bg-primary/5 rounded-b-lg">
                    <Button href="/contact" size="sm">
                      Book a Call
                    </Button>
                  </td>
                  <td className="py-6 px-3 text-center">
                    <Button href="/contact" size="sm" variant="secondary">
                      Book a Call
                    </Button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </Container>
      </section>

      {/* SDR Cost Comparison */}
      <section className="py-20 bg-bg-light">
        <Container>
          <SectionHeading
            title="Less Than an In-House SDR"
            subtitle="And you get an entire team, not just one rep who might quit."
          />
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="p-6 bg-white rounded-xl border border-gray-100">
                <h3 className="text-lg font-semibold text-dark mb-4">In-House SDR</h3>
                <ul className="space-y-3 text-sm text-medium-gray">
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red shrink-0 mt-0.5" />
                    <span>$60K-$108K/year fully loaded</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red shrink-0 mt-0.5" />
                    <span>3-6 months to ramp up</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red shrink-0 mt-0.5" />
                    <span>35% annual turnover rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red shrink-0 mt-0.5" />
                    <span>Daily management overhead</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red shrink-0 mt-0.5" />
                    <span>One person doing one job</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white rounded-xl border-2 border-primary">
                <h3 className="text-lg font-semibold text-primary mb-4">WorkFlowClick</h3>
                <ul className="space-y-3 text-sm text-medium-gray">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green shrink-0 mt-0.5" />
                    <span>A fraction of the cost of one SDR</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green shrink-0 mt-0.5" />
                    <span>Campaigns live in weeks, not months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green shrink-0 mt-0.5" />
                    <span>3-month commitment, then month-to-month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green shrink-0 mt-0.5" />
                    <span>Email + cold calling from one team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green shrink-0 mt-0.5" />
                    <span>We own the infrastructure, you own the pipeline</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center text-sm text-light-gray mt-6">
              3-month initial commitment, then month-to-month. Cancel with 30 days notice after the initial term. One-time setup fee for email packages.
            </p>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  )
}
