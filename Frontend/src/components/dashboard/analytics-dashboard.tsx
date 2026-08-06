import { lazy, Suspense } from 'react'
import type { AnalyticsSummary } from '@/types/analysis'
import { Card, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { StatCard } from '@/components/dashboard/stat-card'

const Charts = lazy(() => import('@/components/dashboard/charts'))

interface AnalyticsDashboardProps {
  summary: AnalyticsSummary
}

export function AnalyticsDashboard({ summary }: AnalyticsDashboardProps) {
  return (
    <section className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Messages Checked" value={summary.messagesChecked.toString()} />
        <StatCard title="Frauds Prevented" value={summary.fraudsPrevented.toString()} />
        <StatCard title="Average Confidence" value={`${summary.averageConfidence}%`} />
        <StatCard title="Today's Threats" value={summary.todaysThreats.toString()} />
      </div>
      <Card className="space-y-3">
        <CardTitle>Threat Analytics</CardTitle>
        <Suspense fallback={<Skeleton className="h-64 w-full" />}>
          <Charts trend={summary.trend} categoryShare={summary.categoryShare} />
        </Suspense>
      </Card>
    </section>
  )
}
