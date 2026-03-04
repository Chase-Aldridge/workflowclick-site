'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { useAudience } from '@/context/AudienceContext'

export function AuditCTA() {
  const { audience, content } = useAudience()
  const [email, setEmail] = useState('')
  const [domain, setDomain] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!content) return null

  const { sectionTitle, sectionSubtitle, buttonText, successMessage, successDetail } =
    content.auditCTA

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, domain, audience }),
      })

      if (res.ok) {
        setSubmitted(true)
      }
    } catch {
      // Silently handle - form still appears functional
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 bg-dark">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeading
            title={sectionTitle}
            subtitle={sectionSubtitle}
            light
          />

          {submitted ? (
            <div className="bg-green/10 border border-green/20 rounded-xl p-8">
              <p className="text-white text-lg font-medium">
                {successMessage}
              </p>
              <p className="text-white/60 mt-2">{successDetail}</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 mt-8"
            >
              <input type="hidden" name="audience" value={audience || ''} />
              <input
                type="email"
                placeholder="Your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Your domain (e.g. company.com)"
                required
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="flex-1 rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit" disabled={loading}>
                {loading ? 'Sending...' : buttonText}
              </Button>
            </form>
          )}

          <p className="text-white/30 text-xs mt-4">
            No credit card required. Results in 24 hours. No obligation.
          </p>
        </div>
      </Container>
    </section>
  )
}
