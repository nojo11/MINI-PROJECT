import { Outlet } from 'react-router-dom'
import { MobileNav } from '@/components/layout/mobile-nav'
import { Navbar } from '@/components/layout/navbar'
import { Sidebar } from '@/components/layout/sidebar'

export function AppShell() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="mx-auto flex max-w-[1440px]">
        <Sidebar />
        <main className="flex-1 px-4 py-6 pb-24 md:px-6 xl:pb-6">
          <Outlet />
        </main>
      </div>
      <MobileNav />
    </div>
  )
}
