"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "@/components/mode-toggle"

interface MainNavProps {
  className?: string
}

export function MainNav({ className }: MainNavProps) {
  const pathname = usePathname()

  const routes = [
    {
      href: "/dashboard",
      label: "Dashboard",
      active: pathname === "/dashboard",
    },
    {
      href: "/imoveis",
      label: "Imóveis",
      active: pathname === "/imoveis" || pathname.startsWith("/imoveis/"),
    },
    {
      href: "/agendamentos",
      label: "Agendamentos",
      active: pathname === "/agendamentos" || pathname.startsWith("/agendamentos/"),
    },
    {
      href: "/contratos",
      label: "Contratos",
      active: pathname === "/contratos" || pathname.startsWith("/contratos/"),
    },
    {
      href: "/usuarios",
      label: "Usuários",
      active: pathname === "/usuarios" || pathname.startsWith("/usuarios/"),
    },
  ]

  return (
    <div className="flex items-center gap-6 lg:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <span className="hidden font-bold sm:inline-block">
          Imóveis Admin
        </span>
      </Link>
      <nav className="hidden gap-6 md:flex">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center text-lg font-medium transition-colors hover:text-primary",
              route.active
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="md:hidden" size="icon">
              <span className="sr-only">Abrir menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {routes.map((route) => (
              <DropdownMenuItem key={route.href} asChild>
                <Link href={route.href}>{route.label}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
} 