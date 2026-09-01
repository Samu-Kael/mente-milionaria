import type { Meta } from "@/shared/types/domain/meta";

export async function getMetasAction(): Promise<Meta[]> {
  const resposta = await fetch("/api/metas");
  if (!resposta.ok) throw new Error("Erro ao buscar metas");
  return resposta.json();
}