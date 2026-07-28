import { db } from '@/infrastructure/database/db';
import { metas } from '@/infrastructure/schemas';
import { eq } from 'drizzle-orm';

export const MetasRepository = {
  async salvar(dados: typeof metas.$inferInsert) {
    return await db.insert(metas).values(dados).returning();
  },
  async excluir(id: string) {
    return await db.delete(metas).where(eq(metas.id, id)).returning();
  },
  async listarTodas() {
    return await db.select().from(metas);
  }
};