'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'

const testimonials = [
  {
    quote:
      'Generated over $4M in pipeline through cold email campaigns at Element AI, leading to acquisition by ServiceNow.',
    attribution: 'Element AI (acquired by ServiceNow, 2020)',
    context: "From Moe's career",
  },
  {
    quote:
      'Built outbound engine from scratch for a YC-backed AI startup, establishing repeatable pipeline generation.',
    attribution: 'Armilla AI (YC-backed)',
    context: "From Moe's career",
  },
  {
    quote:
      'Scaled cold email programs across healthcare SaaS, driving consistent qualified meeting flow for enterprise sales teams.',
    attribution: 'PointClickCare',
    context: "From Moe's career",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-bg-light">
      <Container>
        <SectionHeading
          title="Proven Track Record"
          subtitle="Our founder has built and scaled outbound engines across multiple industries."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
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
        </div>
      </Container>
    </section>
  )
}
