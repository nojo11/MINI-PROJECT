import { BarChart3, History, Home, ScanSearch } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/utils/cn'

const links = [
  { to: '/', label: 'Overview', icon: Home },
  { to: '/', label: 'SMS Analysis', icon: ScanSearch },
  { to: '/', label: 'Recent Scans', icon: History },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
]

export function Sidebar() {
  const location = useLocation()

  return (
    <aside className="hidden w-64 border-r border-border bg-card p-4 xl:block">
      <p className="px-2 pb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Navigation
      </p>
      <ul className="space-y-1">
        {links.map((link) => {
          const Icon = link.icon
          const active = location.pathname === link.to
          return (
            <li key={link.label}>
              <Link
                to={link.to}
                className={cn(
                  'flex items-center gap-2 rounded-[8px] px-3 py-2 text-sm',
                  active
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted',
                )}
              >
                <Icon className="size-4" />
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
