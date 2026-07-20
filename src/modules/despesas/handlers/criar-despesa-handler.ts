import { repositorioDespesaDrizzle } from "@/infrastructure/persistence/repositories/repositorio-despesa-drizzle";
import { validarCriarDespesa } from "../dto/criar-despesa.dto";
import { CriarDespesaUseCase } from "../usecases/criar-despesa.usecases";

export async function criarDespesaHandler(formData: FormData): Promise<{ sucesso: boolean; erro?: string }> {
  try {
    const dadosBrutos = {
      descricao: formData.get("descricao"),
      valor: formData.get("valor"),
      data: formData.get("data"),
      categoriaId: formData.get("categoriaId"),
    };

    // 1. Valida a estrutura dos dados com o DTO
    const dadosValidados = validarCriarDespesa(dadosBrutos);

    // 2. Instancia o Caso de Uso passando o repositório real do Drizzle
    const useCase = new CriarDespesaUseCase(repositorioDespesaDrizzle);

    // 3. Executa a inserção chamando a regra de negócio
    await useCase.executar(dadosValidados);

    return { sucesso: true };
  } catch (error: any) {
    return { 
      sucesso: false, 
      erro: error.message || "Erro inesperado ao registrar a despesa." 
    };
  }
}