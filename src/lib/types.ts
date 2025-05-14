// Tipos baseados no schema do Prisma

export enum Role {
  ADMIN = 'ADMIN',
  CORRETOR = 'CORRETOR',
  USUARIO = 'USUARIO'
}

export enum TipoImovel {
  CASA = 'CASA',
  APARTAMENTO = 'APARTAMENTO',
  TERRENO = 'TERRENO',
  COMERCIAL = 'COMERCIAL',
  RURAL = 'RURAL'
}

export enum StatusImovel {
  DISPONIVEL = 'DISPONIVEL',
  ALUGADO = 'ALUGADO',
  VENDIDO = 'VENDIDO',
  INDISPONIVEL = 'INDISPONIVEL'
}

export enum StatusAgendamento {
  PENDENTE = 'PENDENTE',
  CONFIRMADO = 'CONFIRMADO',
  CANCELADO = 'CANCELADO',
  CONCLUIDO = 'CONCLUIDO'
}

export enum TipoContrato {
  VENDA = 'VENDA',
  ALUGUEL = 'ALUGUEL'
}

export enum StatusContrato {
  ATIVO = 'ATIVO',
  FINALIZADO = 'FINALIZADO',
  CANCELADO = 'CANCELADO'
}

export enum StatusPagamento {
  PENDENTE = 'PENDENTE',
  PAGO = 'PAGO',
  ATRASADO = 'ATRASADO',
  CANCELADO = 'CANCELADO'
}

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  senha: string;
  telefone?: string;
  role: Role;
  criadoEm: Date;
  atualizadoEm: Date;
  imoveis?: Imovel[];
  agendamentos?: Agendamento[];
  contratos?: Contrato[];
}

export interface Imovel {
  id: string;
  titulo: string;
  descricao: string;
  tipo: TipoImovel;
  status: StatusImovel;
  valor: number;
  area: number;
  quartos: number;
  banheiros: number;
  vagas?: number;
  endereco?: Endereco;
  proprietarioId: string;
  proprietario?: Usuario;
  caracteristicas?: CaracteristicaImovel[];
  imagens?: ImagemImovel[];
  agendamentos?: Agendamento[];
  contratos?: Contrato[];
  criadoEm: Date;
  atualizadoEm: Date;
}

export interface Endereco {
  id: string;
  cep: string;
  logradouro: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
  imovelId: string;
  imovel?: Imovel;
}

export interface CaracteristicaImovel {
  id: string;
  nome: string;
  imovelId: string;
  imovel?: Imovel;
}

export interface ImagemImovel {
  id: string;
  url: string;
  imovelId: string;
  imovel?: Imovel;
  destaque: boolean;
  ordem: number;
}

export interface Agendamento {
  id: string;
  data: Date;
  horario: string;
  status: StatusAgendamento;
  observacoes?: string;
  usuarioId: string;
  usuario?: Usuario;
  imovelId: string;
  imovel?: Imovel;
  criadoEm: Date;
  atualizadoEm: Date;
}

export interface Contrato {
  id: string;
  tipo: TipoContrato;
  dataInicio: Date;
  dataFim?: Date;
  valor: number;
  status: StatusContrato;
  documentoUrl?: string;
  usuarioId: string;
  usuario?: Usuario;
  imovelId: string;
  imovel?: Imovel;
  pagamentos?: Pagamento[];
  criadoEm: Date;
  atualizadoEm: Date;
}

export interface Pagamento {
  id: string;
  valor: number;
  dataPagamento?: Date;
  dataVencimento: Date;
  status: StatusPagamento;
  comprovante?: string;
  contratoId: string;
  contrato?: Contrato;
  criadoEm: Date;
  atualizadoEm: Date;
} 