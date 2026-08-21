import type { Categoria } from "@/shared/types/domain/categoria";
import { CategoriasRepository } from "../repositories/categorias.repository";

export async function listarCategoriasUseCase(): Promise<Categoria[]> {
  return CategoriasRepository.buscarTodas();
}