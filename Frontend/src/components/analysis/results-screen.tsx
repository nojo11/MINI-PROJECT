import { Card, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AiExplanationList } from '@/components/analysis/ai-explanation-list'
import { RecommendationsPanel } from '@/components/analysis/recommendations-panel'
import { RiskMeter } from '@/components/analysis/risk-meter'
import { ScamIndicators } from '@/components/analysis/scam-indicators'
import type { AnalysisResult } from '@/types/analysis'
import { formatRiskLabel } from '@/utils/format'

interface ResultsScreenProps {
  result: AnalysisResult
}

export function ResultsScreen({ result }: ResultsScreenProps) {
  const resultVariant =
    result.risk === 'safe' ? 'safe' : result.risk === 'suspicious' ? 'suspicious' : 'danger'

  return (
    <section className="grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
      <div className="space-y-4">
        <Card className="space-y-4">
          <CardTitle>Analysis Result</CardTitle>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={resultVariant}>{formatRiskLabel(result.risk)}</Badge>
            <p className="font-mono text-sm text-muted-foreground">
              Confidence: {result.confidence}%
            </p>
          </div>
          <ScamIndicators indicators={result.indicators} risk={result.risk} />
        </Card>
        <Card className="space-y-3">
          <CardTitle>AI Explanation</CardTitle>
          <AiExplanationList explanations={result.explanations} />
        </Card>
      </div>
      <div className="space-y-4">
        <Card className="space-y-3">
          <CardTitle>Risk Meter</CardTitle>
          <RiskMeter value={result.fraudProbability} risk={result.risk} />
        </Card>
        <RecommendationsPanel recommendations={result.recommendations} />
      </div>
    </section>
  )
}
