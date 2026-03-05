export type Audience = 'agency' | 'insurtech'

export interface HeroContent {
  headline: string
  highlightedText: string
  subheadline: string
  proofLine: string
}

export interface LogoBarContent {
  heading: string
  logos: Array<{ name: string; abbr: string }>
}

export interface ProblemItem {
  icon: string
  title: string
  description: string
}

export interface ProblemGridContent {
  sectionTitle: string
  sectionSubtitle: string
  problems: ProblemItem[]
}

export interface StepItem {
  icon: string
  number: string
  title: string
  description: string
}

export interface ProcessStepsContent {
  sectionTitle: string
  sectionSubtitle: string
  steps: StepItem[]
}

export interface TierItem {
  name: string
  tagline: string
  badge?: string
  variant: 'default' | 'highlighted' | 'premium'
  features: string[]
}

export interface PricingTiersContent {
  sectionTitle: string
  sectionSubtitle: string
  footnote: string
  tiers: TierItem[]
}

export interface StatItem {
  target: number
  prefix?: string
  suffix?: string
  label: string
}

export interface StatsBarContent {
  stats: StatItem[]
}

export interface DifferentiatorItem {
  icon: string
  title: string
  description: string
}

export interface DifferentiatorsContent {
  sectionTitle: string
  items: DifferentiatorItem[]
}

export interface TestimonialItem {
  quote: string
  attribution: string
  context: string
}

export interface TestimonialsContent {
  sectionTitle: string
  sectionSubtitle: string
  items: TestimonialItem[]
}

