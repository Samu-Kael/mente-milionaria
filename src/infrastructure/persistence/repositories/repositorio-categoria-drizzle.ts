import { db } from "@/infrastructure/database/client";
import { categorias } from "@/infrastructure/database/schemas/schemas";
import { ICategoriaRepository } from "@/modules/categorias/repositories/repositorio-categoria";
import { eq, and } from "drizzle-orm"; // Funçao importante para realizar filtros condicionais no Drizzle

export async function garantirCategoriasIniciais(): Promise<void> {
  try {
    const lista = await db.select().from(categorias);
    
    if (lista.length === 0) {
      await db.insert(categorias).values([
        { id: 1, nome: "Salário", tipo: "receita" },
        { id: 2, nome: "Investimentos", tipo: "receita" },
        { id: 3, nome: "Freelance/Extras", tipo: "receita" },
        
        { id: 4, nome: "Alimentação", tipo: "despesa" },
        { id: 5, nome: "Moradia", tipo: "despesa" },
        { id: 6, nome: "Lazer/Transporte", tipo: "despesa" }
      ]);
      console.log("Categorias iniciais populadas com sucesso!");
    }
  } catch (error) {
    console.error("Falha ao inicializar categorias base:", error);
  }
}


export const repositorioCategoriaDrizzle: ICategoriaRepository = {
  // Método usado pelo Caso de Uso para criar uma nova categoria
  async criar(dados) {
    await db.insert(categorias).values(dados);
  },

 // Método usado pelo Caso de Uso para verificar se já existe uma categoria com o mesmo nome e tipo
  async buscarPorNomeETipo(nome, tipo) {
    const resultado = await db
      .select()
      .from(categorias)
      .where(
        and(
          eq(categorias.nome, nome),
          eq(categorias.tipo, tipo)
        )
      );
    
// Retorna a primeira categoria encontrada ou null se não houver nenhuma
      return resultado[0] || null;
  },
// Método usado pelo Caso de Uso para listar todas as categorias
  async listarTodas() {
    return await db.select().from(categorias);
  }
};