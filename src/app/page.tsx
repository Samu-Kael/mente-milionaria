"use client";

import { useState } from "react";

// Layout
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

// Features / Dashboard
import { ResumoCards } from "@/components/features/dashboard/resumo-cards";
import { InsightCard } from "@/components/features/dashboard/insight-card";
import { RitmoGastos } from "@/components/features/dashboard/ritmo-gastos";
import { PrincipaisCategorias } from "@/components/features/dashboard/principais-categorias";

// UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  const [autenticado, setAutenticado] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [usuario, setUsuario] = useState({ nome: "", email: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const nomeBase = email.split("@")[0];
    const nomeFormatado = nomeBase.charAt(0).toUpperCase() + nomeBase.slice(1);

    setUsuario({ nome: nomeFormatado, email: email });
    setAutenticado(true);
  };

  // 1. Tela de Login
  if (!autenticado) {
    return (
      <main className="flex min-h-screen w-full items-center justify-center bg-[#070708] p-4 font-sans">
        <div className="w-full max-w-md p-8 bg-[#0b0e14] border border-[#161b26] rounded-2xl shadow-2xl space-y-6">
          <div className="space-y-2 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-2xl mb-2">
              🧠
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Mente Milionária
            </h1>
            <p className="text-xs text-zinc-400">
              Entre com suas credenciais para acessar o painel
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-300">E-mail</label>
              <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-[#070708] border-[#161b26] text-white focus:border-[#10b981]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-300">Senha</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                className="bg-[#070708] border-[#161b26] text-white focus:border-[#10b981]"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#10b981] hover:bg-[#059669] text-black font-bold py-2.5 rounded-xl transition-all mt-2"
            >
              Entrar
            </Button>
          </form>
        </div>
      </main>
    );
  }

  // 2. Tela Dashboard
  return (
    <div className="flex min-h-screen bg-[#070708] text-white font-sans">
      <Sidebar usuario={usuario} />

      <div className="flex-1 flex flex-col p-6 space-y-6 overflow-y-auto">
        <Header usuario={{ nome: usuario.nome || "Usuário Master", status: "Premium" }} />

        <main className="max-w-6xl w-full mx-auto space-y-6">
          <ResumoCards saldo={770.0} entradas={2412.8} saidas={1642.8} />

          <InsightCard
            maiorCategoria="Viagens"
            valorMaiorCategoria={1000}
            gastoTotalMes={1643}
            variacaoPorcentagem={17660}
          />

          <RitmoGastos />

          <PrincipaisCategorias />
        </main>
      </div>
    </div>
  );
}