import { useEffect, useState } from 'react'
import { AnalyticsDashboard } from '@/components/dashboard/analytics-dashboard'
import { RecentScansTable } from '@/components/dashboard/recent-scans-table'
import { SmsAnalysisForm } from '@/components/forms/sms-analysis-form'
import { LoadingExperience } from '@/components/analysis/loading-experience'
import { ResultsScreen } from '@/components/analysis/results-screen'
import { ErrorState } from '@/components/ui/error-state'
import { PageHeader } from '@/components/layout/page-header'
import { useAnalyticsSummaryQuery } from '@/features/dashboard/hooks'
import { useRecentScansQuery } from '@/features/history/hooks'
import { useAnalyzeSmsMutation } from '@/features/sms-analysis/hooks'
import { useUiStore } from '@/store/ui-store'

export function HomePage() {
  const analyzeMutation = useAnalyzeSmsMutation()
  const recentScans = useRecentScansQuery()
  const analytics = useAnalyticsSummaryQuery()
  const { phase, setPhase, lastResult, setLastResult } = useUiStore()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (phase !== 'loading') return
    const timer = window.setInterval(
      () => setProgress((current) => Math.min(95, current + 12)),
      200,
    )
    return () => window.clearInterval(timer)
  }, [phase])

  function handleAnalyze(message: string) {
    setProgress(0)
    setPhase('loading')
    analyzeMutation.mutate(message, {
      onSuccess: (result) => {
        setProgress(100)
        setLastResult(result)
        setPhase('results')
      },
      onError: () => {
        setPhase('idle')
      },
    })
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Protect Yourself from Mobile Money Scams"
        description="Paste a Ghanaian MoMo SMS and our AI model will evaluate fraud probability, explain risk factors, and recommend safe next actions."
      />
      <SmsAnalysisForm loading={analyzeMutation.isPending} onSubmit={handleAnalyze} />

      {phase === 'loading' ? <LoadingExperience progress={progress} /> : null}
      {phase === 'results' && lastResult ? <ResultsScreen result={lastResult} /> : null}

      {analyzeMutation.isError ? (
        <ErrorState
          title="Model Unavailable"
          description="We could not analyze your message. Please retry in a few seconds."
          onRetry={() => analyzeMutation.reset()}
        />
      ) : null}

      {recentScans.isError ? (
        <ErrorState
          title="History Unavailable"
          description="Recent scans could not be loaded due to a network error."
        />
      ) : recentScans.data ? (
        <RecentScansTable scans={recentScans.data} />
      ) : null}

      {analytics.data ? <AnalyticsDashboard summary={analytics.data} /> : null}
    </div>
  )
}
