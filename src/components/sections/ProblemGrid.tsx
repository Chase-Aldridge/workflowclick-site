'use client'

import { motion } from 'framer-motion'
import {
  ShieldAlert,
  TrendingDown,
  Clock,
  MessageSquareOff,
  BarChart3,
  Ban,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const problems = [
  {
    icon: ShieldAlert,
    title: 'Emails landing in spam',
    description: 'Your carefully crafted messages never reach the inbox.',
  },
  {
    icon: TrendingDown,
    title: 'Burning runway without pipeline',
    description: 'Every month without leads is a month closer to zero.',
  },
  {
    icon: Clock,
    title: 'No time to learn email infrastructure',
    description: 'DKIM, SPF, DMARC, warming. You have a product to build.',
  },
  {
    icon: MessageSquareOff,
    title: 'Generic outreach getting zero responses',
    description: 'Copy-paste templates from the internet do not work anymore.',
  },
  {
    icon: BarChart3,
    title: 'Investors asking about pipeline',
    description: 'Board meetings are coming. Your pipeline is empty.',
  },
  {
    icon: Ban,
    title: 'Domain getting blacklisted',
    description: 'Amateur setup is destroying your sender reputation.',
  },
]

export function ProblemGrid() {
  return (
    <section className="py-20 bg-bg-light">
      <Container>
        <SectionHeading
          title="Your Outreach Is Broken (And You Know It)"
          subtitle="Sound familiar? You're not alone. Here's how we fix it."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-100"
            >
              <problem.icon className="h-8 w-8 text-red mb-4" />
              <h3 className="text-lg font-semibold text-dark mb-2">
                {problem.title}
              </h3>
              <p className="text-medium-gray text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
