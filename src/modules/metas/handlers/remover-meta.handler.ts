import { removerMetaUseCase } from "../usecases/remover-meta.usecase";

export async function removerMetaHandler(id: string): Promise<void> {
  await removerMetaUseCase(id);
}