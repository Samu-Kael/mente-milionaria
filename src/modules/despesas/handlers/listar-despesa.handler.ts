import type { Despesa } from "@/shared/types/domain/despesa";
import { listarDespesasUseCase } from "../usecases/listar-despesas.usecase";

export async function listarDespesasHandler(): Promise<Despesa[]> {
  return listarDespesasUseCase();
}