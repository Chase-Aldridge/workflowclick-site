import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function FinalCTA() {
  return (
    <section className="py-20 bg-bg-light">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">
            Ready to Fill Your Pipeline?
          </h2>
          <p className="mt-4 text-lg text-medium-gray">
            Book a free strategy call. No pitch deck, no pressure. Just a
            conversation about your outbound goals.
          </p>

          <div className="mt-8">
            <Button href="/contact" size="lg">
              Book a Strategy Call
            </Button>
          </div>

          <p className="mt-6 text-sm text-light-gray">
            You&apos;ll speak directly with Moe, our founder.
          </p>
        </div>
      </Container>
    </section>
  )
}
