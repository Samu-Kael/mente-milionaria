'use server';

import { criarReceitaHandler } from "@/modules/receitas/handlers/criar-receita-handler";
import { revalidatePath } from "next/cache";

export async function acaoCriarReceita(formData: FormData): Promise<void> {
  // 1. Captura os valores digitados nos inputs do formulário HTML
  const descricao = formData.get("descricao") as string;
  const valor = Number(formData.get("valor"));
  const dataString = formData.get("data") as string;
  const categoriaId = Number(formData.get("categoriaId"));

  try {
    // 2. Dispara o fluxo do seu backend
    await criarReceitaHandler({
      descricao,
      valor,
      data: new Date(dataString),
      categoriaId,
    });

    // 3. Avisa o Next.js para atualizar os componentes da tela imediatamente
    revalidatePath("/");
  } catch (error) {
    // Apenas logamos o erro no console do servidor
    console.error("Erro ao salvar receita:", error);
    
    // Deixando sem nenhum 'return' aqui, a função assume o tipo Promise<void>
    // Isso elimina instantaneamente o erro vermelho do seu page.tsx!
  }
}