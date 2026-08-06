import { AnalyticsDashboard } from '@/components/dashboard/analytics-dashboard'
import { PageHeader } from '@/components/layout/page-header'
import { ErrorState } from '@/components/ui/error-state'
import { useAnalyticsSummaryQuery } from '@/features/dashboard/hooks'

export function AnalyticsPage() {
  const analytics = useAnalyticsSummaryQuery()

  return (
    <div className="space-y-6">
      <PageHeader
        title="Threat Analytics Dashboard"
        description="Track fraud trends, scan confidence, and category distribution."
      />
      {analytics.isError ? (
        <ErrorState
          title="Network Error"
          description="Analytics data could not be loaded. Please retry shortly."
        />
      ) : analytics.data ? (
        <AnalyticsDashboard summary={analytics.data} />
      ) : null}
    </div>
  )
}
