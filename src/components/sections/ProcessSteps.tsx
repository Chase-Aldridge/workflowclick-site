'use client'

import { motion } from 'framer-motion'
import { Phone, Settings, Rocket, CalendarCheck } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Strategy Call',
    description:
      'We analyze your ICP, messaging, and competitive landscape to build a winning playbook.',
  },
  {
    icon: Settings,
    number: '02',
    title: 'Infrastructure Setup',
    description:
      'Domain warming, DKIM/SPF/DMARC authentication, inbox configuration. All done for you.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Campaign Launch',
    description:
      'Psychology-driven copy, A/B tested sequences, and multi-touch cadences go live.',
  },
  {
    icon: CalendarCheck,
    number: '04',
    title: 'Qualified Meetings',
    description:
      'We deliver warm prospects ready to talk. You focus on closing deals.',
  },
]

export function ProcessSteps() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Your Outbound Engine, Built and Managed For You"
          subtitle="From zero to pipeline in four steps. We handle the complexity so you don't have to."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line (hidden on mobile, shown on lg) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gray-200" />
              )}

              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/5 mb-6">
                <step.icon className="h-8 w-8 text-primary" />
                <span className="absolute -top-2 -right-2 text-xs font-bold text-primary bg-primary/10 rounded-full w-7 h-7 flex items-center justify-center">
                  {step.number}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-dark mb-2">
                {step.title}
              </h3>
              <p className="text-medium-gray text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
