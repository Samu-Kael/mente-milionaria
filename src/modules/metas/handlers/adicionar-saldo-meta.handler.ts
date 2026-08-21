import type { AdicionarSaldoMetaDTO } from "../dto/adicionar-saldo-meta.dto";
import type { Meta } from "@/shared/types/domain/meta";
import { adicionarSaldoMetaUseCase } from "../usecases/adicionar-saldo-meta.usecase";

export async function adicionarSaldoMetaHandler(dados: AdicionarSaldoMetaDTO): Promise<Meta> {
  const dadosNormalizados: AdicionarSaldoMetaDTO = {
    id: dados.id,
    valor: Number(dados.valor),
  };

  return adicionarSaldoMetaUseCase(dadosNormalizados);
}