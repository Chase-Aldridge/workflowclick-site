import type { Metadata } from 'next'
import { Shield, Search, FileCheck, Zap } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { AuditCTA } from '@/components/sections/AuditCTA'

export const metadata: Metadata = {
  title: 'Free Email Deliverability Audit',
  description:
    'Get a free audit of your email infrastructure. We check DKIM, SPF, DMARC, domain reputation, and blacklist status. Results in 24 hours.',
}

const auditChecks = [
  {
    icon: Shield,
    title: 'Authentication Check',
    description: 'SPF, DKIM, and DMARC records verified and scored.',
  },
  {
    icon: Search,
    title: 'Blacklist Scan',
    description:
      'Your domain checked against all major blacklists.',
  },
  {
    icon: FileCheck,
    title: 'Deliverability Score',
    description:
      'Overall health score with clear pass/fail breakdown.',
  },
  {
    icon: Zap,
    title: 'Action Plan',
    description:
      'Specific steps to fix every issue we find.',
  },
]

export default function AuditPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Free Email <span className="text-primary">Deliverability Audit</span>
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Find out if your emails are actually reaching inboxes. We check
              everything and give you a clear action plan.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-dark text-center mb-10">
              What We Check
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {auditChecks.map((check) => (
                <div
                  key={check.title}
                  className="flex gap-4 p-6 bg-bg-light rounded-xl"
                >
                  <check.icon className="h-8 w-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-dark">{check.title}</h3>
                    <p className="text-sm text-medium-gray mt-1">
                      {check.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <AuditCTA />
    </>
  )
}
