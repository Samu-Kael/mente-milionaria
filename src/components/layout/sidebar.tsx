"use client";

import React, { useState } from "react";
import { LayoutDashboard, PlusCircle, Bell, Settings, X } from "lucide-react";
import { FormDespesa } from "@/components/features/despesas/form-despesa";

export function Sidebar() {
  const [showFormDespesa, setShowFormDespesa] = useState(false);

  return (
    <>
      <aside className="w-64 bg-slate-950 border-r border-slate-900 flex flex-col justify-between p-4 min-h-screen">
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-lg">
              🧠
            </div>
            <span className="font-bold text-white tracking-wide">
              Mente Milionária
            </span>
          </div>

          {/* Menus de Navegação */}
          <nav className="flex flex-col gap-2">
            {/* Dashboard */}
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/10 text-emerald-400 font-medium text-sm transition">
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </button>

            {/* BOTÃO NOVA DESPESA (Abre/Fecha o formulário) */}
            <button
              onClick={() => setShowFormDespesa(!showFormDespesa)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition ${
                showFormDespesa
                  ? "bg-rose-500/20 text-rose-400"
                  : "text-rose-500 hover:bg-rose-500/10"
              }`}
            >
              <PlusCircle className="w-5 h-5" />
              <span>Nova Despesa</span>
            </button>

            {/* Metas */}
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900/50 text-sm transition">
              <Bell className="w-5 h-5" />
              <span>Metas</span>
            </button>

            {/* Configurações */}
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900/50 text-sm transition">
              <Settings className="w-5 h-5" />
              <span>Configurações</span>
            </button>
          </nav>
        </div>

        {/* Card do Usuário no rodapé da Sidebar */}
        <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-900 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
            U
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white">Usuário Pro</span>
            <span className="text-[10px] text-slate-500">Mente Milionária</span>
          </div>
        </div>
      </aside>

      {/* Painel Flutuante Lateral da Nova Despesa */}
      {showFormDespesa && (
        <div className="fixed inset-y-0 left-64 z-50 w-96 bg-slate-950/95 border-r border-slate-800 backdrop-blur-md p-6 shadow-2xl transition-all duration-300 flex flex-col overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <PlusCircle className="w-5 h-5 text-rose-500" />
              Nova Despesa
            </h2>
            <button
              onClick={() => setShowFormDespesa(false)}
              className="text-slate-400 hover:text-white transition p-1.5 rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <FormDespesa categorias={[]} />
        </div>
      )}
    </>
  );
}