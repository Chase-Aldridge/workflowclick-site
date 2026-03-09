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
    highlightedText: 'With Cold Email.',
    subheadline:
      'Done-for-you cold email for independent insurance agencies. We build the lists, write the emails, warm the domains, and deliver qualified commercial prospect signals to your team.',
    proofLine:
      'Built by a team that generated $50M+ in B2B outbound pipeline across insurance technology and enterprise SaaS',
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
          'Shared leads, bad numbers, 40-call spam storms. You paid for "exclusive" leads that weren\'t. We don\'t sell leads. Period.',
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
          'We set up dedicated sending domains (separate from your agency domain), warm them for 30+ days, and configure SPF/DKIM/DMARC. Your agency\'s email reputation stays clean.',
      },
      {
        icon: 'Rocket',
        number: '03',
        title: 'Campaign Launch',
        description:
          'We build verified prospect lists by industry, class code, and geography. Then we send targeted emails to business owners, CFOs, and ops directors. X-date targeting available for businesses approaching renewal.',
      },
      {
        icon: 'CalendarCheck',
        number: '04',
        title: 'Actionable Prospect Signals',
        description:
          'We run your outbound engine and deliver qualified prospect signals in real time. Reply notifications, engagement alerts, and warm leads go straight to your team. Your producers act on the data, quote, and place coverage.',
      },
    ],
  },

  pricingTiers: {
    sectionTitle: 'Pick the Plan That Fits Your Agency',
    sectionSubtitle:
      'All plans include dedicated sending domains, full email authentication, and domain warming. Less than the cost of one in-house producer, with zero ramp time and no turnover risk.',
    footnote: '3-month initial commitment, then month-to-month. Cancel with 30 days notice after the initial term. No setup fees. One closed commercial account pays for a full month of service.',
    tiers: [
      {
        name: 'Starter',
        tagline: 'Build the Engine',
        variant: 'default',
        features: [
          '1,000-1,500 verified commercial contacts/month',
          '4 email campaigns/month by industry vertical',
          'A/B testing across all campaigns',
          'Up to 10 inboxes, 5 sending domains',
          'Full domain authentication (SPF, DKIM, DMARC)',
          'Dedicated sending domains (your agency domain stays clean)',
          'Daily campaign management',
          'Reply forwarding + qualified lead alerts',
          '2x monthly strategy sessions',
          'Daily reporting: opens, replies, prospect signals',
          'Monthly executive summary',
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
          '10\u201315 email campaigns/month',
          'Up to 50 inboxes, 10 sending domains',
          'X-date campaign targeting (renewal-based prospecting)',
          '10 named accounts/month (manual research + outreach)',
          'Commercial lines list building by class code',
          'Real-time Slack notifications on hot replies',
          'Weekly strategy sessions',
          'Quarterly campaign audit + email refresh',
        ],
      },
      {
        name: 'Scale',
        tagline: 'Own the Territory',
        variant: 'premium',
        features: [
          'Everything in Growth, plus:',
          '5,000+ verified contacts/month',
          'Up to 25 email campaigns/month across all verticals',
          'Up to 100 inboxes, 20 sending domains',
          '25 named accounts/month',
          'Omnichannel: email + LinkedIn + call scripts',
          'Signal-based follow-up (website visits, email engagement)',
          'Real-time SMS/WhatsApp/Telegram notifications',
          'Dedicated Account Manager',
          'Monthly executive summary with new business tracking',
          'Quarterly business review (QBR)',
        ],
      },
    ],
  },

  statsBar: {
    stats: [
      { target: 50, prefix: '$', suffix: 'M+', label: 'Outbound Pipeline Built' },
      { target: 7, suffix: '+', label: 'B2B Companies' },
      { target: 25, suffix: '+', label: 'Years B2B Sales' },
      { target: 1000, suffix: '+', label: 'Campaigns Managed' },
    ],
  },

  differentiators: {
    sectionTitle: 'Why Insurance Agencies Work With Us Instead of Doing It Alone',
    items: [
      {
        icon: 'Building2',
        title: 'We Actually Speak Insurance',
        description:
          'We know the difference between admitted and E&S markets, GL and WC class codes, and why your carrier just non-renewed half your book. Our founder sold loss control software at Risk Control Technologies (acquired by Duck Creek) and built outbound at Armilla AI, backed by Swiss Re, Greenlight Re, and Chaucer.',
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
          'Custom automation identifies prospects by industry, class code, and geography. Personalized outreach at scale, not copy-paste templates. We work with the data you provide us to target businesses approaching their renewal date \u2014 getting your value prop in front of the hand-picked leads you want to do business with.',
      },
      {
        icon: 'Shield',
        title: 'Your Insurance Agency Domain Stays Clean',
        description:
          'All outreach runs from dedicated sending infrastructure. Domain warming, DKIM/SPF/DMARC authentication, inbox rotation, blacklist monitoring. Your renewal notices, COI requests, and client emails are never at risk.',
      },
      {
        icon: 'XCircle',
        title: 'Month-to-Month. We Earn It.',
        description:
          'Initial 3-month commitment, then month-to-month. No setup fees. After the first 3 months, if we\'re not generating qualified conversations for your producers, cancel with 30 days notice.',
      },
    ],
  },

  testimonials: {
    sectionTitle: 'The Experience Behind Every Campaign',
    sectionSubtitle:
      'Before starting WorkFlowClick, our founder built outbound programs across insurance technology and enterprise SaaS. Here\'s what he brings to your agency.',
    items: [
      {
        quote:
          'Sold insurance risk management software to carriers, MGAs, and brokers at Risk Control Technologies. Sat across the table from the underwriters and risk managers your agency works with every day. RCT (Duck Creek).',
        attribution: 'RCT (Duck Creek)',
        context: 'Insurance industry experience',
      },
      {
        quote:
          'Built the outbound pipeline from scratch for Armilla AI, a YC-backed company selling AI warranty products backed by Swiss Re, Greenlight Re, and Chaucer (Lloyd\'s of London). $20M+ generated through cold email at Element AI, which was acquired by ServiceNow.',
        attribution: 'Armilla AI + Element AI / ServiceNow',
        context: 'Insurance-backed companies',
      },
      {
        quote:
          'The cold email methodology is proven across 11+ years and 7+ B2B companies. What\'s new is applying it with real insurance knowledge. No other cold email agency has both.',
        attribution: '$50M+ career pipeline across 7+ companies',
        context: 'Why this combination matters',
      },
    ],
  },

  auditCTA: {
    sectionTitle: 'How Big Is Your Untapped Market?',
    sectionSubtitle:
      'Get a free custom market report for your territory. We\'ll analyze prospect density by industry, estimate opportunity size, and show you exactly where the commercial accounts are hiding in your zip codes.',
    buttonText: 'Get My Free Market Report',
    successMessage: 'Your market report request is in.',
    successDetail: "We'll send a custom territory analysis within 48 hours, whether you work with us or not.",
  },

  faq: {
    items: [
      {
        question: 'How quickly will we start seeing results?',
        answer:
          'The first 30+ days go to infrastructure: domain warming, authentication, and list building. Once campaigns go live, you\'ll start receiving prospect engagement signals right away. Replies, click activity, and warm leads get forwarded to your team as they come in.',
      },
      {
        question: 'How is this different from buying internet leads?',
        answer:
          'We don\'t sell leads. At all. Lead vendors sell shared, recycled leads. You could be competing with 5-10 other agents on every one. We build a cold email outbound program that targets commercial business owners, CFOs, and ops directors on your behalf. You get to pick the prospects we go after. You own the pipeline we build for you.',
      },
      {
        question: 'Is cold email legal for insurance agencies?',
        answer:
          'Yes. B2B cold email is governed by CAN-SPAM, which we follow to the letter: clear sender identification, physical address, opt-out in every email, and opt-out processing within 10 business days. We\'re emailing business owners about their commercial coverage needs, not marketing consumer insurance products. We run all campaigns from dedicated domains to protect your main domain from potential blacklisting.',
      },
      {
        question: 'Will this damage my agency\'s domain or carrier relationships?',
        answer:
          'No. All outreach runs from dedicated sending domains that are completely separate from your agency\'s primary domain. Your renewal notices, COI requests, and client emails are never at risk from our cold email campaigns because we don\'t use your business inboxes. We handle SPF, DKIM, DMARC authentication, domain warming, inbox rotation, and real-time blacklist monitoring on the sending domains. Your insurance agency domain stays untouched.',
      },
      {
        question: 'How does the ROI math work? What does one account actually pay?',
        answer:
          'Take a $25,000 annual premium commercial account at 12% blended commission. That\'s $3,000 in year-one commission. At 85% retention, that client stays an average of 6.7 years, generating over $15,000 in lifetime commission. One account could cover a full month of service. Everything after that is profit, and the account keeps paying you for years. The math works even at conservative close rates.',
      },
      {
        question: 'Can I cancel anytime?',
        answer:
          'All plans start with a 3-month initial commitment. That\'s the time we need to build your sending infrastructure, develop your ICP, warm domains, write and test copy, and optimize the engine. After the first 3 months, it\'s month-to-month. Cancel with 30 days notice. No early termination penalties. We earn your business every month through results.',
      },
      {
        question: 'What commercial lines can you target?',
        answer:
          'We build prospect lists for any commercial line: workers\' comp, general liability, commercial property, commercial auto, professional liability, cyber, BOPs, and more. We target by industry vertical (contractors, manufacturers, restaurants, professional services), by geography (your territory, your zip codes), and by company size. We can also build X-date campaigns that reach businesses 60-90 days before their renewal. The one thing we don\'t touch is personal lines \u2014 we\'re a B2B lead generation agency, not B2C.',
      },
      {
        question: 'Have you worked with insurance agencies before?',
        answer:
          'Yes. Our founder spent years selling insurance risk management software at Risk Control Technologies (now Duck Creek Loss Control). He then built the outbound engine at Armilla AI, backed by Swiss Re, Greenlight Re, and Chaucer (Lloyd\'s of London). He\'s connected with executives who oversaw AI projects at Swiss Re, collaborated with leaders at 180 Intermediaries, and has immersed himself in the insurance world at this level for years. The cold email methodology is proven across $50M+ in career pipeline. The insurance knowledge is real.',
      },
    ],
  },

  finalCTA: {
    headline: 'Ready to Write More Commercial Business?',
    subheadline:
      'Book a free strategy call. No pitch deck, no pressure. Just a conversation about growing your commercial book with a dedicated outbound engine built for your territory.',
    buttonText: 'Book a Strategy Call',
    footnote: 'You\'ll speak directly with Moe, our founder. 3-month initial commitment, then month-to-month.',
  },

  footer: {
    tagline:
      'Done-for-you cold email for independent insurance agencies. We build the infrastructure, write the emails, and deliver qualified commercial prospect signals to your team.',
  },
}

