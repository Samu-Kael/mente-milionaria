export interface Meta {
  id: string;
  titulo: string;
  valorAlvo: number;
  prazo: string;
  acumulado: number;
  criadoEm: string;
}

export type NovaMeta = Omit<Meta, "id" | "criadoEm" | "acumulado">;