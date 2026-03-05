'use client'

import { useState, useMemo } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface ROIInputs {
  monthlyCost: number
  meetingsPerMonth: number
  closeRate: number
  avgPremium: number
  commissionRate: number
  retentionRate: number
  years: number
}

const defaults: ROIInputs = {
  monthlyCost: 3000,
  meetingsPerMonth: 5,
  closeRate: 28,
  avgPremium: 25000,
  commissionRate: 12,
  retentionRate: 85,
  years: 5,
}

const sliderConfig = [
  { key: 'monthlyCost' as const, label: 'Monthly investment', min: 1500, max: 10000, step: 500, prefix: '$', suffix: '' },
  { key: 'meetingsPerMonth' as const, label: 'Meetings booked per month', min: 2, max: 20, step: 1, prefix: '', suffix: '' },
  { key: 'closeRate' as const, label: 'Close rate from meeting', min: 15, max: 50, step: 1, prefix: '', suffix: '%' },
  { key: 'avgPremium' as const, label: 'Avg annual premium won', min: 10000, max: 150000, step: 5000, prefix: '$', suffix: '' },
  { key: 'commissionRate' as const, label: 'Blended commission rate', min: 8, max: 18, step: 1, prefix: '', suffix: '%' },
  { key: 'retentionRate' as const, label: 'Annual retention rate', min: 75, max: 95, step: 1, prefix: '', suffix: '%' },
  { key: 'years' as const, label: 'Projection period', min: 1, max: 10, step: 1, prefix: '', suffix: ' years' },
]

function formatCurrency(n: number): string {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`
  if (n >= 1000) return `$${Math.round(n).toLocaleString()}`
  return `$${Math.round(n)}`
}

export function ROICalculator() {
  const [inputs, setInputs] = useState<ROIInputs>(defaults)

  const results = useMemo(() => {
    const { monthlyCost, meetingsPerMonth, closeRate, avgPremium, commissionRate, retentionRate, years } = inputs
    const annualCost = monthlyCost * 12
    const accountsPerMonth = meetingsPerMonth * (closeRate / 100)
    const commissionPerAccount = avgPremium * (commissionRate / 100)
    const monthsCoveredPerAccount = commissionPerAccount / monthlyCost
    const retention = retentionRate / 100

    // Calculate cumulative book value over N years
    let totalCommission = 0
    let activeAccounts = 0
    const yearlyGrowth: number[] = []

    for (let y = 1; y <= years; y++) {
      // Existing accounts retain
      activeAccounts = activeAccounts * retention
      // Add new accounts for the year
      activeAccounts += accountsPerMonth * 12
      const yearCommission = activeAccounts * commissionPerAccount
      totalCommission += yearCommission
      yearlyGrowth.push(yearCommission)
    }

    const totalInvestment = annualCost * years
    const netROI = totalCommission - totalInvestment
    const roiPercent = totalInvestment > 0 ? (netROI / totalInvestment) * 100 : 0

    // Break-even: how many months until cumulative commission >= cumulative cost
    let cumCommission = 0
    let cumCost = 0
    let runningAccounts = 0
    let breakEvenMonths = 0
    for (let m = 1; m <= years * 12; m++) {
      cumCost += monthlyCost
      runningAccounts = runningAccounts * Math.pow(retention, 1 / 12) + accountsPerMonth
      cumCommission += runningAccounts * commissionPerAccount / 12
      if (cumCommission >= cumCost && breakEvenMonths === 0) {
        breakEvenMonths = m
      }
    }

    const year1Commission = yearlyGrowth[0] || 0
    const sdrAnnualCost = 94000
    const sdrSavings = sdrAnnualCost - annualCost

    return {
      monthsCoveredPerAccount: Math.round(monthsCoveredPerAccount * 10) / 10,
      breakEvenMonths,
      year1Commission,
      netROI,
      roiPercent,
      sdrSavings,
      yearlyGrowth,
    }
  }, [inputs])

  function updateInput(key: keyof ROIInputs, value: number) {
    setInputs((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Run the Numbers for Your Agency"
          subtitle="Adjust the inputs to match your lines of business, your close rate, and your average premium. The math updates in real time."
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-dark">Your Inputs</h3>
            {sliderConfig.map((s) => (
              <div key={s.key}>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm text-medium-gray">{s.label}</label>
                  <span className="text-sm font-semibold text-dark">
                    {s.prefix}{inputs[s.key].toLocaleString()}{s.suffix}
                  </span>
                </div>
                <input
                  type="range"
                  min={s.min}
                  max={s.max}
                  step={s.step}
                  value={inputs[s.key]}
                  onChange={(e) => updateInput(s.key, Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-light-gray mt-1">
                  <span>{s.prefix}{s.min.toLocaleString()}{s.suffix}</span>
                  <span>{s.prefix}{s.max.toLocaleString()}{s.suffix}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Outputs */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-dark">Your Results</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <OutputCard
                label="One account pays for"
                value={`${results.monthsCoveredPerAccount} months`}
                detail="of your monthly investment"
              />
              <OutputCard
                label="Break even in"
                value={results.breakEvenMonths > 0 ? `${results.breakEvenMonths} months` : 'Month 1'}
                detail="cumulative commission covers cost"
              />
              <OutputCard
                label="Year 1 commission"
                value={formatCurrency(results.year1Commission)}
                detail="from new accounts written"
              />
              <OutputCard
                label={`${inputs.years}-year net ROI`}
                value={`${Math.round(results.roiPercent)}%`}
                detail={formatCurrency(results.netROI) + ' net profit'}
                highlight={results.roiPercent > 0}
              />
              <OutputCard
                label="Save vs. in-house producer"
                value={formatCurrency(results.sdrSavings)}
                detail="per year ($94K fully loaded)"
              />
              <OutputCard
                label={`Year ${inputs.years} annual commission`}
                value={formatCurrency(results.yearlyGrowth[results.yearlyGrowth.length - 1] || 0)}
                detail="from your compounding book"
              />
            </div>

            {/* Mini book growth chart */}
            {results.yearlyGrowth.length > 1 && (
              <div className="bg-bg-light rounded-xl p-6">
                <p className="text-sm font-medium text-dark mb-4">Book growth over {inputs.years} years</p>
                <div className="flex items-end gap-2 h-32">
                  {results.yearlyGrowth.map((val, i) => {
                    const max = Math.max(...results.yearlyGrowth)
                    const pct = max > 0 ? (val / max) * 100 : 0
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <span className="text-xs text-medium-gray">{formatCurrency(val)}</span>
                        <div
                          className="w-full bg-primary rounded-t-sm transition-all duration-500"
                          style={{ height: `${Math.max(pct, 4)}%` }}
                        />
                        <span className="text-xs text-light-gray">Y{i + 1}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            <p className="text-xs text-light-gray">
              Based on insurance industry averages. Commission rates, retention, and close rates vary by line of business and market. These projections assume consistent monthly prospecting volume.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

function OutputCard({
  label,
  value,
  detail,
  highlight,
}: {
  label: string
  value: string
  detail: string
  highlight?: boolean
}) {
  return (
    <div className={`p-4 rounded-xl border ${highlight ? 'border-primary bg-primary/5' : 'border-gray-100 bg-bg-light'}`}>
      <p className="text-xs text-medium-gray">{label}</p>
      <p className={`text-2xl font-bold mt-1 ${highlight ? 'text-primary' : 'text-dark'}`}>{value}</p>
      <p className="text-xs text-light-gray mt-1">{detail}</p>
    </div>
  )
}
