import { Shield, Search, FileCheck, Zap } from 'lucide-react'
import { createMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { AuditCTA } from '@/components/sections/AuditCTA'

export const metadata = createMetadata({
  title: 'Free Email Deliverability Audit',
  description:
    'Free audit of your agency email infrastructure. We check DKIM, SPF, DMARC, domain reputation, and blacklist status. Find out if your prospecting emails reach inboxes.',
  path: '/audit',
})

const auditChecks = [
  {
    icon: Shield,
    title: 'Authentication Check',
    description:
      'SPF, DKIM, and DMARC records verified and scored. Misconfigured authentication means your emails to prospects and carriers land in spam.',
  },
  {
    icon: Search,
    title: 'Blacklist Scan',
    description:
      'Your domain checked against all major blacklists. If you or a past vendor damaged your domain, we find it.',
  },
  {
    icon: FileCheck,
    title: 'Deliverability Score',
    description:
      'Overall health score with clear pass/fail breakdown. See exactly how your agency stacks up.',
  },
  {
    icon: Zap,
    title: 'Action Plan',
    description:
      'Specific steps to fix every issue we find. Most agencies can resolve critical problems in a few days.',
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
              Your agency&apos;s domain reputation affects every email you send
              to prospects, clients, and carriers. Find out where you stand.
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

      {/* Why This Matters */}
      <section className="py-20 bg-bg-light">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-dark text-center mb-6">
              Why This Matters for Your Agency
            </h2>
            <div className="space-y-4 text-medium-gray leading-relaxed">
              <p>
                Every email you send touches your domain reputation. That
                includes prospecting emails, COI delivery, renewal reminders,
                and carrier submissions.
              </p>
              <p>
                If a past vendor ran sloppy campaigns from your domain, you
                could be blacklisted right now and not know it. That means your
                emails to clients, prospects, and even carriers might be landing
                in spam.
              </p>
              <p>
                Our audit takes five minutes to request. You&apos;ll get a full
                report within 24 hours with clear steps to fix anything we find.
                No obligation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <AuditCTA />
    </>
  )
}
