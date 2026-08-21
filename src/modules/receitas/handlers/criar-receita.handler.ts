import type { CreateReceitaDTO } from "../dto/create-receita.dto";
import type { Receita } from "@/shared/types/domain/receita";
import { criarReceitaUseCase } from "../usecases/criar-receita.usecase";

function capitalizarPrimeiraLetra(texto: string): string {
  if (!texto) return texto;
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

export async function criarReceitaHandler(dados: CreateReceitaDTO): Promise<Receita> {
  const dadosNormalizados: CreateReceitaDTO = {
    descricao: capitalizarPrimeiraLetra(dados.descricao.trim()),
    valor: Number(dados.valor),
    categoria: dados.categoria.trim(),
    data: dados.data.trim(),
  };

  return criarReceitaUseCase(dadosNormalizados);
}