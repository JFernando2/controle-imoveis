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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function UsuariosPage() {
  // Dados fictícios para demonstração
  const usuarios = [
    {
      id: "1",
      nome: "João Silva",
      email: "joao@exemplo.com",
      telefone: "(11) 99999-9999",
      role: "USUARIO",
      criadoEm: new Date("2023-01-15"),
      imoveis: 2,
      contratos: 1
    },
    {
      id: "2",
      nome: "Maria Oliveira",
      email: "maria@exemplo.com",
      telefone: "(11) 88888-8888",
      role: "USUARIO",
      criadoEm: new Date("2023-02-20"),
      imoveis: 0,
      contratos: 1
    },
    {
      id: "3",
      nome: "Carlos Santos",
      email: "carlos@exemplo.com",
      telefone: "(11) 77777-7777",
      role: "USUARIO",
      criadoEm: new Date("2023-03-10"),
      imoveis: 0,
      contratos: 1
    },
    {
      id: "4",
      nome: "Ana Souza",
      email: "ana@exemplo.com",
      telefone: "(11) 66666-6666",
      role: "CORRETOR",
      criadoEm: new Date("2023-02-05"),
      imoveis: 0,
      contratos: 1
    },
    {
      id: "5",
      nome: "Paulo Mendes",
      email: "paulo@exemplo.com",
      telefone: "(11) 55555-5555",
      role: "USUARIO",
      criadoEm: new Date("2023-04-01"),
      imoveis: 1,
      contratos: 1
    },
    {
      id: "6",
      nome: "Amanda Rocha",
      email: "amanda@exemplo.com",
      telefone: "(11) 44444-4444",
      role: "ADMIN",
      criadoEm: new Date("2023-01-01"),
      imoveis: 0,
      contratos: 0
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Usuários</h2>
        <Link href="/usuarios/novo">
          <Button>Novo Usuário</Button>
        </Link>
      </div>
      
      <div className="mt-6 space-y-6">
        <div className="flex flex-col gap-4 md:flex-row">
          <Input
            placeholder="Buscar usuários..."
            className="max-w-sm"
          />
          <div className="flex gap-2">
            <Select defaultValue="todos">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os tipos</SelectItem>
                <SelectItem value="ADMIN">Administrador</SelectItem>
                <SelectItem value="CORRETOR">Corretor</SelectItem>
                <SelectItem value="USUARIO">Usuário</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Usuário</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Imóveis</TableHead>
                <TableHead>Contratos</TableHead>
                <TableHead>Cadastro</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usuarios.map((usuario) => (
                <TableRow key={usuario.id}>
                  <TableCell className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`/avatars/avatar-${usuario.id}.png`} alt={usuario.nome} />
                      <AvatarFallback>
                        {usuario.nome.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{usuario.nome}</div>
                      <div className="text-sm text-muted-foreground">
                        {usuario.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        usuario.role === "ADMIN"
                          ? "default"
                          : usuario.role === "CORRETOR"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {usuario.role === "ADMIN"
                        ? "Administrador"
                        : usuario.role === "CORRETOR"
                        ? "Corretor"
                        : "Usuário"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {usuario.telefone}
                  </TableCell>
                  <TableCell>
                    {usuario.imoveis}
                  </TableCell>
                  <TableCell>
                    {usuario.contratos}
                  </TableCell>
                  <TableCell>
                    {usuario.criadoEm.toLocaleDateString('pt-BR')}
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href={`/usuarios/${usuario.id}`}>
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