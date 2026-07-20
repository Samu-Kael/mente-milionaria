import React from "react";
import { 
  mocksCardsDashboard, 
  mocksUltimasTransacoes 
} from "@/shared/data/mocks/financeiro.mock";

export default function DashboardPage() {
  // Função auxiliar para formatar os centavos armazenados em formato Real (R$)
  const formatarMoeda = (valorEmCentavos: number): string => {
    return (valorEmCentavos / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className="space-y-8">
      {/* Cabeçalho de Boas-vindas */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-gray-400">Aqui está o resumo da sua saúde financeira.</p>
      </div>

      {/* Grid de Cartões de Resumo/Indicadores */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {mocksCardsDashboard.map((card) => {
          const isPositivo = card.tipo === "positivo";
          const isNegativo = card.tipo === "negativo";

          return (
            <div 
              key={card.titulo} 
              className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm"
            >
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <span className="text-sm font-medium text-gray-400">{card.titulo}</span>
              </div>
              <div className="flex items-baseline space-x-2">
                <span className={`text-2xl font-bold ${isNegativo ? "text-red-400" : isPositivo ? "text-emerald-400" : "text-white"}`}>
                  {formatarMoeda(card.valor)}
                </span>
                
                {card.porcentagemAlteracao && (
                  <span className={`text-xs font-semibold ${card.porcentagemAlteracao > 0 ? "text-emerald-500" : "text-red-500"}`}>
                    {card.porcentagemAlteracao > 0 ? "+" : ""}{card.porcentagemAlteracao}%
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Seção das Últimas Transações */}
      <div className="rounded-xl border border-gray-800 bg-gray-900/30 p-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Transações Recentes</h2>
          <p className="text-sm text-gray-400">Últimas movimentações registradas no sistema.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="border-b border-gray-800 bg-gray-900/50 text-xs uppercase text-gray-400">
              <tr>
                <th className="px-4 py-3">Descrição</th>
                <th className="px-4 py-3">Categoria</th>
                <th className="px-4 py-3">Data</th>
                <th className="px-4 py-3 text-right">Valor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {mocksUltimasTransacoes.map((transacao) => {
                const isReceita = transacao.tipo === "receita";

                return (
                  <tr key={transacao.id} className="hover:bg-gray-900/20 transition-colors">
                    <td className="px-4 py-3 font-medium text-white">{transacao.descricao}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center rounded-md bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-300 border border-gray-700">
                        {transacao.categoria}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-400">
                      {new Date(transacao.data).toLocaleDateString("pt-BR")}
                    </td>
                    <td className={`px-4 py-3 text-right font-semibold ${isReceita ? "text-emerald-400" : "text-red-400"}`}>
                      {isReceita ? "+ " : "- "}
                      {formatarMoeda(transacao.valor)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}