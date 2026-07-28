import { db } from '@/infrastructure/database/db';
import { transacoes } from '@/infrastructure/schemas/schema-despesas';
import { eq, and, desc } from 'drizzle-orm';

export const RepositorioReceitaDrizzle = {
  async listarPorUsuario(usuarioId: string) {
    return await db
      .select()
      .from(transacoes)
      .where(and(eq(transacoes.usuarioId, usuarioId), eq(transacoes.tipo, 'RECEITA')))
      .orderBy(desc(transacoes.data));
  },

  async criar(dados: { usuarioId: string; descricao: string; valor: number; categoria: string; data: string }) {
    await db.insert(transacoes).values({
      id: `rec_${Date.now()}`,
      tipo: 'RECEITA',
      ...dados,
    });
  },

  async deletar(id: string) {
    await db.delete(transacoes).where(eq(transacoes.id, id));
  }
};