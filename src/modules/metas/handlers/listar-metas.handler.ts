import type { Meta } from "@/shared/types/domain/meta";
import { listarMetasUseCase } from "../usecases/listar-metas.usecase";

export async function listarMetasHandler(): Promise<Meta[]> {
  return listarMetasUseCase();
}