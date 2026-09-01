import type { Receita } from "@/shared/types/domain/receita";
import type { CreateReceitaDTO } from "@/modules/receitas/dto/create-receita.dto";

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
    throw new Error(erro.mensagem ?? "Erro ao criar receita");
  }

  const novaReceita: Receita = await resposta.json();
  return [...listaAtual, novaReceita];
}