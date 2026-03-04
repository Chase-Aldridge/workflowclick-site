'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { useAudience } from '@/context/AudienceContext'
import type { Audience } from '@/data/audience-content'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Free Audit', href: '/audit' },
]

const toggleOptions: Array<{ key: Audience; label: string }> = [
  { key: 'agency', label: 'Agency' },
  { key: 'insurtech', label: 'Insurtech' },
]

function AudienceToggle({
  scrolled,
  className,
}: {
  scrolled: boolean
  className?: string
}) {
  const { audience, setAudience } = useAudience()

  if (!audience) return null

  return (
    <div
      className={cn(
        'relative flex rounded-full p-0.5 text-sm font-medium',
        scrolled ? 'bg-gray-100' : 'bg-white/10',
        className
      )}
    >
      {toggleOptions.map((option) => (
        <button
          key={option.key}
          onClick={() => setAudience(option.key)}
          className={cn(
            'relative z-10 rounded-full px-4 py-1.5 transition-colors cursor-pointer',
            audience === option.key
              ? 'text-white'
              : scrolled
                ? 'text-medium-gray hover:text-dark'
                : 'text-white/60 hover:text-white'
          )}
        >
          {audience === option.key && (
            <motion.div
              layoutId="audience-toggle-pill"
              className="absolute inset-0 rounded-full bg-primary"
              transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
            />
          )}
          <span className="relative z-10">{option.label}</span>
        </button>
      ))}
    </div>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 sm:h-20">
          <Link
            href="/"
            className={cn(
              'text-xl font-bold tracking-tight transition-colors',
              scrolled ? 'text-dark' : 'text-white'
            )}
          >
            Workflow<span className="text-primary">Click</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  scrolled ? 'text-medium-gray' : 'text-white/80'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop toggle + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <AudienceToggle scrolled={scrolled} />
            <Button
              href="/contact"
              size="sm"
              variant={scrolled ? 'primary' : 'ghost'}
            >
              Book a Strategy Call
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={cn('h-6 w-6', scrolled ? 'text-dark' : 'text-white')} />
            ) : (
              <Menu className={cn('h-6 w-6', scrolled ? 'text-dark' : 'text-white')} />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 bg-white',
          mobileOpen ? 'max-h-[500px] border-b border-gray-100' : 'max-h-0'
        )}
      >
        <Container className="py-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-medium-gray font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="py-2">
              <AudienceToggle scrolled={true} className="w-fit" />
            </div>
            <Button href="/contact" size="sm" className="mt-2 w-full">
              Book a Strategy Call
            </Button>
          </div>
        </Container>
      </div>
    </header>
  )
}
