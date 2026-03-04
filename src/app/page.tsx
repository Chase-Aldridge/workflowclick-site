import { Hero } from '@/components/sections/Hero'
import { LogoBar } from '@/components/sections/LogoBar'
import { ProblemGrid } from '@/components/sections/ProblemGrid'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { PricingTiers } from '@/components/sections/PricingTiers'
import { StatsBar } from '@/components/sections/StatsBar'
import { Differentiators } from '@/components/sections/Differentiators'
import { Testimonials } from '@/components/sections/Testimonials'
import { AuditCTA } from '@/components/sections/AuditCTA'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { SchemaScript } from '@/components/shared/SchemaScript'
import { getFAQSchema } from '@/lib/schema'
import { getAllFaqItems } from '@/data/audience-content'

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={getFAQSchema(getAllFaqItems())} />
      <Hero />
      <LogoBar />
      <ProblemGrid />
      <ProcessSteps />
      <PricingTiers />
      <StatsBar />
      <Differentiators />
      <Testimonials />
      <AuditCTA />
      <FAQ />
      <FinalCTA />
    </>
  )
}
