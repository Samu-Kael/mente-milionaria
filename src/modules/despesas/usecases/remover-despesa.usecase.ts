import { DespesasRepository } from "../repositories/despesas.repository";

export async function removerDespesaUseCase(id: string): Promise<void> {
  const despesa = await DespesasRepository.buscarPorId(id);

  if (!despesa) {
    throw new Error("Despesa não encontrada.");
  }

  await DespesasRepository.deletar(id);
}