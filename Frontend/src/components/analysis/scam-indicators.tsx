import type { RiskLabel } from '@/types/analysis'
import { Badge } from '@/components/ui/badge'

interface ScamIndicatorsProps {
  indicators: string[]
  risk: RiskLabel
}

export function ScamIndicators({ indicators, risk }: ScamIndicatorsProps) {
  const variant = risk === 'safe' ? 'safe' : risk === 'suspicious' ? 'suspicious' : 'danger'

  if (indicators.length === 0) {
    return <Badge variant="safe">No scam indicators detected</Badge>
  }

  return (
    <div className="flex flex-wrap gap-2">
      {indicators.map((indicator) => (
        <Badge key={indicator} variant={variant}>
          {indicator}
        </Badge>
      ))}
    </div>
  )
}
