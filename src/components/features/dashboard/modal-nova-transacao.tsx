'use client';

import { useState } from 'react';
import { createTransacaoAction } from '@/app/actions/transacoes';

const tipos = ['RECEITA', 'DESPESA'] as const;

export function ModalNovaTransacao() {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setAberto(true)}
        className="inline-flex items-center rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
      >
        Nova transação
      </button>

      {aberto ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 p-4">
          <div className="w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold text-zinc-100">Nova transação</h2>
                <p className="text-xs text-zinc-400">Cadastre um fluxo de entrada ou saída.</p>
              </div>
              <button
                type="button"
                onClick={() => setAberto(false)}
                className="rounded-lg border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300"
              >
                Fechar
              </button>
            </div>

            <form action={createTransacaoAction} className="space-y-4">
              <input type="hidden" name="usuarioId" value="1" />

              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm text-zinc-300">
                  <span>Descrição</span>
                  <input
                    name="descricao"
                    required
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-zinc-100 outline-none focus:border-emerald-500"
                    placeholder="Ex.: Salário, Mercado..."
                  />
                </label>

                <label className="space-y-2 text-sm text-zinc-300">
                  <span>Categoria</span>
                  <input
                    name="categoria"
                    required
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-zinc-100 outline-none focus:border-emerald-500"
                    placeholder="Ex.: Renda"
                  />
                </label>

                <label className="space-y-2 text-sm text-zinc-300">
                  <span>Valor</span>
                  <input
                    name="valor"
                    type="number"
                    min="0.01"
                    step="0.01"
                    required
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-zinc-100 outline-none focus:border-emerald-500"
                    placeholder="150.00"
                  />
                </label>

                <label className="space-y-2 text-sm text-zinc-300">
                  <span>Tipo</span>
                  <select
                    name="tipo"
                    defaultValue="DESPESA"
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-zinc-100 outline-none focus:border-emerald-500"
                  >
                    {tipos.map((tipo) => (
                      <option key={tipo} value={tipo}>
                        {tipo}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block space-y-2 text-sm text-zinc-300">
                <span>Data</span>
                <input
                  name="data"
                  type="date"
                  required
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-zinc-100 outline-none focus:border-emerald-500"
                />
              </label>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setAberto(false)}
                  className="rounded-xl border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  onClick={() => setAberto(false)}
                  className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-bold text-zinc-950"
                >
                  Salvar transação
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ModalNovaTransacao;
