import Link from 'next/link';
import { ResumoCards } from '@/components/dashboard/resumo-cards';
import { TransacoesRecentes } from '@/components/dashboard/transacoes-recentes';
import { PrincipaisCategorias } from '@/components/dashboard/principais-categorias';
import { listarDespesasHandler } from '@/modules/despesas/handlers/listar-despesa.handler';
import { listarReceitasHandler } from '@/modules/receitas/handlers/listar-receitas.handler';
import { listarMetasHandler } from '@/modules/metas/handlers/listar-metas.handler';

export const revalidate = 0; 

export default async function DashboardPage() {
  const despesas = await listarDespesasHandler();
  const receitas = await listarReceitasHandler();
  const metas = await listarMetasHandler();

  const totalReceitas = receitas.reduce((acc: number, item: any) => acc + Number(item.valor), 0);
  const totalDespesas = despesas.reduce((acc: number, item: any) => acc + Number(item.valor), 0);
  const totalMetas = metas.length;

  const transacoesConsolidadas = [
    ...receitas.map((r: any) => ({ ...r, tipo: 'receita' as const })),
    ...despesas.map((d: any) => ({ ...d, tipo: 'despesa' as const })),
  ].sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());

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
    .sort((a, b) => b.total - a.total); 

  return (
    <main className="max-w-7xl mx-auto space-y-6">
      
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

      <ResumoCards 
        totalReceitas={totalReceitas} 
        totalDespesas={totalDespesas} 
        totalMetas={totalMetas} 
      />

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