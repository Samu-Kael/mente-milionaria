import React from "react";
import { Wallet } from "lucide-react";

export function ContasCorrentes() {
  return (
    <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-2xl space-y-2">
      <div className="flex justify-between items-center text-slate-400">
        <span className="text-[11px] font-semibold uppercase tracking-wider">
          Contas Correntes
        </span>
        <Wallet className="w-4 h-4 text-slate-500" />
      </div>

      <div className="flex items-baseline gap-2">
        <h3 className="text-2xl font-bold text-white">R$ 718,00</h3>
        <span className="text-xs text-slate-500">saldo total</span>
      </div>
    </div>
  );
}