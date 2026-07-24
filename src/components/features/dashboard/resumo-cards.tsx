import type { ResumoFinanceiro } from '@/shared/types/domain/financeiro';
import { formatarMoeda } from '@/shared/utils/formatters';

interface ResumoCardsProps {
  resumo?: ResumoFinanceiro;
}

export function ResumoCards({ resumo }: ResumoCardsProps) {
  const saldoTotal = resumo?.saldoTotal ?? 0;
  const totalEntradas = resumo?.totalEntradas ?? 0;
  const totalSaidas = resumo?.totalSaidas ?? 0;

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-sm space-y-2">
        <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Saldo na Conta</span>
        <div
          className={`text-3xl font-bold tracking-tight ${
            saldoTotal >= 0 ? 'text-zinc-100' : 'text-rose-400'
          }`}
        >
          {formatarMoeda(saldoTotal)}
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-sm space-y-2">
        <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Entradas</span>
        <div className="text-3xl font-bold tracking-tight text-emerald-400">
          {formatarMoeda(totalEntradas)}
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-sm space-y-2">
        <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Saídas</span>
        <div className="text-3xl font-bold tracking-tight text-rose-400">
          {formatarMoeda(totalSaidas)}
        </div>
      </div>
    </section>
  );
}

export default ResumoCards;