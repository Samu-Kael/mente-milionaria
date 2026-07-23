'use client';

import { useState } from 'react';

// Imports com chaves { } previnem o erro "Attempted import error"
import { ResumoCards } from '@/components/features/dashboard/resumo-cards';
import { TransacoesRecentes } from '@/components/features/dashboard/transacoes-recentes';
import { RitmoGastos } from '@/components/features/dashboard/ritmo-gastos';

const listaTransacoes = [
  {
    id: '1',
    descricao: 'Salário',
    valor: 5000,
    tipo: 'RECEITA' as const,
    categoria: 'Renda',
    data: '2026-07-01',
  },
  {
    id: '2',
    descricao: 'Supermercado',
    valor: 450,
    tipo: 'DESPESA' as const,
    categoria: 'Alimentação',
    data: '2026-07-05',
  },
  {
    id: '3',
    descricao: 'Conta de Luz',
    valor: 180,
    tipo: 'DESPESA' as const,
    categoria: 'Moradia',
    data: '2026-07-10',
  },
];

export default function Page() {
  const [estaLogado, setEstaLogado] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const totalEntradas = listaTransacoes
    .filter((t) => t.tipo === 'RECEITA')
    .reduce((acc, curr) => acc + curr.valor, 0);

  const totalSaidas = listaTransacoes
    .filter((t) => t.tipo === 'DESPESA')
    .reduce((acc, curr) => acc + curr.valor, 0);

  const resumo = {
    saldoTotal: totalEntradas - totalSaidas,
    totalEntradas,
    totalSaidas,
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && senha) {
      setEstaLogado(true);
    }
  };

  // 1. TELA DE LOGIN (Inalterada)
  if (!estaLogado) {
    return (
      <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 text-zinc-100">
        <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-2 text-2xl">
              🧠
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-100">
              Mente Milionária
            </h1>
            <p className="text-xs text-zinc-400">
              Organizador de Finanças Pessoal
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-300" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seuemail@exemplo.com"
                className="w-full px-4 py-3 text-sm bg-zinc-950 border border-zinc-800 rounded-xl focus:outline-none focus:border-emerald-500 text-zinc-100 placeholder-zinc-500 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-300" htmlFor="senha">
                Senha
              </label>
              <input
                id="senha"
                type="password"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 text-sm bg-zinc-950 border border-zinc-800 rounded-xl focus:outline-none focus:border-emerald-500 text-zinc-100 placeholder-zinc-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
            >
              Entrar
            </button>
          </form>
        </div>
      </main>
    );
  }

  // 2. SEGUNDA TELA (Dashboard corrigida)
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-10 space-y-8">
      <header className="flex items-center justify-between border-b border-zinc-800 pb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-100 flex items-center gap-2">
            🧠 Organizador de Finanças
          </h1>
          <p className="text-xs text-zinc-400">
            Mente Milionária - Acompanhe o saldo na conta, entradas, saídas e movimentações.
          </p>
        </div>

        <button
          onClick={() => setEstaLogado(false)}
          type="button"
          className="text-xs px-4 py-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 rounded-xl text-zinc-300 transition-colors"
        >
          Sair
        </button>
      </header>

      <ResumoCards resumo={resumo} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <TransacoesRecentes transacoes={listaTransacoes} />
        </div>
        <div>
          <RitmoGastos />
        </div>
      </div>
    </main>
  );
}