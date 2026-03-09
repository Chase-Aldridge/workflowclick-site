import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { createMetadata } from '@/lib/metadata'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatsBar } from '@/components/sections/StatsBar'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata = createMetadata({
  title: 'About',
  description:
    'Meet the team behind WorkFlowClick. 11+ years selling to insurance organizations, $50M+ in B2B pipeline built from cold email.',
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
              <Image
                src="/images/team/moe-randera.png"
                alt="Moe Randera"
                width={384}
                height={384}
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-2xl object-cover mb-6"
              />
              <h2 className="text-2xl font-bold text-dark">Moe Randera</h2>
              <p className="text-primary font-medium mt-1">
                Founder &amp; Head of Sales
              </p>
              <div className="mt-6 space-y-4 text-medium-gray leading-relaxed">
                <p>
                  Moe sold insurance technology at Risk Control Technologies,
                  the industry&apos;s leading loss control software provider.
                  RCT (Duck Creek).
                </p>
                <p>
                  As Sales Director at Armilla AI, he built the outbound engine
                  for an AI warranty product backed by Swiss Re, Greenlight Re,
                  and Chaucer (Lloyd&apos;s of London). Before that, he generated
                  $20M+ in pipeline at Element AI through cold email before their
                  acquisition by ServiceNow.
                </p>
                <p>
                  Over 11+ years and 7+ B2B companies, Moe&apos;s built $50M+ in
                  pipeline from cold email. He&apos;s connected with executives
                  who oversaw AI projects at Swiss Re, collaborated with leaders
                  at One80 Intermediaries, and has immersed himself in the insurance
                  world at this caliber for years. He founded WorkFlowClick to
                  bring that same outbound infrastructure to independent insurance
                  agencies and growing InsureTech companies. Before founding
                  WorkFlowClick, Moe sold multiple software solutions to large
                  insurance brokers, carriers, MGAs, government risk pools, and
                  captives. He holds a Master&apos;s in Dispute Resolution, a BA
                  in Sociology and English, and is a Registered Real Estate Agent &mdash; a
                  background that makes him a skilled negotiator and communicator
                  at every stage of the sales process.
                </p>
              </div>
            </div>

            {/* Chase */}
            <div>
              <Image
                src="/images/team/chase-aldridge.jpg"
                alt="Chase Aldridge"
                width={384}
                height={384}
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-2xl object-cover mb-6"
              />
              <h2 className="text-2xl font-bold text-dark">Chase Aldridge</h2>
              <p className="text-primary font-medium mt-1">
                CTO &amp; Head of Technology
              </p>
              <div className="mt-6 space-y-4 text-medium-gray leading-relaxed">
                <p>
                  Before building outbound engines, Chase was a research
                  scientist at Lawrence Berkeley National Laboratory and the
                  National Renewable Energy Laboratory, where he co-authored
                  8 peer-reviewed publications in renewable energy with 137+
                  citations. He collaborated with researchers at MIT, Stanford,
                  and the Department of Energy on solar-to-hydrogen conversion
                  systems.
                </p>
                <p>
                  He holds a B.S. in Chemistry with a Minor in Mathematics
                  from the University of Nevada, Las Vegas. That scientific
                  rigor carries into everything he builds at WorkFlowClick.
                  Custom automation identifies prospects with expiring policies,
                  matches them to your carrier appetite, and sends personalized
                  outreach at scale.
                </p>
                <p>
                  With deep expertise in AI agent architecture and workflow
                  automation, Chase gives our clients a technical edge. Your
                  campaigns run on real intelligence, not copy-paste templates.
                  Based in Denver, Colorado.
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
              WorkFlowClick to close that gap. You focus on placing coverage and
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
