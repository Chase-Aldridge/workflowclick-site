'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Accordion } from '@/components/ui/Accordion'
import { useAudience } from '@/context/AudienceContext'

export function FAQ() {
  const { audience, content } = useAudience()

  if (!content) return null

  return (
    <section className="py-20" id="faq">
      <Container>
        <SectionHeading title="Frequently Asked Questions" />
        <AnimatePresence mode="wait">
          <motion.div
            key={audience}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion items={content.faq.items} />
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
