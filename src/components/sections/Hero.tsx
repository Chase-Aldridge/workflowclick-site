'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function Hero() {
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get Qualified Meetings on Your Calendar.{' '}
            <span className="text-primary">Every Week.</span>
          </h1>

          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto sm:text-xl">
            Done-for-you cold email infrastructure for seed-funded startups. We
            handle everything from domain warming to booked calls.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              Book a Strategy Call
            </Button>
            <Button href="/audit" variant="ghost" size="lg">
              Get a Free Domain Audit
            </Button>
          </div>

          <p className="mt-10 text-sm text-white/40">
            Backed by $10M+ in pipeline generated across Element AI, Xero,
            PointClickCare, and more
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
