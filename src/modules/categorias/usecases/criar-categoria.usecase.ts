import type { CreateCategoriaDTO } from "../dto/create-categoria.dto";
import type { Categoria } from "@/shared/types/domain/categoria";
import { CategoriasRepository } from "../repositories/categorias.repository";

export async function criarCategoriaUseCase(dados: CreateCategoriaDTO): Promise<Categoria> {
  if (!dados.nome || !dados.cor) {
    throw new Error("Nome e cor são obrigatórios.");
  }

  if (dados.nome.length < 2) {
    throw new Error("O nome da categoria deve ter ao menos 2 caracteres.");
  }

  if (!dados.cor.startsWith("#") || dados.cor.length < 4) {
    throw new Error("A cor deve ser um código hexadecimal válido.");
  }

  return CategoriasRepository.salvar(dados);
}