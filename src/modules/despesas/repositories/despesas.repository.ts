import { db } from '@/infrastructure/database/db';
import { despesas } from '@/infrastructure/schemas';
import { eq } from 'drizzle-orm';

export const DespesasRepository = {
  async salvar(dados: typeof despesas.$inferInsert) {
    return await db.insert(despesas).values(dados).returning();
  },
  async excluir(id: string) {
    return await db.delete(despesas).where(eq(despesas.id, id)).returning();
  },
  async listarTodas() {
    return await db.select().from(despesas);
  }
};