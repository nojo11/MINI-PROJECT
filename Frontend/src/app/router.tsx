import { createBrowserRouter } from 'react-router-dom'
import { AppShell } from '@/components/layout/app-shell'
import { RouteErrorState } from '@/components/ui/error-state'
import { ProtectedRoute } from '@/routes/protected-route'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    errorElement: <RouteErrorState />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { HomePage } = await import('@/pages/home-page')
          return { Component: HomePage }
        },
      },
      {
        path: 'analytics',
        lazy: async () => {
          const { AnalyticsPage } = await import('@/pages/analytics-page')
          return {
            Component: () => (
              <ProtectedRoute>
                <AnalyticsPage />
              </ProtectedRoute>
            ),
          }
        },
      },
    ],
  },
])
