import { db } from "@/infrastructure/database/client";
import { receitas, despesas, metas, categorias } from "@/infrastructure/database/schemas/schemas";
import { ResumoCards } from "@/components/features/dashboard/resumo-cards";
import { FormReceita } from "@/components/features/receitas/form-receita";
import { FormDespesa } from "@/components/features/despesas/form-despesa";

export const revalidate = 0;

export default async function Page() {
  // 1. Busca todos os dados necessários no banco de dados
  const dadosReceitas = await db.select().from(receitas);
  const dadosDespesas = await db.select().from(despesas);
  const dadosMetas = await db.select().from(metas);
  const dadosCategorias = await db.select().from(categorias);

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4">
      {/* Painel de Indicadores Financeiros */}
      <ResumoCards 
        receitas={dadosReceitas} 
        despesas={dadosDespesas} 
        metas={dadosMetas} 
      />

      {/* Formulários de Cadastro */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Passa a lista de categorias obtida do banco para cada formulário */}
        <FormReceita categorias={dadosCategorias} />
        <FormDespesa categorias={dadosCategorias} />
      </div>
    </div>
  );
}