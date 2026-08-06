import type { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { isAuthenticated } from '@/services/auth'
import { Spinner } from '@/components/ui/spinner'

export function ProtectedRoute({ children }: PropsWithChildren) {
  const authQuery = useQuery({
    queryKey: ['auth-state'],
    queryFn: isAuthenticated,
  })

  if (authQuery.isPending) {
    return (
      <div className="flex min-h-48 items-center justify-center">
        <Spinner />
      </div>
    )
  }

  if (!authQuery.data) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}
