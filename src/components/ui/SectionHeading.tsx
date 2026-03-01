import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && 'text-center', 'mb-12', className)}>
      <h2
        className={cn(
          'text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl',
          light ? 'text-white' : 'text-dark'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg max-w-3xl',
            centered && 'mx-auto',
            light ? 'text-white/70' : 'text-medium-gray'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
