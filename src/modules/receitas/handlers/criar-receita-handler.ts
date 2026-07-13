import { criarReceitaSchema } from "../dto/criar-receita.dto"; 
import { CriarReceitaUseCase } from "../usecases/criar-receitas.usecases";

// CORREÇÃO: Apontar para a pasta "repositories" que está dentro do próprio módulo de receitas
import { ReceitaRepositoryDrizzle } from "../repositories/repositorio-receita";

export async function criarReceitaHandler(dadosBrutos: unknown) {
  const dadosValidados = criarReceitaSchema.parse(dadosBrutos); 
  const repositorio = new ReceitaRepositoryDrizzle();
  const useCase = new CriarReceitaUseCase(repositorio);

  return await useCase.executar(dadosValidados);
}