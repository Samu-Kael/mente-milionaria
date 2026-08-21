import type { CreateCategoriaDTO } from "../dto/create-categoria.dto";
import type { Categoria } from "@/shared/types/domain/categoria";
import { criarCategoriaUseCase } from "../usecases/criar-categoria.usecase";

function capitalizarPrimeiraLetra(texto: string): string {
  if (!texto) return texto;
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

export async function criarCategoriaHandler(dados: CreateCategoriaDTO): Promise<Categoria> {
  const dadosNormalizados: CreateCategoriaDTO = {
    nome: capitalizarPrimeiraLetra(dados.nome.trim()),
    cor: dados.cor.trim(),
    isPadrao: Boolean(dados.isPadrao),
  };

  return criarCategoriaUseCase(dadosNormalizados);
}