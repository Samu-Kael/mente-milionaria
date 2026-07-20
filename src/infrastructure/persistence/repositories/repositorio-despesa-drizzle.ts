import { db } from "@/infrastructure/database/client";
import { despesas } from "@/infrastructure/database/schemas/schemas";
import { IDespesaRepository } from "@/modules/despesas/repositories/repositorio-despesa";

export const repositorioDespesaDrizzle: IDespesaRepository = {
  async criar(dados) {
    await db.insert(despesas).values({
      descricao: dados.descricao,
      valor: dados.valor,
      data: dados.data,
      categoriaId: dados.categoriaId,
    });
  },

  async listarTodas() {
    return await db.select().from(despesas);
  }
};