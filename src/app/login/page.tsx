'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && senha) {
      // Aqui, futuramente, entrará a validação de banco de dados
      // Por enquanto, apenas redirecionamos para o Dashboard (raiz do site)
      router.push('/');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
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