"use client"

import { useState } from "react"
import Link from "next/link"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ImovelProps {
  params: {
    id: string
  }
}

export default function ImovelPage({ params }: ImovelProps) {
  const [openDialog, setOpenDialog] = useState(false)
  
  // Dados fictícios para demonstração
  const imovel = {
    id: params.id,
    titulo: "Apartamento Centro",
    descricao: "Lindo apartamento no centro da cidade, próximo a comércios e transporte público. Ampla sala de estar, cozinha planejada, área de serviço e sacada com vista para a cidade.",
    tipo: "APARTAMENTO",
    status: "DISPONIVEL",
    valor: 350000,
    quartos: 2,
    banheiros: 1,
    vagas: 1,
    area: 65,
    endereco: {
      cep: "01001-000",
      logradouro: "Rua Exemplo",
      numero: "123",
      complemento: "Apto 45",
      bairro: "Centro",
      cidade: "São Paulo",
      estado: "SP"
    },
    caracteristicas: [
      { id: "1", nome: "Piscina" },
      { id: "2", nome: "Academia" },
      { id: "3", nome: "Salão de Festas" },
      { id: "4", nome: "Portaria 24h" },
    ],
    imagens: [
      { id: "1", url: "/placeholder.jpg", destaque: true, ordem: 0 },
      { id: "2", url: "/placeholder.jpg", destaque: false, ordem: 1 },
      { id: "3", url: "/placeholder.jpg", destaque: false, ordem: 2 },
    ],
    proprietario: {
      id: "1",
      nome: "João Silva",
      email: "joao@exemplo.com",
      telefone: "(11) 99999-9999"
    },
    criadoEm: new Date("2023-01-15"),
    atualizadoEm: new Date("2023-02-10")
  }
  
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">{imovel.titulo}</h2>
        <div className="flex gap-2">
          <Link href={`/imoveis/${imovel.id}/editar`}>
            <Button variant="outline">Editar</Button>
          </Link>
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button variant="destructive">Excluir</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirmar exclusão</DialogTitle>
                <DialogDescription>
                  Tem certeza que deseja excluir este imóvel? Esta ação não pode ser desfeita.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpenDialog(false)}>
                  Cancelar
                </Button>
                <Button variant="destructive">
                  Excluir
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="mt-2 flex items-center gap-2">
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
        <span className="text-sm text-muted-foreground">
          Código: {imovel.id}
        </span>
      </div>
      
      <div className="mt-6">
        <Tabs defaultValue="detalhes" className="space-y-4">
          <TabsList>
            <TabsTrigger value="detalhes">Detalhes</TabsTrigger>
            <TabsTrigger value="fotos">Fotos</TabsTrigger>
            <TabsTrigger value="localizacao">Localização</TabsTrigger>
            <TabsTrigger value="agendamentos">Agendamentos</TabsTrigger>
            <TabsTrigger value="contratos">Contratos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="detalhes" className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Informações do Imóvel</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">Descrição</h3>
                    <p className="text-sm text-muted-foreground">{imovel.descricao}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div>
                      <h4 className="text-sm font-medium">Tipo</h4>
                      <p className="text-sm text-muted-foreground">
                        {imovel.tipo === "APARTAMENTO" ? "Apartamento" : 
                         imovel.tipo === "CASA" ? "Casa" : 
                         imovel.tipo === "TERRENO" ? "Terreno" : 
                         imovel.tipo === "COMERCIAL" ? "Comercial" : "Rural"}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium">Valor</h4>
                      <p className="text-sm text-muted-foreground">
                        R$ {imovel.valor.toLocaleString('pt-BR')}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium">Área</h4>
                      <p className="text-sm text-muted-foreground">{imovel.area} m²</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium">Quartos</h4>
                      <p className="text-sm text-muted-foreground">{imovel.quartos}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium">Banheiros</h4>
                      <p className="text-sm text-muted-foreground">{imovel.banheiros}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium">Vagas</h4>
                      <p className="text-sm text-muted-foreground">{imovel.vagas}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium">Cadastrado em</h4>
                      <p className="text-sm text-muted-foreground">
                        {new Date(imovel.criadoEm).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium">Atualizado em</h4>
                      <p className="text-sm text-muted-foreground">
                        {new Date(imovel.atualizadoEm).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Características</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {imovel.caracteristicas.map((caracteristica) => (
                        <Badge key={caracteristica.id} variant="outline">
                          {caracteristica.nome}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Endereço</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm">
                        {imovel.endereco.logradouro}, {imovel.endereco.numero}
                        {imovel.endereco.complemento && `, ${imovel.endereco.complemento}`}
                      </p>
                      <p className="text-sm">
                        {imovel.endereco.bairro}, {imovel.endereco.cidade} - {imovel.endereco.estado}
                      </p>
                      <p className="text-sm">CEP: {imovel.endereco.cep}</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Proprietário</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">{imovel.proprietario.nome}</p>
                      <p className="text-sm">{imovel.proprietario.email}</p>
                      <p className="text-sm">{imovel.proprietario.telefone}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="fotos" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Fotos do Imóvel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {imovel.imagens.map((imagem) => (
                    <div key={imagem.id} className="relative aspect-video overflow-hidden rounded-md">
                      <div className="h-full w-full bg-muted"></div>
                      {imagem.destaque && (
                        <Badge className="absolute left-2 top-2">Destaque</Badge>
                      )}
                    </div>
                  ))}
                  
                  <div className="flex aspect-video flex-col items-center justify-center rounded-md border border-dashed">
                    <Button variant="ghost">Adicionar Fotos</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="localizacao" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Localização</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-md bg-muted"></div>
                <div className="mt-4">
                  <p className="text-sm">
                    {imovel.endereco.logradouro}, {imovel.endereco.numero}
                    {imovel.endereco.complemento && `, ${imovel.endereco.complemento}`}
                  </p>
                  <p className="text-sm">
                    {imovel.endereco.bairro}, {imovel.endereco.cidade} - {imovel.endereco.estado}
                  </p>
                  <p className="text-sm">CEP: {imovel.endereco.cep}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="agendamentos" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Agendamentos</CardTitle>
                <Button size="sm">Novo Agendamento</Button>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Nenhum agendamento encontrado para este imóvel.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="contratos" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Contratos</CardTitle>
                <Button size="sm">Novo Contrato</Button>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Nenhum contrato encontrado para este imóvel.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
} 