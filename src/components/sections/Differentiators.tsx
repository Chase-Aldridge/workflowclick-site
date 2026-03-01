'use client'

import { motion } from 'framer-motion'
import { User, Cpu, Sprout, Shield, XCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const items = [
  {
    icon: User,
    title: 'Founder-Led, Not Factory',
    description:
      'Moe personally oversees your campaigns. No junior account managers learning on your dime. You get senior-level attention from day one.',
  },
  {
    icon: Cpu,
    title: 'AI-Augmented Infrastructure',
    description:
      'Our CTO builds custom automation that powers your outreach. Your campaigns run on real intelligence, not copy-paste templates.',
  },
  {
    icon: Sprout,
    title: 'Built for Startups',
    description:
      'We understand runway pressure. No 6-month contracts or enterprise bloat. Get results fast with a team that moves at startup speed.',
  },
  {
    icon: Shield,
    title: 'Full-Stack Deliverability',
    description:
      'Domain warming, DKIM/SPF/DMARC authentication, inbox rotation, blacklist monitoring. We handle the entire technical stack.',
  },
  {
    icon: XCircle,
    title: 'Cancel Anytime',
    description:
      'Month-to-month. No lock-in contracts. If we do not perform, you leave. We earn your business every single month.',
  },
]

export function Differentiators() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Why Founders Choose Us Over DIY or Big Agencies"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-medium-gray text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
