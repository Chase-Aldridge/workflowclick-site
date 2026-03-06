import { createMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { AuditCTA } from '@/components/sections/AuditCTA'
import { AuditChecks } from '@/components/sections/AuditChecks'
import { AuditHero } from './AuditHero'

export const metadata = createMetadata({
  title: 'Free Email Deliverability Audit',
  description:
    'Free audit of your agency email infrastructure. We check DKIM, SPF, DMARC, domain reputation, and blacklist status. Find out if your prospecting emails reach inboxes.',
  path: '/audit',
})

export default function AuditPage() {
  return (
    <>
      <AuditHero />

      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-dark text-center mb-10">
              What We Check
            </h2>
            <AuditChecks />
          </div>
        </Container>
      </section>

      <AuditCTA />
    </>
  )
}
