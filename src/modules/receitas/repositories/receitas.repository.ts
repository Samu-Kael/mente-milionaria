import { eq } from "drizzle-orm";
import { db } from "@/infrastructure/database/db";
import { tabelaReceitas } from "@/infrastructure/schemas/schema-receitas";
import { formatarDataCriacao } from "@/shared/utils/formatar-data-criacao";
import type { CreateReceitaDTO } from "../dto/create-receita.dto";
import type { Receita } from "@/shared/types/domain/receita";

type ReceitaRow = typeof tabelaReceitas.$inferSelect;

function mapearReceita(row: ReceitaRow): Receita {
  return {
    id: row.id,
    descricao: row.descricao,
    valor: Number(row.valor),
    categoria: row.categoria,
    data: row.data,
    criadoEm: formatarDataCriacao(row.criadoEm),
  };
}

export const ReceitasRepository = {
  async buscarTodas(): Promise<Receita[]> {
    const rows = await db.select().from(tabelaReceitas);
    return rows.map(mapearReceita);
  },

  async buscarPorId(id: string): Promise<Receita | null> {
    const [receita] = await db
      .select()
      .from(tabelaReceitas)
      .where(eq(tabelaReceitas.id, id));

    return receita ? mapearReceita(receita) : null;
  },

  async salvar(dados: CreateReceitaDTO): Promise<Receita> {
    const [criada] = await db
      .insert(tabelaReceitas)
      .values({
        descricao: dados.descricao,
        valor: String(dados.valor),
        categoria: dados.categoria,
        data: dados.data,
      })
      .returning();

    if (!criada) {
      throw new Error("Não foi possível cadastrar a receita.");
    }

    return mapearReceita(criada);
  },

  async deletar(id: string): Promise<void> {
    await db
      .delete(tabelaReceitas)
      .where(eq(tabelaReceitas.id, id));
  },
};