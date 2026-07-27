'use client';

import { useState } from 'react';
import { criarTransacao } from '@/app/actions/transacoes';
import { Plus, X } from 'lucide-react';

export function ModalNovaTransacao() {
  const [aberto, setAberto] = useState(false);
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCarregando(true);
    const formData = new FormData(e.currentTarget);
    try {
      await criarTransacao(formData);
      setAberto(false);
    } catch (err) {
      alert('Erro ao salvar transação');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setAberto(true)}
        className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs rounded-xl transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
      >
        <Plus className="w-4 h-4" /> Nova Transação
      </button>

      {aberto && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-md p-6 space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <h3 className="text-lg font-bold text-zinc-100">Nova Transação</h3>
              <button
                onClick={() => setAberto(false)}
                className="text-zinc-400 hover:text-zinc-100 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-zinc-300">Descrição</label>
                <input
                  name="descricao"
                  required
                  placeholder="Ex: Salário, Mercado..."
                  className="w-full mt-1 px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-zinc-100"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-zinc-300">Valor (R$)</label>
                  <input
                    name="valor"
                    type="number"
                    step="0.01"
                    required
                    placeholder="0.00"
                    className="w-full mt-1 px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-zinc-100"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-zinc-300">Tipo</label>
                  <select
                    name="tipo"
                    className="w-full mt-1 px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-zinc-100"
                  >
                    <option value="RECEITA">Entrada (+)</option>
                    <option value="DESPESA">Saída (-)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300">Categoria</label>
                <input
                  name="categoria"
                  required
                  placeholder="Ex: Alimentação, Renda, Moradia..."
                  className="w-full mt-1 px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-zinc-100"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300">Data</label>
                <input
                  name="data"
                  type="date"
                  defaultValue={new Date().toISOString().split('T')[0]}
                  className="w-full mt-1 px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-zinc-100"
                />
              </div>

              <button
                type="submit"
                disabled={carregando}
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/20 disabled:opacity-50"
              >
                {carregando ? 'Salvando...' : 'Adicionar Movimentação'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}