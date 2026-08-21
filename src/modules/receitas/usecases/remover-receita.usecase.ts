import { ReceitasRepository } from "../repositories/receitas.repository";

export async function removerReceitaUseCase(id: string): Promise<void> {
  const receita = await ReceitasRepository.buscarPorId(id);

  if (!receita) {
    throw new Error("Receita não encontrada.");
  }

  await ReceitasRepository.deletar(id);
}