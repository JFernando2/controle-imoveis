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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { TipoImovel, StatusImovel } from "@/lib/types"

export default function NovoImovelPage() {
  const [activeTab, setActiveTab] = useState("informacoes")
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui seria implementada a lógica para salvar o imóvel
    console.log("Imóvel salvo")
  }
  
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Novo Imóvel</h2>
        <div className="flex gap-2">
          <Link href="/imoveis">
            <Button variant="outline">Cancelar</Button>
          </Link>
          <Button type="submit" form="form-imovel">Salvar</Button>
        </div>
      </div>
      
      <form id="form-imovel" onSubmit={handleSubmit} className="mt-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="informacoes">Informações Básicas</TabsTrigger>
            <TabsTrigger value="endereco">Endereço</TabsTrigger>
            <TabsTrigger value="caracteristicas">Características</TabsTrigger>
            <TabsTrigger value="fotos">Fotos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="informacoes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Informações Básicas</CardTitle>
                <CardDescription>
                  Preencha as informações básicas do imóvel
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="titulo">Título</Label>
                    <Input id="titulo" placeholder="Título do imóvel" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tipo">Tipo</Label>
                    <Select required>
                      <SelectTrigger id="tipo">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={TipoImovel.CASA}>Casa</SelectItem>
                        <SelectItem value={TipoImovel.APARTAMENTO}>Apartamento</SelectItem>
                        <SelectItem value={TipoImovel.TERRENO}>Terreno</SelectItem>
                        <SelectItem value={TipoImovel.COMERCIAL}>Comercial</SelectItem>
                        <SelectItem value={TipoImovel.RURAL}>Rural</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select required>
                      <SelectTrigger id="status">
                        <SelectValue placeholder="Selecione o status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={StatusImovel.DISPONIVEL}>Disponível</SelectItem>
                        <SelectItem value={StatusImovel.ALUGADO}>Alugado</SelectItem>
                        <SelectItem value={StatusImovel.VENDIDO}>Vendido</SelectItem>
                        <SelectItem value={StatusImovel.INDISPONIVEL}>Indisponível</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="valor">Valor (R$)</Label>
                    <Input id="valor" type="number" min="0" step="0.01" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="area">Área (m²)</Label>
                    <Input id="area" type="number" min="0" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="quartos">Quartos</Label>
                    <Input id="quartos" type="number" min="0" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="banheiros">Banheiros</Label>
                    <Input id="banheiros" type="number" min="0" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="vagas">Vagas de Garagem</Label>
                    <Input id="vagas" type="number" min="0" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="descricao">Descrição</Label>
                  <Textarea
                    id="descricao"
                    placeholder="Descreva o imóvel em detalhes"
                    className="min-h-[150px]"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveTab("endereco")}>
                  Próximo
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="endereco" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Endereço</CardTitle>
                <CardDescription>
                  Preencha o endereço completo do imóvel
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="cep">CEP</Label>
                    <Input id="cep" placeholder="00000-000" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="logradouro">Logradouro</Label>
                    <Input id="logradouro" placeholder="Rua, Avenida, etc." required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="numero">Número</Label>
                    <Input id="numero" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="complemento">Complemento</Label>
                    <Input id="complemento" placeholder="Apto, Bloco, etc." />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bairro">Bairro</Label>
                    <Input id="bairro" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cidade">Cidade</Label>
                    <Input id="cidade" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="estado">Estado</Label>
                    <Input id="estado" required />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveTab("informacoes")}>
                  Anterior
                </Button>
                <Button variant="outline" onClick={() => setActiveTab("caracteristicas")}>
                  Próximo
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="caracteristicas" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Características</CardTitle>
                <CardDescription>
                  Adicione características e diferenciais do imóvel
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input placeholder="Nova característica" />
                  <Button type="button" variant="secondary">Adicionar</Button>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {["Piscina", "Churrasqueira", "Academia", "Playground"].map((item, index) => (
                    <div key={index} className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-sm">
                      {item}
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-4 w-4 p-0 hover:bg-transparent"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                        <span className="sr-only">Remover</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveTab("endereco")}>
                  Anterior
                </Button>
                <Button variant="outline" onClick={() => setActiveTab("fotos")}>
                  Próximo
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="fotos" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Fotos</CardTitle>
                <CardDescription>
                  Adicione fotos do imóvel
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <div className="flex aspect-square flex-col items-center justify-center rounded-md border border-dashed p-4">
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
                      className="mb-2 h-8 w-8 text-muted-foreground"
                    >
                      <path d="M7 18V9a5 5 0 0 1 10 0v9" />
                      <path d="M22 18H2" />
                      <path d="M2 22h20" />
                      <path d="M7 22v-4" />
                      <path d="M17 22v-4" />
                    </svg>
                    <p className="mb-2 text-sm font-medium">
                      Arraste e solte ou clique para enviar
                    </p>
                    <Input
                      id="foto"
                      type="file"
                      accept="image/*"
                      className="hidden"
                    />
                    <Button type="button" variant="outline" size="sm" asChild>
                      <label htmlFor="foto">Escolher arquivo</label>
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveTab("caracteristicas")}>
                  Anterior
                </Button>
                <Button type="submit">Salvar Imóvel</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </form>
    </DashboardLayout>
  )
} 