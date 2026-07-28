import { sqliteTable, text, real } from 'drizzle-orm/sqlite-core';

export const despesas = sqliteTable('despesas', {
  id: text('id').primaryKey(),
  usuarioId: text('usuario_id').notNull(),
  descricao: text('descricao').notNull(),
  valor: real('valor').notNull(),
  categoria: text('categoria').notNull(),
  data: text('data').notNull(),
  criadoEm: text('criado_em').notNull(),
});