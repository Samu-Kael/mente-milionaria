import { db } from '@/infrastructure/database/db';
import { categorias } from '@/infrastructure/schemas/schema-categorias';
import { eq } from 'drizzle-orm';

export const RepositorioCategoriaDrizzle = {
  async listarPorUsuario(usuarioId: string) {
    return await db.select().from(categorias).where(eq(categorias.usuarioId, usuarioId));
  },

  async criar(dados: { usuarioId: string; nome: string; cor?: string }) {
    const novaCat = {
      id: `cat_${Date.now()}`,
      usuarioId: dados.usuarioId,
      nome: dados.nome,
      cor: dados.cor ?? '#10B981',
    };
    await db.insert(categorias).values(novaCat);
    return novaCat;
  },
};