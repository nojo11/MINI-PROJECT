import { TriangleAlert } from 'lucide-react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface ErrorStateProps {
  title: string
  description: string
  onRetry?: () => void
}

export function ErrorState({ title, description, onRetry }: ErrorStateProps) {
  return (
    <Card className="flex flex-col items-start gap-3 border-danger/35 bg-danger-soft">
      <div className="flex items-center gap-2">
        <TriangleAlert className="size-5 text-danger" aria-hidden="true" />
        <h3 className="font-semibold text-danger">{title}</h3>
      </div>
      <p className="text-sm text-foreground">{description}</p>
      {onRetry ? (
        <Button variant="outline" onClick={onRetry}>
          Retry
        </Button>
      ) : null}
    </Card>
  )
}

export function RouteErrorState() {
  const error = useRouteError()
  if (isRouteErrorResponse(error)) {
    return (
      <ErrorState
        title={`Route Error ${error.status}`}
        description={error.statusText || 'A route error occurred.'}
      />
    )
  }

  return (
    <ErrorState
      title="Unexpected Error"
      description={
        error instanceof Error ? error.message : 'An unexpected error occurred.'
      }
    />
  )
}
