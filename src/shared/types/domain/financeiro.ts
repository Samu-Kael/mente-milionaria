export interface TransacaoMockada {
  id: string;
  descricao: string;
  valor: number; 
  tipo: "receita" | "despesa";
  data: string;
  categoria: string;
}

export interface CardResumoFinanceiro {
  titulo: string;
  valor: number;
  tipo: "positivo" | "negativo" | "neutro";
  porcentagemAlteracao?: number;
}

export interface GraficoEvolucaoMensal {
  mes: string;
  receitas: number;
  despesas: number;
}