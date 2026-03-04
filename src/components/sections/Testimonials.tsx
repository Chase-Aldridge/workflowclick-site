'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { useAudience } from '@/context/AudienceContext'

export function Testimonials() {
  const { audience, content } = useAudience()

  if (!content) return null

  const { sectionTitle, sectionSubtitle, items } = content.testimonials

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
            {items.map((item, i) => (
              <motion.div
                key={item.attribution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <blockquote className="flex-1">
                    <p className="text-medium-gray leading-relaxed italic">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </blockquote>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="font-semibold text-dark text-sm">
                      {item.attribution}
                    </p>
                    <p className="text-xs text-light-gray mt-1">
                      {item.context}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
