import { CircleAlert } from 'lucide-react'
import type { ExplanationItem } from '@/types/analysis'
import { Card } from '@/components/ui/card'

interface AiExplanationListProps {
  explanations: ExplanationItem[]
}

export function AiExplanationList({ explanations }: AiExplanationListProps) {
  return (
    <div className="space-y-3">
      {explanations.map((item) => (
        <Card key={item.id} className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h4 className="flex items-center gap-2 font-semibold text-foreground">
              <CircleAlert className="size-4 text-primary" />
              {item.title}
            </h4>
            <span className="font-mono text-xs text-muted-foreground">
              {item.confidence}%
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </Card>
      ))}
    </div>
  )
}
