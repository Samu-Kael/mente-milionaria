import React from "react";

export function RitmoGastos() {
  return (
    <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl flex flex-col justify-between space-y-4">
      {/* Cabeçalho do Card */}
      <div className="flex justify-between items-start">
        <div>
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            Ritmo de Gastos
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <h3 className="text-2xl font-bold text-white">R$ 1.633,55</h3>
            <span className="text-xs text-slate-400">acima</span>
          </div>
          <p className="text-xs text-red-400 mt-0.5">
            ↗ +17660.0% <span className="text-slate-500">vs R$ 9,25 mês anterior</span>
          </p>
        </div>
        <button className="text-xs text-emerald-400 hover:underline">
          ver todas ↗
        </button>
      </div>

      {/* Gráfico SVG Linha */}
      <div className="relative h-32 w-full flex items-end pt-4 border-b border-slate-800/60">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100">
          <path
            d="M 0 90 Q 50 85 80 80 T 150 30 T 220 20 L 280 20"
            fill="none"
            stroke="#f43f5e"
            strokeWidth="2.5"
          />
          <circle cx="280" cy="20" r="4" fill="#f43f5e" />
        </svg>
      </div>

      {/* Datas/Escala */}
      <div className="flex justify-between text-[10px] text-slate-500">
        <span>1</span>
        <span>15</span>
        <span>25</span>
        <span>31</span>
      </div>

      {/* Legenda */}
      <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-0.5 bg-red-500 rounded" />
          <span>Este mês</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-0.5 bg-slate-600 rounded" />
          <span>Mês passado</span>
        </div>
      </div>
    </div>
  );
}