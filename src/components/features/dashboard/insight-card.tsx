"use client";

import { TrendingDown, Clapperboard } from "lucide-react";

interface InsightCardProps {
  maiorCategoria?: string;
  valorMaiorCategoria?: number;
  gastoTotalMes?: number;
  variacaoPorcentagem?: number;
}

export function InsightCard({
  maiorCategoria = "Viagens",
  valorMaiorCategoria = 1000,
  gastoTotalMes = 1643,
  variacaoPorcentagem = 17660,
}: InsightCardProps) {
  const formatar = (val: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <div className="bg-[#0b0e14] border border-[#161b26] rounded-2xl p-6 space-y-6">
      {/* Mensagem Principal */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-emerald-400 tracking-tight">
          Seu dinheiro quer te contar uns segredos...
        </h2>
        <p className="text-zinc-300 text-sm md:text-base">
          Notei que sua categoria <span className="font-semibold text-white">'{maiorCategoria}'</span> disparou com{" "}
          <span className="font-semibold text-white">{formatar(valorMaiorCategoria)}</span>! Vamos ficar de olho?
        </p>
      </div>

      {/* Grid de Destaques */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#050506] border border-[#161b26] rounded-xl p-4">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-1">
            Gasto em Julho
          </span>
          <p className="text-xl font-bold text-white">{formatar(gastoTotalMes)}</p>
        </div>

        <div className="bg-[#050506] border border-[#161b26] rounded-xl p-4">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-1">
            Vs. Mês Anterior
          </span>
          <div className="flex items-center gap-1.5 text-rose-500 font-bold text-xl">
            <TrendingDown className="w-4 h-4" />
            <span>{variacaoPorcentagem}%</span>
          </div>
        </div>

        <div className="bg-[#050506] border border-[#161b26] rounded-xl p-4">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-1">
            Maior Gasto
          </span>
          <div className="flex items-center gap-2 mt-0.5">
            <div className="p-1.5 bg-indigo-500/10 rounded-lg text-indigo-400">
              <Clapperboard className="w-4 h-4" />
            </div>
            <span className="text-xl font-bold text-white">{maiorCategoria}</span>
          </div>
        </div>
      </div>
    </div>
  );
}