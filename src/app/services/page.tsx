import { Check, X } from 'lucide-react'
import { createMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata = createMetadata({
  title: 'Services',
  description:
    'Cold email services for insurance agencies and insurtechs. Choose from Bronze, Silver, or Gold tiers with done-for-you outbound campaigns, domain warming, and qualified meetings.',
  path: '/services',
})

const comparisonRows = [
  { feature: 'Verified contacts/month', bronze: '1,000-1,500', silver: '2,500-3,000', gold: '5,000+' },
  { feature: 'Apollo sequences', bronze: '4', silver: '6', gold: '25+' },
  { feature: 'Authenticated inboxes', bronze: 'Up to 10', silver: 'Up to 20', gold: 'Unlimited' },
  { feature: 'Domains managed', bronze: '1', silver: '3', gold: '5' },
  { feature: 'Named accounts/month', bronze: false, silver: '10', gold: '25' },
  { feature: 'X-date campaign targeting', bronze: false, silver: true, gold: true },
  { feature: 'Commercial lines list building by class code', bronze: false, silver: true, gold: true },
  { feature: 'Carrier-specific messaging', bronze: false, silver: false, gold: true },
  { feature: 'Real-time Slack notifications', bronze: false, silver: true, gold: 'Full suite + custom rules' },
  { feature: 'Signal-based follow-up playbook', bronze: false, silver: false, gold: true },
  { feature: 'Strategy sessions', bronze: '2x biweekly', silver: 'Weekly', gold: 'Unlimited (up to 8hrs)' },
  { feature: 'Manual prospecting', bronze: false, silver: true, gold: true },
  { feature: 'Omnichannel (email + LinkedIn + calls)', bronze: false, silver: false, gold: true },
  { feature: 'Cold call scripts', bronze: false, silver: false, gold: true },
  { feature: 'Insurance compliance review (CAN-SPAM + state)', bronze: true, silver: true, gold: true },
  { feature: 'AMS integration readiness', bronze: false, silver: false, gold: true },
  { feature: 'Quarterly business review', bronze: false, silver: false, gold: true },
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
              Services Built to <span className="text-primary">Grow Your Book</span>
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Three tiers designed to match your agency&apos;s goals. From first
              campaigns to a full outbound engine.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            title="Compare Plans"
            subtitle="Every plan includes domain warming, full authentication, daily campaign management, and performance reporting."
          />

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 pr-4 text-sm font-medium text-light-gray w-1/4">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-dark">
                    Bronze
                    <span className="block text-xs font-normal text-light-gray">
                      &ldquo;The Machine&rdquo;
                    </span>
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-primary bg-primary/5 rounded-t-lg">
                    Silver
                    <span className="block text-xs font-normal text-primary/60">
                      &ldquo;The War Room&rdquo;
                    </span>
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-dark">
                    Gold
                    <span className="block text-xs font-normal text-light-gray">
                      &ldquo;The Takeover&rdquo;
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100">
                    <td className="py-4 pr-4 text-sm text-medium-gray">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CellValue value={row.bronze} />
                    </td>
                    <td className="py-4 px-4 text-center bg-primary/5">
                      <CellValue value={row.silver} />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CellValue value={row.gold} />
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td />
                  <td className="py-6 px-4 text-center">
                    <Button href="/contact" size="sm" variant="secondary">
                      Book a Call
                    </Button>
                  </td>
                  <td className="py-6 px-4 text-center bg-primary/5 rounded-b-lg">
                    <Button href="/contact" size="sm">
                      Book a Call
                    </Button>
                  </td>
                  <td className="py-6 px-4 text-center">
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
            subtitle="And you get an entire team, not just one person who might quit."
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
                <h3 className="text-lg font-semibold text-primary mb-4">WorkflowClick</h3>
                <ul className="space-y-3 text-sm text-medium-gray">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green shrink-0 mt-0.5" />
                    <span>$3K-$5K/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green shrink-0 mt-0.5" />
                    <span>Campaigns live in weeks, not months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green shrink-0 mt-0.5" />
                    <span>Cancel anytime, no contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green shrink-0 mt-0.5" />
                    <span>Weekly reporting, no daily oversight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green shrink-0 mt-0.5" />
                    <span>Entire team: copywriters, data, deliverability</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center text-sm text-light-gray mt-6">
              Month-to-month. Cancel with 30 days notice. No setup fees.
            </p>
          </div>
        </Container>
      </section>

      <ProcessSteps />
      <FinalCTA />
    </>
  )
}
