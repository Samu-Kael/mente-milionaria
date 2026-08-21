import { removerReceitaUseCase } from "../usecases/remover-receita.usecase";

export async function removerReceitaHandler(id: string): Promise<void> {
  await removerReceitaUseCase(id);
}