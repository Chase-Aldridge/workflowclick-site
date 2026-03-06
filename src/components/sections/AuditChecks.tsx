'use client'

import { Shield, Search, FileCheck, Zap, MapPin, Users, BarChart3, Target } from 'lucide-react'
import { useAudience } from '@/context/AudienceContext'

const domainAuditChecks = [
  {
    icon: Shield,
    title: 'Authentication Check',
    description:
      'SPF, DKIM, and DMARC records verified and scored. Misconfigured authentication means your emails to prospects and carriers land in spam.',
  },
  {
    icon: Search,
    title: 'Blacklist Scan',
    description:
      'Your domain checked against all major blacklists. If you or a past vendor damaged your domain, we find it.',
  },
  {
    icon: FileCheck,
    title: 'Deliverability Score',
    description:
      'Overall health score with clear pass/fail breakdown. See exactly how your agency stacks up.',
  },
  {
    icon: Zap,
    title: 'Action Plan',
    description:
      'Specific steps to fix every issue we find. Most agencies can resolve critical problems in a few days.',
  },
]

const marketReportChecks = [
  {
    icon: MapPin,
    title: 'Territory Analysis',
    description:
      'We map your zip codes and identify the total addressable market of commercial businesses in your territory.',
  },
  {
    icon: Users,
    title: 'Prospect Density',
    description:
      'How many commercial prospects match your ideal profile by industry, company size, and line of business.',
  },
  {
    icon: BarChart3,
    title: 'Competitor Landscape',
    description:
      'See how many agencies are actively prospecting in your territory and where the gaps are.',
  },
  {
    icon: Target,
    title: 'Recommended Verticals',
    description:
      'We identify the top industry verticals in your area based on density, deal size, and your carrier appetite.',
  },
]

export function AuditChecks() {
  const { audience } = useAudience()

  const checks = audience === 'agency' ? marketReportChecks : domainAuditChecks

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {checks.map((check) => (
        <div
          key={check.title}
          className="flex gap-4 p-6 bg-bg-light rounded-xl"
        >
          <check.icon className="h-8 w-8 text-primary shrink-0" />
          <div>
            <h3 className="font-semibold text-dark">{check.title}</h3>
            <p className="text-sm text-medium-gray mt-1">
              {check.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
