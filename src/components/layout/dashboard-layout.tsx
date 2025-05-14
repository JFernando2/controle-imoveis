import { MainNav } from "@/components/layout/main-nav"
import { UserNav } from "@/components/layout/user-nav"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav />
          <UserNav />
        </div>
      </header>
      <main className="flex-1 container py-6">
        {children}
      </main>
      <footer className="border-t py-4 bg-background">
        <div className="container flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sistema de Gerenciamento de Imóveis
          </p>
        </div>
      </footer>
    </div>
  )
} 