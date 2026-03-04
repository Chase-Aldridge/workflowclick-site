'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, Cpu } from 'lucide-react'
import { useAudience } from '@/context/AudienceContext'
import type { Audience } from '@/data/audience-content'

const options: Array<{
  key: Audience
  icon: typeof Building2
  title: string
  description: string
  accentColor: string
  accentBg: string
  accentBorder: string
}> = [
  {
    key: 'agency',
    icon: Building2,
    title: 'Insurance Agency',
    description:
      'Independent agencies looking to grow their book of business with qualified prospects.',
    accentColor: '#1B6B4A',
    accentBg: 'rgba(27, 107, 74, 0.1)',
    accentBorder: 'rgba(27, 107, 74, 0.5)',
  },
  {
    key: 'insurtech',
    icon: Cpu,
    title: 'Insurtech',
    description:
      'Insurance technology companies looking to book meetings with carriers and agencies.',
    accentColor: '#6C3CE0',
    accentBg: 'rgba(108, 60, 224, 0.1)',
    accentBorder: 'rgba(108, 60, 224, 0.5)',
  },
]

// Subtle interactive particle background
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let mouseX = -1000
    let mouseY = -1000

    function resize() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
    }
    resize()

    const particleCount = window.innerWidth < 640 ? 25 : 45

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      r: number
      alpha: number
    }

    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.3 + 0.1,
    }))

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

      // Connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            const opacity = (1 - dist / 120) * 0.08
            ctx!.strokeStyle = `rgba(255, 255, 255, ${opacity})`
            ctx!.lineWidth = 0.5
            ctx!.beginPath()
            ctx!.moveTo(particles[i].x, particles[i].y)
            ctx!.lineTo(particles[j].x, particles[j].y)
            ctx!.stroke()
          }
        }
      }

      // Particles
      for (const p of particles) {
        // Gentle mouse repulsion
        const dx = p.x - mouseX
        const dy = p.y - mouseY
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 100 && dist > 0) {
          const force = (100 - dist) / 100 * 0.3
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force
        }

        // Drift
        p.vx += (Math.random() - 0.5) * 0.01
        p.vy += (Math.random() - 0.5) * 0.01
        p.vx *= 0.99
        p.vy *= 0.99
        p.x += p.vx
        p.y += p.vy

        // Wrap
        if (p.x < 0) p.x = canvas!.width
        if (p.x > canvas!.width) p.x = 0
        if (p.y < 0) p.y = canvas!.height
        if (p.y > canvas!.height) p.y = 0

        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(255, 255, 255, ${p.alpha})`
        ctx!.fill()
      }

      // Subtle cursor glow
      if (mouseX > 0 && mouseY > 0) {
        const glow = ctx!.createRadialGradient(
          mouseX, mouseY, 0,
          mouseX, mouseY, 120
        )
        glow.addColorStop(0, 'rgba(255, 255, 255, 0.03)')
        glow.addColorStop(1, 'rgba(255, 255, 255, 0)')
        ctx!.fillStyle = glow
        ctx!.fillRect(0, 0, canvas!.width, canvas!.height)
      }

      animationId = requestAnimationFrame(draw)
    }

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    function onMouseLeave() {
      mouseX = -1000
      mouseY = -1000
    }
    function onTouchMove(e: TouchEvent) {
      mouseX = e.touches[0].clientX
      mouseY = e.touches[0].clientY
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('touchmove', onTouchMove)

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  )
}

export function AudienceGate() {
  const { isGateVisible, setAudience } = useAudience()

  return (
    <AnimatePresence>
      {isGateVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] bg-dark flex items-center justify-center px-4"
        >
          <ParticleCanvas />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative max-w-2xl w-full text-center"
          >
            {/* Logo - large */}
            <div className="mb-12">
              <span className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
                Workflow<span className="text-[#0071E3]">Click</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl font-bold text-white sm:text-4xl mb-3">
              I am an...
            </h1>
            <p className="text-white/50 mb-10 text-lg">
              Choose your path for a tailored experience.
            </p>

            {/* Choice cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {options.map((option, i) => (
                <motion.button
                  key={option.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  onClick={() => setAudience(option.key)}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 text-left transition-all duration-200 cursor-pointer"
                  whileHover={{
                    borderColor: option.accentBorder,
                    backgroundColor: option.accentBg,
                  }}
                >
                  <div
                    className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl"
                    style={{ backgroundColor: option.accentBg }}
                  >
                    <option.icon
                      className="h-7 w-7"
                      style={{ color: option.accentColor }}
                    />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    {option.title}
                  </h2>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {option.description}
                  </p>
                  <div
                    className="mt-4 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: option.accentColor }}
                  >
                    Continue &rarr;
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
