import type { CreateMetaDTO } from "../dto/create-meta.dto";
import type { Meta } from "@/shared/types/domain/meta";
import { MetasRepository } from "../repositories/metas.repository";

export async function criarMetaUseCase(dados: CreateMetaDTO): Promise<Meta> {
  if (!dados.titulo || !dados.valorAlvo || !dados.prazo) {
    throw new Error("Título, valor alvo e prazo são obrigatórios.");
  }

  if (dados.titulo.length < 2) {
    throw new Error("O título deve ter ao menos 2 caracteres.");
  }

  if (dados.valorAlvo <= 0) {
    throw new Error("O valor alvo da meta deve ser maior que zero.");
  }

  return MetasRepository.salvar(dados);
}