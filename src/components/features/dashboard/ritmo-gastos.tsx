"use client";

import { ExternalLink } from "lucide-react";

export function RitmoGastos() {
  const categorias = [
    { nome: "Viagens", valor: 1000.0, porcentagem: 70 },
    { nome: "Alimentação", valor: 420.5, porcentagem: 40 },
    { nome: "Transporte", valor: 150.0, porcentagem: 20 },
    { nome: "Lazer", valor: 72.3, porcentagem: 10 },
  ];

  const formatar = (val: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(val);

  return (
    <div className="bg-[#0b0e14] border border-[#161b26] rounded-xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
          Principais Categorias
        </span>
        <button className="text-xs text-[#10b981] hover:underline flex items-center gap-1 font-medium">
          ver mais <ExternalLink className="w-3 h-3" />
        </button>
      </div>

      <div className="space-y-5">
        {categorias.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-white">{item.nome}</span>
              <span className="font-bold text-white">{formatar(item.valor)}</span>
            </div>
            <div className="w-full bg-[#161b26] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#10b981] h-full rounded-full transition-all duration-500"
                style={{ width: `${item.porcentagem}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}