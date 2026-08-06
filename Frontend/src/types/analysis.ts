export type RiskLabel = 'safe' | 'suspicious' | 'fraudulent'

export interface ExplanationItem {
  id: string
  title: string
  description: string
  confidence: number
}

export interface RecommendationItem {
  id: string
  text: string
  reason: string
}

export interface AnalysisResult {
  id: string
  timestamp: string
  message: string
  fraudProbability: number
  confidence: number
  risk: RiskLabel
  indicators: string[]
  explanations: ExplanationItem[]
  recommendations: RecommendationItem[]
}

export interface AnalyticsSummary {
  messagesChecked: number
  fraudsPrevented: number
  averageConfidence: number
  todaysThreats: number
  trend: Array<{ day: string; scans: number; frauds: number }>
  categoryShare: Array<{ name: string; value: number }>
}
