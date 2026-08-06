import { useQuery } from '@tanstack/react-query'
import { getAnalyticsSummary } from '@/services/reports'

export function useAnalyticsSummaryQuery() {
  return useQuery({
    queryKey: ['analytics'],
    queryFn: getAnalyticsSummary,
  })
}
