import type { Despesa } from "@/shared/types/domain/despesa";

export async function getDespesasAction(): Promise<Despesa[]> {
  const resposta = await fetch("/api/despesas");
  if (!resposta.ok) throw new Error("Erro ao buscar despesas");
  return resposta.json();
}