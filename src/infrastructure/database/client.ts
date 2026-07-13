
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schemas from "./schemas/schemas";

// Cria ou abre a conexão com o arquivo local usando o driver universal (sem travas do Windows)
const client = createClient({
  url: "file:database.sqlite",
});

// Inicializa o Drizzle ORM exatamente como antes
export const db = drizzle(client, { schema: schemas });