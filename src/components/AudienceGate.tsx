'use client'

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl w-full text-center"
          >
            {/* Logo */}
            <div className="mb-10">
              <span className="text-2xl font-bold tracking-tight text-white">
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
                  style={{
                    ['--card-accent' as string]: option.accentColor,
                    ['--card-bg' as string]: option.accentBg,
                    ['--card-border' as string]: option.accentBorder,
                  }}
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
