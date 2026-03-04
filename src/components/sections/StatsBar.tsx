'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { useAudience } from '@/context/AudienceContext'

export function StatsBar() {
  const { audience, content } = useAudience()

  if (!content) return null

  const { stats } = content.statsBar

  return (
    <section className="py-20">
      <Container>
        <AnimatePresence mode="wait">
          <motion.div
            key={audience}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 gap-8 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} {...stat} />
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
