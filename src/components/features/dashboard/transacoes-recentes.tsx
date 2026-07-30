'use client';

export interface TransacaoItem {
  id: string;
  descricao: string;
  valor: number;
  data: string;
  categoria: string;
  tipo: 'receita' | 'despesa';
}

interface TransacoesRecentesProps {
  transacoes: TransacaoItem[];
}

export function TransacoesRecentes({ transacoes }: TransacoesRecentesProps) {
  if (!transacoes || transacoes.length === 0) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl text-center">
        <p className="text-zinc-500 text-sm">Nenhuma transação registrada até o momento.</p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
      <h3 className="text-lg font-bold text-white">Transações Recentes</h3>

      <div className="space-y-3">
        {transacoes.slice(0, 5).map((item) => (
          <div 
            key={item.id} 
            className="flex justify-between items-center p-3 bg-zinc-800/40 hover:bg-zinc-800/70 rounded-lg transition-colors"
          >
            <div className="space-y-1">
              <p className="font-semibold text-zinc-200 text-sm">{item.descricao}</p>
              <div className="flex gap-2 text-xs text-zinc-400">
                <span className="bg-zinc-700/50 px-2 py-0.5 rounded text-zinc-300">
                  {item.categoria}
                </span>
                <span>{new Date(item.data).toLocaleDateString('pt-BR')}</span>
              </div>
            </div>

            <span className={`font-bold text-sm ${item.tipo === 'receita' ? 'text-emerald-400' : 'text-red-400'}`}>
              {item.tipo === 'receita' ? '+' : '-'} R$ {item.valor.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}