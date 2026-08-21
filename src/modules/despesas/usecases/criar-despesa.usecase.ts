import type { CreateDespesaDTO } from "../dto/create-despesa.dto";
import type { Despesa } from "@/shared/types/domain/despesa";
import { DespesasRepository } from "../repositories/despesas.repository";

export async function criarDespesaUseCase(dados: CreateDespesaDTO): Promise<Despesa> {
  if (!dados.descricao || !dados.valor || !dados.categoria || !dados.data) {
    throw new Error("Descrição, valor, categoria e data são obrigatórios.");
  }

  if (dados.descricao.length < 2) {
    throw new Error("A descrição deve ter ao menos 2 caracteres.");
  }

  if (dados.valor <= 0) {
    throw new Error("O valor da despesa deve ser maior que zero.");
  }

  return DespesasRepository.salvar(dados);
}