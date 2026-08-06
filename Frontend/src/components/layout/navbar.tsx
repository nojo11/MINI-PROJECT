import { Moon, ShieldCheck, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="inline-flex items-center gap-2 font-semibold text-foreground">
          <ShieldCheck className="size-5 text-primary" />
          Anti-MoMo Shield
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
          <Link className="rounded-md px-3 py-2 text-sm hover:bg-muted" to="/">
            Home
          </Link>
          <Link className="rounded-md px-3 py-2 text-sm hover:bg-muted" to="/analytics">
            Analytics
          </Link>
        </nav>
        <Button
          variant="outline"
          size="sm"
          aria-label="Toggle theme"
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
        >
          {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </Button>
      </div>
    </header>
  )
}
