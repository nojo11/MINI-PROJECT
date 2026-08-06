import { useQuery } from '@tanstack/react-query'
import { getRecentScans } from '@/services/history'

export function useRecentScansQuery() {
  return useQuery({
    queryKey: ['recent-scans'],
    queryFn: getRecentScans,
  })
}
