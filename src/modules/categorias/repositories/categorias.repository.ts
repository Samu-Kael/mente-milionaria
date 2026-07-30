import { db } from '@/infrastructure/database/db';
import { categorias } from '@/infrastructure/schemas';
import { eq } from 'drizzle-orm';

export const CategoriasRepository = {
  async salvar(dados: typeof categorias.$inferInsert) {
    return await db.insert(categorias).values(dados).returning();
  },

  async listarPorUsuario(usuarioId: string) {
    return await db.select().from(categorias).where(eq(categorias.usuarioId, usuarioId));
  },

  async excluir(id: string) {
    return await db.delete(categorias).where(eq(categorias.id, id)).returning();
  }
};