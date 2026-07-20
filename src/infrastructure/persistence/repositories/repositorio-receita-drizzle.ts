import { db } from "@/infrastructure/database/client";
import { receitas } from "@/infrastructure/database/schemas/schemas";
import { IReceitaRepository } from "@/modules/receitas/repositories/repositorio-receita";

export const repositorioReceitaDrizzle: IReceitaRepository = {
  async criar(dados) {
    await db.insert(receitas).values({
      descricao: dados.descricao,
      valor: dados.valor,
      data: dados.data,
      categoriaId: dados.categoriaId,
    });
  },

  async listarTodas() {
    return await db.select().from(receitas);
  }
};