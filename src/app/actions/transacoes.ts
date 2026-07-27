'server-only';
'use server';

import { db } from '@/infrastructure/persistence/db';
import { transacoes } from '@/infrastructure/persistence/schema';
import { revalidatePath } from 'next/cache';
import { eq, desc } from 'drizzle-orm';

export async function buscarTransacoes(usuarioId = 'usr_1') {
  try {
    return await db
      .select()
      .from(transacoes)
      .where(eq(transacoes.usuarioId, usuarioId))
      .orderBy(desc(transacoes.data));
  } catch (error) {
    console.error('Erro ao buscar transações:', error);
    return [];
  }
}

export async function buscarResumo(usuarioId = 'usr_1') {
  const lista = await buscarTransacoes(usuarioId);
  
  const totalEntradas = lista
    .filter((t) => t.tipo === 'RECEITA')
    .reduce((acc, t) => acc + t.valor, 0);

  const totalSaidas = lista
    .filter((t) => t.tipo === 'DESPESA')
    .reduce((acc, t) => acc + t.valor, 0);

  return {
    saldoTotal: totalEntradas - totalSaidas,
    totalEntradas,
    totalSaidas,
  };
}

export async function criarTransacao(formData: FormData) {
  const descricao = formData.get('descricao') as string;
  const valor = parseFloat(formData.get('valor') as string);
  const tipo = formData.get('tipo') as 'RECEITA' | 'DESPESA';
  const categoria = formData.get('categoria') as string;
  const data = (formData.get('data') as string) || new Date().toISOString().split('T')[0];

  if (!descricao || isNaN(valor) || !tipo || !categoria) {
    throw new Error('Preencha todos os campos corretamente.');
  }

  await db.insert(transacoes).values({
    id: `trx_${Date.now()}`,
    usuarioId: 'usr_1', // Usuário padrão para desenvolvimento
    descricao,
    valor,
    tipo,
    categoria,
    data,
  });

  revalidatePath('/dashboard');
}