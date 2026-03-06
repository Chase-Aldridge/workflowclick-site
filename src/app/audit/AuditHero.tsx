'use client'

import { Container } from '@/components/ui/Container'
import { useAudience } from '@/context/AudienceContext'

export function AuditHero() {
  const { audience } = useAudience()
  const isAgency = audience === 'agency'

  return (
    <>
      <section className="pt-32 pb-16 bg-dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              {isAgency ? (
                <>Free Custom <span className="text-primary">Market Report</span></>
              ) : (
                <>Free Email <span className="text-primary">Deliverability Audit</span></>
              )}
            </h1>
            <p className="mt-4 text-lg text-white/70">
              {isAgency
                ? 'Find out how many untapped commercial prospects are in your territory. We\'ll analyze your zip codes, identify top verticals, and size the opportunity.'
                : 'Your agency\'s domain reputation affects every email you send to prospects, clients, and carriers. Find out where you stand.'}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-bg-light">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-dark text-center mb-6">
              {isAgency ? 'Why This Matters for Your Agency' : 'Why This Matters for Your Agency'}
            </h2>
            <div className="space-y-4 text-medium-gray leading-relaxed">
              {isAgency ? (
                <>
                  <p>
                    Most agencies grow through referrals. That works until it doesn&apos;t. Referrals
                    are unpredictable, and they cap your growth at whatever your network can produce.
                  </p>
                  <p>
                    A custom market report shows you exactly how many commercial businesses sit in your
                    territory by industry, size, and line of business. It tells you where the density is
                    and which verticals have the most opportunity.
                  </p>
                  <p>
                    The report takes a few seconds to request. You&apos;ll get a territory analysis within
                    48 hours with clear data on your market. No obligation.
                  </p>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
