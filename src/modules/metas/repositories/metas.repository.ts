import { eq, sql } from "drizzle-orm";
import { db } from "@/infrastructure/database/db";
import { tabelaMetas } from "@/infrastructure/schemas/schema-metas";
import { formatarDataCriacao } from "@/shared/utils/formatar-data-criacao";
import type { CreateMetaDTO } from "../dto/create-meta.dto";
import type { Meta } from "@/shared/types/domain/meta";

type MetaRow = typeof tabelaMetas.$inferSelect;

function mapearMeta(row: MetaRow): Meta {
  return {
    id: row.id,
    titulo: row.titulo,
    valorAlvo: Number(row.valorAlvo),
    prazo: row.prazo,
    acumulado: Number(row.acumulado),
    criadoEm: formatarDataCriacao(row.criadoEm),
  };
}

export const MetasRepository = {
  async buscarTodas(): Promise<Meta[]> {
    const rows = await db.select().from(tabelaMetas);
    return rows.map(mapearMeta);
  },

  async buscarPorId(id: string): Promise<Meta | null> {
    const [meta] = await db
      .select()
      .from(tabelaMetas)
      .where(eq(tabelaMetas.id, id));

    return meta ? mapearMeta(meta) : null;
  },

  async salvar(dados: CreateMetaDTO): Promise<Meta> {
    const [criada] = await db
      .insert(tabelaMetas)
      .values({
        titulo: dados.titulo,
        valorAlvo: String(dados.valorAlvo),
        prazo: dados.prazo,
        acumulado: "0",
      })
      .returning();

    if (!criada) {
      throw new Error("Não foi possível cadastrar a meta.");
    }

    return mapearMeta(criada);
  },

  async deletar(id: string): Promise<void> {
    await db
      .delete(tabelaMetas)
      .where(eq(tabelaMetas.id, id));
  },

  async adicionarSaldo(id: string, valor: number): Promise<Meta> {
    const [atualizada] = await db
      .update(tabelaMetas)
      .set({
        acumulado: sql`${tabelaMetas.acumulado} + ${valor}`
      })
      .where(eq(tabelaMetas.id, id))
      .returning();

    if (!atualizada) {
      throw new Error("Não foi possível atualizar o saldo da meta.");
    }

    return mapearMeta(atualizada);
  }
};