export interface AuditCTAContent {
  sectionTitle: string
  sectionSubtitle: string
  buttonText: string
  successMessage: string
  successDetail: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQContent {
  items: FAQItem[]
}

export interface FinalCTAContent {
  headline: string
  subheadline: string
  buttonText: string
  footnote: string
}

export interface FooterContent {
  tagline: string
}

export interface AudienceContent {
  label: string
  shortLabel: string
  hero: HeroContent
  logoBar: LogoBarContent
  problemGrid: ProblemGridContent
  processSteps: ProcessStepsContent
  pricingTiers: PricingTiersContent
  statsBar: StatsBarContent
  differentiators: DifferentiatorsContent
  testimonials: TestimonialsContent
  auditCTA: AuditCTAContent
  faq: FAQContent
  finalCTA: FinalCTAContent
  footer: FooterContent
}

// ---------------------------------------------------------------------------
// Insurance Agency content
// ---------------------------------------------------------------------------
const agencyContent: AudienceContent = {
  label: 'Insurance Agency',
  shortLabel: 'Agency',

  hero: {
    headline: 'Fill Your Commercial Prospects Pipeline.',
    highlightedText: 'Every Week.',
    subheadline:
      'Done-for-you cold email infrastructure for independent insurance agencies. We handle everything from domain warming to booked appointments with decision-makers.',
    proofLine:
      'Backed by $10M+ in pipeline generated across B2B sales programs',
  },

  logoBar: {
    heading: 'Leadership Experience Across',
    logos: [
      { name: 'Element AI / ServiceNow', abbr: 'Element AI' },
      { name: 'Armilla AI', abbr: 'Armilla AI' },
      { name: 'PointClickCare', abbr: 'PointClickCare' },
      { name: 'Xero', abbr: 'Xero' },
      { name: 'BlueCat', abbr: 'BlueCat' },
    ],
  },

  problemGrid: {
    sectionTitle: 'Your Outreach Is Broken (And You Know It)',
    sectionSubtitle:
      "Sound familiar? You're not alone. Here's how we fix it.",
    problems: [
      {
        icon: 'ShieldAlert',
        title: 'Emails landing in spam',
        description:
          'Your messages to prospects never reach the inbox. They go straight to junk.',
      },
      {
        icon: 'TrendingDown',
        title: 'Losing clients to bigger brokers',
        description:
          'National firms are outspending you on marketing. Your book of business is shrinking.',
      },
      {
        icon: 'Clock',
        title: 'No time for prospecting',
        description:
          'Between renewals, claims, and servicing, there is no time left to find new business.',
      },
      {
        icon: 'MessageSquareOff',
        title: 'Generic outreach getting ignored',
        description:
          'Copy-paste templates sound robotic. Decision-makers delete them instantly.',
      },
      {
        icon: 'BarChart3',
        title: 'Pipeline is unpredictable',
        description:
          'Some months are great, others are empty. You need a consistent flow of new prospects.',
      },
      {
        icon: 'Ban',
        title: 'Domain getting blacklisted',
        description:
          'Amateur email setup is destroying your sender reputation and hurting all your communications.',
      },
    ],
  },

  processSteps: {
    sectionTitle: 'Your Outbound Engine, Built and Managed For You',
    sectionSubtitle:
      "From zero to pipeline in four steps. We handle the complexity so you don't have to.",
    steps: [
      {
        icon: 'Phone',
        number: '01',
        title: 'Strategy Call',
        description:
          'We learn your ideal client profile, markets, and lines of business to build a winning outreach playbook.',
      },
      {
        icon: 'Settings',
        number: '02',
        title: 'Infrastructure Setup',
        description:
          'Domain warming, DKIM/SPF/DMARC authentication, inbox configuration. All done for you.',
      },
      {
        icon: 'Rocket',
        number: '03',
        title: 'Campaign Launch',
        description:
          'Personalized sequences targeting business owners, CFOs, and HR leaders who need coverage.',
      },
      {
        icon: 'CalendarCheck',
        number: '04',
        title: 'Booked Appointments',
        description:
          'We deliver warm prospects ready to talk about their insurance needs. You focus on closing.',
      },
    ],
  },

  pricingTiers: {
    sectionTitle: 'Choose Your Growth Speed',
    sectionSubtitle:
      'All plans include domain warming, email authentication, and dedicated strategy support.',
    footnote: "Pricing is customized to your agency's growth goals. Let's talk.",
    tiers: [
      {
        name: 'Bronze',
        tagline: 'The Machine',
        variant: 'default',
        features: [
          '1,000-1,500 verified contacts/month',
          '4 email sequences (industry-specific)',
          'A/B testing across all sequences',
          'Up to 10 authenticated inboxes',
          'Full domain authentication (SPF, DKIM, DMARC)',
          'Daily campaign management',
          'Reply forwarding + prioritized alerts',
          '2x biweekly strategy sessions',
          'Monthly performance reporting',
        ],
      },
      {
        name: 'Silver',
        tagline: 'The War Room',
        badge: 'Most Popular',
        variant: 'highlighted',
        features: [
          'Everything in Bronze, plus:',
          '2,500-3,000 verified contacts/month',
          '6 email sequences',
          'Up to 20 inboxes, 3 domains',
          '10 named accounts/month (manual prospecting)',
          'Real-time Slack notifications',
          'Weekly strategy sessions',
          'Objection-handling templates',
          'Quarterly campaign audit + refresh',
          'Priority Slack/email support',
        ],
      },
      {
        name: 'Gold',
        tagline: 'The Takeover',
        variant: 'premium',
        features: [
          'Everything in Silver, plus:',
          '5,000+ verified contacts/month',
          '25+ email sequences',
          'Unlimited inboxes, 5 domains',
          '25 named accounts/month',
          'Full Slack suite + custom alert rules',
          'Signal-based follow-up playbook',
          'Cold call script development',
          'Omnichannel (email + LinkedIn + calls)',
          'Unlimited strategy sessions (up to 8hrs/mo)',
          'Monthly executive summary',
          'Quarterly business review (QBR)',
        ],
      },
    ],
  },

  statsBar: {
    stats: [
      { target: 10, prefix: '$', suffix: 'M+', label: 'Pipeline Generated' },
      { target: 10, suffix: '+', label: 'Years B2B Sales Experience' },
      { target: 1000, suffix: 's', label: 'Campaigns Managed' },
      { target: 7, suffix: '+', label: 'Enterprise Companies' },
    ],
  },

  differentiators: {
    sectionTitle: 'Why Agencies Choose Us Over DIY or Big Agencies',
    items: [
      {
        icon: 'User',
        title: 'Founder-Led, Not Factory',
        description:
          'Moe personally oversees your campaigns. No junior account managers learning on your dime. You get senior-level attention from day one.',
      },
      {
        icon: 'Cpu',
        title: 'AI-Augmented Infrastructure',
        description:
          'Our CTO builds custom automation that powers your outreach. Your campaigns run on real intelligence, not copy-paste templates.',
      },
      {
        icon: 'Building2',
        title: 'Built for Insurance',
        description:
          'We understand the insurance landscape. Carriers, MGAs, commercial lines, personal lines. Our messaging speaks the language your prospects expect.',
      },
      {
        icon: 'Shield',
        title: 'Full-Stack Deliverability',
        description:
          'Domain warming, DKIM/SPF/DMARC authentication, inbox rotation, blacklist monitoring. We handle the entire technical stack.',
      },
      {
        icon: 'XCircle',
        title: 'Cancel Anytime',
        description:
          'Month-to-month. No lock-in contracts. If we do not perform, you leave. We earn your business every single month.',
      },
    ],
  },

  testimonials: {
    sectionTitle: 'Proven Track Record',
    sectionSubtitle:
      'Our founder has built and scaled outbound engines across multiple industries.',
    items: [
      {
        quote:
          'Generated over $4M in pipeline through cold email campaigns at Element AI, leading to acquisition by ServiceNow.',
        attribution: 'Element AI (acquired by ServiceNow, 2020)',
        context: "From Moe's career",
      },
      {
        quote:
          'Built outbound engine from scratch for a YC-backed AI startup, establishing repeatable pipeline generation.',
        attribution: 'Armilla AI (YC-backed)',
        context: "From Moe's career",
      },
      {
        quote:
          'Scaled cold email programs across healthcare SaaS, driving consistent qualified meeting flow for enterprise sales teams.',
        attribution: 'PointClickCare',
        context: "From Moe's career",
      },
    ],
  },

  auditCTA: {
    sectionTitle: 'Is Your Email Domain Healthy?',
    sectionSubtitle:
      "Get a free deliverability audit. We'll check your DKIM, SPF, DMARC, and domain reputation, and tell you exactly what's broken.",
    buttonText: 'Get My Free Audit',
    successMessage: 'Your audit request has been received.',
    successDetail: "We'll send you a detailed report within 24 hours.",
  },

  faq: {
    items: [
      {
        question: 'How quickly will I see results?',
        answer:
          'Most agencies see their first qualified appointments within 2-4 weeks of campaign launch. The first 1-2 weeks are dedicated to infrastructure setup and domain warming. Once campaigns go live, replies typically start flowing within days.',
      },
      {
        question: 'Do I need to provide my own domains and inboxes?',
        answer:
          'Yes, you provide the domains and inboxes. We handle all the technical setup: domain warming, SPF/DKIM/DMARC authentication, inbox configuration, and ongoing deliverability monitoring. We guide you through purchasing domains and inboxes if you need help.',
      },
      {
        question: 'What types of insurance prospects can you target?',
        answer:
          'We target business owners, CFOs, HR directors, and other decision-makers who need commercial insurance, workers comp, group benefits, or other coverage. We build custom prospect lists based on your ideal client profile, industry focus, and geographic market.',
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
          'A typical campaign includes researched and verified prospect lists matched to your ideal client profile, 4-7 step email sequences with industry-specific messaging, A/B testing across subject lines and copy, and daily monitoring with optimization. You receive regular reports on open rates, reply rates, and qualified appointments booked.',
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
    ],
  },

  finalCTA: {
    headline: 'Ready to Grow Your Book of Business?',
    subheadline:
      'Book a free strategy call. No pitch deck, no pressure. Just a conversation about your outbound goals.',
    buttonText: 'Book a Strategy Call',
    footnote: "You'll speak directly with Moe, our founder.",
  },

  footer: {
    tagline:
      'Done-for-you cold email infrastructure for insurance agencies. We handle everything from domain warming to booked appointments.',
  },
}

// ---------------------------------------------------------------------------
// Insurtech content
// ---------------------------------------------------------------------------
const insurtechContent: AudienceContent = {
  label: 'Insurtech',
  shortLabel: 'Insurtech',

  hero: {
    headline: 'Get Meetings with Carriers and Agencies.',
    highlightedText: 'Every Week.',
    subheadline:
      'Done-for-you cold email infrastructure for insurtech companies. We handle everything from domain warming to booked calls with insurance decision-makers.',
    proofLine:
      'Backed by $10M+ in pipeline generated across B2B sales programs',
  },

  logoBar: {
    heading: 'Leadership Experience Across',
    logos: [
      { name: 'Element AI / ServiceNow', abbr: 'Element AI' },
      { name: 'Armilla AI', abbr: 'Armilla AI' },
      { name: 'PointClickCare', abbr: 'PointClickCare' },
      { name: 'Xero', abbr: 'Xero' },
      { name: 'BlueCat', abbr: 'BlueCat' },
    ],
  },

  problemGrid: {
    sectionTitle: 'Your Outreach Is Broken (And You Know It)',
    sectionSubtitle:
      "Sound familiar? You're not alone. Here's how we fix it.",
    problems: [
      {
        icon: 'ShieldAlert',
        title: 'Emails landing in spam',
        description:
          'Your carefully crafted messages never reach the inbox. They vanish before anyone sees them.',
      },
      {
        icon: 'TrendingDown',
        title: "Can't break into insurance",
        description:
          'Traditional carriers and agencies are skeptical of new tech. Getting a first meeting feels impossible.',
      },
      {
        icon: 'Clock',
        title: 'Sales cycles dragging on forever',
        description:
          'Insurance buyers move slow. Your board wants pipeline now, not in 18 months.',
      },
      {
        icon: 'MessageSquareOff',
        title: 'Tech-speak falling flat',
        description:
          'Your product messaging sounds great to engineers but means nothing to an insurance VP.',
      },
      {
        icon: 'BarChart3',
        title: 'Investors asking about pipeline',
        description:
          'Board meetings are coming. Your pipeline is empty and your burn rate is not slowing down.',
      },
      {
        icon: 'Ban',
        title: 'Domain getting blacklisted',
        description:
          'Amateur email setup is destroying your sender reputation and credibility with prospects.',
      },
    ],
  },

  processSteps: {
    sectionTitle: 'Your Outbound Engine, Built and Managed For You',
    sectionSubtitle:
      "From zero to pipeline in four steps. We handle the complexity so you don't have to.",
    steps: [
      {
        icon: 'Phone',
        number: '01',
        title: 'Strategy Call',
        description:
          'We analyze your ICP, product positioning, and the insurance buyer landscape to build a winning playbook.',
      },
      {
        icon: 'Settings',
        number: '02',
        title: 'Infrastructure Setup',
        description:
          'Domain warming, DKIM/SPF/DMARC authentication, inbox configuration. All done for you.',
      },
      {
        icon: 'Rocket',
        number: '03',
        title: 'Campaign Launch',
        description:
          'Insurance-native copy that speaks the language of carriers, MGAs, and agency principals.',
      },
      {
        icon: 'CalendarCheck',
        number: '04',
        title: 'Qualified Meetings',
        description:
          'We deliver warm prospects ready to evaluate your platform. You focus on demos and closing.',
      },
    ],
  },

  pricingTiers: {
    sectionTitle: 'Choose Your Growth Speed',
    sectionSubtitle:
      'All plans include domain warming, email authentication, and dedicated strategy support.',
    footnote: 'Pricing is customized to your growth stage. Let\'s talk.',
    tiers: [
      {
        name: 'Bronze',
        tagline: 'The Machine',
        variant: 'default',
        features: [
          '1,000-1,500 verified contacts/month',
          '4 sequences (carrier, MGA, agency, broker)',
          'A/B testing across all sequences',
          'Up to 10 authenticated inboxes',
          'Full domain authentication (SPF, DKIM, DMARC)',
          'Daily campaign management',
          'Reply forwarding + prioritized alerts',
          '2x biweekly strategy sessions',
          'Monthly performance reporting',
        ],
      },
      {
        name: 'Silver',
        tagline: 'The War Room',
        badge: 'Most Popular',
        variant: 'highlighted',
        features: [
          'Everything in Bronze, plus:',
          '2,500-3,000 verified contacts/month',
          '6 sequences across buyer segments',
          'Up to 20 inboxes, 3 domains',
          '10 named accounts/month (manual prospecting)',
          'Real-time Slack notifications',
          'Weekly strategy sessions',
          'Objection-handling templates',
          'Quarterly campaign audit + refresh',
          'Priority Slack/email support',
        ],
      },
      {
        name: 'Gold',
        tagline: 'The Takeover',
        variant: 'premium',
        features: [
          'Everything in Silver, plus:',
          '5,000+ verified contacts/month',
          '25+ sequences across all segments',
          'Unlimited inboxes, 5 domains',
          '25 named accounts/month',
          'Full Slack suite + custom alert rules',
          'Signal-based follow-up playbook',
          'Cold call script development',
          'Omnichannel (email + LinkedIn + calls)',
          'Unlimited strategy sessions (up to 8hrs/mo)',
          'Monthly executive summary',
          'Quarterly business review (QBR)',
        ],
      },
    ],
  },

  statsBar: {
    stats: [
      { target: 10, prefix: '$', suffix: 'M+', label: 'Pipeline Generated' },
      { target: 10, suffix: '+', label: 'Years B2B Sales Experience' },
      { target: 1000, suffix: 's', label: 'Campaigns Managed' },
      { target: 7, suffix: '+', label: 'Enterprise Companies' },
    ],
  },

  differentiators: {
    sectionTitle: 'Why Insurtechs Choose Us Over DIY or Big Agencies',
    items: [
      {
        icon: 'User',
        title: 'Founder-Led, Not Factory',
        description:
          'Moe personally oversees your campaigns. No junior account managers learning on your dime. You get senior-level attention from day one.',
      },
      {
        icon: 'Cpu',
        title: 'AI-Augmented Infrastructure',
        description:
          'Our CTO builds custom automation that powers your outreach. Your campaigns run on real intelligence, not copy-paste templates.',
      },
      {
        icon: 'Zap',
        title: 'Built for Insurtech',
        description:
          'We understand the insurance buyer. Carriers, MGAs, agencies, brokers. Our messaging translates your tech into business outcomes they care about.',
      },
      {
        icon: 'Shield',
        title: 'Full-Stack Deliverability',
        description:
          'Domain warming, DKIM/SPF/DMARC authentication, inbox rotation, blacklist monitoring. We handle the entire technical stack.',
      },
      {
        icon: 'XCircle',
        title: 'Cancel Anytime',
        description:
          'Month-to-month. No lock-in contracts. If we do not perform, you leave. We earn your business every single month.',
      },
    ],
  },

  testimonials: {
    sectionTitle: 'Proven Track Record',
    sectionSubtitle:
      'Our founder has built and scaled outbound engines across multiple industries and tech companies.',
    items: [
      {
        quote:
          'Generated over $4M in pipeline through cold email campaigns at Element AI, leading to acquisition by ServiceNow.',
        attribution: 'Element AI (acquired by ServiceNow, 2020)',
        context: "From Moe's career",
      },
      {
        quote:
          'Built outbound engine from scratch for a YC-backed AI startup, establishing repeatable pipeline generation.',
        attribution: 'Armilla AI (YC-backed)',
        context: "From Moe's career",
      },
      {
        quote:
          'Scaled cold email programs across healthcare SaaS, driving consistent qualified meeting flow for enterprise sales teams.',
        attribution: 'PointClickCare',
        context: "From Moe's career",
      },
    ],
  },

  auditCTA: {
    sectionTitle: 'Is Your Email Domain Healthy?',
    sectionSubtitle:
      "Get a free deliverability audit. We'll check your DKIM, SPF, DMARC, and domain reputation, and tell you exactly what's broken.",
    buttonText: 'Get My Free Audit',
    successMessage: 'Your audit request has been received.',
    successDetail: "We'll send you a detailed report within 24 hours.",
  },

  faq: {
    items: [
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
        question: 'Can you target carriers, MGAs, and agencies?',
        answer:
          'Yes. We build custom prospect lists targeting the specific buyer segments you need: carriers, MGAs, wholesale brokers, retail agencies, or any combination. We research the right titles, departments, and decision-makers for your product.',
      },
      {
        question: 'How is this different from hiring an SDR?',
        answer:
          'An in-house SDR costs $60K-$80K+ in salary alone, takes months to ramp up, and requires management overhead. We provide an entire outbound engine (infrastructure, copy, strategy, execution) for a fraction of the cost, with faster results and no HR headaches.',
      },
      {
        question: 'Will the messaging sound too salesy for insurance buyers?',
        answer:
          'No. Insurance decision-makers are conservative and skeptical of hype. Our copy is professional, direct, and focused on business outcomes. We avoid the tech jargon and buzzwords that turn off traditional buyers.',
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
          'A typical campaign includes researched and verified prospect lists matched to your ideal buyer profile, 4-7 step email sequences with insurance-native messaging, A/B testing across subject lines and copy, and daily monitoring with optimization. You receive regular reports on open rates, reply rates, and qualified meetings booked.',
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
    ],
  },

  finalCTA: {
    headline: 'Ready to Fill Your Pipeline?',
    subheadline:
      'Book a free strategy call. No pitch deck, no pressure. Just a conversation about reaching insurance buyers.',
    buttonText: 'Book a Strategy Call',
    footnote: "You'll speak directly with Moe, our founder.",
  },

  footer: {
    tagline:
      'Done-for-you cold email infrastructure for insurtech companies. We handle everything from domain warming to booked calls.',
  },
}

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------
export const audienceContent: Record<Audience, AudienceContent> = {
  agency: agencyContent,
  insurtech: insurtechContent,
}

/** Combine FAQ items from all audiences (for SEO schema) */
export function getAllFaqItems(): FAQItem[] {
  const seen = new Set<string>()
  const combined: FAQItem[] = []

  for (const audience of Object.values(audienceContent)) {
    for (const item of audience.faq.items) {
      if (!seen.has(item.question)) {
        seen.add(item.question)
        combined.push(item)
      }
    }
  }

  return combined
}
