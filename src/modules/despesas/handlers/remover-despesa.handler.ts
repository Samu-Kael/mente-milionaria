import { removerDespesaUseCase } from "../usecases/remover-despesa.usecase";

export async function removerDespesaHandler(id: string): Promise<void> {
  await removerDespesaUseCase(id);
}