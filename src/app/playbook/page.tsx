'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Check, BookOpen, Mail, BarChart3, Shield } from 'lucide-react'

const playbookFeatures = [
  {
    icon: BookOpen,
    title: '3 Sample Email Sequences',
    description:
      'Real sequences for contractors, manufacturers, and professional services. Subject lines, opening lines, and CTAs included.',
  },
  {
    icon: Shield,
    title: 'Compliance Checklist',
    description:
      'CAN-SPAM requirements, CCPA rules, and state-specific considerations for insurance outreach. All in plain language.',
  },
  {
    icon: Mail,
    title: 'Infrastructure Setup Guide',
    description:
      'Step-by-step: dedicated domains, DNS authentication, warm-up schedules. Protect your agency domain while you prospect.',
  },
  {
    icon: BarChart3,
    title: 'ROI Math by Line of Business',
    description:
      'Commission rates for GL, WC, commercial property, cyber, and BOP. See exactly what one closed account is worth.',
  },
]

const whatYouGet = [
  'Why cold email works for commercial insurance',
  '3 proven email sequences (contractor, manufacturer, professional services)',
  'The infrastructure most agencies get wrong',
  'CAN-SPAM and state compliance checklist',
  'Commission math: one-account payback calculation',
  'Channel cost comparison: cold email vs. Google Ads vs. lead vendors',
  '30-day quick-start plan',
]

export default function PlaybookPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [agencyName, setAgencyName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/playbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, agencyName }),
      })

      if (res.ok) {
        setSubmitted(true)
      }
    } catch {
      // Silently handle
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
              Free Download
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              The Insurance Agency{' '}
              <span className="text-primary">Cold Email Playbook</span>
            </h1>
            <p className="mt-4 text-lg text-white/70">
              How to build a commercial pipeline without cold calling. Includes
              3 sample sequences, compliance checklist, and ROI math for your
              lines of business.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: what you get */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">
                What&apos;s Inside
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {playbookFeatures.map((feature) => (
                  <div key={feature.title} className="flex gap-3">
                    <feature.icon className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-dark text-sm">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-medium-gray mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-semibold text-dark mb-3">
                Full Table of Contents
              </h3>
              <ul className="space-y-2">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green shrink-0 mt-0.5" />
                    <span className="text-sm text-medium-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: form */}
            <div>
              <div className="bg-bg-light rounded-2xl p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-dark mb-2">
                  Get the Playbook
                </h2>
                <p className="text-sm text-medium-gray mb-6">
                  Enter your email and we&apos;ll send you the full 15-page
                  PDF. No spam. No follow-up calls unless you ask.
                </p>

                {submitted ? (
                  <div className="bg-green/10 border border-green/20 rounded-xl p-6 text-center">
                    <Check className="h-8 w-8 text-green mx-auto mb-3" />
                    <p className="text-dark font-medium">
                      Check your inbox.
                    </p>
                    <p className="text-sm text-medium-gray mt-2">
                      The playbook is on its way. If you don&apos;t see it
                      in a few minutes, check your spam folder.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-dark mb-1"
                      >
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-dark placeholder:text-light-gray focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-dark mb-1"
                      >
                        Work email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-dark placeholder:text-light-gray focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="jane@smithinsurance.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="agency"
                        className="block text-sm font-medium text-dark mb-1"
                      >
                        Agency name{' '}
                        <span className="text-light-gray font-normal">
                          (optional)
                        </span>
                      </label>
                      <input
                        type="text"
                        id="agency"
                        value={agencyName}
                        onChange={(e) => setAgencyName(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-dark placeholder:text-light-gray focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Smith Insurance Group"
                      />
                    </div>
                    <Button type="submit" disabled={loading} className="w-full">
                      {loading ? 'Sending...' : 'Send Me the Playbook'}
                    </Button>
                    <p className="text-xs text-light-gray text-center">
                      No credit card. No sales calls. Just the PDF.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Who this is for */}
      <section className="py-20 bg-bg-light">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-dark text-center mb-6">
              Who This Playbook Is For
            </h2>
            <div className="space-y-4 text-medium-gray leading-relaxed">
              <p>
                This playbook is for agency principals and commercial producers
                at independent P&amp;C agencies. If your agency writes $1M-$5M
                in gross commission and you want to grow your commercial book
                without hiring another producer or buying shared leads, this is
                for you.
              </p>
              <p>
                You don&apos;t need to be technical. The playbook explains
                everything in plain language. If you want to build it yourself,
                you can follow the 30-day plan. If you want someone to handle
                it for you, that&apos;s what WorkflowClick does.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
