'use client';

export function RitmoGastos() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-sm space-y-2">
      <h2 className="text-lg font-bold text-zinc-100">Ritmo de Gastos</h2>
      <p className="text-xs text-zinc-400">Você gastou 12% a menos que no mês anterior.</p>
      <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden mt-4">
        <div className="bg-emerald-500 h-full w-[45%]" />
      </div>
    </div>
  );
}

export default RitmoGastos;