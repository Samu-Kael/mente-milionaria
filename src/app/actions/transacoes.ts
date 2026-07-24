'use server';

import { revalidatePath } from 'next/cache';
import { transacaoCreateSchema } from '@/modules/transacoes/dto/transacao.dto';
import { criarTransacaoUseCase } from '@/modules/transacoes/usecases/criar-transacao';
import { listarTransacoesUseCase } from '@/modules/transacoes/usecases/listar-transacoes';
import { obterResumoUseCase } from '@/modules/transacoes/usecases/obter-resumo';
import type { ResumoFinanceiro, Transacao } from '@/shared/types/domain/financeiro';

export async function criarTransacaoAction(formData: FormData): Promise<void> {
  const payload = transacaoCreateSchema.parse({
    descricao: formData.get('descricao'),
    valor: formData.get('valor'),
    tipo: formData.get('tipo'),
    categoria: formData.get('categoria'),
    data: formData.get('data'),
    usuarioId: formData.get('usuarioId') ?? '1',
  });

  await criarTransacaoUseCase.execute(payload);
  revalidatePath('/');
}

export const createTransacaoAction = criarTransacaoAction;

export async function listarTransacoesAction(): Promise<Transacao[]> {
  return listarTransacoesUseCase.execute('1');
}

export async function obterResumoAction(): Promise<ResumoFinanceiro> {
  const transacoes = await listarTransacoesAction();
  return obterResumoUseCase.execute(transacoes);
}

export async function obterDashboardDataAction(): Promise<{
  transacoes: Transacao[];
  resumo: ResumoFinanceiro;
}> {
  const transacoes = await listarTransacoesAction();
  const resumo = obterResumoUseCase.execute(transacoes);

  return { transacoes, resumo };
}
