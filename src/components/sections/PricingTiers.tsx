'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/utils'
import { useAudience } from '@/context/AudienceContext'

export function PricingTiers() {
  const { audience, content } = useAudience()

  if (!content) return null

  const { sectionTitle, sectionSubtitle, footnote, tiers } =
    content.pricingTiers

  return (
    <section className="py-20 bg-bg-light" id="pricing">
      <Container>
        <SectionHeading title={sectionTitle} subtitle={sectionSubtitle} />

        <AnimatePresence mode="wait">
          <motion.div
            key={audience}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-3"
          >
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
                    <h3 className="text-2xl font-bold text-dark">
                      {tier.name}
                    </h3>
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
          </motion.div>
        </AnimatePresence>

        <p className="text-center text-medium-gray text-sm mt-10">
          {footnote}
        </p>
      </Container>
    </section>
  )
}
