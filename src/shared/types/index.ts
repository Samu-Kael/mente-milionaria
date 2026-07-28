export type TipoTransacao = 'RECEITA' | 'DESPESA';

export interface Transacao {
  id: string;
  usuarioId: string;
  descricao: string;
  valor: number;
  tipo: TipoTransacao;
  categoria: string;
  data: string;
  criadoEm?: Date | null;
}

export interface Meta {
  id: string;
  usuarioId: string;
  titulo: string;
  valorAlvo: number;
  valorAtual: number;
  prazo: string;
  criadoEm?: Date | null;
}

export interface ResumoFinanceiro {
  saldo: number;
  receitas: number;
  despesas: number;
}

export interface ActionResponse<T = void> {
  success: boolean;
  error?: string;
  data?: T;
}