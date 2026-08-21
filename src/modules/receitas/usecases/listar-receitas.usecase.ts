import type { Receita } from "@/shared/types/domain/receita";
import { ReceitasRepository } from "../repositories/receitas.repository";

export async function listarReceitasUseCase(): Promise<Receita[]> {
  return ReceitasRepository.buscarTodas();
}