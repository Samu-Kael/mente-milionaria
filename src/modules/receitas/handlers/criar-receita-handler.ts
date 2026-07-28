import { repositorioReceitaDrizzle } from "@/modules/receitas/repositories/repositorio-receita-drizzle";
import { validarCriarReceita } from "../dto/criar-receita.dto";
import { CriarReceitaUseCase } from "../usecases/criar-receitas.usecases";

export async function criarReceitaHandler(formData: FormData): Promise<{ sucesso: boolean; erro?: string }> {
  try {
    const dadosBrutos = {
      descricao: formData.get("descricao"),
      valor: formData.get("valor"),
      data: formData.get("data"),
      categoriaId: formData.get("categoriaId"),
    };

    // 1. Valida os dados vindo da interface
    const dadosValidados = validarCriarReceita(dadosBrutos);

    // 2. Instancia o Caso de Uso passando o repositório correto
    const useCase = new CriarReceitaUseCase(repositorioReceitaDrizzle);

    // 3. Executa a gravação no banco
    await useCase.executar(dadosValidados);

    return { sucesso: true };
  } catch (error: any) {
    return { 
      sucesso: false, 
      erro: error.message || "Erro inesperado ao registrar a receita." 
    };
  }
}