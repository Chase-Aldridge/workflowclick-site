import { Container } from '@/components/ui/Container'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LinkedIn Campaign Review - March 2026',
  robots: { index: false, follow: false },
}

type Post = {
  num: number
  title: string
  funnel: 'TOFU' | 'MOFU' | 'BOFU'
  type: string
  hook: string
  message: string
  data: string[]
  authority: string
  firstComment: string
}

type Week = {
  num: number
  theme: string
  narrative: string
  posts: Post[]
}

const weeks: Week[] = [
  {
    num: 1,
    theme: 'The Math Nobody Does',
    narrative:
      'Establish the problem. Most InsurTech vendors lose money on events because they never do the real math. This week creates urgency by exposing the true cost structure.',
    posts: [
      {
        num: 1,
        title: 'The $74,000 Conference',
        funnel: 'TOFU',
        type: 'Data',
        hook: 'Open with the fully-loaded cost figure nobody calculates. Most vendors think a conference costs $25K for the booth. The real number is $35,000-$74,000+.',
        message:
          'The true all-in cost of exhibiting at a major InsurTech conference is 2-3x what most vendors budget because they ignore travel, opportunity cost, and staff time.',
        data: [
          'All-in exhibitor cost for a 2-person team: $35,000-$74,000+ (Everstage)',
          'Daily quota output per rep: $3,083/day on a $740K quota',
          'Pulling 2 reps for 4 days = ~$24,666 in pipeline days lost',
        ],
        authority: 'None this post. Pure data. Let the numbers do the work.',
        firstComment:
          'Break down the cost stack: booth ($25K-$40K) + travel ($3K-$5K) + swag ($2K-$4K) + opportunity cost ($5K-$25K). Ask: "What\'s the biggest cost you didn\'t account for at your last event?"',
      },
      {
        num: 2,
        title: '80% of Your Event Leads Get Zero Follow-Up',
        funnel: 'TOFU',
        type: 'Data',
        hook: 'Lead with the devastating stat: 80% of trade show leads get zero follow-up. This wastes $5.4 billion annually in U.S. B2B alone.',
        message:
          'The biggest source of event ROI failure is not the booth, the location, or the product. It is the systematic failure to follow up.',
        data: [
          '80% of trade show leads get zero follow-up (CEIR)',
          '$5.4B wasted annually from failed follow-up (SurFox)',
          '40% of exhibitors wait 3-5 days to follow up (Trade Show Labs)',
          '38% take longer than 6 days (momencio)',
        ],
        authority:
          '"I\'ve been attending InsurTech events since 2018. The business card stack sitting on someone\'s desk for 3 weeks is the most expensive souvenir in the industry."',
        firstComment:
          'Add the 24-hour decay stat as a teaser: "And when you DO follow up matters more than most people realize. More on that later this week."',
      },
      {
        num: 3,
        title: 'The Booth Budget Trap',
        funnel: 'TOFU',
        type: 'Contrarian',
        hook: 'Challenge the assumption that a bigger booth means better results. Companies with average booths and exceptional pre-event outreach dominate.',
        message:
          'Budget reallocation, moving 20-30% from booth upgrades to SDR time and list enrichment, is the highest-leverage move most vendors can make.',
        data: [
          'Booth space = ~33% of total exhibitor budget (Cvent)',
          'Floor space rate: $20-$40/sq ft (Cvent)',
          'Shift 20-30% of booth budget to pre-event outreach',
        ],
        authority:
          '"I\'ve watched vendors at ITC Vegas pour $40K+ into a booth that generated less pipeline than a $2,000 dinner for 15 people."',
        firstComment:
          'Reference the satellite event approach: "The companies I\'ve seen generate the most pipeline don\'t have the biggest booths. They host the best dinners."',
      },
      {
        num: 4,
        title: 'What a $25,000 ITC Vegas Sponsorship Actually Buys You',
        funnel: 'TOFU',
        type: 'Data',
        hook: 'ITC Vegas sponsorship starts at $25K with 4 tickets and a booth. Less than 10% of standalone booth applications are approved. Reveals pay-to-play economics.',
        message:
          'The flagship InsurTech event has specific economics vendors should understand before committing. Minimum viable investment is north of $30K.',
        data: [
          'ITC Vegas sponsorship starts at $25,000 (insuretechconnect.com)',
          'Less than 10% standalone booth approval rate',
          '9,000+ attendees, 600-700+ exhibitors',
          'Per-person travel for Las Vegas: $1,050-$2,100',
          'Booth costs increased 10-15% from 2023-2024',
        ],
        authority:
          'Light touch: "ITC Vegas is the event everyone asks about. Here\'s what the investment actually looks like."',
        firstComment:
          'List the 3 highest-volume InsurTech events: ITC Vegas (9,000+), RIMS RISKWORLD (11,000+), Insurtech Insights USA (6,000+).',
      },
      {
        num: 5,
        title: 'The Opportunity Cost Nobody Calculates',
        funnel: 'TOFU',
        type: 'Story',
        hook: 'What happens to your pipeline when you pull two AEs off their desks for four days? An AE on a $740K quota produces ~$3,083/day. That math adds up fast.',
        message:
          'Event cost is not just booth + travel. It is also the pipeline activity that does not happen while your sellers are at the conference.',
        data: [
          'B2B AE average quota: $740K/year (Everstage)',
          'Daily pipeline value: $3,083/day',
          'Only 30% of a rep\'s time is actual selling',
          '2 reps x 4 days = ~$24,666 in pipeline days lost',
        ],
        authority:
          '"When I was leading sales at Armilla AI, I felt this every time we committed to an event. The question was never just \'can we afford the booth?\' It was \'can we afford to stop selling for four days?\'"',
        firstComment:
          'Propose the test: "Before committing, calculate: (Your AE\'s annual quota / 240) x number of reps x days at event. That\'s the real floor on what this event needs to return."',
      },
      {
        num: 6,
        title: '94% of Marketers Say They Fail at Event Lead Conversion',
        funnel: 'MOFU',
        type: 'Framework',
        hook: '94% of marketers believe their company fails to convert event leads. Not a rounding error. An industry-wide admission. But vendors who measure rigorously achieve 5x returns.',
        message:
          'The difference between vendors who get ROI and those who don\'t is whether they have a structured system for everything before and after the event. 80% of strategy should be pre- and post-event.',
        data: [
          '94% of marketers believe their company fails to convert event leads',
          'Companies with effective ROI measurement achieve 5x greater marketing returns (Markletic)',
          '71% of event marketers cannot connect event spend to revenue (Ticket Fairy)',
          '80% of strategy should be pre- and post-event',
        ],
        authority:
          '"After 8 years of InsurTech events, I can tell you exactly what separates the vendors who walk away with pipeline from the ones who walk away with nothing but a lighter wallet. It\'s all in the system."',
        firstComment:
          '"This is the transition point. Week 1 was the problem. Starting tomorrow, we get into what the top vendors actually do differently, starting 90 days before the event."',
      },
    ],
  },
  {
    num: 2,
    theme: 'The 90-Day Countdown',
    narrative:
      'Shift from problem to preparation. Introduce the timeline framework that best-in-class event prospectors follow. Build the pre-event operating system.',
    posts: [
      {
        num: 7,
        title: 'The Event Is Won 90 Days Before It Starts',
        funnel: 'TOFU',
        type: 'Contrarian',
        hook: 'Challenge the assumption that events are about what happens at the conference. The real work starts 90 days out. Walk-up traffic is a bonus, not the plan.',
        message:
          'Begin pre-event outreach 60-90 days before. Senior decision-makers fill calendars early. The most valuable attendees receive dozens of requests. Early movers win.',
        data: [
          'Pre-event outreach delivers 6x more meetings than floor-only (Vendelux)',
          '81% of trade show attendees have buying authority (CEIR)',
          'Pre-show invitations produce 30% increase in qualified leads vs walk-up (NRF)',
        ],
        authority: 'Let the framework speak. Tone should convey "I\'ve learned this through repetition."',
        firstComment:
          '"Here\'s the timeline I use. Tomorrow I\'ll break down exactly what happens at each milestone: 90, 60, 45, 30, 14, and 7 days out."',
      },
      {
        num: 8,
        title: 'The 90/60/45/30/14/7 Day Framework',
        funnel: 'MOFU',
        type: 'Framework',
        hook: 'The complete preparation timeline in scannable format. Most actionable post in the campaign. Readers can screenshot and use immediately.',
        message:
          'Event preparation is a structured sequence: defining ICP (90 days), warming relationships (60), launching sequences (45), securing meetings (30), confirming logistics (14), final prep (7).',
        data: [
          '72% of attendees prefer personalized invitations over generic blasts',
          '94% of event teams say pre-event email is most critical content (Demand Gen Report)',
        ],
        authority:
          '"This is the framework I\'ve refined over 8 years of InsurTech event prospecting. It works whether you\'re sponsoring ITC Vegas or attending TMPAA as a guest."',
        firstComment:
          'Offer to elaborate on any milestone. List the 6 milestones as quick reference.',
      },
      {
        num: 9,
        title: 'Building Your Target List Before the Conference',
        funnel: 'TOFU',
        type: 'Framework',
        hook: 'Most-asked question: "How do I get the attendee list?" Answer is more nuanced than expected. 5 distinct sources of attendee intelligence.',
        message:
          'You don\'t need the official list. Exhibitor lists are public. LinkedIn event pages show RSVPs. Conference apps let you browse. Intent data identifies companies researching relevant topics.',
        data: [
          '67% of attendees are completely new prospects (Wave Connect)',
          'Conference apps: Whova, Swapcard, Bizzabo',
          'Convert exhibitor list to CSV and enrich (UnifyGTM tactic)',
        ],
        authority:
          '"At WorkflowClick, this is literally what we do. Build verified, enriched contact lists from signals. Event exhibitor lists are one of the highest-signal inputs we work with."',
        firstComment:
          'List 5 sources in order of reliability: 1) Sponsor-provided list, 2) Conference app directory, 3) LinkedIn event page, 4) Public exhibitor list + enrichment, 5) Intent data overlay.',
      },
      {
        num: 10,
        title:
          'Why the Best Event Prospectors Start on LinkedIn, Not Email',
        funnel: 'TOFU',
        type: 'Data',
        hook: 'Counterintuitive: best pre-event outreach starts with LinkedIn engagement 45+ days before, not email. Building name recognition before any ask.',
        message:
          'LinkedIn warms cold email. Connect, wait 2-3 days, then send first email. The 80/20 rule: 80% delivering value, 20% direct outreach.',
        data: [
          '80/20 rule for social selling: 80% value, 20% outreach',
          'LinkedIn connections with shared conference context have elevated acceptance rates',
          'B2B cold email open rates dropped from 36% to 27.7% in one year (Martal)',
        ],
        authority:
          'Light touch: "This is the sequence that works. LinkedIn first, then email. Not the other way around."',
        firstComment:
          '3-step framework: 1) Follow and engage 45 days out, 2) Connect with conference context 30 days out, 3) Launch email sequence 14 days out.',
      },
      {
        num: 11,
        title: 'Tiering Your Target Accounts (Not All Leads Are Equal)',
        funnel: 'TOFU',
        type: 'Framework',
        hook: 'Most vendors treat every conference attendee the same. A three-tier model separates accounts worth a dinner from those that get a follow-up email.',
        message:
          'Tier 1: existing pipeline + former customers. Tier 2: ICP accounts showing intent. Tier 3: influencers and referral sources. Each tier gets different investment.',
        data: [
          '81% of trade show attendees have buying authority (CEIR)',
          'Warm leads convert 30-50% vs cold calling 1-3% (Reach Marketing)',
          '52% of business leaders say events deliver greatest ROI (Trade Show Labs)',
        ],
        authority: 'Pure framework post. Authority is in the specificity of the model.',
        firstComment:
          '"The biggest mistake I see: treating Tier 3 contacts like Tier 1. The dinner table has 12 seats. Choose carefully."',
      },
      {
        num: 12,
        title: 'The Pre-Event Email Sequence That Gets Responses',
        funnel: 'MOFU',
        type: 'Framework',
        hook: 'Documented case: 76% open rate and 30% reply rate using event-contextualized sequences. That is 6x the average cold email reply rate.',
        message:
          '4-touch sequence: Connection play (45 days), Value add (30 days), Urgency frame (14 days), Logistics confirmation (3-5 days). Each touch has a specific job.',
        data: [
          '76% open rate, 30% reply rate case study',
          'Cold email average reply rate: 1-5% (Belkins/Instantly)',
          '94% of event teams say pre-event email is most critical (Demand Gen Report)',
          'Pre-scheduled appointments produce 30% increase in qualified leads (NRF)',
        ],
        authority:
          '"We build these sequences for InsurTech clients at WorkflowClick. The shared conference context turns cold outreach into warm conversation."',
        firstComment:
          'Subject line framework: Touch 1 = "[Conference] - quick question", Touch 2 = reference their company, Touch 3 = "Still have [X] slots", Touch 4 = confirmation only.',
      },
    ],
  },
  {
    num: 3,
    theme: 'The Meeting Machine',
    narrative:
      'Get tactical. Show exactly how to turn preparation into pre-booked meetings. Introduce satellite events as highest-ROI move.',
    posts: [
      {
        num: 13,
        title: 'Pre-Booked Meetings vs. Walk-Up Traffic',
        funnel: 'TOFU',
        type: 'Data',
        hook: 'Teams using enriched attendee lists and pre-event outreach report 6x more meetings booked than floor-only. Not marginal. The difference between 5 meetings and 30.',
        message:
          'Pre-booked meetings outperform walk-ups on every metric: higher conversion, better use of staff time, larger deal sizes, shorter sales cycles.',
        data: [
          'Pre-event outreach = 6x more meetings vs floor-only (Vendelux)',
          'Opportunities with live meetings have 32-day shorter deal cycles (Outreach.io)',
          'Warm leads convert 50% more often (Reach Marketing)',
          'Cost per opportunity with ICP targeting: $2,000-$3,000 (Luminik)',
        ],
        authority: 'None. Pure data. Let the numbers create conviction.',
        firstComment:
          '"The 6x number isn\'t theoretical. It\'s from teams using enriched attendee data to run personalized pre-event outreach."',
      },
      {
        num: 14,
        title:
          'How to Get Attendee Data When Organizers Won\'t Share the List',
        funnel: 'TOFU',
        type: 'Framework',
        hook: '"Can I get the attendee list?" Usually no, unless you\'re a sponsor. But there are 5 legitimate ways to build a high-quality target list.',
        message:
          'Exhibitor lists are always public. LinkedIn event pages show attendees. Conference apps let you browse. Intent data reveals companies researching topics. Enrich company names into contacts.',
        data: [
          '67% of attendees are net-new prospects (Wave Connect)',
          'Apps: Whova, Swapcard, Bizzabo',
          'Enrichment tactic: exhibitor list to CSV to contacts (UnifyGTM)',
        ],
        authority:
          '"This is the muscle we\'ve built at WorkflowClick. Turning raw company signals into verified, enriched contact lists."',
        firstComment:
          'Step-by-step enrichment: 1) Pull exhibitor list, 2) Filter by ICP, 3) Cross-reference CRM, 4) Enrich with contact data, 5) Stack-rank by fit + intent + deal size.',
      },
      {
        num: 15,
        title: 'The Satellite Event Play (Dinners > Booths)',
        funnel: 'TOFU',
        type: 'Contrarian',
        hook: 'An executive dinner with 20 C-suite attendees often delivers more ROI than a sprawling expo hall. 59% of marketers are planning more small, hosted events.',
        message:
          'Satellite events let you control the environment, eliminate competitors from the conversation, and position as the host instead of the vendor asking for attention.',
        data: [
          'Planning for large events dropped 12% YoY, 59% plan more small hosted events',
          'Executive dinner delivers more ROI per dollar than expo hall',
          'You control the environment: no distractions, no competitors nearby',
        ],
        authority:
          '"I\'ve seen more deals close from a $2,000 dinner at RIMS RISKWORLD than from a $50,000 booth at the same event."',
        firstComment:
          '4 satellite event formats: Executive Dinner (8-15), Customer Roundtable (8-12), Happy Hour (25-75), Pre-Conference Breakfast (10-20). Breakfasts are most overlooked.',
      },
      {
        num: 16,
        title: 'The No-Booth Playbook',
        funnel: 'TOFU',
        type: 'Framework',
        hook: 'You don\'t need a booth to generate pipeline. Some of the most effective event prospectors attend as guests, host off-site events, and book meeting rooms in the hotel lobby.',
        message:
          'For vendors who can\'t afford $25K+ sponsorship: attend networking events, post LinkedIn content, host a happy hour or breakfast, book a nearby meeting room. Often generates comparable pipeline.',
        data: [
          'InsurTech vendors becoming more selective, forgoing shows with limited ROI (Genasys)',
          'ITC Vegas sponsorship minimum: $25,000',
          'Happy hour or breakfast = lower cost, higher conversation density vs booth',
        ],
        authority:
          '"Not every InsurTech startup can drop $25K on ITC Vegas. But every startup can host a dinner for 12 target accounts at a restaurant near the venue."',
        firstComment:
          '"The no-booth strategy works best with aggressive pre-event outreach. The booth is just a physical meeting point. If your meetings are already booked, the booth becomes optional."',
      },
      {
        num: 17,
        title: 'Your Conference Landing Page Is Missing',
        funnel: 'TOFU',
        type: 'Social Proof',
        hook: 'If you\'re driving people to your homepage from a conference, you have no way to measure event-specific conversion. Every conference deserves its own landing page.',
        message:
          'A conference-specific landing page enables attribution and focuses the conversion path. Elements: headline for conference audience, 2-3 sentences, social proof, Calendly link, booth number.',
        data: [
          '71% of event marketers cannot connect spend to revenue (Ticket Fairy)',
          '86% of event-led companies can attribute events to revenue vs 64% non-event-led (Bizzabo)',
        ],
        authority: 'None. Tactical education. Authority is in knowing what to build.',
        firstComment:
          'Landing page template: "Attending [Conference]? [One-sentence value prop]. [Social proof stat]. Book a 20-minute meeting: [Calendly link]. Booth #[X] / Join us at [satellite event]."',
      },
      {
        num: 18,
        title: 'Book the Dinner 30 Days Out (Or Lose the Venue)',
        funnel: 'TOFU',
        type: 'Story',
        hook: 'What happens when you wait until the last week to plan a satellite event: every decent restaurant is booked, private dining rooms are gone, you\'re stuck in a hotel lobby.',
        message:
          'Satellite event logistics require 30+ days of planning: booking venue, curating invite list from Tier 1/2 accounts, sending invitations 3-4 weeks early, assigning a dedicated host.',
        data: [
          'WSIA Annual Marketplace: 8,300+ attendees in San Diego',
          'ITC Vegas: 9,000+ at Mandalay Bay',
          'RIMS RISKWORLD: 11,000+ in Philadelphia',
          'Book venue 30+ days out, send invites 3-4 weeks early',
        ],
        authority:
          '"I learned this the hard way. If you\'re planning a dinner around ITC Vegas, you should already be looking at restaurants near Mandalay Bay."',
        firstComment:
          'Timing advice: "RIMS is May 3-6. If you haven\'t booked your venue, this week is the deadline. ITC Vegas is Sep 29 - Oct 1. You have time, but start scouting now."',
      },
    ],
  },
  {
    num: 4,
    theme: 'Day-Of and After',
    narrative:
      'The execution layer. What happens at the conference and in the 24-48 hours after. The 53% vs 17% conversion stat is the centerpiece.',
    posts: [
      {
        num: 19,
        title: 'The Hallway Strategy (85% of Success Is Staff Execution)',
        funnel: 'TOFU',
        type: 'Data',
        hook: '85% of exhibitor success hinges on booth staff performance. But the most valuable conversations happen outside the booth: hallways, session breaks, coffee stations.',
        message:
          'Treat hallways, sessions, and lunches as primary prospecting ground. Role separation, 2-3 hour rotations, and morning briefings on top 10 targets determine outcomes.',
        data: [
          '85% of exhibitor success hinges on booth staff (Exponents)',
          'Trained staffers convert at 2:1 vs untrained (Exponents)',
          'Attendees spend average 5.5 hours at events (Trade Show Labs)',
        ],
        authority:
          '"At InsurTech events, the best conversations I\'ve ever had were over coffee between sessions. Not at any booth. The hallway is the real conference."',
        firstComment:
          '5-step hallway framework: 1) Context establishment, 2) One genuine question, 3) Listen, 4) Connect your work only if genuine fit, 5) Propose specific next step.',
      },
      {
        num: 20,
        title: '50 Quality Conversations Beat 500 Badge Scans',
        funnel: 'TOFU',
        type: 'Contrarian',
        hook: 'Scanning 500 badges means nothing if none convert. Vendors chasing scan volume optimize for vanity metrics. The winners have 50 deep conversations with context logged.',
        message:
          'Effective lead capture needs speed AND context: who they are, what they want, what happens next. Badge scan + 30-60 second voice note + Hot/Warm/Cold grading.',
        data: [
          'Only 6% of exhibitors are confident in converting leads (Trade Show Labs)',
          'Notes within 5 minutes are 3-4x more accurate than end-of-day notes',
        ],
        authority: 'None. Let the principle speak.',
        firstComment:
          'Lead grading: Hot = buying intent + budget authority + timeline. Warm = relevant role + pain + no timeline. Cold = interesting company + wrong person (hand to nurture).',
      },
      {
        num: 21,
        title: 'The 24-Hour Rule: 53% vs. 17%',
        funnel: 'TOFU',
        type: 'Data',
        hook: 'Most important stat in the campaign. Leads contacted within 1 hour: 53% conversion. After 24 hours: 17%. A 68% drop by waiting one day.',
        message:
          'The 24-48 hour follow-up window is the single most important variable in event-to-pipeline conversion. Sales reps are 60x more likely to qualify within 1 hour. Average response time: 29 hours.',
        data: [
          'Within 1 hour: 53% conversion. After 24 hours: 17% (Belkins/Kixie)',
          '60x more likely to qualify within 1 hour (TeamGate)',
          '8x greater conversion in first 5 minutes (Kixie)',
          'Average B2B response time: 29 hours (Rep.ai)',
          '63% of businesses don\'t respond at all (Rep.ai)',
        ],
        authority:
          '"This is the stat I share with every client. Follow up within 24 hours or accept that 68% of your event investment just evaporated."',
        firstComment:
          '"And here\'s what makes it worse: 50% of buyers choose the vendor that follows up first. More on that tomorrow."',
      },
      {
        num: 22,
        title: '50% of Buyers Choose Whoever Follows Up First',
        funnel: 'TOFU',
        type: 'Data',
        hook: 'Half of buyers choose the first vendor to follow up. Not the best product. Not the lowest price. The first one to reach out. And only 50% of vendors follow up at all.',
        message:
          'The follow-up advantage compounds: 50% choose first responder, 80% of sales require 5+ touches, nearly half of salespeople never follow up once. The bar is absurdly low.',
        data: [
          '50% of buyers choose the first responder (SurFox)',
          'Only 50% of vendors follow up at all',
          '80% of sales require 5+ follow-up touches (Integrate)',
          'Nearly half of salespeople never follow up once (Integrate)',
        ],
        authority:
          '"10+ years in B2B sales across 7 companies. The number one lesson: speed wins. Not cleverness. Not features. Speed."',
        firstComment:
          '"If you follow up within 24 hours AND you\'re first to reach out, you\'ve already eliminated most of your competition. The bar is that low."',
      },
      {
        num: 23,
        title: 'The Post-Event Sequence That Turns Scans Into Pipeline',
        funnel: 'MOFU',
        type: 'CTA',
        hook: 'You have 72 hours to turn a badge scan into pipeline. After that, momentum dies. Here is the segmented sequence for Hot, Warm, and Cold leads.',
        message:
          'Never send the same follow-up to your entire scan list. Hot: personal email within 24h. Warm: value-add within 48h. Cold: conference-contextualized intro within 72h.',
        data: [
          'Personalized, segmented sends outperform batch blasts (momencio)',
          '2-3 follow-up emails is the sweet spot',
          'Follow-ups average 58% open rate within 24 hours vs 36-42% median B2B',
          '79% of marketing leads never convert due to lack of follow-up (Integrate)',
        ],
        authority:
          '"This is the system we build for clients at WorkflowClick. The segmentation happens before the event, so when leads come in, follow-up runs like clockwork."',
        firstComment:
          'Hot lead timing: Email 1 (within 24h), Call (day 2-3), Email 2 (day 3-4 with case study), Email 3 (day 8-10 "making sure this didn\'t fall through").',
      },
      {
        num: 24,
        title: 'Why 80% of Event Leads Die',
        funnel: 'TOFU',
        type: 'Story',
        hook: 'Day 1: excited energy. Day 3: back at office, inbox flooded. Day 7: "we\'ll get to it." Day 14: leads are cold. Day 30: badge scans in a spreadsheet nobody opens.',
        message:
          'Lead decay is caused by the absence of a follow-up system built before the event. The fix: assign ownership, set a 24-hour SLA, decide sequences per tier, build it all beforehand.',
        data: [
          '80% of trade show leads get zero follow-up (CEIR)',
          'Average response time: 29 hours (Rep.ai)',
          '$5.4B wasted annually from this failure (SurFox)',
        ],
        authority:
          '"I\'ve watched this at every InsurTech event since 2018. Same excited conversations at the booth. Same deafening silence two weeks later. The leads didn\'t fail. The system failed."',
        firstComment:
          '"The antidote: build the follow-up system BEFORE the event. Who enters leads? What\'s the SLA? What sequence does each tier enter? Answer these before Day 1."',
      },
    ],
  },
  {
    num: 5,
    theme: 'The Event Prospecting Playbook',
    narrative:
      'Synthesize everything into a complete system. Bring Moe\'s personal experience forward. Introduce WorkflowClick as the natural solution. Weeks 1-4 were education. Week 5 is the reveal.',
    posts: [
      {
        num: 25,
        title: 'The Full Framework: Event Prospecting in 7 Principles',
        funnel: 'MOFU',
        type: 'Framework',
        hook: 'After 4 weeks of tactics, the entire approach in 7 principles. The "save this post" moment.',
        message:
          '(1) 80% is pre/post, not the booth. (2) Start 60-90 days out. (3) Tier your targets. (4) Satellite events outperform expo halls. (5) 24-hour follow-up window is everything. (6) Segment every follow-up. (7) Measure against pre-set goals.',
        data: [
          '80% pre/post (SalesHive/ZoomInfo/InEvent)',
          '6x more meetings with pre-event outreach (Vendelux)',
          '53% vs 17% conversion (Belkins/Kixie)',
          '5x greater returns with structured measurement (Markletic)',
        ],
        authority:
          '"These 7 principles took me 8 years of InsurTech events to learn. Some cost me a lot of money. All of them are now built into how we work at WorkflowClick."',
        firstComment:
          '"This is the summary of the entire campaign. If you\'re joining late, start here and work backward."',
      },
      {
        num: 26,
        title: 'What I Learned Selling AI to Insurance Companies',
        funnel: 'MOFU',
        type: 'Story',
        hook: 'Drawing from Armilla AI and Risk Control Technologies. Selling AI risk solutions taught specific lessons about how insurance buyers think at events.',
        message:
          'Insurance buyers are risk-averse. They respond to peer-to-peer proof and pragmatic outcomes. At events, they want to hear how a CRM improved quote-to-bind ratios, not what the software could do.',
        data: [
          '"Attendees want to hear how a CRM improved quote-to-bind ratios" (InsurTech analysis)',
          '"Post-pandemic InsurTech conference: less revolution, more pragmatic solutions" (Genasys)',
          'InsurTech NY: 52%+ of attendees VP-level or above',
        ],
        authority:
          '"I sold AI risk solutions for a YC-backed InsurTech with Swiss Re and Greenlight Re as investors. I was at Element AI when ServiceNow acquired them. Insurance buyers don\'t care about your technology. They care about outcomes."',
        firstComment:
          '"The single biggest shift: stop talking about features and start asking \'what\'s your biggest operational frustration?\' The conversations and pipeline changed overnight."',
      },
      {
        num: 27,
        title: 'The Events Worth Your Money in 2026',
        funnel: 'TOFU',
        type: 'Data',
        hook: 'Not all InsurTech events are equal. A ranked breakdown of the highest-value events by audience quality, attendance, and prospecting opportunity.',
        message:
          'Broad InsurTech: ITC Vegas (9,000+), RIMS RISKWORLD (11,000+), Insurtech Insights USA (6,000+). MGA/E&S: WSIA (8,300+), TMPAA (2,000). C-suite: Insurance Innovators (1,500+). Be selective.',
        data: [
          'All attendance figures from official event websites',
          'Insurance vendors becoming more selective (Genasys)',
          'Events saw +12.3% budget growth in 2025 (Sopro)',
        ],
        authority:
          '"I\'ve been to most of these events. The biggest is not always the best for your ICP. Pick 3-4 per year and go deep."',
        firstComment:
          'Second tier by specialty: WCI Annual (5,000+, workers\' comp), Applied Net (3,000+, agency tech), PLUS (2,000, professional liability). Note the Q4 cluster: ITC, WSIA, and TMPAA all within 3 weeks.',
      },
      {
        num: 28,
        title: 'The Case for Outsourcing Event Outbound',
        funnel: 'BOFU',
        type: 'Social Proof',
        hook: 'The 90-day prep timeline is demanding. Most seed-stage startups don\'t have SDR headcount for pre-event outreach, day-of execution, AND post-event follow-up.',
        message:
          'In-house SDR: $100K+/year, 3-6 months ramp, 35-40% turnover. Pre-event outreach for one conference needs 60-90 days of dedicated work. For 3-5 events/year, does that justify a full-time hire?',
        data: [
          'In-house SDR cost: $100K+/year',
          'SDR ramp time: 3-6 months',
          'SDR annual turnover: 35-40%',
          'WorkflowClick time to first qualified meetings: 6-8 weeks',
        ],
        authority:
          '"This is what I built WorkflowClick to solve. Not to replace your sales team. To give you the outbound infrastructure they need before, during, and after every event. You own it after 90 days."',
        firstComment:
          '"If your event is less than 60 days away and you haven\'t started outbound, you\'re behind. But it\'s not too late. You just need to compress the timeline."',
      },
      {
        num: 29,
        title: 'What 10 Years and $10M in ARR Taught Me About Events',
        funnel: 'BOFU',
        type: 'Story',
        hook: '10+ years B2B sales. 7+ companies. $10M+ ARR. SDR to Sales Director to Founder. The events with the most pipeline were never the ones with the biggest booths.',
        message:
          'The common thread across a decade: preparation beats presence. The vendors who generate pipeline build systems, start early, follow up fast, and measure everything.',
        data: [
          '$10M+ ARR career aggregate',
          '10+ years B2B sales, 7+ companies',
          'Trade show contribution to new business: 33% annually (Cvent)',
          '93% event-led companies meeting pipeline goals vs 76% non-event-led (Bizzabo)',
        ],
        authority:
          'Full authority post. "SDR to Sales Director to Founder. 7 companies. InsurTech events since 2018. $10M+ in ARR. The lessons compound."',
        firstComment:
          '"The biggest lesson took me years to learn: events are not about what happens at the conference. They are about the 90 days before and 90 days after. Everything in between is just the handshake."',
      },
      {
        num: 30,
        title: 'Your Event Season Starts Now',
        funnel: 'BOFU',
        type: 'CTA',
        hook: 'RIMS RISKWORLD is May 3-6 (62 days away). Insurance Innovators May 11-12. Insurtech Insights June 3-4. The 90-day window for fall events opens this month.',
        message:
          'This campaign laid out the complete framework. The question is not whether this works. The question is whether you have the bandwidth to execute it.',
        data: [
          'RIMS RISKWORLD: May 3-6, Philadelphia, 11,000+',
          'Insurance Innovators USA: May 11-12, Nashville, 1,500+',
          'Insurtech Insights USA: Jun 3-4, NYC, 6,000+',
          'ITC Vegas: Sep 29-Oct 1, Las Vegas, 9,000+',
          'WSIA Annual Marketplace: Oct 11-14, San Diego, 8,300+',
          'TMPAA Annual Summit: Oct 19-21, Scottsdale, 2,000',
        ],
        authority:
          '"I\'ve spent 30 posts sharing everything I know about event prospecting. If you want to talk about how to apply this to your event calendar, I\'m here."',
        firstComment:
          'Soft CTA: "If you found value in this series: 1) Save this post for your next event planning cycle. 2) Drop a comment with which event you\'re targeting next. I\'ll share what I know about it."',
      },
    ],
  },
]

