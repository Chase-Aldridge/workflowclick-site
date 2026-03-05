import { Container } from '@/components/ui/Container'
import { createMetadata } from '@/lib/metadata'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatsBar } from '@/components/sections/StatsBar'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata = createMetadata({
  title: 'About',
  description:
    'Meet the team behind WorkflowClick. 10+ years selling to insurance organizations, $10M+ in B2B pipeline built from cold email.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Built by Operators Who <span className="text-primary">Know Insurance</span>
            </h1>
            <p className="mt-4 text-lg text-white/70">
              We&apos;ve spent years selling to insurance carriers, MGAs, and
              agencies. Now we build outbound engines for you.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Moe */}
            <div>
              <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-primary">MR</span>
              </div>
              <h2 className="text-2xl font-bold text-dark">Moe Randera</h2>
              <p className="text-primary font-medium mt-1">
                Founder &amp; Head of Sales
              </p>
              <div className="mt-6 space-y-4 text-medium-gray leading-relaxed">
                <p>
                  Moe sold insurance technology to 150+ insurance organizations
                  at Risk Control Technologies, the industry&apos;s leading loss
                  control software provider. RCT was later acquired by Duck
                  Creek Technologies.
                </p>
                <p>
                  As Sales Director at Armilla AI, he built the outbound engine
                  for an AI warranty product backed by Swiss Re, Greenlight Re,
                  and Chaucer (Lloyd&apos;s of London). Before that, he generated
                  $4M+ in pipeline at Element AI through cold email before their
                  acquisition by ServiceNow.
                </p>
                <p>
                  Over 10+ years and 7+ B2B companies, Moe&apos;s built $10M+ in
                  pipeline from cold email. He founded WorkflowClick to bring
                  that same outbound infrastructure to independent agencies and
                  growing insurance companies.
                </p>
              </div>
            </div>

            {/* Chase */}
            <div>
              <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-primary">CA</span>
              </div>
              <h2 className="text-2xl font-bold text-dark">Chase Aldridge</h2>
              <p className="text-primary font-medium mt-1">
                CTO &amp; Head of Technology
              </p>
              <div className="mt-6 space-y-4 text-medium-gray leading-relaxed">
                <p>
                  Chase builds the technical infrastructure behind every
                  WorkflowClick campaign. Custom automation identifies prospects
                  with expiring policies, matches them to your carrier appetite,
                  and sends personalized outreach at scale.
                </p>
                <p>
                  With deep expertise in AI agent architecture and workflow
                  automation, Chase gives our clients a technical edge. Your
                  campaigns run on real intelligence, not copy-paste templates.
                </p>
                <p>
                  Based in Denver, Colorado. Focused on making outbound smarter
                  for insurance agencies and insurtechs.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-20 bg-bg-light">
        <Container>
          <SectionHeading title="Our Mission" />
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-medium-gray leading-relaxed">
              Growing agencies and insurance companies deserve enterprise-level
              outbound infrastructure without enterprise budgets. We built
              WorkflowClick to close that gap. You focus on placing coverage and
              closing deals. We fill your calendar with qualified conversations.
            </p>
          </div>
        </Container>
      </section>

      <StatsBar />
      <FinalCTA />
    </>
  )
}
