import type { Categoria } from "@/shared/types/domain/categoria";
import { listarCategoriasUseCase } from "../usecases/listar-categoria-usecase";

export async function listarCategoriasHandler(): Promise<Categoria[]> {
  return listarCategoriasUseCase();
}