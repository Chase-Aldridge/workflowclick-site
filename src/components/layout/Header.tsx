'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Free Audit', href: '/audit' },
]

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

          <div className="hidden lg:block">
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
          mobileOpen ? 'max-h-96 border-b border-gray-100' : 'max-h-0'
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
            <Button href="/contact" size="sm" className="mt-2 w-full">
              Book a Strategy Call
            </Button>
          </div>
        </Container>
      </div>
    </header>
  )
}
