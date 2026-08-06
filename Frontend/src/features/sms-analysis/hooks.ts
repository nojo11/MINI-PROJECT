import { useMutation, useQueryClient } from '@tanstack/react-query'
import { analyzeSms } from '@/services/analysis'

export function useAnalyzeSmsMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: analyzeSms,
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['recent-scans'] })
      void queryClient.invalidateQueries({ queryKey: ['analytics'] })
    },
  })
}
