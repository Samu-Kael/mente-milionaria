import {
  numeric,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const tabelaReceitas = pgTable("receitas", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  descricao: text("descricao").notNull(),
  valor: numeric("valor").notNull(),
  categoria: text("categoria").notNull(),
  data: text("data").notNull(),
  criadoEm: timestamp("criado_em", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
});