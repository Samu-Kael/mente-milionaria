import { Settings } from 'lucide-react';

export default function ConfiguracoesPage() {
  return (
    <main className="p-6 md:p-10 space-y-8">
      <header className="border-b border-zinc-800 pb-6">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-100 flex items-center gap-2">
          <Settings className="w-6 h-6 text-emerald-400" /> Configurações do Perfil
        </h1>
        <p className="text-xs text-zinc-400">Gerencie preferências da conta e sistema.</p>
      </header>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 max-w-xl space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-zinc-200">Preferências Gerais</h3>
          <div className="flex items-center justify-between py-2 border-b border-zinc-800">
            <span className="text-xs text-zinc-400">Moeda Padrão</span>
            <span className="text-xs font-semibold text-emerald-400">BRL (R$)</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-zinc-800">
            <span className="text-xs text-zinc-400">Tema do Sistema</span>
            <span className="text-xs font-semibold text-zinc-300">Escuro (Dark Mode)</span>
          </div>
        </div>
      </div>
    </main>
  );
}