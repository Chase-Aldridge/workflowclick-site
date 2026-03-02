import { Container } from '@/components/ui/Container'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'LinkedIn Campaign Review - March 2026',
  robots: { index: false, follow: false },
}

type Post = {
  num: number
  title: string
  funnel: 'TOFU' | 'MOFU' | 'BOFU'
  type: string
  slug: string
  copy: string
  firstComment: string
  altText: string
}

type Week = {
  num: number
  theme: string
  posts: Post[]
}

const IMG_BASE =
  'https://res.cloudinary.com/dnflu4ixl/image/upload/workflowclick/linkedin-march-2026'

const weeks: Week[] = [
  {
    num: 1,
    theme: 'The Math Nobody Does',
    posts: [
      {
        num: 1,
        title: 'The $74,000 Conference',
        funnel: 'TOFU',
        type: 'Data',
        slug: '01-conference-cost',
        altText: 'Infographic showing the true all-in cost of attending a conference: booth, travel, swag, and opportunity cost totaling $35K-$74K+',
        copy: `Your last conference cost $74,000.

You just didn't calculate it.

Here's what most vendors budget:

→ Booth or sponsorship: $25K-$40K

That's the number on the invoice.
That's the number the CFO sees.

Here's what they forget:

→ Travel for 2 people: $3K-$5K
→ Swag and materials: $2K-$4K
→ Opportunity cost of pulling
  2 reps off quota for 4 days

That last one is the killer.

An AE on a $740K annual quota
produces roughly $3,083 per day
in expected pipeline output.

Pull two of them for four days.

That's $24,666 in pipeline
that didn't happen.

Nobody puts that on the
event budget spreadsheet.
Nobody even asks the question.

I've watched teams agonize over
whether to upgrade booth carpet
while ignoring a $25K pipeline hole
sitting right there in the math.

Add it all up.

→ Booth: $25K-$40K
→ Travel: $3K-$5K
→ Swag: $2K-$4K
→ Pipeline loss: $5K-$25K+

Total: $35,000 to $74,000+.
For a single event.

And most vendors walk in
with no pre-booked meetings,
no target account list,
and no follow-up system
on the other side.

Just a booth and a hope
that the right people walk by.

That's a lot of money
riding on foot traffic.

If you're investing $74K,
hope is not a strategy.

What's the real all-in number
for your last conference?

#InsurTech #EventROI #B2BSales
#ConferenceStrategy #SalesLeadership`,
        firstComment: `The cost stack most people miss:

→ Booth/sponsorship: $25K-$40K
→ Travel (2 people): $3K-$5K
→ Swag/materials: $2K-$4K
→ Opportunity cost: $5K-$25K+

That last line never shows up
in an event budget template.

What's the biggest cost
you didn't account for
at your last event?`,
      },
      {
        num: 2,
        title: '80% of Your Event Leads Get Zero Follow-Up',
        funnel: 'TOFU',
        type: 'Data',
        slug: '02-forgotten-leads',
        altText: 'Statistic showing 80% of trade show leads receive zero follow-up, wasting $5.4 billion annually',
        copy: `80% of trade show leads
get zero follow-up.

Zero. Nothing.
The badge scans sit in a
spreadsheet nobody opens.

$5.4 billion wasted annually
in U.S. B2B alone.

Here's what actually happens
after most conferences:

→ 40% of exhibitors wait 3-5 days
→ 38% take 6+ days
→ The rest? Never follow up at all

I've been going to these events
for years.

Everyone comes back with a tote bag,
swag, hangover,
and some crazy stories, maybe.

The leads? They sit there.

You spent $35K to $74K
to be in the room.

You shook hands.
Had great conversations.
Collected a pile of
badge scans and business cards.

Then Monday comes.

Inbox is overflowing.
Pipeline review is due.
And those event leads slide
to the bottom of the list.

By the time someone follows up,
the prospect's forgotten
your name.

They've already talked to
competitors who demonstrated
exactly what you do.

Here's the number that should
keep you up at night:

79% of marketing leads
never convert
due to lack of follow-up.

The product was fine.
The audience was right.
Nobody picked up the phone.

That's the part that kills me.
Getting in the room was hard.
The follow-up is easy.
And that's where it breaks.

What happens to your event leads
the week after the conference?

#InsurTech #EventMarketing
#B2BSales #LeadFollowUp
#SalesProcess`,
        firstComment: `And when you DO follow up,
timing matters more than
most people realize.

The data on what happens
to conversion rates
after 24 hours is brutal.

More on that later this week.`,
      },
      {
        num: 3,
        title: 'The Booth Budget Trap',
        funnel: 'TOFU',
        type: 'Contrarian',
        slug: '03-booth-trap',
        altText: 'Comparison showing a $40K booth vs a $2K dinner — the dinner generated more pipeline',
        copy: `The biggest booth at the show
rarely generates the most pipeline.

I've watched vendors at ITC Vegas
pour $40K+ into a booth
that generated less pipeline
than a $2,000 dinner for 15 people.

Here's the trap:

Booth space eats 33% of your
total exhibitor budget.
At $20-$40 per square foot,
upgrades add up fast.

So vendors pour money into
bigger displays,
flashier graphics,
better swag.

And spend nothing on
the one thing that actually
fills their calendar:
pre-event outreach.

I see this pattern every year.

The vendor with the LED wall
and the branded espresso bar
is standing in the booth
waiting for walk-up traffic.

Meanwhile, the team with
the plain 10x10 setup
has 20 meetings pre-booked
and a dinner for 15 decision-makers
at a restaurant down the street.

One team bought attention.
The other team bought access.

The math is simple.

A gorgeous booth
with no pre-booked meetings
is a $40K photo opportunity.

An average booth
with 20 pre-booked meetings
is a pipeline machine.

The highest-leverage move
vendors can make:

Shift 20-30% of your booth
upgrade budget into SDR time
and list enrichment.

Pull up Apollo or ZoomInfo.
Build a list. Start outreach
60 days before the show.

Your booth doesn't need
to win a design award.

Your calendar does.

What would you reallocate first?

#InsurTech #TradeShow
#EventStrategy #B2BSales`,
        firstComment: `The companies I've seen generate
the most pipeline don't have
the biggest booths.

They host the best dinners.

More on the satellite event play
later in this series.`,
      },
      {
        num: 4,
        title: 'What a $25,000 ITC Vegas Sponsorship Actually Buys You',
        funnel: 'TOFU',
        type: 'Data',
        slug: '04-itc-vegas',
        altText: 'ITC Vegas sponsorship breakdown: $25K minimum gets you 4 tickets and a booth, with total investment north of $30K',
        copy: `ITC Vegas sponsorship packages
start at $25,000.

Here's what that gets you:

→ 4 tickets
→ A booth

That's it.

And here's what most people
don't know:

Less than 10% of standalone
booth applications get approved.

Sponsorship is the primary
entry point.

You can't just show up
and rent floor space.

So the floor is $25K
before your team even
books a flight.

Now add the real costs:

→ Airfare: $300-$600 per person
→ Hotel near Mandalay Bay:
  $200-$400/night x 3 nights
→ Meals and ground transport:
  $150-$300 per person
→ Two-person team travel total:
  $2,100-$4,200

Minimum viable investment:
north of $30K.

And booth costs increased
10-15% from 2023 to 2024
due to demand.

9,000+ attendees.
600-700+ exhibitors.
Mandalay Bay, Las Vegas.

The biggest InsurTech marketplace
in the world.

The opportunity is real.
So is the price of admission.

This is the event everyone
asks me about.

The companies would send me
to these things because they knew
I could work a room.

But you can't wing it
at this scale.

Every year I watch vendors
write the $25K check,
fly the team out,
and wing it once they land.

No target list.
No pre-booked meetings.
No follow-up system.

Before you sign,
ask one question:

Do we have a plan to turn
$30K into pipeline?

#InsurTech #ITCVegas
#ConferenceROI #B2BSales
#EventMarketing`,
        firstComment: `For context, here are the
three highest-volume InsurTech
events by attendance:

→ RIMS RISKWORLD: 11,000+
→ ITC Vegas: 9,000+
→ Insurtech Insights USA: 6,000+

RIMS actually has more attendees
than ITC. Worth knowing when
you're deciding where to invest.`,
      },
      {
        num: 5,
        title: 'The Opportunity Cost Nobody Calculates',
        funnel: 'TOFU',
        type: 'Story',
        slug: '05-pipeline-risk',
        altText: 'Pipeline risk calculation showing pulling 2 reps for 4 days costs $24,666 in lost pipeline output',
        copy: `We pulled our strongest reps
for a conference.

Pipeline went cold in 48 hours.

At a YC-backed InsurTech,
we were limited with budgets
but we knew we had to attend
conferences every year.

So I'd pull two closers off
their deals for four days.

Here's what happened back home:

Prospects went dark.
A deal we'd been nurturing
stalled out completely overnight.
A competitor got a meeting
we should've had.

The opportunity cost was completely
invisible on the spreadsheet.
Nobody tells you about that part.

Only 30% of a rep's time
is actual selling anyway.

You take that thin window
and zero it out for a week.

Add travel before, recovery after.
That's six days gone, not four.

The conference might've
been worth it.
But the cost wasn't just
the booth and the flights.

It was every follow-up
that slipped while
the team was away.

The pipeline doesn't pause
because your calendar changed.

By the time I landed
at the conference,
the work was pretty much
already done.

We had a full war room running
before I even packed my bags.

Slack channel. Conference app.
Target accounts preloaded in CRM.

That's the only way
to justify pulling reps.

What's your plan for the deals
that don't pause while
your team is at the conference?

#InsurTech #SalesLeadership
#EventROI #B2BSales #OpportunityCost`,
        firstComment: `Here's the formula I use:

(AE annual quota / 240)
x number of reps
x days at event
= pipeline days at risk

That's the floor on what
this event needs to return.

Run this before you
sign the next sponsorship.`,
      },
      {
        num: 6,
        title: '94% of Marketers Admit They Fail at This',
        funnel: 'MOFU',
        type: 'Framework',
        slug: '06-system-failure',
        altText: '94% of marketers believe their company fails to convert event leads, but those who measure achieve 5x returns',
        copy: `94% of marketers believe
their company fails to convert
event leads.

Read that number again. 94%.

That's not a gap.
That's an industry-wide
admission of failure.

But here's what's interesting:

Companies that measure event ROI
with a structured system
achieve 5x greater
marketing returns.

5x. Not 5%.

Same events. Same booths.
Same attendee quality.

The only difference is the system
around the event.

And 71% of event marketers
still can't connect event spend
to revenue outcomes.

They know it's not working.
They just can't prove
where it breaks.

The difference between vendors
who get ROI and those who don't
is not booth size or product.

It's whether they have a system
for what happens before
and after the event.

I've been in these rooms
long enough to know
what separates the winners.

It comes down to one thing:
pre-event outreach.

Conferences are prospecting events,
not networking events.

You can't just show up and hope
the right people find your booth.

Know who's coming.
Reach out 60-90 days early.
Have meetings booked
before you pack your bags.

The vendors who treat events
like a prospecting campaign
come back with pipeline.

Everyone else comes back
with swag and stories.

It starts 90 days
before the event.

What does your pre-event
outreach look like today?

#InsurTech #EventStrategy
#B2BSales #SalesProcess
#ConferenceROI`,
        firstComment: `This is the transition point.

This week was the problem:
the hidden costs,
the follow-up failure,
the budget traps.

Starting next week,
we get into what the
top vendors actually do
differently.

It starts 90 days
before the event.`,
      },
    ],
  },
  {
    num: 2,
    theme: 'The 90-Day Countdown',
    posts: [
      {
        num: 7,
        title: 'The Event Is Won Before It Starts',
        funnel: 'TOFU',
        type: 'Contrarian',
        slug: '07-90-days-out',
        altText: 'Pre-event outreach delivers 6x more meetings than floor-only prospecting — start 90 days out',
        copy: `The event is won 90 days out.

Not at the booth.
Not on the show floor.
Not during the cocktail hour.

It's won in the months before
you ever board the plane.

Here's what the data shows:

Pre-event outreach delivers
6x more meetings
than floor-only prospecting.

Six times.

That's the difference between
landing with 5 meetings
and landing with 30.

81% of trade show attendees
have buying authority.

But their calendars fill early.

The best people at these events
get 30+ meeting requests before
registration even closes.

If you're reaching out two weeks
before, their calendar is
already full.

Pre-show invitations produce
a 30% increase in qualified leads
over walk-up traffic.

Yet most vendors I've watched
don't start outreach until
two weeks before the event.

By then, every decision-maker
worth meeting already has
a packed schedule.

The best event teams I know
land at a conference
with their calendar half full.
Pre-booked. Confirmed. Ready.

Walk-ups are a bonus.
Never the strategy.

By the time I landed
at the conference, the work was
pretty much already done.

If your event prep starts
when you book the flight,
you've already lost ground
to the vendors who started
three months ago.

When does your event prep
usually begin?

#InsurTech #EventProspecting
#B2BEvents #ConferenceStrategy
#SalesLeadership`,
        firstComment: `Here's the timeline I follow.

Tomorrow I'll break down
exactly what should happen
at each milestone:

90, 60, 45, 30, 14, and 7 days out.

It's the same framework
whether you're sponsoring ITC Vegas
or attending TMPAA as a guest.

The structure stays the same.
Only the budget changes.`,
      },
      {
        num: 8,
        title: 'The 90/60/45/30/14/7 Framework',
        funnel: 'MOFU',
        type: 'Framework',
        slug: '08-war-room',
        altText: 'The 90/60/45/30/14/7 day pre-event preparation framework timeline',
        copy: `People used to DM me two months out.

"How do you already have 25
meetings booked?"

Here's the timeline
I actually follow.

We'd have a full war room running
before I even packed my bags.
Slack channel for the event.
The list, the scripts, the updates.
Me and the SDRs aligned
in real time.

90 DAYS OUT
Define your ICP for this event.
You can't just blast everyone.
Build the target account list.

60 DAYS OUT
LinkedIn outreach starts.
Follow and engage target accounts.
Warm relationships
before making any ask.

45 DAYS OUT
Launch email sequences.
First touch references
the shared conference context.
No pitch. Just value.

30 DAYS OUT
Escalate cadence.
Add phone for priority targets.
Start securing confirmed meetings.
Book your satellite event venue.

14 DAYS OUT
Send calendar invites.
Confirm meeting locations.
SDRs still calling and emailing
while you prep for the floor.

7 DAYS OUT
Final confirmation emails.
Send agendas for every meeting.
Brief your team on top accounts.

72% of attendees prefer
personalized invitations
over generic blasts.

This isn't a one-time push.
Lots of people register
last minute, so list-building
is a continuous process.

This framework works whether
you're sponsoring ITC Vegas
or attending RIMS RISKWORLD
without a booth.

What milestone do most teams
skip entirely?

#InsurTech #EventPlaybook
#B2BSales #ConferencePrep
#SalesStrategy`,
        firstComment: `Quick reference for the timeline:

90 days: Define ICP + build lists
60 days: LinkedIn engagement
45 days: Email sequences launch
30 days: Secure confirmed meetings
14 days: Calendar invites + social
7 days: Confirm + prep materials

The milestone most teams skip?

The 60-day LinkedIn warm-up.

They jump straight to email
at 14 days out and wonder
why nobody responds.

By then your name is just noise
in an inbox full of vendors
asking for the same meeting.`,
      },
      {
        num: 9,
        title: 'How to Pick the Right Conference',
        funnel: 'TOFU',
        type: 'Framework',
        slug: '09-picking-conferences',
        altText: 'Conference selection scorecard: ICP density, last year feedback, competitor presence, cost per meeting, content relevance',
        copy: `Not every conference deserves your budget.

I've been to events that produced
20 meetings and events that
produced zero.

The difference wasn't effort.
It was picking the wrong room.

When budgets are tight,
here's what I check first:

→ ATTENDEE QUALITY
Forget headcount.
How many match your ICP?
A 500-person event with 80
decision-makers beats 10,000
where you're hunting for needles.

→ PREVIOUS YEAR RESULTS
Talk to someone who went.
Not the organizer's highlight reel.
An actual attendee. How many
real conversations did they have?

→ COMPETITOR DENSITY
If your biggest competitors
are all sponsoring, that's
a signal. They've done the math.

→ COST PER POTENTIAL MEETING
Total it up: travel, hotel,
registration, dinners, lost time.
Divide by realistic meeting count.
Over $1,500 per meeting?
Think hard.

→ SESSION RELEVANCE
Look at last year's agenda.
Are the sessions about problems
your product solves?
If the content doesn't match,
the attendees won't either.

52% of business leaders say
events deliver the greatest ROI
of any channel.

But that's only true when you
pick the right events.

The companies that sent me
to conferences knew I could
work a room. But even I couldn't
fix a bad event selection.

Start with the room.
Everything else follows.

What's your process for deciding
which events to attend?

#InsurTech #EventStrategy
#B2BSales #ConferenceROI
#EventPlanning`,
        firstComment: `Quick scorecard I use
before committing to an event:

→ ICP density: High / Medium / Low
→ Last year feedback: Positive / Mixed
→ Competitor presence: Yes / No
→ Cost per meeting estimate: $___
→ Content relevance: Strong / Weak

If I get three or more "weak"
signals, I skip the event
and put that budget toward
a smaller dinner or roadshow
where I control the guest list.

The best event strategy isn't
attending more conferences.
It's attending fewer of the
right ones.`,
      },
      {
        num: 10,
        title: 'LinkedIn First. Email Second.',
        funnel: 'TOFU',
        type: 'Data',
        slug: '10-linkedin-first',
        altText: 'LinkedIn-first outreach sequence: follow 45 days out, connect 30 days out, email 14 days out',
        copy: `Most vendors start with email.

That's backwards.

The best pre-event outreach
starts on LinkedIn.
45 days before the conference.

Cold email open rates dropped
from 36% to 27.7% in one year.

Every vendor is sending.
Nobody's warming first.

A LinkedIn connection request
with shared conference context
gets accepted at a different rate.

You're not a cold sender.
You're headed to the same event.

The sequence that works:

STEP 1 (45 days out)
Follow target accounts.
Comment on their content.
Build recognition
before making any ask.

STEP 2 (30 days out)
Send connection request.
"We're both attending
[Conference]. Let's connect
before the event."

STEP 3 (14 days out)
Launch email sequence.
They already know your name.
Open rates improve because
they've seen you before.

Here's the thing about
conference apps. I'd never
respond to anyone messaging me
in the app because it was
just so low value.

Everyone blasting the same
"let's meet up" to the
entire attendee list.

But if someone had been
in my LinkedIn feed for weeks,
commenting on my posts,
sharing something relevant,
that cold email lands different.

I'd actually open it.

That's the shift. Not more
volume. More recognition
before the ask.

Build the familiarity first.
Then the email writes itself.

Do you warm up on LinkedIn
before launching event emails?

#InsurTech #LinkedInSales
#B2BEvents #SocialSelling
#EventProspecting`,
        firstComment: `The key insight is simple:

LinkedIn creates familiarity.
Familiarity drives open rates.
Open rates drive meetings.

When your name shows up
in someone's inbox
and they've already seen you
comment on a post,
you're no longer a stranger.

You're someone they recognize.

That shift is worth
45 days of consistent effort.`,
      },
      {
        num: 11,
        title: 'Not All Leads Are Equal',
        funnel: 'TOFU',
        type: 'Framework',
        slug: '11-lead-tiering',
        altText: 'Three-tier lead prioritization: Tier 1 gets dinners, Tier 2 gets personalized outreach, Tier 3 gets LinkedIn engagement',
        copy: `Most vendors treat every
conference attendee the same.

That's a resource problem
disguised as a strategy.

Here's the rough framework
I use to sort the list
before events:

TIER 1: HIGHEST PRIORITY
Accounts already in pipeline.
Active deals you can accelerate.
Former customers still warm.

These get dinner invitations.
Pre-booked 1-on-1 meetings.

If you're going with a team,
you want something fancy.
A private dinner. Good venue.
Real conversation, no slides.

TIER 2: STRATEGIC
ICP accounts not in pipeline yet.
Companies showing intent signals.
Contacts who engaged your content
but haven't converted.

These get personalized emails.
LinkedIn outreach.
A 20-minute meeting ask.

This is where the real work
happens. Tier 1 books easy.
Tier 2 is the grind.

TIER 3: BRAND BUILDING
Analysts. Influencers. Press.
Strategic partners.

These get a LinkedIn comment.
A hallway conversation.
Maybe a coffee if it happens
naturally on the floor.

81% of attendees
have buying authority.

But that doesn't mean
they all deserve the same
investment of your time.

Warm leads convert at 30-50%.
Cold calling converts at 1-3%.

The dinner table has 12 seats.
Your reps have finite hours.

Every hour chasing a Tier 3
is an hour not spent
on a Tier 1 account
that could close this quarter.

How do you prioritize
your event target list today?

#InsurTech #EventStrategy
#B2BSales #AccountPrioritization
#ConferenceROI`,
        firstComment: `The biggest mistake I see:

Treating Tier 3 contacts
like Tier 1.

A journalist getting
the same dinner invitation
as your top pipeline account
is a misallocation of
your most valuable asset:
face time with decision-makers.

Tier the list before the event.
Then build the plan
around the tiers.

Not the other way around.`,
      },
      {
        num: 12,
        title: 'The Pre-Event Email That Gets Replies',
        funnel: 'MOFU',
        type: 'Framework',
        slug: '12-pre-event-email',
        altText: '4-touch pre-event email sequence achieving 76% open rate and 30% reply rate',
        copy: `76% open rate.
30% reply rate.

Those are real numbers from
event-contextualized sequences.

Compare that to cold email:
1-5% reply rate on average.

The shared context of
"we're both attending
this conference" transforms
cold outreach into something
people actually read.

Here's the 4-touch sequence
I run before every event:

TOUCH 1 (45 days out)
Short intro. 3-4 sentences.
Mention the conference.
What you do. Why it matters
to them. Soft ask to connect.

TOUCH 2 (30 days out)
Lead with something useful.
A stat about their market.
Something specific about
their company.
Then propose a 20-minute meeting.

TOUCH 3 (14 days out)
Keep it tight.
"Still have a few slots
for meetings at [Conference]."
Include a Calendly link.
Make it easy to say yes.

TOUCH 4 (3-5 days out)
Confirmation only.
Time, location, what to expect.
Maybe one relevant piece
they can skim before you meet.
Don't oversell at the finish line.

94% of event teams say
pre-event email is their
most critical content channel.

Pre-scheduled appointments
produce a 30% increase
in qualified leads.

The conference context does
the heavy lifting. You're not
a random cold sender anymore.
You're someone who'll be
in the same room next week.

That's a different conversation
than a cold pitch from nowhere.

What's your pre-event
email approach?

#InsurTech #ColdEmail
#EventProspecting #B2BSales
#SalesSequences`,
        firstComment: `Subject line framework
for each touch:

Touch 1: "[Conference] -
quick question for you"

Touch 2: Reference something
specific about their company
or a challenge in their space.

Touch 3: "Still have [X] slots
for [Conference] meetings"

Touch 4: Confirmation only.
Time, place, what to bring.

Spacing matters.
Leave 1-3 days between touches.

Insurance decision-makers
are busy. Err toward more spacing
and higher personalization.`,
      },
    ],
  },
  {
    num: 3,
    theme: 'The Meeting Machine',
    posts: [
      {
        num: 13,
        title: 'Pre-Booked Meetings vs. Walk-Up Traffic',
        funnel: 'TOFU',
        type: 'Data',
        slug: '13-prebooked-meetings',
        altText: '6x more meetings with pre-event outreach vs floor-only prospecting, with 32-day shorter deal cycles',
        copy: `6x more meetings.

That's the difference between
pre-event outreach and
showing up hoping for walk-ups.

Six times more conversations
with the right people.

Here's what I learned firsthand.

When I was an AE at several
insurtechs, they'd send me to
conferences because I could
work a room.

But the real work happened
before I ever packed my bags.

We had a full war room running.
SDRs combing the attendee list.
Cold emails and calls going out.

By the time I landed at the
conference, the work was
pretty much already done.

Here's what the data confirms:

-> Pre-event outreach using
   enriched attendee lists =
   6x more meetings booked vs.
   floor-only outreach

-> Opportunities that include
   live meetings close 32 days
   faster with significantly
   higher win rates

-> Warm leads convert 50% more
   often than cold leads

-> Cost per opportunity drops to
   $2,000-$3,000 when you combine
   ICP targeting with pre-booked
   meetings and live qualification

The best event teams don't
arrive and see what happens.

They land with a full calendar.
Walk-up traffic fills the gaps.
It's the bonus. Not the plan.

Most teams start planning
two weeks out.
The best teams started
two months ago.

How many confirmed meetings did
you have at your last conference?

#InsurTech #EventROI #B2BSales
#ConferenceStrategy #SalesLeadership`,
        firstComment: `The 6x number isn't theoretical.

It comes from teams using enriched
attendee data to run personalized
pre-event outreach sequences.

Not mass email blasts.
Not spray and pray.

Targeted, researched sequences
built around specific accounts
they want to meet at the show.

Tomorrow I'll break down exactly
how to get that attendee data,
even when the organizer won't
share the list.`,
      },
      {
        num: 14,
        title: "How to Get Attendee Data When Organizers Won't Share the List",
        funnel: 'TOFU',
        type: 'Framework',
        slug: '14-attendee-data',
        altText: '5 ways to build a conference target list: exhibitor lists, LinkedIn, conference apps, intent data, and enrichment workflows',
        copy: `"Can I get the attendee list?"

Every vendor asks this before
every conference.

The answer is almost always no.
Unless you're a major sponsor.

You don't need the official list.

Here's what I actually did.
I'd give our SDRs access to
the conference app a month out.

They'd comb through every name,
look them up on LinkedIn, pull
contact info from ZoomInfo or
Apollo, and run cold sequences
before the conference started.

You can't just blast everyone.
You've got to identify the
perfect ICP, the perfect persona.

5 ways to build a target list
before any event:

-> Exhibitor lists.
   Always public on the website.
   Filter by ICP. That's your
   starting point.

-> LinkedIn event pages.
   Attendees who RSVP are visible.
   Zero-cost source most vendors
   overlook.

-> Conference apps.
   Whova, Swapcard, Bizzabo.
   Register early and browse
   the full attendee directory.

-> Intent data platforms.
   ZoomInfo, Bombora, 6sense.
   Identify companies researching
   topics the conference covers.

-> Enrichment workflows.
   Pull exhibitor list as CSV.
   Feed it into Apollo or ZoomInfo.
   Enrich into verified contacts.

One caveat. Lots of people
register last minute, so this
needs to be continuous.
Not a one-and-done exercise.

That's how you avoid turning
a $30K conference investment
into an expensive networking trip.

What's your process for building
a target list before events?

#InsurTech #EventProspecting
#B2BSales #SalesOps #LeadGen`,
        firstComment: `Here's the enrichment workflow
step by step:

1. Pull exhibitor list from website
2. Filter by your ICP criteria
3. Cross-reference against your CRM
4. Enrich contacts with Apollo,
   ZoomInfo, or Sales Navigator
5. Stack-rank by ICP fit + intent
   signals + deal size potential

This is the muscle we've built
at WorkflowClick. Turning raw
company signals into verified,
enriched contact lists.

Event exhibitor lists are one of
the highest-signal starting points
for outbound. Everyone ignores them.`,
      },
      {
        num: 15,
        title: 'The Satellite Event Play (Dinners > Booths)',
        funnel: 'TOFU',
        type: 'Contrarian',
        slug: '15-satellite-dinner',
        altText: 'A dinner for 20 decision-makers beats a booth for 9,000 attendees — satellite events deliver higher ROI',
        copy: `A dinner for 20 beats
a booth for 9,000.

That sounds wrong.
The data says otherwise.

59% of marketers are now planning
more small, hosted events.

Planning for large-scale events
dropped 12% year over year.

Here's what I've seen firsthand.

When I'm going with two or more
people, we'd look for a nice
restaurant closer to the venue.
We'd max out those meetings and
come out with multiple follow-up
meetings and business opportunities.

Satellite events give you something
a booth never can:

-> You control the environment.
   No competitors three feet away
   running the same demo you are.

-> Real conversation happens.
   20 minutes at a dinner table
   vs. 90 seconds at a booth.
   Not even comparable.

-> You're the host, not the vendor.
   That shift changes everything.

-> People remember who hosted them.
   They forget who exhibited.

I've seen more deals close from
a $2,000 dinner at RIMS RISKWORLD
than from a $50,000 booth
at the same event.

The math isn't even close.

A private restaurant with 12
decision-makers, no slides, and
a good question on the table
beats a flashy booth every time.

The question isn't whether
satellite events work.

It's whether you're willing
to try a different model.

Are you hosting a satellite event
at your next conference?

#InsurTech #EventStrategy
#B2BSales #ConferenceROI`,
        firstComment: `4 satellite event formats
that consistently outperform:

-> Executive Dinner (8-15 people).
   Private restaurant. No slides.
   Best for senior decision-makers.

-> Customer Roundtable (8-12 people).
   Existing customers + 1-2 prospects.
   Peer credibility does the selling.

-> Happy Hour (25-75 people).
   Higher volume. Top-of-funnel.
   Best for brand and introductions.

-> Pre-Conference Breakfast (10-20).
   Most overlooked format. Catch
   people before the noise starts.

Breakfasts are the sleeper play.
Low cost, high attention, zero
competition for mindshare.`,
      },
      {
        num: 16,
        title: 'The No-Booth Playbook',
        funnel: 'TOFU',
        type: 'Framework',
        slug: '16-no-booth',
        altText: 'The no-booth playbook: attend conferences without sponsorship and still build pipeline through pre-booked meetings',
        copy: `No booth. Zero sponsor badge.

I used to walk into conferences
like that and still walk out
with a pipeline full of meetings.

Here's how I did it at RISKWORLD
without spending $25K on a booth.

I'd be on the vendor floor going
booth to booth, targeting insurance
carriers and large brokerages.

When it was just me attending,
15-minute cups of joe between
sessions. No pitch deck required.

Whenever I grabbed a business
card, I'd snap a photograph and
drop it straight into our Slack
channel. SDRs would add them to
the CRM immediately and start
follow-up before I even got
back to my hotel room.

The SDRs didn't stop either.
Still calling and emailing
prospects on my behalf while
I was on the floor.

Me and the SDRs were aligned
in real time. Everything lived
in one Slack channel.

Everyone else comes back with
a tote bag, swag, and a hangover.
Maybe some crazy stories.

I came back with pipeline.

ITC Vegas sponsorship starts
at $25K. Less than 10% of
standalone booth applications
even get approved.

You don't need that sponsorship
if your meetings are pre-booked.

The booth is just a meeting point.
If your calendar's packed,
it becomes optional.

What would you do with $25K
if you didn't spend it
on a booth?

#InsurTech #StartupSales
#EventMarketing #B2BStrategy
#ConferenceProspecting`,
        firstComment: `The no-booth strategy works best
when paired with aggressive
pre-event outreach.

The sequence:

1. Build target list (see Post 14)
2. Run pre-event email and LinkedIn
   sequences starting 60 days out
3. Book 15-20 meetings in advance
4. Host one small satellite event
5. Show up with a full calendar

The booth is a physical anchor.
If your calendar's packed,
you don't need one.

I've helped clients set up
exactly this playbook at
ITC Vegas and RIMS RISKWORLD.
The pipeline numbers matched
or beat teams with $50K booths.`,
      },
      {
        num: 17,
        title: 'Your Conference Landing Page Is Missing',
        funnel: 'TOFU',
        type: 'Data',
        slug: '17-landing-page',
        altText: '86% of event-led companies can attribute events to revenue — a conference landing page enables that attribution',
        copy: `You spent $30K on a conference.

Where are you sending prospects
who want to learn more?

If the answer is your homepage,
you've got zero attribution.

No way to measure what that
investment actually produced.
No way to know which event
generated pipeline and which
was just an expensive trip.

86% of event-led growth companies
can directly attribute events
to revenue. Only 64% of
everyone else can.

The gap starts with something
most vendors skip entirely.

A conference-specific landing page.

Every conference deserves its
own dedicated page. Here's why
each element matters:

-> Headline for that audience.
   I've seen vendors send people
   to a generic homepage after
   a great conversation. That's
   killing your conversion.

-> 2-3 sentences on what you
   help with. Written for their
   specific pain points.
   No feature lists. No jargon.

-> One piece of social proof.
   A customer result with a real
   number. Not a logo wall.
   One outcome that proves it.

-> A single CTA. Calendly link.
   "Book 20 minutes at the show."
   Nothing else competing
   for attention on the page.

-> Your booth number or satellite
   event invite. Give them a
   reason to find you in person.

This is table stakes and most
vendors are still skipping it.

Are you sending conference
prospects to your homepage
or a purpose-built page?

#InsurTech #EventMarketing
#B2BSales #DemandGen #EventROI`,
        firstComment: `Simple landing page template
you can build in an afternoon:

"Attending [Conference Name]?

[One-sentence value proposition
specific to this audience.]

[Social proof: one result or
customer outcome with a number.]

Book a 20-minute meeting:
[Calendly link]

Find us at Booth #X or join us
at [satellite event details]."

One page. One CTA.
Full attribution.

Build it 30 days before the event.
Link it from every pre-event email,
every LinkedIn message, and every
outreach touchpoint.`,
      },
      {
        num: 18,
        title: 'Book the Dinner 30 Days Out (Or Lose the Venue)',
        funnel: 'TOFU',
        type: 'Story',
        slug: '18-book-dinner',
        altText: 'Timeline for booking satellite dinner venues: 30+ days out for RIMS RISKWORLD and ITC Vegas',
        copy: `RIMS RISKWORLD is May 3-6.
11,000 people in Philadelphia.

ITC Vegas is Sep 29-Oct 1.
9,000 people at Mandalay Bay.

If you're planning a satellite
event near either one, here's
what happens when you wait:

Every private dining room
within a mile gets booked.

You end up hosting 12
decision-makers in a hotel lobby
with bad lighting and conference
noise from the hallway.

I learned this the hard way.

We'd always look for a nice
restaurant closer to the venue.
The right dinner maxes out your
meetings and creates follow-up
you can't get from a booth.

The timeline that works:

-> 30+ days out:
   Book the venue. The one
   bottleneck that matters.
   Everything else can flex.
   The venue can't.

-> 3-4 weeks out:
   Send invitations. Curate the
   guest list from your Tier 1
   and Tier 2 target accounts.

-> 2 weeks out:
   Confirm headcount. Brief your
   team on who's attending
   and what you want to learn.

-> Day of:
   One person hosts. Their only
   job is to work the room.
   Not pitch.

If RIMS is on your calendar,
this week's the deadline to
lock a venue in Philadelphia.

For ITC Vegas, start scouting
near Mandalay Bay now.
September feels far away.
It isn't.

What events are you planning
satellite dinners for this year?

#InsurTech #RIMSRISKWORLD
#ITCVegas #EventStrategy
#ConferenceProspecting`,
        firstComment: `Upcoming events worth planning
satellite events around:

-> RIMS RISKWORLD (May 3-6,
   Philadelphia). 11,000+ attendees.
   Book your venue now.

-> Insurance Innovators USA
   (May 11-12, Nashville).
   1,500+ senior executives.

-> Insurtech Insights USA
   (Jun 3-4, New York).
   6,000+ attendees at Javits.

-> ITC Vegas (Sep 29-Oct 1,
   Las Vegas). 9,000+ attendees.
   Start scouting restaurants
   near Mandalay Bay.

The best satellite events have
8-15 people, a curated guest list,
and zero slides.

Just a good question on the table
and the right people around it.

Start with the venue.
Everything else follows.`,
      },
    ],
  },
  {
    num: 4,
    theme: 'Day-Of and After',
    posts: [
      {
        num: 19,
        title: 'The Hallway Strategy',
        funnel: 'TOFU',
        type: 'Data',
        slug: '19-hallway-strategy',
        altText: '85% of booth success depends on staff — but the best conversations happen in the hallway between sessions',
        copy: `85% of booth success depends on staff.

The booth isn't where
the best conversations happen.

I've been going to these conferences
for years.

The conversations that turned
into real pipeline?

They happened over coffee.
Between sessions.
Walking to the next keynote.

The hallway is the real conference.

At every event, I'd be on the vendor
floor going booth to booth.
Targeting carriers. Large brokers.
Introducing myself and keeping
an eye on who's who.

If I spotted a mover and shaker,
I'd find an excuse to walk over
and start a conversation.

When you're going solo, you learn
to work the hallway fast.
"Let's meet for a cup of joe
between sessions." That's it.
Fifteen minutes. No pitch deck.
Just a real conversation about
their actual challenges.

Here's what the best teams do:

→ Split roles: greeters scan,
closers go deep
→ Brief the team every morning
on the top 10 target accounts
→ Rotate staff every 2-3 hours
to prevent fatigue
→ Treat session breaks as
primary prospecting time

Trained booth staff convert
qualified leads at 2x the rate
of untrained staff.

But the sellers generating
real pipeline?

They're not standing
behind a table.

They're in the hallway
asking good questions.

Where do your best event
conversations actually happen?

#InsurTech #EventProspecting #B2BSales #TradeShows #SalesStrategy`,
        firstComment: `The hallway conversation framework
I use at every event:

1. Establish shared context
(same session, same challenge)
2. Ask one genuine question
about their world
3. Listen. Actually listen.
4. Connect your work ONLY
if there's a real fit
5. Propose a specific next step
("Can we grab 15 minutes
tomorrow morning?")

No pitch deck required.`,
      },
      {
        num: 20,
        title: '50 Conversations Beat 500 Scans',
        funnel: 'TOFU',
        type: 'Contrarian',
        slug: '20-context-capture',
        altText: 'Only 6% of exhibitors are confident they can convert trade show leads — context beats volume',
        copy: `500 badge scans. Zero pipeline.

I see this at every conference.

Teams bragging about scan volume
at the end of day two.

Then silence for six weeks.

A badge scan is just contact data.
That's it.

Only 6% of exhibitors
are confident they can convert
their trade show leads.

Six percent.

The vendors building real pipeline
are doing something different:

→ 50 deep conversations
instead of 500 random scans
→ 30-second voice note
after every conversation
→ Hot/Warm/Cold grading
before they leave the floor

Notes taken within 5 minutes
are 3-4x more accurate than
notes taken at end of day.

Here's what I do at every event.
Whenever I meet someone and grab
their business card, I snap a photo
and drop it straight into our
Slack channel. The SDRs add them
to the CRM immediately and start
working on follow-up.

Before I even get back
to my hotel room, outreach
has already started.

That's what real-time context
capture looks like. The conversation
is still fresh. The details
are still sharp. And the prospect
remembers exactly who you are.

The scan gets you a name.

The context you capture
in the next 60 seconds
gets you a deal.

Stop optimizing for volume.
Start optimizing for context.

What's your lead capture
system at events?

#TradeShows #B2BSales #InsurTech #EventROI #LeadGeneration`,
        firstComment: `The grading system that works:

Hot: Expressed buying intent,
has budget authority,
mentioned a specific timeline.

Warm: Relevant role,
identified pain,
no timeline yet.

Cold: Interesting company,
wrong person or unclear fit.
Hand to marketing nurture.

Grade every conversation
before you walk away.`,
      },
      {
        num: 21,
        title: 'The 24-Hour Rule',
        funnel: 'TOFU',
        type: 'Data',
        slug: '21-24-hour-rule',
        altText: 'Leads contacted within 1 hour convert at 53% — wait 24 hours and it drops to 17%, a 68% decline',
        copy: `53% vs. 17%.

Read that again.

Leads contacted within 1 hour
convert at 53%.

Wait 24 hours?

17%.

That's a 68% drop
by waiting one day.

One day.

And it gets worse.

Sales reps are 60x more likely
to qualify a lead within 1 hour.
Conversion is 8x higher
in the first 5 minutes.
Average B2B response time
is still 29 hours. And 63%
of businesses never respond
at all.

You just spent $35,000-$74,000+
on a conference.

Your team had great conversations.
Real interest. Real momentum.

Then everyone flew home.
Opened their inboxes.
And the follow-up slid.

Here's what we do differently.

My SDRs don't stop working while
I'm on the conference floor.
They're calling and emailing
on my behalf the entire time.

I grab a business card at a booth.
Snap a photo. Drop it in Slack.
It's in the CRM within minutes.

Before I even get back
to my hotel room, the follow-up
sequence has already started.
Personalized. Referencing the
conversation we just had.

That's not complicated.
That's preparation meeting
execution in real time.

68% of your conference investment
evaporated because nobody picked
up the phone.

This is the stat I share
with every client.

Follow up within 24 hours
or accept the loss.

How fast does your team
follow up after events?

#SpeedToLead #B2BSales #InsurTech #EventROI #TradeShows`,
        firstComment: `And here's what makes it worse:

50% of buyers choose the vendor
that follows up first.

Not the best product.
Not the lowest price.
The first one to reach out.

More on that tomorrow.`,
      },
      {
        num: 22,
        title: 'Follow Up First. Win Half the Deals.',
        funnel: 'TOFU',
        type: 'Data',
        slug: '22-persistence',
        altText: '80% of sales need 5+ touches but most vendors give up after one — persistence wins deals',
        copy: `80% of sales need 5+ touches.

Most vendors give up after one.

That's where the deals are.
Touch 4. Touch 5.
The follow-ups nobody sends.

Nearly half of salespeople
never follow up even once
after a conference.

You spent $50,000 on a booth.
Had strong conversations.
Collected a stack of cards.

Then your team sent one email
and moved on.

Here's what actually happens
in a deal cycle after an event:

→ Touch 1: "Great meeting you"
email. Everyone sends this one.
→ Touch 2: Value-add follow-up
with a relevant resource.
Maybe half your competitors
bother sending this.
→ Touch 3: Check-in call. Now
you've outlasted most of
the field.
→ Touch 4: Case study or
industry-specific resource.
You're one of the last standing.
→ Touch 5: Direct ask for
a meeting. This is where
80% of deals actually close.

Most teams quit after touch 1.

The vendors who win aren't
the ones with the best product.
They're the ones who kept showing
up when everyone else went quiet.

50% of buyers choose whoever
follows up first. But persistence
is what turns first contact
into closed revenue.

Bottom line, we have to maximize
every opportunity. Organized
and persistent beats talented
and inconsistent every time.

Are your reps making it
to touch 5?

#B2BSales #SalesStrategy #InsurTech #EventProspecting #FollowUp`,
        firstComment: `The persistence math:

If 50% of vendors never follow
up at all, and most of the rest
quit after one email, getting
to touch 3 puts you ahead
of 90% of the field.

The bar is shockingly low.

You don't need a better product.
You need a better system
that keeps your team showing up
after everyone else goes quiet.`,
      },
      {
        num: 23,
        title: 'The Post-Event Sequence',
        funnel: 'MOFU',
        type: 'Framework',
        slug: '23-post-event-sequence',
        altText: 'Segmented post-event follow-up sequence: Hot leads within 24 hours, Warm within 48 hours, Cold within 72 hours',
        copy: `You have 72 hours.

After that, event momentum dies.

79% of marketing leads
never convert.

The reason?
No follow-up system.

Most teams treat the badge scan
list like one big bucket.
Same generic email to everyone.
That's why conversion craters.

Here's the sequence
that turns scans into pipeline:

Hot leads (expressed intent):
→ Personal email within 24 hours
referencing the exact conversation
→ Call on day 2-3
→ Value-add email day 3-4
with a relevant case study
→ "Making sure this didn't
fall through" on day 8-10

Warm leads (good conversation):
→ Value-add email within 48 hours
→ Soft follow-up on day 7
→ Nurture touchpoint on day 14

Cold leads (badge scan only):
→ Brief conference intro
within 72 hours
→ Move to standard nurture

The key: segment first.

Never send the same message
to your entire badge scan list.
A hot lead who told you their
renewal timeline deserves
a completely different email
than someone who grabbed
a brochure at your booth.

This is the kind of system
we set up at WorkflowClick.
The segmentation gets designed
before the event so follow-up
runs like clockwork.

When leads come in, each tier
enters the right sequence
automatically. No scrambling.
No guesswork after the event.
Just organized execution.

What does your post-event
sequence look like?

#EventMarketing #B2BSales #InsurTech #SalesSequence #LeadNurturing`,
        firstComment: `The hot lead timing breakdown:

Email 1: Within 24 hours.
Personal. Reference the
exact conversation.

Call: Day 2-3. For your
highest-priority targets only.

Email 2: Day 3-4. Add the case
study or resource you mentioned
in person.

Email 3: Day 8-10.
"Just making sure this
didn't fall through the cracks."

Two to three emails is
the sweet spot.
More than that without a response
means move to long-term nurture.`,
      },
      {
        num: 24,
        title: 'Why 80% of Event Leads Die',
        funnel: 'TOFU',
        type: 'Story',
        slug: '24-leads-die',
        altText: 'Timeline showing how event leads decay: Day 1 excitement, Day 3 busy, Day 7 forgotten, Day 14 cold, Day 30 dead',
        copy: `80% of trade show leads die.

Here's exactly how it happens.

Day 1.

Energy is high.
Booth traffic is strong.
Your team has 30 great
conversations. Real interest.

You scan badges.
Exchange cards.
"We should definitely connect."

Day 3.

Everyone's back at the office.
500 unread emails.
Three fires to put out.
"We'll get to the event
follow-up this afternoon."

Day 7.

Afternoon never came.
The badge scans are in
a spreadsheet. Unopened.
The voice notes your reps
recorded are still on
their phones. Unlistened.
"We'll tackle it next week."

Day 14.

Those leads are cold now.
They've already talked
to your competitor.
The one who emailed on day one.
The one who referenced
the exact conversation
from the booth. They've already
had a discovery call booked.

Day 30.

The spreadsheet gets buried.
Nobody remembers the
conversations. $5.4 billion
in wasted event leads.
Every single year.

I've watched this play out
at every conference I've attended.

Same excited conversations.
Same deafening silence
two weeks later.

Everyone comes back with
a tote bag, swag, a hangover,
and some crazy stories. Maybe.

But no pipeline.

The leads didn't fail.
The system failed.

Or rather, there was
no system at all.

Has this ever happened
to your team?

#EventROI #B2BSales #InsurTech #TradeShows #FollowUp`,
        firstComment: `The antidote is boring.
But it works.

Build the follow-up system
BEFORE the event:

→ Who enters leads into the CRM?
→ What's the 24-hour SLA?
→ What sequence does each
lead tier enter?
→ Who owns follow-up
for hot leads?

Answer these questions
before Day 1 and you've
already beaten 80%
of exhibitors.

The system is the strategy.`,
      },
    ],
  },
  {
    num: 5,
    theme: 'The Event Prospecting Playbook',
    posts: [
      {
        num: 25,
        title: 'The Full Framework -- Event Prospecting in 7 Principles',
        funnel: 'MOFU',
        type: 'Framework',
        slug: '25-full-framework',
        altText: '7 principles of event prospecting: pre/post focus, start early, tier targets, satellite events, speed, segmentation, measurement',
        copy: `These 7 principles cost me
real money to learn.

Everything I know about
InsurTech event prospecting
fits on this list.

1. 80% of your strategy
is pre- and post-event.
The booth is the middle.
Not the beginning or the end.

2. Start outbound 60-90 days out.
Pre-booked meetings
outperform walk-up traffic 6x.
That gap is not closeable
on the expo floor.

3. Tier your targets ruthlessly.
Not every badge scan deserves
the same follow-up investment.
A-tier gets personal outreach.
C-tier gets a nurture sequence.

4. Satellite events and dinners
outperform large expo halls
per dollar spent.
Smaller rooms. Better signal.
Better conversations.

5. The 24-hour follow-up window
determines everything.
53% convert in hour one.
17% after day one.
Most vendors wait 3-5 days.

6. Segment every follow-up.
Generic "great to meet you"
emails get deleted.
Reference the actual conversation.
Prove you were listening.

7. Set measurement goals
before the event starts.
Companies that track ROI
see 5x greater marketing returns
than those who fly blind.

A decade of events. 7+ companies.
Thousands of conversations
on expo floors and in hallways.

All of these principles are now
built into how we work
at WorkflowClick.

Which principle are you
weakest on right now?

#InsurTech #EventProspecting
#B2BSales #ConferenceROI`,
        firstComment: `This post is the summary of
a 30-post series on event
prospecting for InsurTech vendors.

If you're joining late, start
here and work backward.

Each principle was a full post
(or more) earlier in this series.

Happy to point you to the
specific one you need most.`,
      },
      {
        num: 26,
        title: 'What I Learned Selling AI to Insurance Companies',
        funnel: 'MOFU',
        type: 'Story',
        slug: '26-ai-insurance',
        altText: 'Lessons from selling AI to insurance companies: lead with outcomes, not features — peer credibility wins',
        copy: `Insurance buyers don't care
about your technology.

I learned this the hard way.

I sold AI risk solutions
for a YC-backed InsurTech.
Swiss Re and Greenlight Re
were investors.
The product was strong.

I was at Element AI
when ServiceNow acquired us
in 2020.

Both companies had
real technology.

Here's what those years
taught me about selling
at insurance conferences:

→ Buyers are risk-averse by nature.
Hard sells don't just fail.
They end the conversation.

→ They want outcomes. Not features.
"We improved quote-to-bind by 14%"
beats any product walkthrough.

→ 52% of InsurTech NY attendees
are VP-level or above.
You get one shot at the table.
Lead with proof, not promises.

→ Peer credibility wins.
A carrier CTO referencing
your tool during a panel
outweighs anything
your booth pitch can do.

→ The InsurTech conference circuit
has matured dramatically.
Less disruption theater.
More pragmatic problem-solving.

→ The biggest shift I made:
stop approaching someone at a booth
with a pitch deck.
Start asking "what's your biggest
operational frustration right now?"
Night and day difference.

Everyone at these events
claims AI now.

The differentiator is not
the technology.

It's the go-to-market execution.
The distribution.
The follow-up system.
The relevance of your outreach.

What's the biggest difference
you've noticed between
insurance buyers and
typical SaaS buyers?

#InsurTech #AISales
#InsuranceInnovation #B2BSales`,
        firstComment: `The single biggest shift I made:

Stop talking about features
at events.

Start asking what problem
keeps them up at night.

The conversations changed.
The pipeline changed overnight.

Insurance people open up
when you lead with curiosity
instead of a pitch deck.`,
      },
      {
        num: 27,
        title: 'The Events Worth Your Money in 2026',
        funnel: 'TOFU',
        type: 'Data',
        slug: '27-event-calendar',
        altText: 'Ranked 2026 InsurTech event calendar: ITC Vegas, RIMS RISKWORLD, WSIA, TMPAA, Insurance Innovators, and more',
        copy: `Not all InsurTech events
are created equal.

I've worked most of them.
Here's how I'd rank the
2026 calendar and why.

For broad InsurTech reach:
→ ITC Vegas (Sep 29-Oct 1)
9,000+ attendees. Las Vegas.
The flagship. Everyone is there.
Best event for sheer volume
of potential conversations.
→ Insurtech Insights USA (Jun 3-4)
6,000+ attendees. New York City.
Strong for early-stage vendors
looking for visibility.

For MGA and E&S audiences:
→ WSIA Marketplace (Oct 11-14)
8,300+ in San Diego.
Premier wholesale event.
If you sell to MGAs,
this is non-negotiable.
→ TMPAA Summit (Oct 19-21)
2,000 program specialists.
Scottsdale. Tight and focused.
High signal, low noise.

For C-suite carrier access:
→ Insurance Innovators USA
(May 11-12) 1,500+ senior execs.
Nashville. Confirmed Fortune 500.
The room you want to be in
if carriers are your target.
→ Future of Insurance USA
(Jun 25-26) 500+ C-suite. Chicago.
Curated. Invite-heavy.

For risk managers and brokers:
→ RIMS RISKWORLD (May 3-6)
10,000+ risk managers, C-suite,
brokers, insurers,
all in one building.
This is my favorite room
in insurance.

Event budgets grew 12.3% in 2025.
The money is flowing
into these rooms.

Pick 3-4 per year. Go deep.
Pre-book meetings. Run outbound.
That beats spreading thin
across 8-10 every time.

Which events are you
targeting this year?

#InsurTech #EventStrategy
#InsuranceEvents #ConferenceROI`,
        firstComment: `Second tier worth watching
by specialty:

→ WCI Annual (Aug 23-26, Orlando)
5,000+ workers' comp pros

→ Applied Net (Sep 27-Oct 1, DC)
3,000+ agency tech buyers

→ PLUS Conference (Nov 10-12, SD)
2,000 professional liability pros

Note the Q4 cluster:
ITC Vegas, WSIA Marketplace,
and TMPAA Summit all happen
within 3 weeks (Sep 29 - Oct 21).

Plan your outbound accordingly.
That's a lot of pre-event work
compressed into one window.`,
      },
      {
        num: 28,
        title: 'The Case for Outsourcing Event Outbound',
        funnel: 'BOFU',
        type: 'Social Proof',
        slug: '28-outsource-outbound',
        altText: 'In-house SDR costs $100K+/year with 3-6 month ramp — WorkflowClick delivers outbound infrastructure in 6-8 weeks',
        copy: `Here's the math nobody
wants to do.

An in-house SDR costs
$100K+ per year fully loaded.

Takes 3-6 months to ramp up.

35-40% annual turnover rate.

Now stack that against what
event prospecting actually demands:

→ 60-90 days of pre-event
outreach per conference.

→ Enriched attendee lists
with ICP filtering and tiering.

→ Multi-touch email sequences
personalized by buyer tier.

→ Day-of coordination,
lead capture, and note-taking.

→ Segmented post-event follow-up
deployed within 24 hours.

For a seed-stage startup
attending 3-5 events per year,
that is a full-time job.

But the work comes in
90-day sprints.
Not 12-month commitments.

I tried running this in-house
at a previous company.
Two SDRs. Both ramping.
Conference was 8 weeks away.
By the time they were ready,
we'd missed the outreach window.
Walked the floor cold.
Came back with business cards
and not much else.

That experience is why I built
WorkflowClick to solve this gap.

Done-for-you outbound
infrastructure in 6-8 weeks.

You own the entire system
after 90 days. Domains. Inboxes.
Sequences. SOPs. All yours.

Not a retainer.
Not a dependency.
A full transfer of ownership.

If you're evaluating this
for an upcoming event,
what's the biggest bottleneck
in your outbound right now?

#InsurTech #SalesInfrastructure
#EventProspecting #B2BStartups`,
        firstComment: `Honest timing guidance:

If your event is less than
60 days away and you haven't
started outbound, you're behind.

But it's not too late.
You just need to compress
the timeline.

The minimum viable system:
enriched attendee list,
3-email pre-event sequence,
tiered follow-up templates,
and a 24-hour follow-up SLA.

That can be stood up
in 3-4 weeks
if you know what you're doing.`,
      },
      {
        num: 29,
        title: 'What 10 Years and $10M in ARR Taught Me About Events',
        funnel: 'BOFU',
        type: 'Story',
        slug: '29-decade-lessons',
        altText: 'SDR to Sales Director to Founder: 10+ years, 7+ companies, $10M+ ARR — systems beat charisma at events',
        copy: `My first InsurTech event
I walked the floor cold.

No booth. Zero sponsor badge.
No meetings booked.

I collected business cards.
Followed up the next week.
Got almost nothing from it.

Everyone else came back
with a tote bag, swag,
a hangover, and maybe
some crazy stories.

I came back with the same.

Then I started changing things.

I'd get the attendee list early.
Give our SDRs access.
They'd start combing through it,
identifying the right people.

We'd set up a Slack channel
for the event.
That's where everything lived.

At RISKWORLD, when I was there
solo, I'd keep it simple.
15-minute cup of joe meetings.
That usually worked.

When someone handed me
a business card, I'd snap
a photo and drop it straight
into the Slack channel.
SDRs would add them to the CRM
immediately.

Follow-up started before I got
back to my hotel room.

Last few events, I've landed
with 25 meetings pre-booked.
SDRs working in parallel.
Business cards processed
in real-time. Pipeline building
while I'm still on the floor.

The contrast between walking
a floor cold and landing
with a full war room running
before you even pack your bags.

That's the whole lesson.

Systems beat charisma.
Preparation beats presence.

What's the biggest lesson
an event taught you
about your sales process?

#InsurTech #B2BSales
#FounderStory #EventROI`,
        firstComment: `Quick background on me:

SDR to Sales Director to Founder.
10+ years. 7+ companies.
$10M+ in ARR generated.

Element AI (acquired by
ServiceNow in 2020).
Armilla AI (backed by Swiss Re
and Greenlight Re).

The through-line across
every role was the same:

Events are prospecting events,
not networking events.

The companies that treat them
that way generate real pipeline.
The rest collect badge scans.`,
      },
      {
        num: 30,
        title: 'Your Event Season Starts Now',
        funnel: 'BOFU',
        type: 'CTA',
        slug: '30-season-starts-now',
        altText: 'Event season 2026: RIMS May 3, Insurance Innovators May 11, ITC Vegas Sep 29 — your outbound window opens now',
        copy: `RIMS RISKWORLD is May 3.
That's weeks away, not months.

Insurance Innovators USA
is May 11 in Nashville.
1,500+ senior executives.

Insurtech Insights USA
is June 3 in New York.
6,000+ attendees.

If you haven't started
pre-event outreach for these,
you're already behind.

The 90-day preparation window
for fall events opens this month:

→ ITC Vegas (Sep 29-Oct 1)
9,000+ attendees. The flagship.

→ WSIA Marketplace (Oct 11-14)
8,300+ E&S and wholesale pros.

→ TMPAA Summit (Oct 19-21)
2,000 program specialists.

Here's what I know for certain:

The vendors who land at events
with 20+ pre-booked meetings
will outperform the ones
who show up and wing it.

Every single time.

Pre-booked meetings convert 6x
higher than walk-up traffic.
53% of conversions happen
in the first hour of follow-up.

The math doesn't change.
The window doesn't wait.

The outbound infrastructure
you build in the next 60 days
determines your Q3 pipeline.

I've spent 30 posts
breaking down exactly
how this system works.
Every piece is on my profile.

If you've got the bandwidth,
run it yourself. It's all there.

If you don't, that's the gap
WorkflowClick was built to fill.

Drop a comment with your
next event.

What event are you
targeting this year?

#InsurTech #EventProspecting
#InsuranceEvents #B2BSales
#ConferenceROI`,
        firstComment: `If you found value in
this 30-post series,
two things you can do:

1. Save this post as
a bookmark for your
next event planning cycle.

2. Drop a comment with
which event you're targeting.
I'll share what I know about it.

Everything is on my profile.
Start wherever fits your
situation right now.`,
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
  const imgUrl = `${IMG_BASE}/post-${post.slug}.jpg`

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Post Image */}
      <div className="relative w-full aspect-[1.91/1] bg-gray-100">
        <Image
          src={imgUrl}
          alt={post.altText}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
          unoptimized
        />
      </div>

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

        <h3 className="text-xl font-bold text-gray-900 mb-6">{post.title}</h3>

        {/* Post Copy */}
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
            Post Copy
          </p>
          <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6">
            <pre className="whitespace-pre-wrap font-sans text-[15px] text-gray-800 leading-relaxed">
              {post.copy}
            </pre>
          </div>
        </div>

        {/* Alt Text */}
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
            Image Alt Text
          </p>
          <p className="text-sm text-gray-500 italic">{post.altText}</p>
        </div>

        {/* First Comment */}
        <div className="bg-slate-50 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 px-6 sm:px-8 py-6 border-t border-gray-100">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
            First Comment
          </p>
          <pre className="whitespace-pre-wrap font-sans text-sm text-gray-600 leading-relaxed">
            {post.firstComment}
          </pre>
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
              30-post LinkedIn campaign with full post copy, images, and first
              comments. Ready for your review.
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
            </div>

            {/* Post Cards */}
            <div className="space-y-10">
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
              All 30 posts with full copy, Cloudinary images, first comments,
              and alt text. Ready for scheduling.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-2xl font-bold text-blue-600">{totalTOFU}</p>
                <p className="text-xs text-gray-500 mt-1">TOFU</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-2xl font-bold text-amber-600">{totalMOFU}</p>
                <p className="text-xs text-gray-500 mt-1">MOFU</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-2xl font-bold text-green-600">{totalBOFU}</p>
                <p className="text-xs text-gray-500 mt-1">BOFU</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
