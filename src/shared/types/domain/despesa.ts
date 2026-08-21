export interface Despesa {
  id: string;
  descricao: string;
  valor: number;
  categoria: string;
  data: string;
  criadoEm: string;
}

export type NovaDespesa = Omit<Despesa, "id" | "criadoEm">;