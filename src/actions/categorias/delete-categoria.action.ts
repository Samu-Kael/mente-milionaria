import type { Categoria } from "@/shared/types/domain/categoria";

export async function deleteCategoriaAction(
  listaAtual: Categoria[],
  id: string
): Promise<Categoria[]> {
  const resposta = await fetch(`/api/categorias/${id}`, { method: "DELETE" });
  if (!resposta.ok) throw new Error("Erro ao remover categoria");
  return listaAtual.filter((c) => c.id !== id);
}