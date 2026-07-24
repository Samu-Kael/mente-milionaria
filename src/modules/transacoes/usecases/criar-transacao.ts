import { transacaoRepository } from '@/infrastructure/persistence/repositories/transacao-repository';
import { transacaoCreateSchema, type CreateTransacaoInput } from '@/modules/transacoes/dto/transacao.dto';
import type { Transacao } from '@/shared/types/domain/financeiro';

export class CriarTransacaoUseCase {
  constructor(private readonly repository = transacaoRepository) {}

  async execute(input: CreateTransacaoInput): Promise<Transacao> {
    const dadosValidados = transacaoCreateSchema.parse(input);

    return this.repository.criar({
      ...dadosValidados,
      data: dadosValidados.data,
    });
  }
}

export const criarTransacaoUseCase = new CriarTransacaoUseCase();
