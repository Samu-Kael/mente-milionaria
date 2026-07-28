import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const categorias = sqliteTable('categorias', {
  id: text('id').primaryKey(),
  usuarioId: text('usuario_id').notNull(),
  nome: text('nome').notNull(),
  cor: text('cor'),
  criadoEm: text('criado_em').notNull(),
});