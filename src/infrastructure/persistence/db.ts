import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';

const client = createClient({
  url: process.env.DATABASE_URL ?? 'file:database.sqlite',
});

export const db = drizzle(client, { schema });

async function ensureDatabaseReady() {
  await client.execute(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      senha TEXT NOT NULL
    );
  `);

  await client.execute(`
    CREATE TABLE IF NOT EXISTS transacoes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      descricao TEXT NOT NULL,
      valor REAL NOT NULL,
      tipo TEXT NOT NULL CHECK (tipo IN ('RECEITA', 'DESPESA')),
      categoria TEXT NOT NULL,
      data TEXT NOT NULL,
      usuario_id INTEGER NOT NULL REFERENCES usuarios(id)
    );
  `);

  await client.execute(`
    CREATE TABLE IF NOT EXISTS metas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      objetivo TEXT NOT NULL,
      valor_alvo REAL NOT NULL,
      valor_atual REAL NOT NULL DEFAULT 0,
      prazo TEXT NOT NULL,
      usuario_id INTEGER NOT NULL REFERENCES usuarios(id)
    );
  `);

  await client.execute(`
    INSERT OR IGNORE INTO usuarios (id, nome, email, senha)
    VALUES (1, 'Usuário Pro', 'usuario@teste.com', '123456');
  `);

  const transacoesCount = await client.execute(`
    SELECT COUNT(*) AS total FROM transacoes WHERE usuario_id = 1;
  `);

  const count = Number(transacoesCount.rows?.[0]?.total ?? 0);

  if (count === 0) {
    await client.execute(`
      INSERT INTO transacoes (descricao, valor, tipo, categoria, data, usuario_id)
      VALUES
        ('Salário Mensal', 5000, 'RECEITA', 'Renda', '2026-07-01', 1),
        ('Supermercado', 450, 'DESPESA', 'Alimentação', '2026-07-05', 1),
        ('Conta de Luz', 180, 'DESPESA', 'Moradia', '2026-07-10', 1);
    `);
  }
}

void ensureDatabaseReady();
