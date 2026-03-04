'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { useAudience } from '@/context/AudienceContext'

export function FinalCTA() {
  const { audience, content } = useAudience()

  if (!content) return null

  const { headline, subheadline, buttonText, footnote } = content.finalCTA

  return (
    <section className="py-20 bg-bg-light">
      <Container>
        <AnimatePresence mode="wait">
          <motion.div
            key={audience}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">
              {headline}
            </h2>
            <p className="mt-4 text-lg text-medium-gray">{subheadline}</p>

            <div className="mt-8">
              <Button href="/contact" size="lg">
                {buttonText}
              </Button>
            </div>

            <p className="mt-6 text-sm text-light-gray">{footnote}</p>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
