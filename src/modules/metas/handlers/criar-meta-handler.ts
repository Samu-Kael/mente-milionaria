import { repositorioMetaDrizzle } from "@/infrastructure/persistence/repositories/repositorio-meta-drizzle";
import { validarCriarMeta } from "../dto/criar-meta.dto";
import { CriarMetaUseCase } from "../usecases/criar-meta.usecases";

export async function criarMetaHandler(formData: FormData): Promise<{ sucesso: boolean; erro?: string }> {
  try {
    const dadosBrutos = {
      objetivo: formData.get("objetivo"),
      valorAlvo: formData.get("valorAlvo"),
      valorAtual: formData.get("valorAtual"),
      prazo: formData.get("prazo"),
    };

    // 1. Validação dos dados brutos com o DTO
    const dadosValidados = validarCriarMeta(dadosBrutos);

    // 2. Instanciação do Caso de Uso injetando o repositório Drizzle correspondente
    const useCase = new CriarMetaUseCase(repositorioMetaDrizzle);

    // 3. Execução da persistência através das regras de negócio
    await useCase.executar(dadosValidados);

    return { sucesso: true };
  } catch (error: any) {
    return { 
      sucesso: false, 
      erro: error.message || "Erro inesperado ao criar a meta financeira." 
    };
  }
}