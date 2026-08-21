import {
  boolean,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const tabelaCategorias = pgTable("categorias", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  nome: text("nome").notNull(),
  cor: text("cor").notNull(),
  isPadrao: boolean("is_padrao").default(false).notNull(),
  criadoEm: timestamp("criado_em", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
});