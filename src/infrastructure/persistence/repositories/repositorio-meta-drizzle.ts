import { db } from "@/infrastructure/database/client";
import { metas } from "@/infrastructure/database/schemas/schemas";
import { IMetaRepository } from "@/modules/metas/repositories/repositorio-meta";

export const repositorioMetaDrizzle: IMetaRepository = {
  async criar(dados) {
    await db.insert(metas).values({
      objetivo: dados.objetivo,
      valorAlvo: dados.valorAlvo, 
      valorAtual: dados.valorAtual,
      prazo: dados.prazo,
    });
  },

  async listarTodas() {
    return await db.select().from(metas);
  }
};