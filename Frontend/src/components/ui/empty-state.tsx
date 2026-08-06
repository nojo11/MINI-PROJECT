import { Shield } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface EmptyStateProps {
  title: string
  description: string
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <Card className="flex flex-col items-center gap-3 py-8 text-center">
      <Shield className="size-8 text-muted-foreground" aria-hidden="true" />
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="max-w-md text-sm text-muted-foreground">{description}</p>
    </Card>
  )
}
