import { Container } from '@/components/ui/Container'

const logos = [
  { name: 'Element AI / ServiceNow', abbr: 'Element AI' },
  { name: 'Armilla AI', abbr: 'Armilla AI' },
  { name: 'PointClickCare', abbr: 'PointClickCare' },
  { name: 'Xero', abbr: 'Xero' },
  { name: 'BlueCat', abbr: 'BlueCat' },
]

export function LogoBar() {
  return (
    <section className="py-12 border-b border-gray-100">
      <Container>
        <p className="text-center text-sm uppercase tracking-wider text-light-gray mb-8">
          Leadership Experience Across
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-light-gray hover:text-medium-gray transition-colors"
              title={logo.name}
            >
              {/* Replace with SVG logos when available */}
              <span className="text-lg font-semibold tracking-tight opacity-50 hover:opacity-80 transition-opacity">
                {logo.abbr}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
