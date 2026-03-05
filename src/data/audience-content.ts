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
    headline: 'Grow Your Commercial Book.',
    highlightedText: 'Without Prospecting.',
    subheadline:
      'Done-for-you cold email for independent insurance agencies. We build the lists, write the sequences, warm the domains, and put qualified commercial prospects on your calendar.',
    proofLine:
      'Built by a team that sold to 150+ insurance organizations and generated $10M+ in B2B outbound pipeline',
  },

  logoBar: {
    heading: 'Insurance & Enterprise Sales Experience',
    logos: [
      { name: 'Risk Control Technologies / Duck Creek', abbr: 'RCT / Duck Creek' },
      { name: 'Armilla AI (Swiss Re, Lloyd\'s-backed)', abbr: 'Armilla AI' },
      { name: 'Element AI / ServiceNow', abbr: 'Element AI' },
      { name: 'PointClickCare', abbr: 'PointClickCare' },
    ],
  },

  problemGrid: {
    sectionTitle: 'You Know What\'s Broken. Here\'s What We Fix.',
    sectionSubtitle:
      'These aren\'t guesses. We hear them from agency owners every week.',
    problems: [
      {
        icon: 'Clock',
        title: 'Renewals eat 80% of your time',
        description:
          'Between renewals, certificates, endorsements, and claims, your producers have no time left to prospect. New business goals don\'t hit themselves.',
      },
      {
        icon: 'TrendingDown',
        title: 'Rates are softening. Your book isn\'t growing.',
        description:
          'Commercial property rates are falling for the first time since 2017. The agencies that grew on rate increases, not new clients, are about to feel it.',
      },
      {
        icon: 'MessageSquareOff',
        title: 'Lead vendors burned you',
        description:
          'EverQuote, SmartFinancial, QuoteWizard. Shared leads, bad numbers, 40-call spam storms. You paid for "exclusive" leads that weren\'t. We don\'t sell leads. Period.',
      },
      {
        icon: 'BarChart3',
        title: 'New producers can\'t fill their own pipeline',
        description:
          'You\'re paying $40K-$60K/year in draw for a producer who can\'t generate enough activity. 70-80% of new producers fail within 2 years. Most of them fail because they can\'t prospect.',
      },
      {
        icon: 'ShieldAlert',
        title: 'Referrals are great. But they cap your growth.',
        description:
          '65% of new business comes from referrals. That\'s your foundation. But you can\'t predict or control when the next one comes in. You need a second engine.',
      },
      {
        icon: 'Ban',
        title: 'DIY cold email risks your agency domain',
        description:
          'Send cold email from your main domain and you risk blacklisting. That means your renewal notices, COI requests, and client communications all start landing in spam.',
      },
    ],
  },

  processSteps: {
    sectionTitle: 'From Zero to New Business in Four Steps',
    sectionSubtitle:
      'We handle the technical work. Your producers focus on quoting and placing coverage.',
    steps: [
      {
        icon: 'Phone',
        number: '01',
        title: 'Strategy Call',
        description:
          'We learn your target industries, commercial lines focus, geographic territory, and carrier appetite. Then we build a prospecting playbook around your agency\'s strengths.',
      },
      {
        icon: 'Settings',
        number: '02',
        title: 'Infrastructure Build',
        description:
          'We set up dedicated sending domains (separate from your agency domain), warm them for 14+ days, and configure SPF/DKIM/DMARC. Your agency\'s email reputation stays clean.',
      },
      {
        icon: 'Rocket',
        number: '03',
        title: 'Campaign Launch',
        description:
          'We build verified prospect lists by industry, class code, and geography. Then we send targeted sequences to business owners, CFOs, and ops directors. X-date targeting available for businesses approaching renewal.',
      },
      {
        icon: 'CalendarCheck',
        number: '04',
        title: 'New Business on Your Calendar',
        description:
          'Qualified commercial prospects show up on your calendar. Your producers quote, advise, and place coverage. We track meetings booked, proposals sent, and new business written.',
      },
    ],
  },

  pricingTiers: {
    sectionTitle: 'Pick the Plan That Fits Your Agency',
    sectionSubtitle:
      'All plans include dedicated sending domains, full email authentication, and domain warming. Less than the cost of one in-house producer, with zero ramp time and no turnover risk.',
    footnote: 'Month-to-month. Cancel with 30 days notice. No setup fees. One closed commercial account pays for a full month of service.',
    tiers: [
      {
        name: 'Starter',
        tagline: 'Build the Engine',
        variant: 'default',
        features: [
          '1,000-1,500 verified commercial contacts/month',
          '4 email sequences by industry vertical',
          'A/B testing across all sequences',
          'Up to 10 authenticated inboxes',
          'Full domain authentication (SPF, DKIM, DMARC)',
          'Dedicated sending domains (your agency domain stays clean)',
          'Daily campaign management',
          'Reply forwarding + qualified lead alerts',
          '2x monthly strategy sessions',
          'Monthly reporting: opens, replies, meetings booked',
        ],
      },
      {
        name: 'Growth',
        tagline: 'Fill the Calendar',
        badge: 'Most Popular',
        variant: 'highlighted',
        features: [
          'Everything in Starter, plus:',
          '2,500-3,000 verified contacts/month',
          '6 email sequences (by industry + line of business)',
          'Up to 20 inboxes, 3 sending domains',
          'X-date campaign targeting (renewal-based prospecting)',
          '10 named accounts/month (manual research + outreach)',
          'Commercial lines list building by class code',
          'Real-time Slack notifications on hot replies',
          'Weekly strategy sessions',
          'Quarterly campaign audit + sequence refresh',
        ],
      },
      {
        name: 'Scale',
        tagline: 'Own the Territory',
        variant: 'premium',
        features: [
          'Everything in Growth, plus:',
          '5,000+ verified contacts/month',
          'Unlimited email sequences across all verticals',
          'Unlimited inboxes, 5 sending domains',
          '25 named accounts/month',
          'Carrier-specific messaging (match outreach to your appetite)',
          'Omnichannel: email + LinkedIn + call scripts',
          'Signal-based follow-up (website visits, email engagement)',
          'Unlimited strategy sessions (up to 8hrs/mo)',
          'Monthly executive summary with new business tracking',
          'Quarterly business review (QBR)',
        ],
      },
    ],
  },

  statsBar: {
    stats: [
      { target: 10, prefix: '$', suffix: 'M+', label: 'Outbound Pipeline Built' },
      { target: 150, suffix: '+', label: 'Insurance Organizations Served' },
      { target: 10, suffix: '+', label: 'Years B2B Sales' },
      { target: 6, suffix: '-8 Wks', label: 'To First Meetings' },
    ],
  },

  differentiators: {
    sectionTitle: 'Why Agencies Work With Us Instead of Going It Alone',
    items: [
      {
        icon: 'Building2',
        title: 'We Actually Speak Insurance',
        description:
          'We know the difference between admitted and E&S markets, GL and WC class codes, and why your carrier just non-renewed half your book. Our founder sold loss control software to 150+ insurance organizations at Risk Control Technologies before it was acquired by Duck Creek.',
      },
      {
        icon: 'User',
        title: 'Founder-Led, Not a Call Center',
        description:
          'Moe ran outbound at Armilla AI (backed by Swiss Re and Lloyd\'s syndicates) and Element AI (acquired by ServiceNow). He oversees your campaigns personally. No junior reps learning on your dime.',
      },
      {
        icon: 'Cpu',
        title: 'Your Campaigns Run on Real Intelligence',
        description:
          'Custom automation identifies prospects by industry, class code, and geography. Personalized outreach at scale, not copy-paste templates. We can target businesses approaching their renewal date so you\'re in front of them when it matters.',
      },
      {
        icon: 'Shield',
        title: 'Your Agency Domain Stays Clean',
        description:
          'All outreach runs from dedicated sending infrastructure. Domain warming, DKIM/SPF/DMARC authentication, inbox rotation, blacklist monitoring. Your renewal notices, COI requests, and client emails are never at risk.',
      },
      {
        icon: 'XCircle',
        title: 'Month-to-Month. We Earn It.',
        description:
          'No lock-in contracts. No setup fees. If we don\'t generate qualified conversations for your producers, you stop paying. We earn your business every single month.',
      },
    ],
  },

  testimonials: {
    sectionTitle: 'The Experience Behind Every Campaign',
    sectionSubtitle:
      'Before starting WorkflowClick, our founder built outbound programs across insurance technology and enterprise SaaS. Here\'s what he brings to your agency.',
    items: [
      {
        quote:
          'Sold insurance risk management software to 150+ carriers, MGAs, and brokers at Risk Control Technologies. Sat across the table from the underwriters and risk managers your agency works with every day. RCT was later acquired by Duck Creek Technologies.',
        attribution: 'Risk Control Technologies (now Duck Creek Loss Control)',
        context: 'Insurance industry experience',
      },
      {
        quote:
          'Built the outbound pipeline from scratch for Armilla AI, a YC-backed company selling AI warranty products backed by Swiss Re, Greenlight Re, and Chaucer (Lloyd\'s of London). $4M+ generated through cold email at Element AI, which was acquired by ServiceNow.',
        attribution: 'Armilla AI + Element AI / ServiceNow',
        context: 'Insurance-backed companies',
      },
      {
        quote:
          'The cold email methodology is proven across 10+ years and 7+ B2B companies. What\'s new is applying it with real insurance knowledge. No other cold email agency has both. That\'s why we offer a pilot: 30 days, and you\'ll see the difference.',
        attribution: '$10M+ career pipeline across 7+ companies',
        context: 'Why this combination matters',
      },
    ],
  },

  auditCTA: {
    sectionTitle: 'Is Your Agency\'s Email Domain at Risk?',
    sectionSubtitle:
      'If your domain gets blacklisted, it\'s not just prospecting that stops. Your renewal notices, COI requests, and client emails all start landing in spam. Get a free deliverability audit. We\'ll check your SPF, DKIM, DMARC, and blacklist status.',
    buttonText: 'Get My Free Domain Audit',
    successMessage: 'Your audit request is in.',
    successDetail: "We'll send a detailed report within 24 hours, whether you work with us or not.",
  },

  faq: {
    items: [
      {
        question: 'How quickly will my producers see meetings on their calendar?',
        answer:
          'The first 2 weeks go to infrastructure: domain warming, authentication, and list building. Campaigns go live in week 3. Most agencies see their first qualified appointments within 3-4 weeks of kickoff. By month 2, you should have a steady flow of commercial prospects booking calls.',
      },
      {
        question: 'How is this different from EverQuote, SmartFinancial, or buying leads?',
        answer:
          'We don\'t sell leads. At all. Lead vendors sell shared, recycled consumer leads for personal lines. You compete with 5-10 other agents on every one. We build a cold email outbound program that targets commercial business owners, CFOs, and ops directors on your behalf. Every prospect is exclusive to your agency. No sharing, no reselling, no price-shopping consumers. You own the pipeline we build.',
      },
      {
        question: 'Is cold email legal for insurance agencies?',
        answer:
          'Yes. B2B cold email is governed by CAN-SPAM, which we follow to the letter: clear sender identification, physical address, opt-out in every email, and opt-out processing within 10 business days. We\'re emailing business owners about their commercial coverage needs, not marketing consumer insurance products. California\'s CDI regulates insurance advertising to consumers. B2B prospecting emails to business owners fall under CAN-SPAM, not CDI advertising rules. We also run all campaigns from dedicated domains, so your agency\'s compliance record stays clean.',
      },
      {
        question: 'Will this damage my agency\'s domain or carrier relationships?',
        answer:
          'No. All outreach runs from dedicated sending domains that are completely separate from your agency\'s primary domain. Your renewal notices, COI requests, and client emails are never at risk. We handle SPF, DKIM, DMARC authentication, domain warming, inbox rotation, and real-time blacklist monitoring on the sending domains. Your agency domain stays untouched.',
      },
      {
        question: 'How does the ROI math work? What does one account actually pay?',
        answer:
          'Take a $25,000 annual premium commercial account at 12% blended commission. That\'s $3,000 in year-one commission. At 85% retention, that client stays an average of 6.7 years, generating over $15,000 in lifetime commission. One account covers a full month of service. Everything after that is profit, and the account keeps paying you for years. The math works even at conservative close rates.',
      },
      {
        question: 'How is this different from hiring a new producer?',
        answer:
          'A new producer costs $40,000-$60,000 per year in salary draw alone, before commission splits, licensing, E&O coverage, and training. 70-80% of new producers fail within 2 years. Even the ones who make it take 2-3 years to reach validation. We deliver qualified commercial conversations in 6-8 weeks, at a fraction of the cost, with zero ramp time. If we don\'t perform, you cancel. Try that with a W-2 employee.',
      },
      {
        question: 'Can I cancel anytime?',
        answer:
          'Yes. All plans are month-to-month. No long-term contracts, no setup fees, no early termination penalties. Cancel with 30 days notice. We earn your business every month through results. If we\'re not putting qualified prospects on your producers\' calendars, you should leave.',
      },
      {
        question: 'What commercial lines can you target?',
        answer:
          'We build prospect lists for any commercial line: workers\' comp, general liability, commercial property, commercial auto, professional liability, cyber, BOPs, and more. We target by industry vertical (contractors, manufacturers, restaurants, professional services), by geography (your territory, your zip codes), and by company size. We can also build X-date campaigns that reach businesses 60-90 days before their renewal.',
      },
      {
        question: 'Have you worked with insurance agencies before?',
        answer:
          'We\'re new to serving agencies directly. We\'re not new to insurance. Our founder spent years selling insurance risk management software to 150+ carriers, MGAs, and brokers at Risk Control Technologies (now Duck Creek Loss Control). He then built the outbound engine at Armilla AI, a YC-backed company backed by Swiss Re, Greenlight Re, and Lloyd\'s syndicates. The cold email methodology is proven across $10M+ in career pipeline. The insurance knowledge is real. That\'s why we offer a pilot: 30 days, and you\'ll see the difference insurance fluency makes in every email we write.',
      },
      {
        question: 'How much does WorkflowClick cost?',
        answer:
          'Programs start from $2,500 per month, depending on your target market size, number of campaigns, and the lines of business you want to focus on. For context, an in-house producer costs $65,000-$94,000 per year in total compensation, takes months to ramp, and comes with 30%+ turnover risk. We deliver an entire outbound program for a fraction of that. On your strategy call, we\'ll give you an exact number before you commit to anything.',
      },
    ],
  },

  finalCTA: {
    headline: 'Ready to Write More Commercial Business?',
    subheadline:
      'Book a free strategy call. No pitch deck, no pressure. Just a conversation about growing your book and what it would take to put 5-10 qualified prospects on your calendar every month.',
    buttonText: 'Book a Strategy Call',
    footnote: 'You\'ll speak directly with Moe, our founder. Month-to-month. Cancel anytime.',
  },

  footer: {
    tagline:
      'Done-for-you cold email for independent insurance agencies. We build the infrastructure, write the sequences, and put qualified commercial prospects on your calendar.',
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
