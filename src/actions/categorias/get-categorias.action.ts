import type { Categoria } from "@/shared/types/domain/categoria";

export async function getCategoriasAction(): Promise<Categoria[]> {
  const resposta = await fetch("/api/categorias");
  if (!resposta.ok) throw new Error("Erro ao buscar categorias");
  return resposta.json();
}