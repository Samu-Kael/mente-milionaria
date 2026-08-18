export interface Despesa {
  descricao: string;
  valor: number;
  categoria: string;
  data: string;
}

export interface Meta {
  titulo: string;
  valorAlvo: number;
  prazo: string;
}

export interface Receita {
  descricao: string;
  valor: number;
  categoria: string;
  data: string;
}

export interface ActionResponse<T = void> {
  success: boolean;
  error?: string;
  data?: T;
}