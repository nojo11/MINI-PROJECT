import { LoaderCircle } from 'lucide-react'
import { cn } from '@/utils/cn'

interface SpinnerProps {
  className?: string
}

export function Spinner({ className }: SpinnerProps) {
  return <LoaderCircle className={cn('size-5 animate-spin text-primary', className)} />
}
