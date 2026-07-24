import { ResumoCards } from '@/components/features/dashboard/resumo-cards';
import { TransacoesRecentes } from '@/components/features/dashboard/transacoes-recentes';
import { RitmoGastos } from '@/components/features/dashboard/ritmo-gastos';
import { ModalNovaTransacao } from '@/components/features/dashboard/modal-nova-transacao';
import { listarTransacoesAction, obterResumoAction } from '@/app/actions/transacoes';

export default async function DashboardPage() {
  const [transacoes, resumo] = await Promise.all([
    listarTransacoesAction(),
    obterResumoAction(),
  ]);

  return (
    <main className="p-6 md:p-10 space-y-8 h-full overflow-y-auto">
      <header className="flex flex-col gap-4 border-b border-zinc-800 pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-100 flex items-center gap-2">
            Organizador de Finanças
          </h1>
          <p className="text-xs text-zinc-400">
            Acompanhe o saldo na conta, entradas, saídas e movimentações.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <ModalNovaTransacao />
          <a
            href="/login"
            className="text-xs px-4 py-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 rounded-xl text-zinc-300 transition-colors"
          >
            Sair
          </a>
        </div>
      </header>

      <ResumoCards resumo={resumo} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <TransacoesRecentes transacoes={transacoes} />
        </div>
        <div>
          <RitmoGastos totalEntradas={resumo.totalEntradas} totalSaidas={resumo.totalSaidas} />
        </div>
      </div>
    </main>
  );
}
