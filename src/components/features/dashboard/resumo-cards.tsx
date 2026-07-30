'use client';

interface ResumoCardsProps {
  totalReceitas: number;
  totalDespesas: number;
  totalMetas: number;
}

export function ResumoCards({ totalReceitas, totalDespesas, totalMetas }: ResumoCardsProps) {
  const saldoAtual = totalReceitas - totalDespesas;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Card Saldo Total */}
      <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-2">
        <p className="text-xs font-medium text-zinc-400">Saldo Geral</p>
        <p className={`text-2xl font-bold ${saldoAtual >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
          R$ {saldoAtual.toFixed(2)}
        </p>
      </div>

      {/* Card Receitas */}
      <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-2">
        <p className="text-xs font-medium text-zinc-400">Total de Receitas</p>
        <p className="text-2xl font-bold text-emerald-500">
          + R$ {totalReceitas.toFixed(2)}
        </p>
      </div>

      {/* Card Despesas */}
      <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-2">
        <p className="text-xs font-medium text-zinc-400">Total de Despesas</p>
        <p className="text-2xl font-bold text-red-500">
          - R$ {totalDespesas.toFixed(2)}
        </p>
      </div>

      {/* Card Metas */}
      <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-2">
        <p className="text-xs font-medium text-zinc-400">Metas Ativas</p>
        <p className="text-2xl font-bold text-blue-400">
          {totalMetas} {totalMetas === 1 ? 'meta' : 'metas'}
        </p>
      </div>
    </div>
  );
}