import { buscarMetas, criarMeta } from '@/app/actions/metas';
import { Target, Plus } from 'lucide-react';

export default async function MetasPage() {
  const metas = await buscarMetas();

  return (
    <main className="p-6 md:p-10 space-y-8">
      <header className="border-b border-zinc-800 pb-6">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-100 flex items-center gap-2">
          <Target className="w-6 h-6 text-emerald-400" /> Metas Financeiras
        </h1>
        <p className="text-xs text-zinc-400">
          Defina e acompanhe o progresso dos seus objetivos de longo prazo.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Formulário para Nova Meta */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 space-y-4">
          <h3 className="text-base font-bold text-zinc-100 flex items-center gap-2">
            <Plus className="w-4 h-4 text-emerald-400" /> Criar Nova Meta
          </h3>

          <form action={criarMeta} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-zinc-300">Título da Meta</label>
              <input
                name="titulo"
                required
                placeholder="Ex: Viagem de Fim de Ano"
                className="w-full mt-1 px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-zinc-100 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-300">Valor Alvo (R$)</label>
              <input
                name="valorAlvo"
                type="number"
                step="0.01"
                required
                placeholder="10000.00"
                className="w-full mt-1 px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-zinc-100 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-300">Prazo Estimado</label>
              <input
                name="prazo"
                type="date"
                required
                className="w-full mt-1 px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-zinc-100 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl text-sm transition-all"
            >
              Salvar Meta
            </button>
          </form>
        </div>

        {/* Lista de Metas */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-base font-bold text-zinc-100">Suas Metas Ativas</h3>

          {metas.length === 0 ? (
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center text-zinc-500 text-sm">
              Nenhuma meta cadastrada ainda. Crie sua primeira meta ao lado!
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {metas.map((meta) => {
                const progresso = Math.min(
                  Math.round((meta.valorAtual / meta.valorAlvo) * 100),
                  100
                );
                return (
                  <div
                    key={meta.id}
                    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-3"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-zinc-100">{meta.titulo}</h4>
                      <span className="text-xs text-emerald-400 font-bold">{progresso}%</span>
                    </div>

                    <div className="w-full bg-zinc-950 rounded-full h-2 overflow-hidden border border-zinc-800">
                      <div
                        className="bg-emerald-500 h-full transition-all duration-500"
                        style={{ width: `${progresso}%` }}
                      />
                    </div>

                    <div className="flex justify-between text-xs text-zinc-400">
                      <span>R$ {meta.valorAtual.toLocaleString('pt-BR')}</span>
                      <span>Alvo: R$ {meta.valorAlvo.toLocaleString('pt-BR')}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}