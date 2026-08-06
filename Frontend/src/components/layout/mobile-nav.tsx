import { BarChart3, Home, ScanSearch } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/utils/cn'

const items = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/', label: 'Scan', icon: ScanSearch },
  { to: '/analytics', label: 'Stats', icon: BarChart3 },
]

export function MobileNav() {
  const location = useLocation()

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background px-4 py-2 xl:hidden"
      aria-label="Mobile navigation"
    >
      <ul className="grid grid-cols-3 gap-2">
        {items.map((item) => {
          const Icon = item.icon
          const active = location.pathname === item.to
          return (
            <li key={item.label}>
              <Link
                to={item.to}
                className={cn(
                  'flex flex-col items-center gap-1 rounded-[8px] py-1 text-xs',
                  active ? 'text-primary' : 'text-muted-foreground',
                )}
              >
                <Icon className="size-5" />
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
