import { ContactForm } from './ContactForm'
import { Mail, Phone, Linkedin } from 'lucide-react'
import { createMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'

export const metadata = createMetadata({
  title: 'Contact',
  description:
    'Get in touch with WorkFlowClick. Talk directly with our founder about growing your book through cold email.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Let&apos;s <span className="text-primary">Talk</span>
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Tell us about your agency and goals. We&apos;ll reach out to book
              a time that works for you.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">
                Get in Touch
              </h2>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">
                Reach Out Directly
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark">Email</p>
                    <a
                      href="mailto:moe@workflowclick.com"
                      className="text-primary hover:underline"
                    >
                      moe@workflowclick.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark">Phone</p>
                    <a
                      href="tel:+16474961221"
                      className="text-primary hover:underline"
                    >
                      +1 (647) 496-1221
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/company/workflowclick"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      WorkFlowClick
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-bg-light rounded-2xl">
                <p className="font-semibold text-dark mb-2">
                  You&apos;ll speak directly with Moe
                </p>
                <p className="text-sm text-medium-gray leading-relaxed">
                  No sales reps, no gatekeepers. Moe sold insurance technology
                  at Risk Control Technologies and built outbound at Armilla AI,
                  backed by Swiss Re, Greenlight Re, and Chaucer. He handles
                  every strategy call personally because he wants to understand
                  your agency before making any recommendations.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Common Questions */}
      <section className="py-20 bg-bg-light">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-dark text-center mb-10">
              Common Questions Before Your Call
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-dark mb-2">
                  &ldquo;I&apos;ve been burned by marketing vendors before.&rdquo;
                </h3>
                <p className="text-sm text-medium-gray leading-relaxed">
                  We hear that a lot. We don&apos;t sell leads. We build cold email
                  infrastructure that you own. Warmed domains, verified prospect
                  lists, compliant sequences. If you leave after 90 days, you
                  keep everything we built. Month-to-month, cancel anytime.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-dark mb-2">
                  &ldquo;Will cold email hurt my agency&apos;s reputation?&rdquo;
                </h3>
                <p className="text-sm text-medium-gray leading-relaxed">
                  All outreach runs from our infrastructure, not your agency domain.
                  Your domain reputation stays clean. We handle SPF, DKIM, DMARC
                  authentication, domain warming, and CAN-SPAM compliance on every
                  campaign.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-dark mb-2">
                  &ldquo;How is this different from buying leads?&rdquo;
                </h3>
                <p className="text-sm text-medium-gray leading-relaxed">
                  Lead vendors sell the same contacts to 5-10 other agents.
                  We build exclusive outreach campaigns targeting your ideal
                  commercial prospects. Nobody else gets these contacts. You get
                  booked appointments on your calendar, not a list of names.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
