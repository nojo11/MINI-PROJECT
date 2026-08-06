import { ShieldAlert } from 'lucide-react'
import type { RecommendationItem } from '@/types/analysis'
import { Card, CardTitle } from '@/components/ui/card'

interface RecommendationsPanelProps {
  recommendations: RecommendationItem[]
}

export function RecommendationsPanel({
  recommendations,
}: RecommendationsPanelProps) {
  return (
    <Card className="space-y-3">
      <CardTitle>Recommendations</CardTitle>
      <ul className="space-y-2">
        {recommendations.map((recommendation) => (
          <li key={recommendation.id} className="rounded-[8px] bg-muted p-3">
            <p className="flex items-center gap-2 text-sm font-medium text-foreground">
              <ShieldAlert className="size-4 text-primary" />
              {recommendation.text}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{recommendation.reason}</p>
          </li>
        ))}
      </ul>
    </Card>
  )
}