// ---------------------------------------------------------------------------
// Insurtech content
// ---------------------------------------------------------------------------
const insurtechContent: AudienceContent = {
  label: 'Insurtech',
  shortLabel: 'Insurtech',

  hero: {
    headline: 'Grow Your Pipeline with Carriers, Brokers, MGAs, and Other Insurance Prospects.',
    highlightedText: 'Without Cold Calling.',
    subheadline:
      'Done-for-you cold email infrastructure for insurtech companies. We handle everything from domain warming to sending emails.',
    proofLine:
      'Backed by $50M+ in pipeline generated across B2B sales programs',
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
          'Traditional carriers and brokers are skeptical of new tech. Getting a first meeting feels impossible.',
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
          'Your product messaging sounds great to engineers but means nothing to a Chief Underwriting Officer.',
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
          'Insurance-native copy that speaks the language of carriers, brokers, MGAs, and insurance agency principals.',
      },
      {
        icon: 'CalendarCheck',
        number: '04',
        title: 'Actionable Prospect Signals',
        description:
          'We run your outbound engine and deliver qualified prospect signals in real time. Reply notifications, engagement alerts, and warm leads go straight to your team. You act on the data and close deals.',
      },
    ],
  },

  pricingTiers: {
    sectionTitle: 'Choose Your Growth Speed',
    sectionSubtitle:
      'All plans include domain warming, email authentication, and dedicated strategy support.',
    footnote: '3-month initial commitment, then month-to-month. Cancel with 30 days notice after the initial term. No setup fees.',
    tiers: [
      {
        name: 'Bronze',
        tagline: 'The Machine',
        variant: 'default',
        features: [
          '1,000-1,500 verified contacts/month',
          '4 email campaigns/month by industry vertical',
          'A/B testing across all sequences',
          'Up to 10 inboxes, 5 sending domains',
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
          '10\u201315 email campaigns/month',
          'Up to 50 inboxes, 10 sending domains',
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
          'Up to 25 email campaigns/month across all segments',
          'Up to 100 inboxes, 20 sending domains',
          '25 named accounts/month',
          'Full Slack suite + custom alert rules',
          'Signal-based follow-up playbook',
          'Cold call script development',
          'Omnichannel (email + LinkedIn + calls)',
          'Dedicated Account Manager',
          'Monthly executive summary',
          'Quarterly business review (QBR)',
        ],
      },
    ],
  },

  statsBar: {
    stats: [
      { target: 50, prefix: '$', suffix: 'M+', label: 'Pipeline Generated' },
      { target: 25, suffix: '+', label: 'Collective Years B2B Sales' },
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
'Moe sold insurance risk management software at Risk Control Technologies (acquired by Duck Creek), built outbound at Armilla AI (one of the first AI insurance product companies), and regularly attends insurance conferences like RIMS, ITC New York, and InsureTech Connect. He personally oversees your campaigns. No junior reps learning on your dime.',
      },
      {
        icon: 'Cpu',
        title: 'AI-Augmented Infrastructure',
        description:
'Real-time signal tracking, custom automation, and intelligent prospect identification. We use tools like DiscoLike, Apollo, Instantly, and AI augmentation to power your outreach. Your campaigns run on real intelligence, not copy-paste templates. As an insurtech, you understand sales tools. We speak your language.',
      },
      {
        icon: 'Zap',
        title: 'Built for Insurtech',
        description:
'We understand the insurance buyer. Carriers, MGAs, agencies, brokers, captives, government risk pools. Our messaging translates your tech into business outcomes they care about. Real-time signal tracking means you know when prospects engage.',
      },
      {
        icon: 'Shield',
        title: 'Full-Stack Deliverability',
        description:
          'Domain warming, DKIM/SPF/DMARC authentication, inbox rotation, blacklist monitoring. We handle the entire technical stack.',
      },
      {
        icon: 'XCircle',
        title: 'Flexible After Month 3',
        description:
          'The first contract is 3 months minimum. That\'s what it takes to build infrastructure, develop your ICP, refine messaging, and start seeing results. After the initial 3 months, it\'s month-to-month with 30-day notice. If we\'re not delivering, you leave. We earn your business every single month.',
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
          'Generated over $20M in pipeline through cold email campaigns at Element AI, leading to acquisition by ServiceNow.',
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
          'Scaled cold email programs across insurance technology, driving consistent qualified meeting flow for enterprise sales teams.',
        attribution: 'Risk Control Technologies (acquired by Duck Creek)',
        context: "From Moe's career",
      },
    ],
  },

  auditCTA: {
    sectionTitle: 'Is Your Email Domain Healthy?',
    sectionSubtitle:
      "Your company domain reputation affects every email you send to MGAs, insurance agencies, brokers, carriers, captives, government risk pools, and other insurance prospects. Find out where you stand.",
    buttonText: 'Get My Free Audit',
    successMessage: 'Your audit request has been received.',
    successDetail: "We'll send you a detailed report within 24 hours.",
  },

  faq: {
    items: [
      {
        question: 'How quickly will I see results?',
        answer:
          'The first 30+ days go to infrastructure: domain warming, authentication, and list building. Once campaigns go live, you\'ll start receiving prospect engagement signals right away. Replies, click activity, and prospect engagement signals get forwarded to your team as they come in.',
      },
      {
        question: 'Do I need to provide my own domains and inboxes?',
        answer:
          'Yes. You provide the sending platform (either Apollo or Instantly), plus the domains and inboxes. We handle all the technical setup: domain warming, SPF/DKIM/DMARC authentication, inbox configuration, and ongoing deliverability monitoring. We guide you through purchasing if needed.',
      },
      {
        question: 'Can you target carriers, MGAs, and agencies?',
        answer:
          'Yes. We can target anyone in the insurance buyer chain: carriers, MGAs, wholesale brokers, retail agencies, captives, government risk pools, or any combination. Anyone you\'re chasing, we can chase. We research the right titles, departments, and decision-makers for your product.',
      },
      {
        question: 'How is this different from hiring an SDR?',
        answer:
          'An in-house SDR costs $60K-$80K+ in salary alone, takes months to ramp up, and requires management overhead. We provide an entire outbound engine (infrastructure, copy, strategy, execution) for a fraction of the cost, with faster results and no HR headaches.',
      },
      {
        question: 'We already have an SDR team. Can we still use your cold email services?',
        answer:
          'Yes, this is actually the best setup. Instead of your SDRs worrying about list building, messaging, and reply management, they focus on what they\'re meant to do: make calls. Our cold email runs alongside, generates signals, and pushes warm prospects to your SDRs so they can act immediately. We complement your team, not replace it.',
      },
      {
        question: 'Will the messaging sound too salesy for insurance buyers?',
        answer:
          'No. Insurance decision-makers are conservative and skeptical of hype. Our copy is professional, direct, and focused on business outcomes. We avoid the tech jargon and buzzwords that turn off traditional buyers.',
      },
      {
        question: 'Can I cancel anytime?',
        answer:
          'Yes, with one caveat. When you sign up, there\'s a 3-month minimum commitment. We need that time to set up infrastructure, develop your ICP, refine value propositions, write copy, test, and optimize the engine. After those 3 months, it\'s month-to-month with 30-day notice. You can take over yourself or continue with us.',
      },
      {
        question: 'How do you protect my domain reputation?',
        answer:
          'We will never send a cold email from your main domain. Ever. We isolate your main domain completely from sending domains. All cold email goes out from separate purchased domains with their own inboxes. This is industry standard. Best practice. Your main company domain, brand, and reputation stay completely protected.',
      },
      {
        question: 'What does a typical campaign look like?',
        answer:
          'A typical campaign includes researched and verified prospect lists matched to your ideal buyer profile, 4-7 step email sequences with insurance-native messaging, A/B testing across subject lines and copy, and daily monitoring with optimization. You receive regular reports on open rates, reply rates, and prospect engagement signals tracked.',
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
