'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { useAudience } from '@/context/AudienceContext'

export function LogoBar() {
  const { audience, content } = useAudience()

  if (!content) return null

  const { heading, logos } = content.logoBar

  return (
    <section className="py-12 border-b border-gray-100">
      <Container>
        <p className="text-center text-sm uppercase tracking-wider text-light-gray mb-8">
          {heading}
        </p>
        <AnimatePresence mode="wait">
          <motion.div
            key={audience}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16"
          >
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="text-light-gray hover:text-medium-gray transition-colors"
                title={logo.name}
              >
                <span className="text-lg font-semibold tracking-tight opacity-50 hover:opacity-80 transition-opacity">
                  {logo.abbr}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
