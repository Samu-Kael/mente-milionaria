export interface Receita {
  id: string;
  descricao: string;
  valor: number;
  categoria: string;
  data: string;
  criadoEm: string;
}

export type NovaReceita = Omit<Receita, "id" | "criadoEm">;