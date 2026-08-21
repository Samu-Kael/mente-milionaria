import type { CreateReceitaDTO } from "@/modules/receitas/dto/create-receita.dto";
import type { Receita } from "@/shared/types/domain/receita";

export async function createReceitaAction(
  listaAtual: Receita[],
  dados: CreateReceitaDTO
): Promise<Receita[]> {
  const resposta = await fetch("/api/receitas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });

  if (!resposta.ok) {
    const erro = await resposta.json();
    throw new Error(erro.error ?? "Erro ao criar receita");
  }

  const novaReceita: Receita = await resposta.json();
  return [...listaAtual, novaReceita];
}

export async function deleteReceitaAction(
  listaAtual: Receita[],
  id: string
): Promise<Receita[]> {
  const resposta = await fetch(`/api/receitas/${id}`, { method: "DELETE" });
  
  if (!resposta.ok) {
    throw new Error("Erro ao remover receita");
  }
  
  return listaAtual.filter((r) => r.id !== id);
}