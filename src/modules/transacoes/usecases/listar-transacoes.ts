import { transacaoRepository } from '@/infrastructure/persistence/repositories/transacao-repository';
import type { Transacao } from '@/shared/types/domain/financeiro';

export class ListarTransacoesUseCase {
  constructor(private readonly repository = transacaoRepository) {}

  async execute(usuarioId = '1'): Promise<Transacao[]> {
    return this.repository.listarPorUsuario(usuarioId);
  }
}

export const listarTransacoesUseCase = new ListarTransacoesUseCase();
