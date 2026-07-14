import { db } from "@/infrastructure/database/client";
import { receitas } from "@/infrastructure/database/schemas/schemas";
import { CriarReceitaDTO } from "../dto/criar-receita.dto";
import { IReceitaRepository } from "../usecases/criar-receitas.usecases";

export class ReceitaRepositoryDrizzle implements IReceitaRepository {
  async salvar(dados: CriarReceitaDTO): Promise<void> {
    await db.insert(receitas).values({
      descricao: dados.descricao,
      valor: dados.valor, // Valor inteiro em centavos vindo da Action
      data: dados.data,   // Objeto Date aceito pelo mode: 'timestamp' do Drizzle
      categoriaId: dados.categoriaId,
    });
  }
}