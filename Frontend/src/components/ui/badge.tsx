import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
  {
    variants: {
      variant: {
        safe: 'bg-safe-soft text-safe',
        suspicious: 'bg-suspicious-soft text-suspicious',
        danger: 'bg-danger-soft text-danger',
        info: 'bg-muted text-muted-foreground',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  },
)

export function Badge({
  className,
  variant,
  ...props
}: HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}
