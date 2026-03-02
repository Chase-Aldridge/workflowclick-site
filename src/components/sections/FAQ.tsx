import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Accordion } from '@/components/ui/Accordion'

export const faqItems = [
  {
    question: 'How quickly will I see results?',
    answer:
      'Most clients see their first qualified meetings within 2-4 weeks of campaign launch. The first 1-2 weeks are dedicated to infrastructure setup and domain warming. Once campaigns go live, replies typically start flowing within days.',
  },
  {
    question: 'Do I need to provide my own domains and inboxes?',
    answer:
      'Yes, you provide the domains and inboxes. We handle all the technical setup: domain warming, SPF/DKIM/DMARC authentication, inbox configuration, and ongoing deliverability monitoring. We guide you through purchasing domains and inboxes if you need help.',
  },
  {
    question: 'What industries do you work with?',
    answer:
      'We specialize in B2B companies, particularly seed-funded startups in SaaS, InsurTech, FinTech, and HealthTech. Our methodology works across any B2B vertical where cold email is a viable channel.',
  },
  {
    question: 'How is this different from hiring an SDR?',
    answer:
      'An in-house SDR costs $60K-$80K+ in salary alone, takes months to ramp up, and requires management overhead. We provide an entire outbound engine (infrastructure, copy, strategy, execution) for a fraction of the cost, with faster results and no HR headaches.',
  },
  {
    question: 'What email tools do you use?',
    answer:
      'We use Apollo for sequencing and lead sourcing, combined with best-in-class warming and deliverability tools. Our CTO also builds custom automation to optimize campaign performance beyond what off-the-shelf tools can do.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes. All plans are month-to-month with no long-term contracts. We believe in earning your business every month through results, not locking you into agreements. Cancel anytime with 30 days notice.',
  },
  {
    question: 'How do you protect my domain reputation?',
    answer:
      'We follow strict deliverability best practices: gradual domain warming, proper authentication, inbox rotation, volume throttling, and real-time blacklist monitoring. We treat your domain reputation as sacred because it directly impacts results.',
  },
  {
    question: 'What does a typical campaign look like?',
    answer:
      'A typical campaign includes researched and verified prospect lists matched to your ICP, 4-7 step email sequences with psychology-driven copy, A/B testing across subject lines and messaging, and daily monitoring with optimization. You receive regular reports on open rates, reply rates, and qualified meetings booked.',
  },
  {
    question: 'Do you handle LinkedIn outreach too?',
    answer:
      'LinkedIn outreach is available in our Gold tier as part of our omnichannel strategy. This includes coordinated email + LinkedIn + call script sequences for maximum touchpoint coverage with your target accounts.',
  },
  {
    question: "What's included in the free audit?",
    answer:
      'Our free deliverability audit checks your DKIM, SPF, and DMARC records, domain reputation across major blacklists, inbox placement rates, and overall email infrastructure health. You receive a detailed report with specific recommendations, whether you work with us or not.',
  },
]

export function FAQ() {
  return (
    <section className="py-20" id="faq">
      <Container>
        <SectionHeading title="Frequently Asked Questions" />
        <div className="max-w-3xl mx-auto">
          <Accordion items={faqItems} />
        </div>
      </Container>
    </section>
  )
}
