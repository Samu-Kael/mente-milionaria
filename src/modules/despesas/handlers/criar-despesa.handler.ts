import type { CreateDespesaDTO } from "../dto/create-despesa.dto";
import type { Despesa } from "@/shared/types/domain/despesa";
import { criarDespesaUseCase } from "../usecases/criar-despesa.usecase";

function capitalizarPrimeiraLetra(texto: string): string {
  if (!texto) return texto;
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

export async function criarDespesaHandler(dados: CreateDespesaDTO): Promise<Despesa> {
  const dadosNormalizados: CreateDespesaDTO = {
    descricao: capitalizarPrimeiraLetra(dados.descricao.trim()),
    valor: Number(dados.valor),
    categoria: dados.categoria.trim(),
    data: dados.data.trim(),
  };

  return criarDespesaUseCase(dadosNormalizados);
}