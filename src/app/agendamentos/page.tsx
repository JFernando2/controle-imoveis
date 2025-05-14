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

export default function AgendamentosPage() {
  // Dados fictícios para demonstração
  const agendamentos = [
    {
      id: "1",
      data: new Date("2023-06-15T14:30:00"),
      horario: "14:30",
      status: "PENDENTE",
      usuario: {
        id: "1",
        nome: "João Silva",
        email: "joao@exemplo.com"
      },
      imovel: {
        id: "1",
        titulo: "Apartamento Centro",
        endereco: {
          bairro: "Centro",
          cidade: "São Paulo"
        }
      },
      observacoes: "Cliente interessado em comprar"
    },
    {
      id: "2",
      data: new Date("2023-06-16T10:00:00"),
      horario: "10:00",
      status: "CONFIRMADO",
      usuario: {
        id: "2",
        nome: "Maria Oliveira",
        email: "maria@exemplo.com"
      },
      imovel: {
        id: "2",
        titulo: "Casa Jardim Europa",
        endereco: {
          bairro: "Jardim Europa",
          cidade: "São Paulo"
        }
      },
      observacoes: "Segunda visita para avaliar reforma"
    },
    {
      id: "3",
      data: new Date("2023-06-14T16:00:00"),
      horario: "16:00",
      status: "CONCLUIDO",
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
      },
      observacoes: "Cliente fechou contrato de aluguel"
    },
    {
      id: "4",
      data: new Date("2023-06-13T09:30:00"),
      horario: "09:30",
      status: "CANCELADO",
      usuario: {
        id: "4",
        nome: "Ana Souza",
        email: "ana@exemplo.com"
      },
      imovel: {
        id: "3",
        titulo: "Terreno Comercial",
        endereco: {
          bairro: "Vila Industrial",
          cidade: "São Paulo"
        }
      },
      observacoes: "Cliente cancelou por motivos pessoais"
    },
    {
      id: "5",
      data: new Date("2023-06-17T11:00:00"),
      horario: "11:00",
      status: "PENDENTE",
      usuario: {
        id: "5",
        nome: "Paulo Mendes",
        email: "paulo@exemplo.com"
      },
      imovel: {
        id: "1",
        titulo: "Apartamento Centro",
        endereco: {
          bairro: "Centro",
          cidade: "São Paulo"
        }
      },
      observacoes: "Interessado em alugar"
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Agendamentos</h2>
        <Link href="/agendamentos/novo">
          <Button>Novo Agendamento</Button>
        </Link>
      </div>
      
      <div className="mt-6 space-y-6">
        <div className="flex flex-col gap-4 md:flex-row">
          <Input
            placeholder="Buscar agendamentos..."
            className="max-w-sm"
          />
          <div className="flex gap-2">
            <Select defaultValue="todos">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os status</SelectItem>
                <SelectItem value="PENDENTE">Pendente</SelectItem>
                <SelectItem value="CONFIRMADO">Confirmado</SelectItem>
                <SelectItem value="CONCLUIDO">Concluído</SelectItem>
                <SelectItem value="CANCELADO">Cancelado</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="todos">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os períodos</SelectItem>
                <SelectItem value="hoje">Hoje</SelectItem>
                <SelectItem value="amanha">Amanhã</SelectItem>
                <SelectItem value="semana">Esta semana</SelectItem>
                <SelectItem value="mes">Este mês</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Horário</TableHead>
                <TableHead>Imóvel</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {agendamentos.map((agendamento) => (
                <TableRow key={agendamento.id}>
                  <TableCell>
                    {agendamento.data.toLocaleDateString('pt-BR')}
                  </TableCell>
                  <TableCell>{agendamento.horario}</TableCell>
                  <TableCell>
                    <div className="font-medium">{agendamento.imovel.titulo}</div>
                    <div className="text-sm text-muted-foreground">
                      {agendamento.imovel.endereco.bairro}, {agendamento.imovel.endereco.cidade}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{agendamento.usuario.nome}</div>
                    <div className="text-sm text-muted-foreground">
                      {agendamento.usuario.email}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        agendamento.status === "PENDENTE"
                          ? "outline"
                          : agendamento.status === "CONFIRMADO"
                          ? "default"
                          : agendamento.status === "CONCLUIDO"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {agendamento.status === "PENDENTE"
                        ? "Pendente"
                        : agendamento.status === "CONFIRMADO"
                        ? "Confirmado"
                        : agendamento.status === "CONCLUIDO"
                        ? "Concluído"
                        : "Cancelado"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href={`/agendamentos/${agendamento.id}`}>
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