import type { Despesa } from "@/shared/types/domain/despesa";

export async function deleteDespesaAction(
  listaAtual: Despesa[],
  id: string
): Promise<Despesa[]> {
  const resposta = await fetch(`/api/despesas/${id}`, { method: "DELETE" });
  if (!resposta.ok) throw new Error("Erro ao remover despesa");
  return listaAtual.filter((d) => d.id !== id);
}