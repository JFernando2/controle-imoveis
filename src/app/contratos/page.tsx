import Link from "next/link"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function ContratosPage() {
  // Dados fictícios para demonstração
  const contratos = [
    {
      id: "1",
      tipo: "ALUGUEL",
      dataInicio: new Date("2023-01-15"),
      dataFim: new Date("2024-01-15"),
      valor: 2500,
      status: "ATIVO",
      usuario: {
        id: "1",
        nome: "João Silva",
        email: "joao@exemplo.com"
      },
      imovel: {
        id: "4",
        titulo: "Apartamento Mobiliado",
        endereco: {
          bairro: "Moema",
          cidade: "São Paulo"
        }
      }
    },
    {
      id: "2",
      tipo: "ALUGUEL",
      dataInicio: new Date("2023-03-01"),
      dataFim: new Date("2024-03-01"),
      valor: 1800,
      status: "ATIVO",
      usuario: {
        id: "3",
        nome: "Carlos Santos",
        email: "carlos@exemplo.com"
      },
      imovel: {
        id: "5",
        titulo: "Sala Comercial",
        endereco: {
          bairro: "Itaim Bibi",
          cidade: "São Paulo"
        }
      }
    },
    {
      id: "3",
      tipo: "VENDA",
      dataInicio: new Date("2023-02-10"),
      dataFim: null,
      valor: 850000,
      status: "FINALIZADO",
      usuario: {
        id: "2",
        nome: "Maria Oliveira",
        email: "maria@exemplo.com"
      },
      imovel: {
        id: "6",
        titulo: "Casa em Condomínio",
        endereco: {
          bairro: "Morumbi",
          cidade: "São Paulo"
        }
      }
    },
    {
      id: "4",
      tipo: "ALUGUEL",
      dataInicio: new Date("2022-11-01"),
      dataFim: new Date("2023-05-01"),
      valor: 1500,
      status: "CANCELADO",
      usuario: {
        id: "4",
        nome: "Ana Souza",
        email: "ana@exemplo.com"
      },
      imovel: {
        id: "1",
        titulo: "Apartamento Centro",
        endereco: {
          bairro: "Centro",
          cidade: "São Paulo"
        }
      }
    },
    {
      id: "5",
      tipo: "VENDA",
      dataInicio: new Date("2023-04-20"),
      dataFim: null,
      valor: 520000,
      status: "ATIVO",
      usuario: {
        id: "5",
        nome: "Paulo Mendes",
        email: "paulo@exemplo.com"
      },
      imovel: {
        id: "2",
        titulo: "Casa Jardim Europa",
        endereco: {
          bairro: "Jardim Europa",
          cidade: "São Paulo"
        }
      }
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Contratos</h2>
        <Link href="/contratos/novo">
          <Button>Novo Contrato</Button>
        </Link>
      </div>
      
      <div className="mt-6 space-y-6">
        <div className="flex flex-col gap-4 md:flex-row">
          <Input
            placeholder="Buscar contratos..."
            className="max-w-sm"
          />
          <div className="flex gap-2">
            <Select defaultValue="todos">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os tipos</SelectItem>
                <SelectItem value="ALUGUEL">Aluguel</SelectItem>
                <SelectItem value="VENDA">Venda</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="todos">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os status</SelectItem>
                <SelectItem value="ATIVO">Ativo</SelectItem>
                <SelectItem value="FINALIZADO">Finalizado</SelectItem>
                <SelectItem value="CANCELADO">Cancelado</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tipo</TableHead>
                <TableHead>Imóvel</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Data Início</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contratos.map((contrato) => (
                <TableRow key={contrato.id}>
                  <TableCell>
                    {contrato.tipo === "ALUGUEL" ? "Aluguel" : "Venda"}
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{contrato.imovel.titulo}</div>
                    <div className="text-sm text-muted-foreground">
                      {contrato.imovel.endereco.bairro}, {contrato.imovel.endereco.cidade}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{contrato.usuario.nome}</div>
                    <div className="text-sm text-muted-foreground">
                      {contrato.usuario.email}
                    </div>
                  </TableCell>
                  <TableCell>
                    R$ {contrato.valor.toLocaleString('pt-BR')}
                    {contrato.tipo === "ALUGUEL" ? "/mês" : ""}
                  </TableCell>
                  <TableCell>
                    {contrato.dataInicio.toLocaleDateString('pt-BR')}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        contrato.status === "ATIVO"
                          ? "default"
                          : contrato.status === "FINALIZADO"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {contrato.status === "ATIVO"
                        ? "Ativo"
                        : contrato.status === "FINALIZADO"
                        ? "Finalizado"
                        : "Cancelado"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href={`/contratos/${contrato.id}`}>
                      <Button variant="ghost" size="sm">
                        Ver detalhes
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  )
} 