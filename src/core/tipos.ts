export interface Categoria {
  id: number;
  nome: string;
  tipo: 'receita' | 'despesa';
}

export interface Transacao {
  id: number;
  descricao: string;
  valor: number; 
  data: string;
  categoriaId: number;
}

export interface MetaFinanceira {
  id: number;
  objetivo: string;
  valorAlvo: number;
  valorAtual: number;
  prazo: Date;
}

export interface PainelResumo {
  totalReceitas: number;
  totalDespesas: number;
  saldoGeral: number;
  percentualGasto: number;
}