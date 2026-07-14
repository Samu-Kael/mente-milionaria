import { db } from "../../database/client";
import { categorias } from "../../database/schemas/schemas";

// Função simples e direta para garantir que o banco nunca nasça sem as categorias base
export async function garantirCategoriasIniciais(): Promise<void> {
  try {
    // 1. Verifica se a tabela já possui registros
    const lista = await db.select().from(categorias);
    
    // 2. Se estiver vazia, insere o bloco inicial completo
    if (lista.length === 0) {
      await db.insert(categorias).values([
        // Opções estáveis para Receitas
        { id: 1, nome: "Salário", tipo: "receita" },
        { id: 2, nome: "Investimentos", tipo: "receita" },
        { id: 3, nome: "Freelance/Extras", tipo: "receita" },
        
        // Opções estáveis para Despesas
        { id: 4, nome: "Alimentação", tipo: "despesa" },
        { id: 5, nome: "Moradia", tipo: "despesa" },
        { id: 6, nome: "Lazer/Transporte", tipo: "despesa" }
      ]);
      console.log("✅ Categorias iniciais populadas com sucesso!");
    }
  } catch (error) {
    console.error("❌ Falha ao inicializar categorias base:", error);
  }
}