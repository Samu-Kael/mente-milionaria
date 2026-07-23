'use client';

import { ResumoCards } from '@/components/features/dashboard/resumo-cards';
import { TransacoesRecentes } from '@/components/features/dashboard/transacoes-recentes';
import { RitmoGastos } from '@/components/features/dashboard/ritmo-gastos';
import { useRouter } from 'next/navigation';

const listaTransacoes = [
  { id: '1', descricao: 'Salário', valor: 5000, tipo: 'RECEITA' as const, categoria: 'Renda', data: '2026-07-01' },
  { id: '2', descricao: 'Supermercado', valor: 450, tipo: 'DESPESA' as const, categoria: 'Alimentação', data: '2026-07-05' },
  { id: '3', descricao: 'Conta de Luz', valor: 180, tipo: 'DESPESA' as const, categoria: 'Moradia', data: '2026-07-10' },
];

export default function DashboardPage() {
  const router = useRouter();

  const totalEntradas = listaTransacoes
    .filter((t) => t.tipo === 'RECEITA')
    .reduce((acc, curr) => acc + curr.valor, 0);

  const totalSaidas = listaTransacoes
    .filter((t) => t.tipo === 'DESPESA')
    .reduce((acc, curr) => acc + curr.valor, 0);

  const resumo = {
    saldoTotal: totalEntradas - totalSaidas,
    totalEntradas,
    totalSaidas,
  };

  return (
    <main className="p-6 md:p-10 space-y-8 h-full overflow-y-auto">
      <header className="flex items-center justify-between border-b border-zinc-800 pb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-100 flex items-center gap-2">
            Organizador de Finanças
          </h1>
          <p className="text-xs text-zinc-400">
            Acompanhe o saldo na conta, entradas, saídas e movimentações.
          </p>
        </div>

        <button
          onClick={() => router.push('/login')}
          type="button"
          className="text-xs px-4 py-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 rounded-xl text-zinc-300 transition-colors"
        >
          Sair
        </button>
      </header>

      <ResumoCards resumo={resumo} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <TransacoesRecentes transacoes={listaTransacoes} />
        </div>
        <div>
          <RitmoGastos />
        </div>
      </div>
    </main>
  );
}