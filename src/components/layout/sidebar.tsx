"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Target, Settings, Brain } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Metas", href: "/metas", icon: Target },
  { name: "Configurações", href: "/configuracoes", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#0b0e14] border-r border-[#161b26] flex flex-col justify-between h-screen sticky top-0 p-4 shrink-0">
      <div className="space-y-8">
        {/* Topo: Logo & Nome */}
        <div className="flex items-center gap-3 px-2 pt-2">
          <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-white text-base leading-tight">MM FLOATS</h1>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-medium">
              Mente Milionária
            </span>
          </div>
        </div>

        {/* Links de Navegação */}
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#161b26] text-emerald-400 font-semibold"
                    : "text-zinc-400 hover:text-white hover:bg-[#161b26]/50"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-emerald-400" : "text-zinc-400"}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Rodapé: Perfil do Usuário */}
      <div className="pt-4 border-t border-[#161b26] flex items-center gap-3 px-2">
        <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
          U
        </div>
        <div className="overflow-hidden">
          <p className="text-sm font-semibold text-white truncate">Usuário Pro</p>
          <p className="text-xs text-zinc-500 truncate">Mente Milionária</p>
        </div>
      </div>
    </aside>
  );
}