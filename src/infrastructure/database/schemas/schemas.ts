import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

// 1. TABELA DE CATEGORIAS (Essencial para organizar Despesas e Receitas)
export const categorias = sqliteTable('categorias', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  nome: text('nome').notNull(),
  tipo: text('tipo', { enum: ['receita', 'despesa'] }).notNull(), // Restringe o tipo
});

// 2. TABELA DE RECEITAS (Ajustada e conectada à categoria)
export const receitas = sqliteTable('receitas', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  descricao: text('descricao').notNull(),
  valor: real('valor').notNull(),
  data: integer('data', { mode: 'timestamp' }).notNull(),
  categoriaId: integer('categoria_id').notNull().references(() => categorias.id),
});

// 3. TABELA DE DESPESAS
export const despesas = sqliteTable('despesas', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  descricao: text('descricao').notNull(),
  valor: real('valor').notNull(),
  data: integer('data', { mode: 'timestamp' }).notNull(),
  categoriaId: integer('categoria_id').notNull().references(() => categorias.id),
});

// 4. TABELA DE METAS FINANCEIRAS
export const metas = sqliteTable('metas', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  objetivo: text('objetivo').notNull(),
  valorAlvo: real('valor_alvo').notNull(),
  valorAtual: real('valor_atual').notNull().default(0),
  prazo: integer('prazo', { mode: 'timestamp' }).notNull(),
});