import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatsBar } from '@/components/sections/StatsBar'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet the team behind WorkflowClick. 10+ years of B2B sales experience and $10M+ in pipeline generated.',
}

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Built by Operators, <span className="text-primary">Not Theorists</span>
            </h1>
            <p className="mt-4 text-lg text-white/70">
              We have been in the trenches building outbound engines for over a
              decade. Now we do it for you.
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
                  Moe has spent over 10 years in B2B sales, progressing from SDR
                  to Sales Director across 7+ companies. He has generated over
                  $10M in ARR through cold email and outbound strategies.
                </p>
                <p>
                  His career includes senior roles at Element AI (acquired by
                  ServiceNow in 2020), Armilla AI (YC-backed), PointClickCare,
                  Xero, BlueCat, and Risk Control Technologies.
                </p>
                <p>
                  Moe founded WorkflowClick to bring enterprise-level outbound
                  infrastructure to seed-funded startups who need pipeline but
                  cannot afford a full sales team.
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
                  Chase is an AI and automation specialist who builds the
                  technical infrastructure that powers WorkflowClick. From
                  custom automation workflows to intelligent campaign
                  optimization, he makes sure your outreach runs on real
                  technology, not guesswork.
                </p>
                <p>
                  With deep expertise in AI agent architecture, workflow
                  automation (n8n, Make), and full-stack development, Chase
                  builds systems that give our clients a technical edge over
                  agencies still running on spreadsheets.
                </p>
                <p>
                  Based in Denver, Colorado. Focused on making outbound smarter
                  through AI-augmented infrastructure.
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
              Seed-funded startups deserve enterprise-level outbound
              infrastructure without enterprise budgets. We built WorkflowClick
              to close that gap. You focus on building your product and closing
              deals. We fill your pipeline with qualified conversations.
            </p>
          </div>
        </Container>
      </section>

      <StatsBar />
      <FinalCTA />
    </>
  )
}
