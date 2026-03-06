import { createMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description:
    'How WorkFlowClick collects, uses, and protects your personal information. Covers US, Canadian, and international privacy rights.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <>
      {/* Dark hero */}
      <section className="pt-32 pb-16 bg-dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="mt-4 text-lg text-white/70">
              How we collect, use, and protect your information.
            </p>
          </div>
        </Container>
      </section>

      {/* Prose content */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-light-gray mb-8">Last updated: March 5, 2026</p>
            <article className="prose">

              <h2>Who We Are</h2>
              <p>
                WorkFlowClick provides done-for-you cold email infrastructure for insurance
                organizations, including independent agencies, carriers, managing general agents
                (MGAs), and insurtechs. We build and operate outbound prospecting systems that
                generate qualified pipeline for our clients.
              </p>
              <p>
                This Privacy Policy explains what personal information we collect when you interact
                with our website at workflowclick.com, how we use that information, and what rights
                you have over it.
              </p>
              <p>
                For any privacy-related inquiries, contact us at{' '}
                <a href="mailto:moe@workflowclick.com">moe@workflowclick.com</a>.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We collect personal information only when you voluntarily submit a form on our
                website. We operate three forms, each collecting limited information necessary to
                fulfill your request.
              </p>

              <table>
                <thead>
                  <tr>
                    <th>Form</th>
                    <th>Fields Collected</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Free Audit (/audit)</td>
                    <td>Name, email address, company name, role, website URL</td>
                    <td>To evaluate your current outbound setup and deliver a personalized audit</td>
                  </tr>
                  <tr>
                    <td>Contact (/contact)</td>
                    <td>Name, email address, company name, message</td>
                    <td>To respond to your inquiry or question</td>
                  </tr>
                  <tr>
                    <td>Playbook (/playbook)</td>
                    <td>Name, email address, company name</td>
                    <td>To deliver the requested cold email playbook resource</td>
                  </tr>
                </tbody>
              </table>

              <p>
                <strong>ROI Calculator (/roi-calculator):</strong> Our ROI calculator runs entirely
                in your browser. No data entered into the calculator is collected, transmitted, or
                stored by WorkFlowClick or any third party.
              </p>

              <p>
                We do not collect sensitive personal information such as Social Security numbers,
                financial account details, health information, or government-issued identification.
              </p>

              <h2>How We Use Your Information</h2>
              <p>We use the information you submit for the following purposes only:</p>
              <ul>
                <li>
                  To respond to your inquiry, question, or request as described in the form you
                  submitted
                </li>
                <li>
                  To deliver requested materials, such as the cold email playbook or a personalized
                  audit report
                </li>
                <li>
                  To notify our team internally so we can follow up with you in a timely manner
                </li>
                <li>
                  To send follow-up communications directly related to your inquiry, where you have
                  implicitly or explicitly consented by submitting the form
                </li>
              </ul>
              <p>
                We do not use your information for behavioral profiling, interest-based advertising,
                or any automated decision-making that produces legal or similarly significant
                effects. We do not sell, rent, or share your personal information with third parties
                for their own marketing purposes.
              </p>

              <h2>How We Process and Store Your Information</h2>
              <p>
                When you submit a form on our website, your information is transmitted via the
                Resend email API to our team&apos;s email inbox. We do not store your personal
                information in any database, CRM, or persistent data store separate from our email
                inbox.
              </p>
              <p>
                Your data exists only within our business email correspondence. It is not written to
                any database at the time of form submission and is not aggregated, analyzed, or
                combined with data from other sources.
              </p>

              <h2>Third-Party Services</h2>
              <p>
                We use a minimal number of third-party services to operate our website. We do not
                use analytics platforms, advertising networks, or data brokers.
              </p>
              <ul>
                <li>
                  <strong>Resend:</strong> We use Resend to transmit form submissions to our team
                  via email. Resend acts as a data processor on our behalf. Their privacy policy is
                  available at{' '}
                  <a
                    href="https://resend.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    resend.com/legal/privacy-policy
                  </a>
                  .
                </li>
                <li>
                  <strong>Self-hosted infrastructure:</strong> Our website runs on self-hosted
                  infrastructure. We do not use Vercel, AWS, Google Cloud, or other third-party
                  hosting providers that would receive your data as a matter of course.
                </li>
                <li>
                  <strong>Google Fonts:</strong> All fonts are loaded locally via Next.js
                  next/font, which downloads and self-hosts font files at build time. Google does
                  not receive any visitor data or network requests from our site.
                </li>
              </ul>

              <h2>Cookies and Tracking</h2>
              <p>
                We do not use cookies of any kind on our website. This includes session cookies,
                persistent cookies, first-party cookies, and third-party cookies.
              </p>
              <p>We do not use:</p>
              <ul>
                <li>Web analytics tools (such as Google Analytics, Mixpanel, or Plausible)</li>
                <li>Tracking pixels or web beacons</li>
                <li>Retargeting or remarketing scripts</li>
                <li>Session recording or heatmap tools</li>
                <li>A/B testing platforms</li>
                <li>Social media tracking widgets</li>
              </ul>
              <p>
                We do not collect any data about your browsing behavior, the pages you visit, how
                long you stay, or where you came from. There is no tracking of any kind on this
                website beyond what is inherent in standard HTTP server logs, which we do not retain
                or analyze for marketing purposes.
              </p>

              <h2>Data Retention</h2>
              <p>
                Form submissions are retained in our business email inbox for the duration of our
                normal business correspondence practices. We retain correspondence to maintain
                records of client and prospect relationships and to fulfill any follow-up
                commitments we make.
              </p>
              <p>
                We do not maintain a separate database of form submissions, so there is no
                additional record to delete beyond our email correspondence.
              </p>
              <p>
                If you would like to request deletion of your personal information from our records,
                contact us at{' '}
                <a href="mailto:moe@workflowclick.com">moe@workflowclick.com</a> and we will
                respond within 30 days.
              </p>

              <h2>Your Rights (General)</h2>
              <p>
                Regardless of your location, you have the following rights with respect to your
                personal information:
              </p>
              <ul>
                <li>
                  <strong>Right to access:</strong> You may request a copy of the personal
                  information we hold about you.
                </li>
                <li>
                  <strong>Right to correction:</strong> You may request that we correct inaccurate
                  or incomplete personal information.
                </li>
                <li>
                  <strong>Right to deletion:</strong> You may request that we delete your personal
                  information from our records.
                </li>
                <li>
                  <strong>Right to withdraw consent:</strong> You may withdraw consent for future
                  commercial communications at any time by contacting us or using the unsubscribe
                  mechanism in any email we send.
                </li>
                <li>
                  <strong>Right to lodge a complaint:</strong> You may lodge a complaint with a
                  relevant data protection or privacy authority if you believe your rights have been
                  violated.
                </li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{' '}
                <a href="mailto:moe@workflowclick.com">moe@workflowclick.com</a>. We will respond
                to all requests in a timely manner consistent with applicable law.
              </p>

              <h2>United States Privacy Rights</h2>

              <h3>California (CCPA/CPRA)</h3>
              <p>
                California residents have additional rights under the California Consumer Privacy
                Act (CCPA) and the California Privacy Rights Act (CPRA):
              </p>
              <ul>
                <li>
                  <strong>Right to know:</strong> You have the right to know what personal
                  information we collect about you, the categories of sources from which it is
                  collected, the business purpose for collecting it, and the categories of third
                  parties with whom it is shared.
                </li>
                <li>
                  <strong>Right to delete:</strong> You have the right to request deletion of your
                  personal information, subject to certain exceptions permitted by law.
                </li>
                <li>
                  <strong>Right to correct:</strong> You have the right to request correction of
                  inaccurate personal information we maintain about you.
                </li>
                <li>
                  <strong>Right to opt-out of sale:</strong> We do not sell personal information.
                  We do not share personal information for cross-context behavioral advertising.
                </li>
                <li>
                  <strong>Right to non-discrimination:</strong> We will not discriminate against
                  you for exercising any of your CCPA/CPRA rights.
                </li>
              </ul>
              <p>
                <strong>California Shine the Light (Civil Code Section 1798.83):</strong> We do not
                disclose personal information to third parties for their direct marketing purposes.
              </p>
              <p>
                To exercise your California privacy rights, contact us at{' '}
                <a href="mailto:moe@workflowclick.com">moe@workflowclick.com</a>. We will respond
                within 45 days of receiving a verifiable consumer request. We may extend this period
                by an additional 45 days where reasonably necessary, with prior notice.
              </p>

              <h3>CAN-SPAM Act</h3>
              <p>
                All commercial electronic mail messages we send comply with the federal CAN-SPAM
                Act. Specifically:
              </p>
              <ul>
                <li>
                  All messages include clear and accurate identification of WorkFlowClick as the
                  sender.
                </li>
                <li>
                  All messages include our physical mailing address.
                </li>
                <li>
                  All messages include a clear and conspicuous notice of the opportunity to opt out
                  of receiving future messages.
                </li>
                <li>
                  Opt-out requests are honored within 10 business days.
                </li>
              </ul>

              <h3>Other US States</h3>
              <p>
                Residents of the following states have enacted comprehensive consumer privacy laws
                that grant similar rights to access, delete, correct, and opt-out of certain uses
                of personal information:
              </p>
              <ul>
                <li>
                  <strong>Virginia (VCDPA):</strong> Virginia Consumer Data Protection Act
                </li>
                <li>
                  <strong>Colorado (CPA):</strong> Colorado Privacy Act
                </li>
                <li>
                  <strong>Connecticut (CTDPA):</strong> Connecticut Data Privacy Act
                </li>
                <li>
                  <strong>Utah (UCPA):</strong> Utah Consumer Privacy Act
                </li>
              </ul>
              <p>
                Residents of these states may exercise applicable rights by contacting us at{' '}
                <a href="mailto:moe@workflowclick.com">moe@workflowclick.com</a>. We will respond
                consistent with the requirements of the applicable state law.
              </p>

              <h2>Canadian Privacy Rights</h2>

              <h3>PIPEDA</h3>
              <p>
                We handle personal information of Canadian residents in accordance with the Personal
                Information Protection and Electronic Documents Act (PIPEDA) and applicable
                provincial privacy legislation.
              </p>
              <ul>
                <li>
                  Personal information is collected with your knowledge and consent, either
                  expressed through submitting a form or implied by the nature of your request.
                </li>
                <li>
                  Personal information is collected only for the purposes described in this policy
                  and used only in ways consistent with those purposes.
                </li>
                <li>
                  You have the right to access the personal information we hold about you and to
                  challenge its accuracy.
                </li>
                <li>
                  You have the right to withdraw your consent to our use of your personal
                  information at any time, subject to legal or contractual restrictions.
                </li>
              </ul>
              <p>
                Our privacy officer for PIPEDA purposes can be reached at{' '}
                <a href="mailto:moe@workflowclick.com">moe@workflowclick.com</a>.
              </p>

              <h3>CASL (Canada&apos;s Anti-Spam Legislation)</h3>
              <p>
                Commercial electronic messages are sent to Canadian recipients only with implied or
                express consent as defined under CASL. All commercial electronic messages we send
                include:
              </p>
              <ul>
                <li>Clear identification of WorkFlowClick as the sender</li>
                <li>Our contact information</li>
                <li>A working unsubscribe mechanism that is honored within 10 business days</li>
              </ul>

              <h3>Provincial Privacy Laws</h3>
              <p>
                Residents of Quebec, Alberta, and British Columbia benefit from provincial privacy
                legislation that provides protections similar to or stronger than PIPEDA:
              </p>
              <ul>
                <li>
                  <strong>Quebec (Law 25 / Act Respecting the Protection of Personal
                  Information):</strong> Quebec residents have rights under Law 25, including the
                  right to data portability and enhanced transparency requirements. Law 25 applies
                  to businesses that collect personal information from Quebec residents. Residents
                  may request access, correction, or deletion of their information by contacting
                  us at moe@workflowclick.com.
                </li>
                <li>
                  <strong>Alberta (PIPA):</strong> The Personal Information Protection Act governs
                  collection and use of personal information in Alberta. Alberta residents may
                  exercise access and correction rights by contacting us directly.
                </li>
                <li>
                  <strong>British Columbia (PIPA):</strong> British Columbia&apos;s Personal
                  Information Protection Act similarly governs our handling of personal information
                  from BC residents. Residents may contact us to exercise their rights.
                </li>
              </ul>

              <h2>European Visitors (GDPR)</h2>
              <p>
                If you are located in the European Economic Area (EEA), the United Kingdom, or
                Switzerland, the General Data Protection Regulation (GDPR) or equivalent national
                law may apply to our processing of your personal information.
              </p>
              <p>
                <strong>Legal basis for processing:</strong> We rely on your consent as the legal
                basis for processing your personal information. You provide this consent when you
                voluntarily submit a form on our website.
              </p>
              <p>Under GDPR you have the following rights:</p>
              <ul>
                <li>
                  <strong>Right of access (Article 15):</strong> You may request a copy of the
                  personal information we process about you.
                </li>
                <li>
                  <strong>Right to rectification (Article 16):</strong> You may request correction
                  of inaccurate personal information.
                </li>
                <li>
                  <strong>Right to erasure (Article 17):</strong> You may request deletion of your
                  personal information in certain circumstances.
                </li>
                <li>
                  <strong>Right to restriction of processing (Article 18):</strong> You may request
                  that we restrict processing of your personal information in certain circumstances.
                </li>
                <li>
                  <strong>Right to data portability (Article 20):</strong> You may request receipt
                  of your personal information in a structured, machine-readable format.
                </li>
                <li>
                  <strong>Right to object (Article 21):</strong> You may object to processing of
                  your personal information based on legitimate interests or for direct marketing
                  purposes.
                </li>
                <li>
                  <strong>Right to withdraw consent:</strong> Where processing is based on consent,
                  you may withdraw it at any time without affecting the lawfulness of processing
                  prior to withdrawal.
                </li>
              </ul>
              <p>
                To exercise your GDPR rights, contact us at{' '}
                <a href="mailto:moe@workflowclick.com">moe@workflowclick.com</a>. We will respond
                within 30 days. You also have the right to lodge a complaint with your local data
                protection supervisory authority.
              </p>

              <h2>Children&apos;s Privacy</h2>
              <p>
                Our services are directed exclusively to business professionals and are not intended
                for individuals under the age of 18. We do not knowingly collect personal
                information from children or minors.
              </p>
              <p>
                If we become aware that we have collected personal information from an individual
                under 18, we will take steps to delete that information promptly. If you believe we
                may have inadvertently collected such information, please contact us at{' '}
                <a href="mailto:moe@workflowclick.com">moe@workflowclick.com</a>.
              </p>

              <h2>Data Security</h2>
              <p>
                We implement reasonable technical and organizational measures to protect your
                personal information from unauthorized access, disclosure, alteration, and
                destruction:
              </p>
              <ul>
                <li>
                  <strong>HTTPS encryption:</strong> All pages on workflowclick.com are served over
                  HTTPS, encrypting data in transit between your browser and our server.
                </li>
                <li>
                  <strong>Secure email transmission:</strong> Form submissions are transmitted to
                  our team via the Resend API, which uses TLS-encrypted connections.
                </li>
                <li>
                  <strong>Access controls:</strong> Access to submitted information is limited to
                  authorized personnel with a legitimate need to process your request.
                </li>
              </ul>
              <p>
                No method of transmission over the internet or method of electronic storage is
                completely secure. While we strive to protect your personal information, we cannot
                guarantee its absolute security.
              </p>

              <h2>International Data Transfers</h2>
              <p>
                WorkFlowClick is operated by a team in the United States and Canada. If you submit
                a form on our website from outside these countries, your personal information may
                be transferred to, processed, and stored in the United States or Canada.
              </p>
              <p>
                By submitting a form on our website, you acknowledge and consent to the transfer of
                your personal information to the United States and Canada, where data protection
                laws may differ from those in your country of residence.
              </p>
              <p>
                We do not transfer personal information to countries other than the United States
                and Canada in the ordinary course of our operations.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our
                practices, legal requirements, or for other operational reasons. When we make
                changes, we will update the "Last updated" date at the top of this page.
              </p>
              <p>
                For material changes that significantly affect your rights or how we use your
                information, we will include a clear notice at the top of this policy indicating
                the nature of the change and its effective date. We encourage you to review this
                page periodically.
              </p>
              <p>
                Your continued use of our website after a policy update constitutes your acceptance
                of the revised policy.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions, concerns, or requests related to this Privacy Policy or the
                handling of your personal information, please contact us:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:moe@workflowclick.com">moe@workflowclick.com</a>
                </li>
                <li>
                  <strong>Contact form:</strong>{' '}
                  <a href="/contact">workflowclick.com/contact</a>
                </li>
              </ul>
              <p>
                We are committed to working with you to resolve any concerns about your privacy in
                a fair and timely manner.
              </p>

            </article>
          </div>
        </Container>
      </section>
    </>
  )
}
