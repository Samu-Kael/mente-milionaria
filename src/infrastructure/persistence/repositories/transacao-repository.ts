import { desc, eq } from 'drizzle-orm';
import { db } from '@/infrastructure/persistence/db';
import { transacoes } from '@/infrastructure/persistence/schema';
import type { TipoTransacao, Transacao } from '@/shared/types/domain/financeiro';

export interface CriarTransacaoInput {
  descricao: string;
  valor: number;
  tipo: TipoTransacao;
  categoria: string;
  data: string;
  usuarioId?: string;
}

export class TransacaoRepository {
  async listarPorUsuario(usuarioId = '1'): Promise<Transacao[]> {
    const rows = await db
      .select()
      .from(transacoes)
      .where(eq(transacoes.usuarioId, Number(usuarioId)))
      .orderBy(desc(transacoes.data));

    return rows.map((row) => ({
      id: String(row.id),
      descricao: row.descricao,
      valor: Number(row.valor),
      tipo: row.tipo as TipoTransacao,
      categoria: row.categoria,
      data: row.data,
      usuarioId: String(row.usuarioId),
    }));
  }

  async criar(input: CriarTransacaoInput): Promise<Transacao> {
    const usuarioId = Number(input.usuarioId ?? 1);
    const [row] = await db
      .insert(transacoes)
      .values({
        descricao: input.descricao,
        valor: input.valor,
        tipo: input.tipo,
        categoria: input.categoria,
        data: input.data,
        usuarioId,
      })
      .returning();

    return {
      id: String(row.id),
      descricao: row.descricao,
      valor: Number(row.valor),
      tipo: row.tipo as TipoTransacao,
      categoria: row.categoria,
      data: row.data,
      usuarioId: String(row.usuarioId),
    };
  }
}

export const transacaoRepository = new TransacaoRepository();
