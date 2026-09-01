import type { Receita } from "@/shared/types/domain/receita";

export async function deleteReceitaAction(
  listaAtual: Receita[],
  id: string
): Promise<Receita[]> {
  const resposta = await fetch(`/api/receitas/${id}`, { method: "DELETE" });
  if (!resposta.ok) throw new Error("Erro ao remover receita");
  return listaAtual.filter((r) => r.id !== id);
}