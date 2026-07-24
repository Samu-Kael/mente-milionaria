import type { Transacao } from '@/shared/types/domain/financeiro';
import { formatarMoeda } from '@/shared/utils/formatters';

interface TransacoesRecentesProps {
  transacoes?: Transacao[];
}

export function TransacoesRecentes({ transacoes = [] }: TransacoesRecentesProps) {
  const formatarData = (dataStr: string) => {
    if (!dataStr) return '';
    const partes = dataStr.split('-');
    return partes.length === 3 ? `${partes[2]}/${partes[1]}/${partes[0]}` : dataStr;
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-sm space-y-4">
      <div>
        <h2 className="text-lg font-bold text-zinc-100">Transações Recentes</h2>
        <p className="text-xs text-zinc-400">Últimas movimentações financeiras</p>
      </div>

      {transacoes.length === 0 ? (
        <div className="rounded-xl border border-dashed border-zinc-700 bg-zinc-950/60 p-6 text-sm text-zinc-400">
          Nenhuma transação cadastrada ainda.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 text-xs uppercase tracking-wider">
                <th className="pb-3 font-medium">Descrição</th>
                <th className="pb-3 font-medium">Categoria</th>
                <th className="pb-3 font-medium">Data</th>
                <th className="pb-3 font-medium text-right">Valor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {transacoes.map((item) => (
                <tr key={item.id} className="hover:bg-zinc-800/40 transition-colors">
                  <td className="py-4 text-zinc-200 font-medium">{item.descricao}</td>
                  <td className="py-4">
                    <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700/60">
                      {item.categoria}
                    </span>
                  </td>
                  <td className="py-4 text-zinc-400 text-xs">{formatarData(item.data)}</td>
                  <td
                    className={`py-4 text-right font-semibold ${
                      item.tipo === 'RECEITA' ? 'text-emerald-400' : 'text-rose-400'
                    }`}
                  >
                    {item.tipo === 'RECEITA' ? '+' : '-'} {formatarMoeda(item.valor)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TransacoesRecentes;
