import type { Receita } from "@/shared/types/domain/receita";
import { listarReceitasUseCase } from "../usecases/listar-receitas.usecase";

export async function listarReceitasHandler(): Promise<Receita[]> {
  return listarReceitasUseCase();
}