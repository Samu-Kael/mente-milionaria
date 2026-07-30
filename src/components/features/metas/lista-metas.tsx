'use client';

import { useMetas } from '@/hooks/metas/use-metas';

export function ListaMetas() {
  const { metas, isLoading, handleDeleteMeta } = useMetas();

  if (isLoading) {
    return <p className="text-zinc-400 text-sm">Carregando metas...</p>;
  }

  if (metas.length === 0) {
    return <p className="text-zinc-500 text-sm p-4 bg-zinc-900 rounded-lg">Nenhuma meta cadastrada ainda.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {metas.map((meta) => {
        const percentual = Math.min(
          Math.round((meta.valorAtual / meta.valorAlvo) * 100),
          100
        );

        return (
          <div key={meta.id} className="bg-zinc-900 border border-zinc-800 p-5 rounded-lg space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-white text-lg">{meta.titulo}</h3>
                <p className="text-xs text-zinc-400">
                  Prazo: {new Date(meta.prazo).toLocaleDateString('pt-BR')}
                </p>
              </div>
              <button 
                onClick={() => handleDeleteMeta(meta.id)}
                className="text-xs text-red-400 hover:text-red-300 transition-colors"
              >
                Excluir
              </button>
            </div>

            {/* Barra de Progresso */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-zinc-400">Progresso</span>
                <span className="text-blue-400">{percentual}%</span>
              </div>
              <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 transition-all duration-300" 
                  style={{ width: `${percentual}%` }}
                />
              </div>
            </div>

            <div className="flex justify-between text-sm pt-2 border-t border-zinc-800/60">
              <span className="text-zinc-400">
                Acumulado: <strong className="text-emerald-400">R$ {meta.valorAtual.toFixed(2)}</strong>
              </span>
              <span className="text-zinc-400">
                Meta: <strong className="text-white">R$ {meta.valorAlvo.toFixed(2)}</strong>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}