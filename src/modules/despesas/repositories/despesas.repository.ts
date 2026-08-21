import { eq } from "drizzle-orm";
import { db } from "@/infrastructure/database/db";
import { tabelaDespesas } from "@/infrastructure/schemas/schema-despesas";
import { formatarDataCriacao } from "@/shared/utils/formatar-data-criacao";
import type { CreateDespesaDTO } from "../dto/create-despesa.dto";
import type { Despesa } from "@/shared/types/domain/despesa";

type DespesaRow = typeof tabelaDespesas.$inferSelect;

function mapearDespesa(row: DespesaRow): Despesa {
  return {
    id: row.id,
    descricao: row.descricao,
    valor: Number(row.valor),
    categoria: row.categoria,
    data: row.data,
    criadoEm: formatarDataCriacao(row.criadoEm),
  };
}

export const DespesasRepository = {
  async buscarTodas(): Promise<Despesa[]> {
    const rows = await db.select().from(tabelaDespesas);
    return rows.map(mapearDespesa);
  },

  async buscarPorId(id: string): Promise<Despesa | null> {
    const [despesa] = await db
      .select()
      .from(tabelaDespesas)
      .where(eq(tabelaDespesas.id, id));

    return despesa ? mapearDespesa(despesa) : null;
  },

  async salvar(dados: CreateDespesaDTO): Promise<Despesa> {
    const [criada] = await db
      .insert(tabelaDespesas)
      .values({
        descricao: dados.descricao,
        valor: String(dados.valor),
        categoria: dados.categoria,
        data: dados.data,
      })
      .returning();

    if (!criada) {
      throw new Error("Não foi possível cadastrar a despesa.");
    }

    return mapearDespesa(criada);
  },

  async deletar(id: string): Promise<void> {
    await db
      .delete(tabelaDespesas)
      .where(eq(tabelaDespesas.id, id));
  },
};