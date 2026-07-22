"use client";

import { LayoutDashboard, PlusCircle, Bell, Settings } from "lucide-react";

export function Sidebar({ usuario }: any) {
  return (
    <aside className="w-64 bg-black border-r border-zinc-900 flex flex-col p-4 min-h-screen">
      <div className="flex items-center gap-2 mb-10 px-2">
         <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center text-pink-500">🧠</div>
         <span className="font-bold text-white">Mente Milionária</span>
      </div>

      <nav className="flex flex-col gap-3 flex-1">
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/10 text-emerald-500 font-bold text-sm">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </button>

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-rose-500 hover:bg-rose-500/5 font-bold text-sm">
          <PlusCircle size={20} />
          <span>Nova Despesa</span>
        </button>

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-500 hover:text-white transition font-bold text-sm">
          <Bell size={20} />
          <span>Metas</span>
        </button>

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-500 hover:text-white transition font-bold text-sm">
          <Settings size={20} />
          <span>Configurações</span>
        </button>
      </nav>
      
      {/* Usuário no Rodapé da Sidebar */}
      <div className="mt-auto p-3 bg-zinc-900/40 rounded-xl flex items-center gap-3 border border-zinc-900">
         <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold text-xs">
           {usuario?.nome?.charAt(0) || "U"}
         </div>
         <div className="flex flex-col">
           <span className="text-xs font-bold text-white">{usuario?.nome || "Verinhas"}</span>
           <span className="text-[10px] text-zinc-500">{usuario?.email || "verinhas@email.com"}</span>
         </div>
      </div>
    </aside>
  );
}