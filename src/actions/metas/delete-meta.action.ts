import type { Meta } from "@/shared/types/domain/meta";

export async function deleteMetaAction(
  listaAtual: Meta[],
  id: string
): Promise<Meta[]> {
  const resposta = await fetch(`/api/metas/${id}`, { method: "DELETE" });
  if (!resposta.ok) throw new Error("Erro ao remover meta");
  return listaAtual.filter((m) => m.id !== id);
}