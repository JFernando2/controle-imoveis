import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Imóveis Admin</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline">Entrar</Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Sistema de Gerenciamento de Imóveis
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Gerencie seus imóveis, contratos e agendamentos de forma simples e eficiente
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/dashboard">
                  <Button>Acessar o Sistema</Button>
                </Link>
                <Link href="#recursos">
                  <Button variant="outline">Ver Recursos</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section id="recursos" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Recursos Principais
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Tudo o que você precisa para gerenciar seus imóveis em um só lugar
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Gestão de Imóveis</CardTitle>
                  <CardDescription>
                    Cadastre e gerencie todos os seus imóveis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Cadastre imóveis com fotos, características, localização e valores. Acompanhe o status de cada imóvel.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Contratos</CardTitle>
                  <CardDescription>
                    Controle de contratos de venda e locação
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Gerencie contratos de venda e aluguel, com controle de pagamentos e documentação.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Agendamentos</CardTitle>
                  <CardDescription>
                    Agende visitas e reuniões
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Organize visitas aos imóveis e reuniões com clientes, com notificações e lembretes.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 bg-background">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Sistema de Gerenciamento de Imóveis. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
