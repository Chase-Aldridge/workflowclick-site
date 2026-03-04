'use client'

import { motion, AnimatePresence } from 'framer-motion'
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
import { useAudience } from '@/context/AudienceContext'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  ShieldAlert,
  TrendingDown,
  Clock,
  MessageSquareOff,
  BarChart3,
  Ban,
}

export function ProblemGrid() {
  const { audience, content } = useAudience()

  if (!content) return null

  const { sectionTitle, sectionSubtitle, problems } = content.problemGrid

  return (
    <section className="py-20 bg-bg-light">
      <Container>
        <SectionHeading title={sectionTitle} subtitle={sectionSubtitle} />

        <AnimatePresence mode="wait">
          <motion.div
            key={audience}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {problems.map((problem, i) => {
              const Icon = iconMap[problem.icon] || ShieldAlert
              return (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-gray-100"
                >
                  <Icon className="h-8 w-8 text-red mb-4" />
                  <h3 className="text-lg font-semibold text-dark mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-medium-gray text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
