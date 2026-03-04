'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { useAudience } from '@/context/AudienceContext'

export function Hero() {
  const { audience, content } = useAudience()

  if (!content) return null

  const { headline, highlightedText, subheadline, proofLine } = content.hero

  return (
    <section className="relative bg-dark pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <Container className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={audience}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {headline}{' '}
              <span className="text-primary">{highlightedText}</span>
            </h1>

            <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto sm:text-xl">
              {subheadline}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg">
                Book a Strategy Call
              </Button>
              <Button href="/audit" variant="ghost" size="lg">
                Get a Free Domain Audit
              </Button>
            </div>

            <p className="mt-10 text-sm text-white/40">{proofLine}</p>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
