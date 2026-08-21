import type { Categoria } from "@/shared/types/domain/categoria";
import { listarCategoriasUseCase } from "../usecases/listar-categorias.usecase";

export async function listarCategoriasHandler(): Promise<Categoria[]> {
  return listarCategoriasUseCase();
}