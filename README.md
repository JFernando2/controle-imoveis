# Sistema de Gerenciamento de Imóveis

Sistema completo para gerenciamento de imóveis, contratos e agendamentos, desenvolvido com Next.js, Prisma e shadcn/ui.

## Funcionalidades

- **Gestão de Imóveis**: Cadastro e gerenciamento de imóveis com fotos, características, localização e valores.
- **Contratos**: Controle de contratos de venda e locação, com gestão de pagamentos.
- **Agendamentos**: Organização de visitas aos imóveis e reuniões com clientes.
- **Usuários**: Gerenciamento de usuários com diferentes níveis de acesso (administrador, corretor, cliente).
- **Dashboard**: Visão geral do sistema com indicadores e métricas importantes.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) - Framework React para desenvolvimento web
- [Prisma](https://www.prisma.io/) - ORM para acesso ao banco de dados
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional
- [shadcn/ui](https://ui.shadcn.com/) - Componentes de interface reutilizáveis
- [TypeScript](https://www.typescriptlang.org/) - Linguagem de programação tipada
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário

## Estrutura do Projeto

```
src/
├── app/                    # Rotas e páginas do Next.js
│   ├── dashboard/          # Página do dashboard
│   ├── imoveis/            # Páginas de gerenciamento de imóveis
│   ├── agendamentos/       # Páginas de gerenciamento de agendamentos
│   ├── contratos/          # Páginas de gerenciamento de contratos
│   └── usuarios/           # Páginas de gerenciamento de usuários
├── components/             # Componentes React reutilizáveis
│   ├── layout/             # Componentes de layout
│   └── ui/                 # Componentes de interface
├── lib/                    # Utilitários e configurações
│   ├── db.ts               # Configuração do Prisma
│   ├── types.ts            # Tipos TypeScript
│   └── utils.ts            # Funções utilitárias
└── generated/              # Código gerado automaticamente
    └── prisma/             # Cliente Prisma gerado
```

## Modelos de Dados

O sistema utiliza os seguintes modelos de dados:

- **Usuario**: Usuários do sistema (administradores, corretores, clientes)
- **Imovel**: Propriedades disponíveis para venda ou aluguel
- **Endereco**: Endereço completo de um imóvel
- **CaracteristicaImovel**: Características e diferenciais de um imóvel
- **ImagemImovel**: Fotos de um imóvel
- **Agendamento**: Visitas e reuniões agendadas
- **Contrato**: Contratos de venda ou aluguel
- **Pagamento**: Pagamentos associados a um contrato

## Instalação e Execução

### Pré-requisitos

- Node.js (versão 18 ou superior)
- PostgreSQL

### Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/sistema-gerenciamento-imoveis.git
   cd sistema-gerenciamento-imoveis
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```
   Edite o arquivo `.env` com suas configurações de banco de dados.

4. Execute as migrações do Prisma:
   ```bash
   npx prisma migrate dev
   ```

5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

6. Acesse o sistema em [http://localhost:3000](http://localhost:3000)

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
