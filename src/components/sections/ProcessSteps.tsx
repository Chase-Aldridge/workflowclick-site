'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Settings, Rocket, CalendarCheck } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useAudience } from '@/context/AudienceContext'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Phone,
  Settings,
  Rocket,
  CalendarCheck,
}

export function ProcessSteps() {
  const { audience, content } = useAudience()

  if (!content) return null

  const { sectionTitle, sectionSubtitle, steps } = content.processSteps

  return (
    <section className="py-20">
      <Container>
        <SectionHeading title={sectionTitle} subtitle={sectionSubtitle} />

        <AnimatePresence mode="wait">
          <motion.div
            key={audience}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((step, i) => {
              const Icon = iconMap[step.icon] || Phone
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="relative text-center"
                >
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gray-200" />
                  )}

                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/5 mb-6">
                    <Icon className="h-8 w-8 text-primary" />
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
              )
            })}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
