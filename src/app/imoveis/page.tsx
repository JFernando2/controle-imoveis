import Link from "next/link"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"

export default function ImoveisPage() {
  // Dados fictícios para demonstração
  const imoveis = [
    {
      id: "1",
      titulo: "Apartamento Centro",
      tipo: "APARTAMENTO",
      status: "DISPONIVEL",
      valor: 350000,
      quartos: 2,
      banheiros: 1,
      area: 65,
      endereco: {
        cidade: "São Paulo",
        bairro: "Centro"
      }
    },
    {
      id: "2",
      titulo: "Casa Jardim Europa",
      tipo: "CASA",
      status: "DISPONIVEL",
      valor: 520000,
      quartos: 3,
      banheiros: 2,
      area: 120,
      endereco: {
        cidade: "São Paulo",
        bairro: "Jardim Europa"
      }
    },
    {
      id: "3",
      titulo: "Terreno Comercial",
      tipo: "TERRENO",
      status: "DISPONIVEL",
      valor: 180000,
      quartos: 0,
      banheiros: 0,
      area: 500,
      endereco: {
        cidade: "São Paulo",
        bairro: "Vila Industrial"
      }
    },
    {
      id: "4",
      titulo: "Apartamento Mobiliado",
      tipo: "APARTAMENTO",
      status: "ALUGADO",
      valor: 2500,
      quartos: 2,
      banheiros: 1,
      area: 70,
      endereco: {
        cidade: "São Paulo",
        bairro: "Moema"
      }
    },
    {
      id: "5",
      titulo: "Sala Comercial",
      tipo: "COMERCIAL",
      status: "DISPONIVEL",
      valor: 1800,
      quartos: 0,
      banheiros: 1,
      area: 45,
      endereco: {
        cidade: "São Paulo",
        bairro: "Itaim Bibi"
      }
    },
    {
      id: "6",
      titulo: "Casa em Condomínio",
      tipo: "CASA",
      status: "VENDIDO",
      valor: 850000,
      quartos: 4,
      banheiros: 3,
      area: 200,
      endereco: {
        cidade: "São Paulo",
        bairro: "Morumbi"
      }
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Imóveis</h2>
        <Link href="/imoveis/novo">
          <Button>Novo Imóvel</Button>
        </Link>
      </div>
      
      <div className="mt-6 space-y-6">
        <div className="flex flex-col gap-4 md:flex-row">
          <Input
            placeholder="Buscar imóveis..."
            className="max-w-sm"
          />
          <div className="flex gap-2">
            <Select defaultValue="todos">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os tipos</SelectItem>
                <SelectItem value="CASA">Casa</SelectItem>
                <SelectItem value="APARTAMENTO">Apartamento</SelectItem>
                <SelectItem value="TERRENO">Terreno</SelectItem>
                <SelectItem value="COMERCIAL">Comercial</SelectItem>
                <SelectItem value="RURAL">Rural</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="todos">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os status</SelectItem>
                <SelectItem value="DISPONIVEL">Disponível</SelectItem>
                <SelectItem value="ALUGADO">Alugado</SelectItem>
                <SelectItem value="VENDIDO">Vendido</SelectItem>
                <SelectItem value="INDISPONIVEL">Indisponível</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {imoveis.map((imovel) => (
            <Link href={`/imoveis/${imovel.id}`} key={imovel.id}>
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video bg-muted" />
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{imovel.titulo}</h3>
                      <p className="text-sm text-muted-foreground">
                        {imovel.endereco.bairro}, {imovel.endereco.cidade}
                      </p>
                    </div>
                    <Badge
                      variant={
                        imovel.status === "DISPONIVEL"
                          ? "default"
                          : imovel.status === "ALUGADO"
                          ? "secondary"
                          : imovel.status === "VENDIDO"
                          ? "outline"
                          : "destructive"
                      }
                    >
                      {imovel.status === "DISPONIVEL"
                        ? "Disponível"
                        : imovel.status === "ALUGADO"
                        ? "Alugado"
                        : imovel.status === "VENDIDO"
                        ? "Vendido"
                        : "Indisponível"}
                    </Badge>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-lg font-semibold">
                      R$ {imovel.valor.toLocaleString('pt-BR')}
                      {imovel.status === "ALUGADO" ? "/mês" : ""}
                    </p>
                  </div>
                  
                  <div className="mt-4 flex items-center gap-4 text-sm">
                    {imovel.quartos > 0 && (
                      <div className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-muted-foreground"
                        >
                          <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
                          <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
                          <path d="M12 4v6" />
                        </svg>
                        <span>{imovel.quartos} quartos</span>
                      </div>
                    )}
                    
                    {imovel.banheiros > 0 && (
                      <div className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-muted-foreground"
                        >
                          <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                          <line x1="10" x2="8" y1="5" y2="7" />
                          <line x1="2" x2="22" y1="12" y2="12" />
                          <line x1="7" x2="7" y1="19" y2="21" />
                          <line x1="17" x2="17" y1="19" y2="21" />
                        </svg>
                        <span>{imovel.banheiros} banheiros</span>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-muted-foreground"
                      >
                        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                      <span>{imovel.area} m²</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
} 