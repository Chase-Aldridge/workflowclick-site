import { createMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'

export const metadata = createMetadata({
  title: 'Terms of Service',
  description:
    'Terms and conditions for using WorkFlowClick services and website. Covers service agreements, compliance, and legal obligations.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <>
      {/* Dark hero - matches about page pattern */}
      <section className="pt-32 pb-16 bg-dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="mt-4 text-lg text-white/70">
              The terms and conditions that govern your use of our services.
            </p>
          </div>
        </Container>
      </section>

      {/* Prose content - matches blog post pattern */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-light-gray mb-8">Last updated: March 5, 2026</p>
            <article className="prose">

              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing or using the WorkFlowClick website or any of our services, you agree to
                be bound by these Terms of Service. Please read them carefully before using our site
                or engaging us for any work. If you do not agree to these terms, do not use our
                website or services.
              </p>
              <p>
                These terms apply to all visitors, clients, and anyone who accesses or uses our
                website and services. Your continued use of our website or services after any
                updates to these terms constitutes your acceptance of the revised terms.
              </p>

              <h2>2. Service Description</h2>
              <p>
                WorkFlowClick provides done-for-you cold email infrastructure for insurance
                organizations. Our services are designed to help agencies, carriers, MGAs, and
                insurtechs build scalable outbound pipelines. Services include, but are not limited
                to:
              </p>
              <ul>
                <li>Domain procurement and authentication (SPF, DKIM, DMARC setup)</li>
                <li>Email account setup and inbox warming</li>
                <li>Prospect list building and data enrichment</li>
                <li>Email copy creation and A/B testing</li>
                <li>Campaign deployment and ongoing monitoring</li>
                <li>Performance reporting and optimization</li>
              </ul>
              <p>
                Specific deliverables and timelines for your engagement are confirmed during
                onboarding and documented in your service agreement.
              </p>

              <h2>3. Service Tiers and Pricing</h2>
              <p>
                WorkFlowClick offers multiple service tiers to meet the needs of different
                organizations. Applicable pricing is confirmed during consultation calls and
                documented in your service agreement before work begins.
              </p>
              <ul>
                <li>
                  <strong>No setup fees.</strong> You are not charged an onboarding or activation
                  fee separate from your monthly service fee.
                </li>
                <li>
                  <strong>Month-to-month billing.</strong> No long-term contracts are required.
                  Services renew on a monthly basis unless terminated.
                </li>
                <li>
                  <strong>Cancellation.</strong> Either party may cancel services with 30 days
                  written notice. Notice must be delivered by email to the contact address on file.
                </li>
                <li>
                  <strong>Price changes.</strong> WorkFlowClick will communicate any pricing
                  changes with at least 30 days advance written notice. Price changes take effect
                  at the start of the next billing cycle following the notice period.
                </li>
              </ul>

              <h2>4. Client Responsibilities</h2>
              <p>
                To allow WorkFlowClick to deliver effective campaigns, you agree to fulfill the
                following responsibilities throughout the engagement:
              </p>
              <ul>
                <li>
                  Provide accurate and complete information about your target audience, ideal
                  client profile, and offer.
                </li>
                <li>
                  Authorize WorkFlowClick to procure domains on your behalf as required for
                  campaign infrastructure.
                </li>
                <li>
                  Respond to requests for strategy sessions, feedback, and approvals within a
                  reasonable time frame to avoid campaign delays.
                </li>
                <li>
                  Ensure that your own business practices, products, and services comply with
                  all applicable federal, state, provincial, and local laws and regulations.
                </li>
                <li>
                  Not use our services to send deceptive, misleading, fraudulent, or otherwise
                  unlawful content.
                </li>
                <li>
                  Comply with CAN-SPAM, CASL, and all applicable state and provincial regulations
                  that govern your outbound campaigns.
                </li>
              </ul>

              <h2>5. Email and Anti-Spam Compliance</h2>
              <p>
                WorkFlowClick is committed to operating campaigns within the bounds of applicable
                anti-spam law. The following standards apply to all campaigns we manage.
              </p>

              <h3>CAN-SPAM (United States)</h3>
              <p>
                All campaigns targeting United States recipients comply with the CAN-SPAM Act.
                Every email we send on your behalf includes clear sender identification, a valid
                physical mailing address, and a working unsubscribe mechanism. Unsubscribe requests
                are honored promptly. WorkFlowClick reserves the right to refuse any content that
                would violate CAN-SPAM requirements, and we may pause or terminate a campaign if
                continued delivery would create legal exposure.
              </p>

              <h3>CASL (Canada)</h3>
              <p>
                Campaigns targeting Canadian recipients comply with Canada&apos;s Anti-Spam
                Legislation (CASL). This includes appropriate consent mechanisms, identification
                requirements, and unsubscribe functionality in all messages. You are responsible
                for confirming that your targeting criteria are consistent with applicable CASL
                consent requirements for your specific use case.
              </p>

              <h3>State-Level Regulations</h3>
              <p>
                Some states have specific rules governing insurance marketing communications.
                B2B prospecting is generally treated differently from consumer marketing under
                state insurance advertising rules. For example, California&apos;s Department of
                Insurance (CDI) applies distinct standards to commercial and consumer insurance
                solicitation. You are solely responsible for ensuring compliance with the
                insurance solicitation and advertising laws in every state where you operate or
                where your campaigns reach prospects.
              </p>

              <h2>6. Intellectual Property</h2>
              <p>
                Ownership of assets created and used during your engagement is allocated as
                follows:
              </p>
              <p>
                <strong>You own:</strong> your prospect lists, contact data, and all sending
                domains procured on your behalf. These assets belong to you regardless of whether
                the engagement continues.
              </p>
              <p>
                <strong>WorkFlowClick owns:</strong> email templates, campaign frameworks,
                outbound strategies, proprietary methodologies, tools, scripts, and automations
                developed by WorkFlowClick. These remain the intellectual property of WorkFlowClick
                and are licensed to you for use during the active engagement only.
              </p>
              <p>
                <strong>After termination:</strong> You retain full ownership and access to all
                domains, prospect lists, and contact data generated during your engagement.
                WorkFlowClick retains all rights to its templates, frameworks, and proprietary
                systems.
              </p>

              <h2>7. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential any proprietary or non-public information
                disclosed during the course of the engagement. Confidential information includes,
                but is not limited to: campaign strategies, pricing terms, prospect lists,
                targeting criteria, and performance data.
              </p>
              <p>
                Neither party will disclose confidential information of the other to any third
                party without prior written consent, except as required by law. This confidentiality
                obligation survives the termination of services and remains in effect indefinitely
                with respect to trade secrets, and for three years with respect to other
                confidential information.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>
                WorkFlowClick does not guarantee specific results from any campaign. Email campaign
                performance depends on many factors outside our control, including your industry,
                your offer, market conditions, prospect list quality, and the responsiveness of
                your target audience.
              </p>
              <p>
                To the maximum extent permitted by applicable law, WorkFlowClick&apos;s total
                liability to you for any claim arising from or related to these terms or our
                services is capped at the total fees you paid to WorkFlowClick during the three
                months immediately preceding the date the claim arose.
              </p>
              <p>
                WorkFlowClick is not liable for any indirect, incidental, special, consequential,
                or punitive damages, including but not limited to lost profits, lost revenue, or
                loss of business opportunity, even if WorkFlowClick has been advised of the
                possibility of such damages.
              </p>

              <h2>9. Disclaimer of Warranties</h2>
              <p>
                Our services are provided &quot;as is&quot; and &quot;as available&quot; without
                warranty of any kind, express or implied. WorkFlowClick does not warrant that
                campaigns will achieve specific reply rates, meeting volumes, or revenue outcomes.
                We do not warrant that our services will be uninterrupted or error-free.
              </p>
              <p>
                Past performance, case studies, and stated results on our website or marketing
                materials reflect historical outcomes for specific clients under specific conditions.
                They do not guarantee future results for any client.
              </p>

              <h2>10. Insurance Industry Disclaimers</h2>
              <p>
                WorkFlowClick is a marketing infrastructure and lead generation company. We are
                not an insurance agency, broker, managing general agent, or insurance advisor.
                We do not hold insurance licenses in any state or province, and we do not provide
                insurance advice, coverage recommendations, or risk assessments of any kind.
              </p>
              <p>
                Our services are limited to building and operating outbound marketing systems on
                your behalf. You are solely responsible for all insurance advice, coverage
                decisions, underwriting judgments, and regulatory compliance related to your
                insurance business. Nothing in our campaigns or any communication from
                WorkFlowClick constitutes insurance advice.
              </p>

              <h2>11. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless WorkFlowClick, its founders,
                employees, contractors, and agents from and against any claims, liabilities,
                damages, losses, costs, and expenses (including reasonable legal fees) arising
                from or related to:
              </p>
              <ul>
                <li>
                  Your use of campaigns built and deployed by WorkFlowClick on your behalf,
                  including any claims by recipients of those campaigns.
                </li>
                <li>
                  Your products, services, or business practices, including any misrepresentations
                  made by you or your team.
                </li>
                <li>
                  Your violation of these terms, applicable law, or the rights of any third party.
                </li>
              </ul>

              <h2>12. Termination</h2>
              <p>
                Either party may terminate the engagement by providing 30 days written notice to
                the other party. Notice must be sent by email to the contact address on file.
              </p>
              <p>
                WorkFlowClick may terminate services immediately and without notice if you violate
                these terms, request campaigns that violate applicable law, or engage in conduct
                that creates legal liability for WorkFlowClick.
              </p>
              <p>
                Following termination for any reason:
              </p>
              <ul>
                <li>
                  You retain full ownership of all domains, prospect lists, and data generated
                  during the engagement.
                </li>
                <li>
                  WorkFlowClick will provide a reasonable transition period to transfer assets and
                  access credentials to you.
                </li>
                <li>
                  All outstanding invoices for work performed remain due and payable, including
                  fees accrued during any notice period.
                </li>
              </ul>

              <h2>13. Website Use</h2>
              <p>
                Our website is provided for general informational purposes. All content on the
                site, including blog posts, case studies, and calculators, is intended as general
                information and does not constitute professional, legal, financial, or insurance
                advice.
              </p>
              <p>
                The ROI Calculator available at workflowclick.com/roi-calculator provides
                estimated projections only. These estimates are based on assumptions and averages
                and do not guarantee actual results for your specific business. WorkFlowClick is
                not responsible for decisions made based on calculator outputs.
              </p>

              <h2>14. Governing Law and Jurisdiction</h2>

              <h3>For US-Based Clients</h3>
              <p>
                These terms are governed by the laws of the State of Colorado, United States,
                without regard to its conflict of law provisions. Any dispute arising from or
                related to these terms or our services will be resolved in the state or federal
                courts located in Colorado, and both parties consent to personal jurisdiction in
                those courts.
              </p>

              <h3>For Canadian Clients</h3>
              <p>
                These terms are governed by the laws of the Province of Ontario, Canada, without
                regard to its conflict of law provisions. Any dispute arising from or related to
                these terms or our services will be resolved in the courts of Ontario, and both
                parties consent to personal jurisdiction in those courts.
              </p>

              <h3>Dispute Resolution</h3>
              <p>
                Both parties agree to attempt good-faith resolution of any dispute before
                initiating formal legal proceedings. A minimum 30-day negotiation period is
                required after written notice of a dispute before either party may file a legal
                claim. This does not prevent either party from seeking injunctive relief in
                appropriate circumstances.
              </p>

              <h2>15. Privacy</h2>
              <p>
                Our collection and use of personal information is described in our{' '}
                <a href="/privacy">Privacy Policy</a>. By using our website or services, you
                acknowledge that you have read and understood how we collect, use, and protect
                personal information. If you have questions about our privacy practices, please
                review the Privacy Policy at workflowclick.com/privacy before using our services.
              </p>

              <h2>16. Changes to Terms</h2>
              <p>
                WorkFlowClick may update these Terms of Service at any time. We will notify active
                clients of any material changes with at least 30 days advance written notice
                delivered by email. Updated terms are posted on this page with a revised
                &quot;Last updated&quot; date.
              </p>
              <p>
                Continued use of our services after the effective date of any changes constitutes
                your acceptance of the revised terms. If you do not agree to the updated terms,
                you may terminate services in accordance with Section 12.
              </p>

              <h2>17. Severability</h2>
              <p>
                If any provision of these terms is found to be invalid, illegal, or unenforceable
                by a court of competent jurisdiction, that provision will be modified to the
                minimum extent necessary to make it enforceable, or severed if modification is not
                possible. The remaining provisions of these terms continue in full force and effect
                and are not affected by the invalid or unenforceable provision.
              </p>

              <h2>18. Entire Agreement</h2>
              <p>
                These Terms of Service, together with any signed service agreement between you and
                WorkFlowClick, constitute the entire agreement between you and WorkFlowClick with
                respect to the subject matter herein. They supersede all prior and contemporaneous
                agreements, representations, and understandings, whether written or oral.
              </p>
              <p>
                In the event of a conflict between these Terms of Service and a signed service
                agreement, the signed service agreement takes precedence with respect to the
                specific terms addressed therein.
              </p>

              <h2>19. Contact</h2>
              <p>
                If you have questions about these Terms of Service or need clarification on any
                provision, please reach out. We&apos;re happy to discuss.
              </p>
              <ul>
                <li>
                  <strong>Email:</strong> moe@workflowclick.com
                </li>
                <li>
                  <strong>Contact form:</strong>{' '}
                  <a href="/contact">workflowclick.com/contact</a>
                </li>
              </ul>

            </article>
          </div>
        </Container>
      </section>
    </>
  )
}
