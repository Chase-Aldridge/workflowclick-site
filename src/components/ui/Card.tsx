import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  variant?: 'default' | 'highlighted' | 'premium'
  className?: string
}

const variants = {
  default: 'border border-gray-200 bg-white',
  highlighted: 'border-2 border-primary bg-white ring-1 ring-primary/10',
  premium:
    'border border-transparent bg-white bg-gradient-to-b from-white to-gray-50 shadow-lg',
}

export function Card({
  children,
  variant = 'default',
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6 sm:p-8 transition-shadow hover:shadow-lg',
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  )
}
