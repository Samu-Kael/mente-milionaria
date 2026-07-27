import { sqliteTable, text, real } from 'drizzle-orm/sqlite-core';

export const usuarios = sqliteTable('usuarios', {
  id: text('id').primaryKey(),
  nome: text('nome').notNull(),
  email: text('email').notNull().unique(),
  senha: text('senha').notNull(),
});

export const transacoes = sqliteTable('transacoes', {
  id: text('id').primaryKey(),
  usuarioId: text('usuario_id').notNull(),
  descricao: text('descricao').notNull(),
  valor: real('valor').notNull(),
  tipo: text('tipo', { enum: ['RECEITA', 'DESPESA'] }).notNull(),
  categoria: text('categoria').notNull(),
  data: text('data').notNull(),
});

export const metas = sqliteTable('metas', {
  id: text('id').primaryKey(),
  usuarioId: text('usuario_id').notNull(),
  titulo: text('titulo').notNull(),
  valorAlvo: real('valor_alvo').notNull(),
  valorAtual: real('valor_atual').notNull().default(0),
  prazo: text('prazo').notNull(),
});