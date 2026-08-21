import {
  numeric,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const tabelaMetas = pgTable("metas", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  titulo: text("titulo").notNull(),
  valorAlvo: numeric("valor_alvo").notNull(),
  prazo: text("prazo").notNull(),
  acumulado: numeric("acumulado").default("0").notNull(),
  criadoEm: timestamp("criado_em", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
});