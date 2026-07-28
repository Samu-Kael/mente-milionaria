import { repositorioCategoriaDrizzle } from "@/modules/categorias/repositories/repositorio-categoria-drizzle";
import { validarCriarCategoria } from "../dto/criar-categoria.dto";
import { CriarCategoriaUseCase } from "../usecases/criar-categoria.usecases";

export async function criarCategoriaHandler(formData: FormData): Promise<{ sucesso: boolean; erro?: string }> {
  try {
    const dadosBrutos = {
      nome: formData.get("nome"),
      tipo: formData.get("tipo"),
    };

    const dadosValidados = validarCriarCategoria(dadosBrutos);

    const useCase = new CriarCategoriaUseCase(repositorioCategoriaDrizzle);

    await useCase.executar(dadosValidados);

    return { sucesso: true };
  } catch (error: any) {
    return { 
      sucesso: false, 
      erro: error.message || "Erro inesperado ao processar o formulário." 
    };
  }
}