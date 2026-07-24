interface RitmoGastosProps {
  totalEntradas?: number;
  totalSaidas?: number;
}

export function RitmoGastos({ totalEntradas = 0, totalSaidas = 0 }: RitmoGastosProps) {
  const percentualGasto = totalEntradas === 0 ? 0 : Math.min(100, Math.round((totalSaidas / totalEntradas) * 100));

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-sm space-y-2">
      <h2 className="text-lg font-bold text-zinc-100">Ritmo de Gastos</h2>
      <p className="text-xs text-zinc-400">
        {totalEntradas === 0 || totalSaidas === 0
          ? 'Ainda não há movimentações suficientes para calcular o ritmo de gastos.'
          : `Você destinou ${percentualGasto}% da sua renda total para despesas.`}
      </p>
      <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden mt-4">
        <div
          className={`h-full ${percentualGasto > 70 ? 'bg-rose-500' : 'bg-emerald-500'}`}
          style={{ width: `${percentualGasto}%` }}
        />
      </div>
    </div>
  );
}

export default RitmoGastos;