import type { ResumoFinanceiro, Transacao } from '@/shared/types/domain/financeiro';

export class ObterResumoUseCase {
  execute(transacoes: Transacao[]): ResumoFinanceiro {
    const totalEntradas = transacoes
      .filter((item) => item.tipo === 'RECEITA')
      .reduce((sum, item) => sum + item.valor, 0);

    const totalSaidas = transacoes
      .filter((item) => item.tipo === 'DESPESA')
      .reduce((sum, item) => sum + item.valor, 0);

    return {
      saldoTotal: totalEntradas - totalSaidas,
      totalEntradas,
      totalSaidas,
    };
  }
}

export const obterResumoUseCase = new ObterResumoUseCase();
