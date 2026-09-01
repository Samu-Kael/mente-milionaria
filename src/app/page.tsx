import Link from 'next/link';
import { ResumoCards } from '@/components/dashboard/resumo-cards';
import { TransacoesRecentes } from '@/components/dashboard/transacoes-recentes';
import { PrincipaisCategorias } from '@/components/dashboard/principais-categorias';
import { DespesasHandler } from '@/modules/despesas/handlers/criar-despesa.handler';
import { ReceitasHandler } from '@/modules/receitas/handlers/criar-receita.handler';
import { MetasHandler } from '@/modules/metas/handlers/criar-meta.handler';

// Garante que o Next.js não guarde a página em cache, mostrando sempre os dados mais recentes
export const revalidate = 0; 

export default async function DashboardPage() {
  // 1. Busca os dados reais do banco através dos Handlers
  const despesas = await DespesasHandler.handleBuscarTodas();
  const receitas = await ReceitasHandler.handleBuscarTodas();
  const metas = await MetasHandler.handleBuscarTodas();

  // 2. Calcula os totais para os Cards Superiores
  const totalReceitas = receitas.reduce((acc: number, item: any) => acc + Number(item.valor), 0);
  const totalDespesas = despesas.reduce((acc: number, item: any) => acc + Number(item.valor), 0);
  const totalMetas = metas.length;

  // 3. Junta Receitas e Despesas em uma única lista e ordena das mais recentes para as mais antigas
  const transacoesConsolidadas = [
    ...receitas.map((r: any) => ({ ...r, tipo: 'receita' as const })),
    ...despesas.map((d: any) => ({ ...d, tipo: 'despesa' as const })),
  ].sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());

  // 4. Agrupa as despesas por categoria e calcula a porcentagem exata de cada uma
  const categoriasMap = new Map<string, number>();
  
  despesas.forEach((d: any) => {
    const valorAtual = categoriasMap.get(d.categoria) || 0;
    categoriasMap.set(d.categoria, valorAtual + Number(d.valor));
  });

  const categoriasCalculadas = Array.from(categoriasMap.entries())
    .map(([nome, total]) => ({
      nome,
      total,
      porcentagem: totalDespesas > 0 ? Math.round((total / totalDespesas) * 100) : 0,
    }))
    .sort((a, b) => b.total - a.total); // Ordena quem gastou mais no topo

  return (
    <main className="max-w-7xl mx-auto space-y-6">
      
      {/* Cabeçalho com Botões de Ação Rápida */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-zinc-400 text-sm">Visão geral do seu patrimônio e fluxo financeiro.</p>
        </div>
        
        <div className="flex gap-3">
          <Link 
            href="/receitas" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-bold transition-colors"
          >
            + Receita
          </Link>
          <Link 
            href="/despesas" 
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-bold transition-colors"
          >
            - Despesa
          </Link>
          <Link 
            href="/metas" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-bold transition-colors"
          >
            + Meta
          </Link>
        </div>
      </div>

      {/* Cards de Resumo */}
      <ResumoCards 
        totalReceitas={totalReceitas} 
        totalDespesas={totalDespesas} 
        totalMetas={totalMetas} 
      />

      {/* Grid Principal (Transações e Gráfico de Categorias) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TransacoesRecentes transacoes={transacoesConsolidadas} />
        </div>
        <div>
          <PrincipaisCategorias categorias={categoriasCalculadas} />
        </div>
      </div>

    </main>
  );
}