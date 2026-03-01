import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'gold'
  className?: string
}

const variants = {
  primary: 'bg-primary text-white',
  outline: 'bg-transparent border border-primary text-primary',
  gold: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white',
}

export function Badge({ children, variant = 'primary', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
