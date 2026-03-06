'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { useAudience } from '@/context/AudienceContext'

const footerLinks = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
  ],
  resources: [
    { label: 'Free Audit', href: '/audit' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export function Footer() {
  const { content } = useAudience()

  const tagline =
    content?.footer.tagline ||
    'Done-for-you cold email infrastructure for insurance organizations. We handle everything from domain warming to booked calls.'

  return (
    <footer className="bg-dark text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight">
              WorkFlow<span className="text-primary">Click</span>
            </Link>
            <p className="mt-4 text-sm text-light-gray leading-relaxed">
              {tagline}
            </p>
            <div className="mt-6 text-sm text-light-gray">
              <a
                href="mailto:moe@workflowclick.com"
                className="hover:text-primary transition-colors"
              >
                moe@workflowclick.com
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-light-gray hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-light-gray hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-light-gray hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="https://www.linkedin.com/company/workflowclick"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-light-gray hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-light-gray">
          &copy; {new Date().getFullYear()} WorkFlowClick. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
