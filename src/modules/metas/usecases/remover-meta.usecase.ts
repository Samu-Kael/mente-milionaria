import { MetasRepository } from "../repositories/metas.repository";

export async function removerMetaUseCase(id: string): Promise<void> {
  const meta = await MetasRepository.buscarPorId(id);

  if (!meta) {
    throw new Error("Meta não encontrada.");
  }

  await MetasRepository.deletar(id);
}