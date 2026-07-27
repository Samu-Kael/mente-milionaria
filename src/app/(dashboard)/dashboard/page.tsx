import { buscarTransacoes, buscarResumo } from '@/app/actions/transacoes';
import { ResumoCards } from '@/components/features/dashboard/resumo-cards';
import { TransacoesRecentes } from '@/components/features/dashboard/transacoes-recentes';
import { RitmoGastos } from '@/components/features/dashboard/ritmo-gastos';
import { ModalNovaTransacao } from '@/components/features/dashboard/modal-nova-transacao';

export default async function DashboardPage() {
  const transacoes = await buscarTransacoes();
  const resumo = await buscarResumo();

  return (
    <main className="p-6 md:p-10 space-y-8 h-full overflow-y-auto">
      <header className="flex items-center justify-between border-b border-zinc-800 pb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-100">
            🧠 Painel Financeiro
          </h1>
          <p className="text-xs text-zinc-400">
            Acompanhe em tempo real seus saldos, receitas e saídas.
          </p>
        </div>

        <ModalNovaTransacao />
      </header>

      <ResumoCards resumo={resumo} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <TransacoesRecentes transacoes={transacoes} />
        </div>
        <div>
          <RitmoGastos />
        </div>
      </div>
    </main>
  );
}