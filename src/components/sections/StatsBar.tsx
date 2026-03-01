'use client'

import { Container } from '@/components/ui/Container'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

const stats = [
  { target: 10, prefix: '$', suffix: 'M+', label: 'ARR Generated Across Companies' },
  { target: 10, suffix: '+', label: 'Years B2B Sales Experience' },
  { target: 1000, suffix: 's', label: 'Campaigns Managed' },
  { target: 7, suffix: '+', label: 'Enterprise Companies' },
]

export function StatsBar() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  )
}
