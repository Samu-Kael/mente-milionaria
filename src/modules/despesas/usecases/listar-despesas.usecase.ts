import type { Despesa } from "@/shared/types/domain/despesa";
import { DespesasRepository } from "../repositories/despesas.repository";

export async function listarDespesasUseCase(): Promise<Despesa[]> {
  return DespesasRepository.buscarTodas();
}