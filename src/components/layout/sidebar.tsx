'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Target, Settings, LogOut } from 'lucide-react';

const menuItens = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/metas', label: 'Metas', icon: Target },
  { href: '/configuracoes', label: 'Configurações', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-6 flex flex-col justify-between min-h-screen">
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl font-bold">
            🧠
          </div>
          <div>
            <h2 className="text-sm font-bold text-zinc-100">Mente Milionária</h2>
            <p className="text-[10px] text-zinc-500">Finanças Pessoais</p>
          </div>
        </div>

        <nav className="space-y-1.5">
          {menuItens.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <Link
  href="/" 
  className="flex items-center gap-3 px-4 py-3..."
>
        <LogOut className="w-4 h-4" />
        Sair
      </Link>
    </aside>
  );
}