const funnelColors: Record<string, { bg: string; text: string; border: string }> = {
  TOFU: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  MOFU: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  BOFU: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
}

const typeColors: Record<string, string> = {
  Data: 'bg-indigo-100 text-indigo-700',
  Framework: 'bg-purple-100 text-purple-700',
  Contrarian: 'bg-red-100 text-red-700',
  Story: 'bg-orange-100 text-orange-700',
  'Social Proof': 'bg-teal-100 text-teal-700',
  CTA: 'bg-emerald-100 text-emerald-700',
}

function PostCard({ post }: { post: Post }) {
  const funnel = funnelColors[post.funnel]
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-sm font-mono text-gray-400">#{post.num}</span>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${funnel.bg} ${funnel.text} border ${funnel.border}`}
          >
            {post.funnel}
          </span>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typeColors[post.type] || 'bg-gray-100 text-gray-700'}`}
          >
            {post.type}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-6">
          {post.title}
        </h3>

        {/* Hook Direction */}
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
            Hook Direction
          </p>
          <p className="text-gray-700 leading-relaxed">{post.hook}</p>
        </div>

        {/* Key Message */}
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
            Key Message
          </p>
          <p className="text-gray-700 leading-relaxed">{post.message}</p>
        </div>

        {/* Data Points */}
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
            Data Points
          </p>
          <ul className="space-y-1.5">
            {post.data.map((d, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-blue-500 mt-0.5 shrink-0">&rarr;</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Moe Authority Angle */}
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
            Moe Authority Angle
          </p>
          <p className="text-gray-700 italic leading-relaxed">
            {post.authority}
          </p>
        </div>

        {/* First Comment */}
        <div className="bg-gray-50 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 px-6 sm:px-8 py-5 border-t border-gray-100">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
            First Comment Direction
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            {post.firstComment}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function LinkedInCampaignReview() {
  const totalTOFU = weeks.reduce(
    (acc, w) => acc + w.posts.filter((p) => p.funnel === 'TOFU').length,
    0,
  )
  const totalMOFU = weeks.reduce(
    (acc, w) => acc + w.posts.filter((p) => p.funnel === 'MOFU').length,
    0,
  )
  const totalBOFU = weeks.reduce(
    (acc, w) => acc + w.posts.filter((p) => p.funnel === 'BOFU').length,
    0,
  )

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Campaign Review - March 2026
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              InsurTech Event{' '}
              <span className="text-primary">Prospecting</span>
            </h1>
            <p className="mt-4 text-lg text-white/70">
              30-post LinkedIn campaign. 5 weekly themes. Data-driven event
              prospecting content for WorkflowClick.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <section className="py-6 border-b border-gray-100 bg-white sticky top-0 z-40 shadow-sm">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <span className="font-semibold text-gray-900">30 Posts</span>
            <span className="text-gray-300">|</span>
            <span className="font-semibold text-gray-900">5 Weeks</span>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span className="text-gray-600">TOFU {totalTOFU}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="text-gray-600">MOFU {totalMOFU}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-gray-600">BOFU {totalBOFU}</span>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Week Sections */}
      {weeks.map((week) => (
        <section key={week.num} className="py-16">
          <Container>
            {/* Week Header */}
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                Week {week.num}
              </p>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                &ldquo;{week.theme}&rdquo;
              </h2>
              <p className="mt-3 text-gray-500 max-w-2xl">
                {week.narrative}
              </p>
            </div>

            {/* Post Cards */}
            <div className="space-y-8">
              {week.posts.map((post) => (
                <PostCard key={post.num} post={post} />
              ))}
            </div>
          </Container>

          {/* Divider between weeks */}
          {week.num < 5 && (
            <div className="mt-16">
              <Container>
                <hr className="border-gray-200" />
              </Container>
            </div>
          )}
        </section>
      ))}

      {/* Footer Summary */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Campaign Summary
            </h2>
            <p className="text-gray-500 mb-8">
              Review complete. All 30 post briefs above include hook direction,
              key message, data points with sources, Moe authority angles, and
              first comment strategy.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-2xl font-bold text-blue-600">{totalTOFU}</p>
                <p className="text-xs text-gray-500 mt-1">TOFU (70%)</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-2xl font-bold text-amber-600">{totalMOFU}</p>
                <p className="text-xs text-gray-500 mt-1">MOFU (20%)</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-2xl font-bold text-green-600">{totalBOFU}</p>
                <p className="text-xs text-gray-500 mt-1">BOFU (10%)</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
