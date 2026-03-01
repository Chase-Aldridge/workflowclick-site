'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/utils'

const tiers = [
  {
    name: 'Bronze',
    tagline: 'The Machine',
    variant: 'default' as const,
    features: [
      '1,000-1,500 verified contacts/month',
      '4 Apollo sequences (4T, SPIN, Sandler)',
      'A/B testing across all sequences',
      'Up to 10 authenticated inboxes',
      'Full domain authentication (SPF, DKIM, DMARC)',
      'Daily campaign management',
      'Reply forwarding + prioritized alerts',
      '2x biweekly strategy sessions',
      'Monthly performance reporting',
    ],
  },
  {
    name: 'Silver',
    tagline: 'The War Room',
    badge: 'Most Popular',
    variant: 'highlighted' as const,
    features: [
      'Everything in Bronze, plus:',
      '2,500-3,000 verified contacts/month',
      '6 Apollo sequences',
      'Up to 20 inboxes, 3 domains',
      '10 named accounts/month (manual prospecting)',
      'Real-time Slack notifications',
      'Weekly strategy sessions',
      'Objection-handling templates',
      'Quarterly campaign audit + refresh',
      'Priority Slack/email support',
    ],
  },
  {
    name: 'Gold',
    tagline: 'The Takeover',
    variant: 'premium' as const,
    features: [
      'Everything in Silver, plus:',
      '5,000+ verified contacts/month',
      '25+ Apollo sequences',
      'Unlimited inboxes, 5 domains',
      '25 named accounts/month',
      'Full Slack suite + custom alert rules',
      'Signal-based follow-up playbook',
      'Cold call script development',
      'Omnichannel (email + LinkedIn + calls)',
      'Unlimited strategy sessions (up to 8hrs/mo)',
      'Monthly executive summary',
      'Quarterly business review (QBR)',
    ],
  },
]

export function PricingTiers() {
  return (
    <section className="py-20 bg-bg-light" id="pricing">
      <Container>
        <SectionHeading
          title="Choose Your Growth Speed"
          subtitle="All plans include domain warming, email authentication, and dedicated strategy support."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <Card
                variant={tier.variant}
                className={cn(
                  'h-full flex flex-col',
                  tier.variant === 'highlighted' && 'relative'
                )}
              >
                {tier.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    {tier.badge}
                  </Badge>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-dark">{tier.name}</h3>
                  <p className="text-primary font-medium mt-1">
                    &ldquo;{tier.tagline}&rdquo;
                  </p>
                </div>

                <ul className="space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green shrink-0 mt-0.5" />
                      <span className="text-sm text-medium-gray">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href="/contact"
                    className="w-full"
                    variant={
                      tier.variant === 'highlighted' ? 'primary' : 'secondary'
                    }
                  >
                    Book a Strategy Call
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-medium-gray text-sm mt-10">
          Pricing is customized to your growth stage. Let&apos;s talk.
        </p>
      </Container>
    </section>
  )
}
