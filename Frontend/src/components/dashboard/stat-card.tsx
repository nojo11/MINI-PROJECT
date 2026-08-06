import { Card } from '@/components/ui/card'

interface StatCardProps {
  title: string
  value: string
}

export function StatCard({ title, value }: StatCardProps) {
  return (
    <Card className="space-y-2">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{title}</p>
      <p className="font-mono text-2xl font-semibold text-foreground">{value}</p>
    </Card>
  )
}
