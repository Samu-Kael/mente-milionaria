import type { Meta } from "@/shared/types/domain/meta";
import { MetasRepository } from "../repositories/metas.repository";

export async function listarMetasUseCase(): Promise<Meta[]> {
  return MetasRepository.buscarTodas();
}