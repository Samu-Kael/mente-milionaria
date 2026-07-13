import { db } from "@/infrastructure/database/client"; // Ajustado para o ficheiro client.ts que aparece na sua árvore
import { receitas } from "@/infrastructure/database/schemas/schemas"; // Ajustado para a sua pasta schemas/schemas.ts

import { CriarReceitaDTO } from "../dto/criar-receita.dto";
import { IReceitaRepository } from "../usecases/criar-receitas.usecases";

export class ReceitaRepositoryDrizzle implements IReceitaRepository {
  async salvar(dados: CriarReceitaDTO): Promise<void> {
    await db.insert(receitas).values({
      descricao: dados.descricao,
      valor: dados.valor,
      data: dados.data,
      categoriaId: dados.categoriaId
    });
  }
}