'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { User, Cpu, Sprout, Shield, XCircle, Building2, Zap } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useAudience } from '@/context/AudienceContext'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  User,
  Cpu,
  Sprout,
  Shield,
  XCircle,
  Building2,
  Zap,
}

export function Differentiators() {
  const { audience, content } = useAudience()

  if (!content) return null

  const { sectionTitle, items } = content.differentiators

  return (
    <section className="py-20">
      <Container>
        <SectionHeading title={sectionTitle} />

        <AnimatePresence mode="wait">
          <motion.div
            key={audience}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {items.map((item, i) => {
              const Icon = iconMap[item.icon] || Shield
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
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
              )
            })}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
