export type TipoTransacao = 'RECEITA' | 'DESPESA';

export interface Transacao {
  id: string;
  descricao: string;
  valor: number;
  tipo: TipoTransacao;
  categoria: string;
  data: string;
  usuarioId?: string;
}

export interface ResumoFinanceiro {
  saldoTotal: number;
  totalEntradas: number;
  totalSaidas: number;
}

export interface ContaCorrente {
  id: string;
  banco: string;
  saldo: number;
}

export interface CardResumoFinanceiro {
  titulo: string;
  valor: number;
  tipo: 'positivo' | 'negativo' | 'neutro';
  porcentagemAlteracao?: number;
}

export interface GraficoEvolucaoMensal {
  mes: string;
  receitas: number;
  despesas: number;
}