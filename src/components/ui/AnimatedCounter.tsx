'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion'

interface AnimatedCounterProps {
  target: number
  prefix?: string
  suffix?: string
  label: string
  duration?: number
}

export function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
  label,
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const step = target / (duration * 60)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isInView, target, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-medium-gray text-sm uppercase tracking-wide">
        {label}
      </div>
    </motion.div>
  )
}
