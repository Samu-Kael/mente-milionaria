import { sqliteTable, text, real } from 'drizzle-orm/sqlite-core';

export const metas = sqliteTable('metas', {
  id: text('id').primaryKey(),
  usuarioId: text('usuario_id').notNull(),
  titulo: text('titulo').notNull(),
  valorAlvo: real('valor_alvo').notNull(),
  valorAtual: real('valor_atual').default(0).notNull(),
  prazo: text('prazo').notNull(),
  criadoEm: text('criado_em').notNull(),
});