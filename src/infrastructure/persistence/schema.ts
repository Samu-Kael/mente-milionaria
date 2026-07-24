import { integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const usuarios = sqliteTable('usuarios', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  nome: text('nome').notNull(),
  email: text('email').notNull().unique(),
  senha: text('senha').notNull(),
});

export const transacoes = sqliteTable('transacoes', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  descricao: text('descricao').notNull(),
  valor: real('valor').notNull(),
  tipo: text('tipo', { enum: ['RECEITA', 'DESPESA'] }).notNull(),
  categoria: text('categoria').notNull(),
  data: text('data').notNull(),
  usuarioId: integer('usuario_id')
    .notNull()
    .references(() => usuarios.id),
});

export const metas = sqliteTable('metas', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  objetivo: text('objetivo').notNull(),
  valorAlvo: real('valor_alvo').notNull(),
  valorAtual: real('valor_atual').notNull().default(0),
  prazo: text('prazo').notNull(),
  usuarioId: integer('usuario_id')
    .notNull()
    .references(() => usuarios.id),
});
