import type { AnalysisResult } from '@/types/analysis'

export type RecentScan = Pick<
  AnalysisResult,
  'id' | 'timestamp' | 'message' | 'risk' | 'confidence'
>
