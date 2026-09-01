import type { Receita } from "@/shared/types/domain/receita";

export async function getReceitasAction(): Promise<Receita[]> {
  const resposta = await fetch("/api/receitas");
  if (!resposta.ok) throw new Error("Erro ao buscar receitas");
  return resposta.json();
}